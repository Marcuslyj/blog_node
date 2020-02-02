const serverHandle = (req, res) => {
    // 设置返回格式json
    res.setHeader('Content-type', 'application/json')

    const resData = {
        name: '100',
        site: 'imooc',
        env: process.env.NODE_ENV
    }

    res.end(
        JSON.stringify(resData)
    )
}

module.exports = serverHandle