export default {
    // namespaced: true,
    state: {
        categoryList: []
    },
    getters: {
        categoryList: (state) => state.categoryList
    },
    mutations: {
        SET_CATEGORY_LIST(state, categoryList) {
            state.categoryList = categoryList;
        },
        ADD_CATEGORY_ITEM(state, item){
            state.categoryList.push(item);
        }
    },
    actions: {
        fetchCategoryData ({commit}){
            setTimeout(() => {
                const categoryList = ['Food', 'Transport', 'Education', 'Sport']
                commit('SET_CATEGORY_LIST', categoryList)
            },1500)
        }
    }
}