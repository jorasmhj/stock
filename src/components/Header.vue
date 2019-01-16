<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <router-link
          to="/signin"
          active-class="active"
          tag="li"
          class="nav-item"
          v-show="!authenticated"
        >
          <a class="nav-link">
            Sign In
            <span class="sr-only">(current)</span>
          </a>
        </router-link>
        <router-link
          to="/signup"
          active-class="active"
          tag="li"
          class="nav-item"
          v-show="!authenticated"
        >
          <a class="nav-link">
            Sign Up
            <span class="sr-only">(current)</span>
          </a>
        </router-link>
        <router-link
          to="/portfolio"
          active-class="active"
          tag="li"
          class="nav-item"
          v-if="authenticated"
        >
          <a class="nav-link">
            Portfolio
            <span class="sr-only">(current)</span>
          </a>
        </router-link>
        <router-link
          to="/stocks"
          active-class="active"
          tag="li"
          class="nav-item"
          v-if="authenticated"
        >
          <a class="nav-link">
            Stocks
            <span class="sr-only">(current)</span>
          </a>
        </router-link>
        <li class="nav-item" @click="logout" v-if="authenticated">
          <a class="nav-link" href="#">
            Logout
            <span class="sr-only">(current)</span>
          </a>
        </li>
      </ul>
    </div>
    <ul class="navbar-nav float-right">
      <li class="nav-item">
        <a class="nav-link" @click="endDay" href="#">
          End Day
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item dropdown" @click="showDropdown = !showDropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Save or Load</a>
        <div
          class="dropdown-menu"
          :class="{show: showDropdown}"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <a class="dropdown-item" href="#" @click="saveData">Save</a>
          <a class="dropdown-item" href="#" @click="loadData">Load</a>
        </div>
      </li>
    </ul>

    <strong class="nav navbar-nav float-right">Funds: {{funds|currency}}</strong>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      showDropdown: false
    };
  },
  methods: {
    endDay() {
      this.$store.dispatch("randomizeStocks");
    },
    saveData() {
      this.$store.dispatch("saveData");
    },
    loadData() {
      this.$store.dispatch("loadData");
    },
    logout() {
      this.$store.dispatch("logout");
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    authenticated() {
      return this.$store.getters.authenticated;
    }
  }
};
</script>

<style scoped>
.bg-light {
  background: #45b883 !important;
}
</style>
