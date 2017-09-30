
前端解决跨域问题：


http://10.1.64.154/cimiss-web/api?userId=usr


本地服务器地址可以在server中改



1. 将所有静态文件放在public中；npm install 

2. server 中 将跨域的 url的域名和路径拆分;最好是将域名单独写 然后路径中的最前部分写在前面,以后部署也方便
```js
app.use(express.static('gsn'));    // 这里的gsn为你的所有静态资源的目录 
app.use('/cimiss-web', proxy({target: 'http://10.1.64.154', changeOrigin: true}));    //  跨域的接口    http://10.1.64.154/cimiss-web/api  的时候，代理写成前面的样子  /cimiss-web   和 target 分开写就行；注意不要多写
```

3. 静态资源中直接写相对路径

/cimiss-web/api?userId=usr_sjw&pwd=usr_sjw_150706&interfaceId=getSurfEleByTimeRangeAndStaID&dataCode=SURF_CHN_MUL_YER&elements=Year,PRE_Time_2020&timeRange=[19500929000000,20170929010000]&staIds=54511&orderBy=Year&dataFormat=json

4. 启动

node  server.js
访问的路径path 指 public下，静态资源的目录 （不需要写public）
http://localhost:3000/
 