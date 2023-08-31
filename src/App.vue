<script>
  export default {
    name: 'App'
  }
</script>

<template>
  <div>
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
    <router-view />
  </div>
</template>