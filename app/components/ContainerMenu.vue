<template>
  <div class="contaier-menu">
    <!-- loop all datas and will append to menu -->
    <!-- ポイント!↓vueはこんなふうに短く書く、横に長くかかない -->
    <div v-if="this.data.length">
      <div
      v-for="item in data"
      :key="item.id"
      class="container-menu-item"
      @click="$emit('asdf', item)" 
      >
        <div>{{ item.title }}</div> 
      </div>
    </div>
    <div v-else>
      <div style="width: 200px">{{$t("empty")}}</div>
    </div>  
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: null
    }    
  }
}
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
.container-menu-item {
  border: 3px solid green;
  width: 200px;
  height: 50px;
  overflow: hidden;
  cursor: pointer;
}
</style>
