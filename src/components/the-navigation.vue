<template>
  <ul class="bg-primary">
    <li>
      <router-link class="text-light" to="/todos">
        <span>todos</span>
      </router-link>
    </li>
    <li>
      <router-link class="text-light" to="/posts">
        <span>posts</span>
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    padding: 10px;
  }
</style>