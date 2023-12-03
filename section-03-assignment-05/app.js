const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTaskName: '',
      tasksIsVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.tasksIsVisible ? 'Hide Tasks' : 'Show Tasks';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskName);
    },
    removeTask(id) {
      this.tasks.splice(id, 1);
    },
    toggleTasks() {
      this.tasksIsVisible = !this.tasksIsVisible;
    },
  },
});

app.mount('#assignment');
