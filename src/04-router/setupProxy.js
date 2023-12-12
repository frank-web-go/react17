const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ajax', //api/list  /api/detail 
    createProxyMiddleware({
      target: 'https://i.maoyan.com', //往前拼接
      changeOrigin: true,
    })
  );
};
// 重启