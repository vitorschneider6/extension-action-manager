<template>
    <div class="modal">
        <main>
            <h2>{{ user.firstName }} {{ user.lastName }}</h2>
            <div class="wrapper">
                <div>
                    <h4>Email</h4>
                    <p>{{ user.email }}</p>
                    <h4>Status</h4>
                    <p>{{ statusUser ? "Ativo" : "Inativo" }}</p>
                </div>
            </div>

            <div class="buttons">
                <button id="desativar" @click="handleInactive" v-if="statusUser">Desativar</button>
                <button id="ativar" v-else @click="handleActive">Ativar</button>
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
            statusUser: this.user.active
        }
    },
    methods: {
        handleInactive() {
            axios.put(`http://localhost:3000/users/${this.user._id}`, {
                active: false
            })
            this.handleClose()
        },
        handleActive() {
            axios.put(`http://localhost:3000/users/${this.user._id}`, {
                active: true
            })
            console.log(this.statusUser)
            this.handleClose()
        },

        handleClose() {
            this.$emit("close")
        }
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

#desativar {
    background-color: red;
}

#ativar {
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
</style>