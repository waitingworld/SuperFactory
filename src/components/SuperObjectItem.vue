<template>
  <div>
    <div v-for="(name,index) in objects" :key="index">{{name}}</div>
  </div>
</template>

<script>
export default {
  name: "superObjectItem",
  props: {
    objects: Array
  }
}
</script>

<style scoped>

</style>