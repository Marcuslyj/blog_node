const fs = require('fs')
const path = require('path')

const filename = path.resolve(__dirname, 'data.txt')

// // 读取文件内容
// fs.readFile(filename, (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     // data是二进制类型，需要转化为字符串
//     console.log(data.toString())
// })

// // 写入文件
// const content = '这是新写的内容\n'
// const opt = {
//     flag: 'a'  // 追加写入；覆盖w
// }

// fs.writeFile(filename, content, opt, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
// })

// 判断文件存在
fs.exists(filename, (exist) => {
    console.log('exist:', exist)
})