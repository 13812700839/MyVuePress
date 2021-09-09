(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{378:function(a,t,e){"use strict";e.r(t);var s=e(45),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"linux-中-git-学习笔记-四"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-中-git-学习笔记-四"}},[a._v("#")]),a._v(" Linux 中 Git 学习笔记（四）")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#追踪分支"}},[a._v("追踪分支")])]),e("li",[e("a",{attrs:{href:"#在git库内搜素字段"}},[a._v("在git库内搜素字段")])]),e("li",[e("a",{attrs:{href:"#回到上次提交状态"}},[a._v("回到上次提交状态")])]),e("li",[e("a",{attrs:{href:"#恢复某个文件"}},[a._v("恢复某个文件")])]),e("li",[e("a",{attrs:{href:"#撤销最近一次提交"}},[a._v("撤销最近一次提交")])]),e("li",[e("a",{attrs:{href:"#撤销上上次提交"}},[a._v("撤销上上次提交")])]),e("li",[e("a",{attrs:{href:"#修改上次提交的错误"}},[a._v("修改上次提交的错误")])]),e("li",[e("a",{attrs:{href:"#压缩操作"}},[a._v("压缩操作")])]),e("li",[e("a",{attrs:{href:"#进行仓库一致性检查"}},[a._v("进行仓库一致性检查")])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"追踪分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#追踪分支"}},[a._v("#")]),a._v(" 追踪分支")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git branch --track experimental origin/experimental\n")])])]),e("p",[a._v("它会自动从 origin 抓取（fetch）内容，再把远程的 origin/experimental 分支 合并进（merge）本地的 experimental 分支"),e("br"),a._v("\n当要把修改推送（push）到 origin 时，它会将你本地的 experimental 分支中的修改推送到origin 的 experimental 分支里，而无需指定它（origin）")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git pull experimental\n")])])]),e("h2",{attrs:{id:"在git库内搜素字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在git库内搜素字段"}},[a._v("#")]),a._v(" 在git库内搜素字段")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git grep <字段>\n# 显示行号\ngit grep -n <字段>\n# 只显示文件名\ngit grep --name-only <字段>\n# 每个文件中有多少行匹配该字段\ngit grep -c xmmap <字段>\n# 查找在某个特定版本中的字段\ngit grep <字段> <版本号>\n")])])]),e("h2",{attrs:{id:"回到上次提交状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回到上次提交状态"}},[a._v("#")]),a._v(" 回到上次提交状态")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git reset --hard HEAD^\n")])])]),e("h2",{attrs:{id:"恢复某个文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#恢复某个文件"}},[a._v("#")]),a._v(" 恢复某个文件")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git checkout -- <文件名>\n")])])]),e("h2",{attrs:{id:"撤销最近一次提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#撤销最近一次提交"}},[a._v("#")]),a._v(" 撤销最近一次提交")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git revert HEAD\n")])])]),e("h2",{attrs:{id:"撤销上上次提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#撤销上上次提交"}},[a._v("#")]),a._v(" 撤销上上次提交")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git revert HEAD^\n")])])]),e("h2",{attrs:{id:"修改上次提交的错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改上次提交的错误"}},[a._v("#")]),a._v(" 修改上次提交的错误")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git commit --amend\n")])])]),e("h2",{attrs:{id:"压缩操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压缩操作"}},[a._v("#")]),a._v(" 压缩操作")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git gc\n")])])]),e("h2",{attrs:{id:"进行仓库一致性检查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进行仓库一致性检查"}},[a._v("#")]),a._v(" 进行仓库一致性检查")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git fsck\n")])])]),e("blockquote",[e("p",[a._v("2020年07月26日发于简书")])])])}),[],!1,null,null,null);t.default=r.exports}}]);