import Vue from 'vue';
import App from "./components/app.vue"
import router from './router';

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
