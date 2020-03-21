const express = require('express')
const app = express()

app.get('/', (req, res) => {
	// send()方法: 
    // 1. 内部会检测相应内容的类型
    // 2. 会自动设置http状态码
    // 3. 会自动设置响应的内容类型及编码
	res.send('hello')
})

.listen(3000, () => {
	console.log('serve is running at port 3000')
})