const express = require('express')
const path = require('path')
const formidable = require('formidable')

const app = express()
// 开放静态资源
app.use(express.static(path.join(__dirname, 'public')))

// 实现文件上传路由
app.post('/upload', (req, res) => {
	const form = new formidable.IncomingForm()
	form.uploadDir = path.join(__dirname, 'public', 'uploads')
	form.keepExtensions = true
	form.parse(req, (err, fields, files) => {
		res.send({
			path: files.attrName.path.split('public')[1]
		})
	})
})

app.get('/first', (req, res) => {
	res.send({"hello": "ajax"})
})
app.post('/formdata', (req, res) => {
	// 创建formidable表单解析对象
	const form = new formidable.IncomingForm()
	// 解析客户端传过来的formdata对象
	// 参数一： 错误对象 参数二：表单中的普通请求参数 参数三： 文件上传相关请求参数
	form.parse(req, (err, fields, files) => {
		res.send(fields)
	})
})
// 对应02
app.get('/get', (req, res) => {
	// req.query 获取get请求参数
	res.send(req.query)
})
// 对应03
app.post('/post', (req, res) => {
	res.send(req.body)
})
// 对应04
app.post('/json', (req, res) => {
	res.send(req.body)
})
app.get('/search', (req, res) => {
	const list = [
		'bai',
		'baidu',
		'baise',
		'baijingting'
	];
	// 搜索结果
	let result = list.filter(item => item.includes(key));
	// 将查询结果返回给客户端
	res.send(result);
})
// 获取省份
app.get('/province', (req, res) => {
	res.json([{
		id: '001',
		name: '黑龙江省'
	},{
		id: '002',
		name: '四川省'
	},{
		id: '003',
		name: '河北省'
	},{
		id: '004',
		name: '江苏省'
	}]);
});

// 根据省份id获取城市
app.get('/cities', (req, res) => {
	// 获取省份id
	const id = req.query.id;
	// 城市信息
	const cities = {
		'001': [{
			id: '300',
			name: '哈尔滨市'
		}, {
			id: '301',
			name: '齐齐哈尔市'
		}, {
			id: '302',
			name: '牡丹江市'
		}, {
			id: '303',
			name: '佳木斯市'
		}],
		'002': [{
			id: '400',
			name: '成都市'
		}, {
			id: '401',
			name: '绵阳市'
		}, {
			id: '402',
			name: '德阳市'
		}, {
			id: '403',
			name: '攀枝花市'
		}],
		'003': [{
			id: '500',
			name: '石家庄市'
		}, {
			id: '501',
			name: '唐山市'
		}, {
			id: '502',
			name: '秦皇岛市'
		}, {
			id: '503',
			name: '邯郸市'
		}],
		'004': [{
			id: '600',
			name: '常州市'
		}, {
			id: '601',
			name: '徐州市'
		}, {
			id: '602',
			name: '南京市'
		}, {
			id: '603',
			name: '淮安市'
		}]
	}
	// 响应
	res.send(cities[id]);
});

// 根据城市id获取县城
app.get('/areas', (req, res) => {
	// 获取城市id
	const id = req.query.id;
	// 县城信息
	const areas = {
		'300': [{
			id: '20',
			name: '道里区',
		}, {
			id: '21',
			name: '南岗区'
		}, {
			id: '22',
			name: '平房区',
		}, {
			id: '23',
			name: '松北区'
		}],
		'301': [{
			id: '30',
			name: '龙沙区'
		}, {
			id: '31',
			name: '铁锋区'
		}, {
			id: '32',
			name: '富拉尔基区'
		}]
	};
	// 响应
	res.send(areas[id] || []);
});

app.listen(3000, () => {
	console.log('serve is running.....')
})