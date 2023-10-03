(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{359:function(s,a,t){"use strict";t.r(a);var e=t(12),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-新建用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-新建用户"}},[s._v("#")]),s._v(" 1.新建用户")]),s._v(" "),a("p",[s._v("连接到 MySQL 服务器后，管理员或特权用户可以使用 CREATE USER 语句创建新用户。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'host'")]),s._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" lvlv"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v('@"%"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" lvlv"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v('@"%"')]),s._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lvlv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" lvlv"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@localhost")]),s._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lvlv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" lvlv"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@192.168.1.1")]),s._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lvlv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("username 是将要创建的用户名。")]),s._v(" "),a("p",[s._v("host 指定该用户在哪个主机上可以登录，如果是本地用户可用 localhost，如果想让该用户可以从任意远程主机登录，可以使用通配符 %。")]),s._v(" "),a("p",[s._v("password 是用户的登录密码，密码可以为空，如果为空则该用户可以不需要密码登录 MySQL 服务器。")]),s._v(" "),a("p",[s._v("创建的用户信息存放于 mysql.user 数据表中。")]),s._v(" "),a("h2",{attrs:{id:"_2-删除用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-删除用户"}},[s._v("#")]),s._v(" 2.删除用户")]),s._v(" "),a("p",[s._v("连接到 MySQL 服务器后，管理员或特权用户可以使用 DROP USER 语句删除指定的用户。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'host'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" lvlv"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@localhost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("删除用户时，主机名要与创建用户时使用的主机名一致。")]),s._v(" "),a("h2",{attrs:{id:"_3-用户授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-用户授权"}},[s._v("#")]),s._v(" 3.用户授权")]),s._v(" "),a("p",[s._v("在 MySQL 中，要为用户授予数据库操作权限，可以使用 GRANT 语句进行用户授权。GRANT 语句允许管理员或特权用户授予其他用户对数据库、表、列等对象的特定权限。授权后，被授权用户可以执行授予的权限操作。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" privilege_type "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" dbname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tablename "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'host'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" lvlv"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" lvlv"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("在授权用户权限之后，要使新权限生效，需要使用刷新权限。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("FLUSH "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("privilege_type 是一个用逗号分隔的赋予用户的权限列表，如 SELECT , INSERT , UPDATE 等（详细列表见该文末）。如果要授予所有权限则使用 ALL。")]),s._v(" "),a("p",[s._v("dbname 为数据库名，tablename 为表名，如果要授予用户对所有数据库和表的权限可用"),a("code",[s._v("*.*")]),s._v("表示所有库表。")]),s._v(" "),a("p",[s._v("使用 GRANT 为用户授权时，如果指定的用户不存在，则会新建该用户并授权。设置允许用户远程访问 MySQL 服务器时，一般使用该命令，并指定密码。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" lvlv"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),s._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"_4-撤销用户权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-撤销用户权限"}},[s._v("#")]),s._v(" 4.撤销用户权限")]),s._v(" "),a("p",[s._v("在 MySQL 中，要撤销用户的权限，可以使用 REVOKE 语句进行权限撤销。REVOKE 语句允许管理员或特权用户从其他用户中撤销已经授予的权限。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REVOKE")]),s._v(" privilege_type "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" dbname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tablename "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'host'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REVOKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" lvlv"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REVOKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lvlv'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("假如给用户"),a("code",[s._v("'pig'@'%'")]),s._v("授权时使用下面（或类似）这种方式。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pig'")]),s._v("@'"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("’\n")])])]),a("p",[s._v("则在使用下面的命令撤销用户对所有数据库表权限时，并不能撤销该用户对 test 数据库中 user 表的 SELECT 权限。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REVOKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pig'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("相反，如果授权时指定的是所有数据库表。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pig'")]),s._v("@'"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("’"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("撤销用户某个库表的权限时，使用下面命令也不能撤销该用户对 test 数据库中 user 表的 SELECT 权限。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REVOKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pig'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("具体信息可以用命令"),a("code",[s._v("SHOW GRANTS FOR 'pig'@'%';")]),s._v(" 查看。")]),s._v(" "),a("h2",{attrs:{id:"_5-查看用户权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-查看用户权限"}},[s._v("#")]),s._v(" 5.查看用户权限")]),s._v(" "),a("p",[s._v("在 MySQL 中，有多种方法可以查看用户的权限。")]),s._v(" "),a("ul",[a("li",[s._v("使用 SHOW GRANTS 语句。")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" GRANTS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'host'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" GRANTS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" lvlv"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@localhost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" GRANTS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" lvlv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v('不指定主机名称，默认为任意主机"%"。')]),s._v(" "),a("ul",[a("li",[s._v("查询 INFORMATION_SCHEMA.SCHEMA_PRIVILEGES 表。")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" INFORMATION_SCHEMA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SCHEMA_PRIVILEGES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("查询 mysql.user 表。")])]),s._v(" "),a("p",[s._v("可以从 mysql.user 表中查看所有用户信息，包括用户的权限。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"_6-修改用户密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-修改用户密码"}},[s._v("#")]),s._v(" 6.修改用户密码")]),s._v(" "),a("ul",[a("li",[s._v("SET PASSWORD")])]),s._v(" "),a("p",[s._v("使用 SET PASSWORD 语句可以修改指定用户的密码。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PASSWORD "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'host'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'new_password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PASSWORD "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" lvlv"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@localhost")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("如果是当前登录用户则不需要指定用户名。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" PASSWORD "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"newpassword"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("ALTER USER")])]),s._v(" "),a("p",[s._v("MySQL 5.7 版本及以上支持 ALTER USER 语句修改用户密码。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'host'")]),s._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'new_password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("更新 mysql.user 表中的密码字段。")])]),s._v(" "),a("p",[s._v("注意，使用这种方法需要谨慎操作，确保您具有足够的特权，并且了解 MySQL 用户表的结构。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" authentication_string "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'new_password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" host "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'host'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("修改密码后，一定要执行 FLUSH PRIVILEGES 命令刷新权限，以使新密码生效。")]),s._v(" "),a("ul",[a("li",[s._v("使用服务端工具 mysqladmin。")])]),s._v(" "),a("p",[s._v("另外，使用服务端工具 mysqladmin 也可以修改用户密码。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysqladmin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("u "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'oldpassword'")]),s._v(" password "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'newpassword'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例")]),s._v("\nmysqladmin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("u "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lvlv'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),s._v(" password "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123321"')]),s._v("\n")])])]),a("h2",{attrs:{id:"_7-权限类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-权限类型"}},[s._v("#")]),s._v(" 7.权限类型")]),s._v(" "),a("p",[s._v("MySQL 权限可以分为三种类型：数据库、数据表和数据列的权限。从 mysql.user 表中可查看用户权限信息。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),s._v(" \\G\n")])])]),a("p",[s._v("权限有：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Select_priv: 查看数据表；\nInsert_priv: 插入数据表；\nUpdate_priv: 更新数据表；\nDelete_priv: 删除数据表记录；\nCreate_priv: 创建数据库和数据表；\nDrop_priv: 删除数据库和数据表；\nReload_priv: 允许使用FLUSH； \nShutdown_priv: 允许使用mysqladmin shutdown；\nProcess_priv: 允许使用SHOW FULL PROCESSLIST查看其他用户的进程；\nFile_priv: 允许使用SELECT… INTO OUTFILE and LOAD DATA INFILE；\nGrant_priv: 允许使用grant为用户授权；\nReferences_priv: 未来功能的占位符；现在没有作用；\nIndex_priv: 确定用户是否可以创建和删除表索引；\nAlter_priv: 确定用户是否可以重命名和修改表结构；\nShow_db_priv: 确定用户是否可以查看服务器上所有数据库的名字，包括用户拥有足够访问权限的数据库。可以考虑对所有用户禁用这个权限，除非有特别不可抗拒的原因；\nSuper_priv: 确定用户是否可以执行某些强大的管理功能，例如通过KILL命令删除用户进程，Allows use of CHANGE MASTER, KILL, PURGE MASTER LOGS, and SET GLOBAL SQL statements. Allows mysqladmin debug command. Allows one extra connection to be made if maximum connections are reached；\nCreate_tmp_table_priv: 创建临时表；\nLock_tables_priv: 可以使用LOCK TABLES命令阻止对表的访问修改；\nExecute_priv: 执行存储过程。此权限只在MySQL5.0及更高版本中有意义。\nRepl_slave_priv: 读取用于维护复制数据库环境的二进制日志文件。此用户位于主系统中，有利于主机和客户机之间的通信；\nRepl_client_priv: 确定用户是否可以确定复制从服务器和主服务器的位置；\nCreate_view_priv: 创建视图。此权限只在MySQL5.0及更高版本中有意义；\nShow_view_priv: 查看视图或了解视图如何执行。此权限只在MySQL5.0及更高版本中有意义。关于视图的更多信息；\nCreate_routine_priv: 更改或放弃存储过程和函数。此权限是在MySQL5.0中引入；\nAlter_routine_priv: 修改或删除存储函数及函数。此权限是在MySQL5.0中引入的；\nCreate_user_priv: 执行CREATE USER命令，这个命令用于创建新的MySQL账户；\nEvent_priv: 确定用户能否创建、修改和删除事件。这个权限是MySQL 5.1.6新增；\nTrigger_priv: 创建和删除触发器，这个权限是MySQL 5.1.6新增的；\n\nMySQL 特别权限： \nALL: 允许做任何事(和root一样)； \nUSAGE: 只允许登录，其它什么也不允许做。\n")])])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.1/en/account-management-statements.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Account Management Statements - MySQL"),a("OutboundLink")],1)]),s._v(" "),a("Vssue",{attrs:{title:"DCL数据控制"}})],1)}),[],!1,null,null,null);a.default=r.exports}}]);