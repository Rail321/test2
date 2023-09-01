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
  <div class="posts">
    <div class="table-outer">
      <table>
        <thead>
          <tr>
            <th class="table-th">
              <span class="text-nowrap">id</span>
            </th>
            <th class="table-th">
              <span class="text-nowrap">user-id</span>
            </th>
            <th class="table-th">
              <span class="text-nowrap">title</span>
            </th>
            <th class="table-th">
              <span class="text-nowrap">body</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="( item, idx ) of items"
            v-bind:key="idx"
          >
            <td class="table-td">
              <span class="text-nowrap">{{ item.id }}</span>
            </td>
            <td class="table-td">
              <span class="text-nowrap">{{ item.userId }}</span>
            </td>
            <td class="table-td">
              <span class="text-nowrap">{{ item.title }}</span>
            </td>
            <td class="table-td">
              <span class="text-nowrap">{{ item.body }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
  .posts {
    padding: 10px;
  }
</style>