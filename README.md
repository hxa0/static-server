# 静态服务器
###  用法
- 终端命令运行：node server.js +端口号，比如node server.js 8888
- url后加入文件路径，访问当前目录下的文件，比如 localhost:8888/s.png，就是访问s.png文件
- 如果想补充支持的文件类型，可在如下部分添加内容
   ````
   const fileTypes={
        '.html':'text/html',
        '.css':'text/css',
        '.js':'text/javascript',
        '.png':'image/png',
        '.jpg':'image/jpg'
        // 可参照以上几条补充文件类型
    }
    ````
### 功能
 - 本地域名后添加当前文件夹下，文件的路径，即可访问该文件
 - 被访问的文件内也可以引用其他文件，通过访问文件，间接访问关联其他文件
    - 如index.html文件里面引入style.css，s.png,在访问index.html网页的同时，可以看到style.css和s.png对网页的作用效果（比如文字变色，网页图片）
### 具体编写思想，可参考当前目录下：设计思路.md文件
### 后续还会不断完善！
