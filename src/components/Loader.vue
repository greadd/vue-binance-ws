<template>
  <div class="lds-dual-ring"></div>
</template>

<style lang="scss" scoped>
.lds-dual-ring {
  width: 80px;
  height: 80px;
  margin: 10vh auto;
  &::after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid rgb(40, 40, 40);
  border-color: rgb(40, 40, 40) rgb(231, 231, 0) rgb(40, 40, 40) rgb(231, 231, 0);
  animation: lds-dual-ring .7s linear infinite;
  }
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
