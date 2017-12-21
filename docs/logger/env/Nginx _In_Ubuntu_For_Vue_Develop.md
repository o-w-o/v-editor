# Nginx Ubuntu 快速安装

参考:

- [nginx: Linux packages](http://nginx.org/en/linux_packages.html)

- [使用Nginx实现反向代理](http://blog.csdn.net/lishaojun0115/article/details/53200629)

- [解决 Webpack "Invalid Host Header"](http://blog.csdn.net/salmonellavaccine/article/details/75332654)

## 简记

1. 下载 [Key](http://nginx.org/keys/nginx_signing.key)

1. 加入 Key 

    ```
    $ sudo apt-key add nginx_signing.key
    ```

1. 新增 源 - **记得先备份!**

    ```shell
    $ sudo vim /etc/apt/sources.list
    ```

    加入

    ```bash
    deb http://nginx.org/packages/ubuntu/ zesty nginx
    deb-src http://nginx.org/packages/ubuntu/ zesty nginx
    ```
    注: 使用 Ubuntu 17.04 故使用 `zesty`

1. 更新 并 安装

    ```shell
    $ sudo apt-get update
    $ sudo apt-get install nginx
    ```

1. 修改配置 `/etc/nginx/nginx.conf` - **记得先备份!**

    ```bash
    upstream vuedev{
        server 127.0.0.1:8080;
    }

    server {
        listen 80;
        server_name localhost;

        location / {
           proxy_pass http://vuedev; 
           index  index.html;
        }
        
    }
    ```

1. 重启生效

    ```shell
    $ sudo service nginx restart
    ```