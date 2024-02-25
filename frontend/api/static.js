const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();

module.exports = (req, res) => {
  proxy.web(req, res, { target: 'https://eqsage.vercel.app', changeOrigin: true });
};
