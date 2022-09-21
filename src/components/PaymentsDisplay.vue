<template>
	<div class="table">
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
		</div>
	</div>
</template>

<script>
	export default {
		name: "PaymentsDisplay",
		props: {
			paymentsList: {
				type: Array,
				default: () => [],
			},
		},
		data: () => ({}),
	};
</script>

<style lang="scss" scoped>
	.table {
		display: flex;
		flex-direction: column;
	}
	.table span {
		width: 150px;
		display: inline-flex;
	}
	.table__block {
		border-bottom: 1px solid gray;
		max-width: 600px;
		margin: 0 auto;
		padding: 10px;
	}
	.bold {
		font-weight: 900;
	}
</style>