<template>
  <div class="new-create">
    <!--面包屑导航-->
    <div class="breadcrumb-wrapper">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/guideWordIndex' }">作品管理</el-breadcrumb-item>
        <el-breadcrumb-item>新建导游词</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row :gutter="20" class="upload-img-wrapper">
      <el-col :span="10">
        <div class="img-wrapper">
          <upload-img></upload-img>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="form-wrapper">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="目的地" prop="name">
              <el-input v-model="ruleForm.name" placeholder="省份-城市 如：广西-桂林"></el-input>
            </el-form-item>
            <el-form-item label="标题" prop="title">
              <el-input v-model="ruleForm.name" placeholder="必须包含景点 如：丽江古城讲解词"></el-input>
            </el-form-item>
            <div class="form-item source clearfix">
              <div class="radio-wrapper fl">
                <el-radio label="源自网络"></el-radio>
              </div>
              <div class="input-wrapper fl">
                <el-input v-model="ruleForm.name" placeholder="请输入来源网站名称" class=""></el-input>
              </div>
            </div>
            <div class="form-item source clearfix">
              <div class="radio-wrapper fl">
                <el-radio label="导游原创"></el-radio>
              </div>
              <div class="input-wrapper fl">
                <el-input v-model="ruleForm.name" placeholder="输入作者姓名" class=""></el-input>
              </div>
            </div>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import uploadImg from '../../../components/upload/index.vue'
  export default {
    components: {
      uploadImg
    },
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请添写目的地', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          title: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    }
  }
</script>
<style lang="stylus">
  .new-create
    padding-right: 15px;
    .breadcrumb-wrapper
      padding: 12px 0;
      border-bottom: 1px solid #eee;
    .upload-img-wrapper
      margin-top: 10px;
      .img-wrapper
        max-width: 360px;
      .radio-wrapper
        margin-top: 7px;
        width: 100px;
      .form-wrapper
        max-width: 500px;
        .form-item
          margin-bottom: 22px;
          &:last-child
            margin-bottom: 0;
        .input-wrapper
          max-width: 400px;
          width: calc(100% - 100px);
</style>
