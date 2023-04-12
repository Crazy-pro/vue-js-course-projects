<template>
  <form @submit.prevent="submitData">
    <input type="text" placeholder="Enter your name" v-model="enteredName" />
    <input type="text" placeholder="Enter your age" v-model="enteredAge" />
    <button type="submit">Set User Data</button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      enteredName: '',
      enteredAge: '',
    };
  },
  methods: {
    submitData() {
      this.$emit('save-data', this.enteredName, this.enteredAge);
    },
  },
};
</script>
