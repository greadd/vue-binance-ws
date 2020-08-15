<template>
  <header class="header">
    <h1 class="header__title">Trading activity</h1>
    <nav class="menu">
      <ul class="menu__list">
        <router-link
          class="menu__list-item"
          to="/"
          tag="li"
          exact
          active-class="active"
          ><a href="#">GlassDeals</a></router-link
        >
        <router-link
          class="menu__list-item"
          to="/DiffChanges"
          tag="li"
          active-class="active"
          ><a href="#">DiffChanges</a></router-link
        >
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(40, 40, 40);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  &__title {
    color: rgb(231, 231, 0);
    padding-left: 30px;
  }
}
.menu {
  &__list {
    display: flex;
    color: white;
  }
  &__list-item {
    height: 50px;
    width: 100px;
    text-align: center;
    padding: 1rem;
    transition: all 0.4s;
    line-height: 1;
  }
}
.active {
  color: rgb(40, 40, 40);
  background-color: rgb(231, 231, 0);
}
@media (max-width: 480px) {
  .header__title {
    font-size: 20px;
    padding-left: 10px;
  }
  .menu__list-item {
    width: 100%;
  }
}
</style>
