<template>
  <div class="home">
    <div class="header-top-wrapper">
      <head-top></head-top>
    </div>
    <sidebar-menu></sidebar-menu>
  </div>
</template>
<script>
  import headTop from '../../components/head_top/index'
  import sidebarMenu from '../../components/sidebar_menu/index'
  export default {
    components: {
      headTop,
      sidebarMenu
    }
  }
</script>
<style lang="stylus">
  .home
    position: absolute;
    top: 0;
    width: 100%;
    bottom: 0;
    .header-top-wrapper 
      margin-bottom: 10px;
</style>
