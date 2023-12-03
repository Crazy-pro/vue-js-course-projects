<template>
    <div>
        <h2>{{ userName }}</h2>
        <h3>{{ userAge }}</h3>
    </div>
</template>

<script>
import { computed, inject } from 'vue'

export default {
    props: ['firstName', 'lastName'],
    setup(props, context) {
        const nikName = computed(() => props.firstName + ' ' + props.lastName)

        console.log(context)

        // context.emit();

        const age = inject('userAge')

        return { userName: nikName, userAge: age }
    }
}
</script>

<style scoped></style>