const express = require('express')
const path = require('path')

const app = express()


app.use(express.static(path.join(__dirname, 'public')))

app.get('/test', (req, res) => {
	// const f = req.query.callback;
	// const result = f + '({name:"lucky"})';
	// res.send(result)
	// 等效方法
	res.jsonp({name: 'lucky', age:12})
})


app.listen(3001, function() {
	console.log('serve is running at port 3001.......')
})