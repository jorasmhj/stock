<template>
  <div id="app" class="container">
    <Header/>
    <EndDay v-if="$store.getters.authenticated"/>
    <div class="row">
      <div class="col-md-12">
        <transition name="slide" mode="out-in">
          <router-view/>
        </transition>
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
.slide-leave-active {
  transition: opacity 0.5s ease;
  opacity: 0;
  animation: slide-out 0.5s ease-out forwards;
}

.slide-leave {
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
}

@keyframes slide-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30px);
  }
}

@keyframes slide-in {
  0% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>

