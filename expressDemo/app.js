const express = require('express')
// cors 模块用来解决跨域问题,只要声明了 cor，就说明该服务器允许跨域的访问
const cors = require('cors')
const bodyParser = require('body-parser')
// 引入路由文件
const router = require('./router/router')
const birds = require('./router/router_birds')
const router_middleware = require('./router/router_middleware')
const router_next_router = require('./router/router_next_router')
// 引入中间件文件
const reqAddTime = require('./middleware/reqAddTime')
// 引入函数文件
const { declareLog } = require('./public_func/func')

// 声明全局log
declareLog()

const myLogger = function (req, res, next) {
    console.log('myLogger')
    console.log('req.requestTime: ', req.requestTime)
    next()
}

const app = express()
app.use(cors())
// 定义post 请求时, 需要使用body-parser 解析传递的参数
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

// 声明中间件, 中间件的执行顺序为中间件的声明顺序
// 注意这里的区别, 注意看reqAddTime 的声明方式
app.use(reqAddTime())
app.use(myLogger)

// 创建路由
router(app);
router_middleware(app)
router_next_router(app)
app.use('/birds', birds)

const main = () => {
    let server = app.listen(2300, () => {
        let host = server.address().address
        let port = server.address().port

        log(`应用实例，访问地址为 http://${host}:${port}`)
    })
}

if (require.main === module) {
    main()
}
