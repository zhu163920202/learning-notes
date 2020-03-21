const express = require('express')
const path = require('path')
const app = express()

// 使用模板引擎渲染.art文件
app.set('art', require('express-art-template'))
// 静态文件存放位置
.set('views', path.join(__dirname, 'views'))
// 默认后缀
.set('view engine', 'art')
.get('index', (req, res) => {
	res.render('index', {})
})
.listen(3000, () => {
	console.log('serve is running')
})