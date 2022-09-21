<template>
    <div>
        <div class="header">
            <div>My personal costs : <span style="color: red">{{totalCost}}</span></div>
        </div>
        <div class="main">
            <button class="" @click="addForm">ADD NEW COST</button>
            <div class="links">
                <div v-for="(item, index) of history" :key="item">
                    <a class="link" @click="() => formReturn(item, index + 1)">{{item}}</a>
                </div>
            </div>
            <AddPaymentForm :show="show" class="formList" v-if="show" @add-payment="addPayment" :categoryList="categoryList">
            </AddPaymentForm>
            <PaymentsDisplay class="dataList" :paymentsList="List"></PaymentsDisplay>
            <PaginationComponents class="pagination" :List="pages"></PaginationComponents>
        </div>
    </div>
</template>

<script>
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import AddPaymentForm from "@/components/AddPaymentForm.vue";
import PaginationComponents from "@/components/PaginationComponents.vue"
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
    name: 'DashboardPage',
    components: {
        PaymentsDisplay,
        AddPaymentForm,
        PaginationComponents,
    },
    data: () => ({
        show: false,
        history: ['Food', 'Transport', 'Entertainment'],
    }),
    computed: {
        ...mapGetters(['List', 'categoryList', 'totalCost', 'pages']),
    },
    methods: {
        ...mapActions(['fetchData', 'fetchCategoryData']),
        ...mapMutations(['ADD_PAYMENT']),
        addPayment(prop) {
            this.ADD_PAYMENT(prop);
            this.show = false;
        },
        addForm() {
            return this.show = !this.show
        },
        formReturn(item, index) {
            const value = 200 * index
            this.$router.push({
                path: `/dashboardPage/add/payment/${item}`,
                params: {
                    category: item,
                },
                query: {
                    value: value,
                }
            })
            this.show = true
        }
    },
    created() {
        this.fetchCategoryData()
        this.fetchData();
    },
};
</script>

<style lang="scss">
.header {
    margin: 30px 0 20px 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.dataList {
    margin-top: 40px;
}

.main button {
    width: 200px;
    padding: 10px;
    margin: 0 auto;
    background-color: green;
    border: 1px solid rgb(2, 51, 2);
    cursor: pointer;
    color: white;
    position: relative;
}

.main button::after {
    content: "+";
    position: absolute;
    right: 10px;
}

.links {
    display: flex;
    align-items: center;
    margin: 10px 0;
    justify-content: center;
}
.link{
    color: green;
    margin-right: 10px;
    cursor: pointer;
}
</style>
    