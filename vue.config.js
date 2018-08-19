
module.exports = {

    devServer: {
      host: '0.0.0.0',
      port: 8013,
        proxy: {
            '/api': {
                target: 'http://132.232.2.225:8805/',
                //ws: true,
                changeOrigin: true,
                secure:false
            }
        }
    }
  }
  