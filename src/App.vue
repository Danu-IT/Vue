<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<div class="d-flex align-center">
				<v-btn :ripple="false" plain to="/dashboardPage">Dashboard</v-btn>
				<v-btn :ripple="false" plain to="/notFound">Not Found</v-btn>
			</div>
		</v-app-bar>

		<v-main>
			<router-view />
			<ContextMenu :settings="showContextSetting" v-if="showContextMenu"></ContextMenu>
		</v-main>
		<transition name="fade">
			<ModalWindowApp :settings="modalSettings" v-if="showModal"></ModalWindowApp>
		</transition>
	</v-app>
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
