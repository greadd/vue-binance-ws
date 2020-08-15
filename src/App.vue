<template>
  <div id="app">
    <Navbar />
    <keep-alive><router-view /></keep-alive>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
