<template>
	<div id="app">
		<header>
			<nav class="navbar">
				<router-link class="router-link" to="/dashboardPage">Dashboard</router-link>
				<router-link class="router-link" to="/notFound">NotFound</router-link>
			</nav>
		</header>
		<main>
			<router-view></router-view>
		</main>
	</div>
</template>

<script>

export default {
	name: "App",
};
</script>

<style lang="scss">
	.router-link{
		margin: 0 10px;
		text-decoration: none;
	}
</style>