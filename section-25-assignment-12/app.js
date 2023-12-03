const app = Vue.createApp({
  data() {
    return {
      effectClasses: {
        highlight: false,
        shrink: true
      },
      float: 'float',
      userClass: '',
      isVisible: true,
      myStyle: {
        width: '100px',
        height: '150px',
        backgroundColor: 'gray'
      },
      progressBar: {
        width: '0px',
        backgroundColor: 'red'
      }
    }
  },
  methods: {
    startEffect() {
      let object = this;
      setInterval(function () {
        object.effectClasses.highlight = !object.effectClasses.highlight;
        object.effectClasses.shrink = !object.effectClasses.shrink;
      }, 1000);
    },
    startProgress() {
      let object = this;
      let width = 0;

      setInterval(function () {
        width = width + 10;
        object.progressBar.width = width + 'px';
      }, 500);
    }
  }
});

app.mount("#exercise");