<template>
  <div>
    <aside>
      <a style="color: #4A4A4A;font-size: 16px;margin-top: 12px;font-weight: 600">企业设置</a>
      <router-link :to="'/group/' + groupId">基本信息</router-link>
      <router-link :to="'/group/' + groupId + '/brand'">品牌管理</router-link>
      <a style="color: #4A4A4A;font-size: 16px;font-weight: 600">门店管理</a>
      <router-link :to="'/group/' + groupId + '/hotel'">门店管理</router-link>
    </aside>
    <router-view class="fifth-router"/>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
    computed: {
      groupId(){
        return this.$route.params.id
      }
    }
  }
</script>
<style scoped lang="less">
  aside .title_text {
    font-size: 16px;
    /*color: #4A4A4A;*/
    color: red !important;
    &:hover {
      background: transparent;
    }
  }
</style>
