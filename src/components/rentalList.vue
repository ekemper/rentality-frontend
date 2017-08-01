<template>
  <div>
    <h1>rental list</h1>
    <div v-for="(ithRental, index) in rentals">
      <!-- <pre>{{ithRental['_source']['images']}}</pre> -->
      <rental-item :rentalInstance="ithRental"></rental-item>
    </div>
    
    <!-- <pre>{{rentals}}</pre> -->
  </div>
  
</template>

<script>
  import rentalItem from './rentalItem'
  // import { mapState } from 'vuex'
  export default {
    components: {
      rentalItem: rentalItem
    },
    name: 'rentalList',
    computed: {
      rentals () {
        let rentalList = this.$store.state.rentals
        console.log('rentalList :' + rentalList)
        return rentalList
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
