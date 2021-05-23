<div align="center">
  <p align="center">
    <img src="./src/assets/deutsche-bank-logo.svg" alt="Deutsche Bank" width="750px" />
  </p>
</div>

# Albany Beck for Deutsche Bank, Tech challenge

> Developed by: **Antonio Russo** <br/>
> email: [antonio@beautifulinteractions.com](mailto:antonio@beautifulinteractions.com) <br/>
> github: https://github.com/antonioru

## Prerequisites

This project requires [Node](http://nodejs.org/) (at least version 14) and [NPM](https://npmjs.org/) (at least version 6).
To make sure you have them available on your machine, try running the following command:

```shell
$ node --version
v14.6.0

$ npm --version
6.14.0
```

Make sure you have installed [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## Table of contents

- [Deutsche Bank Tech Challenge](#albany-beck-for-deutsche-bank-tech-challenge)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Usage](#usage)
    - [Development server](#serving-the-app)
    - [Build](#build)
    - [E2E test](#running-end-to-end-tests)
  - [Folder structure](#folder-structure)
  - [Architecture notes](#architecture-notes)
    - [NgRx](#ngrx)
    - [SCSS](#scss)
    - [Material UI](#material)
  - [Author](#author)


## Usage

### Development server

To run the app in the development mode, type;
```shell
$ npm start
```

Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any linting or compiling errors in the console.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Folder structure

The `app` folder has been divided into "module" to encourage scalability and maintainability.

* **app/core**: The core module contains singleton services, universal/atomic components and other single instanced features. 
  It exports the necessary components/features to run the application.
* **app/shared**: The shared module contains shared components, pipes, filters and services, it should be imported in any other module 
  that makes use of these items. It also contains shared types and common utility functions.
* **app/modules**: contains all the other modules, generally speaking a module should be a page of the application or a complex feature, such as the authentication
* **src/store**: contains the application state manager files: reducer, side-effects, actions...

The `assets` folder contains the application assets such as images or json files.
The `environments` folder contains the Angular environments, this has been created by angular CLI.


## Architecture notes

### NgRx

I chose to keep the countries' information into the store as well as the business logic of 
caching the information (see the `countries.effects.ts` file). 

The components are not "aware" of the caching system, they require the data by simply using the
selector exported from the `countries` folder.
The store retrieves the data through a GET request only if they are not already there.

The `country` state is defined as following:

```typescript
export enum AvailableRegions {
  asia = 'asia',
  europe = 'europe',
}

export interface CountriesState {
  didInvalidate: boolean;
  isFetching: boolean;
  data?: { [key in keyof typeof AvailableRegions]?: Country[] };
  currentRegion?: AvailableRegions,
  error?: string;
}
```

resulting into an object like this one: 

```javascript
const countriesState = {
  didInvalidate: false, 
  isFetching: false,
  currentRegion: 'europe',
  data: {
    europe: [ /*... */ ],
    asia: [ /*... */ ],
  },
  error: undefined,
}
```

I chose to have the selected region and country as part of the application routes as it feels 
more natural for the user and enables a one-way dataflow architecture.

Therefore, I preferred to index the countries into the store by region 
rather than by "numericCode" (as per the NgRx entities) as it allows the 
components to easily and fast access the available regions.

A small downside of this approach is that the detail view page is "forced" to cycle 
over the available countries to find the selected one. However, I think this strategy 
is the best one on the long run as the `countries` array length is round ~50 elements, 
so I don't see any performance issue (assuming this application should run on computer/mobile devices).

### SCSS

I've used standard scss format to keep the application styling as simple as possible.
In addition to that, scss together with a good naming-convention, allows an easy to override components style.

This styles encapsulation is provided by Angular out of the box.


### Material

I chose to install material ui as it is one of the most used components library in Angular applications.
Writing all the components from scratch seemed a little overkilling in this context.

## Author

> Developed by: **Antonio Russo** <br/>
> email: [antonio@beautifulinteractions.com](mailto:antonio@beautifulinteractions.com) <br/>
> github: https://github.com/antonioru
