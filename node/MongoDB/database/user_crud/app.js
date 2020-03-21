const http = require('http')
const url = require('url')
const querstring = require('querystring')

require('./model/index.js')
const user = require('./model/user.js')

const app = http.createServer();
app.on()

.listen(3000, function() {
  console.log('server is running at port 3000')
})