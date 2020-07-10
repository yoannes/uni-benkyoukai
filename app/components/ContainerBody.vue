<template>
  <div class="container-body">
    <slot/>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container-body {
  border: 1px solid red;
  color: red;
  width: 800px;
  height: 600px;
  position: relative;
}
</style>
