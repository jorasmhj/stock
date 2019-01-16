import Vue from "vue";
import Router from "vue-router";
import store from "./store";

import Home from "./views/Home.vue";
import Portfolio from "./views/Portfolio.vue";
import Stocks from "./views/Stocks.vue";
import SignUp from "./views/SignUp.vue";
import SignIn from "./views/SignIn.vue";

Vue.use(Router);

let protect = function(to, from, next) {
  if (store.state.auth.idToken) {
    next();
  } else {
    next("/signin");
  }
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home"
      }
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
      beforeEnter: protect
    },
    {
      path: "/stocks",
      name: "stocks",
      component: Stocks,
      beforeEnter: protect
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
