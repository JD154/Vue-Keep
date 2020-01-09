<template>
  <div class="card-wrapper">
    <Card v-for="todo in getTodos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script>
import Card from './Card';

import { mapGetters } from 'vuex'

export default {
  name: 'TodoList',
  components: {
    Card
  },
  computed: {
    ...mapGetters('todos', [
      'getTodos',
    ]),
  },
}
</script>

<style lang="scss" scoped>
  .card-wrapper {
    display: grid;
    grid-gap: $grid-gap;
    grid-template-columns: 1fr 1fr;
  }
</style>