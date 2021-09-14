# NodeJS安装配置（ZIP版）

[[TOC]]

## 一、下载NodeJS的ZIP安装包

根据系统版本去NodeJS官网下载ZIP安装包

NodeJS官网：[https://nodejs.org/en/](https://nodejs.org/en/)

下载完成，解压到指定路径

## 二、配置和安装

### 1. 配置node的缓存路径和全模块路径

在node安装目录下新建node_cache和node_global两个文件夹

输入以下命令

```
npm config set prefix "D:\project\tools\node-v14.16.1-win-x64\node_global"

npm config set cache "D:\project\tools\node-v14.16.1-win-x64\node_cache"
```

![image.png](https://upload-images.jianshu.io/upload_images/23708684-e664cb2f5582b924.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**注意：引号内的路径根据自己的具体路径进行修改**

### 2. 配置环境变量

创建环境变狼NODE，node的安装路径

在Path中添加%NODE%，%NODE%\node_global

检查node版本，输入命令node –v

![image.png](https://upload-images.jianshu.io/upload_images/23708684-de22f82458877384.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 3. 安装全模块

输入命令npm install express –g

![image.png](https://upload-images.jianshu.io/upload_images/23708684-edffa2e072eca4f4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 三、测试运行

创建一个项目进行测试

输入命令express –t ejs demo

![image.png](https://upload-images.jianshu.io/upload_images/23708684-d4c84576a882ed24.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


安装依赖，运行项目

输入命令cd demo，npm install，npm start

![image.png](https://upload-images.jianshu.io/upload_images/23708684-729fd2bbab6f0f93.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


> 2021年06月24日发于简书 [文章地址](https://www.jianshu.com/p/e3e000c67c81)
