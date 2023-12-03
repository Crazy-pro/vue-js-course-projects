const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 1,
          name: 'Alex Klimchuk',
          phone: '+48-555-777-999',
          email: 'mymail@gmail.com',
        },
        {
          id: 2,
          name: 'Andrew Spilberg',
          phone: '+48-555-777-999',
          email: 'mymail@gmail.com',
        },
        {
          id: 3,
          name: 'Maks Bot',
          phone: '+48-555-777-999',
          email: 'mymail@gmail.com',
        },
        {
          id: 4,
          name: 'Don Speedrun',
          phone: '+48-555-777-999',
          email: 'mymail@gmail.com',
        },
      ],
    };
  },
});

app.component('friend-contact', {
  props: ['friend'],
  template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">
            {{detailsAreVisible ? 'Hide': 'Show'}} Details
          </button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong>{{ friend.phone }}</li>
            <li><strong>Email: </strong>{{ friend.email }}</li>
          </ul>
        </li>`,
  data() {
    return {
      detailsAreVisible: true,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount('#app');
