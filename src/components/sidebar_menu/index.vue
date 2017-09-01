<template>
  <div class="sidebar_menu">
    <el-row class="tac">
      <el-col :span="4" class="left">
        <el-menu default-active="1-1" class="" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>出行圈管理</template>
            <el-menu-item index="1-1">活动信息推送</el-menu-item>
            <el-menu-item index="1-2">圈子信息监督</el-menu-item>
            <!--<el-submenu index="1-4">-->
              <!--<template slot="title">选项4</template>-->
              <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
            <!--</el-submenu>-->
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="icon-coin-yen"></i>资金管理</template>
            <el-menu-item index="2-1"><i class="el-icon-menu"></i>提现</el-menu-item>
            <el-menu-item index="2-2"><i class="el-icon-setting"></i>签证资金</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-menu"></i>数据统计</template>
            <el-menu-item index="3-1"><i class="el-icon-menu"></i>DAU MAU统计</el-menu-item>
            <el-menu-item index="3-2"><i class="el-icon-setting"></i>各个功能PV/UV统计</el-menu-item>
            <el-menu-item index="3-3"><i class="el-icon-menu"></i>流水统计</el-menu-item>
            <el-menu-item index="3-4"><i class="el-icon-setting"></i>各终端统计</el-menu-item>
            <el-menu-item index="3-5"><i class="el-icon-setting"></i>打赏相关统计</el-menu-item>
            <el-menu-item index="3-6"><i class="el-icon-setting"></i>圈子图片.相册.影集统计</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-menu"></i>用户管理</template>
            <el-menu-item index="4-1"><i class="el-icon-menu"></i>权限管理</el-menu-item>
            <el-menu-item index="4-2"><i class="el-icon-setting"></i>导游审核</el-menu-item>
            <el-menu-item index="4-3"><i class="el-icon-setting"></i>用户操作记录查询</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-menu"></i>内容管理</template>
            <el-menu-item index="5-1"><i class="el-icon-menu"></i>游记管理</el-menu-item>
            <el-menu-item index="5-2"><i class="el-icon-setting"></i>景点管理</el-menu-item>
            <el-menu-item index="5-3"><i class="el-icon-setting"></i>酒店管理</el-menu-item>
            <el-menu-item index="5-4"><i class="el-icon-menu"></i>攻略管理</el-menu-item>
            <el-menu-item index="5-5"><i class="el-icon-setting"></i>导游词管理</el-menu-item>
            <el-menu-item index="5-6"><i class="el-icon-setting"></i>常规活动管理</el-menu-item>
            <el-menu-item index="5-7"><i class="el-icon-menu"></i>评论管理</el-menu-item>
            <el-menu-item index="5-8"><i class="el-icon-setting"></i>相册.影集管理</el-menu-item>
            <el-menu-item index="5-9"><i class="el-icon-setting"></i>举报管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  export default {
    methods: {
      handleOpen () {},
      handleClose() {}
    }
  }
</script>
<style lang="stylus">
  @import "../../assets/css/icon.css"
  .sidebar_menu
    height: calc(100% - 65px);
  .tac
    height:100%;
    .left
      height: 100%;
      background-color: #eef1f6;
</style>
