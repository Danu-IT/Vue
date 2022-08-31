<template>
  <div class="view">
    <h1>Calculator</h1>
    <div class="main">
      <input type="number" v-model.number="op1" />
      <input type="number" v-model.number="op2" />
      = {{ result }}
    </div>
    <div class="keyboard">
      <button @click="action($event)">+</button>
      <button @click="action($event)">-</button>
      <button @click="action($event)">/</button>
      <button @click="action($event)">*</button>
      <button @click="action($event)">**</button>
      <button @click="action($event)">//</button>
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
    result: 0,
  }),
  methods: {
    action(event) {
      switch (event.target.innerText) {
        case "+":
          this.result = this.op1 + this.op2;
          break;
        case "-":
          this.result = this.op1 - this.op2;
          break;
        case "*":
          this.result = this.op1 * this.op2;
          break;
        case "/":
          this.result = this.op1 / this.op2;
          break;
        case "**":
          this.result = this.op1 ** this.op2;
          break;
        case "//":
          this.result = Math.floor(this.op1 / this.op2);
          break;
      }
    },
  },
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
</style>