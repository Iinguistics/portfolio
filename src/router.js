import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home.vue';
import Projects from './components/projects.vue';
import About from './components/about.vue';
import Skills from './components/skills.vue';
import Contact from './components/contact.vue';

import test from './components/test.vue';
//import contactMobile from './components/contactMobile.vue';
//import preview from './components/preview.vue';
//import aboutMobile from './components/aboutMobile.vue';
//import previewMobile from './components/previewMobile.vue';
//import projectsMobile from './components/projectsMobile.vue';




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
            path:'/skills',
            name: 'skills',
            component: Skills,
        },
        {
            path:'/contact',
            name: 'contact',
            component: Contact,
        },



        {
            path:'/test',
            name: 'test',
            component: test,
        },



        /*
        {
            path:'/contactMobile',
            name: 'contactMobile',
            component: contactMobile,
        },

        
       
        {
            path:'/preview',
            name: 'preview',
            component: preview,
        },
        {
            path:'/aboutMobile',
            name: 'aboutMobile',
            component: aboutMobile,
        },

        {
            path:'/previewMobile',
            name: 'previewMobile',
            component: previewMobile,
        },
        {
            path:'/projectsMobile',
            name: 'projectsMobile',
            component: projectsMobile,
        },
       */
    ]
});
