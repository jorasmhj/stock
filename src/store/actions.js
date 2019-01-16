import Vue from "vue";

export const loadData = ({ commit, getters }) => {
  Vue.http
    .get("data.json" + "?auth=" + getters.idToken)
    .then(res => res.json())
    .then(data => {
      if (data) {
        const stocks = data.stocks;
        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;

        const portfolio = {
          stockPortfolio,
          funds
        };

        commit("SET_STOCKS", stocks);
        commit("SET_PORTFOLIO", portfolio);
      }
    });
};

export const saveData = ({ state, getters }) => {
  let data = {
    funds: state.portfolio.funds,
    stockPortfolio: state.portfolio.stocks,
    stocks: state.stocks.stocks
  };
  Vue.http.put("data.json" + "?auth=" + getters.idToken, data);
};
