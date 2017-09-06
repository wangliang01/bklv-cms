<template>
  <div class="select-destination">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-select v-model="value" placeholder="国家">
          <el-option
            v-for="item in countries"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <el-select v-model="value" placeholder="省份">
          <el-option
            v-for="item in provences"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <el-select v-model="value" placeholder="城市">
          <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        countries: [{
          value: 'inside',
          label: '中国'
        }, {
          value: 'outside',
          label: '国外'
        }],
        provences: [{
          value: 'inside',
          label: '中国'
        }, {
          value: 'outside',
          label: '国外'
        }],
        cities: [{
          value: 'inside',
          label: '中国'
        }, {
          value: 'outside',
          label: '国外'
        }]
      }
    }
  }
</script>
<style lang="stylus">
  .select-destination
    .el-select
      .el-input
        width: 100px;

</style>
