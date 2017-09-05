<template>
  <div class="guide-word-index">
    <!--状态-->
    <status-bar></status-bar>
    <!--来源-->
    <status-bar label="来源" :radios="sources"></status-bar>
    <!--目的地-->
    <div class="destination clearfix">
      <div class="label fl">目的地：</div>
      <div class="select-date-wrapper fl">
        <select-date></select-date>
      </div>
      <div class="search-input-wrapper fl">
        <search-input></search-input>
      </div>
    </div>
  </div>
</template>
<script>
  import statusBar from '../../../components/status_bar/index.vue'
  import selectDate from '../../../components/select_destination/index.vue'
  import searchInput from '../../../components/search_input/index.vue'
  export default {
    components: {
      statusBar,
      selectDate,
      searchInput
    },
    data () {
      return {
        sources: [
          {
            label: 0,
            name: '全部'
          },
          {
            label: 1,
            name: '源自网络'
          },
          {
            label: 2,
            name: '导游原创'
          }
        ]
      }
    }
  }
</script>
<style lang="stylus">
  .destination
    height:40px;
    line-height:40px;
    .label
      width: 80px;
</style>
