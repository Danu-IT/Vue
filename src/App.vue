<template>
	<div id="app">
		<!-- <Calc /> -->
		<!-- <Counter v-if="show" />
		<button @click="show = !show">Show / Hide</button> -->
		<header>
			<div class="header">My personal costs</div>
		</header>
		<main>
			<button class="" @click="show = !show">ADD NEW COST</button>
			<AddPaymentForm class="formList" v-if="show" @add-payment="addPayment">
			</AddPaymentForm>
			<PaymentsDisplay class="dataList" :paymentsList="List"></PaymentsDisplay>
		</main>
	</div>
</template>

<script>
	// import Calc from "@/components/Calc.vue";
	// import Counter from "@/components/Counter.vue";
	import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
	import AddPaymentForm from "@/components/AddPaymentForm.vue";

	export default {
		name: "App",
		components: {
			// Calc,
			// Counter,
			// eslint-disable-next-line vue/no-unused-components
			PaymentsDisplay,
			// eslint-disable-next-line vue/no-unused-components
			AddPaymentForm,
		},
		data: () => ({
			show: false,
			List: [],
		}),
		methods: {
			fetchPaymentsData() {
				return [
					{
						date: "28.03.2020",
						category: "Food",
						value: 169,
					},
					{
						date: "24.03.2020",
						category: "Transport",
						value: 360,
					},
					{
						date: "24.03.2020",
						category: "Food",
						value: 532,
					},
				];
			},
			addPayment(data) {
				console.log(data);
				this.List.push(data);
			},
		},
		created() {
			setTimeout(() => {
				this.List = this.fetchPaymentsData();
			}, 1000);
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
