import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";

import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.http.options.root = "https://vue-js-stock-trader-c7495.firebaseio.com/";

router.beforeEach((to, from, next) => {
  document.title = to.name.charAt(0).toUpperCase() + to.name.slice(1);
  next();
});

Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
