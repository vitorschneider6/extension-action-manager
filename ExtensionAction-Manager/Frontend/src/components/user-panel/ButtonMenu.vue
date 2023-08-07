<template>
    <div>
        <router-link :to="permission.route"><base-button @click="handleClick">{{ permission.name
        }}</base-button></router-link>
    </div>
</template>

<script>

import BaseButton from '../UI/BaseButton.vue';
export default {
    props: ['permission'],
    data() {
        return {

        }
    },
    components: {
        BaseButton
    }
}
</script>

<style scoped>
/* div {
    margin: 0 auto;
} */

button {
    max-width: 300px;
    padding: 10px 30px;
    font-size: 24px;
    font-weight: 600;
    border-radius: 15px;

    /* font-family: 'Poppins', sans-serif;
    background-color: #D0D0D0;
    border: 1px solid black;
    cursor: pointer; */
}
</style>