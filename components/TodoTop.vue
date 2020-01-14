<template>
  <div class="scrollable-wrapper">
    <TodoCard v-for="(todo, index) in getUrgentTodos" :key="index" :todo="todo" :isTop="true"/>
  </div>
</template>

<script>
import TodoCard from './TodoCard';

import { mapGetters } from 'vuex'

export default {
  name: 'TodoTop',
  components: {
    TodoCard
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
    overflow-x: auto;
    padding: 2px 0;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;

    &::-webkit-scrollbar {
      display: none; 
    }
  }
</style>