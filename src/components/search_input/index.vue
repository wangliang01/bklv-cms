<template>
  <div class="search">
    <div class="search-box">
      <input type="text" class="search-input" placeholder="请输入关键词" @click="search" :value="data" :style="inputStyle"/>
      <span class="icon-search" :class="{active: page==='home'}" :style="iconStyle"></span>
      <span class="search-btn" @click="search">搜索</span>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style lang="stylus">
  .search{
    margin-top: 2px;
    width: 100%;
    height: 36px;
    background-color: #fff;
    .search-box{
      position: relative;
      padding: 0 20px;
      font-size:0;
      height: 100%;
      .search-input{
        padding-right: 60px;
        width: 280px;
        box-sizing: border-box;
        height: 36px;
        line-height: 36px;
        border: none;
        background-color: #f5f5f5;
        border-radius: 100px;
        font-size:15px;
        outline: none;
        text-indent:20px;
      }
      ::-webkit-input-placeholder { /* WebKit browsers */
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #999999;
      }
      .icon-search{
        position: absolute;
        top: 16px;
        /*left: 6.5333rem;*/
        left: 30;
        display: inline-block;
        width: 15px;
        height: 15px;
        background-size: 360px;
        /*background-image: url('../assets/image/spirit@3x.png');*/
        background-position: -282px 0;

        &.active{
          background-position: -301px 0;
        }
      }
      .search-btn{
        position: absolute;
        top: 2px;
        right: 14px;
        width: 4rem;
        height:36px;
        line-height:36px;
        background-color: #20a0ff;
        color: #fff;
        text-align: center;
        border-radius: 100px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
</style>
