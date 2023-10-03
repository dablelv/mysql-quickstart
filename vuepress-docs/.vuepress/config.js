module.exports = {
    base: "/mysql-quickstart/",
    title: 'MySQL 快速上手',
    description: '一本助您快速上手 MySQL 的开源书籍',
    head: [
        ['meta',{name: 'referrer',content: 'no-referrer'}],
        ['link',{rel: 'icon', href: '/favicon.png'}]
    ],
    plugins: [
        [
          'vuepress-plugin-right-anchor',
          {
            expand: {
              trigger: 'click'
            }
          }
        ],
        [
          '@vssue/vuepress-plugin-vssue',
          {
            platform: 'github',
            owner: 'dablelv',
            repo: 'mysql-quickstart',
            clientId: '58d9f8d88d20759d8b2d',
            clientSecret: 'a7d5ef4bc9559fb5c37dadcddf11556e32a9a964',
            autoCreateIssue: true,
          }
        ]
    ],
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '个人主页',
                items: [
                  { text: 'CSDN', link: 'https://dablelv.blog.csdn.net', target:'_blank' },
                  { text: 'Github', link: 'https://github.com/dablelv', target:'_blank' }
                ]
              },
              {
                text: '其他书籍',
                items: [
                  { text: 'Go 编码建议', link: 'https://dablelv.github.io/go-coding-advice', target:'_blank' },
                  { text: '后台开发命令365', link: 'https://dablelv.github.io/backend-cmd', target:'_blank' },
                  { text: 'C++ 进阶心法', link: 'https://book.douban.com/subject/33434575', target:'_blank' },
                ]
              },
              { text: 'Github', link: 'https://github.com/dablelv/backend-cmd/mysql-quickstart/'}
        ],
        sidebarDepth:0,
        sidebar:[
            ['/', '前言'],
            ['/认识SQL', '认识 SQL'],
            ['/认识MySQL', '认识 MySQL'],
            ['/认识mysql命令', '认识 mysql 命令'],
            ['/连接MySQL', '连接 MySQL'],
            ['/DCL数据控制', 'DCL 数据控制'],
            ['/DDL数据定义', 'DDL 数据定义'],
            ['/DML数据操作', 'DML 数据操作'],
            {
                title: 'DQL 数据查询',
                children: [
                  ['/DQL/数据查询', '数据查询'],
                  ['/DQL/连接查询', '连接查询'],
                  ['/DQL/子查询', '子查询']
                ]
            },
            {
                title: 'TCL 事务控制',
                children: [
                  ['/TCL/什么是数据库事务', '什么是数据库事务'],
                  ['/TCL/事务控制', '事务控制']
                ]
            },
            ['/索引', '索引'],
            ['/约束', '约束'],
            {
                title: '存储对象',
                children: [
                  ['/存储对象/存储过程', '存储过程'],
                  ['/存储对象/存储函数', '存储函数'],
                  ['/存储对象/触发器', '触发器'],
                  ['/存储对象/事件', '事件'],
                  ['/存储对象/视图', '视图'],
                ]
            },
            ['/游标', '游标'],
            {
                title: '字符集与排序规则',
                children: [
                  ['/字符集与排序规则/字符集', '字符集'],
                  ['/字符集与排序规则/排序规则', '排序规则']
                ]
            },
            ['/特殊字符', '特殊字符'],
            ['/常用函数', '常用函数'],
        ]
    }
}