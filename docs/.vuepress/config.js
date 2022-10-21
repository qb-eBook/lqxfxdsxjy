module.exports = {
  base: '/lqxfxdsxjy/',
  dest: './dist',
  title: '刘擎西方现代思想讲义',
  description: '刘擎西方现代思想讲义，刘擎，现代思想',
  head: [
    ['link', { rel: 'icon', href: '/images/icon.png' }]
  ],
  themeConfig: {
    // displayAllHeaders: true,
    lastUpdated: '上次更新',
    sidebarDepth: 2,
    sidebar: [
      { title: '前言', path: '/chapters/01.md' },
      { title: '导论', path: '/chapters/02.md' },
      // 侧边栏分组
      {
        title: '第一章 现代思想的成年',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          ['/chapters/03.md', '04 路标：韦伯与现代思想的成年'],
          ['/chapters/04.md', '05 韦伯 I: 为什么说“祛魅”是人类的梦醒时分'],
          ['/chapters/05.md', '06 韦伯 II: 现代的“诸神之争”是怎么发生的'],
          ['/chapters/06.md', '07 韦伯 III: 工具理性会带来什么问题'],
          ['/chapters/07.md', '08 韦伯 IV:“现代的铁笼”是怎么铸就的'],
        ]
      },
      {
        title: '第二章 现代人的精神危机',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/chapters/08.md', '09 路标：现代人的“精神危机”'],
          ['/chapters/09.md', '10 尼采 I: “上帝死了”究竟是什么意思'],
          ['/chapters/10.md', '11 尼采 II: “超人”究竟是什么人'],
          ['/chapters/11.md', '12 尼采 III: 我们还有共同的真相吗'],
          ['/chapters/12.md', '13 弗洛伊德 I: 为什么说他宣告了“理性人”的死亡'],
          ['/chapters/13.md', '14 弗洛伊德 II: 精神分析学说真的是科学吗'],
          ['/chapters/14.md', '15 萨特 I: 为什么如此特立独行'],
          ['/chapters/15.md', '16 萨特 II: 为什么可以从“虚无”推出“自由”'],
          ['/chapters/16.md', '17 萨特 III: 为什么自由是一种沉重的负担'],
        ]
      },
      {
        title: '第三章 20 世纪的教训',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/chapters/17.md', '18 路标：20 世纪的灾难为什么不可思议'],
          ['/chapters/18.md', '19 鲍曼：大屠杀是因为疯狂吗'],
          ['/chapters/19.md', '20 阿伦特 I: 大屠杀真的是“平庸之恶”吗'],
          ['/chapters/20.md', '21 阿伦特 II: 怎么才能不变成坏人'],
          ['/chapters/21.md', '22 波普尔 I: 科学是怎么被重新定义的'],
          ['/chapters/22.md', '23 波普尔 II: 为什么人类不能创造出完美社会'],
          ['/chapters/23.md', '24 哈耶克 I: 没有设计规划，能够形成秩序吗'],
          ['/chapters/24.md', '25 哈耶克 II:“理性的自负”为什么很危险'],
          ['/chapters/25.md', '26 伯林 I: 是“狐狸”还是“刺猬”'],
          ['/chapters/26.md', '27 伯林 II: 价值一元论错在了哪里'],
          ['/chapters/27.md', '28 伯林 III: 你想要的是哪种“自由”'],
          ['/chapters/28.md', '29 马尔库塞 I:“舒适的”不自由是怎么一回事'],
          ['/chapters/29.md', '30 马尔库塞 II: 我们是“单面人”吗'],
          ['/chapters/30.md', '31 马尔库塞 III:“实质性的变革”是有可能的吗'],
        ]
      },
      {
        title: '第四章 自由主义及其批判者',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/chapters/31.md', '32 路标：自由主义为什么会不断遭到挑战'],
          ['/chapters/32.md', '33 罗尔斯：怎么才能实现社会正义'],
          ['/chapters/33.md', '34 诺齐克：最自由的国家是什么样子'],
          ['/chapters/34.md', '35 德沃金：什么样的平等才合理'],
          ['/chapters/35.md', '36 桑德尔：当代人需要为历史事件负责吗'],
          ['/chapters/36.md', '37 沃尔泽：“原子化的个人”是怎么诞生的'],
          ['/chapters/37.md', '38 泰勒：如何“成为你自己”'],
          ['/chapters/38.md', '39 哈贝马斯：为什么“交谈”是一件非比寻常的事'],
        ]
      },
      {
        title: '尾声后冷战时代的争论',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/chapters/39.md', '40 路标：后冷战时代的世界秩序'],
          ['/chapters/40.md', '41 福山：“历史终结论”究竟在说什么'],
          ['/chapters/41.md', '42 亨廷顿：“文明的冲突”是不可避免的吗'],
          ['/chapters/42.md', '43 结语：现在是新的历史转折点吗'],
        ]
      },
      { title: '答学友问', path: '/chapters/43.md' },
      { title: '推荐阅读书单', path: '/chapters/44.md' },
      { title: '后记：感想与致谢', path: '/chapters/45.md' },
      { title: '参考文献', path: '/chapters/46.md' },
    ]
  }
}