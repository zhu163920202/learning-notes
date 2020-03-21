const express = require('express')
// 引入用户集合构造函数
const { User } = require('../model/user.js')
const admin = express.Router()

admin.get('/login', (req, res) => {
	res.render('admin/login')
})
// 实现登录功能
admin.post('/login', async (req, res) => {
	// 接收请求参数
	// res.send(req.body)
	const {email, password} = req.body
	// 服务器端的验证（因为浏览器可以禁止js代码的运行）
	if(email.trim().length == 0 || password.trim().length == 0) {
		return res.status(400).render('admin/err.html', {msg: '邮件地址或密码错误'})
	}
	// 如果查存到用户信息 user变量值是对象类型，如果没有则为空
	let user = await User.findOne({email})
	if (user) {
		if (password == user.password) {
			req.session.username = user.username
			// res.send('登录成功')
			req.app.locals.userInfo = user
			res.redirector('admin/user')
		} else {
			res.status(400).render('admin/err', {msg: '邮箱或密码错误'})
		}
	} else {
		res.status(400).render('admin/err', {msg: '邮箱或密码错误'})
	}
})

// 创建用户列表路由
admin.get('/user', (req, res) => {
	res.render('admin/user', {
		msg: req.session.username
	})
})
module.exports = admin
