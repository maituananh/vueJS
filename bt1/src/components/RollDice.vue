<template>
  <div>
    <button v-on:click="rollRice"
      class="border-0">
      ROLL DICE
    </button>
  </div>
</template>

<script>

export default {
  name: "RollDice",
  methods: {
    rollRice() {
      let dice1 = Math.floor(Math.random() * 6) + 1;
      let dice2 = Math.floor(Math.random() * 6) + 1;
      let dice = {
        dice1: dice1,
        dice2: dice2
      }
      this.$emit("rollDice", dice)
    }
  }
}
</script>

<style scoped>
div {
  color: #42b983;
  background-color: white;
}
</style>
