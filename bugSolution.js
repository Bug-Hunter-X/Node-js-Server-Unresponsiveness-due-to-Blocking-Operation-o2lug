const http = require('http');

const server = http.createServer(async (req, res) => {
  // Simulate a long-running task asynchronously
  const count = await new Promise(resolve => {
    let count = 0;
    setTimeout(() => {
      for (let i = 0; i < 1000000000; i++) {
        count += i;
      }
      resolve(count);
    }, 0) 
  });
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});