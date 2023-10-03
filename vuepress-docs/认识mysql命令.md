## 1.简介
mysql 是 MySQL 的命令行客户端，用于连接到 MySQL 服务器并执行 SQL 语句。

它支持交互式和非交互式两种使用方式。以交互方式使用时，查询结果以 ASCII 表格式呈现。 当以非交互方式使用时（例如，作为过滤器），结果以制表符分隔的格式显示。 可以使用命令选项更改输出格式。

mysql 命令格式：
```shell
mysql [OPTIONS] DB_NAME
```
比如
```shell
mysql -h HOST_NAME -u USER_NAME -p DB_NAME

# 或
mysql --host=HOST_NAME --user=USER_NAME --password DB_NAME
```
使用选项 -p 或 --password 但不指定密码，在这种情况下，需要根据提示以交互的方式输入密码。

成功连接服务器后，键入 SQL 语句并以`;`、`\g`或`\G`结尾，然后按 Enter 便可以交互方式执行 SQL 语句。退出交互会话键入 quit 或 exit 指令。

当然，你也可以直接在命令行指定密码。但是这样做不太安全，因为这样会导致密码暴露在命令历史或进程列表中，存在安全风险，所以不推荐这么做。
```shell
# 注意选项与密码之间没有空格
-pPWD

# 或
--password=PWD
```
我们也可以将 SQL 语句写入脚本文件(批处理文件)中，通过 mysql 解析执行。
```shell
mysql DB_NAME < script.sql > output.tab
```
MySQL 服务器缺省端口为 3306，如果需要指定其他端口，需要使用选项 -P 或 --port 指定。
```shell
-P PORT_NUM
# 或
--port=PORT_NUM
```
## 2.选项
除了前面介绍的连接数据库用到的相关选项外，mysql 命令有很多选项，这里列一些较为常用的选项。
```
--help, -?
	显示帮助信息并退出。
--auto-rehash
	启用自动重新哈希，缺省开启。当启用了--auto-rehash选项后，在输入命令时，MySQL客户端会自动为您提数据库、表和列名称的自动补全和提示，使得查询和使用数据库更加方便和高效。
-A, --no-auto-rehash
	禁用自动重新哈希。不对数据库、表与列名重新哈希，因此禁用了数据库、表和列名的自动补全功能，可以提高 mysql 启动速率。
--auto-vertical-output
	当结果集相对于当前窗口太宽时，自动转换水平输出为垂直输出。
-B, --batch
	使用制表符作为列分隔符打印结果，每行占一个新行。 使用此选项，mysql 不使用历史文件。mysql 命令交互过程会将用户的所有输入记录在一个隐藏文件 /root/.mysql_history。每次退出 mysql 交互模式时，会将交互过程中的所有命令操作一次性写入 ~/.mysql_history 隐藏文件中。下次执行 mysql 时，可以使用键盘的向上键获取历史命令。类似于 Shell 获取历史命令。该选项一般用于 Shell 脚本中执行 SQL 语句，命令行模式下需要交互指定 SQL 语句，故不使用该选项。
-N, --skip-column-names
	查询结果不输出列名。
--database, -D DB_NAME
	指定要使用的数据库。这主要在选项文件中有用。
--default-character-set=CHARSET
	设置默认的字符集。
-e, --execute=STATEMENT
	执行指定的 SQL 语句并退出。默认输出格式类似于使用 --batch 生成的格式。
-E, --vertical
	垂直打印输出行（每列值一行）。 如果没有此选项，您可以通过用 \G 终止各个语句来指定垂直输出。
-t, --table
	显示查询结果以表格形式输出。这是交互式使用的默认输出形式，但可用于以批处理模式生成表输出。
-R, --raw
	显示查询结果以原始格式输出。
--show-warnings
	如果有的话，会在每个语句后显示警告。 此选项适用于交互和批处理模式。
--tee=FILE_NAME
	将输出拷贝一份到给定文件。 此选项仅在交互模式下有效。
-v, --verbose
	显示详细的执行信息。
-V, --version
	显示版本信息并退出。
```
使用`mysql --help`可查看更加详细的选项说明。当然也可以查看 mysql 命令手册（`man mysql`）或官方文档 [mysql Client Options](https://dev.mysql.com/doc/refman/8.1/en/mysql-command-options.html)。

命令行交互模式下一般为了快速启动会使用`-A`选项不对数据库、表与列名重新哈希。在 Shell 脚本使用 mysql 执行 SQL  语句时经常使用选项`-NBA`。

## 3.子命令
mysql 将您发出的每个 SQL 语句发送到服务器来执行。 还有一组mysql本身解释的命令。 要获取这些命令的列表，请在 mysql> 提示符下键入 help 或 \h。
```
?         (\?) Synonym for `help'.
clear     (\c) Clear the current input statement.
connect   (\r) Reconnect to the server. Optional arguments are db and host.
delimiter (\d) Set statement delimiter.
edit      (\e) Edit command with $EDITOR.
ego       (\G) Send command to mysql server, display result vertically.
exit      (\q) Exit mysql. Same as quit.
go        (\g) Send command to mysql server.
help      (\h) Display this help.
nopager   (\n) Disable pager, print to stdout.
notee     (\t) Don't write into outfile.
pager     (\P) Set PAGER [to_pager]. Print the query results via PAGER.
print     (\p) Print current command.
prompt    (\R) Change your mysql prompt.
quit      (\q) Quit mysql.
rehash    (\#) Rebuild completion hash.
source    (\.) Execute an SQL script file. Takes a file name as an argument.
status    (\s) Get status information from the server.
system    (\!) Execute a system shell command.
tee       (\T) Set outfile [to_outfile]. Append everything into given outfile.
use       (\u) Use another database. Takes database name as argument.
charset   (\C) Switch to another charset. Might be needed for processing binlog with multi-byte charsets.
warnings  (\W) Show warnings after every statement.
nowarning (\w) Don't show warnings after every statement.
resetconnection(\x) Clean session context.
query_attributes Sets string parameters (name1 value1 name2 value2 ...) for the next query to pick up.
ssl_session_data_print Serializes the current SSL session data to stdout or file.
```
如果要获取服务器端帮助，请输入“help contents”。

上面的子命令中，有几个常用的子命令需要关注一下。
- ? 和 help 查看子命令。
- ego (\G) 可将查询结果垂直输出，即每列单独一行输出。
- use (\u) 切换数据库。
- exit 和 quit 退出 mysql。

## 4.小结
通过本篇文章，您已经了解了 MySQL 命令行工具 mysql 的基本用法、常用选项与子命令，比如通过 mysql 轻松连接数据库。

通过 MySQL 命令行工具 mysql，我们可以以交互或非交互的方式与数据库建立连接，执行我们想要的操作。

---
## 参考文献
[mysql — The MySQL Command-Line Client](https://dev.mysql.com/doc/refman/8.1/en/mysql.html)

<Vssue title="认识mysql命令" />