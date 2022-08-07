<template>
  <div id="app" class="container-fluid">
    <Home/>
  </div>
</template>

<script>

import Home from './components/Home';

export default {
  name: 'App',
  components: {
    Home
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
  background-image: url("./assets/image/back.jpg");
}
</style>
