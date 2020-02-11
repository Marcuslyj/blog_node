// // 标准输入输出
// process.stdin.pipe(process.stdout)


// const http = require('http')
// const server = http.createServer((req, res) => {
//     if (req.method === 'POST') {
//         req.pipe(res)
//     }
// })
// server.listen(8000)

// // 复制文件
// const fs = require('fs')
// const path = require('path')

// const filename1 = path.resolve(__dirname, 'data.txt')
// const filename2 = path.resolve(__dirname, 'data-bak.txt')

// const readSteam = fs.createReadStream(filename1)
// const writeSteam = fs.createWriteStream(filename2)

// readSteam.pipe(writeSteam)
// readSteam.on('data', (chunk) => {
//     console.log(chunk.toString())
// })
// readSteam.on('end', () => {
//     console.log('copy done')
// })



const http = require('http')
const fs = require('fs')
const path = require('path')
const filename1 = path.resolve(__dirname, 'data.txt')
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        const readSteam = fs.createReadStream(filename1)
        readSteam.pipe(res)

    }
})
server.listen(8000)

