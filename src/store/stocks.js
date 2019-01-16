/* eslint-disable no-unused-vars */
import stocks from "../data/stocks";

const state = {
  stocks: []
};

const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  },
  RND_STOCKS(state) {
    state.stocks.forEach(stock => {
      let min = -5;
      let change = Math.floor(Math.random() * (5 - min)) + min;
      stock.price += change;
      if (stock.price < 1) stock.price = 1;
    });
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit("BUY_STOCKS", order);
  },

  initStocks: ({ commit }) => {
    commit("SET_STOCKS", stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit("RND_STOCKS");
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
