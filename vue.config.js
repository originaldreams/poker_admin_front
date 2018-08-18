
module.exports = {

    devServer: {
      host: '0.0.0.0',
      port: 8013,
        proxy: {
            '/api': {
                target: '132.232.2.225:8805',
                ws: true,
                changeOrigin: true,
                pathRewite: {
                    '^/api': ''
                }
            }
        }
     /* proxy: {
        '/': {
          target: '132.232.2.225:8805',
          ws: true,
          changeOrigin: true,
          pathRewite: {
            '^/api': ''
          }
        },
      }*/
    }
  }
  