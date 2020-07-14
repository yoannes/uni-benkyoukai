<template>
  <div>
    <div>About page</div>

    {{ $store.state.data }}
    
    <nuxt-link to="/">back</nuxt-link>
  </div>
</template>

<script>
export default {
  created() {
    console.log("About created")
    console.log("Store", this.$store.state)
  }
}
</script>
<style scoped>

</style> 
