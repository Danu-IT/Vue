<template>
	<div class="input__container">
		<input type="text" placeholder="Value" v-model="value" />
		<!-- <input type="text" placeholder="Category" v-model="category" /> -->
		<select class="category" v-model="category" name="" id="">
			<option disabled value="" >Выбрать категорию</option>
			<option v-for="category of categoryList" :key="category">{{category}}</option>
		</select>
		<input type="text" placeholder="Date" v-model="date" />
		<button @click="addPayment">Add</button>
	</div>
</template>

<script>
	export default {
		name: "AddPaymentForm",
		props:{
			categoryList: {
				type: Array,
				default: () => [],
			},
		},
		data: () => ({
			value: "",
			category: "",
			date: "",
		}),
		methods: {
			addPayment() {
				const { value, category, date, currenDate } = this;
				const data = {
					value,
					category,
					date: date.trim() != "" ? date : currenDate,
				};
				this.$emit("add-payment", data);
			},
		},
		computed: {
			currenDate() {
				const currenDate = new Date();
				const day = currenDate.getDate();
				const month = currenDate.getMonth() + 1;
				const year = currenDate.getFullYear();
				return `${day}.${month}.${year}`;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.input__container {
		display: flex;
		flex-direction: column;
		width: 300px;
		margin: 20px auto;
	}
	.input__container input {
		padding: 10px;
		border-radius: 10px;
		outline: none;
		margin-bottom: 5px;
		border: 1px solid green;
	}
	.input__container button {
		width: 100px;
		padding: 5px;
		margin: 0 auto;
		background-color: green;
		border: 1px solid rgb(2, 51, 2);
		cursor: pointer;
		color: white;
		position: relative;
	}
	.input__container button::after {
		content: "+";
		position: absolute;
		right: 10px;
	}
	.category{
		margin: 15px 0;
	}
</style>