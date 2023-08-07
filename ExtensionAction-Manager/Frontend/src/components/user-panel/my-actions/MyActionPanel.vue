<template>
    <div class="action-wrapper">
        <div class="action-content">
            <h2>{{ action.title }}</h2>
            <p>{{ action.hour }}</p>
            <p>{{ action.status }}</p>
            <div v-if="action.status !== reformular" @click="handleViewDetails">
                <base-button>Editar</base-button>
            </div>
        </div>
    </div>

    <my-action-modal :action="action" v-if="isModalOpen" @close="closeModal"></my-action-modal>
</template>

<script>
import MyActionModal from './MyActionModal.vue';
import { useRouter } from 'vue-router';
export default {
    components: {
        MyActionModal
    },
    data() {
        return {
            router: useRouter(),
            isModalOpen: false
        }

    },
    props: ["action"],
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
.action-wrapper {
    max-width: 80%;
    padding: 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    border-radius: 15px;
}


.action-content {
    display: flex;
    align-items: center;
    gap: 300px;
}

ul {
    list-style: none;
    margin-top: 50px;
}

p {
    text-transform: capitalize;

}
</style>