var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();
app.use(express.static('public'));    // 这里的gsn为你的所有静态资源的目录 
app.use('/api', proxy({target: 'http://10.1.64.154/cimiss-web', changeOrigin: true}));    //  跨域的接口    http://10.1.64.154/cimiss-web/api  的时候，代理写成前面的样子  /api    和 target 分开写就行
app.listen(3000);