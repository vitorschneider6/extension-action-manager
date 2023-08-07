<template>
    <div class="modal">
        <main>
            <h2>{{ acao.title }}</h2>
            <div class="wrapper">
                <div>
                    <h4>Descrição</h4>
                    <p>{{ acao.description }}</p>
                    <h4>Hora</h4>
                    <p>{{ acao.hour }}</p>
                </div>
                <div>
                    <h4>Lugar</h4>
                    <p>{{ acao.place }}</p>
                    <h4>Nome do Estudante:</h4>
                    <p>{{ user.firstName }} {{ user.lastName }}</p>
                </div>
            </div>

            <div class="buttons">
                <button @click="handleApprove">Aprovar</button>
                <button @click="handleDeny">Negar</button>
                <button @click="handleReform">Reformular</button>
                <button @click="handleClose">Fechar</button>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ["acao"],
    data() {
        return {
            user: {}
        }
    },
    methods: {
        pickUserData() {
            axios.get(`http://localhost:3000/users/${this.acao.student}`).then((response) => {
                this.user = response.data
            })
        },
        handleApprove() {
            axios.put(`http://localhost:3000/actions/${this.acao._id}`, {
                status: "aceita"
            })
            this.handleClose()
        },
        handleDeny() {
            axios.put(`http://localhost:3000/actions/${this.acao._id}`, {
                status: "negado"
            })
            this.handleClose()
        },
        handleReform() {
            axios.put(`http://localhost:3000/actions/${this.acao._id}`, {
                status: "reformular"
            })
            this.handleClose()
        },

        handleClose() {
            this.$emit("close")
        }
    },
    mounted() {
        this.pickUserData()
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

.buttons button:nth-child(2) {
    background-color: red;
}

.buttons button:nth-child(3) {
    background-color: #ffba30;
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