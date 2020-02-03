const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req, res) => {
    const method = req.method
    const path = req.path

    // 登录
    if (method === 'GET' && path === '/api/user/login') {
        const { username, password } = req.body
        const result = loginCheck(username, password)
        return result ? new SuccessModel(result) : new ErrorModel('登录失败')
    }
}

module.exports = handleUserRouter