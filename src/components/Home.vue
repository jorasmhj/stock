<template>
  <div>
    <h1>Trade or Vue your Portfolio</h1>
    <p>Your Fund: {{funds|currency}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>
