const http = require('http');

const app = require('./app')
const server = http.createServer(app);

const PORT = 3000;



server.listen(PORT, function() {
  console.log(`Server is listening on port ${3000}`)
})
