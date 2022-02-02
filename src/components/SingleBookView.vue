<template>
<div>
    <h1>SingleBookView</h1>
    <h2>{{ title }}</h2>
</div>
</template>

<script>
export default {
data() {
    return{
        title: this.$route.params.id,
    }
}
}
</script>

<style>

</style>