module.exports = {
    base: '/gulu/',
    title: '我的 UI框架',
    description: '一个学习Vue的UI框架',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '欢迎Star', link: 'https://github.com/islandsaying/gulu' },
            { text: 'GitHub', link: 'https://github.com/islandsaying' },
        ],
        sidebar: [
            {
                title: '介绍',
                collapsable: false,
                children: [
                    '/introduce/',
                ]
            },
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/tabs',
                    '/components/popover',
                    '/components/collapse'
                ]
            }
        ]
    }
}
