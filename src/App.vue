<template>
  <div id="app">
    <img id="cat" src="http://thecatapi.com/api/images/get">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  mounted: function () {
    this.$store.dispatch('LOAD_RENTAL_LIST')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#cat {
  height: 150px;
}
</style>
