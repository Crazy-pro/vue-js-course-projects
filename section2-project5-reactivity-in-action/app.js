const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: 'Klimchuk',
      fullName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    name(value) {
      if (value === '') {
        this.fullName = '';
      } else {
        this.fullName = value + ' ' + this.lastName;
      }
    },
    lastName(value) {
      if (value === '') {
        this.fullName = '';
      } else {
        this.fullName = this.name + ' ' + value;
      }
    },
  },
  computed: {
    // fullName(){
    //   console.log("Runnings again...")
    //   if (this.name === "" || this.lastName === "") {
    //     return "";
    //   }
    //   return this.name + " " + this.lastName;
    // }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    outputFullName() {
      console.log('Runnings again...');
      if (this.name == '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
    setName(event) {
      this.name = event.target.value;
    },
    resetInput() {
      this.name = '';
      this.lastName = 'Klimchuk';
    },
  },
});

app.mount('#events');
