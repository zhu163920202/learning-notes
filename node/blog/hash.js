const bcrypt = require('bcrypt')
// 生成随机字符串，接收数值作为参数，数值越大，生成的随机字符串复杂度越高
bcrypt.genSalt(10)
async function run() {
	const salt = await bcrypt.genSalt(10)
	const result = await bcrypt.hash('123456', salt)
	console.log(salt)
	console.log(result)
}
run()