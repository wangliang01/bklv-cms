<template>
  <el-row type="flex"
          justify="space-between"
          align="middle"
          class="header_wrapper">
    <el-col :span="12" class="header_left">
      <img class="logo" src="../../assets/img/logo.png" alt="" @click="returnToHome">
      <span>贝壳旅行科技 | 后台管理系统</span>
    </el-col>

    <el-col :span="12" class="header_right">
      <span class="accountID"> {{accountID}} </span>
      <el-button type="text" @click="logOut()">退出登录</el-button>
    </el-col>
  </el-row>
</template>

<script type="text/javascript">
  import com from '../../common/common';
  import api from '../../common/network';

  export default {
    data() {
      return {
        accountID: com.getCookie('user_name')    // 账号ID
      }
    },
    created() {
    },
    methods: {
      // 回到首页
      returnToHome() {

      },
      // 退出登录
      logOut() {
        var self = this;
        self.$confirm('确认退出登录吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 清除cookie
          com.clearCookie('token');
          com.clearCookie('user_name');
          com.clearCookie('user_ID');
          com.clearCookie('user_role');
          self.$router.push({name: 'login'});
        }).catch(() => {

        });
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  .icon_img
    float left
    width 18px
    height 18px
</style>
