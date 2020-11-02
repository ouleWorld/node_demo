// 引入资源
const http=require("http");
const express=require("express");
const app=express();
const path = require('path');
const ejs = require('ejs');

// 定义变量
const tem = {
    message:"我是中间部分"
};


// 挂载静态资源处理中间件,设置css或者js引用文件的静态路径
app.use(express.static(__dirname+"/public"));

// 设置模板视图的目录
app.set("views", "./public/views");
// 设置是否启用视图编译缓存，启用将加快服务器执行效率
app.set("views cache", true);
// 注册HTML 模板引擎
app.engine('html', ejs.__express);
// 设置文件解析的引擎
app.set("view engine","html");

//设置路由
app.get("/index", function(req, res){
    res.render("index.html",{
        title:tem.message,
        name: 'oulae'
    });
});

//创建服务器
//在控制台输入node app.js启动服务器
http.createServer(app).listen(8080, function() {
    console.log("服务器地址为:http://localhost:8080");
});