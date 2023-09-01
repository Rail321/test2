<script>
  export default {
    name: 'App'
  }
</script>

<script setup>
  import TheNavigation from './components/the-navigation.vue'
</script>

<template>
  <div>
    <the-navigation />
    <router-view />
  </div>
</template>

<style>
  /* RESET */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
  }
  ul, ol {
    list-style: none;
  }

  /* INITIAL */
  table {
    border-collapse: collapse;
  }
  table, th, td {
    border: 1px solid black
  }
  a {
    color: #0D6EFD;
  }

  /* FONTS */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
  }

  /* CUSTOM */
  /* TABLE */
  .table-outer {
    overflow: hidden;
    overflow-x: auto;
  }
  .table-outer::-webkit-scrollbar {
    display: none;
  }
  .table-td, .table-th {
    padding: 5px 10px;
  }
  .table-th {
    text-align: left;
  }

  /* UTILS */
  .text-nowrap {
    white-space: nowrap;
  }
</style>