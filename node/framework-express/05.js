const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// extend: false 内部使用querystring模块处理请求参数的格式
// extend: true 内部使用第三方穆凯qs处理请求参数的格式
app.use(bodyParser.urlencoded({extended: false}))
.post('/add', (req, res) => {
    res.send(req.body)
})
.listen(3000, () => {
	console.log('server is running ')
})