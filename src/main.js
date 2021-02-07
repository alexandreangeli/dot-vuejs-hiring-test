import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;

// vee-validate
import {
  ValidationProvider,
  ValidationObserver,
  setInteractionMode,
  extend,
  localize,
} from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/pt_BR.json";
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
setInteractionMode("eager");
extend("required", required);
extend("email", email);
extend("min", min);
localize("en", en);

// vue-the-mask
import VueTheMask from "vue-the-mask";
Vue.use(VueTheMask);

new Vue({
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
