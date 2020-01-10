import axios from 'axios';

export const state = () => ({
  todos: [
    {
      id: 0,
      date: '2020/01/08',
      task: 'First task',
      description: 'lorem ipsum',
      done: false,
      isUrgent: true
    },
    {
      id: 1,
      date: '2020/01/08',
      task: 'Second task',
      description: 'lorem ipsum',
      done: false,
      isUrgent: false,
    },
    {
      id: 2,
      date: '2020/01/09',
      task: 'Second task',
      description: 'lorem ipsum',
      done: true,
      isUrgent: false,
    },
    {
      id: 3,
      date: '2020/01/09',
      task: 'Second task',
      description: 'lorem ipsum',
      done: false,
      isUrgent: true,
    },
    {
      id: 4,
      date: '2020/01/09',
      task: 'Second task',
      description: 'lorem ipsum',
      done: false,
      isUrgent: true,
    },
    {
      id: 5,
      date: '2020/01/09',
      task: 'Second task',
      description: 'lorem ipsum',
      done: false,
      isUrgent: true,
    },
    {
      id: 6,
      date: '2020/01/09',
      task: 'Second task',
      description: 'lorem ipsum',
      done: false,
      isUrgent: true,
    },
    {
      id: 7,
      date: '2020/01/09',
      task: 'Second task',
      description: 'lorem ipsum',
      done: false,
      isUrgent: false,
    },
    {
      id:8,
      date: '2020/01/09',
      task: 'Second task',
      description: 'lorem ipsum',
      done: false,
      isUrgent: true,
    },
    {
      id: 9,
      date: '2020/01/09',
      task: 'Second task',
      description: 'lorem ipsum',
      done: false,
      isUrgent: false,
    },
    {
      id: 10,
      date: '2020/01/09',
      task: 'Second task',
      description: 'lorem ipsum',
      done: false,
      isUrgent: false,
    },
    {
      id: 11,
      date: '2020/01/09',
      task: 'Second task',
      description: 'lorem ipsum',
      done: false,
      isUrgent: false,
    },
    {
      id: 12,
      date: '2020/01/09',
      task: 'Second task',
      description: 'lorem ipsum',
      done: false,
      isUrgent: false,
    },
    {
      id: 13,
      date: '2020/01/09',
      task: 'Second task',
      description: 'lorem ipsum',
      done: false,
      isUrgent: false,
    },
    {
      id: 14,
      date: '2020/01/09',
      task: 'Second task',
      description: 'lorem ipsum',
      done: false,
      isUrgent: false,
    },
    {
      id: 15,
      date: '2020/01/09',
      task: 'Second task',
      description: 'lorem ipsum',
      done: false,
      isUrgent: false,
    },
    {
      id: 16,
      date: '2020/01/10',
      task: 'Second task',
      description: 'lorem ipsum',
      done: false,
      isUrgent: false,
    },
  ],
});

export const mutations = {
  
};

export const actions = {

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
    let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    return state.todos.filter(todo => todo.date === utc && todo.isUrgent != true).length;
  },
  getUrgentTodos: state => {
    return state.todos.filter(todo => todo.isUrgent && todo.done != true);
  }
};