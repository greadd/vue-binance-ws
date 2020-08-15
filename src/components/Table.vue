<template>
  <div class="container">
    <table class="table">
      <caption class="table__title">
        <slot></slot>
      </caption>
      <thead class="table__heading">
        <tr class="table__row">
          <th class="table__cell table__cell-header">Price</th>
          <th class="table__cell table__cell-header">Amount</th>
          <th class="table__cell table__cell-header total">Total</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr class="table__row" v-for="(item, index) in items" :key="index">
          <td class="table__cell">{{ item[0] }}</td>
          <td class="table__cell">{{ item[1] }}</td>
          <td class="table__cell total">
            {{ item[0] * item[1] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: ["items"]
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: calc(100vh - 95px);
  overflow: hidden;
  &:hover {
    overflow: auto;
  }
}
.table {
  width: 100%;
  border-collapse: collapse;
  background-color: rgb(231, 231, 0);
  border: 1px solid rgb(40, 40, 40);
  text-align: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);;
  &__title{
    padding-bottom: 4px;
    font-size: 18px;
  }
  &__cell {
    border: 1px solid rgb(40, 40, 40);
    padding: 5px 0;
  }
}
.table__cell-header {
  background-color: rgb(40, 40, 40);
  color: white;
  border: 1px solid rgb(231, 231, 0);
}

@media (max-width: 767px) {
  .total {
    display: none;
  }
}
@media (max-width: 480px) {
  .table {
    font-size: 14px;
  }
}
</style>
