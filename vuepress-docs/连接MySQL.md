## 1.连接本地 MySQL
首先打开 Shell 命令行终端。按如下格式键入命令。
```shell
mysql -u USER_NAME -p[PWD] -A
```

注意密码是可选的，如果在命令行指明则与选项 -p 之间不能有空格。

命令选项 -A（--no-auto-rehash）的作用是禁止数据库名、表名和字段名自动补全。如果数据库数据表很多，当我们打开数据库时，比如使用 use 切换数据库时，需要对数据表进行预处理以满足自动补全的功能，将会很耗时。使用 -A 可禁止该操作。

如果刚安装好 MySQL，超级用户 root 没有密码，直接回车即可连接 MySQL 服务器。

键入如下命令，回车后提示输入密码。
```shell
mysql -u root -p -A
```
如果成功连接 MySQL 服务器，你将会看到如下的 mysql 命令行提示符。
```shell
mysql>
```
mysql 命令结束使用分号`;`、`\g` 或 `\G`。其中 `\G` 可以将结果垂直打印，每列值独占一行。

## 2.连接远程 MySQL
假设远程主机的 IP 为 110.110.110.110，用户名为 root，密码为 abc123。则键入以下命令：
```shell
mysql -h 110.110.110.110 -u root -pabc123
```
- 选项 -h 与 IP 地址、-u 与用户名之间可以有空格，也可以没有空格。
- 如果在选项 -p 后指明密码，则密码与 -p 之间不能有空格。
- MySQL 服务端口默认是 3306，如果不是可使用 -P 或 ----port 指定。

## 3.退出 MySQL
```sql
exit;

# 或
quit;
```
## 4.查看 MySQL 版本
```sql
SELECT VERSION();

# 或
SHOW VARIABLES LIKE "version";
```
