<script>
  export default {
    name: 'view-users'
  }
</script>

<script setup>
  import { ref } from 'vue'
  import posts from '../lists/posts'

  const items = ref( null )

  const get = () => {
    posts.get()
      .then( r => r.json() )
      .then( d => (
        items.value = d
      ) )
  }

  get()
</script>

<template>
  <pre>{{ items }}</pre>
</template>