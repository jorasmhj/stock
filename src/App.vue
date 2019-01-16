<template>
  <div id="app" class="container">
    <Header/>
    <EndDay v-if="$store.getters.authenticated"/>
    <div class="row">
      <div class="col-md-12">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import EndDay from "./components/EndDay";

export default {
  components: {
    Header,
    EndDay
  },
  created() {
    this.$store.dispatch("initStocks");
    this.$store.dispatch("tryAutoLogin");
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  margin: 30px;
}
.row {
  margin: 10px 0px;
}

.bg-light li.active a {
  color: #000 !important;
}
</style>
