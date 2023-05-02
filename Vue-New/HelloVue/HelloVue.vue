<template lang="html">
  <button @click="count++">Count is: {{ count }}</button>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style lang="css">
  button {
    font-weight: bold;
  }
</style>

<div id="app">
    {{message}}

</div>
