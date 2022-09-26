import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/dashboardPage*',
            name: 'dashboardPage',
            component: () => import(/*webpackChunkName: "Dashboard"*/'../../pages/DashboardPage.vue'), //Laze load(ленивая загрузка)
        },
        {
            path: '/dashboardPage/add/payment',
            name: 'NewPayment',
            component: () => import(/*webpackChunkName: "DashboardPage"*/'../../pages/DashboardPage.vue'),
        },
        {
            path: '/notFound',
            name: 'notFound',
            component: () => import(/*webpackChunkName: "NotFound"*/'../../pages/NotFound.vue'),
        },
        {
            path: '*',
            component: () => import('../../pages/NotFound.vue'),
        }
    ],
})

const user = true;

router.beforeEach((to, from, next) => {
    if(!user && to.name !== 'notfound') next({name: 'notfound'})
    else next()
})

// const titles = {
//     dashboardPage: 'Dashboard',
//     notFound: 'Not Found'
// }

// router.afterEach(to => {
//     // document.titles = titles[to.name]
// })

export default router