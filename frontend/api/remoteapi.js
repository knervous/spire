const httpProxy = require('http-proxy');

// Create a proxy server with custom application logic
const proxy = httpProxy.createProxyServer({});

module.exports = (req, res) => {
  // Extract the target URL from the header
  const target = req.headers['x-remote-api'];

  if (!target) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    return res.end('Error: Missing X-Remote-Api header');
  }

  // Optionally, manipulate the request URL or headers here
  req.url = req.url.replace(/^\/remote-api/, ''); // Adjust the URL
  
  // Remove headers that might interfere with the proxy
  delete req.headers.host;

  // Proxy the request
  proxy.web(req, res, { target, changeOrigin: true }, error => {
    console.error('Proxy error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(`Proxy error: ${error.message}`);
  });
};