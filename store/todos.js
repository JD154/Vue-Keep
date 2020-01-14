import axios from 'axios';
import moment from 'moment';

export const state = () => ({
  todos: [
    {
      id: 0,
      date: moment().format("MMM Do YY"),
      task: 'hola',
      description: 'hola mundo',
      done: false,
      isUrgent: false,
    },
    {
      id: 1,
      date: moment().format("MMM Do YY"),
      task: 'hola',
      description: 'hola mundo',
      done: false,
      isUrgent: true,
    },
    {
      id: 2,
      date: moment().format("MMM Do YY"),
      task: 'hola',
      description: 'hola mundo',
      done: false,
      isUrgent: true,
    },
    {
      id: 3,
      date: moment().format("MMM Do YY"),
      task: 'hola',
      description: 'hola mundo',
      done: false,
      isUrgent: true,
    },
    {
      id: 4,
      date: moment().format("MMM Do YY"),
      task: 'hola',
      description: 'hola mundo',
      done: false,
      isUrgent: false,
    },
    {
      id: 5,
      date: moment().format("MMM Do YY"),
      task: 'hola',
      description: 'hola mundo',
      done: false,
      isUrgent: false,
    },
  ],
});

export const actions = {
  async addTodo({ commit }, todo) {
    commit('COMMIT_TODO', todo);
  },

  async doneTask({ commit }, payload){
    commit('COMMIT_DONE', payload);
  }
};

export const mutations = {
  COMMIT_TODO: (state, todo) => state.todos.push(todo),

  COMMIT_DONE: (state, payload) => {
    
    state.todos[payload.key1].done = payload.key2;
    console.log(payload.key2 + payload.key1);
  },
};

export const getters = {
  getTodos: state => {
    return state.todos;
  },
  doneTodos: state => {
    return state.todos.filter(todo => todo.done);
  },
  countTodos: state => {
    return state.todos.length;
  },
  todayTodos: state => {
    let utc = moment().format("MMM Do YY");
    return state.todos.filter(todo => todo.date === utc && todo.isUrgent != true).length;
  },
  getUrgentTodos: state => {
    return state.todos.filter(todo => todo.isUrgent && todo.done != true);
  },
  getLastTodoID: state => {
    return state.todos.length - 1;
  }
};