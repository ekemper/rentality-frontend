<template>
  <div class="container">
  wtf

  <!-- <pre v-if="rentalInstance" >{{rentalInstance}}</pre>
  <pre v-if="!rentalInstance" ><h1>LOADING...</h1></pre>
  ///////////////// -->
  <pre>{{rentalInstance}}</pre>

    <!-- <div class="card">
      <img class="card-img-top img-fluid" id="leadImage" 
           :src="rentalInstance['images'][0]"
           alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">{{ rentalInstance['title'] }}</h4>
        <p class="card-text">{{ rentalInstance['body'].substring(0,300) + " ..." }}</p>
      </div>
    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'rentalDetails',
    computed: {
      rentalInstance: function () {
        let rentals = this.$store.state.rentalsById
        let rawRentalObject = rentals[this.$route.params.rentalId]
        return rawRentalObject
      }
    }
  }
</script>

<style>

  .card {
    margin-top: 20px;
    width: 60vw;
  }
  #leadImage {
    width: auto;
  }
</style>
