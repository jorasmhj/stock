<template>
  <div class="col-sm-6 col-md-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          {{stock.name}}
          <small
            class="small"
          >(Price: {{stock.price|currency}} | Quantity: {{stock.quantity}})</small>
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
            @click="sellStock"
            :disabled="insufficientQuantity || quantity <= 0"
          >Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      let order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: parseInt(this.quantity)
      };
      this.quantity = 0;
      this.placeSellOrder(order);
      this.$store.dispatch("saveData");
    }
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  }
};
</script>
