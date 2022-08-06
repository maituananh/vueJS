<template>
  <div class="comp-header">
    <h1>
      {{ title }}
    </h1>
    <button v-on:click="changeTitleAtHeader()">
      Change title at component header
    </button>
  </div>
</template>

<script>
export default {
  name: "comp-header",
  props: {
    title: String,
  },
  methods: {
    changeTitleAtHeader() {
      var data = {
        title1: "abcnv"
      };
      this.$emit("changeTitleFromHeader", data);
    }
  },
};
</script>

<style>
</style>