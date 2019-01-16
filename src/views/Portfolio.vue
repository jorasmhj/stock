<template>
  <div class="home">
    <Portfolio/>
  </div>
</template>

<script>
// @ is an alias to /src
import Portfolio from "@/components/portfolio/Portfolio.vue";

export default {
  name: "portfolio",
  components: {
    Portfolio
  }
};
</script>
