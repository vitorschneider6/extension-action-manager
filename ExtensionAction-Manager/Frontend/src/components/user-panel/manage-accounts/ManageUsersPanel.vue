<template>
    <lateral-menu></lateral-menu>

    <h1>Gerenciar Cadastros</h1>
    <div class="name-wrapper">
        <h4>Nome</h4>
        <h4>Tipo</h4>
        <h4>Status</h4>
    </div>
    <user-item-panel v-for="user in users" :key="user._id" :user="user">
    </user-item-panel>
</template>

<script>
import axios from 'axios'
import UserItemPanel from './UserItemPanel.vue'
import LateralMenu from '../LateralMenu.vue'

export default {
    data() {
        return {
            isModalOpen: true,
            users: []
        }
    },
    components: {
        UserItemPanel,
        LateralMenu
    },
    methods: {
        getActivities() {
            axios.get("http://localhost:3000/users").then((response) => {
                this.users = response.data;
            })
        }
    },
    mounted() {
        this.getActivities();
    }
}
</script>

<style scoped>
h1 {
    font-size: 40px;
    margin: 20px 0 50px 0;
    text-align: center;
}

h4 {
    font-size: 24px;
}

.name-wrapper {
    display: flex;
    justify-content: center;
    gap: 320px;
}
</style>