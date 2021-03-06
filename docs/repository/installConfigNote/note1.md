# MongoDB的安装配置（ZIP版）

[[TOC]]

## 一、 准备工作

从MongoDB官网下载MongoDB的ZIP安装包

官网链接：[https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

选择MongoDB Community Server，选择对应版本、平台

![image.png](https://13812700839.github.io/MyImageBed/images/repository/installConfigNote/note1-1.png)

下载完成后解压到自己的路径

## 二、 文件配置与安装

### 1. 文件配置

进入解压后的文件夹，新建data和log文件夹，并在log文件夹下，新建mongo.log空文件

新建mongo.conf文件与bin文件夹同级

mongo.conf写入以下内容

```
# 数据库路径
dbpath=E:\other_dev\mongodb\data

# 日志输出文件路径
logpath=E:\other_dev\mongodb\logs\mongo.log 

# 错误日志采用追加模式
logappend=true

# 启用日志文件，默认启用
journal=true

# 这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
quiet=true

# 端口号 默认为27017
port=27017
```

**注：dbpath和logpath根据自己的具体路径进行修改**

### 2. 安装

从bin文件夹下进入命令行执行

```
mongod --config "E:\other_dev\mongodb\mongo.conf"
```

**注：引号内的路径换成刚刚配置文件的路径**

执行后没有任何反应，则关掉该窗口

## 三、 运行测试

### 1. 从bin文件夹下进入命令行执行

```
mongod --dbpath E:\other_dev\mongodb\data
```

**注：引号内的路径换成自己存放数据库的路径**

### 2. 启动完成后，不要关掉该窗口，重新从bin文件夹下进入命令行执行

```
mongo
```

进入mongo命令行模式

> 2021年06月19日发于简书 [文章地址](https://www.jianshu.com/p/4092643aa3c3)  
> 2021年07月13日发于知乎 [文章地址](https://zhuanlan.zhihu.com/p/389247092)  
> 2021年07月31日发于CSDN [文章地址](https://blog.csdn.net/qq_46106320/article/details/119269582)