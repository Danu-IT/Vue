<template>
	<div>
		<button class="increment" @click="increase">
			Clicked {{ counter }} times
		</button>
	</div>
</template>

<script>
	export default {
		// eslint-disable-next-line vue/multi-word-component-names
		name: "Counter",
		data: () => ({
			counter: 0,
		}),
		methods: {
			increase() {
				this.counter++;
			},
			onHover() {
				console.log("Hover");
			},
			logClick() {
				console.log("click");
			},
		},
		beforeCreate() {
			console.log("Create component");
		},
		created() {
			console.log("Created");
		},
		beforeMount() {
			console.log("BeforeMount");
		},
		mounted() {
			console.log("Mounted");
			let btn = this.$el.querySelector(".increment");
			btn.addEventListener("mouseover", this.onHover);

			document.addEventListener("click", this.logClick); //дублирование события
		},
		beforeUpdate() {
			console.log("beforeUpdate");
		},
		updated() {
			console.log("Update");
		},
		beforeDestroy() {
			console.log("beforeDestroy");
		},
		destroyed() {
			console.log("destroyed");
			document.removeEventListener("click", this.logClick);
		},
	};
</script>

<style lang="scss" scoped>
</style>