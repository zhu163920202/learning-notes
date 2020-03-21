const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/data-stu', { useNewUrlParser: true }  )
    .then(() => console.log('connect successful'))
    .catch(err => console.log('fail', err))

// 创建集合
// step1：设定集合规则
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean
})
// step2：创建集合 参数一：集合名称首字母大写，但是在数据库中名称为courses
const Course = mongoose.model('Course', courseSchema)

// // 创建文档
// const course = new Course({
//   name: 'nodejs',
//   author: 'lucky',
//   isPublished: false
// })

// course.save()
// Course.create({name: 'mongodb', author: 'andy', isPublished: true}, (err, doc) => {
//   console.log(err)
//   console.log(doc)
// })

Course.create({name: 'javascript', author: 'david', isPublished: true})
      .then(doc => console.log(doc))
      .catch(err => console.log(err))