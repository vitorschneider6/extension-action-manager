<template>
    <lateral-menu></lateral-menu>
    <div v-if="actions.length > 0">
        <base-button @click="switchRegisterModal">Cadastrar ação</base-button>
        <h1>Minhas Ações</h1>
        <div class="name-wrapper">
            <h4>Título</h4>
            <h4>Hora</h4>
            <h4>Status</h4>
        </div>

        <my-action v-for="action in actions" :key="action._id" :action="action">
        </my-action>
    </div>
    <div v-else class="nothing">
        <h2>Não há nada aqui. <br>
            Deseja cadastrar alguma Ação?
        </h2>
        <base-button @click="switchRegisterModal">Cadastrar Ação</base-button>
    </div>
    <register-action v-if="isRegisterOpen" @close="switchRegisterModal"></register-action>
</template>

<script>
import axios from 'axios'
import MyAction from './MyActionPanel.vue'
import LateralMenu from '../LateralMenu.vue'
import RegisterAction from "./RegisterAction.vue"
export default {
    data() {
        return {
            isModalOpen: false,
            isRegisterOpen: false,
            actions: []
        }
    },
    components: {
        MyAction,
        LateralMenu,
        RegisterAction

    },
    methods: {
        getActivities() {
            axios.get(`http://localhost:3000/actions/64a328b05e22849045685ce3`).then((response) => {
                this.actions = response.data
            }).catch(() => {

            })
        },
        switchModal() {
            this.isModalOpen = !this.isModalOpen
        },
        switchRegisterModal() {
            this.isRegisterOpen = !this.isRegisterOpen
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
    gap: 320px
}

.nothing {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}

.nothing h2 {
    font-size: 30px;
}

button {
    font-size: 18px;
}
</style>