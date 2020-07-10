<template>
  <div>
    <button @click="$emit('myEvent', 'asd')">
      <slot />
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
