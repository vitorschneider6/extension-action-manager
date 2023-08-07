<template>
    <div class="modal">
        <main>
            <h2>{{ suge.title }}</h2>
            <h3>{{ suge.createUser.firstName }}</h3>
            <div class="wrapper">
                <div>
                    <h4>Descrição</h4>
                    <p>{{ suge.description }}</p>
                    <h4>Status</h4>
                    <p>{{ suge.status }}</p>
                </div>
            </div>

            <div class="buttons">
                <button id="desativar" @click="handleInactive">Aceitar</button>
                <button id="ativar" @click="handleActive">Recusar</button>
                <button @click="handleClose">Fechar</button>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ["suge"],
    data() {
        return {
        }
    },
    methods: {
        handleInactive() {
            axios.put(`http://localhost:3000/suggestions/${this.suge._id}`, {
                status: "aceito"
            })
            this.handleClose()
        },
        handleActive() {
            axios.put(`http://localhost:3000/suggestions/${this.suge._id}`, {
                status: "negado"
            })
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
    background-color: green;
}

#ativar {
    background-color: red;
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