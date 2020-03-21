const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/data-test')
        .then(() => {console.log('connect successfully')})
        .catch(err => console.log(err))

// const dataSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   hobbies: Array,
//   email: String
// })

// const Student = mongoose.model('Student', dataSchema)

data-test.students.findOne({name: 'lucky'}).then(res => console.log(res))