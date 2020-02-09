const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req, res) => {
    const method = req.method
    const path = req.path

    // 登录
    if (method === 'POST' && path === '/api/user/login') {
        console.log('((((((((((((((((((((((((((((((')
        console.log(req.body)

        const { username, password } = req.body
        const result = login(username, password)
        return result.then(data => {
            if (data.username) {
                // 操作cookie
                res.setHeader('Set-Cookie', `username=${data.username};path=/;httpOnly`)
                return new SuccessModel()
            }
            return new ErrorModel('登录失败')
        })
    }

    // 登录验证
    if (method === 'GET' && req.path === '/api/user/login-test') {
        if (req.cookie.username) {
            return Promise.resolve(new SuccessModel())
        }
        return Promise.resolve(new ErrorModel('尚未登录'))
    }
}

module.exports = handleUserRouter