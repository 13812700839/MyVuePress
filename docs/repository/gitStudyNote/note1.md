# Linux 中 Git 学习笔记（一）

[[TOC]]


## 克隆git仓库
```
git clone <git仓库的URL>
```
## 创建并初始化git仓库（在仓库内执行）  
```
git init
```
## 查看当前git仓库的状态
```
git status
```
## 用git add命令将新建文件加入缓存区
```
git add <文件名>
```
## 查看缓存区哪些文件被修改
```
git diff --cached
```
## 提交文件到本地仓库
```
git commit -m "提交文件注释"
```
## 连接git远程仓库
```
git remote add origin <git仓库的URL>
```
## 创建git新分支
```
git branch <分支名>
```
## 查看当前分支
```
git branch
```
## 分支合并
```
git merge -m '合并信息注释' <分支名>
```
## 删除分支
```
# 删除已合并的分支
git branch -d <分支名>
# 强制删除分支
git branch -D <分支名>
```
## 撤销一个合并
```
git reset --hard HEAD^
```
## 显示所有提交
```
git log
git log --stat
```
## 格式化日志输出
```
git log --pretty=oneline
git log --pretty=short
git log --graph --pretty=oneline
```
## 日志排序
```
git log --pretty=format:'%h : %s' --topo-order --graph
```
- --reverse 参数来逆向显示所有提交日志  

## Git 的基本流程如下：  
1. 创建或修改文件
2. 使用 git add 命令添加新创建或修改的文件到本地的缓存区（Index）
3. 使用 git commit 命令提交到本地代码库
4. （可选，有的时候并没有可以同步的远端代码库）使用git push命令将本地代码库同步到远端代码库

## 小结
- git config：配置相关信息
- git clone：复制仓库
- git init：初始化仓库
- git add：添加更新内容到索引中
- git diff：比较内容
- git status：获取当前项目状况
- git commit：提交
- git branch：分支相关
- git checkout：切换分支
- git merge：合并分支
- git reset：恢复版本
- git log：查看日志  



> 2020年07月23日发于简书 [文章地址](https://www.jianshu.com/p/f86b68244eb3)
