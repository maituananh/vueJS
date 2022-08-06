<template>
  <div class="category">
    <ul v-for="category in categories" v-bind:key="category.id">
      <li>
          {{category.id}} -- {{category.name}}  
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "category",
  props: {
    categories: Array,
  },
};
</script>

<style>
</style>