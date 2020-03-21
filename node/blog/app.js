const express = require('express')
const path = require('path')
const app = express()
// 引入body-parser模块，用来处理post请求参数
const bodyParser = require('body-parser')
const session = require('express-session')
require('./model/connect.js')
 
// 拦截请求判断用户登录状态
app.use('/admin', require('./middleware/loginGuard.js'))

// 配置session
app.use(session({secret: 'secret key'}))
// 处理post请求参数
app.use(bodyParser.urlencoded({extended: false}))
// 模板所在位置
app.set('views', path.join(__dirname, 'views'))
// 模板的默认后缀
app.set('view engine', 'html')
// 模板渲染时使用的模板引擎
app.engine('html', require('express-art-template'))
// 开放静态资源
app.use(express.static(path.join(__dirname, 'public')))

app.use('/home', require('./route/home'))
app.use('/admin', require('./route/admin'))

.listen(80, () => {
	console.log('serve is running...')
})