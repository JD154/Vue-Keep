<template>
  <div>
    <p @click="modalTrigger($event)" class="add-btn"><i class="material-icons">add</i></p>
    <div class="modal-wrapper" :class="{'modal-opened': modalIsOpen}" :style="styleObject">
      <div class="modal-close">
        <i class="material-icons" @click="modalTrigger">close</i>
      </div>
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="section-title">Create new task</h6>
          <p class="section-subtitle">In simple steps</p>
        </div>
        <form @submit.prevent="submitNewTodo()">
          <div class="input-field">
            <label class="tiny-text" for="task">Task</label>
            <input v-model="taskInput" type="text" name="Task" id="task">
          </div>
          <div class="input-field">
            <label class="tiny-text" for="description">Description</label>
            <textarea v-model="descriptionInput" type="text" name="Description" id="description"></textarea>
          </div>
          <div class="input-field checkbox">
            <input v-model="isImportantTask" type="checkbox" name="isUrgent" id="isUrgent">
            <label class="tiny-text" for="isUrgent"><span>Is important?</span></label>
          </div>
          <div class="btn-wrapper">
            <button @click="modalTrigger" type="submit" class="btn">Create new task</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'NewTaskModal',
  data() {
    return {
      taskInput: '',
      descriptionInput: '',
      isImportantTask: false,
      scrollPosition: 0,
      modalIsOpen: false,
      styleObject: {}
    }
  },
  methods: {
    modalTrigger(e) {
      this.modalIsOpen = !this.modalIsOpen;
      
      if (this.modalIsOpen) {
        // getBoundingClientRect function to get click event coordenates relatives to the page
        let rect = e.target.getBoundingClientRect();
        // use transform-origin css property to set open animation based on click coordenates
        this.styleObject.transformOrigin = (window.scrollY + rect.top) + 'px ' + (window.scrollX + rect.left) + 'px';
        // Use a timeout to wait for transition fire up and after set position property
        setTimeout(() => {
          //get vertical scroll offset when opening and save it
          this.scrollPosition = window.scrollY;
          // prevent body from scrolling when modal is open to get a full screen experience
          document.body.style.position = 'fixed';
        }, 300);
      }else {
        // when modal will be closed set original value to body
        document.body.style.position = '';
        // use saved scroll offset to restore scrolled view
        window.scrollTo(0, this.scrollPosition);
      }
    },
    ...mapActions('todos', [
      'addTodo',
    ]),
    submitNewTodo() {
      let newTodo = {
        id: this.getLastTodoID + 1,
        date: moment().format("MMM Do YY"),
        task: this.taskInput,
        description: this.descriptionInput,
        done: false,
        isUrgent: this.isImportantTask,
      }
      this.addTodo(newTodo);
      this.taskInput = '';
      this.descriptionInput = '';
      this.isImportantTask = false;
    }

  },
  computed: {
    ...mapGetters('todos', [
      'getLastTodoID',
    ]),
  },
}
</script>

<style lang="scss" scoped>
  .add-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    margin: 0;
    background-color: $border-dark;
    color: $text-light;
    border-radius: $border-radius;
    transition: all 0.1s cubic-bezier(0.4, 0.0, 0.2, 1);
    cursor: pointer; 

    &:hover {
      color: $primary-default;
    } 
    
    &:active {
      transform: $main-scale;
    }
  }

  .modal-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: $bg-light;
    padding: $main-padding;
    transition: transform 0.4s cubic-bezier(.6, 0, .45, 1.3);
    transform: scale(0);
  }

  .modal-opened {
    z-index: 10;
    transform: scale(1);
  }

  .modal-close {

    i{
      transition: color 0.1s cubic-bezier(0.4, 0.0, 0.2, 1);
      color: $text-dark;
      cursor: pointer;

      &:hover {
        color: $primary-default;
      }
    }
  }

  .modal-content {
    margin-top: 30px;
  }

  .modal-header {
    margin-bottom: 20px;
  }

  .input-field {
    &:not(:last-child) {
      margin-bottom: $grid-gap;
    }

    label {
      margin-bottom: 5px;
    }

    input, textarea{
      border: 2px solid $border-dark;
      transition: border 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);

      &:focus {
        border: 2px solid $primary-light;
        box-shadow: none;
      }

      &:hover {
        border: 2px solid $border-hover;
      }
    }

    textarea {
      height: 125px;
    }
  }

  .checkbox {
    background-color: #ffffff;
    border: 2px solid $border-dark;
    transition: border 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
    padding: 8px 16px;

    input {
      margin-right: 10px;
    }

    label {

      span {
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }
    }
    
  }

</style>