<template>
    <div @click="handleViewDetails" class="user-wrapper">
        <div class="user-content">
            <h2>{{ user.firstName }} {{ user.lastName }}</h2>
            <h3>{{ user.roles }}</h3>
            <h4>{{ user.active ? "Ativo" : "Inativo" }}</h4>
        </div>
    </div>

    <user-modal :user="user" v-if="isModalOpen" @close="closeModal"></user-modal>
</template>

<script>
import UserModal from './UserModal.vue';
import { useRouter } from 'vue-router';
export default {
    components: {
        UserModal
    },
    data() {
        return {
            router: useRouter(),
            isModalOpen: false
        }

    },
    props: ["user"],
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
.user-wrapper {
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


.user-content {
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

h2 {
    text-transform: capitalize;
}
</style>