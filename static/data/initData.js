function getSitInitData(){
    var data={};
    data.MenuItems=getMenuItems();
    



    return data;
}
function getMenuItems(){
    return [
        {
            Key: '100',
            MenuName: '控制台',
            Icon:'layui-icon',
            MenuUrl: '/home'
        },
        {
            Key: '200',
            MenuName: 'CMS管理',
            ChildrenMenu: [
                {
                    Key: '201',
                    MenuName: '文章管理',
                    MenuUrl: '/admin/article/arts?title=文章'
                },
                {
                    Key: '202',
                    MenuName: '笑话管理',
                    MenuUrl: '/admin/article/jokes?title=笑话'
                },
                {
                    Key: '203',
                    MenuName: '新闻管理',
                    MenuUrl: '/admin/article/news?title=新闻'
                }
            ]
        },
        {
            Key: '300',
            MenuName: '哈哈哈',
            ChildrenMenu: [
                {
                    Key: '301',
                    MenuName: 'ss',
                    MenuUrl: '/a'
                },
                {
                    Key: '302',
                    MenuName: '笑话管理2',
                    MenuUrl: '/b2'
                },
                {
                    Key: '303',
                    MenuName: '新闻管理2',
                    MenuUrl: '/c'
                }
            ]
        },
    ];
}
 