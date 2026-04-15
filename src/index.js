const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Jenkins + Docker pipeline!');
});

server.listen(3000, () => {
  console.log('App running on port 3000');
}); 
