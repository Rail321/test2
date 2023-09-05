<script setup>
  import { ref } from 'vue'

  const routes = ref( [
    {
      title: 'todos',
      path: '/todos'
    },
    {
      title: 'posts',
      path: '/posts'
    }
  ] )
</script>

<template>
  <ul class="bg-primary">
    <li
      v-for="( route, idx ) of routes"
      v-bind:key="idx"
    >
      <router-link class="text-light"
        v-bind:to="route.path"
      >
        <span>{{ route.title }}</span>
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    padding: 10px;
  }
</style>