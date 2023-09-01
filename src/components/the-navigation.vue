<template>
  <ul>
    <li>
      <router-link to="/todos">
        <span>todos</span>
      </router-link>
    </li>
    <li>
      <router-link to="/posts">
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