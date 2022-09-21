import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardPage from '../../pages/DashboardPage.vue'
import NotFound from '../../pages/NotFound'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/dashboardPage*',
            name: 'dashboardPage',
            component: DashboardPage,
        },
        {
            path: '/dashboardPage/add/payment',
            name: 'NewPayment',
            component: DashboardPage,
        },
        {
            path: '/notFound',
            name: 'notFound',
            component: NotFound,
        },
        {
            path: '*',
            component: NotFound,
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