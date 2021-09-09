const sidebar = {
  repository: [
    {
      title: '简介',
      collapsable: false,
      children: ['/repository/'],
    },
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
  jianshu: [
    {
      title: '简介',
      collapsable: false,
      children: ['/jianshu/'],
    },
    {
      title: 'Git 学习笔记',
      collapsable: false,
      children: [
        '/jianshu/gitStudyNote/',
        '/jianshu/gitStudyNote/note1',
        '/jianshu/gitStudyNote/note2',
        '/jianshu/gitStudyNote/note3',
        '/jianshu/gitStudyNote/note4',
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
      { text: '知识库', link: '/repository/' },
      {
        text: '简书',
        items: [
          { text: '简书文章', link: '/jianshu/' },
          { text: '我的简书', link: 'https://www.jianshu.com/u/b40b0585d2b1' },
        ],
      },
      { text: '外链', link: 'https://baidu.com' },
    ],
    sidebarDepth: 2, // 侧边栏显示2级
    // sidebar: 'auto', // 侧边栏配置
    sidebar: {
      collapsable: false,
      '/repository/': sidebar['repository'],
      '/jianshu/': sidebar['jianshu'],
    },
  },
}
