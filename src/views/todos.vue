<script>
  export default {
    name: 'view-todos'
  }
</script>

<script setup>
  import { ref } from 'vue'
  import todos from '../lists/todos.js'

  const items = ref( null )
</script>

<template>
  <pre>{{ items }}</pre>
</template>