const app = Vue.createApp({
    data() {
        return {
            value: 0
        }
    },
    computed: {
        result() {
            return this.value == 37 ? 'done' : 'not there yet';
        }
    },
    watch: {
        result() {
            let object = this;
            setTimeout(() => object.value = 0, 5000);
        }
    }
});

app.mount('#exercise');