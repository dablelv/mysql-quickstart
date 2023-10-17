(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{384:function(t,s,a){"use strict";a.r(s);var e=a(12),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-分类"}},[t._v("#")]),t._v(" 1.分类")]),t._v(" "),s("p",[t._v("在 MySQL 里，按照加锁的粒度范围由大到小分为：")]),t._v(" "),s("ul",[s("li",[t._v("全局锁：全局锁是对整个数据库实例加锁。全库逻辑备份（mysqldump）会使用。")]),t._v(" "),s("li",[t._v("表级锁：对整张表加锁，最常使用的存储引擎 MyISAM 与 InnoDB 都支持表级锁。")]),t._v(" "),s("li",[t._v("页级锁：页级锁是介于表锁和行锁之间的一种锁定粒度，锁定表的一个页（通常是数据页）。表级锁速度快，但冲突多，行级冲突少，但速度慢。因此，采取了折衷的页级锁，一次锁定相邻的一组记录。BDB 引擎（MySQL 5.5被弃用）支持页级锁。")]),t._v(" "),s("li",[t._v("行级锁：行级锁是最细粒度的锁，锁定表中的单个行。InnoDB 存储引擎支持行级锁。")])]),t._v(" "),s("h2",{attrs:{id:"_2-全局锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-全局锁"}},[t._v("#")]),t._v(" 2.全局锁")]),t._v(" "),s("p",[t._v("全局锁是对整个数据库实例加锁。")]),t._v(" "),s("p",[t._v("全局锁主要应用于做全库逻辑备份，这样在备份数据库期间，不会因为数据或表结构的更新，而出现备份文件的数据与预期的不一样。")]),t._v(" "),s("p",[t._v("要使用全局锁，执行这条命令：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("FLUSH "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("READ")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOCK")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FTWRL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("执行后，关闭所有打开的表并使用全局读锁锁定所有数据库的所有表，整个数据库就处于只读状态了，这时其他线程执行以下操作，都会被阻塞：")]),t._v(" "),s("ul",[s("li",[t._v("对数据的增删改操作，比如 INSERT、DELETE、UPDATE 等语句。")]),t._v(" "),s("li",[t._v("对表结构的更改操作，比如 ALTER TABLE、DROP TABLE 等语句。")])]),t._v(" "),s("p",[t._v("如果要释放全局锁，执行这条命令：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNLOCK")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLES")]),t._v("\n")])])]),s("p",[t._v("当然，当会话断开了，全局锁也会被自动释放。")]),t._v(" "),s("h2",{attrs:{id:"_3-表级锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-表级锁"}},[t._v("#")]),t._v(" 3.表级锁")]),t._v(" "),s("p",[t._v("对整张表加锁，最常使用的存储引擎 MyISAM 与 InnoDB 都支持表级锁。")]),t._v(" "),s("p",[t._v("MySQL 里面表级别的锁有这几种：")]),t._v(" "),s("ul",[s("li",[t._v("表锁")]),t._v(" "),s("li",[t._v("元数据锁（MDL）")]),t._v(" "),s("li",[t._v("意向锁")]),t._v(" "),s("li",[t._v("自增锁（AUTO-INC）")])]),t._v(" "),s("h3",{attrs:{id:"_3-1-表锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-表锁"}},[t._v("#")]),t._v(" 3.1 表锁")]),t._v(" "),s("p",[t._v("获取或释放表锁使用如下语句：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOCK")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLES")]),t._v("\n    tbl_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" lock_type\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tbl_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" lock_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nlock_type: {\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("READ")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOCAL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("LOW_PRIORITY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WRITE")]),t._v("\n}\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNLOCK")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLES")]),t._v("\n")])])]),s("p",[t._v("可用的锁类型如下：")]),t._v(" "),s("ol",[s("li",[t._v("READ [LOCAL]")])]),t._v(" "),s("ul",[s("li",[t._v("持有锁的会话可以读取该表（但不能写入）。")]),t._v(" "),s("li",[t._v("多个会话可以同时获取表的读锁。")]),t._v(" "),s("li",[t._v("其他会话无需显式获取 READ 锁即可读取该表。")]),t._v(" "),s("li",[t._v("LOCAL 修饰符允许其他会话在持有锁时执行无冲突的INSERT语句(并发插入)。但是，如果要在持有锁的同时使用服务器外部的进程操作数据库，则不能使用READ LOCAL。对于 InnoDB 表，READ LOCAL 和 READ 是一样的。")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("[LOW_PRIORITY] WRITE")])]),t._v(" "),s("ul",[s("li",[t._v("持有锁的会话可以读写该表。")]),t._v(" "),s("li",[t._v("只有持有锁的会话才能访问该表。 在释放锁之前，其他会话都无法访问它。")]),t._v(" "),s("li",[t._v("当持有写锁时，其他会话对该表的锁请求会被阻止。")]),t._v(" "),s("li",[t._v("LOW_PRIORITY 修饰符无效。 在的 MySQL 8.0 版本之前中，它会影响锁定行为，但现在情况已不再如此。 它现已被弃用，使用它会产生警告。")])]),t._v(" "),s("p",[t._v("需要锁的会话必须在单个 LOCK TABLES 语句中获取所有所需表的锁。当获得锁时，会话只能访问被锁定的表。例如，在下面的语句序列中，由于在 LOCK TABLES 语句中没有锁定 t2，因此试图访问 t2 时会出现错误:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOCK")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLES")]),t._v(" t1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("READ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("----------+")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("----------+")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("----------+")]),t._v("\nmysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nERROR "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HY000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'t2'")]),t._v(" was "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" locked "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOCK")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLES")]),t._v("\n")])])]),s("p",[t._v("要释放表锁，可以使用下面这条命令，会释放当前会话的所有表锁：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNLOCK")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLES")]),t._v("\n")])])]),s("p",[t._v("除了显示使用 UNLOCK TABLES 语句释放表锁，一些场景下会隐式释放锁：")]),t._v(" "),s("ul",[s("li",[t._v("当会话结束后，也会释放所有表锁。")]),t._v(" "),s("li",[t._v("如果会话在已持有锁的情况下发出 LOCK TABLES 语句来获取锁，则在授予新锁之前，会隐式释放其现有锁。")]),t._v(" "),s("li",[t._v("如果会话开始一个事务（例如，使用 START TRANSACTION），则隐式执行 UNLOCK TABLES 释放现有的锁。")])]),t._v(" "),s("p",[t._v("不过尽量避免在使用 InnoDB 引擎的表使用表锁，因为表锁的颗粒度太大，会影响并发性能，InnoDB 牛逼的地方在于实现了颗粒度更细的行级锁。")]),t._v(" "),s("h3",{attrs:{id:"_3-2-元数据锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-元数据锁"}},[t._v("#")]),t._v(" 3.2 元数据锁")]),t._v(" "),s("p",[t._v("元数据锁（Metadata Lock）是一种特殊类型的锁，用于保护数据库的元数据，如表结构、索引、权限等。这些锁用于协调对数据库对象的修改，以确保在进行元数据修改操作时不会干扰其他并发操作，同时保持数据库的一致性和完整性。")]),t._v(" "),s("p",[t._v("我们不需要显示的使用 MDL，因为当我们对数据库表进行操作时，会自动给这个表加上 MDL：")]),t._v(" "),s("ul",[s("li",[t._v("对一张表进行 CRUD 操作时，加的是 MDL 读锁。")]),t._v(" "),s("li",[t._v("对一张表做结构变更操作的时候，加的是 MDL 写锁。")])]),t._v(" "),s("p",[t._v("MDL 是为了保证当用户对表执行 CRUD 操作时，防止其他线程对这个表结构做变更。")]),t._v(" "),s("p",[t._v("当有线程在执行 SELECT 语句（ 加 MDL 读锁）的期间，如果有其他线程要更改该表的结构（ 申请 MDL 写锁），那么将会被阻塞，直到执行完 SELECT 语句（ 释放 MDL 读锁）。")]),t._v(" "),s("p",[t._v("反之，当有线程对表结构进行变更（ 加 MDL 写锁）的期间，如果有其他线程执行了 CRUD 操作（ 申请 MDL 读锁），那么就会被阻塞，直到表结构变更完成（ 释放 MDL 写锁）。")]),t._v(" "),s("p",[t._v("MDL 不需要显示调用，那它是在什么时候释放的？")]),t._v(" "),s("p",[t._v("MDL 是在事务提交后才会释放，这意味着事务执行期间，MDL 是一直持有的。")]),t._v(" "),s("p",[t._v("那如果数据库有一个长事务（所谓的长事务，就是开启了事务，但是一直还没提交），那在对表结构做变更操作的时候，可能会发生意想不到的事情，比如下面这个顺序的场景：")]),t._v(" "),s("ol",[s("li",[t._v("首先，线程 A 先启用了事务（但是一直不提交），然后执行一条 select 语句，此时就先对该表加上 MDL 读锁；")]),t._v(" "),s("li",[t._v("然后，线程 B 也执行了同样的 select 语句，此时并不会阻塞，因为「读读」并不冲突；")]),t._v(" "),s("li",[t._v("接着，线程 C 修改了表字段，此时由于线程 A 的事务并没有提交，也就是 MDL 读锁还在占用着，这时线程 C 就无法申请到 MDL 写锁，就会被阻塞。")])]),t._v(" "),s("p",[t._v("那么在线程 C 阻塞后，后续有对该表的 SELECT 语句，就都会被阻塞，如果此时有大量该表的 SELECT 语句的请求到来，就会有大量的线程被阻塞住，这时数据库的线程很快就会爆满了。")]),t._v(" "),s("p",[t._v("这里你可能会有个疑问，为什么线程 C 因为申请不到 MDL 写锁，而导致后续的申请读锁的查询操作也会被阻塞呢？")]),t._v(" "),s("p",[t._v("这是因为申请 MDL 锁的操作会形成一个队列，队列中写锁获取优先级高于读锁，一旦出现 MDL 写锁等待，会阻塞后续该表的所有 CRUD 操作。")]),t._v(" "),s("p",[t._v("所以为了能安全的对表结构进行变更，在对表结构变更前，先要看看数据库中的长事务，是否有事务已经对表加上了 MDL 读锁，如果可以考虑 kill 掉这个长事务，然后再做表结构的变更。")]),t._v(" "),s("h3",{attrs:{id:"_3-3-意向锁-intention-lock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-意向锁-intention-lock"}},[t._v("#")]),t._v(" 3.3 意向锁（Intention Lock）")]),t._v(" "),s("p",[t._v("InnoDB 支持多粒度锁，允许行锁和表锁共存。为了实现多粒度级别的锁，InnoDB 使用了意向锁。")]),t._v(" "),s("p",[t._v("意向锁是表级别的锁，主要作用是通知其他会话某个表上是否已经存在了更细粒度的锁（如行级锁或页级锁）。有两种类型的意向锁：")]),t._v(" "),s("ul",[s("li",[t._v("意向共享锁 (IS) 表示事务打算在表中的各个行上设置共享锁。")]),t._v(" "),s("li",[t._v("意向排他锁 (IX) 表示事务打算对表中的各个行设置排它锁。")])]),t._v(" "),s("p",[t._v("也就是，当执行插入、更新、删除操作，需要先对表加上意向排他锁，然后对该记录加排它锁。")]),t._v(" "),s("p",[t._v("而普通的 SELECT 是不会加行级锁的，普通的 select 语句是利用 MVCC 实现一致性读，是无锁的。不过，SELECT 也是可以对记录加共享锁和排他锁的，具体方式如下：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 先在表上加上意向共享锁，然后对读取的记录加共享锁")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHARE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 或")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOCK")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHARE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("MODE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 先表上加上意向排他锁，然后对读取的记录加排他锁")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("意向共享锁和意向排他锁是表级锁，不会和行级的共享锁和排他锁发生冲突，而且意向锁之间也不会发生冲突，只会和共享表锁（LOCK TABLES ... READ）和排他表锁（LOCK TABLES ... WRITE）发生冲突。")]),t._v(" "),s("p",[t._v("如果没有「意向锁」，那么加「排他表锁」时，就需要遍历表里所有记录，查看是否有记录存在排他锁，这样效率会很慢。")]),t._v(" "),s("p",[t._v("那么有了「意向锁」，由于在对记录加排他锁前，先会加上表级别的意向排他锁，那么在加「排他表锁」时，直接查该表是否有意向排他锁，如果有就意味着表里已经有记录被加了排他锁，这样就不用去遍历表里的记录。")]),t._v(" "),s("p",[t._v("所以，意向锁的目的是为了快速判断表里是否有记录被加锁。")]),t._v(" "),s("p",[t._v("比如会话 1 获取了某一行的排他锁，并未提交：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" goods "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("此时会话在 goods 表存在两把锁：goods 表上的意向排它锁与 id 为 1 的数据行上的排他锁。")]),t._v(" "),s("p",[t._v("会话 2 想要获取 goods 表的共享锁：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOCK")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLES")]),t._v(" goods "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("READ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("此时会话 2 检测会话 1 持有 goods 表的意向排他锁，就可以得知会话 1 必然持有该表中某些数据行的排他锁，那么会话 2 对 goods 表的加锁请求就会阻塞，而无需去检测表中的每一行数据是否存在排他锁。")]),t._v(" "),s("h3",{attrs:{id:"_3-4-auto-inc-锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-auto-inc-锁"}},[t._v("#")]),t._v(" 3.4 AUTO-INC 锁")]),t._v(" "),s("p",[t._v("在 MySQL 中，AUTO-INC 锁不是一个独立的锁类型，而是与自增列（Auto-Increment Column）关联的锁。自增列是一种特殊类型的列，通常用于为每行分配唯一的递增值。当插入新行时，自增列的值会自动递增，从而保证每行具有唯一的标识。")]),t._v(" "),s("p",[t._v("AUTO-INC 锁是在向包含自增列的表中插入新行时使用的锁。其主要作用是协调不同会话对自增列的访问，以确保每次插入都分配了唯一的值，从而防止多个会话之间的竞争条件。")]),t._v(" "),s("p",[t._v("AUTO-INC 锁是特殊的表锁机制，锁不是再一个事务提交后才释放，而是再执行完插入语句后就会立即释放。\n在插入数据时，会加一个表级别的 AUTO-INC 锁，然后为被 AUTO_INCREMENT 修饰的字段赋值递增的值，等插入语句执行完成后，才会把 AUTO-INC 锁释放掉。\n那么，一个事务在持有 AUTO-INC 锁的过程中，其他事务的如果要向该表插入语句都会被阻塞，从而保证插入数据时，被 AUTO_INCREMENT 修饰的字段的值是连续递增的。")]),t._v(" "),s("p",[t._v("但是， AUTO-INC 锁再对大量数据进行插入的时候，会影响插入性能，因为另一个事务中的插入会被阻塞。")]),t._v(" "),s("p",[t._v("因此，InnoDB 存储引擎提供了个 innodb_autoinc_lock_mode 的系统变量，于控制自增列的锁定模式。")]),t._v(" "),s("ul",[s("li",[t._v("0 传统模式（Traditional）")]),t._v(" "),s("li",[t._v("1 连续模式（Consecutive）")]),t._v(" "),s("li",[t._v("2 交叉模式（Interleaved）")])]),t._v(" "),s("p",[t._v("取值 0 表示传统模式。在这种模式下，InnoDB 在插入新行时会锁定整张表，以确保自增列的唯一性。这意味着在插入新行时，其他会话不能插入行到相同的表。")]),t._v(" "),s("p",[t._v("这样一来，传统模式的弊端就自然暴露出来了，如果有多个事务并发的执行 INSERT 操作，AUTO-INC的存在会使得 MySQL 的性能略有下降，因为同时只能执行一条 INSERT 语句。")]),t._v(" "),s("p",[t._v("取值 1 表示连续模式。 因为传统模式存在影响性能的弊端，所以才有了连续模式。")]),t._v(" "),s("p",[t._v("在连续模式下时，如果 INSERT 语句能够提前确定插入的数据量，则可以不用获取自增锁。举个例子，像 INSERT INTO 这种简单的、能提前确认数量的新增语句，就不会使用自增锁，而是使用较为轻量级的 mutex 锁，来防止 ID 重复分配，ID 一旦分配好了，mutex 锁就会被释放。")]),t._v(" "),s("p",[t._v("但是如果 INSERT 语句不能提前确认数据量，则还是会去获取自增锁。例如像 INSERT INTO ... SELECT ... 这种语句，INSERT 的值来源于另一个 SELECT 语句。")]),t._v(" "),s("p",[t._v("取值 2 表示交叉模式。所有的 INSERT 语句，包含 INSERT 和 INSERT INTO ... SELECT ，都不会使用 AUTO-INC 自增锁，而是使用较为轻量的 mutex 锁。这样一来，多条 INSERT 语句可以并发的执行，这也是三种锁模式中扩展性最好的一种。")]),t._v(" "),s("p",[t._v("并发执行所带来的副作用就是单个 INSERT 的自增值并不连续，因为 AUTO_INCREMENT 的值分配会在多个 INSERT 语句中来回交叉的执行。")]),t._v(" "),s("p",[t._v("当 innodb_autoinc_lock_mode = 2 是性能最高的方式，但是当搭配 binlog 的日志格式是 statement 一起使用的时候，在「主从复制的场景」中会发生数据不一致的问题。")]),t._v(" "),s("p",[t._v("在 MySQL 中 Binlog 的格式有 3 种，分别是：")]),t._v(" "),s("ul",[s("li",[t._v("Statement 基于语句，只记录对数据做了修改的SQL语句，能够有效的减少binlog的数据量，提高读取、基于binlog重放的性能")]),t._v(" "),s("li",[t._v("Row 只记录被修改的行，所以Row记录的binlog日志量一般来说会比Statement格式要多。基于Row的binlog日志非常完整、清晰，记录了所有数据的变动，但是缺点是可能会非常多，例如一条update语句，有可能是所有的数据都有修改；再例如alter table之类的，修改了某个字段，同样的每条记录都有改动。")]),t._v(" "),s("li",[t._v("Mixed Statement 和 Row 的结合，怎么个结合法呢？例如像 ALTER TABLE 之类的对表结构的修改，采用 Statement 格式。其余对数据的修改，例如 Update 和 Delete 采用 Row 格式进行记录。")])]),t._v(" "),s("p",[t._v("如果 MySQL 采用的格式为 Statement ，那么 MySQL 的主从同步实际上同步的就是一条一条的 SQL 语句。如果此时我们采用了交叉模式，那么并发情况下 INSERT 语句的执行顺序就无法得到保障。")]),t._v(" "),s("p",[t._v("可能你还没看出问题在哪儿，INSERT 同时交叉执行，并且 AUTO_INCREMENT 交叉分配将会直接导致主从之间同行的数据主键 ID 不同。而这对主从同步来说是灾难性的。")]),t._v(" "),s("p",[t._v("而后来，MySQL 5.7 将日志存储格式从 Statement 变成了 Row，这样一来，主从之间同步的就是真实的行数据了，而且 主键ID 在同步到从库之前已经确定了，就对同步语句的顺序并不敏感，就规避了上面 Statement 的问题。")]),t._v(" "),s("p",[t._v("基于 MySQL 默认 Binlog 格式从 Statement 到 Row 的变更，MySQL 8.0 将默认模式由连续模式改为交叉模式。")]),t._v(" "),s("h2",{attrs:{id:"_4-页级锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-页级锁"}},[t._v("#")]),t._v(" 4.页级锁")]),t._v(" "),s("p",[t._v("页级锁定是 MySQL 中比较独特的一种锁定级别，在其他数据库管理软件中也并不是太常见。页级锁定的特点是锁定粒度介于表级锁与行级锁定之间，所以获取锁定所需要的资源开销，以及所能提供的并发处理能力也同样是介于二者之间。")]),t._v(" "),s("p",[t._v("MySQL BDB 引擎支持页级锁，不过该引擎已在 MySQL 5.1 被弃用，所以对于页级锁，知道即可，不用过多了解。")]),t._v(" "),s("h2",{attrs:{id:"_5-行级锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-行级锁"}},[t._v("#")]),t._v(" 5.行级锁")]),t._v(" "),s("p",[t._v("InnoDB 引擎是支持行级锁的，而 MyISAM 引擎并不支持行级锁。")]),t._v(" "),s("p",[t._v("行级锁的类型主要有三类：")]),t._v(" "),s("ul",[s("li",[t._v("Record Lock，记录锁，也就是仅仅把一条记录锁上；")]),t._v(" "),s("li",[t._v("Gap Lock，间隙锁，锁定一个范围，但是不包含记录本身；")]),t._v(" "),s("li",[t._v("Next-Key Lock：Record Lock + Gap Lock 的组合，锁定一个范围，并且锁定记录本身。")])]),t._v(" "),s("h3",{attrs:{id:"_5-1-record-lock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-record-lock"}},[t._v("#")]),t._v(" 5.1 Record Lock")]),t._v(" "),s("p",[t._v("Record Lock 为记录锁，锁住的是一条记录。")]),t._v(" "),s("p",[t._v("记录锁是有 S 锁和 X 锁之分：")]),t._v(" "),s("ul",[s("li",[t._v("当一个事务对一条记录加了 S 型记录锁后，其他事务也可以继续对该记录加 S 型记录锁，但是不可以对该记录加 X 型记录锁。")]),t._v(" "),s("li",[t._v("当一个事务对一条记录加了 X 型记录锁后，其他事务既不可以对该记录加 S 型记录锁，也不可以对该记录加 X 型记录锁。")])]),t._v(" "),s("p",[t._v("例如 id 列为主键或唯一索引列，那么 id 为 1 的记录行会被锁住。")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" lock_example "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("需要注意的是：id 列必须为唯一索引列或主键列，否则上述语句加的锁就会变成临键锁。同时查询语句必须为精准匹配（=），不能为 >、<、LIKE 等，否则也会退化成临键锁。")]),t._v(" "),s("p",[t._v("当事务执行 commit 后，事务过程中生成的锁都会被释放。")]),t._v(" "),s("h3",{attrs:{id:"_5-2-gap-lock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-gap-lock"}},[t._v("#")]),t._v(" 5.2 Gap Lock")]),t._v(" "),s("p",[t._v("Gap Lock 为间隙锁，锁定一个范围，但不包含记录本身。只存在于可重复读隔离级别，目的是为了解决可重复读隔离级别下幻读的现象。")]),t._v(" "),s("p",[t._v("当我们用范围条件而不是相等条件检索数据，并请求共享或排他锁时，InnoDB 会给符合条件的已有数据的索引项加锁。对于键值在条件范围内但并不存在的记录叫做间隙，InnoDB 也会对这个间隙加锁。")]),t._v(" "),s("p",[t._v("假如 lock_example 表中只有101条记录，其 id 的值分别是1,2,...,100,101，下面的 SQL：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" lock_example "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("InnoDB 不仅会对符合条件的 id 值为 101 的记录加锁，也会对 id 大于101（这些记录并不存在）的“间隙”加锁，那么其他事务就无法插入 id 大于 101 的记录了，这样就有效的防止幻读现象的发生。")]),t._v(" "),s("h3",{attrs:{id:"_5-3-next-key-lock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-next-key-lock"}},[t._v("#")]),t._v(" 5.3 Next-key Lock")]),t._v(" "),s("p",[t._v("Next-key Lock 为临键锁，是 Record Lock + Gap Lock 的组合，锁定一个范围，并且锁定记录本身。")]),t._v(" "),s("p",[t._v("通过临键锁可以解决幻读的问题。 每个数据行上的非唯一索引列上都会存在一把临键锁，当某个事务持有该数据行的临键锁时，会锁住一段左开右闭区间的数据。需要强调的一点是，InnoDB 中行级锁是基于索引实现的，临键锁只与非唯一索引列有关，在唯一索引列（包括主键列）上不存在临键锁，会降级为记录锁，即仅锁住索引本身，不是范围。")]),t._v(" "),s("p",[t._v("假设有如下表：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("MySQL，InnoDB，Repeatable-Read：lock_example(id PK, age KEY, name)\nid\tage\tname\n1\t10\tLee\n3\t24\tSoraka\n5\t32\tZed\n7\t45\tTerra\n")])])]),s("p",[t._v("该表中 age 列为非唯一索引列，其潜在的临键锁有：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("(-∞, 10]\n(10, 24]\n(24, 32]\n(32, 45]\n(45, +∞]\n")])])]),s("p",[t._v("假如在事务 A 中执行如下命令：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 根据非唯一索引列 UPDATE 某条记录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" lock_example "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vladimir "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 或根据非唯一索引列锁住某条记录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" lock_example "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("不管执行了上述 SQL 中的哪一句，之后如果在事务 B 中执行以下命令，则该命令会被阻塞：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ezreal'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("很明显，事务 A 在对 age 为 24 的列进行 UPDATE 操作的同时，获取了 (10, 24] 这个区间内的临键锁。")]),t._v(" "),s("p",[t._v("不仅如此，在执行以下 SQL 时，也会陷入阻塞等待：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("那么我们就可以得知，在根据非唯一索引对记录行进行 UPDATE 、FOR UPDATE、FOR SHARE 或 LOCK IN SHARE MODE 操作时，InnoDB 会获取该记录行的临键锁，并同时获取该记录行下一个区间的间隙锁。即事务 A 在执行了上述的 SQL 后，最终被锁住的记录区间为 (10, 32)。")]),t._v(" "),s("h3",{attrs:{id:"_5-4-插入意向锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-插入意向锁"}},[t._v("#")]),t._v(" 5.4 插入意向锁")]),t._v(" "),s("p",[t._v("一个事务在插入一条记录的时候，需要判断插入位置是否已被其他事务加了间隙锁（next-key lock 也包含间隙锁）。")]),t._v(" "),s("p",[t._v("如果有的话，插入操作就会发生阻塞，直到拥有间隙锁的那个事务提交为止（释放间隙锁的时刻），在此期间会生成一个插入意向锁（Insert Intention Lock），表明有事务想在某个区间插入新记录，但是现在处于等待状态。")]),t._v(" "),s("p",[t._v("举个例子（表和数据依然是上面例子 lock_example 表），事务 A 先执行，在 age 10 与 24 两条记录中插入一行，还未提交：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" lock_example "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Jim'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("事务 B 也在 age 10 与 24 两条记录间插入一行：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" lock_example "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bob'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("因为是插入操作，这时会判断插入的位置已经被事务 A 加了间隙锁，于是事物 B 会生成一个插入意向锁，然后将锁的状态设置为等待状态（PS：MySQL 加锁时，是先生成锁结构，然后设置锁的状态，如果锁状态是等待状态，并不是意味着事务成功获取到了锁，只有当锁状态为正常状态时，才代表事务成功获取到了锁），此时事务 B 就会发生阻塞，直到事务 A 提交了事务。")]),t._v(" "),s("p",[t._v("插入意向锁名字虽然有意向锁，但是它并不是意向锁，它是一种特殊的间隙锁，属于行级别锁。")]),t._v(" "),s("p",[t._v("如果说间隙锁锁住的是一个区间，那么「插入意向锁」锁住的就是一个点。因而从这个角度来说，插入意向锁确实是一种特殊的间隙锁。")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/flush.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL 8.0 Reference Manual :: 13.7.8.3 FLUSH Statement"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/lock-tables.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("13.3.6 LOCK TABLES and UNLOCK TABLES Statements"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/metadata-locking.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL 8.0 Reference Manual :: 8.11.4 Metadata Locking"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/innodb-locking.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL 8.0 Reference Manual :: 15.7.1 InnoDB Locking"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://juejin.cn/post/6968420054287253540",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入剖析 MySQL 自增锁"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://xiaolincoding.com/mysql/lock/mysql_lock.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL 有哪些锁？"),s("OutboundLink")],1)]),t._v(" "),s("Vssue",{attrs:{title:"锁"}})],1)}),[],!1,null,null,null);s.default=n.exports}}]);