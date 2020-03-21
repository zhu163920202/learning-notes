const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.get('/index/:id/:name', (req, res) => {
	res.send(req.params)
})
.listen(3000, () => {
	console.log('serve is running....')
})