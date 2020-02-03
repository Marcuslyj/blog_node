const getList = (author, keyword) => {
    // 先返回假数据（格式是正确的）
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1580708285956,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1580708453455,
            author: 'lisi'
        }
    ]
}

const getDetail = (id) => {
    // 假数据
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: 1580708285956,
        author: 'zhangsan'
    }

}

module.exports = {
    getList,
    getDetail
}