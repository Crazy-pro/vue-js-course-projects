<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  computed: {
    didAutoLogOut() {
      return this.$store.getters.didAutoLogOut;
    },
  },
  created() {
    this.$store.dispatch('autoLogIn');
  },
  watch: {
    didAutoLogOut(currentValue, oldValue) {
      if (currentValue && currentValue !== oldValue) {
        this.$router.replace('/coaches');
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-enter-acive {
  transition: all 0.3s ease-out;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.route-leave-acive {
  transition: all 0.3s ease-in;
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
