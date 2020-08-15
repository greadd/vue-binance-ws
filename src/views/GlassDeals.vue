<template>
  <div>
    <div class="active-symbol">{{symbol}}</div>
    <Loader v-if="loading"/>
    <div class="table-wrapper" v-else>
      <Table :items="glass.bids">Bids</Table>
      <Table :items="glass.asks">Asks</Table>
    </div>
  </div>
</template>

<script>
import Table from '@/components/Table'

export default {
  name: "GlassDeals",
  data: () => ({
    glass: {
      bids: null,
      asks: null
    },
    symbol: 'BTCUSDT',
    loading: true
  }),
  components: {
    Table
  },
  async mounted() {
    await this.snapshot();                           // снепшот
    this.loading = false                             // убираем загрузку
    this.wsUpdates();                                // подписываемся на обновления стакана по WS
    this.$bus.$on("activeSymbol", symbol => {        // при изменении символа
      this.glass.bids = this.glass.asks = null       // очищаем данные по прошлому символу
      this.ws.close();
      this.symbol = symbol;
      this.snapshot();                                // делаем снепшот по новому символу
      this.wsUpdates();                               // подписываемся на обновления стакана по WS с новым символом
    });
  },
  methods : {
    async snapshot () {
      let glass = await this.$sdk.get(this.symbol);   // делаем снепшот
      glass.bids = glass.bids.reverse();              // переварачиваем массив, чтобы сверху таблицы были новые данные
      glass.asks = glass.asks.reverse();              // переварачиваем массив, чтобы сверху таблицы были новые данные
      this.glass = glass;
    },
    wsUpdates () {
      this.ws = this.$sdk.subscribe(this.symbol);
      this.ws.onmessage = async event => {            // запускаем callBack при получении сообщений
        let data = JSON.parse(event.data);            // парсим данные в Json
        this.$bus.$emit("socketData", data);          // отправляем данные в шину данных
        let [newAsks, newBids] = [                    // создаём массивы новых данных, исключая нулевые сделки
          data.a.filter(ask => ask[1] != 0),
          data.b.filter(bid => bid[1] != 0)
        ];
        newAsks.reverse()                             // переворачиваем массив
        newBids.reverse()                             // переворачиваем массив
        this.glass.asks.splice(this.glass.asks.length - newAsks.length, newAsks.length);    // удаляем из asks столько данных сколько пришло
        this.glass.bids.splice(this.glass.bids.length - newBids.length, newBids.length);    // удаляем из bids столько данных сколько пришло
        this.glass.asks = [...newAsks, ...this.glass.asks, ]; // дописываем полученные данные в asks
        this.glass.bids = [...newBids, ...this.glass.bids, ]; // дописываем полученные данные в bids
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.table-wrapper {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}
.active-symbol {
  text-align: center;
  margin: 0 auto;
  background-color: rgb(40, 40, 40);
  color: rgb(231, 231, 0);
  height: 30px;
  padding: 0 30px;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  font-size: 20px;
  font-weight: 600;
}
</style>
