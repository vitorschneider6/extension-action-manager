<template>
    <lateral-menu></lateral-menu>
    <div v-if="activities.length > 0">
        <h1>Gerenciar Ações</h1>
        <div class="name-wrapper">
            <h4>Título</h4>
            <h4>Hora</h4>
            <h4>Status</h4>
        </div>

        <activity-item v-for="activity in activities" :key="activity._id" :activity="activity">
        </activity-item>
    </div>
    <div class="nothing" v-else>
        <h2>Ops... Não há nada aqui.</h2>
    </div>
</template>

<script>
import axios from 'axios'
import ActivityItem from './ActivityItemPanel.vue'
import LateralMenu from '../LateralMenu.vue'

export default {
    data() {
        return {
            isModalOpen: true,
            activities: []
        }
    },
    components: {
        ActivityItem,
        LateralMenu
    },
    methods: {
        getActivities() {
            axios.get("http://localhost:3000/actions/admin/all").then((response) => {
                this.activities = response.data;
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
    gap: 350px
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
</style>