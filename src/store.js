import Vue from "vue";
import Vuex from "vuex";
import stocks from "./store/stocks";
import portfolio from "./store/portfolio";
import auth from "./store/auth";
import * as actions from "./store/actions";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stocks,
    portfolio,
    auth
  },
  actions
});
