<template>
    <div @click="handleViewDetails" class="activity-wrapper">

        <div class="activity-content">
            <h2>{{ activity.title }}</h2>
            <p>{{ activity.hour }}</p>
            <p>{{ activity.status }}</p>
        </div>
    </div>

    <activity-modal :acao="activity" v-if="isModalOpen" @close="closeModal"></activity-modal>
</template>

<script>
import ActivityModal from './ActivityModal.vue';
import { useRouter } from 'vue-router';
export default {
    components: {
        ActivityModal
    },
    data() {
        return {
            router: useRouter(),
            isModalOpen: false
        }

    },
    props: ["activity"],
    methods: {
        handleViewDetails() {
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        }
    }

}
</script>

<style scoped>
.activity-wrapper {
    max-width: 80%;
    padding: 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    border-radius: 15px;
    cursor: pointer;
}


.activity-content {
    display: flex;
    align-items: center;
    gap: 300px;
}

ul {
    list-style: none;
    margin-top: 50px;
}

p:last-child {
    text-transform: capitalize;

}
</style>