<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header';

export default {
  components: {
    'app-header': header,
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
