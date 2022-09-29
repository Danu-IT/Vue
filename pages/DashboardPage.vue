<template>

    <v-container>
        <v-row>
            <div class="text-h5 text-sm-h3">My personal costs {{totalCost}}$</div>
        </v-row>
        <v-row>
            <v-col>
                <v-dialog v-model="show">
                    <template v-slot:activator="{on}">
                        <v-btn color="primary" v-on="on" @click="addForm">ADD NEW COST</v-btn>
                        <v-icon>ndi-plus</v-icon>
                    </template>
                    <v-card>
                        <AddPaymentForm :show="show" v-if="show" @add-payment="addPayment" :categoryList="categoryList">
                        </AddPaymentForm>
                    </v-card>
                </v-dialog>
                <div>
                    <PaymentsDisplay :paymentsList="List"></PaymentsDisplay>
                    <PaginationComponents class="pagination" :List="pages"></PaginationComponents>
                </div>
            </v-col>
            <v-col>
                <div>
                    <Doughnut :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
                        :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles"
                        :width="width" :height="height" />
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import AddPaymentForm from "@/components/AddPaymentForm.vue";
import PaginationComponents from "@/components/PaginationComponents.vue"
import { mapActions, mapMutations, mapGetters } from "vuex";
import { Doughnut } from 'vue-chartjs/legacy'

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
    name: 'DashboardPage',
    props: {
        chartId: {
            type: String,
            default: 'doughnut-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 300
        },
        height: {
            type: Number,
            default: 300
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => { }
        },
        plugins: {
            type: Array,
            default: () => []
        },
    },
    components: {
        PaymentsDisplay,
        AddPaymentForm,
        PaginationComponents,
        Doughnut
    },
    data: () => ({
        show: false,
        history: ['Food', 'Transport', 'Entertainment'],
        modalSettings: null,
        chartData: {
            labels: [],
            datasets: [
                {
                    backgroundColor: [],
                    data: [1, 2, 3]
                }
            ]
        },
        chartOptions: {
            responsive: true,
            maintainAspectRatio: false
        }
    }),
    computed: {
        ...mapGetters(['List', 'categoryList', 'totalCost', 'pages']),
    },
    methods: {
        ...mapActions(['fetchData', 'fetchCategoryData']),
        ...mapMutations(['ADD_PAYMENT', 'ACTIVE_CATEGORY']),
        addPayment(prop) {
            if (prop.value == undefined) prop.value = 150;
            this.ADD_PAYMENT(prop);
            this.show = false;
        },
        addForm() {
            return this.show = !this.show
        },
        addPaymentForm() {
            this.$modal.show({ title: 'Add new payment', content: 'addPaymentForm' })
        },
        addAuth() {
            this.$modal.show({ title: 'Authorezathion', content: 'auth' })
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
            this.$router.back()
            this.show = true
        },
        activeStore() {
            const existinCategories = this.List.reduce((prev, el) => {
                return [...prev, el.category];
            }, []);
            return existinCategories.filter((el, index) => {
                return existinCategories.indexOf(el) == index
            })
        },
        randomColor() {
            for (let i = 0; i < this.chartData.datasets[0].data.length; i++) {
                let r = Math.floor(Math.random() * (256));
                let g = Math.floor(Math.random() * (256));
                let b = Math.floor(Math.random() * (256));
                let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
                this.chartData.datasets[0].backgroundColor.push(color);
            }
        },
        precent() {
            const date = {};
            const dateArr = [];
            for(let i = 0; i < this.List.length; i++) {
                const itemCategory = this.List[i].category;
                const itemValue = this.List[i].value;
                itemCategory in date ? date[itemCategory] += +itemValue : date[itemCategory] = +itemValue;
            }
            for(let value in date){
                dateArr.push(date[value]);
            }
            return dateArr;           
        }
    },
    created() {
        this.fetchCategoryData();
        this.fetchData();
        this.randomColor();
    },
    updated() {
        this.chartData.labels = this.activeStore()
        this.chartData.datasets[0].data = this.precent()
    },
}
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

.link {
    color: green;
    margin-right: 10px;
    cursor: pointer;
}

.modalContainer {
    margin-top: 20px;
}
</style>
    