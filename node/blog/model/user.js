// 创建用户集合
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 10
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	role: {
		type: String,
		required: true 
	},
	// 0:启用状态  1：禁用状态
	state: {
		type: Number,
		default: 0
	}
})

const User = mongoose.model('User', userSchema)

// User.create({
// 	username: 'lucky',
// 	email: 'lucky@163.com',
// 	password: '123456',
// 	role: 'admin',
// 	state: 0,
// })
// .then(() => console.log('success'))
// .catch(() => console.log('failure'))

module.exports = {
	User
}