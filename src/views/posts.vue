<script>
  export default {
    name: 'view-users'
  }
</script>

<script setup>
  import axios from 'axios'

  const items = {
    list: [],
    get( options ) {
      return (
        new Promise( resolve => {
          axios.get( 'https://jsonplaceholder.typicode.com/posts', options )
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
      _limit: 1,
      _page: 1,
      userId: 9
    }
  }

  items.get( filter )
    .then( () => console.log( items.list ) )
</script>

<template>
</template>