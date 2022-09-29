<template>
    <div :class="$style.wrapper">

        <div :style=" {position:'absolute',top: this.top + 'px', left: this.left + 'px'}">
            <div :class="$style.content">
                <div @click="editing">Rename</div>
                <div @click="() => dataArr()">Remove</div>
                <footer :class="$style.footer">
                    <a :class="$style.closeBtn" @click.prevent="closeModal" href="">X</a>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name: 'ContextMenu',
    data: () => ({
        color: 'red',
        isActive: true,
    }),
    props: {
        settings: {
            type: Object
        }
    },
    methods: { 
        ...mapMutations(['REMOVE_PAYMENT']),
        dataArr() {
            this.REMOVE_PAYMENT(this.settings.index);
            this.$contextMenu.hide();
        },
        closeModal() {
            this.$contextMenu.hide();
        },
        editing(){
            this.$contextMenu.hide();
            this.$modal.show({title: 'Rename payment', content: 'rename', index: this.settings.index});
        }
    },
    computed: {
        title() {
            return this.settings?.title || 'Modal window'
        },
        left() {
            return this.settings?.coordinateX - 70;
        },
        top() {
            return this.settings?.coordinateY - 540;
        }
    },
}
</script>

<style lang="scss" module>
.wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}

.content {
    position: absolute;
    background-color: white;
    z-index: 5;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 0;
    text-align: start;
    padding: 20px 0;

    &>div {
        cursor: pointer;

        &:hover {
            background-color: rgb(212, 211, 211);
        }
    }
}

// .footer{
//     position: relative;
// }

.closeBtn {
    position: absolute;
    right: 5px;
    top: 0;
    text-decoration: none;
}
</style>