const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/graphql',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
      headers: {
        "Connection": "keep-alive",
      },
      followRedirects: true,
    })
  );
};