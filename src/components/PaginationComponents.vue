<template>
	<div>
		<div v-for="(item, index) of List" :key="index">
			<div>
				<a @click="() => pageSwitch(index)" class="paginationItem" :class="{active: index + 1 == activePage ? isActive : false}">{{index + 1}}</a>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';
	export default {
		name: "PaginationComponents",
		data: () => ({
			isActive: true,
		}),
		props: {
			List: {
				type: Array,
				default: () => [],
			},
		},
		computed: {
			...mapGetters(['activePage']),

		},
		methods: {
			...mapActions(['fetchPageDate']),
			pageSwitch(index){
				this.fetchPageDate(index + 1);
				this.$contextMenu.hide();
			}
		},
    }
</script>

<style lang="scss" scoped>
	.pagination{
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 20px 0;
		&Item{
			margin: 5px;
			cursor: pointer;
			padding: 10px;
		}
	}
	.active{
		background-color: green;
		color: white;
	}
</style>