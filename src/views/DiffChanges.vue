<template>
  <div class="container">
    <div class="active-symbol">{{ activeSymbol }}</div>
    <select v-model="activeSymbol">
      <option v-for="symbol in symbols" :key="symbol">{{ symbol }}</option>
    </select>
    <Loader v-if="loading" />
    <ul class="list" v-else>
      <li class="list__item">Symbol: {{ info.s }}</li>
      <hr />
      <li class="list__item">Event type: {{ info.e }}</li>
      <li class="list__item">
        Event time:
        {{
          new Intl.DateTimeFormat("ru-RU", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          }).format(new Date(info.E))
        }}
      </li>
      <hr />
      <li class="list__item">First update ID in event: {{ info.U }}</li>
      <li class="list__item">Final update ID in event: {{ info.u }}</li>
      <hr />
      <li class="list__item">Bids to be updated: {{ info.b.length }}</li>
      <li class="list__item">Asks to be updated: {{ info.a.length }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DiffChanges",
  data: () => ({
    symbols: ["BTCUSDT", "BNBBTC", "ETHBTC"],
    activeSymbol: "BTCUSDT",
    info: {},
    loading: true,
  }),
  watch: {
    activeSymbol(symbol) {
      this.$bus.$emit("activeSymbol", this.activeSymbol);
    },
  },
  async mounted() {
    await this.$bus.$on("socketData", (data) => {
      // прослушиваем событие из шины данных
      this.info = data;
      this.loading = false;
    });
  },
};
</script>

<style lang="scss" scoped>
.active-symbol {
  text-align: center;
  margin: 0 auto;
  background-color: rgb(40, 40, 40);
  color: rgb(231, 231, 0);
  height: 30px;
  padding: 0 30px;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-size: 20px;
  font-weight: 600;
}

select {
  width: 120px;
  height: 40px;
  background-color: rgb(40, 40, 40);
  color: rgb(231, 231, 0);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  outline: none;
  margin: 30px 0 60px 30px;
  padding-left: 10px;
  cursor: pointer;
  border-radius: 8px;
}
option {
  width: 150px;
  height: 100px;
  background-color: rgb(40, 40, 40);
  color: rgb(231, 231, 0);
}
.list {
  margin: 0 100px;
  font-size: 30px;
  &__item {
    padding: 5px;
  }
}
@media (max-width: 767px) {
  .list {
    margin: 0 30px;
    font-size: 20px;
    &__item {
      padding: 5px;
    }
  }
}
@media (max-width: 480px) {
  .list {
    margin: 0 10px;
    font-size: 18px;
    &__item {
      padding: 5px;
    }
  }
}
</style>
