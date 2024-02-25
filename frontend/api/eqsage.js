const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();

module.exports = (req, res) => {
  req.url = req.url.replace(/^\/eqsage/, '');
  proxy.web(req, res, { target: 'https://eqsage.vercel.app', changeOrigin: true }); 
};
