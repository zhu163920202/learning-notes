const express = require('express')
const app = express()

app.get('/request', (req, res, next) => {
	req.name = 'nancy'
	console.log('fine')
	next()
})
app.get('/request', (req, res) => {
	console.log(req.name)
})
app.listen(3000, () => {
	console.log('ok')
})