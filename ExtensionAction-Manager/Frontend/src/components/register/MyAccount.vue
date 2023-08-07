<template>
    <h1>Minha conta</h1>
    <div class="info">
        <div class="esquerda">
            <h2>Nome</h2>
            <p>{{ user.firstName }} {{ user.lastName }}</p>
            <h2>Tipo:</h2>
            <p>{{ user.roles }}</p>

        </div>
        <div class="direita">
            <h2>E-mail</h2>
            <p>{{ user.email }}</p>
        </div>
    </div>
    <div class="botao">
        <base-button @click="switchModal">Editar</base-button>
    </div>
    <account-modal @close="switchModal" :user="teste" v-if="isModalOpen"></account-modal>
</template>

<script>
import { auth } from '@/globalState';
import axios from 'axios';
import AccountModal from './AccountModal.vue';
export default {
    data() {
        return {
            isModalOpen: false,
            id: auth.id,
            user: {},
            teste: sessionStorage.getItem('id')
        }
    },
    methods: {
        loadInfo() {
            axios.get(`http://localhost:3000/users/${sessionStorage.getItem('id')}`).then((response) => {
                this.user = response.data
            })
        },
        switchModal() {
            this.isModalOpen = !this.isModalOpen
        }
    },
    mounted() {
        this.loadInfo()
    },
    components: {
        AccountModal
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    font-size: 40px;
    margin-top: 100px;
}

.info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 200px 400px;
}

h2 {
    margin-top: 40px;
    font-size: 30px;
}

p {
    font-size: 22px;
}

.botao {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>