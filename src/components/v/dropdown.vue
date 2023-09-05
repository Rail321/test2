<script>
  export default {
    name: 'v-dropdown'
  }
</script>

<template>
  <div class="dropdown"
    tabindex="-1"
  >
    <slot/>
  </div>
</template>

<style scoped>
  .dropdown {
    display: inline-block;
  }
  .dropdown:focus-within {
    box-shadow: 0 0 0 0.25rem rgba(13,110,253,.25);
  }
</style>