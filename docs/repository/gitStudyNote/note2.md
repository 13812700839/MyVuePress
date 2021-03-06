# Linux 中 Git 学习笔记（二）

[[TOC]]


## 比较修改或提交的内容
```
git diff
```
## 比较两分支的差别
```
git diff <分支 1> <分支 2>
```
## 仅比较某个文件或目录
```
git diff <分支名> <文件名或目录名>
```
## 统计那些文件有改动
```
git diff <分支名> --stat
```
## 合并不同目录的修改文件
```
git pull <绝对路径>
# 经常性
git remote add <目录名> <目录绝对路径>
# 从远程分支抓取最新修改消息
git fetch <目录绝对路径>
# 查看远程分支所做的修改
git log -p <分支名> -- <目录名/分支名>
# 合并分支
git merge <目录名/分支名>
克隆得到的更新
git pull
```
## 公共 git 仓库的克隆 SSh 地址
```
git clone ssh://服务器/账号/仓库名称
```
## 推送本地修改到公共 git 仓库
```
git push ssh://服务器仓库地址 master:master
git push ssh://服务器仓库地址 master
```
## 选择其中一个记录标志为 stable-1 的标签
```
# commit 的名称很长，通常我们只需要写前面 8 位即可
git tag <标签名> <commit前八位>
```
## 查看当前所有 tag
```
git tag
```
git tag 中使用 -a， -s 或是 -u 三个参数中任意一个，都会创建一个标签对象，并且需要一个标签消息来为 tag 添加注释。 如果没有 -m 或是 -F 这些参数，命令执行时会启动一个编辑器来让用户输入标签消息  
```
git tag -a <标签名> <commit前八位> -m "标签信息"
```



> 2020年07月24日发于简书 [文章地址](https://www.jianshu.com/p/54628961ebb0)
