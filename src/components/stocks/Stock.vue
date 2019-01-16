<template>
  <div class="col-sm-6 col-md-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          {{stock.name}}
          <small class="small">(Price: {{stock.price|currency}})</small>
        </h5>
        <div class="float-left">
          <input
            type="number"
            name
            id
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
          >
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="insufficientFund || quantity <= 0"
          >{{insufficientFund ? 'Insufficient fund' : 'Buy'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    buyStock() {
      let order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: parseInt(this.quantity)
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
      this.$store.dispatch("saveData");
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFund() {
      return this.quantity * this.stock.price > this.funds;
    }
  }
};
</script>
