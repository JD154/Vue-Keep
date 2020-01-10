<template>
  <div class="app">
    <div class="container">
      <div class="logo-wrapper">
        <img class="user-thumbnail" src="../assets/images/user-default.png" alt="default user">
        <p class="logo">Vue <span class="logo-contrast">Keep</span></p>
      </div>
      <div class="urgent-tasks">
        <div class="flex-header">
          <div>
            <h6 class="section-title">My top</h6>
            <p class="section-subtitle">Priority tasks</p>
          </div>
        </div>
        <TodoTop/>
      </div>
      <div class="all-tasks">
        <div class="flex-header">
          <div>
            <h6 class="section-title">My list</h6>
            <p class="section-subtitle"><span>{{todayTodos}} new</span> tasks today</p>
          </div>
          <NewTaskModal/>
        </div>
        <TodoList/>
      </div>
    </div>
  </div>
</template>

<script>
import TodoTop from '../components/TodoTop';
import TodoList from '../components/TodoList';
import NewTaskModal from '../components/NewTaskModal';

import { mapGetters } from 'vuex';

export default {
  name: 'index',
  components: {
    TodoTop,
    TodoList,
    NewTaskModal,
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
    ...mapGetters('todos', [
      'todayTodos',
    ]),
  },
}
</script>

<style lang="scss">

  .app {
    min-height: 100vh;
    padding-bottom: 56px;
    position: relative;
  }

  .container {
    height: 100%;
    padding: $main-padding;
  }

  .user-thumbnail {
    width: 40px;
    height: 40px;
  }

  .logo-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .logo {
    vertical-align: sub;
    font-size: 1.7rem;
    font-weight: 400;
    margin: 0;

    span {
      font-weight: bold;
    }
  }

  .section-subtitle {
    span {
      color: $primary-default;
      font-weight: 400;
    }
  }

  .flex-header {
    margin-top: 30px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>

