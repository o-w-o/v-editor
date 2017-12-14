# 创建并发布 npm 包

## 1.npm 官网创建账户

网站地址：[https://www.npmjs.com/](https://www.npmjs.com/)

网站注册地址：[https://www.npmjs.com/signup](https://www.npmjs.com/signup)

## 2.命令行工具登录

登录
`$ npm login`

验证
`$ npm who am i`

## 3.创建 npm 库

`$ npm init` 生成 `package.json` 文件

## 4.编写

例如:

```text

- index.js
- package.json

```

** index.js **

```js

exports.sayHello=function(){
　　　　return "Hello, world!";
};

```

## 5.发布

`$ npm publish`

## 6.验证是否发布成功

`$ npm install <YOUR_NPM_PACKAGE_NAME>`

## 7.版本更新

`$ npm version <UPDATE_TYPE> -m "<message>"`

注:其中 update_type 有三种

- `patch` 增加一位补丁号（比如 1.1.1 -> 1.1.2）
- `minor` 增加一位小版本号（比如 1.1.1 -> 1.2.0）
- `major` 增加一位大版本号（比如 1.1.1 -> 2.0.0）
- eg -> `$ npm version patch -m "Version %s - v1.0.2"`

`$ npm publish` 提交更新的版本

## 8.舍弃某个版本的模块

`$ npm deprecate <PACKAGE_NAME>[@<version>] <message>`

## 9.撤销已发布的版本

删除要用force强制删除。超过24小时就不能删除了。自己把握好时间。
`$ npm --force unpublish <PACKAGE_NAME>`

## 10.注意事项

a. 发布的时候用国内镜像会报错，我们应使用默认的：
`$ npm config set registry http://registry.npmjs.org`

b. npm 包 `package.json` 中 `registory` 属性一定要填写，每次publish npm 时p ackage.json 中 version 版本一定要大于上一次。

c. `npm publish failed put 500, unexpected status code 401` 这样的报错信息，往往是没有登录成功，操作 `$ npm login`

d. npm包的name是唯一的，如果有同名，发布时会报错

最后推荐一个网址：
[http://javascript.ruanyifeng.com/nodejs/npm.html#toc19](http://javascript.ruanyifeng.com/nodejs/npm.html#toc19)
