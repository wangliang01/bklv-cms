<template>
  <el-row type="flex"
          justify="center"
          align="middle"
          class="login_wrapper">
    <el-col :span="13" class="login_container">
      <h1 class="login_title">
        <img src="../../assets/img/logo.png" alt="logo" class="logo_img">
        贝壳旅行科技 | 后台管理系统
      </h1>

      <div class="login_form_container">
        <el-form :model="loginForm"
                 :rules="loginRules"
                 ref="loginForm"
                 label-width="70px"
                 label-position="left"
                 class="login_form">
          <el-form-item label="用户名" prop="name">
            <el-input v-model.trim="loginForm.name"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password" required @keyup.enter.native="loginIn">
            <el-input v-model="loginForm.password"
                      type="password"
                      auto-complete="off"></el-input>
          </el-form-item>
        </el-form>

        <el-button type="danger" @click="loginIn" class="login_btn" @keyup.enter.native="loginIn">登 录</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import com from '../../common/common';
  import api from '../../common/network';

  export default {
    data() {
      return {
        loginForm: {
          name: '',          // 用户名
          password: ''       // 密码
        },
        loginRules: {        // 验证规则
          name: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      // 登录
      loginIn() {
        var self = this;
        /*xiao:123456*/
        /*zhou:123456*/
        let data = {
          'user_name': self.loginForm.name,    // 用户名
          'user_pwd': self.loginForm.password  // 密码
        };
        self.$refs.loginForm.validate((valid) => {
          if (valid) {
            self.$router.push({
              path: '/home'
            })
//            api.network_userLogin(data, (res) => {
//              let info = res.data;
//              if (info.code === 0 && info) {
//                let dd = info.data;
//                // 设置cookie存放token,user_name,user_ID,user_role
//                com.setCookie('token', dd.token);
//                com.setCookie('user_name', dd.user_name);  // 用户名
//                com.setCookie('user_ID', dd.uid);          // 用户id
//                com.setCookie('user_role', dd.role);       // 用户类型
//                if (dd.role === 1) {
//                  self.$router.push({
//                    path: '/home'
//                  })
//                }
//              }
//            })
          } else {
            console.log('error submit!');
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  .login_wrapper
    height 90%
    min-height 600px
    text-align center

  .logo_img
    display inline-block
    vertical-align middle
    margin-right 2rem
    width: 2.7em

  .login_container
    max-width 600px
    box-sizing border-box
    .login_title
      font-weight normal
      font-size 28px
    .login_form_container
      box-sizing border-box
      padding 30px 60px 60px
      .login_form
        padding 60px 40px 40px
        border 1px solid #b7b7b7
      .login_btn
        margin-top 40px
        padding 10px 70px
        font-size 16px
</style>
