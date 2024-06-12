import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css'
import HeaderComponent from '@/components/Header.vue';
import SectionHomeComponent from '@/components/SectionHome.vue'
import ProductsComponent from '@/components/Products.vue';
Vue.component('HeaderComponent', HeaderComponent);
Vue.component('SectionHomeComponent', SectionHomeComponent);
Vue.config.productionTip = false;

new Vue({
router,
render: h => h(App),
}).$mount('#app');