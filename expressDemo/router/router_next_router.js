const router = (app) => {
    // next('route') 作用: 跳过当前的路由剩余的handler
    // demo: 当我们访问/user/0 时, 会返回special

    // 疑问:
    // 1. 感觉这里有点不太理解, 什么情况下一个路由会被定义两次呢? (在一次里面完成处理逻辑也可以啊)
    // 参考资料: https://www.imooc.com/wenda/detail/516054

    // 如果下面的中间件是第一个被执行的, 那么该请求将会失败user id second router middleware
    // app.use(function (req, res, next) {
    //     return next('router')
    // })
    app.get('/user/:id', function (req, res, next) {
        // if the user ID is 0, skip to the next route
        if (req.params.id === '0') next('route')
        // otherwise pass the control to the next middleware function in this stack
        else next()
    }, function (req, res, next) {
        // send a regular response
        res.send('regular')
    })

    // handler for the /user/:id path, which sends a special response
    app.get('/user/:id', function (req, res, next) {
        console.log('user id second router middleware')
    }, function (req, res, next) {
        res.send('special')
    })
}

module.exports = router