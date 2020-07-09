<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  display: flex;
  border: solid;
  color: blue;
  width: 1000px;
  height: 600px;
}
</style>
