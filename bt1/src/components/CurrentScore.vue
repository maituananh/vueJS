<template>
  <div class="current-score">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CurrentScore"
}
</script>

<style>
.current-score {
  color: white;
  background-color: #42b983;
}
</style>
