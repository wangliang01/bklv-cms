<template>
  <div class="guide-word-index">
    <!--状态-->
    <status-bar></status-bar>
    <!--来源-->
    <status-bar label="来源" :radios="sources"></status-bar>
    <!--目的地-->
    <div class="destination clearfix">
      <el-row :gutter="20">
        <el-col :span="2"><div class="label fl">目的地：</div></el-col>
        <el-col :span="11">
          <div class="select-date-wrapper fl">
          <select-date></select-date>
          </div></el-col>
        <el-col :span="11">
          <div class="search-input-wrapper fr">
            <search-input></search-input>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="guide-word-content">
      <!--新建按钮-->
      <div class="create fr" @click="$router.push('/newCreate')">新建导游词</div>
      <!--表格-->
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="ID"
          align="center"
          width="60">
        </el-table-column>
        <el-table-column
          prop="title"
          label="讲解词"
          align="center"
          min-width="180">
        </el-table-column>
        <el-table-column
          prop="author"
          label="作者"
          align="center">
        </el-table-column>
        <el-table-column
          prop="corrector"
          label="修正"
          align="center">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          align="center">
        </el-table-column>
        <el-table-column
          prop="source"
          label="来源"
          align="center">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          min-width="240">
          <template scope="scope">
            <el-button
              @click.native.prevent=""
              type="text"
              size="small">
              上线
            </el-button>
            <el-button
              @click.native.prevent=""
              type="text"
              size="small">
              下线
            </el-button>
            <el-button
              @click.native.prevent=""
              type="text"
              size="small">
              编辑
            </el-button>
            <el-button
              @click.native.prevent=""
              type="text"
              size="small">
              排序
            </el-button>
            <el-button
              @click.native.prevent=""
              type="text"
              size="small">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-wrapper fr">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
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
        ],
        tableData: [
          {
            id: '1',
            title: '云南 | 金牌解说词',
            author: '卡卡',
            corrector: '小亮亮',
            status: '未审核',
            source: '导游原创'
          },
          {
            id: '2',
            title: '云南 | 金牌解说词',
            author: '卡卡',
            corrector: '小亮亮',
            status: '未审核',
            source: '导游原创'
          },
          {
            id: '3',
            title: '云南 | 金牌解说词',
            author: '卡卡',
            corrector: '小亮亮',
            status: '未审核',
            source: '导游原创'
          },{
            id: '4',
            title: '云南 | 金牌解说词',
            author: '卡卡',
            corrector: '小亮亮',
            status: '未审核',
            source: '导游原创'
          },{
            id: '5',
            title: '云南 | 金牌解说词',
            author: '卡卡',
            corrector: '小亮亮',
            status: '未审核',
            source: '导游原创'
          },
          {
            id: '6',
            title: '云南 | 金牌解说词',
            author: '卡卡',
            corrector: '小亮亮',
            status: '未审核',
            source: '导游原创'
          },
          {
            id: '7',
            title: '云南 | 金牌解说词',
            author: '卡卡',
            corrector: '小亮亮',
            status: '未审核',
            source: '导游原创'
          },
          {
            id: '8',
            title: '云南 | 金牌解说词',
            author: '卡卡',
            corrector: '小亮亮',
            status: '未审核',
            source: '导游原创'
          },{
            id: '9',
            title: '云南 | 金牌解说词',
            author: '卡卡',
            corrector: '小亮亮',
            status: '未审核',
            source: '导游原创'
          },{
            id: '10',
            title: '云南 | 金牌解说词',
            author: '卡卡',
            corrector: '小亮亮',
            status: '未审核',
            source: '导游原创'
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
  .guide-word-content
    margin-top: 20px;
    padding-right: 15px;
    .create
      margin-bottom: 20px;
      padding: 6px 10px;
      background-color: #20a0ff;
      color: #fff;
      border-radius: 6px;
      font-size:14px;
      cursor: pointer;
    .pagination-wrapper
      margin-top: 10px;

</style>
