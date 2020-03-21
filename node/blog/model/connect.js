// 连接数据库
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true })
	.then(() => console.log('connected successfully'))
	.catch(err => console.log('err',err))
