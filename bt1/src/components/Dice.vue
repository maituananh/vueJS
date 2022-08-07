<template>
  <div class="Dice d-flex flex-column">
    <img class="shadow" src="../assets/image/dice-1.png"/>
    <img class="shadow" src="../assets/image/dice-1.png"/>
    {{ diceScore.dice1 }}
    {{ diceScore.dice2 }}
  </div>
</template>

<script>
export default {
  name: "Dice",
  data: function () {
    return {
      url: "../assets/image/dice-",
      extension: ".png",
    }
  },
  props: {
    diceScore: {
      dice1: 1,
      dice2: 1
    },
  },
  methods: {
  }
}
</script>

<style scoped>
img {
  width: 150px;
  height: 150px;
  margin-top: 30px;
}
</style>
