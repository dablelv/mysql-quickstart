(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{366:function(s,a,t){"use strict";t.r(a);var e=t(12),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("MySQL 中并非所有的数据库存储引擎都支持事务操作，比如 MyISAM 就不支持。所以，使用事务处理的时候一定要确定所操作的表示是否支持事务处理，可以通过查看建表语句来查看有没有指定事务类型的存储引擎。当然，事务处理是为了保障表数据原子性、一致性、隔离性、持久性。这些都需要消耗系统资源，请谨慎选择。")]),s._v(" "),a("p",[s._v("本文以数据库引擎 InnoDB 为例演示命令行模式下事务的基本操作。")]),s._v(" "),a("h2",{attrs:{id:"_1-隔离级别查看与设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-隔离级别查看与设置"}},[s._v("#")]),s._v(" 1.隔离级别查看与设置")]),s._v(" "),a("p",[s._v("（1）查看全局和当前会话的事务隔离级别。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看全局")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@global.transaction_isolation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前会话")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@transaction_isolation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@session.transaction_isolation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" VARIABLES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'transaction_isolation'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("从 MySQL 8.0 起，tx_isolation 变量被 transaction_isolation 变量替换了，所以请使用最新的变量 transaction_isolation。")]),s._v(" "),a("p",[s._v("MySQL InnoDB 缺省隔离级别是可重复读（Repeatable Read）。")]),s._v(" "),a("p",[s._v("（2）更改事务的隔离级别。")]),s._v(" "),a("p",[s._v("MySQL 提供了 SET TRANSACTION 语句，该语句可以改变单个会话或全局的事务隔离级别。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRANSACTION")]),s._v("\n    transaction_characteristic "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" transaction_characteristic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\ntransaction_characteristic: {\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ISOLATION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEVEL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("level")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" access_mode\n}\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("level")]),s._v(": {\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPEATABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("READ")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("READ")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMITTED")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("READ")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNCOMMITTED")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SERIALIZABLE")]),s._v("\n}\n\naccess_mode: {\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("READ")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WRITE")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("READ")]),s._v(" ONLY\n}\n")])])]),a("p",[s._v("不显示指明 SESSION 或 GLOBAL，默认是 SESSION，即设置当前会话的事务隔离级别。如果使用 GLOBAL 关键字，为之后的所有新连接设置事务隔离级别，需要 SUPER 权限来做这个。")]),s._v(" "),a("p",[s._v("比如更改当前会话事务隔离级别为读已提交。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRANSACTION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ISOLATION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEVEL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("READ")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMITTED")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或省略 SESSION")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRANSACTION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ISOLATION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEVEL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("READ")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMITTED")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("也可以直接使用 SET 语句为变更系统变量 transaction_isolation 的值修改当前 session 的事务隔离级别。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" transaction_isolation"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'READ-COMMITTED'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("或者设置全局事务隔离级别为读已提交。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@global.transaction_isolation")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'READ-COMMITTED'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"_2-自动提交事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-自动提交事务"}},[s._v("#")]),s._v(" 2.自动提交事务")]),s._v(" "),a("h3",{attrs:{id:"_2-1-查看是否自动提交事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-查看是否自动提交事务"}},[s._v("#")]),s._v(" 2.1 查看是否自动提交事务")]),s._v(" "),a("p",[s._v("MySQL 默认事务操作模式是自动提交模式（autocommit ）。")]),s._v(" "),a("p",[s._v("系统变量 @@autocommit 用来控制一条SQL语句提交后是否自动执行，默认值是1，表示在mysql命令行模式下每条增删改语句在键入回车后，都会立即生效，而不需要手动commit。我们可以把它关闭，关闭之后需要commit，SQL语句才会真正生效。")]),s._v(" "),a("p",[s._v("由于系统变量 autocommit 分会话系统变量与全局系统变量，所以查询的时候，最好区别是会话系统变量还是全局系统变量。")]),s._v(" "),a("p",[s._v("查看当前会话是否处于自动提交模式。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@autocommit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@session.autocommit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),s._v(" VARIABLES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'autocommit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("如果返回结果为 1 或 ON，则表示当前会话处于自动提交模式；如果返回结果为 0 或 OFF，则表示当前会话未处于自动提交模式。")]),s._v(" "),a("p",[s._v("如果想查看全局配置，可查看系统变量 @@global.autocommit。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@global.autocommit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),s._v(" VARIABLES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'autocommit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"_2-2-关闭或开启自动提交事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-关闭或开启自动提交事务"}},[s._v("#")]),s._v(" 2.2 关闭或开启自动提交事务")]),s._v(" "),a("ol",[a("li",[s._v("关闭自动提交事务。")])]),s._v(" "),a("p",[s._v("MySQL默认自动提交事务，即除非显式的开启事务（BEGIN 或 START TRANSACTION），否则每条 SOL 语句都会被当做一个单独的事务自动执行。但有些情况下，我们需要关闭事务自动提交来保证数据的一致性。")]),s._v(" "),a("p",[s._v("关闭自动提交事务主要有两种方法。一种是临时关闭，只对当前会话有效。第二种是永久关闭，对所有会话有效。")]),s._v(" "),a("p",[s._v("第一种：临时关闭。")]),s._v(" "),a("p",[s._v("关闭当前会话的自动提交事务。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" autocommit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@autocommit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@session.autocommit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),s._v(" autocommit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("这样之后，所有增删改语句，都必须使用 commit 之后，才能生效。")]),s._v(" "),a("p",[s._v("第二种：永久关闭。")]),s._v(" "),a("p",[s._v("在 MySQL 中，要永久地关闭自动提交事务，必须在配置文件中进行设置，以便在每次启动 MySQL 服务器时都保持这个设置。")]),s._v(" "),a("p",[s._v("找到 MySQL 的配置文件。在大多数情况下，MySQL 的配置文件名为 my.cnf 或 my.ini，具体位置取决于您的操作系统和安装方式。")]),s._v(" "),a("p",[s._v("打开配置文件并找到 [mysqld] 部分，添加或修改下面的配置项。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[mysqld]\ninit_connect='SET autocommit=0'\n")])])]),a("p",[s._v("保存，然后重新启动 MySQL 服务器即可生效。")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("开启自动提交事务。")])]),s._v(" "),a("p",[s._v("如果需要，可以开启自动提交模式。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" autocommit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@autocommit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@session.autocommit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),s._v(" autocommit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("要想永久有效，需要将上面配置文件中的配置项"),a("code",[s._v("init_connect='SET autocommit=0'")]),s._v("删除或设置为 1 即可。")]),s._v(" "),a("h2",{attrs:{id:"_3-事务执行基本流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-事务执行基本流程"}},[s._v("#")]),s._v(" 3.事务执行基本流程")]),s._v(" "),a("p",[s._v("首先创建一个测试数据表，建表语句如下：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" transaction_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("engine")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("InnoDB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ol",[a("li",[s._v("开启一个事务。")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("START")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRANSACTION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("执行一系列增删改语句。")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" transaction_test "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("手动提交或回滚。")])]),s._v(" "),a("p",[s._v("事务回滚：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROLLBACK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("回滚后我们查看数据表中的数据。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" transaction_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nEmpty "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("表中没有数据，回滚成功。")]),s._v(" "),a("p",[s._v("手动提交事务：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("提交后，再 ROLLBACK 则不能回滚了，数据已经插入到数据表了。这里需要注意的是，在当前会话中，我们还没有手动 COMMIT 提交事务的时候，表中的数据已经被插入了，但对于其它会话，如果事务隔离级别是 READ COMMITED，那么在 COMMIT 之前，查询不到新插入的记录。")]),s._v(" "),a("h2",{attrs:{id:"_4-设置事务的保存点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置事务的保存点"}},[s._v("#")]),s._v(" 4.设置事务的保存点")]),s._v(" "),a("p",[s._v("在 MySQL 中，您可以使用事务保存点（Savepoint）来标记事务中的一个特定位置，以便在事务进行过程中进行部分回滚。事务保存点可以在事务内部创建，并且可以用于回滚到该保存点之前的状态，而不影响事务中的其他操作。")]),s._v(" "),a("ol",[a("li",[s._v("设置折返点")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SAVEPOINT")]),s._v(" identifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("回滚至折返点")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROLLBACK")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SAVEPOINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" identifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("这将撤销从保存点创建后到当前位置之间的所有操作。")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("提交或继续事务。")])]),s._v(" "),a("p",[s._v("如果您满意回滚后的状态，可以继续进行其他操作，并最终提交事务。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 提交事务")]),s._v("\n")])])]),a("p",[s._v("通过使用事务保存点，您可以更细粒度地控制事务的回滚操作，以适应复杂的业务需求。请注意，保存点只在当前事务内部有效，并且一旦事务提交或回滚，保存点将被清除。")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/sql-transactional-statements.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("13.3 Transactional and Locking Statements"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/glossary.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL 8.0 Reference Manual :: MySQL Glossary"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/innodb-transaction-isolation-levels.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("15.7.2.1 Transaction Isolation Levels - MySQL"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/set-transaction.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("13.3.7 SET TRANSACTION Statement"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL 8.0 Reference Manual :: 5.1.8 Server System Variables"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);