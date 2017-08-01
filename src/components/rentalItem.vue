<template>
  <img id="leadImage" :src="rentalInstance['_source']['images'][0]">
</template>

<script>
export default {
  name: 'rental-item',
  props: ['rentalInstance']
}
</script>

<style >

#leadImage {
  height: 275px;
}
</style>
