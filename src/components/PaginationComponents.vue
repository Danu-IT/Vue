<template>
	<div>
		<div v-for="(item, index) of List" :key="index">
			<div>
				<a @click="fetchPageDate(index + 1)" class="paginationItem">{{index + 1}}</a>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	export default {
		name: "PaginationComponents",
		props: {
			List: {
				type: Array,
				default: () => [],
			},
		},
		data: () => ({}),
		methods: {
			...mapActions(['fetchPageDate']),
		}
    }
</script>

<style lang="scss" scoped>
	.pagination{
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 20px 0;
		&Item{
			margin: 15px;
			cursor: pointer;
		}
	}
</style>