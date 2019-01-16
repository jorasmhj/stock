/* eslint-disable no-unused-vars */
import axios from "axios";
import router from "../router";

const state = {
  idToken: null,
  userId: null
};

const mutations = {
  authUser(state, userDate) {
    state.idToken = userDate.token;
    state.userId = userDate.userId;
    router.push("/portfolio");
  },
  logout(state) {
    state.idToken = null;
    state.userId = null;
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expiresIn");
    router.push("/");
  }
};

const actions = {
  tryAutoLogin({ commit, dispatch }) {
    let token = localStorage.getItem("token");
    if (token) {
      let expiresIn = localStorage.getItem("expiresIn");
      let userId = localStorage.getItem("userId");
      if (new Date() >= expiresIn) return;
      commit("authUser", { token: token, userId: userId });
      dispatch("loadData");
      // dispatch("setLogOutTimer", expiresIn);
    }
  },

  setLogOutTimer({ commit }, expireTime) {
    setTimeout(() => {
      commit("logout");
    }, expireTime * 1000);
  },

  signUp({ commit, dispatch }, authData) {
    axios
      .post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCS-_CX6xu98lWJPJVg3PIu_yE0D4nYdq0",
        authData
      )
      .then(res => {
        commit("authUser", {
          token: res.data.idToken,
          userId: res.data.localId
        });
        const now = new Date();
        const expirationDate = new Date(
          now.getTime() + res.data.expiresIn * 1000
        );

        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("userId", res.data.localId);
        localStorage.setItem("expiresIn", expirationDate);

        dispatch("setLogOutTimer", res.data.expiresIn);
      })
      .catch(error => console.log(error));
  },

  signIn({ commit, dispatch }, authData) {
    axios
      .post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCS-_CX6xu98lWJPJVg3PIu_yE0D4nYdq0",
        authData
      )
      .then(res => {
        console.log(res);
        commit("authUser", {
          token: res.data.idToken,
          userId: res.data.localId
        });

        const now = new Date();
        const expirationDate = new Date(
          now.getTime() + res.data.expiresIn * 1000
        );

        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("expiresIn", expirationDate);
        localStorage.setItem("userId", res.data.localId);
        dispatch("loadData");
        dispatch("setLogOutTimer", res.data.expiresIn);
      })
      .catch(err => console.log(err));
  },
  logout({ commit }) {
    commit("logout");
  }
};

const getters = {
  userId(state) {
    return state.userId;
  },
  idToken(state) {
    return state.idToken;
  },
  authenticated(state) {
    if (state.idToken) return true;
    else return false;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
