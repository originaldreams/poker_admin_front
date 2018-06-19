
module.exports = {

    devServer: {
      host: '0.0.0.0',
      port: 8013,
      proxy: {
        '/api': {
          target: '127.0.0.1:8080',
          ws: true,
          changeOrigin: true
        },
      }
    }
  }
  