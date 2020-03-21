function jsonp(options) {
	var script = document.createElement('script')
	var params = ''
	for(var attr in options.data) {
		params += '&' + attr + '=' + options.data[attr]
	}
	var fnName = 'myjsonp' + Math.random().toString().replace('.', '')
	// 将函数变为全局函数
	window.[fnName] = options.success
	script.src = options.url + '?callback=' + fnName + params
	document.body.appendChild(script)
	script.onload = function() {
		document.body.removeChild(script)
	}
}