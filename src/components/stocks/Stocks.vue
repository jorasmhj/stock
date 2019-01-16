<template>
  <div class="row">
    <Stock v-for="(stock,index) in stocks" :key="index" :stock="stock"></Stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
import axios from "axios";

export default {
  components: {
    Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
    userId() {
      return this.$store.getters.userId;
    }
  },
  created() {
    axios
      .get(
        "https://vue-js-stock-trader-c7495.firebaseio.com/test.json/" +
          "?auth=" +
          this.$store.getters.idToken
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
};
</script>
