<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" type="text/stylus">
  #app
    min-width 1200px
    height 100%
    font-family 'Microsoft YaHei UI', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing antialiased;
    -moz-osx-font-smoothing grayscale;
    color #000;
</style>
