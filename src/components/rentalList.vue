<template>
  <div class="container">
    <h1>rentality</h1>

    <div class="card-columns">
      <div v-for="rental in rentals">

        <!-- <router-link :to="{ name: 'rentalDetails', params: { rentalId: value['_source']['_id'] }}"> -->
          <rental-item :rentalId="rental['_id']"></rental-item>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
    
  
</template>

<script>
  import rentalItem from './rentalItem'
  export default {
    components: {
      rentalItem: rentalItem
    },
    name: 'rentalList',
    computed: {
      rentals () {
        return this.$store.state.rentalsById
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}*/
</style>
