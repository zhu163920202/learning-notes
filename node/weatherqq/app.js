const express = require('express')
const path = require('path')
const request = require('request')
const app = express()


app.use(express.static(path.join(__dirname, 'public')))

app.get('/server', (req, res) => {
	res.send('ok')
})


app.listen(3000, function() {
	console.log('serve is running at port 3000.......')
})