<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

  <product v-bind:products="products"/>
  </div>
</template>

<script>
import product from './Products'

export default {
  name: "Home",
  data: function() {
    return {
      products: [
        {id: 1, name: "product1", description: "lorem11111111111111111111111111111"},
        {id: 2, name: "product2", description: "lorem11111111111111111111111111111"},
        {id: 3, name: "product3", description: "lorem11111111111111111111111111111"},
        {id: 4, name: "product4", description: "lorem11111111111111111111111111111"},
        {id: 5, name: "product5", description: "lorem11111111111111111111111111111"},
        {id: 6, name: "product6", description: "lorem11111111111111111111111111111"},
        {id: 7, name: "product7", description: "lorem11111111111111111111111111111"},
        {id: 8, name: "product8", description: "lorem11111111111111111111111111111"},
        {id: 9, name: "product9", description: "lorem11111111111111111111111111111"},
        {id: 10, name: "product10", description: "lorem11111111111111111111111111111"},
        {id: 11, name: "product11", description: "lorem11111111111111111111111111111"},
        {id: 12, name: "product12", description: "lorem11111111111111111111111111111"},
      ]
    }
  },
  components: {
    product
  }
}
</script>

<style scoped>

</style>
