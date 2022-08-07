<template>
  <div class="DisplayScore">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DisplayScore",
}
</script>

<style>
  .DisplayScore {
    font-size: 50px;
  }
</style>
