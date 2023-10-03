## 1.新建用户
连接到 MySQL 服务器后，管理员或特权用户可以使用 CREATE USER 语句创建新用户。
```sql
CREATE USER 'username'@'host' IDENTIFIED BY 'password';

# 示例
CREATE USER lvlv@"%";
CREATE USER lvlv@"%" IDENTIFIED BY 'lvlv';
CREATE USER lvlv@localhost IDENTIFIED BY 'lvlv';
CREATE USER lvlv@192.168.1.1 IDENTIFIED BY 'lvlv';
```
username 是将要创建的用户名。

host 指定该用户在哪个主机上可以登录，如果是本地用户可用 localhost，如果想让该用户可以从任意远程主机登录，可以使用通配符 %。

password 是用户的登录密码，密码可以为空，如果为空则该用户可以不需要密码登录 MySQL 服务器。

创建的用户信息存放于 mysql.user 数据表中。
## 2.删除用户
连接到 MySQL 服务器后，管理员或特权用户可以使用 DROP USER 语句删除指定的用户。
```sql
DROP USER 'username'@'host';

# 示例
DROP USER lvlv@localhost;
```
删除用户时，主机名要与创建用户时使用的主机名一致。

## 3.用户授权
在 MySQL 中，要为用户授予数据库操作权限，可以使用 GRANT 语句进行用户授权。GRANT 语句允许管理员或特权用户授予其他用户对数据库、表、列等对象的特定权限。授权后，被授权用户可以执行授予的权限操作。
```sql
GRANT privilege_type ON dbname.tablename TO 'username'@'host';

# 示例
GRANT SELECT, INSERT ON *.* TO lvlv@'%';
GRANT ALL ON *.* TO lvlv@'%';
```
在授权用户权限之后，要使新权限生效，需要使用刷新权限。
```sql
FLUSH PRIVILEGES;
```
privilege_type 是一个用逗号分隔的赋予用户的权限列表，如 SELECT , INSERT , UPDATE 等（详细列表见该文末）。如果要授予所有权限则使用 ALL。

dbname 为数据库名，tablename 为表名，如果要授予用户对所有数据库和表的权限可用`*.*`表示所有库表。

使用 GRANT 为用户授权时，如果指定的用户不存在，则会新建该用户并授权。设置允许用户远程访问 MySQL 服务器时，一般使用该命令，并指定密码。
```sql
GRANT SELECT, INSERT ON *.* TO lvlv@'%' IDENTIFIED BY '123456';
```
## 4.撤销用户权限
在 MySQL 中，要撤销用户的权限，可以使用 REVOKE 语句进行权限撤销。REVOKE 语句允许管理员或特权用户从其他用户中撤销已经授予的权限。
```sql
REVOKE privilege_type ON dbname.tablename FROM 'username'@'host';

# 示例
REVOKE SELECT ON *.* FROM lvlv@'%';
REVOKE ALL ON *.* FROM 'lvlv'@'%';
```
假如给用户`'pig'@'%'`授权时使用下面（或类似）这种方式。
```sql
GRANT SELECT ON test.user TO 'pig'@'%’
```
则在使用下面的命令撤销用户对所有数据库表权限时，并不能撤销该用户对 test 数据库中 user 表的 SELECT 权限。
```sql
REVOKE SELECT ON *.* FROM  'pig'@'%';
```
相反，如果授权时指定的是所有数据库表。
```sql
GRANT SELECT ON *.* TO 'pig'@'%’;
```
撤销用户某个库表的权限时，使用下面命令也不能撤销该用户对 test 数据库中 user 表的 SELECT 权限。
```sql
REVOKE SELECT ON test.user FROM 'pig'@'%';
```
具体信息可以用命令`SHOW GRANTS FOR 'pig'@'%';` 查看。

## 5.查看用户权限
在 MySQL 中，有多种方法可以查看用户的权限。

- 使用 SHOW GRANTS 语句。
```sql
SHOW GRANTS FOR 'username'@'host';

# 示例
SHOW GRANTS FOR lvlv@localhost;
SHOW GRANTS FOR lvlv;
```
不指定主机名称，默认为任意主机"%"。

- 查询 INFORMATION_SCHEMA.SCHEMA_PRIVILEGES 表。
```sql
SELECT * FROM INFORMATION_SCHEMA.SCHEMA_PRIVILEGES;
```
- 查询 mysql.user 表。

可以从 mysql.user 表中查看所有用户信息，包括用户的权限。
```sql
SELECT * FROM mysql.user WHERE user='username';
```
## 6.修改用户密码
- SET PASSWORD

使用 SET PASSWORD 语句可以修改指定用户的密码。
```sql
SET PASSWORD FOR 'username'@'host' = PASSWORD('new_password');

# 示例
SET PASSWORD FOR lvlv@localhost=PASSWORD('123456');
```
如果是当前登录用户则不需要指定用户名。
```sql
SET PASSWORD = PASSWORD("newpassword");
```

- ALTER USER

MySQL 5.7 版本及以上支持 ALTER USER 语句修改用户密码。
```sql
ALTER USER 'username'@'host' IDENTIFIED BY 'new_password';
```
- 更新 mysql.user 表中的密码字段。

注意，使用这种方法需要谨慎操作，确保您具有足够的特权，并且了解 MySQL 用户表的结构。
```sql
UPDATE mysql.user SET authentication_string = PASSWORD('new_password') WHERE user = 'username' AND host = 'host';
```
修改密码后，一定要执行 FLUSH PRIVILEGES 命令刷新权限，以使新密码生效。

- 使用服务端工具 mysqladmin。

另外，使用服务端工具 mysqladmin 也可以修改用户密码。
```sql
mysqladmin -u 'username' -p 'oldpassword' password 'newpassword'

# 示例
mysqladmin -u 'lvlv' -p '123456' password "123321"
```
## 7.权限类型
MySQL 权限可以分为三种类型：数据库、数据表和数据列的权限。从 mysql.user 表中可查看用户权限信息。
```sql
SELECT * from mysql.user WHERE user='username' \G
```
权限有：
```
Select_priv: 查看数据表；
Insert_priv: 插入数据表；
Update_priv: 更新数据表；
Delete_priv: 删除数据表记录；
Create_priv: 创建数据库和数据表；
Drop_priv: 删除数据库和数据表；
Reload_priv: 允许使用FLUSH； 
Shutdown_priv: 允许使用mysqladmin shutdown；
Process_priv: 允许使用SHOW FULL PROCESSLIST查看其他用户的进程；
File_priv: 允许使用SELECT… INTO OUTFILE and LOAD DATA INFILE；
Grant_priv: 允许使用grant为用户授权；
References_priv: 未来功能的占位符；现在没有作用；
Index_priv: 确定用户是否可以创建和删除表索引；
Alter_priv: 确定用户是否可以重命名和修改表结构；
Show_db_priv: 确定用户是否可以查看服务器上所有数据库的名字，包括用户拥有足够访问权限的数据库。可以考虑对所有用户禁用这个权限，除非有特别不可抗拒的原因；
Super_priv: 确定用户是否可以执行某些强大的管理功能，例如通过KILL命令删除用户进程，Allows use of CHANGE MASTER, KILL, PURGE MASTER LOGS, and SET GLOBAL SQL statements. Allows mysqladmin debug command. Allows one extra connection to be made if maximum connections are reached；
Create_tmp_table_priv: 创建临时表；
Lock_tables_priv: 可以使用LOCK TABLES命令阻止对表的访问修改；
Execute_priv: 执行存储过程。此权限只在MySQL5.0及更高版本中有意义。
Repl_slave_priv: 读取用于维护复制数据库环境的二进制日志文件。此用户位于主系统中，有利于主机和客户机之间的通信；
Repl_client_priv: 确定用户是否可以确定复制从服务器和主服务器的位置；
Create_view_priv: 创建视图。此权限只在MySQL5.0及更高版本中有意义；
Show_view_priv: 查看视图或了解视图如何执行。此权限只在MySQL5.0及更高版本中有意义。关于视图的更多信息；
Create_routine_priv: 更改或放弃存储过程和函数。此权限是在MySQL5.0中引入；
Alter_routine_priv: 修改或删除存储函数及函数。此权限是在MySQL5.0中引入的；
Create_user_priv: 执行CREATE USER命令，这个命令用于创建新的MySQL账户；
Event_priv: 确定用户能否创建、修改和删除事件。这个权限是MySQL 5.1.6新增；
Trigger_priv: 创建和删除触发器，这个权限是MySQL 5.1.6新增的；

MySQL 特别权限： 
ALL: 允许做任何事(和root一样)； 
USAGE: 只允许登录，其它什么也不允许做。
```

---
## 参考文献
[Account Management Statements - MySQL](https://dev.mysql.com/doc/refman/8.1/en/account-management-statements.html)

<Vssue title="DCL数据控制" />