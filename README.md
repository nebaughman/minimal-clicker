# Minimal Clicker

Maybe almost the most minimal clicker game ever - produce as many units as you can!

[**Play Right Now &rarrtl;**](https://nebaughman.github.io/minimal-clicker)

## Overview

* **What:** The purpose of this project is to experiment with a Web Worker in a vue-cli project (with TypeScript).

* **How:** See `Engine.ts`, which acts as a proxy to the Web Worker `worker.js`. The application can call methods of `Engine.ts` to post commands to the worker. The worker posts state updates to `Engine.ts`, which updates application State.

* **Why:** The Web Worker operates in an independent thread from the application's JavaScript thread. The worker can perform computations without degrading the app's responsiveness. 

> Granted, this is a bit over-engineered for this example...

## Ecosystem

- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Vue-Cli](https://cli.vuejs.org/) and [Vue.js](https://vuejs.org/)
- [worker-loader](https://github.com/webpack-contrib/worker-loader)
- [TypeScript](https://www.typescriptlang.org/)
- [GitHub](https://github.com/) [Pages](https://pages.github.com/)
- [Coffee](https://www.buymeacoffee.com/nebaughman)

## Development

- `yarn install`: set up project
- `yarn serve`: serve on localhost with hot-reloading
- `yarn build`: build production distribution

Aside from standard vue-cli project, added the following for Web Worker support:

- `yarn add --dev worker-loader`

I tried several configurations in `vue.config.js` to allow `*.worker.js` files to be loaded by `worker-loader` during the webpack process. None of this worked. The answer was to simply load workers explicitly: 

```
import Worker from "worker-loader!./worker.js"
```

## Release

- `git checkout develop`
- Update `package.json` with version `X.Y.Z`
- For GitHub Pages hosting:
  - Run `yarn build` to produce `dist`
  - Remove old `docs` & move `dist` to `docs`
  - Remove `docs/js/*.map` sourcemaps (unneeded in repo)
  - In `docs` run `http-server` to see if distribution works
- `git commit -am "vX.Y.Z"`
- `git checkout master && git merge develop && git tag X.Y.Z` # no `v`
- `git push --all && git push --tags`
- `git checkout develop` # back to work

> GitHub Pages is hosting `/docs` off `master` branch.

## License

[MIT License](LICENSE.txt) &copy; Nathaniel Baughman

_Share and enjoy :)_
