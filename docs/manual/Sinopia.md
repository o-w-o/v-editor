# 利用Sinopia搭建私有npm包

- 参考：[npm本地化仓库Sinopia](http://blog.csdn.net/liulangdeshusheng/article/details/72771635)
- 参考：[利用Sinopia搭建私有npm包](https://www.cnblogs.com/sghy/p/6839463.html)

## 1. 安装

安装sinopia包

`$ npm install -g sinopia`

如果是Windows系统用上面的方式安装sinopia很有可能报错，推荐使用下面方式安装：

`$ npm install sinopia --no-optional --no-shrinkwrap`

## 2. 配置

默认配置文件路径 -> `C:\Users\{UserName}\AppData\Roaming\sinopia\config.yaml`，可以通过 sinopia 命令的 `-c` 选项 指定配置文件，如：`$ sinopia -c D:\sinopia\config.yaml`

### 配置

#### 配置 npm

```bash

npm set registry http://localhost:4873/

npm set ca null
# if you use HTTPS, add an appropriate CA information
# ("null" means get CA list from OS)

```

### sinopia 默认配置

```bash
# 存储的路径
storage: ./storage

auth:
  htpasswd:
    #使用htpasswd保存用户验证信息
    file: ./htpasswd
    # Maximum amount of users allowed to register, defaults to "+inf".
    # You can set this to -1 to disable registration.
    #max_users: 1000

# a list of other known repositories we can talk to
uplinks:
  npmjs:
    #如果sinopia本地仓库不存在包时，默认下载的npm仓库，国内可以配置淘宝的 https://registry.npm.taobao.org
    url: https://registry.npmjs.org/

packages:
  '@*/*':
    # scoped packages
    access: $all
    publish: $authenticated

  '*':
    # allow all users (including non-authenticated users) to read and
    # publish all packages
    #
    # you can specify usernames/groupnames (depending on your auth plugin)
    # and three keywords: "$all", "$anonymous", "$authenticated"
    access: $all

    # allow all known users to publish packages
    # (anyone can register by default, remember?)
    publish: $authenticated

    # if package is not available locally, proxy requests to 'npmjs' registry
    proxy: npmjs

# log settings
logs:
  - {type: stdout, format: pretty, level: http}
  #- {type: file, path: sinopia.log, level: info}

```

### 添加用户

```bash

$ npm adduser --registry http://localhost:4873/

> Username: clc
> Password: clc
> Email: (this IS public) c@l.c

```

### 登陆

添加完用户后,可以使用 npm 登陆了

```bash

$ npm login

> Username: clc
> Password: clc
> Email: (this IS public) clc@cc.com
> Logged in as clc on http://localhost:4873/.

```

这样你就可以使用sinopia来发布了。

## 3.启动

启动sinopia

`$ sinopia`

## 4.测试

- 打开浏览器地址 http://localhost:4873/ 检查是否部署成功
- 上传npm包后查看 npm 包是否发布成功

## 5.遇到了问题

- 阅读本文的参考文章
- 百度 || 谷歌 || Stack Overflow

## 6.扩展阅读

- [创建并发布npm包](http://www.cnblogs.com/sghy/p/6829747.html)

## Over！
