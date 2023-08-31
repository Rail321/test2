<script>
  export default {
    name: 'App'
  }
</script>

<script setup>
  import { ref } from 'vue'
  
  const todos = ref( {
    list: [],
    get() {
      fetch( 'https://jsonplaceholder.typicode.com' + '/todos' + '?' + ( new URLSearchParams( {
        _sort: 'id',
        _order: 'desc',
        _limit: 1,
        _page: 2,
        userId: 9,
        completed: false
      } ) ) )
        .then( r => r.json() )
        .then( d => ( this.list = d ) )
    }
  } )

  todos.value.get()
</script>

<template>
  <pre>{{ todos.list }}</pre>
</template>