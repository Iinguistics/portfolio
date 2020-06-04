import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home.vue';
import Projects from './components/projects.vue';




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
        }
       
    ]
});