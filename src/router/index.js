import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 定义路由
// 每个路由应该映射一个组件。 其中"component"是一个组件配置对象。
const routes = [
  // 设置聊天列表页面为首页
  {
    path: "/",
    redirect: {
      name: "index"
    }
  },
  // 最近消息列表（会话）
  {
    path: "/home",
    name: "index",
    component (resolve) {
      require(["../pages/home/Index"], resolve);
    }
  },
  //分类找药
  {
    path: "/category",
    name: "category",
    component (resolve) {
      require(["../pages/category/Category"], resolve);
    }
  }
];

let router = new VueRouter({
  history: true,
  routes
});

export default router;
