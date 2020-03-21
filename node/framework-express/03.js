const express = require('express')
const app = express()

app.use((req, res, next) => {
	res.end('网站维护中稍后访问')
})
app.get('/index', (req, res, next) => {
	res.end('hello everybody')
	next()
})
.get('/request', (req, res) => {
	console.log('fine')
})
.use((req, res, next) => {
	res.status(404).send('您访问的页面不存在')
})
.listen(3000, () => {
	console.log('serve is running .......')
})