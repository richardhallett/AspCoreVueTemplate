import Vue from 'vue'
import Router from 'vue-router';

import Home from './components/home.vue';
import Counter from './components/counter.vue';
import FetchData from './components/fetchdata.vue';

Vue.use(Router);

export default new Router( {
    routes: [
        {
            path: '/',
            component: Home
        },
        { path: '/counter', component: Counter },
        { path: '/fetchdata', component: FetchData }
    ]
})