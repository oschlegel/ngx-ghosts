# NgxGhosts

**Table of Contents:**

- [NgxGhosts](#ngxghosts)
  - [Installation](#installation)
  - [Components](#components)
    - [Ghost Box Directive](#ghost-box-directive)
    - [Ghost Image](#ghost-image)
    - [Ghost Text Directive](#ghost-text-directive)
    - [Ghost Text Block Directive](#ghost-text-block-directive)
    - [Ghost](#ghost)
  - [Customization](#customization)
    - [Custom Configuration](#custom-configuration)
    - [Custom theme](#custom-theme)

[Live Demo](https://peaceful-lamarr-3e8d42.netlify.app/)

## Installation

First you need to install the npm module:

```bash
npm install ngx-ghosts or yarn install ngx-ghosts
```

Import the `NgxGhostsModule` in modules where you want to use ghosts like this:

```javascript
@NgModule({
    exports: [
        CommonModule,
        NgxGhostsModule
    ]
})
export class AppModule { }
```

Load the ngx-ghosts theme by adding it to the angular.json like this:

```json
...
"build": {
  "options": {
    "styles": [
        "./node_modules/ngx-ghosts/theme.scss",
        "projects/ngx-ghosts-app/src/styles.scss"
      ]
  }
}
```

Or by importing the theme into your global styles like this:

```SASS
@import '../../../node_modules/ngx-ghosts/theme.scss';
```

Now you are ready to add the first ghosts to your application.

## Components

### Ghost Box Directive

You can add a ghost to any element with the `GhostBox` directive. If height and width are not defined the ghost with fill the surrounding element.

```markup
<div class="panel">
  <ng-container *ghostBox="loading">
    <div>some content</div>
  </ng-container>
</div>
```

Parameters:

| Name       | Description                                      | Type            | Default |
| ---------- | ------------------------------------------------ | --------------- | ------- |
| ghostBox   | Toggle between ghost and content                 | boolean         | false   |
| height     | Height of the ghost                              | number          |         |
| width      | Width of the ghost                               | number          |         |
| ghostClass | Custom class which is added to the ghost element | string          |         |
| state      | Emits the current state of the loader            | GhostImageState |         |

### Ghost Image

You can add a ghost to your imagesWith `GhostImageWrapper` component. To leverage image loading capabilities of ngx-ghosts you have to wrap your image element with `GhostImageWrapper` component, add `GhostImage` directive to the image element and define a ghost with `GhostImageLoader` directive. The image will be loaded as soon as the element enters the visible screen.

```markup
<ghost-image-wrapper>
  <img ghostImage [src]="..." [srcset]="..." />
  <ghost ghostImageLoader [height]="256" [width]="256"></ghost>
</ghost-image-wrapper>
```

### Ghost Text Directive

You can add a ghost to a single line of text, or parts of a text line with the `GhostText` directive. In the example below the "title" requested from a server and a server is shown while the request is pending.

```markup
<div class="title-text">
  <span *ghostText="loading; length: 23">{{title}}</span>
</div>
```

Parameters:

| Name       | Description                                      | Type             | Default |
| ---------- | ------------------------------------------------ | ---------------- | ------- |
| ghostText  | Toggle between ghost and content                 | boolean          | false   |
| length     | Length of the ghost                              | number or "fill" | "fill"  |
| ghostClass | Custom class which is added to the ghost element | string           |         |

### Ghost Text Block Directive

You can add a ghost to a multiline text with the `GhostTextBlock` directive.

```markup
<div class="description-text">
  <span *ghostTextBlock="loading; lines: [34, 50]">{{description}}</span>
</div>
```

Parameters:

| Name           | Description                                                                                      | Type                                | Default |
| -------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------- | ------- |
| ghostTextBlock | Toggle between ghost and content                                                                 | boolean                             | false   |
| lines          | Amount and length of lines. When only amount of lines is specified all lines will expand to fill | number or array of number or "fill" | []      |
| ghostClass     | Custom class which is added to the ghost element                                                 | string                              |         |

### Ghost

For special use cases where the other directives and components don't work you can us the basic `Ghost` component.

```markup
<ghost>My special content</ghost>
```

Parameters:

| Name           | Description                                      | Type    | Default |
| -------------- | ------------------------------------------------ | ------- | ------- |
| fillHorizontal | Use available horizontal space                   | boolean | false   |
| fillVertical   | Use available vertical space                     | boolean | false   |
| height         | Height of the ghost                              | number  |         |
| width          | Width of the ghost                               | number  |         |
| ghostClass     | Custom class which is added to the ghost element | string  |         |
| textGhost      | True if the ghosts represents a text element     | boolean |         |

## Customization

### Custom Configuration

One way to customize ngx-ghosts is by providing a custom configuration like this:

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGhostsModule } from 'ngx-ghosts';


@NgModule({
    imports: [
        BrowserModule,
        NgxGhostsModule.forRoot({
          animationStrategy: 'EqualStartAndEnd'
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

The configuration supports following properties:

| Name                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Type                   | Default        |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- | -------------- |
| animationStrategy              | Decide how the animation of your ghosts should behave. You can choose from the following variants: <ul><li>EqualStartAndEnd - All animations start and end at the same time, speed depends on the ghosts length</li><li>EqualStartAndSpeed - All animations start at the same time and have the same speed</li><li>OneAnimation - This looks like there would be only one ghost moving across the whole page</li><li>None - No animation is shown at all</li></ul> | GhostAnimationStrategy | "OneAnimation" |
| imageLoader.transitionDuration | Define the duration of the transition between the ghost and the loaded image in milliseconds.                                                                                                                                                                                                                                                                                                                                                                      | number                 | 500            |

### Custom theme

There are a whole range of variables that are used to style the ghosts, any variable can be overwritten by providing a custom theme. The Following properties are supported for the theme:

| Name                          | Description                              | Default |
| ----------------------------- | ---------------------------------------- | ------- |
| ghost-base-color              | Background color of ghosts               | #e3e4e4 |
| ghost-glow-color              | Color of the ghost's glow effect         | #f5f5f5 |
| ghost-glow-intensity          | Intensity of the glow effect (0 to 1)    | 0.3     |
| ghost-glow-width              | Width of the glow effect                 | 50%     |
| ghost-glow-animation-duration | Duration of the ghost animation          | 2000ms  |
| ghost-glow-animation-function | Animation funtion of the ghost animation | linear  |
| ghost-font-top-spacing        | Represents the top gap of the font       | 0.15em  |
| ghost-font-bottom-spacing     | Represents the bottom gap of the font    | 0.2em   |

A custom theme can be created like this:

```SASS
@import '../../../node_modules/ngx-ghosts/theme.scss';

.dark-theme {
  @include ngx-ghosts-theme(
    (
      ghost-base-color: #000,
      ghost-glow-color: #313639
    )
  );
}
```
