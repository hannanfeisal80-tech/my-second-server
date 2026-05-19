console.log('Test 123');
console.log('Welcome to my Nodejs server!');

const http = require('http');

const server = http.createServer((req,res) =>{
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello server!')
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});