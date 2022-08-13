<template>
  <div>
    <div class="card">
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>{{ id }}</p>
          <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data: function () {
    return {
      id: this.$route.params.id
    }
  },
  watch: {
    '$route'(to) {
        this.id = to.params.id;
    }
  }
}
</script>

<style scoped>

</style>
