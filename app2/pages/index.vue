<template>
  <div>
    <Header :username='name'></Header>
    <Body></Body>
    <Body></Body>
  </div>
</template>

<script>
import Header from "~/components/Header.vue"
import Body from "~/components/Body.vue"

export default {
  components: {
    Header,
    Body
  }, 
  data() {
    return {
      name: "kagoshima"
    }
  },
  methods: {
  },
  components: {
  }
}
</script>>