# Electron TypeScript Vue Boilerplate

Boilerplate code and project setup for an Electron desktop application.

Utilizes

* [Electron Forge](https://electronforge.io/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vue](https://vuejs.org)

## Setup

Clone this repository and run `npm install` once inside the project directory.

## Build

You can opt to build the UI and desktop application separately, but it's advised just running the main build command, as if the build commands are run out of order you may end up deleting some built files in the process.

```
npm run build
```

## Running

You can run the application from the built files (after building only, of course):

```
npm start
```

## Packaging

IF you want to test the packaged version of the application locally you can run:

```
npm run package
```

## Distributing

For now, all that's handled is a basic packaging for distribution of the executable for macOS only.

```
npm run make
```

## License

[MIT](LICENSE.md)

---

&copy; 2019 Robert Fairley