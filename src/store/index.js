import Vue from "vue";
import  Vuex from 'vuex'
import category from './caregory'

Vue.use(Vuex)

const API_DATA = {
    page1: [
        {
            date: "28.03.2020",
            category: "Food",
            value: 1269,
        },
        {
            date: "24.03.2020",
            category: "Transport",
            value: 3160,
        },
        {
            date: "24.03.2020",
            category: "Education",
            value: 3532,
        },
    ],
    page2: [
        {
            date: "24.03.2020",
            category: "Transport",
            value: 360,
        },
        {
            date: "24.03.2020",
            category: "Transport",
            value: 360,
        },
        {
            date: "24.03.2020",
            category: "Sport",
            value: 532,
        },
    ],
    page3: [
        {
            date: "28.03.2020",
            category: "Food",
            value: 1693,
        },
        {
            date: "24.03.2020",
            category: "Transport",
            value: 3260,
        },
        {
            date: "24.03.2020",
            category: "Food",
            value: 532,
        },
    ],
}

export default new Vuex.Store({
    state: {
		List: [],
        pages: [],
        activePage: 1,
    },
    getters: { 
        List: (state) => state.List,
        totalCost: ({List}) => List.reduce((prev, {value}) => {
            return prev + +value
        },0),
        pages: (state) => state.pages,
        activePage: (state) => state.activePage,
    },
    mutations:{
        SET_PAYMENTS_LIST(state, List) {
            state.List = List;
        },
        ADD_PAYMENT(state, payment) {
            state.List.push(payment);
        },
        AMOUNT_PAGE(state, page){
            state.pages = page;
        },
        ACTIVE_PAGE(state, activePage){
            state.activePage = activePage;
        }
    },
    actions: {
        fetchData ({commit}){
            setTimeout(() =>{
                const initialList = API_DATA.page1;
                const pagesList = Array (Object.keys(API_DATA).length);
                commit('AMOUNT_PAGE', pagesList);
                commit('SET_PAYMENTS_LIST', initialList);
            },1000)
        },
        fetchPageDate({commit}, page) {
            const initialPage = API_DATA[`page${page}`];
            commit('ACTIVE_PAGE', page)
            commit('SET_PAYMENTS_LIST', initialPage)
        },
    },
    modules: {
        category
    }
})