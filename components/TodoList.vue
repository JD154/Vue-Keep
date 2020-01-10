<template>
  <div>
    <div class="card-wrapper">
      <TodoCard v-for="todo in limitTodos" :key="todo.id" :todo="todo" :isTop="false"/>
    </div>
    <div class="btn-wrapper">
      <transition name="fade">
        <button v-if="!limitReached" @click="addMoreTodos()" class="btn loadmore-btn">Load more</button>
      </transition>
    </div>
  </div>
</template>

<script>
import TodoCard from './TodoCard';

import { mapGetters } from 'vuex'

export default {
  name: 'TodoList',
  components: {
    TodoCard
  },
  data() {
    return {
      limit: 6,
      limitReached: false,
    }
  },
  methods: {
    addMoreTodos(){
      if (this.limit < this.getTodos.length){
        this.limit += 2;
      }else {
        this.limitReached = true;
      }
      console.log(this.limit);
    },
  },
  computed: {
    ...mapGetters('todos', [
      'getTodos',
    ]),
    limitTodos() {
      return this.limit ? this.getTodos.slice(0, this.limit) : this.getTodos;
    }
  },
}
</script>

<style lang="scss" scoped>
  .card-wrapper {
    display: flex;
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: $grid-gap;
    }
  }
  
  .loadmore-btn {
    background-color: $primary-light;
    color: #ffffff;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>