const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();

module.exports = (req, res) => {
  const { path = '' } = req.query;
  proxy.web(req, res, { target: `https://eqsage.vercel.app/${path}`, changeOrigin: true });
};
