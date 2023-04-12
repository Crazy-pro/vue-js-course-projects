<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="isVisible">{{ goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleIsVisible()">Toggle goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<!-- <script setup> -->
<!-- 
import { ref } from 'vue'
import { reactive } from 'vue'

const courceData = reactive({
   goal: 'Finish the cource!',
   isVisible: false
})

function toggleIsVisible() {
   courceData.isVisible = !courceData.isVisible;
} 
-->
<!-- </script> -->

<script>
export default {
  data() {
    return {
      goal: 'Finish the cource!',
      isVisible: false
    }
  },
  methods: {
    toggleIsVisible() {
      this.isVisible = !this.isVisible;
    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 3rem;
  text-align: center;
}
</style>