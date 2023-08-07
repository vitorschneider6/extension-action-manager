<template>
    <main>
        <div class="error" v-if="error">
            <p>Campos inválidos</p>
        </div>
        <h1>Cadastro</h1>
        <form @submit.prevent="handleRegister">
            <div class="input-wrapper">
                <label for="first-name">Primeiro Nome:</label>
                <br>
                <input type="text" id="first-name" v-model="firstName">
            </div>
            <div class="input-wrapper">
                <label for="second-name">Sobrenome:</label>
                <br>
                <input type="text" id="second-name" v-model="lastName">
            </div>
            <div class="input-wrapper">
                <label for="email">E-mail:</label>
                <br>
                <input type="text" id="email" v-model="email">
            </div>
            <div class="input-wrapper">
                <label for="password">Senha:</label>
                <br>
                <input type="password" id="password" v-model="password">
            </div>

            <div class="radio">

                <input type="radio" name="type" value="servidor" id="servidor" v-model="picked">
                <label for="servidor" class="space">Servidor</label>
                <input type="radio" name="type" value="estudante" id="estudante" v-model="picked">
                <label for="estudante" class="space">Estudante</label>
                <input type="radio" name="type" value="comunidade" id="comunidade" v-model="picked">
                <label for="comunidade">Comunidade</label>
            </div>
            <div class="matricula" v-if="picked === 'estudante'">
                <label for="registration">Matrícula</label>
                <br>
                <input type="text" v-model="registration">
            </div>
            <base-button>Cadastrar</base-button>


        </form>
    </main>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            picked: "",
            error: false
        }
    },
    methods: {
        handleRegister() {
            const newUser = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                roles: this.picked
            }
            axios.post("http://localhost:3000/users", newUser).then(() => {

            }).catch(() => {
                this.error = true
            })
            this.firstName = ""
            this.lastName = ""
            this.email = ""
            this.password = ""
            this.picked = ""
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 50px;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    gap: 40px;
}

form {
    display: grid;
    gap: 20px;
}

input {
    font-size: 26px;
    border-radius: 10px;
    border: none
}

label {
    font-size: 18px;
    margin-left: 10px;
    color: white;
}

.radio label {
    color: black
}

.space {
    margin-right: 20px;
}

.error {
    padding: 10px;
    background-color: rgb(252, 67, 67);
    font-size: 18px;
    border-radius: 10px;
}
</style>