<template>

  <div id="app" class="container-fluid">
<!--    <Home/>-->
    <div>
      <h3> ROUTER LINK </h3>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/detail">Go to About</router-link>
    </div>

    <div>
      <h3> ROUTER REDIRECT </h3>
      <button @click="backHome" > BACK HOME </button>
    </div>

    <router-view/>
  </div>
</template>

<script>

// import Home from './components/Home';

export default {
  name: 'App',
  methods: {
    backHome() {
      this.$router.push("/");
    }
  },
  components: {
    // Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
}

body {
  /*background-image: url("./assets/image/back.jpg");*/
}
</style>
