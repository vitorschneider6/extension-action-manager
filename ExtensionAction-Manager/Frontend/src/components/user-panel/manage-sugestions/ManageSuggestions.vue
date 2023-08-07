<template>
    <lateral-menu></lateral-menu>

    <h1>Gerenciar Sugestões</h1>
    <div class="name-wrapper">
        <h4>Nome</h4>
        <h4>Status</h4>
    </div>
    <sugestion-panel v-for="suge in sugestions" :key="suge._id" :suge="sugestions">
    </sugestion-panel>
</template>

<script>
import axios from 'axios'
import SugestionPanel from './SugestionPanel.vue'
import LateralMenu from '../LateralMenu.vue'

export default {
    data() {
        return {
            isModalOpen: true,
            sugestions: []
        }
    },
    components: {
        SugestionPanel,
        LateralMenu
    },
    methods: {
        getActivities() {
            axios.get(`http://localhost:3000/suggestions/user/${sessionStorage.getItem('id')}`).then((r) => {
                this.sugestions = r.data
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