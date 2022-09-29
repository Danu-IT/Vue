<template>
    <div :class="$style.wrapper">
        <div :class="$style.content">
            <div>{{title}}</div>
            <div :class="$style.contant__main">
                <AddPaymentForm v-if="settings.content === 'addPaymentForm'" @add-payment="addPayment" :categoryList="categoryList"></AddPaymentForm>
                <AuthComponent v-else-if="settings.content === 'auth'"></AuthComponent>
                <RenamePayment v-else-if="settings.content === 'rename'" :settings="settings" :categoryList="categoryList"></RenamePayment>
            </div>
            <footer :class="$style.footer">
                <a :class="$style.closeBtn" @click.prevent="closeModal" href="">X</a>
            </footer>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: 'ModalWindowApp',
    props: {
        settings: {
            type: Object,
        }
    },
    components: {
    AddPaymentForm: () => import(/*webpackChunkName: "AddPaymentForm"*/ "./AddPaymentForm.vue"),
    AuthComponent: () => import(/*webpackChunkName: "Auth"*/ "./Auth.vue"),
    RenamePayment: ()=> import(/*webpackChunkName: "Rename"*/ "./RenamePayment.vue"),
},
    methods: {
        ...mapMutations(['ADD_PAYMENT']),
        addPayment(prop) {
            this.ADD_PAYMENT(prop);
        },
        closeModal() {
            this.$modal.hide()
        }
    },
    computed: {
        ...mapGetters(['categoryList']),
        title() {
            return this.settings?.title || 'Modal window'
         }
    },
}
</script>

<style lang="scss" module>
    .wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.2);
        position: absolute;
        top: 0;
        left: 0;
    }
    .content{
        position: relative;
        background-color: white;
        border-radius: 8px;
        padding: 8px;
    }
    .closeBtn{
        position: absolute;
        top: 10px;
        right: 10px;
        text-decoration: none;
    }
</style>