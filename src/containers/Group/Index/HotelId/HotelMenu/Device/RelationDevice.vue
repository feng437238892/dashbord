<template>
  <div>
    <div class="module-wrapper">
      <div class="content-item">
        <span>游离设备</span>
        <el-select class="el-right" v-model="device" placeholder="请选择设备">
          <el-option
            v-for="(obj, index) of list"
            :key="obj.id"
            :label="obj.name"
            :value="obj.id">
          </el-option>
        </el-select>
      </div>
      <div class="content-btn">
        <el-button :disabled="!device" @click.native="submit">添加</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters, mapState, mapMutations} from 'vuex';
  export default {
    name: 'RelationDevice',
    data() {
      return {
        device: '',
        list: []
      }
    },
    methods: {
      ...mapActions([
        'vagrantList',
        'modifyDevice',
        'goto'
      ]),
      getList() {
        this.vagrantList({
          onsuccess: (body, headers) => {
            this.list = body.data || [];
          }
        })
      },
      submit() {
        let tempDevice = this.list.filter(item => item.id == this.device);
        console.log(tempDevice)
        this.modifyDevice({
          hotel_id: this.$route.params.hotelid,
          device_id: tempDevice[0].id,
          device_type: tempDevice[0].type,
          device_name: tempDevice[0].name,
          partner_id: tempDevice[0].partner_id,
          enabled: tempDevice[0].enabled,
          onsuccess: body => this.goto(-1)
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
    padding: 26px 45px;
    .content-item {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #4A4A4A;
      margin-bottom: 14px;
      span {
        min-width: 68px;
        text-align: end;
      }
      .el-switch {
        margin-left: 24px;
      }
      .el-right {
        margin-left: 20px;
        padding: 4px;
        width: 80%;
      }
    }
    .content-btn {
      width: 100%;
      margin-top: 53px;
      text-align: center;
      .el-button {
        width: 173px;
        line-height: 18px;
        background-color: #39C240;
        border-color: #39C240;
        border-radius: 0;
        color: #ffffff;
      }
    }
  }
</style>
