<template>
  <div class="sidebar_menu">
    <el-row class="tac">
      <el-col :span="4" class="left">
        <el-menu :default-active="router" class="" @open="handleOpen" @close="handleClose">
          <el-submenu index="activityNewsPush">
            <template slot="title"><i class="el-icon-my-earth"></i>出行圈管理</template>
              <router-link to="/activityNewsPush">
                <el-menu-item index="activityNewsPush"><span class="el-icon-my-push"></span>
                    活动信息推送
                </el-menu-item>
              </router-link>
              <router-link to="/circleInfoSupervise" active-class="is-active">
                <el-menu-item index="circleInfoSupervise"><span class="el-icon-my-supervise"></span>
                    圈子信息监督
                </el-menu-item>
              </router-link>
            <!--<el-submenu index="1-4">-->
              <!--<template slot="title">选项4</template>-->
              <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
            <!--</el-submenu>-->
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-my-coin-yen"></i>资金管理</template>
            <el-menu-item index="2-1"><span class="el-icon-my-withdraw"></span>提现</el-menu-item>
            <el-menu-item index="2-2"><span class="el-icon-my-visa"></span>签证资金</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-my-stats-bars"></i>数据统计</template>
            <el-menu-item index="3-1"><span class="el-icon-my-dau"></span>DAU MAU统计</el-menu-item>
            <el-menu-item index="3-2"><span class="el-icon-my-NewBI-PV_UV"></span>各个功能PV/UV统计</el-menu-item>
            <el-menu-item index="3-3"><span class="el-icon-my-journal-account"></span>流水统计</el-menu-item>
            <el-menu-item index="3-4"><span class="el-icon-my-terminal"></span>各终端统计</el-menu-item>
            <el-menu-item index="3-5"><span class="el-icon-my-reward"></span>打赏相关统计</el-menu-item>
            <el-menu-item index="3-6"><span class="el-icon-my-picture-album"></span>圈子图片.相册.影集统计</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-my-user"></i>用户管理</template>
            <el-menu-item index="4-1"><span class="el-icon-my-authority-management"></span>权限管理</el-menu-item>
            <el-menu-item index="4-2"><span class="el-icon-my-check"></span>导游审核</el-menu-item>
            <el-menu-item index="4-3"><span class="el-icon-my-records-query"></span>用户操作记录查询</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-my-list"></i>内容管理</template>
            <el-menu-item index="5-1"><i class="el-icon-my-travel-notes"></i>游记管理</el-menu-item>
            <el-menu-item index="5-2"><i class="el-icon-my-scenic"></i>景点管理</el-menu-item>
            <el-menu-item index="5-3"><span class="el-icon-my-hotel"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>酒店管理</el-menu-item>
            <el-menu-item index="5-4"><span class="el-icon-my-strategy"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span>攻略管理</el-menu-item>
            <!--<el-menu-item index="5-5"><i class="el-icon-my-guide-word"></i>导游词管理</el-menu-item>-->
            <el-submenu index="guideWordIndex">
              <template slot="title"><i class="el-icon-my-guide-word"></i>导游词管理</template>
              <router-link to="/guideWordIndex" active-class="is-active">
                <el-menu-item index="guideWordIndex"><span class="el-icon-my-authority-management"></span>作品管理</el-menu-item>
              </router-link>
              <el-menu-item index="5-7"><i class="el-icon-my-comment"></i>评论管理</el-menu-item>
              <el-menu-item index="6-3"><span class="el-icon-my-records-query"></span>banner管理</el-menu-item>
            </el-submenu>
            <el-menu-item index="5-6"><i class="el-icon-my-activity"></i>常规活动管理</el-menu-item>
            <el-menu-item index="5-8"><i class="el-icon-my-album"></i>相册·影集管理</el-menu-item>
            <el-menu-item index="5-9"><i class="el-icon-my-report"></i>举报管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" class="right">
        <router-view></router-view>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        router: ''
      }
    },
    created () {
      this.router = this.$route.name
    },
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
      min-height: 100%;
      background-color: #fff;
      box-shadow: 0 -1px 3px 0 #ddd;
      .el-menu
        background-color: #fff;
    .right
      padding-left: 20px;
</style>
