import axios from 'axios';

export const state = () => ({
  weeklyStats: [
    {
      title: 'Created tasks',
      data: 15,
    },
    {
      title: 'Best day',
      data: 'Mon',
    },
    {
      title: 'Completed tasks',
      data: 13,
    },
    {
      title: 'Missing tasks',
      data: 12,
    }
  ]
});

export const mutations = {
  
};

export const actions = {

};

export const getters = {
  getWeeklyStats: state => {
    return state.weeklyStats;
  },
};