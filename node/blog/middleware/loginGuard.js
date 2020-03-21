const guard = (req, res, next) => {
	//判断用户访问的是否是登录页面，用户的登录状态
	if (req.url != '/login' && !req.session.username) {
		res.redirector('/admin/login')
	} else {
		next()
	}
}
module.exports = guard