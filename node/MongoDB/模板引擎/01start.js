const template = require('art-template')
const path = require('path')

//模板路径必须使用绝对路径
const views = path.join(__dirname, 'views', '01index.art')
const html = template(views, {
  data: {
    name: 'lucky',
    age: 12
  },
  content: '<h1>title</h1>'
})
console.log(html)