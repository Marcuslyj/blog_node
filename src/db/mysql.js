const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db')

// 创建连接对象
const conn = mysql.createConnection(MYSQL_CONF)

// 开始连接
con.connect()

// 统一执行sql的函数
function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if (err) {
                reject(err)
                return
            }
            console.log(result)
        })
    })
    return promise
}

module.exports = {
    exec
}