const app = Vue.createApp({
  data() {
    return {
      firstName: 'Aliaksandr Klimchuk',
      myAge: 25,
      imageUrl:
        'https://www.shutterstock.com/image-vector/creation-responsive-internet-website-multiple-600w-1199480788.jpg',
    };
  },

  methods: {
    showAge() {
      return this.myAge;
    },
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount('#assignment');
