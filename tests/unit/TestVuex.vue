<template>
    <div>
        <input type="text" v-model="prop">
        <button @click="save"></button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: 'TestVuex',
        data:() => {
            return {
                prop: '',
            }
        },
        methods: {
            ...mapActions(['addData']),
            save(){
                const { prop } = this;
                this.addData(prop)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>