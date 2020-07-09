<template>
  <div class="menu">
    <div>
      {{ title }}
    </div>
    <span>Menu</span> <nuxt-link to="/about">About</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    }
  },

  data() {
    return {}
  }
}
</script>

<style scoped>
  .menu {
    display: flex;
    padding: 10px;
    background: rgba(0,0,0,0.2);
    margin-bottom: 10px;
  }
</style>
