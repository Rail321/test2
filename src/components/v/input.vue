<script>
  export default {
    name: 'v-input'
  };
</script>

<script setup>
  import { defineProps, defineEmits } from 'vue';

  defineProps( [ 'modelValue' ] );

  const emit = defineEmits( [ 'update:modelValue' ] );

  const onInput = e => {
    const value = e.target.value
    emit( 'update:modelValue', value )
  };
</script>

<template>
  <input class="form-control"
    v-bind:value="modelValue"
    v-on:input="onInput"
  />
</template>

<style>
</style>