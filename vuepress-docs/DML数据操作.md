## 1.插入记录
### INSERT
使用 INSERT INTO 语句可以向数据表插入数据。

INSERT INTO 有三种形式：
```sql
INSERT INTO tbl_name SELECT...

INSERT INTO tbl_name SET column1=value1,column2=value2...

INSERT INTO tbl_name(column1,column2,...) VALUES(value1,value2,...);
```
以下是一些插入示例。
```sql
# 使用 SELECT 结果集进行插入
INSERT INTO tbl_name1 SELECT * FROM tbl_name2;

# 注意，tbl_name2 数据表的定义要与 tbl_name1 相同，不同的话，则需要指定需要插入的列
INSERT INTO tbl_name1(col0,col1,col2) SELECT col0,col1,col2 FROM tbl_name2;

# 使用 INSET INTO SET
INSERT INTO student SET 
name='lvlv0', school='software', grade='first year',major='software engineering',gender=0

# 插入一行
INSERT INTO student(name,school,grade,major,gender)
VALUES('lvlv','software','first year','software engineering',0);

# 如果插入值刚好与数据表的所有列一一对应，那么可以省略书写插入的指定列
INSERT INTO student
VALUES('lvlv','software','first year','software engineering',0);

# 插入多行
INSERT INTO student VALUES
('lvlv','software','first year','software engineering',0),
('lvlv1','software','first year','software engineering',0);
```
### REPLACE
除了使用 INSERT 语句向数据表插入数据，还可以使用 REPLACE。

如果发现表中已经有此行数据（根据主键或者唯一索引判断）则先删除此行数据，然后插入新的数据，否则直接插入新数据。
```sql
REPLACE INTO tbl_name(col_name, ...) VALUES(...)

REPLACE INTO tbl_name(col_name, ...) SELECT ...

REPLACE INTO tbl_name SET col_name=value, ...
```
REPLACE 语句会返回一个数，来指示受影响的行数目。该数是被删除和被插入的行数和。如果一行被插入同时没有行被删除，则返回 1。如果表包含多个唯一索引，并且新行包含了多个不同唯一索引的旧值，则有可能是一个单一行替换了多个旧行。如果在新行被插入前，有一个或多个旧行被删除，则返回值大于 1。

频繁的 REPLACE INTO 会造成新纪录的主键的值迅速增大。总有一天。达到最大值后就会因为数据太大溢出了。就没法再插入新纪录了。数据表满了，不是因为空间不够了，而是因为主键的值没法再增加了。

如果因唯一索引导致旧行被删除，新纪录与老记录的主键值不同，所以其他表中所有与本表老数据主键建立的关联全部会被破坏。

## 2.删除记录
```sql
DELETE [LOW_PRIORITY] [QUICK] [IGNORE] FROM tbl_name [[AS] tbl_alias]
    [PARTITION (partition_name [, partition_name] ...)]
    [WHERE where_condition]
    [ORDER BY ...]
    [LIMIT row_count]
```
比如删除学号为 10000 的学生记录。
```sql
DELETE FROM student WHERE FROM student_no=10000;
```

## 3.修改记录
```sql
UPDATE [LOW_PRIORITY] [IGNORE] table_reference
    SET assignment_list
    [WHERE where_condition]
    [ORDER BY ...]
    [LIMIT row_count]

value:
    {expr | DEFAULT}

assignment:
    col_name = value

assignment_list:
    assignment [, assignment] ...
```
比如将学号为 10000 的学生性别改为女性。
```sql
UPDATE student SET gender=1 WHERE student_no=1000;
```
如果要更新的列是一个 JSON 类型，比如设置列为 JSON 数组。
```sql
UPDATE my_table SET my_json = JSON_SET(my_json, '$', JSON_ARRAY('apple', 'banana', 'orange')) WHERE id = 1;
```
这里只列出简单的增删改的 DML 操作，关于全面基础的 DML 操作请参考 MySQL 官方文档。

## 4.备份还原数据
mysqldump 是用于转存储 MySQL 数据库的实用程序。

利用 mysqldump 可以用最少的命令来帮助备份数据库。使用一条简单的命令便可将整个数据库输出到单个文本文件中。 该工具用途广泛，足以备份所需的数据库部分，并提供多种选项来更改需要保存的数据。

（1）导出数据库的所有数据表。
```shell
# 命令格式
mysqldump -u 用户名 -p 数据库名 > 导出的文件名

# 示例
mysqldump -u user_name -p123456 database_name > outfile_name.sql
```

（2）还原整个数据库。

在命令行选择一个数据库之后，直接执行 SQL 文件即可。
```shell
mysql> source file.sql;
```

（3）导出一个表到 SQL 文件。
```shell
# 命令格式
mysqldump -u 用户名 -p 密码 数据库名 表名>导出的文件名

# 示例
mysqldump -u user_name -p pwd database_name tbl_name > outfile.sql
```
（4）导入 SQL 文件。

方法同还原整个数据库。

（5）将数据表导出到 CSV 文件。
```sql
# 命令格式
SELECT * FROM [TABLE] INTO OUTFILE '[FILE]';

# 或 
SELECT * FROM [TABLE] INTO OUTFILE '[FILE]' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';  

# 示例
SELECT * FROM student INTO OUTFILE "student.csv";
```
如果不指明文件的输出目录，默认输出至数据库文件的存储目录。可使用命令`find / -name student.csv`来查看具体位置。

如果指定 CSV 文件的输出目录报了如下错误：
```
ERROR 1 (HY000): Can't create/write to file  (Errcode: 13)
```
错误的原因是所在目录没有写权限，给所在的目录增加写权限即可。

（6）导入 CSV 文件。
```sql
# 命令格式
LOAD DATA INFILE 'file' INTO TABLE [TABLE];  

# 或
LOAD DATA INFILE 'file' INTO TABLE [TABLE] FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

# 示例
LOAD DATA INFILE 'file.csv' INTO TABLE student;
```
导入 CSV 文件时有几点需要注意。

- 指定 csv 文件时使用绝对路径，否则 MySQL 默认从数据库存储的目录寻找。
- 在导入时，如果出现如下错误：
```
ERROR 13 (HY000) at line 1: Can't get stat of '/fullpath/file.csv' (Errcode: 13)
```
检查之后并非文件没有可读权限，请使用`LOAD DATA LOCAL INFILE`。

MySQL客户端与服务端在同一台主机时，加不加 LOCAL 是一样的，因为，因为默认从服务器端读取文件。

MySQL客户端与服务端不在同一台主机时，即使用本 MySQL 客户端将本地数据导入远程 MySQL，需要加 LOCAL。

- 默认域分隔符为Tab，空格或其它分隔符需显示指定。

（7）导入 EXCEL 文件。

同导入 CSV 文件的方法一致。注意，导入文件时，都需要提前建立好与文件内各个段对应好的数据表，并且文件的路径需要使用引号括起来，双引号和单引号都可以。

（8）导出远程 SELECT 结果集到本地。

使用如下方法不可行，因为这个语句并不是在MySQL客户端执行，而是在MySQL服务器上执行，通常用于服务器管理员在服务器机器上进行数据备份使用。由于MySQL客户端账号并没有访问服务器机器本身的权限，所以这个SQL执行不会成功。即使有权限，SELECT 结果集会被导出到MySQL服务端，而非本地。
```shell
mysql -h10.10.10.10 -ucrazyant -p123456 -P3306 -e "SELECT * FROM tbl_name WHERE condition INTO OUTFILE '/tmp/file.txt'"
```

正确方法，使用重定向的方式，将 SELECT 结果导出到本地。
```shell
mysql -h10.10.10.10 -ucrazyant -p123456 -P3306 -e "SELECT * FROM tbl_name WHERE condition" > /tmp/file.txt
```

---
## 参考文献
[MySQL 8.0 Reference Manual :: 13.2.7 INSERT Statement](https://dev.mysql.com/doc/refman/8.0/en/insert.html)

[MySQL 8.0 Reference Manual :: 13.2.12 REPLACE Statement](https://dev.mysql.com/doc/refman/8.0/en/replace.html)

[MySQL 8.0 Reference Manual :: 13.2.2 DELETE Statement](https://dev.mysql.com/doc/refman/8.0/en/delete.html)

[MySQL 8.0 Reference Manual :: 13.2.9 LOAD DATA Statement](https://dev.mysql.com/doc/refman/8.0/en/load-data.html)

<Vssue title="DML数据操作" />