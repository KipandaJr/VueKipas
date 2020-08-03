import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes=[
    {
        path:'/',
        component:() => import('./components/ShowOpt.vue')
    },
    {
        path:'/listaProduto',
        component: () => import('./components/TableProduct.vue')
    }
];

const router =new Router({
    routes:routes
});

export default router;