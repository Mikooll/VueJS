<template>
  <div>
      <app-Stock v-for="(stock, index) in stocks" :key="index" :stock='stock'></app-Stock>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import Stock from "./Stock.vue";

  export default {
    computed: {
      ...mapGetters({
        stocks: "stockPortfolio",
      }),
    },
    components: {
      appStock: Stock,
    },
  };
</script>
