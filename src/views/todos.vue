<script>
  export default {
    name: 'view-todos'
  }
</script>

<script setup>
  import axios from 'axios'

  const items = {
    list: [],
    get( options ) {
      return (
        new Promise( resolve => {
          axios.get( 'https://jsonplaceholder.typicode.com/todos', options )
            .then( d => ( this.list = d.data ) )
            .then( resolve )
        } )
      )
    }
  }

  const filter = {
    params: {
      _sort: 'id',
      _order: 'desc',
      _limit: 5,
      _page: 2,
      userId: 9,
      completed: false
    }
  }

  items.get( filter )
    .then( () => console.log( items.list ) )
</script>

<template>
</template>