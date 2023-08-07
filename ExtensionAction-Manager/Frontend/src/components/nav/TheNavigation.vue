<template>
    <header>

        <div class="logado" v-if="auth.isAuthenticated">
            <router-link to="/">
                <h1>Logo</h1>
            </router-link>
            <nav>
                <ul>
                    <li>
                        <router-link to="/">Página Inicial</router-link>
                    </li>
                    <li>
                        <router-link to="/acoes">Ações</router-link>
                    </li>
                    <li>
                        <router-link to="/painel">Painel</router-link>
                    </li>
                    <li>
                        <router-link to="/account">Minha Conta</router-link>
                    </li>

                </ul>
            </nav>
            <div class="profile-wrapper">
                <ul>
                    <router-link to="/">
                        <li><base-button @click="logout">Logout</base-button></li>
                    </router-link>
                </ul>
            </div>
        </div>
        <div class="deslogado" v-else>
            <router-link to="/">
                <h1>Logo</h1>
            </router-link>
            <nav>
                <ul>
                    <li>
                        <router-link to="/">Página Inicial</router-link>
                    </li>
                    <li>
                        <router-link to="/acoes">Ações</router-link>
                    </li>


                </ul>
            </nav>
            <div class="profile-wrapper">
                <ul>
                    <router-link to="/login">
                        <li><base-button>Login</base-button></li>
                    </router-link>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import { auth } from "../../globalState"
export default {
    data() {
        return {
            auth
        }
    },
    methods: {
        logout() {
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('role')
            // sessionStorage.removeItem('id')
            this.auth.token = null;
            this.auth.id = null;
            this.auth.isAuthenticated = false;
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.logado,
.deslogado {
    display: flex;
    justify-content: space-between;
    padding: 20px 35px;
    align-items: center;
    background-color: #036B85;
}

ul {
    list-style: none;
    display: flex;
    gap: 35px;
}

ul li {
    font-size: 20px;
}

.profile-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

a {
    text-decoration: none;
    color: white;
    font-weight: bold;
}

a.router-link-active {
    color: #7cfebb;
}

h1 {
    color: black
}
</style>