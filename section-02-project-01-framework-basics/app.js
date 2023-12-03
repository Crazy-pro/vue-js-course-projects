const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue JS Framework!',
      courseGoalB: '<h2>Master Vue and build amazing apps!</h2>',
      vueLink: 'https://vuemastery.com/',
    };
  },

  methods: {
    randomOutputGoal() {
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount('#user-goal');
