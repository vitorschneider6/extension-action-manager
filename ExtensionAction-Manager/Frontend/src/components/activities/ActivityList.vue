<template>
    <div class="sugest">
        <p>Não achou o que procura?</p>
        <base-button @click="switchModal">Sugerir ação</base-button>
    </div>
    <div v-if="activities.length > 0">
        <h1>Ações de Extensão</h1>
        <activity-item v-for="activity in activities" :key="activity._id" :activity="activity" />
    </div>
    <div class="nothing" v-else>
        <h2>Ops... Não há nada aqui.</h2>
        <base-button @click="switchModal">Sugerir ação</base-button>
    </div>

    <sugest-modal @close="switchModal" v-if="isModalOpen"></sugest-modal>
</template>

<script>
import axios from 'axios'
import ActivityItem from './ActivityItem.vue'
import BaseButton from '../UI/BaseButton.vue'
import sugestModal from './sugestModal.vue'


export default {
    data() {
        return {
            activities: [],
            isModalOpen: false
        }
    },
    components: {
        ActivityItem,
        BaseButton,
        sugestModal
    },
    methods: {
        getActivities() {
            axios.get("http://localhost:3000/actions").then((response) => {
                this.activities = response.data;
            })
        },
        switchModal() {
            this.isModalOpen = !this.isModalOpen
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

.sugest {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    gap: 10px;
    margin-right: 50px;
    margin-top: 30px;
}

.sugest p {
    font-size: 18px;
    font-weight: 600;
}

button {
    font-size: 16px;
}
</style>