/* eslint-disable no-unused-vars */

const state = {
  funds: 1000,
  stocks: []
};

const mutations = {
  BUY_STOCKS(state, { stockId, stockQuantity, stockPrice }) {
    const record = state.stocks.find(ele => ele.id == stockId);
    if (record) {
      record.quantity += stockQuantity;
    } else {
      state.stocks = [
        { id: stockId, quantity: stockQuantity },
        ...state.stocks
      ];
    }
    state.funds -= stockQuantity * stockPrice;
  },
  SELL_STOCKS(state, { stockId, stockQuantity, stockPrice }) {
    const record = state.stocks.find(ele => ele.id == stockId);
    if (record.quantity > stockQuantity) record.quantity -= stockQuantity;
    else state.stocks.splice(state.stocks.indexOf(record), 1);
    state.funds += stockQuantity * stockPrice;
  },
  SET_PORTFOLIO(state, portfolio) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
};

const actions = {
  sellStock: ({ commit }, order) => {
    commit("SELL_STOCKS", order);
  }
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => stock.id == element.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },

  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
