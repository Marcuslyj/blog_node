const {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
    const method = req.method
    const path = req.path
    const id = req.query.id

    // 获取博客列表
    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''

        const listData = getList(author, keyword)

        return new SuccessModel(listData)
    }

    // 获取博客详情
    if (method === 'GET' && path === '/api/blog/detail') {
        const data = getDetail(id)

        return new SuccessModel(data)
    }

    // 新建博客
    if (method === 'POST' && path === '/api/blog/new') {
        const data = newBlog(req.body)
        return new SuccessModel(data)
    }

    // 更新博客
    if (method === 'POST' && path === '/api/blog/update') {
        const result = updateBlog(id, req.body)
        return result ? new SuccessModel(result) : new ErrorModel('更新博客失败')
    }

    // 删除博客
    if (method === 'POST' && path === '/api/blog/delete') {
        const result = deleteBlog(id)
        return result ? new SuccessModel(result) : new ErrorModel('删除博客失败')
    }
}

module.exports = handleBlogRouter