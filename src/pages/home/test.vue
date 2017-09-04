<template>
  <div class="test">

  </div>
</template>
<script>
  import api from '../../common/network'
  api.network_getGuideWordCount({
    source_type: 0, //原创
    audit_status: 1,
    offset: 0,
    limit: 10
  }, res => {
    console.log('获取导游词列表：')
    console.log(res.data)
  })
  export default {}
</script>
<style>

</style>
