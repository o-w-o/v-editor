# Thu Mar 16 13:12:27 CST 2017

## 配置 git

* 安装 git
    ```bash
    apt-get install git
    ```
* 配置

    1. 设置Git的user name和email：
        ```
        git config --global user.name "longyeh"
        ```

        ```
        git config --global user.email "longyeh@outlook.com"
        ```

    2. 生成SSH密钥：

        * 查看ssh密钥是否存：`cd ~/.ssh` 如果没有密钥则不会有此文件夹，有则备份删除

        * 生成密钥：
        ```
        ssh-keygen -t rsa -C "longyeh@outlook.com"
        ```

        * 查看ssh密钥是生成：
        ```
        cd ~/.ssh && ls
        ```
        输出 `id_rsa id_rsa.pub`

    3. 登陆GitXX（`github`， `coding`， etc）帐号，添加“id_rsa.pub”里面的公钥。


## 配置 zsh & oh-my-zsh

* 安装 zsh
    ```
    apt-get install zsh
    ```

* 安装 oh-my-zsh
    ```
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`
    ```

注：[oh-my-zsh github 地址](https://github.com/robbyrussell/oh-my-zsh)


## 配置 java & maven

* 下载 [ java jdk ](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

* 下载 [ maven ](http://maven.apache.org/download.cgi)

* 文件(夹)上传 云服务器`/usr/app`文件夹下（需要新建 `mkdir /usr/app`），
  通过`scp`命令(详细用法使用命令 `man scp` ):
    * 复制文件：
        * 将本地文件拷贝到远程
        scp 文件名用户名@计算机IP或者计算机名称:远程路径
        * 从远程将文件拷回本地
        scp 用户名@计算机IP或者计算机名称:文件名本地路径

    * 复制目录：
        * 将本地目录拷贝到远程
        scp -r 目录名用户名@计算机IP或者计算机名称:远程路径
        * 从远程将目录拷回本地
        scp -r 用户名@计算机IP或者计算机名称:目录名本地路径

* 配置 java 环境变量

    1. 打开文件/etc/profile
    ```
    $ vim /etc/profile
    ```

    2. 追加下列配置
    ```
        JAVA_HOME=/usr/local/app/java/jdk
        JAVA_BIN=/usr/local/app/java/jdk/bin
        PATH=$PATH:$HOME/bin:$JAVA_HOME/bin
        CLASSPATH=$JAVA_HOME/lib/:$JAVA_HOME/jre/lib
        export JAVA_HOME JAVA_BIN PATH CLASSPATH
    ```

    3. 默认启用下载的java（关于 `update-alternatives`：[链接](http://www.path8.net/tn/archives/5545)）
    ```
    $ update-alternatives --install "/usr/bin/java" "java" "/usr/app/java/jdk/bin/java" 1
    $ update-alternatives --install "/usr/bin/javac" "javac" "/usr/app/java/jdk/bin/javac" 1
    $ update-alternatives --install "/usr/bin/javaws" "javaws" "/usr/app/java/jdk/bin/javaws" 1
    $ update-alternatives --set java /usr/app/java/jdk/bin/java
    $ update-alternatives --set javac /usr/app/java/jdk/bin/javac
    $ update-alternatives --set javaws /usr/app/java/jdk/bin/javaws
    ```

    4. 使配置生效
    ```
    $ source /etc/profile
    ```

* 验证 java

    `java -version`
    `javac -version`

* 配置 maven

    1. 打开文件/etc/profile
    ```
    $ vim /etc/profile
    ```

    2. 追加下列配置
    ```
    MAVEN_HOME=/usr/app/maven
    MAVEN_BIN=$MAVEN_HOME/bin
    export MAVEN_HOME MAVEN_BIN
    ```

    3. 默认启用下载的maven（同上）
    ```
    $ update-alternatives --install "/usr/bin/maven" "mvn" "/usr/app/maven/bin/mvn" 1
    $ update-alternatives --set mvn /usr/app/maven/bin/mvn
    ```

    4. 使配置生效
    ```
    $ source /etc/profile

    ```

* 验证 maven

    `mvn -v`

* 使用阿里 maven 镜像,修改maven根目录下的conf文件夹中的setting.xml文件，内容如下：

    ```
    <mirrors>
        <mirror>
          <id>alimaven</id>
          <name>aliyun maven</name>
          <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
          <mirrorOf>central</mirrorOf>
        </mirror>
    </mirrors>

    ```

## 配置 nodejs & npm

* 安装 nodejs（版本:7.x）

    * `curl -sL https://deb.nodesource.com/setup_7.x | bash `

    * `apt-get install nodejs`

* 验证

    `node -v`
    `npm -v`

* 使用淘宝的 cnpm 镜像 [淘宝NPM 镜像 官方首页](https://npm.taobao.org/)：

    * `npm install -g cnpm --registry=https://registry.npm.taobao.org`


## 配置 mysql

* 安装 mysql（版本5.6）：[快速指导:英文](https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/)
* 配置 mysql：

    1. 备份配置文件
    ```
    $ mv /etc/mysql/my.cnf /etc/mysql/my.cnf.bak
    ```

    2. 修改配置文件 `/etc/mysql/my.cnf`, 设置字符集为`utf8`
    ```
    $ vim /etc/mysql/my.cnf
    ```

    对比着在相关字段后添加如下字符集的配置
    ```
    [client]
    default-character-set=utf8

    [mysql]
    default-character-set=utf8

    [mysqld]
    character-set-server=utf8
    init_connect='SET NAMES utf8'

    ```

    3. 重启服务器
    ```
    $ service mysql restart
    ```

## 配置 nginx

* 下载 [nginx](http://nginx.org/download/nginx-1.11.12.zip)（版本 1.11.12）：[官网](http://nginx.org/)
* 编译：

    ```shell
    $ ./configure --prefix=/usr/app/nginx ##根据提示安装必要依赖
    $ make
    $ make install
    ```

    测试编译结果：
    ```shell
    $ ./nginx -t
    # nginx: the configuration file /usr/local/nginx/conf/nginx.conf syntax is ok
    # nginx: configuration file /usr/local/nginx/conf/nginx.conf test is successful
    ```

* 开机自启动

    * 编辑 vi /lib/systemd/system/nginx.service 文件，没有创建一个 touch nginx.service 然后将如下内容根据具体情况进行修改后，添加到nginx.service文件中：

    ```bash
    [Unit]
    Description=nginx1.11.5
    After=network.target remote-fs.target nss-lookup.target

    [Service]

    Type=forking
    PIDFile=/var/run/nginx.pid
    ExecStartPre=/usr/app/nginx/sbin/nginx -t -c /usr/app/nginx/conf/nginx.conf
    ExecStart=/usr/app/nginx/sbin/nginx -c /usr/app/nginx/conf/nginx.conf
    ExecReload=/bin/kill -s HUP $MAINPID
    ExecStop=/bin/kill -s QUIT $MAINPID
    PrivateTmp=true

    [Install]
    WantedBy=multi-user.target
    ```

    * 设置开机启动，使配置生效：
    ```
    systemctl enable nginx.service
    ```




