import Vue, { VueConstructor } from "vue";
import App from "./App.vue";

new Vue({
    render: (h: <T>(...a: T[]) => any) => h<VueConstructor<Vue>>(App),
}).$mount("main");
