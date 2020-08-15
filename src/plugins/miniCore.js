export default {
  install(Vue) {
      const {eventBus} = require('./eventBus');
      const {sdk} = require('./sdk');
      Vue.prototype.$bus = eventBus;
      Vue.prototype.$sdk = sdk;
  }
};
