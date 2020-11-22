const express = require('express')
// cors 模块用来解决跨域问题,只要声明了 cor，就说明该服务器允许跨域的访问
const cors = require('cors')
const router = require('./router/router')
const birds = require('./router/router_birds')

const app = express()
app.use(cors())

const log = console.log.bind(console)
// 创建路由
router(app);
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
