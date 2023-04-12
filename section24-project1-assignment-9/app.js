const app = Vue.createApp({
    data() {
        return {
            name: 'Alex',
            age: 25,
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg'
        }
    },
    methods: {
        generateRandomNum() {
            return Math.random();
        }
    }
});

app.mount('#exercise');