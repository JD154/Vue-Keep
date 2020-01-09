<template>
  <div class="scrollable-wrapper">
    <Card v-for="todo in getUrgentTodos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script>
import Card from './Card';

import { mapGetters } from 'vuex'

export default {
  name: 'TodoUrgent',
  components: {
    Card
  },
  computed: {
    ...mapGetters('todos', [
      'getUrgentTodos'
    ])
  }
}
</script>

<style lang="scss" scoped>

  .scrollable-wrapper {
    display: grid;
    grid-gap: $grid-gap;
    grid-auto-flow: column;
    grid-auto-columns: calc(50% - 20px);
    overflow-x: auto;
    padding: 2px 0;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;

    &::-webkit-scrollbar {
      display: none; 
    }
  }
</style>