const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/user', {useNewUrlParser: true})
        .then(() => console.log('connect successfully'))
        .catch(err => console.log('数据库连接失败', err))