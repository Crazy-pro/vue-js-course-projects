const app = Vue.createApp({
  data() {
    return {
      textA: 'Your Message',
      textB: 'Your Message',
      confirmedInput: 'Your Message',
    };
  },

  methods: {
    showMessage() {
      alert('Button is pressed!');
    },
    setMessageA(event, messageA) {
      this.textA = event.target.value + ' ' + messageA;
    },
    setMessageB(event, messageB) {
      this.textB = event.target.value + ' ' + messageB;
    },
    confirmInput() {
      this.confirmedInput = this.textB;
    },
  },
});

app.mount('#assignment');
