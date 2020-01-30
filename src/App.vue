<template>
  <div id="app">
    <NavbarComponent></NavbarComponent>
    <div class="container">
      <div class="columns is-mobile">
        <div class="column is-full-mobile searchbox">
          <SearchBox></SearchBox>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-6 column--align-center">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from 'Components/Layouts/Navbar/NavbarComponent.vue';
import SearchBox from 'Components/Shared/Search-box/SearchBoxComponent.vue';

export default {
  name: 'app',
  components: {
    NavbarComponent,
    SearchBox,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "./App.scss";
  @import "Variable";
  html {
    background: $third-color;
    body {
      background: $third-color;
    }
  }
</style>
