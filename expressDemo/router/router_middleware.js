const router = (app) => {
    // app.all 可以监听所有的路由方法
    // 可以使用app.all 为单独的一个路由添加中间件
    // ps: 如果要给所有的路由加上处理函数, 需要使用中间件
    app.all('/oulae', function (req, res, next) {
        console.log('Accessing the secret section ...')
        next() // pass control to the next handler
        // next('route')
    })

    // 使用app.use 为特定路由指定中间件
    app.use('/oulae', function (req, res, next) {
        console.log('use app.use define middleware for oulae')
        next()
    })

    app.get('/oulae', (request, response) => {
        var responseText = 'Hello oulae!<br>'
        responseText += '<small>Requested at: ' + request.requestTime + '</small>'
        response.send(responseText)
    })
}

module.exports = router