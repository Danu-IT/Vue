<template>
	<!-- <div class="input__container">
		<input type="text" placeholder="Value" v-model="value" />
		<div class="category__container">
			<select class="category" v-model="category" name="" id="">
				<option disabled value="">Выбрать категорию</option>
				<option v-for="category of categoryList" :key="category">{{category}}</option>
			</select>
			<button @click="showCategory = !showCategory">Add category</button>
		</div>
		<div class="category__Add" v-if="showCategory">
			<input v-model="addCategory" placeholder="Category" type="text" />
			<button @click="addCategoryList">Add category</button>
		</div>
		<input type="text" placeholder="Date" v-model="date" />
		<button @click="addPayment">Add</button>
	</div> -->

	<v-card class="text-left pa-8">
		<v-text-field label="Date" v-model="date"/>
		<v-select label="Category" v-model="category" :items="categoryList"></v-select>
		<v-btn :ripple="false" @click="showCategory = !showCategory">Add category</v-btn>
		<v-col v-if="showCategory">
			<v-text-field label="New category" v-model="addCategory"/>
			<v-btn :ripple="false" @click="addCategoryList">Add category</v-btn>
		</v-col>
		<v-text-field label="Value" v-model="value"/>
		<v-btn :ripple="false" @click="addPayment">Add payment</v-btn>
	</v-card>

</template>

<script>
import { mapMutations } from 'vuex';

export default {
	name: "AddPaymentForm",
	props: {
		categoryList: {
			type: Array,
			default: () => [],
		},
	},
	data: () => ({
		value: "",
		category: "",
		date: "",
		showCategory: false,
		addCategory: "",
	}),
	methods: {
		...mapMutations(['ADD_CATEGORY_ITEM']),
		addPayment() {
			const { value, category, date, currenDate } = this;
			const data = {
				value,
				category,
				date: date.trim() != "" ? date : currenDate,
			};
			this.$emit("add-payment", data);
			this.category = this.value = this.addCategory = '';
			this.$modal.hide()
		},
		addCategoryList() {
			this.ADD_CATEGORY_ITEM(this.addCategory);
			this.addCategory = '';
			this.showCategory = false;
		}
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
	created() {
		if (this.$route.name) {
			this.value = this.$route.query.value;
			const categoryHistory = this.$route.params.pathMatch.split('/');
			this.addCategory = categoryHistory[categoryHistory.length - 1];

			if (this.categoryList.indexOf(this.addCategory) == -1) this.ADD_CATEGORY_ITEM(this.addCategory);
			this.category = this.addCategory;
		}
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
	min-width: 100px;
	max-width: 150px;
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

.category {
	margin: 15px 0;
}

.category__container {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.category__Add {
	display: flex;
	flex-direction: column;
	padding: 20px 0px;
}
</style>