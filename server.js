var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
    console.log('请指定端口号，例如:\nnode server.js 8888 ')
    process.exit(1)
}

var server = http.createServer(function(request, response) {
    var parsedUrl = url.parse(request.url, true)
    var pathWithQuery = request.url
    var queryString = ''
    if (pathWithQuery.indexOf('?') >= 0) { queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
    var path = parsedUrl.pathname
    var query = parsedUrl.query
    var method = request.method

    /******** 从这里开始看，上面不要看 ************/

    console.log('有用户发来请求！路径（带查询参数）为：' + pathWithQuery)

    
        response.statusCode = 200
        
        //默认首页
        const filePath=path==='/'?'/index.html':path
        const index=filePath.lastIndexOf('.') //拿到文件路径里面.的下标(第几个)
        const suffix=filePath.substring(index) //拿到从这个下标开始，到最后的所有字符串，即文件的后缀
    //支持的文件类型,hashmap
    const fileTypes={
        '.html':'text/html',
        '.css':'text/css',
        '.js':'text/javascript',
        '.png':'image/png',
        '.jpg':'image/jpg'
        
    }
       response.setHeader('Content-Type', 
       `${fileTypes[suffix]||'text/html'};charset=utf-8`)  // text/文件类型通用写法：fileTypes里面，文件后缀（key）对应的内容，比如.js对应的是text/javascript
        let content
        try {
            content=fs.readFileSync(`./public${filePath}`)
        } catch (error) {
            content='文件不存在'
            response.statusCode=404
        }
        response.write(content)
        response.end()
        

    /******** 代码结束，下面不要看 ***********/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用打开 http://localhost:' + port)
