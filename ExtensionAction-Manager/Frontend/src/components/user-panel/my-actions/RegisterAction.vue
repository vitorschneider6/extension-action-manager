<template>
    <div class="modal">
        <main>
            <h2>Cadastrar Ação</h2>
            <form @submit.prevent class="wrapper">
                <div>
                    <label for="title">
                        <h4>Título</h4>
                    </label>
                    <input type="text" id="title" v-model="title" placeholder="Descrição..." />
                    <label for="desc">
                        <h4>Descrição</h4>
                    </label>
                    <textarea id="desc" v-model="desc" name="" cols="30" rows="10"></textarea>
                    <h4>Horário</h4>
                    <label for="hour">
                    </label>
                    <input type="text" id="hour" v-model="hour">
                </div>
                <div>
                    <label for="">
                        <h4>Local:</h4>
                    </label> <br>
                    <input type="text" v-model="city">
                </div>
            </form>

            <div class="buttons">
                <button @click="handleApprove">Salvar</button>
                <button @click="handleClose">Fechar</button>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios'
import { auth } from '@/globalState'
export default {
    data() {
        return {
            auth
        }
    },
    methods: {
        handleApprove() {
            const newAction = {
                description: this.desc,
                title: this.title,
                hour: this.hour,
                place: this.city,
                student: sessionStorage.getItem('id')
            }
            axios.post(`http://localhost:3000/actions/`, newAction)
            this.handleClose()
        },

        handleClose() {
            this.$emit("close")
        }
    },
    mounted() {
    }
}
</script>

<style scoped>
.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}

main {
    background-color: #fefefe;
    margin: 7% auto;
    padding: 70px 80px;
    border: 1px solid #888;
    width: 30%;
    height: 50%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.buttons {
    margin-top: 40px;
    display: flex;
    gap: 20px;
}

.buttons button {
    padding: 10px 15px;
    min-width: 150px;
    font-size: 18px;
    border: none;
    border-radius: 50px;
    color: white;
    font-weight: 600;
    cursor: pointer
}

.buttons button:nth-child(1) {
    background-color: green;
}

.buttons button:last-child {
    background-color: grey;
}

.wrapper {
    display: flex;
    gap: 200px;
    margin-top: 60px;
    margin-bottom: 70px;
}

.wrapper div p {
    margin-bottom: 50px;
}

input {
    font-size: 18px;
    margin-bottom: 20px;
}
</style>