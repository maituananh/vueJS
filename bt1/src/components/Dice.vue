<template>
  <div class="Dice d-flex flex-column">
    <img class="shadow" v-bind:src="url + (diceScore.dice1 == 0 ? 1 : diceScore.dice1) + extension"/>
    <img class="shadow" v-bind:src="url + (diceScore.dice2 == 0 ? 1 : diceScore.dice2) + extension"/>
<!--    {{ diceScore.dice1 }}-->
<!--    {{ diceScore.dice2 }}-->
  </div>
</template>

<script>
export default {
  name: "Dice",
  data: function () {
    return {
      url: "/static/image/dice-",
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
