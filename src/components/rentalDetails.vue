<template>
  <div class="card">
    <img class="card-img-top img-fluid" id="leadImage" 
         :src="rentalInstance['_source']['images'][0]"
         alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">{{ rentalInstance['_source']['title'] }}</h4>
      <p class="card-text">{{ rentalInstance['_source']['body'].substring(0,300) + " ..." }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'rentalDetails',
    props: ['rentalId'],
    computed: {
      rentalInstance () {
        let rentalsById = this.$store.state.rentalsById
        let rentalInstance = rentalsById[this.rentalId]
        return rentalInstance
      }
    }
  }
</script>


<style >

</style>
