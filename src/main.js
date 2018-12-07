import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import VueLazyload from "vue-lazyload";
import VueAwesomeSwiper from "vue-awesome-swiper";

import "swiper/dist/css/swiper.css";
import "./assets/css/common.css";

Vue.config.productionTip = false;

// Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://b2c.wap.800.net:86/images/wap/loading.png',
  loading: 'http://b2c.wap.800.net:86/images/wap/loading.png',
  attempt: 1
})

Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
