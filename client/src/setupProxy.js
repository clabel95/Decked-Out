const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http//localhost:3001',
            changeOrigin: true,
        })

    // "proxy": {
    //     "/api": {
    //       "target": "http://0.0.0.0:3001",
    //       "secure": false
    //     }
    //   },
      );
};