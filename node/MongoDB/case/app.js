const http = require('http')
const getRouter = require('router')
const router = getRouter()
const template = require('art-template')
const queryString = require('querystring')
const path = require('path')
// 引入静态资源访问模块
const serveStatic = require('serve-static')

const serve = serveStatic(path.join(__dirname, 'public'))

template.defaults.root = path.join(__dirname, 'views')

router.get('/add', (req, res) => {
  const html = template('index.art', {})
  res.end(html)
})

router.get('/list', (req, res) => {
  const html = template('list.art', {})
  res.end(html)
})
router.post('/add', (req, res) => {
  let formData = '';
  req.on('data', param => {
    formData += param;
  })
  req.on('end', async () => {
    await Student.create(queryString.parse(formData))
    res.writeHead(301, {
      Location: '/list'
    })
    res.end()
    // console.log(queryString.parse(formData))
  })
})

require('./model/connect')
const Student = require('./model/user')
// 创建网站服务器
const app = http.createServer()

app.on('request', (req, res) => {
  router(req, res, () => {
    console.log('index')
  })
  serve(req, res, () => {
    console.log('index')
  })
})
.listen(3000, function() {
  console.log('server is running at port 3000')
})