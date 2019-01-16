<template>
  <div>Day ends on : {{endDay}}</div>
</template>


<script>
export default {
  data() {
    return {
      endDay: 24
    };
  },
  created() {
    setInterval(() => {
      if (this.endDay > 0) {
        this.endDay--;
      } else {
        this.endDay += 24;
        this.$store.dispatch("randomizeStocks");
        this.$store.dispatch("saveData");
      }
    }, 1000);
  }
};
</script>
