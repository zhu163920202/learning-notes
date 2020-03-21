const express = require('express')
const app = express()
// 创建路由对象
const home = express.Router()
// 将路由和请求路径进行匹配
app.use('/home', home)
// home路由下继续创建路由
home.get('/index', () => {
	res.send('welcome to /home/index')
})