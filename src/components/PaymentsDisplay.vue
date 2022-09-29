<template>
	<!-- <div class="table">
		<div class="table__block bold">
			<span>#</span>
			<span>Date</span>
			<span>Category</span>
			<span>Value</span>
		</div>
		<div class="table__block" v-for="(el, index) in paymentsList" :key="index">
			<span>{{ index + 1 }}</span>
			<span>{{ el.date }}</span>
			<span>{{ el.category }}</span>
			<span>{{ el.value }}</span>
			<div @click="(event) => context(index)" class="menu">...</div>
		</div>
	</div> -->
	<v-container>
		<v-row>
			<v-col cols="1">#</v-col>
			<v-col cols="4">Date</v-col>
			<v-col cols="4">Category</v-col>
			<v-col cols="2">Value</v-col>
		</v-row>
		<v-row v-for="({value, category, date}, index) in paymentsList" :key="index">
			<v-col cols="1">{{index + 1}}</v-col>
			<v-col cols="4">{{date}}</v-col>
			<v-col cols="4">{{category}}</v-col>
			<v-col cols="2">{{value}}$</v-col>
			<div cols="1" @click="(event) => context(index)" class="menu">...</div>
		</v-row>
	</v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: "PaymentsDisplay",
	props: {
		paymentsList: {
			type: Array,
			default: () => [],
		},
	},
	data: () => ({}),
	methods: { 
		context(index) {
			this.$contextMenu.show({ title: "Add new payment", content: "contextMenu", index: index, coordinateX: event.pageX, coordinateY: event.pageY});
		},
	},
	computed: {
		...mapGetters(["List"]),
	},
};
</script>

<style lang="scss" scoped>
// .table {
// 	display: flex;
// 	flex-direction: column;
// }

// .table span {
// 	width: 150px;
// 	display: inline-flex;
// }

// .table__block {
// 	border-bottom: 1px solid gray;
// 	max-width: 700px;
// 	margin: 0 auto;
// 	padding: 10px;
// 	position: relative;
// }

// .bold {
// 	font-weight: 900;
// }

.menu {
	display: inline-block;
	font-weight: bold;
	transform: rotate(90deg);
	cursor: pointer;
}
</style>