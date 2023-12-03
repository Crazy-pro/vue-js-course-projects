const app = Vue.createApp({
    data() {
        return {
            value: 'Some message here!'
        }
    },
    methods: {
        showAlert() {
            alert('Some alert message here!');
        }
    }
});

app.mount('#exercise');