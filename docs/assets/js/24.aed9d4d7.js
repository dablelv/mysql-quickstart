(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{366:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-插入记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-插入记录"}},[s._v("#")]),s._v(" 1.插入记录")]),s._v(" "),t("h3",{attrs:{id:"insert"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#insert"}},[s._v("#")]),s._v(" INSERT")]),s._v(" "),t("p",[s._v("使用 INSERT INTO 语句可以向数据表插入数据。")]),s._v(" "),t("p",[s._v("INSERT INTO 有三种形式：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" tbl_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" tbl_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" column1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("column2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" tbl_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("column1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("column2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("value2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("以下是一些插入示例。")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 SELECT 结果集进行插入")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" tbl_name1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tbl_name2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意，tbl_name2 数据表的定义要与 tbl_name1 相同，不同的话，则需要指定需要插入的列")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" tbl_name1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("col0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("col1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("col2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" col0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("col1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("col2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tbl_name2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 INSET INTO SET")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" student "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" \nname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lvlv0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" school"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'software'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" grade"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'first year'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("major"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'software engineering'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("gender"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 插入一行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" student"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("school"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("grade"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("major"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("gender"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lvlv'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'software'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'first year'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'software engineering'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果插入值刚好与数据表的所有列一一对应，那么可以省略书写插入的指定列")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" student\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lvlv'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'software'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'first year'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'software engineering'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 插入多行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" student "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lvlv'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'software'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'first year'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'software engineering'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lvlv1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'software'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'first year'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'software engineering'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"replace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replace"}},[s._v("#")]),s._v(" REPLACE")]),s._v(" "),t("p",[s._v("除了使用 INSERT 语句向数据表插入数据，还可以使用 REPLACE。")]),s._v(" "),t("p",[s._v("如果发现表中已经有此行数据（根据主键或者唯一索引判断）则先删除此行数据，然后插入新的数据，否则直接插入新数据。")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLACE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" tbl_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("col_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLACE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" tbl_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("col_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLACE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" tbl_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" col_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])])]),t("p",[s._v("REPLACE 语句会返回一个数，来指示受影响的行数目。该数是被删除和被插入的行数和。如果一行被插入同时没有行被删除，则返回 1。如果表包含多个唯一索引，并且新行包含了多个不同唯一索引的旧值，则有可能是一个单一行替换了多个旧行。如果在新行被插入前，有一个或多个旧行被删除，则返回值大于 1。")]),s._v(" "),t("p",[s._v("频繁的 REPLACE INTO 会造成新纪录的主键的值迅速增大。总有一天。达到最大值后就会因为数据太大溢出了。就没法再插入新纪录了。数据表满了，不是因为空间不够了，而是因为主键的值没法再增加了。")]),s._v(" "),t("p",[s._v("如果因唯一索引导致旧行被删除，新纪录与老记录的主键值不同，所以其他表中所有与本表老数据主键建立的关联全部会被破坏。")]),s._v(" "),t("h2",{attrs:{id:"_2-删除记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-删除记录"}},[s._v("#")]),s._v(" 2.删除记录")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("LOW_PRIORITY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("QUICK")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IGNORE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tbl_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" tbl_alias"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("partition_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" partition_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" where_condition"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" row_count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("比如删除学号为 10000 的学生记录。")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" student "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" student_no"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"_3-修改记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改记录"}},[s._v("#")]),s._v(" 3.修改记录")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("LOW_PRIORITY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IGNORE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" table_reference\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" assignment_list\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" where_condition"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" row_count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),s._v(":\n    {expr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v("}\n\nassignment:\n    col_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),s._v("\n\nassignment_list:\n    assignment "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" assignment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])])]),t("p",[s._v("比如将学号为 10000 的学生性别改为女性。")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" student "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" gender"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" student_no"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("如果要更新的列是一个 JSON 类型，比如设置列为 JSON 数组。")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" my_table "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" my_json "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" JSON_SET"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("my_json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" JSON_ARRAY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'apple'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'banana'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'orange'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("这里只列出简单的增删改的 DML 操作，关于全面基础的 DML 操作请参考 MySQL 官方文档。")]),s._v(" "),t("h2",{attrs:{id:"_4-备份还原数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-备份还原数据"}},[s._v("#")]),s._v(" 4.备份还原数据")]),s._v(" "),t("p",[s._v("mysqldump 是用于转存储 MySQL 数据库的实用程序。")]),s._v(" "),t("p",[s._v("利用 mysqldump 可以用最少的命令来帮助备份数据库。使用一条简单的命令便可将整个数据库输出到单个文本文件中。 该工具用途广泛，足以备份所需的数据库部分，并提供多种选项来更改需要保存的数据。")]),s._v(" "),t("p",[s._v("（1）导出数据库的所有数据表。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令格式")]),s._v("\nmysqldump "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" 用户名 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" 数据库名 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 导出的文件名\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例")]),s._v("\nmysqldump "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" user_name "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p123456")]),s._v(" database_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" outfile_name.sql\n")])])]),t("p",[s._v("（2）还原整个数据库。")]),s._v(" "),t("p",[s._v("在命令行选择一个数据库之后，直接执行 SQL 文件即可。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" file.sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("（3）导出一个表到 SQL 文件。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令格式")]),s._v("\nmysqldump "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" 用户名 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" 密码 数据库名 表名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("导出的文件名\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例")]),s._v("\nmysqldump "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" user_name "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v(" database_name tbl_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" outfile.sql\n")])])]),t("p",[s._v("（4）导入 SQL 文件。")]),s._v(" "),t("p",[s._v("方法同还原整个数据库。")]),s._v(" "),t("p",[s._v("（5）将数据表导出到 CSV 文件。")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令格式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OUTFILE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[FILE]'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OUTFILE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[FILE]'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FIELDS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TERMINATED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("','")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPTIONALLY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENCLOSED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LINES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TERMINATED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" student "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OUTFILE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"student.csv"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("如果不指明文件的输出目录，默认输出至数据库文件的存储目录。可使用命令"),t("code",[s._v("find / -name student.csv")]),s._v("来查看具体位置。")]),s._v(" "),t("p",[s._v("如果指定 CSV 文件的输出目录报了如下错误：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ERROR 1 (HY000): Can't create/write to file  (Errcode: 13)\n")])])]),t("p",[s._v("错误的原因是所在目录没有写权限，给所在的目录增加写权限即可。")]),s._v(" "),t("p",[s._v("（6）导入 CSV 文件。")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令格式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATA")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INFILE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'file'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATA")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INFILE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'file'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FIELDS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TERMINATED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("','")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPTIONALLY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENCLOSED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LINES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TERMINATED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATA")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INFILE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'file.csv'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" student"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("导入 CSV 文件时有几点需要注意。")]),s._v(" "),t("ul",[t("li",[s._v("指定 csv 文件时使用绝对路径，否则 MySQL 默认从数据库存储的目录寻找。")]),s._v(" "),t("li",[s._v("在导入时，如果出现如下错误：")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ERROR 13 (HY000) at line 1: Can't get stat of '/fullpath/file.csv' (Errcode: 13)\n")])])]),t("p",[s._v("检查之后并非文件没有可读权限，请使用"),t("code",[s._v("LOAD DATA LOCAL INFILE")]),s._v("。")]),s._v(" "),t("p",[s._v("MySQL客户端与服务端在同一台主机时，加不加 LOCAL 是一样的，因为，因为默认从服务器端读取文件。")]),s._v(" "),t("p",[s._v("MySQL客户端与服务端不在同一台主机时，即使用本 MySQL 客户端将本地数据导入远程 MySQL，需要加 LOCAL。")]),s._v(" "),t("ul",[t("li",[s._v("默认域分隔符为Tab，空格或其它分隔符需显示指定。")])]),s._v(" "),t("p",[s._v("（7）导入 EXCEL 文件。")]),s._v(" "),t("p",[s._v("同导入 CSV 文件的方法一致。注意，导入文件时，都需要提前建立好与文件内各个段对应好的数据表，并且文件的路径需要使用引号括起来，双引号和单引号都可以。")]),s._v(" "),t("p",[s._v("（8）导出远程 SELECT 结果集到本地。")]),s._v(" "),t("p",[s._v("使用如下方法不可行，因为这个语句并不是在MySQL客户端执行，而是在MySQL服务器上执行，通常用于服务器管理员在服务器机器上进行数据备份使用。由于MySQL客户端账号并没有访问服务器机器本身的权限，所以这个SQL执行不会成功。即使有权限，SELECT 结果集会被导出到MySQL服务端，而非本地。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mysql "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h10.10.10.10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ucrazyant")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p123456")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P3306")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"SELECT * FROM tbl_name WHERE condition INTO OUTFILE '/tmp/file.txt'\"")]),s._v("\n")])])]),t("p",[s._v("正确方法，使用重定向的方式，将 SELECT 结果导出到本地。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mysql "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h10.10.10.10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ucrazyant")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p123456")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P3306")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SELECT * FROM tbl_name WHERE condition"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /tmp/file.txt\n")])])]),t("hr"),s._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/insert.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL 8.0 Reference Manual :: 13.2.7 INSERT Statement"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/replace.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL 8.0 Reference Manual :: 13.2.12 REPLACE Statement"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/delete.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL 8.0 Reference Manual :: 13.2.2 DELETE Statement"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/load-data.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL 8.0 Reference Manual :: 13.2.9 LOAD DATA Statement"),t("OutboundLink")],1)]),s._v(" "),t("Vssue",{attrs:{title:"DML数据操作"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);