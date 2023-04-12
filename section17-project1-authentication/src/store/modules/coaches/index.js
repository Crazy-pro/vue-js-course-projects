import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Alex',
          lastName: 'Klimchuk',
          areas: ['Front-End', 'Back-End', 'Career'],
          description:
            "I'm Alex and I've worked as a freelance Web Developer for years. Let me help you become a Developer as well!",
          hourlyRate: 50,
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['Front-End', 'Career'],
          description:
            'I am Julie and as a Senior Software Developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 35,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
