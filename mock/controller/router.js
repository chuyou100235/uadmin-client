const data = [
  {
    path: "/",
    component: "Layout",
    redirect: "index",
    children: [
      {
        path: "index",
        name: "Index",
        component: "index/index",
        meta: {
          title: "首页",
          icon: "home",
          affix: true,
        },
      },
    ],
  },
  {
    path: "/test",
    component: "Layout",
    redirect: "noRedirect",
    children: [
      {
        path: "test",
        name: "Test",
        component: "test/index",
        meta: {
          title: "test",
          icon: "marker",
          permissions: ["admin", "test"],
        },
      },
    ],
  },
  {
    path: "/byui",
    component: "Layout",
    redirect: "noRedirect",
    name: "Byui",
    meta: { title: "组件", icon: "cloud" },
    alwaysShow: true,
    children: [
      {
        path: "permission",
        name: "Permission",
        component: "byui/permission/index",
        meta: {
          title: "权限控制",
          permissions: ["admin", "editor", "test"],
        },
      },
      {
        path: "menu1",
        component: "byui/nested/menu1/index",
        name: "Menu1",
        meta: {
          title: "嵌套路由 1",
          permissions: ["admin"],
        },
        alwaysShow: true,
        children: [
          {
            path: "menu1-1",
            component: "byui/nested/menu1/menu1-1/index",
            name: "Menu1-1",
            meta: { title: "嵌套路由 1-1" },
            alwaysShow: true,
            children: [
              {
                path: "menu1-1-1-1",
                component: "byui/nested/menu1/menu1-1/menu1-1-1/index",
                name: "Menu1-1-1",
                meta: { title: "嵌套路由 1-1-1" },
              },
            ],
          },
        ],
      },
      {
        path: "icon",
        name: "Icon",
        component: "byui/icon/index",
        meta: { title: "常规图标", permissions: ["admin"] },
      },
      {
        path: "remixIcon",
        name: "RemixIcon",
        component: "byui/icon/remixIcon",
        meta: { title: "小清新图标", permissions: ["admin"] },
      },
      {
        path: "colorfulIcon",
        name: "ColorfulIcon",
        component: "byui/icon/colorfulIcon",
        meta: { title: "多彩图标", permissions: ["admin"] },
      },
      {
        path: "table",
        name: "Table",
        component: "byui/table/index",
        meta: { title: "表格", permissions: ["admin", "editor"] },
      },
      {
        path: "form",
        name: "Form",
        component: "byui/form/index",
        meta: { title: "表单", permissions: ["admin"] },
      },
      {
        path: "element",
        name: "Element",
        component: "byui/element/index",
        meta: { title: "常用组件", permissions: ["admin"] },
      },
      {
        path: "tree",
        name: "Tree",
        component: "byui/tree/index",
        meta: { title: "树", permissions: ["admin"] },
      },
      {
        path: "card",
        name: "Card",
        component: "byui/card/index",
        meta: { title: "卡片", permissions: ["admin"] },
      },
      {
        path: "magnifier",
        name: "Magnifier",
        component: "byui/magnifier/index",
        meta: { title: "放大镜", permissions: ["admin"] },
      },
      {
        path: "waterfall",
        name: "Waterfall",
        component: "byui/waterfall/index",
        meta: { title: "瀑布屏", noKeepAlive: true, permissions: ["admin"] },
      },
      {
        path: "echarts",
        name: "Echarts",
        component: "byui/echarts/index",
        meta: { title: "图表", permissions: ["admin"] },
      },

      {
        path: "loading",
        name: "Loading",
        component: "byui/loading/index",
        meta: { title: "loading", permissions: ["admin"] },
      },
      {
        path: "player",
        name: "Player",
        component: "byui/player/index",
        meta: {
          title: "视频播放器",
          noKeepAlive: true,
          permissions: ["admin"],
        },
      },
      {
        path: "editor",
        name: "Editor",
        component: "byui/editor/index",
        meta: { title: "富文本编辑器", permissions: ["admin"] },
      },
      {
        path: "qrCode",
        name: "QrCode",
        component: "byui/qrCode/index",
        meta: { title: "二维码", permissions: ["admin"] },
      },
      {
        path: "backToTop",
        name: "BackToTop",
        component: "byui/backToTop/index",
        meta: { title: "返回顶部", permissions: ["admin"] },
      },
      {
        path: "lodash",
        name: "Lodash",
        component: "byui/lodash/index",
        meta: { title: "lodash", permissions: ["admin"] },
      },
      {
        path: "imgComparison",
        name: "ImgComparison",
        component: "byui/imgComparison/index",
        meta: { title: "图像拖拽比对", permissions: ["admin"] },
      },
      {
        path: "codeGenerator",
        name: "CodeGenerator",
        component: "byui/codeGenerator/index",
        meta: { title: "代码生成机", permissions: ["admin"] },
      },
      {
        path: "markdown",
        name: "Markdown",
        component: "byui/markdown/index",
        meta: { title: "markdown阅读器", permissions: ["admin"] },
      },
      {
        path: "smallComponents",
        name: "SmallComponents",
        component: "byui/smallComponents/index",
        meta: { title: "小组件", permissions: ["admin"] },
      },

      {
        path: "upload",
        name: "Upload",
        component: "byui/upload/index",
        meta: { title: "上传", permissions: ["admin"] },
      },
      {
        path: "sticky",
        name: "Sticky",
        component: "byui/sticky/index",
        meta: { title: "sticky吸附", permissions: ["admin"] },
      },
      {
        path: "log",
        name: "Log",
        component: "byui/errorLog/index",
        meta: { title: "错误日志模拟", permissions: ["admin"] },
      },
      {
        path: "news",
        name: "News",
        component: "byui/news/index",
        meta: { title: "新闻（可能存在跨域）", permissions: ["admin"] },
      },
      {
        path: "more",
        name: "More",
        component: "byui/more/index",
        meta: { title: "更多组件", permissions: ["admin"] },
      },
    ],
  },
  {
    path: "/error",
    component: "EmptyLayout",
    redirect: "noRedirect",
    name: "Error",
    meta: { title: "错误页", icon: "bug" },
    alwaysShow: true,
    children: [
      {
        path: "/401",
        name: "401",
        component: "401",
        meta: { title: "401" },
      },
      {
        path: "/404",
        name: "404",
        component: "404",
        meta: { title: "404" },
      },
    ],
  },
];
export default [
  {
    url: "/menu/navigate",
    type: "post",
    response: (config) => {
      return { code: 200, msg: "success", data: data };
    },
  },
];
