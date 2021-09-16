#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git init
git add -A
git commit -m 'deploy 🚀'

# 如果你想要部署到 https://USERNAME.github.io
# git push -f git@github.com:chenjing0823/chenjing0823.github.io.git master
git push -f git@github.com:13812700839/MyVuePress.git master
# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
git push -f git@github.com:13812700839/MyVuePress.git master:gh-pages

cd -