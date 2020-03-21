const template = require('art-template')
const path = require('path')

const views = path.join(__dirname, 'views', '02ifelse.art')
const html = template(views, {
  data: [{
    name: 'lucky',
    age: 14
  },
  {
    name: 'andy',
    age: 12
  },
  {
    name: 'luc',
    age: 11
  }
],
arr: [2, 1, 4]
})
console.log(html)