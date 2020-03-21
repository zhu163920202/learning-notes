const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/data-test", { useNewUrlParser: true})
        .then(() => console.log('successful'))
        .catch(err => console.log('failure', err))

const dataSchema = new mongoose.Schema({
  name: String,
  age: Number,
  hobbies: Array,
  email: String
})

const Student = mongoose.model('Student', dataSchema)

const stu1 = new Student({
  name: 'lucky',
  age: 12,
  hobbies: ['eat', 'sleep', 'game'],
  email: "123.@163.com"
})
const stu2 = new Student({
  name: 'andy',
  age: 14,
  hobbies: ['eat', 'sleep'],
  email: "123.@qq.com"
})

stu1.save()
stu2.save()
