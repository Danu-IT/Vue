<template>
	<div class="view">
		<h1>Calculator</h1>
		<div class="main">
			<input type="number" v-model.number="op1" />
			<input type="number" v-model.number="op2" />
			= {{ result }}
		</div>
		<div v-if="error" class="error">{{ error }}</div>
		<div class="msg">
			<template v-if="+result < 0">Отрицательный результат</template>
			<template v-else-if="+result > 100">Результат больше 100</template>
			<template v-else></template>
		</div>
		<div class="keyboard">
			<button
				@click="calculate($event)"
				v-for="(el, index) in operation"
				:key="index"
			>
				{{ el }}
			</button>
		</div>
		<!-- <div class="logs">{{ logs }}</div> -->
		<div class="keyboard-num__container">
			<input v-model="showKeyBoard" type="checkbox" />
			Отобразить экранную клавиатуру
			<div v-if="showKeyBoard" class="keyboard-num">
				<button
					@click="addInput(el)"
					v-for="(el, index) in simvol"
					:key="index"
				>
					{{ el }}
				</button>
				<button @click="deleteNumber()">delete</button>
				<div>
					<input
						name="operand"
						value="op1"
						type="radio"
						v-model="selectedOperand"
					/>
					Операнд 1
					<input
						name="operand"
						value="op2"
						type="radio"
						v-model="selectedOperand"
					/>
					Операнд 2
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		// eslint-disable-next-line vue/multi-word-component-names
		name: "Calc",
		data: () => ({
			op1: "",
			op2: "",
			result: "",
			error: "",
			operation: ["+", "-", "*", "/", "**", "//"],
			simvol: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			// logs: {},
			fibResult: 0,
			showKeyBoard: false,
			selectedOperand: "",
			deleteNum: "<-",
		}),
		methods: {
			calculate(event) {
				this.error = "";
				switch (event.target.innerText) {
					case "+":
						this.sum();
						break;
					case "-":
						this.sub();
						break;
					case "*":
						this.mult();
						break;
					case "/":
						this.div();
						break;
					case "**":
						this.pow();
						break;
					case "//":
						this.divInt();
						break;
				}
				// const { op1, op2, result } = this;

				// this.logs = {
				//   ...this.logs,
				//   [Date.now()]: `${op1} ${event.target.innerText} ${op2} = ${result}`,
				// };
				// this.$set(
				// 	this.logs,
				// 	Date.now(),
				// 	`${op1} ${event.target.innerText} ${op2} = ${result}`
				// );
			},
			sum() {
				const { op1, op2 } = this;
				this.result = +op1 + +op2;
				// this.fibResult = this.fib(op1) + this.fib(op2);
			},
			sub() {
				const { op1, op2 } = this;
				this.result = op1 - op2;
			},
			div() {
				const { op1, op2 } = this;
				if (op2 === 0) return (this.error = "На ноль нельзя делить");
				this.result = op1 / op2;
			},
			mult() {
				const { op1, op2 } = this;
				this.result = op1 * op2;
			},
			pow() {
				const { op1, op2 } = this;
				this.result = op1 ** op2;
			},
			divInt() {
				const { op1, op2 } = this;
				this.result = Math.floor(op1 / op2);
			},
			fib(n) {
				return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
			},
			addInput(el) {
				if (this.selectedOperand == "op2") {
					this.op2 += `${el}`;
				} else if (this.selectedOperand == "op1") {
					this.op1 += `${el}`;
				}
			},
			deleteNumber() {
				if (this.selectedOperand == "op2") {
					this.op2 = String(this.op2).slice(0, -1);
				} else if (this.selectedOperand == "op1") {
					this.op1 = String(this.op1).slice(0, -1);
				}
			},
		},
		computed: {},
	};
</script>

<style lang="scss" scoped>
	.view {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40vh;
		flex-direction: column;
	}
	.main {
		margin: 0 0 20px 0;
	}
	.main input {
		width: 100px;
	}
	input {
		margin-left: 10px;
	}
	.keyboard > * {
		margin-left: 10px;
		padding: 5px 10px;
		background: rgb(0, 0, 0);
		box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
		border: none;
		color: white;
	}
	.keyboard {
		display: flex;
	}
	.keyboard-num__container {
		margin-top: 50px;
	}
</style>