<template>
  <div>
    <div class="module-wrapper">
      <div class="content-configsummary" v-show="!isEmptyConfigData()">
        <h1>配置汇总</h1>
        <div class="configsummary_item">
          <h3 style="padding-top: 15px">PMS对接配置</h3>
          <p>PMS品牌id: {{pmsData.pms_id}}</p>
          <p>PMS品牌: {{pmsData.pms_name}}</p>
          <p>酒店PMS编码: {{pmsData.hotel_pmscode}}</p>
          <p>酒店服务地址: {{pmsData.hotel_service_url}}</p>
          <div v-if="pmsData.pms_name == '别样红'">
            <p>账单服务地址: {{pmsData.bill_service_url}}</p>
            <p>CRM服务地址: {{pmsData.crm_service_url}}</p>
            <p>订单服务地址: {{pmsData.order_service_url}}</p>
            <p>安全服务地址: {{pmsData.sec_service_url}}</p>
            <p>用户名: {{pmsData.user_name}}</p>
            <p>密码: {{pmsData.user_pass}}</p>
          </div>
          <div v-if="pmsData.pms_name == '住哲'">
            <p>调用ID: {{pmsData.cid}}</p>
            <p>密钥: {{pmsData.key}}</p>
            <p>数据加密密钥: {{pmsData.datakey}}</p>
            <p>用户名: {{pmsData.admin_name}}</p>
            <p>密码: {{pmsData.admin_password}}</p>
            <p>品牌ID:{{pmsData.brand_id}} </p>
          </div>
        </div>
        <div class="configsummary_item">
          <h3>旅业系统配置</h3>
          <p>旅业系统类型: {{lvyeData.lvye_report_type | filterLvyeReportType}}</p>
          <p>酒店公安ID: {{lvyeData.hotel_ga_id}}</p>
          <p>公安类型: {{lvyeData.police_type}}</p>
          <p>公安参数: {{lvyeData.police_param}}</p>
        </div>
        <div class="configsummary_item">
          <h3>门锁配置</h3>
          <p>暂未设计</p>
        </div>
        <div class="configsummary_item">
          <h3>人脸识别配置</h3>

          <p>自动通过值: {{configData.facein_pass_value}}</p>
          <p>自动拒绝值: {{configData.facein_reject_value}}</p>
        </div>
        <div class="configsummary_item">
          <h3>微信支付配置</h3>
          <p>酒店微信账务收款代码: {{configData.pay_code}}</p>
          <p>酒店微信账务退款代码: {{configData.refund_code}}</p>
        </div>
        <div class="configsummary_item">
          <h3>生态酒店配置</h3>
          <p>微信酒店ID: {{configData.wx_hotel_id}}</p>
        </div>
        <div class="configsummary_item">
          <h3>小程序配置</h3>
          <p>服务商模式: {{configData.provider}}</p>
          <p>小程序app_id: {{configData.app_id}}</p>
          <p>小程序app_id: {{configData.mch_id}}</p>
          <p>小程序app_id: {{configData.provider_app_id}}</p>
          <p>小程序app_id: {{configData.provider_mch_id}}</p>
        </div>
        <div class="configsummary_item">
          <h3>电子签名配置</h3>
          <p>是否开通电子签名: {{configData.enabled_sign}}</p>
        </div>
        <div class="configsummary_item">
          <h3>电话取消订单配置</h3>
          <!--<p>暂未设计</p>-->
          <p>是否支持电话取消订单：{{configData.enabled_cancel}}</p>
          <p>允许最晚取消时间：{{enabledCancelTime(configData.enabled_cancel_time)}}</p>
        </div>
        <div class="configsummary_item">
          <h3>发票配置</h3>
          <p>是否支持申请发票: {{configData.enabled_invoice}}</p>
          <p>发票类型: </p>
          <p v-for="(obj, index) of configData.invoice_name" :key="index">{{obj}}</p>
        </div>
        <div class="configsummary_item">
          <h3>预登记短信配置</h3>
          <p>预登记是否发送短信: {{configData.enabled_pre_checkin_sms}}</p>
        </div>
        <div class="configsummary_item">
          <h3>到店支付配置</h3>
          <p>是否开通到店支付: {{configData.enabled_delayed_payment}}</p>
        </div>
        <div class="configsummary_item">
          <h3>自动退房配置</h3>
          <p>是否开通自动退房服务: {{configData.enable_auto_checkout}}</p>
        </div>
        <div class="configsummary_item">
          <h3>自动退款配置</h3>
          <p>是否开通自动退款服务: {{configData.enabled_auto_refund}}</p>
        </div>
        <div class="configsummary_item">
          <h3>无证入住配置</h3>
          <p>是否开通无证入住业务: {{configData.enabled_pre_checkin}}</p>
        </div>
        <div class="configsummary_item">
          <h3>门卡配置</h3>
          <p>是否支持吞吐门卡: {{configData.support_room_card}}</p>
        </div>
        <div class="configsummary_item">
          <h3>押金配置</h3>
          <p>押金类型: {{configData.cash_pledge_config | filterCashPledgeType}}</p>
          <p>固定押金金额: {{configData.cash_pledge_config ? configData.cash_pledge_config.fixed_cash_pledge : ''}}</p>
          <p>放大系数: {{configData.cash_pledge_config ? configData.cash_pledge_config.multiple_of_cash_pledge : ''}}</p>
          <p>是否向上取整: {{configData.cash_pledge_config ? configData.cash_pledge_config.round_up_to_integer : ''}}</p>
          <p>是否有日杂费: {{configData.cash_pledge_config ? configData.cash_pledge_config.has_day_of_incidentals : ''}}</p>
          <p>日杂费金额: {{configData.cash_pledge_config ? configData.cash_pledge_config.day_of_incidentals : ''}}</p>
        </div>
        <div class="configsummary_item">
          <h3>早餐券配置</h3>
          <p>早餐券规则: {{configData.breakfast_stem_from | filterBreakfastStemFrom}}</p>
        </div>
        <div class="configsummary_item">
          <h3>最大房间数量配置</h3>
          <p>选房列表最大展示房间数量: {{configData.max_allow_roomcount}}</p>
        </div>
        <div class="configsummary_item">
          <h3>PMS同步频率配置</h3>
          <p>PMS同步频率: {{configData.sync_space_time}}分钟</p>
        </div>
        <div class="configsummary_item">
          <h3>自动确认预付款配置</h3>
          <p>预付款关键字: {{configData.prepay_keyword}}</p>
          <p>预付款冲突字: {{configData.prepay_exclusion_keyword}}</p>
          <p>后付关键字: {{configData.postpay_keyword}}</p>
          <p>后付冲突字: {{configData.postpay_exclusion_keyword}}</p>
          <p>押金关键字: {{configData.free_deposit_keyword}}</p>
          <p>押金冲突字: {{configData.need_deposit_keyword}}</p>
        </div>
        <div class="configsummary_item">
          <h3>脏房配置</h3>
          <p>是否支持分脏房: {{configData.is_support_vd | filterIsSupportVd}}</p>
        </div>
        <div class="configsummary_item">
          <h3>房间标签配置</h3>
          <p>房间标签: </p>
          <p v-for="(obj, index) of configData.room_tags" :key="index">{{obj}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters, mapState, mapMutations} from 'vuex'
  import tool from '@/assets/tools/tool.js'
  export default {
    name: 'ConfigSummary',
    data() {
      return {}
    },
    computed: {
      ...mapState({
        configData: state => state.enterprise.configData,
        pmsData: state => state.enterprise.pmsData,
        lvyeData: state => state.enterprise.lvyeData,
        wechatAppData: state => state.enterprise.wechatAppData,
      }),
    },
    filters: {
      filterLvyeReportType(v) {
        if (v == 'LOCAL')
          return '本地';
        if (v == 'CLOUD')
          return '云端';
        return v;
      },
      filterCashPledgeType(val) {
        if (val === undefined)
          return '';

        let v = val.cash_pledge_type;
        if (v == 'fixed_cash_pledge')
          return '无押金';
        if (v == 'fixed_cash_pledge')
          return '固定押金';
        if (v == 'multiple_of_cash_pledge')
          return '放大系数';
        if (v == 'first_day_of_room_price')
          return '首晚房费';
        return v;
      },
      filterBreakfastStemFrom(v) {
        if (v == 'NONE')
          return '无早';
        if (v == 'PMS')
          return '同步PMS早餐券';
        if (v == 'MANKE')
          return '漫客平台定义';
        return v;
      },
      filterIsSupportVd(v) {
        if (v == '1')
          return '支持';
        else if (v == '0')
          return '不支持'
        return v;
      }
    },
    methods: {
      ...mapActions([
        'getConfig',
        'getPMS',
        'getLvye',
        'getWechatApp',
        'showtoast'
      ]),
      enabledCancelTime(time) {
        let tempTime = new Date(+time);
        return tempTime.getHours() + ':' + tempTime.getMinutes()
      },
      isEmptyConfigData() {
        return tool.isBlank(this.configData) || tool.isEmptyObject(this.configData)
      },
      getConfigs() {
        this.getConfig({
          hotel_id: this.$route.params.hotelid
        })
      },
      getPms() {
        this.getPMS({
          hotel_id: this.$route.params.hotelid
        })
      },
      getLvyes() {
        this.getLvye({
          hotel_id: this.$route.params.hotelid
        })
      },
      getWechatApps() {
        this.getWechatApp({
          hotel_id: this.$route.params.hotelid
        })
      }
    },
    mounted() {
      if (tool.isEmptyObject(this.configData)) {
        this.getConfigs();
      }
      if (tool.isEmptyObject(this.pmsData)) {
        this.getPms();
      }
      if (tool.isEmptyObject(this.lvyeData)) {
        this.getLvyes();
      }
      // if (tool.isEmptyObject(this.wechatAppData)) {
      //   this.getWechatApps();
      // }
    }
  }
</script>

<style scoped lang="less">
  .content-configsummary {
    padding: 23px 45px;
    h1 {
      font-size: 18px;
      font-weight: 500;
      color: #4A4A4A;
    }
    .configsummary_item {
      /*padding: 0px 24px 17px;*/
      color: #9B9B9B;
      h3 {
        font-size: 16px;
        font-weight: normal;
        border-bottom: 0;
        color: #9B9B9B;
        line-height: 40px;
        padding: 0 0 0 23px;
      }
      p {
        font-size: 14px;
        padding-left: 51px;
      }
    }
  }

</style>
