## 1.简介
SQL（Structured Query Language，结构化查询语言）是一种用于管理和操作关系型数据库的标准化查询语言。它是一种领域特定语言（DSL，Domain Specific Language），用于定义数据库结构、插入、更新、删除以及查询数据等操作，并不局限于数据查询，在数据库管理领域得到广泛应用。

SQL 最初由 IBM 的 Donald D. Chamberlin 和 Raymond F. Boyce 在 1970 年代初开发，在 1986 年成为 ANSI（美国国家标准学会）标准，并且在 1987 年成为 ISO（国际标准化组织）的标准。

SQL 被标准化后，仍在不断地发展和完善，至今经历了一系列修订。该标准于 1989 年、1992 年、1996 年、1999 年、2003 年、2006 年、2008 年、2011 年、2016 年以及最近的 2023 年修订，加入了大量新特性。

虽然有这一标准的存在，但很多数据库的实现并未完全遵循它，大多数 SQL 代码在移植到不同的数据库系统之前需要进行一些更改。
## 2.组成
关系数据库管理系统使用 SQL 来存储和管理数据，系统存储多个相互关联的数据库表，如常用的 Oracle、MySQL、MS SQL Server 等。 以下是此类系统的组成成分。

- SQL 表

SQL 表是关系数据库的基本元素。 SQL 数据库表由行和列组成。 数据库工程师在多个数据库表之间创建关系以优化数据存储空间。

例如，数据库工程师为商店中的产品创建一个 SQL 表：

```
Product ID	Product Name	Color ID
0001		Mattress		Color 1
0002		Pillow			Color 2
```
然后数据库工程师将产品表链接到带有颜色 ID 的颜色表：
```
Color ID	Color Name
Color 1		Blue
Color 2		Red
```

- SQL 语句

SQL 语句或 SQL 查询是关系数据库管理系统可以理解的有效指令。 软件开发人员使用不同的 SQL 语言元素构建 SQL 语句。 SQL语言元素是构成正确SQL语句的标识符、变量和搜索条件等组件。

例如，以下 SQL 语句使用 SQL INSERT 命令将价格为 499 美元的床垫品牌 A 存储到名为 mattress_table 的表中，其中列名称为brand_name 和 cost：
```sql
INSERT INTO mattress_table (brand_name, cost)
VALUES(‘A’,’499’);
```
- 存储过程

存储过程是存储在关系数据库中的一个或多个 SQL 语句的集合。 软件开发人员使用存储过程来提高效率和性能。 例如，他们可以创建一个存储过程来更新销售表，而不是在不同的应用程序中编写相同的 SQL 语句。

## 3.工作原理
结构化查询语言 (SQL) 的志聪过程需要经过几个软件组件，包括以下组件。 

- 解析器

解析器首先将 SQL 语句中的一些单词单词化，或用特殊符号替换。然后，解析器会检查语句是否存在以下情况：
1. 正确性

解析器会验证 SQL 语句是否符合 SQL 语义或规则，以确保查询语句正确性。例如，解析器会检查 SQL 命令是否以分号结尾。如果缺少分号，解析器将返回错误。

2. 授权

解析器还会验证运行查询的用户是否具有操作相应数据的必要授权。例如，只有管理员用户才有权删除数据。 

- 关系引擎

关系引擎或查询处理器会创建一个计划，以最有效的方式检索、写入或更新相应数据。例如，关系引擎会检查类似的查询，重用以前的数据操作方法，或创建新的方法。关系引擎以 SQL 语句的中间级表示形式（称为字节码）编写计划。关系数据库使用字节码高效地执行数据库搜索和修改。 

- 存储引擎

存储引擎或数据库引擎是指处理字节码并运行预期 SQL 语句的软件组件。存储引擎会读取并存储物理磁盘存储上的数据库文件中的数据。完成后，存储引擎会将结果返回给请求应用程序。

## 4.五种子语言
SQL 由多种类型的语句组成，这些语句可以被非正式地归类为子语言，主要分为 5 类。

- DCL（Data Control Language）

DCL 数据控制语言，用于控制数据库表的访问权限，包括授予和撤销权限。 
```
GRANT - 授权 
REVOKE - 撤销授权 
```

- DDL（Data Definition Language）

DDL 数据定义语言用于定义数据库结构和模式，包括创建、修改和删除数据库对象，如表、索引、视图等。
```
CREATE - 创建
ALTER - 修改
DROP - 删除
TRUNCATE - 截断
RENAME - 重命名
COMMENT - 注释
```

- DML（Data Manipulation Language）

DML 数据操作语言供用户操作数据库，包括数据的增加、删除、更新、载入等操作。 
```
UPDATE - 更新数据库表中的数据 
DELETE - 从数据库表中删除数据 
INSERT INTO - 向数据库表中插入数据
REPLACE INTO - 向数据库表中插入数据，如果存在先删除
LOAD - 从文件中导入数据到数据库表
```

- DQL（Data Query Language）

DQL 数据查询语言用来从表中获取数据。 
```
SELECT-从数据库表中获取数据 
```
SELECT 语句常用关键字有：
```
FROM - 指定从哪个数据表或子查询中查询
WHERE - 指定查询条件
GROUP BY - 结合合计函数，根据一个或多个列对结果集进行分组
HAVING - 对分组后的结果集进行筛选
ORDER BY - 对结果集进行排序
LIMIT - 对结果集进行top限制输出
UNION - 结果集纵向联合
JOIN - 结果集横向拼接
```

- TCL（Transaction Control Language）

TCL 事务控制语言用于控制事务的执行。

SQL 事务是数据库管理系统中的一个重要概念，它是一系列数据库操作（如插入、更新、删除等）的逻辑单元，要么全部执行成功并永久保存，要么全部失败并回滚到操作前的状态，保证数据库的数据一致性和可靠性。

TCL 只能与 DML 一起使用，例如 INSERT、DELETE 和 UPDATE 等。
```
BEGIN TRANSACTION 或 START- 开始事务
SAVEPOINT - 在事务中设置保存点，可以回滚到此处
ROLLBACK - 回滚 
COMMIT - 提交
SET TRANSACTION – 改变事务选项
SET CONSTRAINT - 启用或禁用外键约束
```

---
## 参考文献
[SQL - Wikipedia](https://en.wikipedia.org/wiki/SQL)

[What Is SQL (Structured Query Language)? - Amazon AWS](https://aws.amazon.com/what-is/sql/)

[An Introduction to SQL Standard（SQL标准简介）](https://zedware.github.io/SQL-Standard/)
