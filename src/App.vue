<template>
  <div id="app">
<router-view />
  </div>
</template>

<script>
export default {
  mounted(){
    this.$router.push({
      path:"/index/a1"
    })
  }
}
</script>

<style>

#app{
  height: 100%;
}
</style>
