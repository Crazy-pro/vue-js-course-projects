const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: 'Klimchuk',
      confirmedName: '',
    };
  },

  methods: {
    add(num) {
      this.counter = this.counter + num;
      //this.counter++;
    },
    reduce(num) {
      this.counter = this.counter - num;
      //this.counter--;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted!');
    },
  },
});

app.mount('#events');
