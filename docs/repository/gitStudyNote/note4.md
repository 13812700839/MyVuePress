# Linux 中 Git 学习笔记（四）

[[TOC]]


## 追踪分支
```
git branch --track experimental origin/experimental
```
它会自动从 origin 抓取（fetch）内容，再把远程的 origin/experimental 分支 合并进（merge）本地的 experimental 分支  
当要把修改推送（push）到 origin 时，它会将你本地的 experimental 分支中的修改推送到origin 的 experimental 分支里，而无需指定它（origin）  
```
git pull experimental
```
## 在git库内搜素字段
```
git grep <字段>
# 显示行号
git grep -n <字段>
# 只显示文件名
git grep --name-only <字段>
# 每个文件中有多少行匹配该字段
git grep -c xmmap <字段>
# 查找在某个特定版本中的字段
git grep <字段> <版本号>
```
## 回到上次提交状态
```
git reset --hard HEAD^
```
## 恢复某个文件
```
git checkout -- <文件名>
```
## 撤销最近一次提交
```
git revert HEAD
```
## 撤销上上次提交
```
git revert HEAD^
```
## 修改上次提交的错误
```
git commit --amend
```
## 压缩操作
```
git gc
```
## 进行仓库一致性检查
```
git fsck
```



> 2020年07月26日发于简书 [文章地址](https://www.jianshu.com/p/b62d037f6c75)
