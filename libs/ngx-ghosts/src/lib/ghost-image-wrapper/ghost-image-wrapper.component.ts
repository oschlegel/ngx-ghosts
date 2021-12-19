import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  OnDestroy,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, of, ReplaySubject, timer } from 'rxjs';
import {
  filter,
  map,
  pairwise,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs/operators';
import {
  NgxGhostsConfiguration,
  NGX_GHOSTS_CONFIGURATION,
} from '../ngx-ghosts-configuration';
import { GhostImageState } from './ghost-image-state';
import { GhostImageDirective } from './ghost-image.directive';

export class GhostImageMissingOrInvalidError extends Error {
  constructor() {
    super(`Provide a image element like so:
    <ghost-image-wrapper>
      <img ghostImage src="..." />
    </ghost-image-wrapper>`);
    this.name = GhostImageMissingOrInvalidError.name;
  }
}

@Component({
  selector: 'ghost-image-wrapper',
  templateUrl: './ghost-image-wrapper.component.html',
  styleUrls: ['./ghost-image-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GhostImageWrapperComponent implements AfterViewInit, OnDestroy {
  @Output() state = new EventEmitter<GhostImageState>();

  @HostBinding('class.ghost-image-wrapper') ghostImageClass = true;
  @HostBinding('style.--transition-animation-duration')
  transitionAnimationDuration = `${this.config.imageLoader.transitionDuration}ms`;

  @ContentChild(GhostImageDirective, { read: ElementRef })
  imageRef: ElementRef<HTMLImageElement>;

  imageEl: HTMLImageElement;
  imageMutationObserver: MutationObserver;
  imageSources$ = new BehaviorSubject<{ src: string; srcset: string }>({
    src: undefined,
    srcset: undefined,
  });
  isIntersecting$ = new BehaviorSubject<boolean>(false);
  destroy$ = new ReplaySubject<void>();
  state$ = new BehaviorSubject<GhostImageState>('initial');
  ghostActive$ = this.state$.pipe(
    map((state) => ['initial', 'loading', 'transitioning'].includes(state))
  );
  imageActive$ = this.state$.pipe(
    map((state) => ['loading', 'transitioning', 'loaded'].includes(state))
  );

  constructor(
    @Inject(NGX_GHOSTS_CONFIGURATION) private config: NgxGhostsConfiguration,
    private elementRef: ElementRef<HTMLElement>
  ) {}

  ngAfterViewInit(): void {
    this.initializeIntersectionObserver();
    this.initializeImage();

    // Handle changes of src attributes
    this.imageSources$
      .pipe(
        filter(({ src, srcset }) => !!src || !!srcset),
        tap(() => {
          if (!this.isIntersecting$.value) {
            this.updateImageElSources(undefined, undefined);
          }
        }),
        switchMap(({ src, srcset }) => {
          if (this.isIntersecting$.value) {
            return of();
          }
          return this.isIntersecting$.pipe(
            filter((isIntersecting) => isIntersecting),
            take(1),
            tap(() => this.updateImageElSources(src, srcset))
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.state$.next('loading'));

    // Handle onload event of image
    this.imageEl.onload = () => this.state$.next('transitioning');

    // Handle changes of state
    this.state$
      .pipe(startWith(null), pairwise(), takeUntil(this.destroy$))
      .subscribe(([oldState, newState]) => {
        // Update class of host element basded on state
        this.updateHostElClass(oldState, newState);

        // Update state from transitioning to loaded after animation completes
        if (newState === 'transitioning') {
          timer(this.config.imageLoader.transitionDuration).subscribe(() =>
            this.state$.next('loaded')
          );
        }

        this.state.emit(newState);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeImage(): void {
    if (
      !this.imageRef ||
      !(this.imageRef.nativeElement instanceof HTMLImageElement)
    ) {
      throw new GhostImageMissingOrInvalidError();
    }

    this.imageEl = this.imageRef.nativeElement;

    if (this.imageEl.src || this.imageEl.srcset) {
      this.imageSources$.next({
        src: this.imageEl.src,
        srcset: this.imageEl.srcset,
      });
    }

    this.imageMutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.attributeName === 'src' ||
          mutation.attributeName === 'srcset'
        ) {
          this.imageSources$.next({
            src: this.imageEl.src,
            srcset: this.imageEl.srcset,
          });
        }
      });
    });

    this.imageMutationObserver.observe(this.imageEl, { attributes: true });
  }

  private initializeIntersectionObserver(): void {
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      this.isIntersecting$.next(entry.isIntersecting);
    });
    intersectionObserver.observe(this.elementRef.nativeElement);
  }

  private updateImageElSources(src: string, srcset: string): void {
    this.imageMutationObserver.disconnect();

    if (src) {
      this.imageEl.setAttribute('src', src);
    } else {
      this.imageEl.removeAttribute('src');
    }

    if (srcset) {
      this.imageEl.setAttribute('srcset', srcset);
    } else {
      this.imageEl.removeAttribute('srcset');
    }

    this.imageMutationObserver.observe(this.imageEl, { attributes: true });
  }

  private updateHostElClass(
    oldState: GhostImageState,
    newState: GhostImageState
  ) {
    if (!oldState) {
      this.elementRef.nativeElement.classList.add(
        `ghost-image-wrapper--${newState}`
      );
    }
    this.elementRef.nativeElement.classList.replace(
      `ghost-image-wrapper--${oldState}`,
      `ghost-image-wrapper--${newState}`
    );
  }
}
