<template>
    <main>
        <div class="error" v-if="hasError === true">
            <p>Login ou senha inválidos!</p>
        </div>
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
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
            <base-button>Login</base-button>
            <div class="register-wrapper">
                <p>Não possui cadastro?</p>
                <router-link to="/register"><base-button>Registrar</base-button></router-link>
            </div>
        </form>
    </main>
</template>

<script>
import { auth } from "../../globalState"
import axios from 'axios'
export default {
    data() {
        return {
            auth,
            hasError: false
        }
    },
    methods: {
        handleLogin() {
            const user = {
                email: this.email,
                password: this.password
            }
            axios.post("http://localhost:3000/authenticate", user).then((response) => {
                console.log(response)
                sessionStorage.setItem('token', response.data.token)
                sessionStorage.setItem('role', response.data.data.roles)
                sessionStorage.setItem('id', response.data.data.id)
                console.log(response)
                this.auth.isAuthenticated = true
                this.auth.token = response.data.token
                this.auth.role = response.data.data.roles
                this.auth.id = response.data.data.id
                axios.defaults.headers.common["x-acess-token"] = auth.token;
                console.log(this.auth.role)

                this.$router.push("/");

            }).catch((error) => {
                if (error) {
                    this.hasError = true
                    console.log(error)
                }
            })
        }
    }
}
</script>

<style scoped>
.error {
    padding: 10px;
    background-color: rgb(252, 67, 67);
    font-size: 18px;
    border-radius: 10px;
}

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
    color: white
}

.space {
    margin-right: 20px;
}

.register-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 20px;
    align-items: center;
}
</style>