<template>
  <div class="d-flex justify-content-center">
    <div v-for="product in products" class="card" style="width: 18rem;">
      <img src="/static/image/dice-1.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <button @click="detail(product.id)" class="btn btn-primary">Detail</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    products: Array
  },
  methods: {
    detail(id) {
      this.$router.push("/detail/" + id);
    }
  }
}
</script>

<style scoped>

</style>
