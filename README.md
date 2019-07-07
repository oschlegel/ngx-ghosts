# NgxGhosts

**Table of Contents:**

- [NgxGhosts](#NgxGhosts)
  - [Installation](#Installation)
  - [Components](#Components)
    - [Ghost Text Directive](#Ghost-Text-Directive)
  - [Customization](#Customization)
    - [Custom Ghosts Configuration](#Custom-Ghosts-Configuration)
    - [Customzation by SCSS Variables](#Customzation-by-SCSS-Variables)

## Installation

First you need to install the npm module:

```bash
npm install ngx-ghosts or yarn install ngx-ghosts
```

Import the `NgxGhostsModule` in your `AppModule` like this:

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGhostsModule } from 'ngx-ghosts';


@NgModule({
    imports: [
        BrowserModule,
        NgxGhostsModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

Import the `NgxGhostsModule` in your shared, lazy, or other modules like this:

```javascript
@NgModule({
    exports: [
        CommonModule,
        NgxGhostsModule
    ]
})
export class SharedModule { }
```

Now you are ready to add the first ghosts to your application.

## Components

### Ghost Text Directive
With the `GhostTextDirective` you can add a ghost to a single line of text, or parts of a text line. In the example below the "description" requested from a server and a qhost is shown while the request is pending.

```markup
<div class="description-text">
  <span *ghostText="descriptionLoading">{{description}}</span>
</div>
```

Parameters:

| Name       | Description                                      | Type             | Default |
| ---------- | ------------------------------------------------ | ---------------- | ------- |
| ghostText  | Toggle between ghost and content                 | boolean          | false   |
| length     | Length of the ghost                              | number or "fill" | "fill"  |
| ghostClass | Custom class which is added to the ghost element | string           |         |

## Customization

### Custom Ghosts Configuration

TODO: Describe

### Customzation by SCSS Variables

TODO: Describe
