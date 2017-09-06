<template>
  <div class="status-bar clearfix">
    <el-row :gutter="20">
      <el-col :span="2"><div class="status-name fl">{{label}}：</div></el-col>
      <el-col :span="22">
        <div class="status-wrapper">
        <el-radio-group v-model="radio" class="fl">
          <el-radio v-for="(item, index) in radios" :label="item.label" :key="index">{{item.name}}</el-radio>
        </el-radio-group>
      </div></el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    props: {
      label: {
        type: String,
        default: '状态'
      },
      radios: {
        type: Array,
        default() {
          return [{
            label: 0,
            name: '全部'
          },{
            label: 1,
            name: '未审核'
          },{
            label: 2,
            name: '已上线'
          },{
            label: 3,
            name: '已下线'
          },{
            label: 4,
            name: '不通过'
          },{
            label: 5,
            name: '草稿'
          }]
        }
      }
    },
    data () {
      return {
        radio: 0
      }
    }
  }
</script>
<style>
  .status-bar{
    height:40px;
    line-height:40px;
    border-bottom: 1px solid #eee;
  }
  .status-name{
    padding-left:15px;
    width: 80px;
  }
  .status-wrapper{
    padding-top:10px;
  }
</style>
