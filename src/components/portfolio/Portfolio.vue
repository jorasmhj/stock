<template>
  <div>
    <div class="alert alert-info" role="alert" v-if="stocks.length == 0">
      <h4 class="alert-heading">No Stocks!</h4>
      <p>You dont have any stocks yet.</p>
      <hr>
      <p
        class="mb-0"
      >Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
    <stock v-for="(stock,index) in stocks" :key="index" :stock="stock"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Stock from "./Stock.vue";

export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    Stock
  }
};
</script>
