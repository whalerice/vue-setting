import Vue from 'vue';
import Antd from 'ant-design-vue';
import PerfectScrollbar from 'vue2-perfect-scrollbar';

import App from './App.vue';
import router from './router';
import store from './store';

import 'ant-design-vue/dist/antd.min.css';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
import '@scss/styles.scss';

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(PerfectScrollbar);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
