import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home.vue';
import Projects from './components/projects.vue';
import About from './components/about.vue';
import Contact from './components/contact.vue';
import contactMobile from './components/contactMobile.vue';
import Page from './components/test-page.vue';




Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [ 
        {
            path:'/',
            name: 'home',
            component: Home,
        },
        {
            path:'/projects',
            name: 'projects',
            component: Projects,
        },
        {
            path:'/about',
            name: 'about',
            component: About,
        },
        {
            path:'/contact',
            name: 'contact',
            component: Contact,
        },
        {
            path:'/contactMobile',
            name: 'contactMobile',
            component: contactMobile,
        },
        {
            path:'/page',
            name: 'test-page',
            component: Page,
        },
       
    ]
});