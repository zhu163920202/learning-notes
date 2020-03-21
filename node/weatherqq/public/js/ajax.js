function ajax(options) {
	var defaults = {
		type: 'get',
		url: '',
		async: true,
		data: {},
		header: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		success: function() {},
		error: function() {}
	}
	// 使用用户传入的参数替换默认参数值
	Object.assign(defaults, options)
	var xhr = new XMLHttpRequest()
	var params = ''
	for(var attr in options.data) {
		params += attr + '='+options.data[attr] + '&';
		// 从0开始，截取长度length-1
		params = params.substr(0, params.length -1)
	}
	if(options.type == 'get') {
		// get请求参数拼接在地址后
		options.url += '?' + params
	}
	xhr.open(options.type, options.url, options.async)
	if(options.type == 'post') {
		xhr.setRequestHeader('Content-Type', options.header)
		if(options.header['Content-Type'] == 'application/json') {
			xhr.send(JAON.stringify(options.data))
		} else {
			// post请求参数传递
			xhr.send(params)
		}
	} else {
		xhr.send()
	}
	
	xhr.onload = function() {
		var contentType = xhr.getResponseHeader('content-type')
		var resposeText = xhr.responseText
		if(contentType.include('application/json')) {
			resposeText = JSON.parse(resposeText)
		}
		if (xhr.status == 200) {
			options.success(responseText, xhr)
		} else {
			options.error(responseText, xhr)
		}
	}
	// 当网络中断时，调用失败回调函数
	xhr.onerror = function() {
		options.errror(xhr)
	}
}