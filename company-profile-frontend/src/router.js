import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Products from './components/Products.vue';
import News from './components/News.vue';
import Information from './components/Information.vue';
import Contact from './components/Contact.vue';
Vue.use(Router);
export default new Router({
 mode: 'history',
 routes: [
 {
 path: '/',
 name: 'Home',
 component: Home
 },
 {
 path: '/about',
 name: 'About',
 component: About
 },
 {
 path: '/services',
 name: 'Services',
 component: Services
 }
 ,
 {
 path: '/products',
 name: 'Products',
 component: Products
 }
 ,
 {
 path: '/news',
 name: 'News',
 component: News
 }
 ,
 {
 path: '/information',
 name: 'Information',
 component: Information
 }
 ,
 {
 path: '/contact',
 name: 'Contact',
 component: Contact
 }
 ]
});