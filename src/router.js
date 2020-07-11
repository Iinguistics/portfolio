import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home.vue';
import Projects from './components/projects.vue';
import About from './components/about.vue';
import Skills from './components/skills.vue';
import Contact from './components/contact.vue';
import contactMobile from './components/contactMobile.vue';
import Parent from './components/parent-comp.vue';
import Child from './components/child-comp.vue';
import preview from './components/preview.vue';
import aboutMobile from './components/aboutMobile.vue';
import previewMobile from './components/previewMobile.vue';




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
            path:'/contactMobile',
            name: 'contactMobile',
            component: contactMobile,
        },
        {
            path:'/parent',
            name: 'parent-comp',
            component: Parent,
        },
        {
            path:'/child',
            name: 'child-comp',
            component: Child,
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
       
    ]
});