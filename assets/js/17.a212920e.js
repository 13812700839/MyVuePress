(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{383:function(e,s,r){"use strict";r.r(s);var t=r(45),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"redis安装配置-zip版"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis安装配置-zip版"}},[e._v("#")]),e._v(" Redis安装配置（ZIP版）")]),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#一、下载redis安装包"}},[e._v("一、下载Redis安装包")])]),r("li",[r("a",{attrs:{href:"#二、文件配置与安装"}},[e._v("二、文件配置与安装")]),r("ul",[r("li",[r("a",{attrs:{href:"#_1-临时服务安装"}},[e._v("1. 临时服务安装")])]),r("li",[r("a",{attrs:{href:"#_2-默认服务安装"}},[e._v("2. 默认服务安装")])]),r("li",[r("a",{attrs:{href:"#_3-自定义服务安装"}},[e._v("3. 自定义服务安装")])])])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"一、下载redis安装包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、下载redis安装包"}},[e._v("#")]),e._v(" 一、下载Redis安装包")]),e._v(" "),r("p",[e._v("根据系统版本下载Redis安装包")]),e._v(" "),r("p",[e._v("Linux版本下载地址："),r("a",{attrs:{href:"https://redis.io/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://redis.io/download"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Windows版本下载地址："),r("a",{attrs:{href:"https://github.com/microsoftarchive/redis/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/microsoftarchive/redis/releases"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("本文以Windows为例，下载完成后解压到自己的路径")]),e._v(" "),r("h2",{attrs:{id:"二、文件配置与安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、文件配置与安装"}},[e._v("#")]),e._v(" 二、文件配置与安装")]),e._v(" "),r("h3",{attrs:{id:"_1-临时服务安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-临时服务安装"}},[e._v("#")]),e._v(" 1. 临时服务安装")]),e._v(" "),r("p",[e._v("进入Redis解压后的目录，并在该目录下启动命令行，输入以下命令")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("redis-server.exe redis.windows.conf\n")])])]),r("p",[r("img",{attrs:{src:"https://13812700839.github.io/MyImageBed/images/repository/installConfigNote/note3-1.png",alt:"image.png"}})]),e._v(" "),r("p",[e._v("打开Redis解压后的目录中的redis-cli.exe，运行redis客户端，上一个窗口不能关闭")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://13812700839.github.io/MyImageBed/images/repository/installConfigNote/note3-2.png",alt:"image.png"}})]),e._v(" "),r("p",[e._v("使用临时服务安装，不会出现在Windows服务中")]),e._v(" "),r("h3",{attrs:{id:"_2-默认服务安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-默认服务安装"}},[e._v("#")]),e._v(" 2. 默认服务安装")]),e._v(" "),r("p",[e._v("进入Redis解压后的目录，并在该目录下启动命令行，输入以下命令")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("redis-server.exe --service-install redis.windows.conf --loglevel verbose\n")])])]),r("p",[r("strong",[e._v("注：一定要把临时服务关闭，否则安装不上")])]),e._v(" "),r("p",[e._v("启动/暂停/卸载服务")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# 启动\nredis-server.exe --service-start\n# 暂停\nredis-server.exe --service-stop\n# 卸载\nredis-server.exe --service-uninstall\n")])])]),r("p",[e._v("使用默认服务安装，会出现在Windows服务中")]),e._v(" "),r("h3",{attrs:{id:"_3-自定义服务安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-自定义服务安装"}},[e._v("#")]),e._v(" 3. 自定义服务安装")]),e._v(" "),r("p",[e._v("进入Redis解压后的目录，并在该目录下启动命令行，输入以下命令")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("redis-server.exe --service-install redis.windows.conf --Service-name RedisServer1 --loglevel verbose\n")])])]),r("p",[e._v("启动/暂停/卸载服务")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# 启动\nredis-server.exe --service-start --Service-name RedisServer1\n# 暂停\nredis-server.exe --service-stop --Service-name RedisServer1\n#  卸载\nredis-server.exe?--service-uninstall --Service-name RedisServer1\n")])])]),r("p",[e._v("使用自定义服务安装，可以重命名服务名并会出现在Windows服务中")]),e._v(" "),r("blockquote",[r("p",[e._v("2021年07月02日发于简书 "),r("a",{attrs:{href:"https://www.jianshu.com/p/ca829a56f00d",target:"_blank",rel:"noopener noreferrer"}},[e._v("文章地址"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=a.exports}}]);