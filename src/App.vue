<template>
	<div id="app">
		<header>
			<nav class="navbar">
				<router-link class="router-link" to="/dashboardPage">Dashboard</router-link>
				<router-link class="router-link" to="/notFound">NotFound</router-link>
			</nav>
		</header>
		<main>
			<ContextMenu :settings="showContextSetting" v-if="showContextMenu"></ContextMenu>
			<router-view></router-view>
		</main>
		<transition name="fade">
			<ModalWindowApp :settings="modalSettings" v-if="showModal"></ModalWindowApp>
		</transition>
	</div>
</template>

<script>

export default {
	name: "App",
	data: () => ({
		showModal: false,
		modalSettings: {},
		showContextMenu: false,
		showContextSetting: {},
	}),
	components: {
		ModalWindowApp: () => import(/*webpackChunkName: "Modal"*/ '@/components/ModalWindowApp.vue'),
		ContextMenu: () => import(/*webpackChunkName: "Menu"*/'@/components/ContextMenu.vue')
	},
	methods: {
		modalOpen(settings) {
			this.modalSettings = settings;
			this.showModal = true
		},
		modalClose() {
			this.showModal = false
		},
		contextMenuOpen(settings) {
			this.showContextSetting = settings;
			this.showContextMenu = true
		},
		contextMenuClose() {
			this.showContextMenu = false
		},
	},
	mounted() {
		this.$modal.EventBus.$on('show', this.modalOpen)
		this.$modal.EventBus.$on('hide', this.modalClose)
		this.$contextMenu.EventBus.$on('show', this.contextMenuOpen)
		this.$contextMenu.EventBus.$on('hide', this.contextMenuClose)
	}
};
</script>

<style lang="scss">
.router-link {
	margin: 0 10px;
	text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>