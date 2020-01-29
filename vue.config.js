module.exports = {
  //parallel: true,

  /*
   * worker-loader loading didn't work like this.
   * Engine.ts explicitly invokes worker-loader:
   *   import Worker from "worker-loader!./Engine.worker.js"
   */

  /*
  chainWebpack: (config) => {
    config.module.rule('worker')
      .test(/\.worker\.js$/i)
      .use('worker-loader')
      .loader('worker-loader');
  },
  */

  /*
  chainWebpack: (config) => {
    config.module
      .rule('worker')
      .test(/\.worker\.js$/)
      .use('worker-loader')
      .loader('worker-loader')
      .end()
  }
  */
}