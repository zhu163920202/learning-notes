const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/payground', {useNewUrlParser: true})
        .then(() => console.log('database connected'))
        .catch(err => console.log(err))