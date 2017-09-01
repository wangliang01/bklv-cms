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
      <el-select v-if="$route.fullPath.split('/')[1] === 'mp_detail'"
                 v-model="wechat.value"
                 placeholder="请选择公众号"
                 size="small"
                 class="wechat_list"
                 @change="changeWechat">
        <el-option
          v-for="item in options"
          :key="item.id"
          :label="item.name"
          :value="item.id">
          <img v-if="item.avatar" :src="item.avatar" class="icon_img">
          <span style="float: right;">{{item.name}}</span>
        </el-option>
      </el-select>

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
        accountID: com.getCookie('user_name'),    // 账号ID
        options: [],
        wechat: {
          value: Number(this.$route.params.mp_id)   // 公众号id
        }
      }
    },
    created() {
      this.getUserInfo();
    },
    methods: {
      // 回到首页
      returnToHome() {
        if (Number(com.getCookie('user_role')) === 1) {
          this.$router.push({'name': '账号管理'});
        } else {
          this.$router.push({'name': '公众号'});
        }
      },

      // 获取可管理公众号列表
      getUserInfo() {
        var self = this;
        api.network_getUserInfo(com.getCookie('user_ID'), (res) => {
          let info = res.data;
          if (info.code === 0 && info) {
            self.options = info.data.officials;
          }
        });
      },

      // 切换公众号
      changeWechat(value) {
        var self = this;
        var name = this.$route.name;
        self.wechat.value = value;
        self.$router.push({'name': name, params: {mp_id: value}});
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
