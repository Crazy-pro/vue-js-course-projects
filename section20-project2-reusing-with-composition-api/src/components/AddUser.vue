<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<script>
import { ref } from 'vue'
import UserAlert from './UserAlert.vue';
import useAlert from '../hooks/alert';

export default {
  components: {
    UserAlert,
  },
  setup() {
    const alertTitle = ref('Add a User?');

    const [alertIsVisible, showAlert, hideAlert] = useAlert(true);

    return { alertIsVisible, showAlert, hideAlert, alertTitle }
  }
}
</script>