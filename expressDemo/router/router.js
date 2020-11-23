const router = (app) => {
    // app.all 可以监听所有的路由方法
    // ps: 如果要给所有的路由加上处理函数, 需要使用中间件
    app.all('/helloworld', function (req, res, next) {
        console.log('Accessing the secret section ...')
        next() // pass control to the next handler
    })

    app.get('/helloworld', (request, response) => {
        response.send('hello')
    })

    // 路由方法可以使用正则表达式匹配
    app.get('/ab(cd)?e', function (req, res) {
        res.send('ab(cd)?e')
    })

    // 线路参数
    app.get('/users/:userId/books/:bookId', function (req, res) {
        res.send(req.params)
    })

    // post 请求
    app.post('/post/test', (request, response) => {
        console.log(request.body)
        log(request.body.color)
        response.send('收到了')
    })

    // 使用app.route 来指定路由
    app.route('/book')
        .get(function (req, res) {
            res.send('Get a random book')
        })
        .post(function (req, res) {
            res.send('Add a book')
        })
        .put(function (req, res) {
            res.send('Update the book')
        })
}

module.exports = router