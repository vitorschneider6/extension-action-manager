<template>
    <div class="modal">
        <main>
            <form @submit.prevent class="wrapper">
                <div>
                    <label for="name">
                        <h4>Nome</h4>
                    </label>
                    <input type="text" id="name" v-model="name" />
                    <label for="email">
                        <h4>E-mail</h4>
                    </label>
                    <input type="text" id="email" v-model="email" />
                    <h4>Senha</h4>
                    <label for="senha">
                    </label>
                    <input type="password" id="password" v-model="password">
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
export default {
    props: ["user"],
    data() {
        return {
        }
    },
    methods: {
        handleApprove() {
            const updatedUser = {
                firstName: this.name,
                email: this.email,
                password: this.password,
            }
            axios.put(`http://localhost:3000/users/${this.user}`, updatedUser)
            console.log(this.user)
            this.handleClose()
        },

        handleClose() {
            this.$emit("close")
        }
    },

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