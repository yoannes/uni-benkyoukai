<template>
  <div>
    <div>{{ message }}</div>
    <div v-text="message"></div>
    <br>
    <div :asd="message">{{ message }}</div>
    <div :username="name">Welcome! {{ username }}さん</div>

    <Play :asd="message" :username="name"></Play>

    <Header :username="name"></Header>
    <Body></Body>
    <Body></Body>
  </div>
</template>

<script>
import Play from "~/components/Play.vue"
import Header from "~/components/Header.vue"
import Body from "~/components/Body.vue"

export default {
  components: {
    Header,
    Body
  }, 
  data() {
    return {
      message: "Hello",
      name: "John"
    }
  },
  methods: {
  },
  components: {
  }
}
</script>>