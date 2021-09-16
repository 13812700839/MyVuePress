(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{384:function(t,a,r){"use strict";r.r(a);var n=r(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"mongodb的安装配置-zip版"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mongodb的安装配置-zip版"}},[t._v("#")]),t._v(" MongoDB的安装配置（ZIP版）")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#一、-准备工作"}},[t._v("一、 准备工作")])]),r("li",[r("a",{attrs:{href:"#二、-文件配置与安装"}},[t._v("二、 文件配置与安装")]),r("ul",[r("li",[r("a",{attrs:{href:"#_1-文件配置"}},[t._v("1. 文件配置")])]),r("li",[r("a",{attrs:{href:"#_2-安装"}},[t._v("2. 安装")])])])]),r("li",[r("a",{attrs:{href:"#三、-运行测试"}},[t._v("三、 运行测试")]),r("ul",[r("li",[r("a",{attrs:{href:"#_1-从bin文件夹下进入命令行执行"}},[t._v("1. 从bin文件夹下进入命令行执行")])]),r("li",[r("a",{attrs:{href:"#_2-启动完成后-不要关掉该窗口-重新从bin文件夹下进入命令行执行"}},[t._v("2. 启动完成后，不要关掉该窗口，重新从bin文件夹下进入命令行执行")])])])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"一、-准备工作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、-准备工作"}},[t._v("#")]),t._v(" 一、 准备工作")]),t._v(" "),r("p",[t._v("从MongoDB官网下载MongoDB的ZIP安装包")]),t._v(" "),r("p",[t._v("官网链接："),r("a",{attrs:{href:"https://www.mongodb.com/try/download/community",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.mongodb.com/try/download/community"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("选择MongoDB Community Server，选择对应版本、平台")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://13812700839.github.io/MyImageBed/images/repository/installConfigNote/note1-1.png",alt:"image.png"}})]),t._v(" "),r("p",[t._v("下载完成后解压到自己的路径")]),t._v(" "),r("h2",{attrs:{id:"二、-文件配置与安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、-文件配置与安装"}},[t._v("#")]),t._v(" 二、 文件配置与安装")]),t._v(" "),r("h3",{attrs:{id:"_1-文件配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-文件配置"}},[t._v("#")]),t._v(" 1. 文件配置")]),t._v(" "),r("p",[t._v("进入解压后的文件夹，新建data和log文件夹，并在log文件夹下，新建mongo.log空文件")]),t._v(" "),r("p",[t._v("新建mongo.conf文件与bin文件夹同级")]),t._v(" "),r("p",[t._v("mongo.conf写入以下内容")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("# 数据库路径\ndbpath=E:\\other_dev\\mongodb\\data\n\n# 日志输出文件路径\nlogpath=E:\\other_dev\\mongodb\\logs\\mongo.log \n\n# 错误日志采用追加模式\nlogappend=true\n\n# 启用日志文件，默认启用\njournal=true\n\n# 这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false\nquiet=true\n\n# 端口号 默认为27017\nport=27017\n")])])]),r("p",[r("strong",[t._v("注：dbpath和logpath根据自己的具体路径进行修改")])]),t._v(" "),r("h3",{attrs:{id:"_2-安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装"}},[t._v("#")]),t._v(" 2. 安装")]),t._v(" "),r("p",[t._v("从bin文件夹下进入命令行执行")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('mongod --config "E:\\other_dev\\mongodb\\mongo.conf"\n')])])]),r("p",[r("strong",[t._v("注：引号内的路径换成刚刚配置文件的路径")])]),t._v(" "),r("p",[t._v("执行后没有任何反应，则关掉该窗口")]),t._v(" "),r("h2",{attrs:{id:"三、-运行测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、-运行测试"}},[t._v("#")]),t._v(" 三、 运行测试")]),t._v(" "),r("h3",{attrs:{id:"_1-从bin文件夹下进入命令行执行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-从bin文件夹下进入命令行执行"}},[t._v("#")]),t._v(" 1. 从bin文件夹下进入命令行执行")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("mongod --dbpath E:\\other_dev\\mongodb\\data\n")])])]),r("p",[r("strong",[t._v("注：引号内的路径换成自己存放数据库的路径")])]),t._v(" "),r("h3",{attrs:{id:"_2-启动完成后-不要关掉该窗口-重新从bin文件夹下进入命令行执行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动完成后-不要关掉该窗口-重新从bin文件夹下进入命令行执行"}},[t._v("#")]),t._v(" 2. 启动完成后，不要关掉该窗口，重新从bin文件夹下进入命令行执行")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("mongo\n")])])]),r("p",[t._v("进入mongo命令行模式")]),t._v(" "),r("blockquote",[r("p",[t._v("2021年06月19日发于简书 "),r("a",{attrs:{href:"https://www.jianshu.com/p/4092643aa3c3",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章地址"),r("OutboundLink")],1),r("br"),t._v("\n2021年07月13日发于知乎 "),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/389247092",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章地址"),r("OutboundLink")],1),r("br"),t._v("\n2021年07月31日发于CSDN "),r("a",{attrs:{href:"https://blog.csdn.net/qq_46106320/article/details/119269582",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章地址"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);