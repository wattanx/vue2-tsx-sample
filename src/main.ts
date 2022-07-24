import Vue from "vue";
import vueCompositionApi from "@vue/composition-api";
import "./style.css";
import App from "./App";

Vue.use(vueCompositionApi);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
