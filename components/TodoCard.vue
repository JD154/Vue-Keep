<template>
  <div class="card">
    <div class="urgent-todo" v-if="isTop">
      <p class="urgent-hint"></p>
      <p class="micro-text">Ongoing</p>
    </div>
    <div class="card-content">
      <div class="flex-content">
        <div>
          <p class="todo-date micro-text">Created in {{todo.date}} </p>
          <div :class="{'strike-text': taskIsDone}">
            <p class="subtitle-text">{{todo.task}}</p>
            <p v-if="todo.description" class="todo-description tiny-text">{{todo.description}}</p>
          </div>
        </div>
        <div class="action-wrapper" v-if="!isTop">
          <i v-if="!taskIsDone" @click="checkTask" class="task-open material-icons">check_box_outline_blank</i>
          <i v-else @click="checkTask" class="material-icons" :class="{'task-done': taskIsDone}">check_box</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    todo: Object,
    isTop: Boolean,
  },
  data() {
    return {
      taskIsDone: false,
    }
  },
  methods: {
    checkTask() {
      this.taskIsDone = !this.taskIsDone;
    }
  }
}
</script>

<style lang="scss" scoped>
  .card{
    min-width: 190px;
    padding: $main-padding;
    background-color: white;
    border: 2px solid $border-dark;
    border-radius: $border-radius;
    transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
    touch-action: manipulation;
    cursor: pointer;
    
    &:hover, &:active{
      transform: $main-scale;
      border: 2px solid $border-hover;

      .action-wrapper > i {
        transform: scale(1);
      }
    }
  }

  .urgent-todo {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .urgent-hint {
    width: 7px;
    height: 7px;
    margin: 0 10px 0 0;
    border-radius: 50%;
    background-color: #E66A6A;
  }

  .card-content {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;;
  }

  .strike-text{
    text-decoration: line-through;
  }

  .flex-content {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .action-wrapper{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    
    i{
      transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
      transform: scale(0);
      font-size: 30px;
    }

  }

  .task-open {
    color: $border-hover;
  }

  .task-done {
    color: $primary-default;
  }

  .todo-description {
    margin-top: 5px;
  }

  .todo-date {
    margin-bottom: 10px;
    align-self: flex-start;

    i {
      font-size: 14px;
    }
  }
</style>