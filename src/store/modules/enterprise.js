
const state = {
  // cityServiceData:[],
  configData: {},
  pmsData: {},
  lvyeData: {},
  wechatAppData: [],
  tempGroupName: '',
  tempHotelName: '',
  deviceList: []
}

// mutations
const mutations = {
  CONFIGDATA(state,payload) {
    state.configData = payload;
  },
  PMSDATA(state,payload) {
    state.pmsData = payload;
  },
  LVYEATA(state,payload) {
    state.lvyeData = payload;
  },
  WECHATAPPDATA(state,payload) {
    state.wechatAppData = payload;
  },
  SETTEMPGROUPNAME(state,payload) {
    state.tempGroupName = payload;
  },
  SETTEMPHOTELNAME(state,payload) {
    state.tempHotelName = payload;
  },
  SETDEVICELIST(state,payload) {
    state.deviceList = payload;
  },
  CITYSERVICEDATA(state,payload) {
    state.cityServiceData =payload;
  }
}

module.exports = {
  state,
  mutations
}
