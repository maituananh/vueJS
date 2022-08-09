<template>
  <div>
    <button class="border-0" v-on:click="newGame">
      NEW GAME
    </button>
  </div>
</template>

<script>
export default {
  name: "NewGame",
  methods: {
    newGame() {
      this.$emit("newGame");
    }
  }
}
</script>

<style scoped>
div {
  font-size: 20px;
}

button {
  color: #42b983;
  background-color: white;
}
</style>
