<template>
	<div id="app">
		<header>
			<div class="header">My personal costs :{{totalCost}}</div>
		</header>
		<main>
			<button class="" @click="show = !show">ADD NEW COST</button>
			<AddPaymentForm 
			class="formList" 
			v-if="show" 
			@add-payment="addPayment"
			:categoryList ="categoryList"
			></AddPaymentForm>
			<PaymentsDisplay class="dataList" :paymentsList="List"></PaymentsDisplay>
			<PaginationComponents class="pagination" :List="pages"></PaginationComponents>
		</main>
	</div>
</template>

<script>
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import AddPaymentForm from "@/components/AddPaymentForm.vue";
import PaginationComponents from "@/components/PaginationComponents.vue"
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
	name: "App",
	components: {
    PaymentsDisplay,
    AddPaymentForm,
    PaginationComponents,
},
	data: () => ({
		show: false,
	}),
	computed: {
		...mapGetters(['List', 'categoryList', 'totalCost','pages']),
	},
	methods: {
		...mapActions(['fetchData', 'fetchCategoryData']),
		...mapMutations(['ADD_PAYMENT']),
		addPayment(prop) {
			this.ADD_PAYMENT(prop)
		},
	},
	created() {
		this.fetchCategoryData()
		this.fetchData();
	},
};
</script>

<style lang="scss">
header {
	margin-bottom: 40px;
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

main button {
	width: 200px;
	padding: 10px;
	margin: 0 auto;
	background-color: green;
	border: 1px solid rgb(2, 51, 2);
	cursor: pointer;
	color: white;
	position: relative;
}

main button::after {
	content: "+";
	position: absolute;
	right: 10px;
}
</style>
