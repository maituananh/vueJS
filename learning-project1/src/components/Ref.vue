<template>
  <div class="ref">
    <button v-on:click='uploadFile'>avatar</button>

    <input class="file"
           type="file"
           ref="refUploadFile" />
  </div>
</template>
 
<script>
export default {
  name: "ref",
  props: {},
  methods: {
    uploadFile() {
      console.log("start upload file");
      this.$refs.refUploadFile.click();
    }
  }
};
</script>

<style>
.file {
  display: none;
}
</style>