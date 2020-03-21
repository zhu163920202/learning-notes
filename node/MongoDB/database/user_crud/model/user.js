const mongoose = require('mongoose')
// 一个项目下多个文件中导入相同模块不会增加程序运行时间，node中采用缓存机制

const userSchema = new mongoose.Schema({
  name: String,
})

const user = mongoose.model('User', userSchema)

model.exports = User