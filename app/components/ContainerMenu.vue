<template>
  <div class="contaier-menu">
    <slot/>
    <!-- <slot>hello</slot> -->
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.contaier-menu {
  border: 1px solid orange;
  overflow-y: auto;
  overflow-x: hidden;
  border: solid;
  color: orange;
  width: 200px;
  height: 600px;
}
</style>
