<template>
  <div class="btns-container">
    <button
    class="btns-container-btn"
    @click="$emit('asdf3')"
    >{{$t("add")}}</button>
    <button
    class="btns-container-btn"
    @click="$emit('asdf4')"
    >{{$t("edit")}}</button>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.btns-container {
  margin-top: 5px;
  border: 1px solid white;
  width: 230px;
  height: 50px;
  text-align:center;
}
.btns-container-btn {
  margin-top: 5px;
  color: black;
  font-size: 20px;
  width: 100px;
  height: 30px;
  display: inline-block;
  cursor: pointer;
}
</style>
