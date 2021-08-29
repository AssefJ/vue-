import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    //首页
    path: "/home",
    component: () => import("../views/Home"),
    children: [
      {
        path: "/home",
        redirect: "/home/homepage",
      },
      {
        //首页/////
        path: "/home/homepage",
        component: () => import("../views/Home/HomePage.vue"),
      },
      {
        //分类
        path: "/home/classify",
        component: () => import("../views/Home/Classify.vue"),
      },
      {
        //购物车
        path: "/home/Shopping",
        component: () => import("../views/Home/Shopping.vue"),
      },
      {
        //我的
        path: "/home/mine",
        component: () => import("../views/Home/Mine.vue"),
      },
    ],
  },
  {
    //会员资料
    path: "/memberinfo",
    component: () => import("../views/MemberInfo.vue"),
  },
  {
    //尿不湿
    path: "/diapers",
    component: () => import("../views/Diapers.vue"),
  },
  {
    //全球奶粉
    path: "/milkPowder",
    component: () => import("../views/MilkPowder.vue"),
  },
  {
    //热销榜
    path: "/hotsell",
    component: () => import("../views/HotSell.vue"),
  },
  {
    //商品详情页
    path: "/detailpage",
    component: () => import("../views/DetailPage.vue"),
  },
  {
    //登录页面
    path: "/register",
    component: () => import("../views/Register.vue"),
  },
  {
    //我的地址页面
    path: "/myaddress",
    component: () => import("../views/MyAddress.vue"),
  },
  {
    //新增地址页面
    path: "/newaddress",
    component: () => import("../views/NewAddress.vue"),
  },
  {
    //404
    path: "/404",
    name: "404",
    component: () => import("../views/404.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
