<template>
    <div>
        <div class="input__container">
            <input type="text" placeholder="Value" v-model="value">
            <div class="category__container">
                <select class="category" v-model="category" name="" id="">
                    <option disabled value="">Выбрать категорию</option>
                    <option v-for="category of categoryList" :key="category">{{category}}</option>
                </select>
                <button @click="showCategory = !showCategory">Add category</button>
            </div>
            <div class="category__Add" v-if="showCategory">
                <input v-model="addCategory" placeholder="Category" type="text" />
                <button @click="addCategoryList">Add category</button>
            </div>
            <input type="text" placeholder="Date" v-model="date" />
            <button @click="renamePayment">Rename</button>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
    name: 'RenamePayment',
    props: {
		categoryList: {
			type: Array,
			default: () => [],
		},
        settings: {
            type: Object
        }
	},
    data: () => ({
		value: '',
		category: "",
		date: "",
		showCategory: false,
		addCategory: "",
	}),
    computed:{
        ...mapGetters(['List']),
        dateNow(){
            return this.List[this.settings.index]
        },
        currenDate() {
			const currenDate = new Date();
			const day = currenDate.getDate();
			const month = currenDate.getMonth() + 1;
			const year = currenDate.getFullYear();
			return `${day}.${month}.${year}`;
		},
    },
    methods:{
        ...mapMutations(['ADD_CATEGORY_ITEM', 'REMOTE_PAYMENT']),
        addCategoryList(){
			this.ADD_CATEGORY_ITEM(this.addCategory);
			this.addCategory = '';
			this.showCategory = false;
		},
        renamePayment(){
            const { value, category, date, currenDate } = this;
			const data = {
				value,
				category,
				date: date.trim() != "" ? date : currenDate,
			};
            this.REMOTE_PAYMENT([data, this.settings]);
            this.$modal.hide()
        }
    },
    created() {
        this.value = this.dateNow.value;
        this.category = this.dateNow.category;
        this.date = this.dateNow.date;
    }
}
</script>

<style lang="scss" scoped>
.input__container {
	display: flex;
	flex-direction: column;
	width: 300px;
	margin: 20px auto;
}

.input__container input {
	padding: 10px;
	border-radius: 10px;
	outline: none;
	margin-bottom: 5px;
	border: 1px solid green;
}

.input__container button {
	min-width: 100px;
	max-width: 150px;
	padding: 5px;
	margin: 0 auto;
	background-color: green;
	border: 1px solid rgb(2, 51, 2);
	cursor: pointer;
	color: white;
	position: relative;
}

.input__container button::after {
	content: "+";
	position: absolute;
	right: 10px;
}

.category {
	margin: 15px 0;
}
.category__container{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.category__Add{
	display: flex;
	flex-direction: column;
	padding: 20px 0px;
}
</style>