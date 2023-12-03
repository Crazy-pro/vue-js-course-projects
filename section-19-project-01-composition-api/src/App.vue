<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName" :age="userAge"></user-data>
    <!-- <button @click="setNewName()">Change Name</button> -->
    <button @click="setNewAge()">Change age</button>
    <div>
      <input type="text" placeholder="First Name" @input="setFirstName()" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName()"> Change Last Name</button>
    </div>
  </section>
</template>

<script setup>
// import { reactive, isRef, isReactive, toRefs } from 'vue';
import { ref, computed, watch, provide, onBeforeMount, onMounted, onBeforeUnmount, onBeforeUpdate, onUpdated, onUnmounted } from 'vue'
import UserData from './components/users/UserData.vue';

const userAge = ref(24)

const firstName = ref('Alex')

const lastName = ref('Klimchuk')

const lastNameInput = ref(null)

// let user = reactive({
//   name: 'Aliaksandr'
// });

// console.log(isRef(userAge));
// console.log(isReactive(user.name));

// const userRefs = toRefs(user);

// function setNewName() {
//   user.name = 'Alex';
// }

provide('userAge', userAge)

const name = computed(() => firstName.value + ' ' + lastName.value)

watch([userAge, name], function (newValues, oldValues) {
  console.log('oldValue: ' + oldValues[0]);
  console.log('newValue: ' + newValues[0]);
  console.log('oldValue: ' + oldValues[1]);
  console.log('newValue: ' + newValues[1]);
})

function setFirstName() {
  firstName.value = event.target.value;
}

function setLastName() {
  lastName.value = lastNameInput.value.value
}

function setNewAge() {
  userAge.value = 32;
}

onBeforeMount(() => {
  console.log('onBeforeMount');
})

onMounted(() => {
  console.log('onMounted');
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
})

onUpdated(() => {
  console.log('onUpdated');
})


onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
})

onUnmounted(() => {
  console.log('onUnmounted')
})

</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>