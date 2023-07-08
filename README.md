# Angular Tutorials - First-App

https://angular.io/tutorial/first-app

## :hammer: Status

> :construction: Ongoing :wrench:

## App Interface

### :iphone: Planned Design

<p align="center"><img alt="Planned design" title="Angular Homes Planned Design" src="./.github/homes-app-landing-page.png" /></p>

<!--### :tada: Final Result

<p align="center"><img alt="Final result" title="Angular Homes Final Interface" src="./.github/homes-app-landing-page-final.png" /></p>-->

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## New concepts learned in this tutorial

### Angular Interface

Angular can help us create TypeScript interfaces:

https://angular.io/tutorial/first-app/first-app-lesson-04#first-angular-app-lesson-4---creating-an-interface

```bash
ng generate interface <interface_name>
```

Example of generated interface:

```typescript
/* src/app/housing-location.ts */
export interface HousingLocation {
}
```
