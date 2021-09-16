(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{380:function(t,a,s){"use strict";s.r(a);var e=s(45),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux-中-git-学习笔记-二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-中-git-学习笔记-二"}},[t._v("#")]),t._v(" Linux 中 Git 学习笔记（二）")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#比较修改或提交的内容"}},[t._v("比较修改或提交的内容")])]),s("li",[s("a",{attrs:{href:"#比较两分支的差别"}},[t._v("比较两分支的差别")])]),s("li",[s("a",{attrs:{href:"#仅比较某个文件或目录"}},[t._v("仅比较某个文件或目录")])]),s("li",[s("a",{attrs:{href:"#统计那些文件有改动"}},[t._v("统计那些文件有改动")])]),s("li",[s("a",{attrs:{href:"#合并不同目录的修改文件"}},[t._v("合并不同目录的修改文件")])]),s("li",[s("a",{attrs:{href:"#公共-git-仓库的克隆-ssh-地址"}},[t._v("公共 git 仓库的克隆 SSh 地址")])]),s("li",[s("a",{attrs:{href:"#推送本地修改到公共-git-仓库"}},[t._v("推送本地修改到公共 git 仓库")])]),s("li",[s("a",{attrs:{href:"#选择其中一个记录标志为-stable-1-的标签"}},[t._v("选择其中一个记录标志为 stable-1 的标签")])]),s("li",[s("a",{attrs:{href:"#查看当前所有-tag"}},[t._v("查看当前所有 tag")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"比较修改或提交的内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#比较修改或提交的内容"}},[t._v("#")]),t._v(" 比较修改或提交的内容")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git diff\n")])])]),s("h2",{attrs:{id:"比较两分支的差别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#比较两分支的差别"}},[t._v("#")]),t._v(" 比较两分支的差别")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git diff <分支 1> <分支 2>\n")])])]),s("h2",{attrs:{id:"仅比较某个文件或目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仅比较某个文件或目录"}},[t._v("#")]),t._v(" 仅比较某个文件或目录")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git diff <分支名> <文件名或目录名>\n")])])]),s("h2",{attrs:{id:"统计那些文件有改动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统计那些文件有改动"}},[t._v("#")]),t._v(" 统计那些文件有改动")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git diff <分支名> --stat\n")])])]),s("h2",{attrs:{id:"合并不同目录的修改文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并不同目录的修改文件"}},[t._v("#")]),t._v(" 合并不同目录的修改文件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git pull <绝对路径>\n# 经常性\ngit remote add <目录名> <目录绝对路径>\n# 从远程分支抓取最新修改消息\ngit fetch <目录绝对路径>\n# 查看远程分支所做的修改\ngit log -p <分支名> -- <目录名/分支名>\n# 合并分支\ngit merge <目录名/分支名>\n克隆得到的更新\ngit pull\n")])])]),s("h2",{attrs:{id:"公共-git-仓库的克隆-ssh-地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公共-git-仓库的克隆-ssh-地址"}},[t._v("#")]),t._v(" 公共 git 仓库的克隆 SSh 地址")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git clone ssh://服务器/账号/仓库名称\n")])])]),s("h2",{attrs:{id:"推送本地修改到公共-git-仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推送本地修改到公共-git-仓库"}},[t._v("#")]),t._v(" 推送本地修改到公共 git 仓库")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git push ssh://服务器仓库地址 master:master\ngit push ssh://服务器仓库地址 master\n")])])]),s("h2",{attrs:{id:"选择其中一个记录标志为-stable-1-的标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择其中一个记录标志为-stable-1-的标签"}},[t._v("#")]),t._v(" 选择其中一个记录标志为 stable-1 的标签")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# commit 的名称很长，通常我们只需要写前面 8 位即可\ngit tag <标签名> <commit前八位>\n")])])]),s("h2",{attrs:{id:"查看当前所有-tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看当前所有-tag"}},[t._v("#")]),t._v(" 查看当前所有 tag")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git tag\n")])])]),s("p",[t._v("git tag 中使用 -a， -s 或是 -u 三个参数中任意一个，都会创建一个标签对象，并且需要一个标签消息来为 tag 添加注释。 如果没有 -m 或是 -F 这些参数，命令执行时会启动一个编辑器来让用户输入标签消息")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('git tag -a <标签名> <commit前八位> -m "标签信息"\n')])])]),s("blockquote",[s("p",[t._v("2020年07月24日发于简书 "),s("a",{attrs:{href:"https://www.jianshu.com/p/54628961ebb0",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章地址"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);