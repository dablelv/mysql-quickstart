## 1.创建数据库
```sql
CREATE {DATABASE | SCHEMA} [IF NOT EXISTS] db_name
    [create_option] ...

create_option: [DEFAULT] {
    CHARACTER SET [=] charset_name
  | COLLATE [=] collation_name
  | ENCRYPTION [=] {'Y' | 'N'}
}
```
在 MySQL 中，DATABASE 和 SCHEMA 在语法上是等效的，它们都用于创建数据库。在其他 RDBMS（如 Oracle 和 SQL Server）

IF NOT EXISTS 这是一个可选的部分。如果你包含了 IF NOT EXISTS，它将在创建数据库之前检查是否已经存在同名的数据库。如果存在同名数据库，那么不会创建新数据库，也不会引发错误。

db_name 这是要创建的新数据库的名称。你需要替换 db_name 为你希望使用的实际数据库名称。

create_option 这是一个可选的部分，用于指定数据库的一些选项。

- CHARACTER SET [=] charset_name：该选项用于指定数据库的字符集。它定义了在数据库中存储文本数据时要使用的字符编码，例如支持多种语言字符的 utf8mb4。
- COLLATE [=] collation_name：此选项用于指定数据库的排序规则。排序规则决定了在比较和排序文本数据时要使用的规则，例如 utf8mb4_general_ci。
- ENCRYPTION [=] {'Y' | 'N'}：该选项用于指定数据库是否应该启用加密。

例如，要创建一个名为 "mydatabase" 的新数据库，可以执行以下 SQL 语句：
```sql
CREATE DATABASE mydatabase;
```
## 2.删除数据库
```sql
DROP DATABASE db_name;
```
## 3.查看所有数据库
```sql
SHOW DATABASES;
```
## 4.查看当前数据库
```sql
SELECT DATABASE();
```
## 5.选择数据库
```sql
USE db_name
```
## 6.创建数据表
```sql
CREATE [TEMPORARY] TABLE [IF NOT EXISTS] tbl_name (
	col_name col_type [is null] [key] [default value] [extra] [comment],
	...
)[engine] [charset];
```
建表语句除了表名、字段名和字段类型，其它都是可选参数，可有可无，根据实际情况来定。

TEMPORARY 表示是否是临时表。

is null 表示该字段是否允许为空，不为空为 NOT NULL，不指明默认为 NULL。

key 表示该字段是否是主键、外键、唯一键还是索引。

default value 表示该字段在未显示赋值时的默认值。

extra 表示其它的一些修饰，比如自增 auto_increment。

comment 表示对该字段的说明注释。

engine 表示数据库存储引擎，MySQL 支持的常用引擎有 MyISAM、InnoDB、MEMORY 和 ARCHIVE 等，不显示指明默认使用 MyISAM。

charset 表示数据表数据存储编码格式，默认为 latin1。

**存储引擎是什么？**

存储引擎其实就是如何实现存储数据，如何为存储的数据建立索引以及如何更新、查询数据等技术实现的方法。

**主键（Primary Key）与唯一键（Unique Key）有什么区别？**
1. 主键的一个或多个列必须为 NOT NULL，而唯一键可以为 NULL。
2. 一个表只能有一个主键，但可以有多个唯一键。

以学生表为例，演示数据表的创建。

学生表设计：

|字段(Field)|类型(Type)|可空(Null)|键(Key)|	其他(Extra)|
|----|---|---|---|---|
|学号（student_no）|INT UNSIGNED|NOT NULL|PRI|AUTO_INCREMENT|
|姓名（name）|VARCHAR(12)|NOT NULL|N	||
|学院（school）|VARCHAR(12)|NOT NULL|N||
|年级（grade）|VARCHAR(12)|NOT NULL|N||
|专业（major）|VARCHAR(12)|NOT NULL|N||
|性别（gender）|	Boolean|NOT NULL|N||
|爱好(hobby)|VARCHAR(128)|NULL|N||

建表语句：
```sql
CREATE TABLE IF NOT EXISTS student(
    student_no INT UNSIGNED NOT NULL COMMENT '学号' AUTO_INCREMENT,
    name VARCHAR(12) NOT NULL COMMENT '姓名',
    school VARCHAR(12) NOT NULL COMMENT '学院',
    grade VARCHAR(12) NOT NULL COMMENT '年级',
    major VARCHAR(12) NOT NULL COMMENT '专业',
    gender BOOLEAN NOT NULL COMMENT '性别',
    hobby VARCHAR(128) NULL COMMENT '爱好',
    PRIMARY KEY(student_no)
)ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=20160001;
```
观察上面的建表语句需要注意四点：
1. 可以使用 IF NOT EXISTS 来判断数据表是否存在，存在则创建，不存在则不创建，这样可以避免因重复创建表导致失败。
2. 设置主键时可以将 PRIMARY KEY 放在字段的后面来修饰，也可以另起一行单独来指定主键。
3. NOT NULL 表示字段不允许为空，不指明，默认允许为 NULL，也可以显示指明 NULL，表示允许为空。
4. 设置自增时，可以指定自增的起始值，MySQL 默认是从 1 开始自增，比如 QQ 号是从 10000 开始的。
## 7.查看支持和默认的存储引擎
可以使用 SHOW ENGINES 列出所有可用的存储引擎以及每个存储引擎的状态、默认值等信息。在结果中，可以查看 Support 列来确定每个存储引擎是否受支持以及默认的存储引擎是什么。
```sql
SHOW ENGINES;
```
查看默认的存储引擎也可以使用下面的方式。
```sql
SHOW VARIABLES LIKE '%storage_engine';
```
## 8.删除数据表
```sql
DROP [TEMPORARY] TABLE [IF EXISTS]
    tbl_name [, tbl_name] ...
    [RESTRICT | CASCADE]
```
为了避免在尝试删除不存在的表时出现错误，建议您在使用 DROP TABLE 时加上 IF EXISTS 子句。
```sql
# 删除单个数据表。
DROP TABLE tbl_name;

# 数据表存在时才删除，不会产生 Warning。
DROP TABLE IF EXISTS tbl_name;

# 同时删除多个数据表。
DROP TABLE IF EXISTS tbl_name1, tbl_name2,...;
```
## 9.查看数据库的数据表
```sql
# 查看当前数据库。不能使用 limit 子句
SHOW TABLES;

# 模糊查找
SHOW TABLES LIKE '%tbl_name%'

# 查看指定数据库
SHOW TABLES FROM dbname

# 或者
SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbname' AND TABLE_NAME LIKE "tbl_name" LIMIT 5;
```
## 10.查看表结构
```sql
DESC tbl_name;

# 或
DESCRIBE tbl_name;

# 或
SHOW COLUMNS FROM tbl_name;
```
## 11.查看建表语句
```sql
SHOW CREATE TABLE tbl_name;
```
## 12.重命名数据表
```sql
RENAME TABLE tbl_name TO new_tbl_name [, tbl_name2 TO new_tbl_name2] ...
```
## 13.增加、删除和修改字段自增长
（1）删除字段自增长。
```sql
# 命令格式
ALTER TABLE tbl_name CHANGE old_col_name new_col_name column_definition;

# 取消 student_no 的自增长
ALTER TABLE student CHANGE student_no student_no INT(10) UNSIGNED;
```
注意列名称要重复一次，即需要将列的名称写两次，因为一个是旧列明，一个是新列名，即使二者是相同的，新列明也不能省略。

（2）增加字段自增长。
```sql
# 命令格式
ALTER TABLE tbl_name MODIFY col_name col_type AUTO_INCREMENT;

# 或者与上面删除字段自增长相反
ALTER TABLE tbl_name CHANGE old_col new_col col_type AUTO_INCREMENT;

# 示例，添加 student_no 自增长
ALTER TABLE student MODIFY student_no INT(10) UNSIGNED AUTO_INCREMENT;
```
添加自增长的列必须为 NOT NULL 以及 PRIMARY KEY（UNIQUE）。如果不是，需添加相应定义。

（3）修改自增长起始值。
```sql
# 命令格式
ALTER TABLE tbl_name AUTO_INCREMENT=value;

# 设置 student_no 从 10000 开始自增
ALTER TABLE tbl_name AUTO_INCREMENT=10000;
```
注意，设定的起始值 value 只能大于已有的 auto_increment 的整数值，小于的值无效。

使用下面的语句可以看到 Auto_increment 这一列现有的起始值。
```sql
SHOW TABLE STATUS LIKE 'tbl_name';
```

## 14.增加、删除和修改数据表的列
（1）增加列。
```sql
ALTER TABLE tbl_name ADD COLUMN col_name col_definition [FIRST | AFTER col_name];
```
如果不指定 FIRST（添加到第一列）或 AFTER col_name，新列将会添加到表的最后一列。

以下是一些示例。
```sql
# 示例 1，为数据表 student 增加家乡 hometown
ALTER TABLE student ADD COLUMN hometown varchar(32) comment '家乡';

# 示例 2，在指定列后新增列，而非默认最后一列
ALTER TABLE student ADD COLUMN hometown varchar(32) comment '家乡' AFTER major;

# 示例 3，同时增加多个列
ALTER TABLE student ADD COLUMN hometown varchar(32) comment '家乡' AFTER major, ADD COLUMN hobby varchar(128) AFTER hometown;
```
（2）删除列。
```sql
ALTER TABLE tbl_name DROP COLUMN column1, DROP COLUMN column2, ...;
```
如果您想删除表 orders 中的 quantity 和 price 列，则可以使用以下语句。
```sql
ALTER TABLE orders DROP COLUMN quantity, DROP COLUMN price;
```

（3）重命名列。
```sql
ALTER TABLE tbl_name CHANGE old_col new_col col_definition;
```
（4）修改列属性。
```sql
ALTER TABLE tbl_name MODIFY col_name col_definition;
```
如修改 home 类型为 varchar(64) 且不允许 NULL：
```sql
ALTER TABLE student MODIFY home VARCHAR(64) NOT NULL;
```
## 15.约束管理
（1）查看约束。
```sql
SHOW CREATE TABLE tbl_name;
```
这将显示创建表的完整 SQL 语句，包括列定义、索引和约束等信息。您可以在这个输出中查找约束的定义。

使用 INFORMATION_SCHEMA 也可以查询。
```sql
SELECT CONSTRAINT_NAME, CONSTRAINT_TYPE
	FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
	WHERE TABLE_NAME = 'tbl_name';
```
这将返回指定表的约束信息，包括约束名称和约束类型。

（2）删除约束。

要删除约束，可以使用 ALTER TABLE 语句并指定约束类型和名称。
```sql
# 删除主键约束
ALTER TABLE tbl_name DROP PRIMARY KEY;

# 删除外键约束
ALTER TABLE tbl_name DROP FOREIGN KEY constraint_name;
```
## 16.创建临时表
创建表时可以使用TEMPORARY关键字。TEMPORARY表只在当前会话中可见，并且在会话关闭时自动删除。这意味着两个不同的会话可以使用相同的临时表名，而不会相互冲突，也不会与已有的同名非临时表冲突。(现有表被隐藏，直到临时表被删除。)
```sql
CREATE TEMPORARY TABLE [IF NOT EXISTS] tbl_name(
	col_name col_type [is null] [key] [default value] [extra] [comment],
	...
);

# 示例
CREATE TEMPORARY TABLE pig(i int);
```
（1）创建临时表与创建普通表的语句基本是一致的，只是多了一个 TEMPORARY 关键字。
（2）临时表的特点是：表结构和表数据都是存储到内存中的，生命周期是当前 MySQL 会话，会话结束后，临时表自动被 drop。
（3）注意临时表与内存表（Memory Table）的区别是：
- Memory表的表结构存储在磁盘，临时表的表结构存储在内存。
- SHOW TABLES 看不到临时表，但看得到内存表。
- 内存表的生命周期是服务端 MySQL 进程生命周期，MySQL 重启或者关闭后内存表里的数据会丢失，但是表结构仍然存在，而临时表的生命周期是 MySQL 客户端会话。
- 内存表支持唯一索引，临时表不支持唯一索引。
- 在不同会话可以创建同名临时表，不能创建同名内存表。
## 17.创建内存表
与创建表的命令格式相同，只是显示地在后面指明存储引擎为 MEMORY。
```sql
# 命令格式
CREATE TABLE tbl_name ( col_name col_type [is null] [key] [default value] [extra] [comment],...)ENGINE=memory;

# 示例
CREATE TABLE pig(i int) ENGINE=MEMORY;
```
## 18.修改数据表的存储引擎
```sql
ALTER TABLE tbl_name ENGINE=engine_name;

# 将数据表test存储引擎设置为 InnoDB
alter table test ENGINE=InnoDB;
```
## 19.查看数据库数据表存储位置
```sql
SHOW GLOBAL VARIABLES LIKE "%datadir%";
```
## 20.创建 merge 表
MERGE 存储引擎把一组 MyISAM 数据表当做一个逻辑单元来对待，让我们可以同时对他们进行增删查改。构成一个 MERGE 数据表结构的各成员 MyISAM 数据表结构（索引、引擎、列、字符集等）必须相同。

假设你有几个日志数据表，他们内容分别是这几年来每一年的日志记录项，他们的定义都是下面这样，YY代表年份：
```sql
CREATE TABLE log_YY  
(  
	dt  DATETIME NOT NULL,  
	info VARCHAR(100) NOT NULL,  
	INDEX (dt) 
) ENGINE = MyISAM;  
```
假设日志数据表的当前集合包括`log_2015`、`log_2016`、`log_2017`，而你可以创建一个如下所示的MERGE数据表把他们归拢为一个逻辑单元：
```sql
CREATE TABLE log_merge 
(
	dt DATETIME NOT NULL,
	info VARCHAR(100) NOT NULL,
    INDEX(dt)
) ENGINE = MERGE UNION=(log_2015,log_2016,log_2017) INSERT_METHOD=LAST;
```
（1）ENGINE 选项的值必须是 MERGE 或 MRG_MYISAM。
（2）UNION 选项列出了将被收录在这个 MERGE 数据表离得各有关数据表。把这个 MERGE 表创建出来后，就可以像对待任何其他数据表那样查询它，只是每一次查询都将同时作用与构成它的每一个成员数据表 。下面这个查询可以让我们知道上述几个日志数据表的数据行的总数。
```sql
SELECT COUNT（*） FROM log_merge;
```
（3）除了便于同时引用多个数据表而无需多条查询，MERGE数据表还提供了以下一些便MERGE数据表也支持DELETE 和UPDATE操作。INSERT操作比较麻烦，因为MySQL需要知道应该把新数据行插入到哪一个成员表里去。在MERGE数据表的定义里可以包括一个`INSERT_METHOD`选项，这个选项的可取值是 NO、FIRST、LAST，他们的含义依次是INSERT操作是被禁止的、新数据行将被插入到现在UNION选项里列出的第一个数据表或最后一个数据表。

（4）对现有的merge表可以删除或新增包好的数据表，比如新增相同结构的数据表`log_2018`。
```
CREATE TABLE log_2009 LIKE log_2008;  
ALTER TABLE log_merge UNION=(log_2015, log_2016,log_2017,log_2018);
```
## 21.清空表内容
```sql
TRUNCATE [TABLE] tbl_name
```
TRUNCATE 与 DELETE 均可以删除表记录，区别主要有如下几点：
（1）truncate 属于 DDL，delete 属于 DML。
（2）truncate 用于删除表中的所有行，delete 可以使用 where 子句有选择地进行删除。
（3）delete 每次删除一行，并在事务日志中为所删除的每行记录一项。truncate 释放存储表数据所用的数据页来删除数据，并且只在事务日志中记录页的释放，所以truncate 比 delete 使用的系统和事务日志资源更少，效率更高。
（4）truncate 导致自动增加字段的初始值被重置，delete 没有影响，自增字段的值还是按照最后一次插入的基础上递增。
（5）对于由 FOREIGN KEY 约束引用的表，不能使用 truncate，而应使用不带 where 子句的 delete 语句。由于 truncate 不记录在日志中，所以它不能激活触发器。
 （6）TRUNCATE TABLE 不能用于参与了索引视图的表。
 （7）对用 TRUNCATE TABLE 删除数据的表上增加数据时，要使用UPDATE STATISTICS来维护索引信息。
 （8）如果有 ROLLBACK 语句，DELETE 操作将被撤销，但 TRUNCATE 不会撤销。
 
请记住，当你不再需要该表时用 DROP；当你仍要保留该表，但要删除所有记录时用 TRUNCATE；当你要删除部分记录时用 DELETE。

---
## 参考文献
[MySQL Data Definition Statements](https://dev.mysql.com/doc/refman/8.0/en/sql-data-definition-statements.html)
