<template>
    <div>
        <p>{{ asd }}</p>
        <p>Welcome! {{ username }}さん</p>
        <p>{{ asd }} {{ username }} Lennon</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    props: {
        asd: String,
        username: String
    }
}
</script>

<style scoped>
div{
    border: 1px solid green;
    height: 80px;
}
h3{
    color: green
}
p{
    color: green
}
</style>