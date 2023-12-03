<template>
  <form>
    <h2>Name: {{ username }}</h2>
    <h3>Age: {{ userage }}</h3>
  </form>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    userage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    submitData() {
      this.$emit('save-data', this.enteredName, this.enteredAge);
    },
  },
};
</script>
