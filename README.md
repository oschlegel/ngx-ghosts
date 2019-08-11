# NgxGhosts

**Table of Contents:**

- [NgxGhosts](#ngxghosts)
  - [Installation](#installation)
  - [Components](#components)
    - [Ghost Text Directive](#ghost-text-directive)
  - [Customization](#customization)
    - [Custom Configuration](#custom-configuration)
    - [Custom theme](#custom-theme)

[Live Demo](https://stackblitz.com/github/oschlegel/ngx-ghosts-demo)

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

| Name              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Type                   | Default        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- | -------------- |
| animationStrategy | Decide how the animation of your ghosts should behave. You can choose from the following variants: <ul><li>EqualStartAndEnd - All animations start and end at the same time, speed depends on the ghosts length</li><li>EqualStartAndSpeed - All animations start at the same time and have the same speed</li><li>OneAnimation - This looks like there would be only one ghost moving across the whole page</li><li>None - No animation is shown at all</li></ul> | GhostAnimationStrategy | "OneAnimation" |

### Custom theme

There are a whole range of variables that are used to style the ghosts, any variable can be overwritten by providing a custom theme. The Following properties are supported for the theme:

| Name                          | Description                              | Default                                                                                                                                                         |
| ----------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ghost-base-color              | Background color of ghosts               | #e3e4e4                                                                                                                                                         |
| ghost-glow-color              | Color of the ghost's "glow"              | #f5f5f5                                                                                                                                                         |
| ghost-glow-animation-duration | Duration of the ghost animation          | 2000ms                                                                                                                                                          |
| ghost-glow-animation-function | Animation funtion of the ghost animation | linear                                                                                                                                                          |
| ghost-glow                    | Background of ghost's "glow" element     | `linear-gradient(to right, transparentize(ghost-base-color, 0.999) 0%, transparentize(ghost-glow-color, 0.3) 25%, transparentize(ghost-base-color, 0.999) 50%)` |
| ghost-font-top-spacing        | Represents the top gap of the font       | 0.15em                                                                                                                                                          |
| ghost-font-bottom-spacing     | Represents the bottom gap of the font    | 0.2em                                                                                                                                                           |

A custom theme can be created like this:

```SASS
@import '../../../node_modules/ngx-ghosts/theme.scss';

.dark-theme {
  @include ngx-ghosts-theme(
    (
      ghost-base-color: #000,
      ghost-glow:
        linear-gradient(
          to right,
          transparentize(#000, 0.999) 0%,
          transparentize(#313639, 0.3) 25%,
          transparentize(#000, 0.999) 50%
        )
    )
  );
}
```
