<template>
  <div>
    <div class="module-wrapper">
      <div class="content_brand">
        <div class="el-btn-box">
          <el-button type="success" @click.native="addBrand">+ 添加品牌</el-button>
        </div>
        <table-brand :list="list" @edit="edit"></table-brand>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters, mapState, mapMutations} from 'vuex'
  export default {
    name: 'Brand',
    data () {
      return {
        list: []
      }
    },
    methods: {
      ...mapActions([
        'getBrandList',
        'goto'
      ]),
      goback(){
        this.goto(-1);
      },
      addBrand() {
        this.goto({
          name: 'EditBrand'
        })
      },
      edit(obj) {
        this.goto({
          name: 'EditBrand',
          query: {
            brandid: obj.id
          }
        })
      },
      getList() {
        this.getBrandList({
          group_id: this.$route.params.id,
          onsuccess: body => this.list = body.data
        })
      }
    },
    mounted() {
      this.getList();
    }
  }
</script>

<style scoped lang="less">
  .module-wrapper {
    .content_brand {
      padding: 12px 20px 12px 18px;
      .el-btn-box {
        width: 173px;
        float: right;
        margin-bottom: 10px;
        font-size: 14px;
        text-align: center;
        .el-button {
          width: 100%;
          height: 100%;
          border-radius: 0;
          background-color: #39C240;
          line-height: 18px;
        }
      }
    }
  }
</style>
