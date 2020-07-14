<template>
  <div class="container-body">
    <div class="body-show-content-area">{{ showBody }}</div>
    <button
    v-if="selectedPost"
    class="delete-body-area-btn"
    @click="$emit('asdf2')"
    >x</button>
  </div>
</template>
  
<script>
export default {
  props: {
    showBody: {
      type: String,
      default: null
    },
    selectedPost: {
      type: Object,
      default: null
    }
  }
}
</script>


<style scoped>
.container-body {
  border: 1px solid red;
  color: red;
  width: 800px;
  height: 600px;
  position: relative;
}
.body-show-content-area {
  border: solid;
  color: red;
  width: 800px;
  height: 560px;
}
.delete-body-area-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  color: black;
  background-color: red;
  font-size: 20px;
  width: 100px;
  height: 30px;
  cursor: pointer;
  display: block;
  /* display: none; */
}
</style>
