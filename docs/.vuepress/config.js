const sidebar = {
  gitStudyNote: [
    {
      title: 'Git 学习笔记',
      collapsable: false,
      children: [
        '/repository/gitStudyNote/',
        '/repository/gitStudyNote/note1',
        '/repository/gitStudyNote/note2',
        '/repository/gitStudyNote/note3',
        '/repository/gitStudyNote/note4',
      ],
    },
  ],
}

module.exports = {
  title: "Peng's KnowledgeBase",
  description: '我的个人知识库',
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  // 这是部署到github相关的配置
  base: '/MyVuePress/',
  markdown: {
    lineNumbers: false, // 代码块显示行号
  },
  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      // 导航栏配置
      {
        text: '知识库',
        items: [{ text: 'Git 学习笔记', link: '/repository/gitStudyNote/' }],
      },
      {
        text: '外链',
        items: [
          { text: '简书', link: 'https://www.jianshu.com/u/b40b0585d2b1' },
          { text: 'Github', link: 'https://github.com/13812700839/MyVuePress' },
        ],
      },
    ],
    sidebarDepth: 2, // 侧边栏显示2级
    // sidebar: 'auto', // 侧边栏配置
    sidebar: {
      collapsable: false,
      '/repository/gitStudyNote/': sidebar['gitStudyNote'],
    },
    // Boolean | Object, 默认值是 undefined.
    updatePopup: true,
    // 以下为可选的 "Edit this page" 链接选项

    // 如果你的文档和项目位于不同仓库：
    // docsRepo: 'vuejs/vuepress',
    // 如果你的文档不在仓库的根目录下：
    // docsDir: 'docs',
    // 如果你的文档在某个特定的分支（默认是 'master' 分支）：
    docsBranch: 'gh-pages',
    // 默认为 false，设置为 true 来启用
    editLinks: true,
    // 自定义编辑链接的文本。默认是 "Edit this page"
    editLinkText: '帮助我们改进页面内容！',
  },
}
