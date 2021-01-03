<template>
</template>
<script>
export default {
  name: 'product',
  props: {
    msg: String
  },
  data: function () {
    return {
      products: [
      {
        title: '',
        description: '',
        price: '',
        image: '',
        status: '',
        condition: '',
      },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
