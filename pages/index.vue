<template>
  <div class="app">
    <div class="container">
      <AppLogo/>
      <div class="urgent-tasks">
        <h6 class="section-title">My top</h6>
        <p class="section-subtitle">Priority tasks</p>
        <TodoUrgent/>
      </div>
      <div class="all-tasks">
        <h6 class="section-title">My list</h6>
        <p class="section-subtitle"><span>{{todayTodos}} new</span> tasks today</p>
        <TodoList/>
        <div class="btn-wrapper">
          <button class="btn loadmore-btn">Load more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from '../components/AppLogo';
import TodoUrgent from '../components/TodoUrgent';
import TodoList from '../components/TodoList';

import { mapGetters } from 'vuex';

export default {
  name: 'index',
  components: {
    AppLogo,
    TodoUrgent,
    TodoList
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

  .section-title {
    font-size: 24px;
  }

  .section-subtitle {
    font-size: 14px;
    margin-bottom: 20px;

    span {
      color: $primary-default;
      font-weight: 700;
    }
  }

  .urgent-tasks, .all-tasks {
    margin-top: 30px;
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
  }

  .btn {
    padding: 10px 15px;
    margin: 15px auto;
  }

  .loadmore-btn {
    background-color: $primary-default;
    color: #ffffff;
  }
</style>

