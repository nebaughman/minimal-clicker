# Minimal Clicker

Maybe almost the most minimal clicker game ever - produce as many units as you can!

[**&rarrtl; Play Right Now &rarrtl;**](https://nebaughman.github.io/minimal-clicker)

## Overview

* **What:** The purpose of this project is to experiment with a Service Worker in a vue-cli project (with TypeScript).

* **How:** See `Engine.ts`, which acts as a proxy to the service worker `Engine.worker.js`. The application can call methods of `Engine.ts` to post commands to the worker. The worker posts state updates to `Engine.ts`, which updates application State.

* **Why:** The service worker operates in an independent thread from the application's JavaScript thread. The service worker can perform computations without degrading the app's responsiveness. 

> Granted, this is a bit over-engineered for this example...

## Technologies

* [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
* [Vue-Cli](https://cli.vuejs.org/) and [Vue.js](https://vuejs.org/)
* [TypeScript](https://www.typescriptlang.org/)

## Development

- `yarn install`: set up project
- `yarn serve`: serve on localhost with hot-reloading
- `yarn build`: build production distribution

Aside from standard vue-cli project, added the following for service worker support:

* `yarn add --dev worker-loader`

Also notice that I tried several configurations in `vue.config.js` to allow `*.worker.js` files to be loaded by worker-loader during the webpack process. None of this worked. The answer was to simply load workers explicitly: 

```
import Worker from "worker-loader!./Engine.worker.js"
```

## License

[MIT License](LICENSE.txt) &copy; Nathaniel Baughman

_Share and enjoy :)_
