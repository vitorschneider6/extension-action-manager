<template>
    <main>
        <h1>{{ activity.title }}</h1>
        <div class="content-wrapper">

            <div class="esquerdo">

                <h3>Descrição</h3>
                <p id="description">{{ activity.description }}</p>
            </div>
            <div class="direita">
                <div class="info-space">
                    <h3>Local</h3>
                    <p>{{ activity.place }}</p>
                </div>
                <div class="info-space">
                    <h3>Horário</h3>
                    <p>{{ activity.hour }}</p>
                </div>
            </div>
        </div>
        <div class="botao">
            <button @click="switchModal">Cadastrar Demanda</button>
        </div>
        <div class="modal" v-if="isModalOpen">

            <form @submit.prevent>
                <div class="formulario">
                    <div class="input-wrapper">
                        <label for="place">Local:</label> <br>
                        <select name="place" id="place" v-model="city">
                            <option value="Feliz">Feliz</option>
                            <option value="Harmonia">Harmonia</option>
                            <option value="Vale Real">Vale Real</option>
                            <option value="Bom Principio">Bom Princípio</option>
                        </select>
                    </div>
                    <div class="input-wrapper">
                        <label for="amount">Quantidade de Pessoas:</label> <br>
                        <input type="text" v-model="amount">
                    </div>
                    <div class="input-wrapper">
                        <label for="note">Observação:</label> <br>
                        <textarea name="note" id="note" cols="30" rows="10" v-model="desc"></textarea>

                    </div>
                    <div class="buttons">
                        <button @click="cadastrarDemanda">Cadastrar</button>
                        <button @click="switchModal">Cancelar</button>
                    </div>
                </div>
            </form>
        </div>
    </main>
</template>

<script>

import axios from 'axios'
import { useRoute } from 'vue-router';
export default {
    data() {
        return {
            isModalOpen: false,
            activity: {},
            city: "",
            desc: "",
            amount: ""
        }
    },
    mounted() {
        const router = useRoute();
        axios.get(`http://localhost:3000/actions/user/id/${router.params.id}`).then((response) => {
            this.activity = response.data
        })
    },
    methods: {
        switchModal() {
            this.isModalOpen = !this.isModalOpen;
        },

        cadastrarDemanda() {
            const demand = {
                description: this.desc,
                city: this.city,
                action: this.activity._id,
                amount: this.amount
            }
            axios.post("http://localhost:3000/demands", demand)
            this.desc = ""
            this.city = ""
            this.amount = ""
            this.switchModal()
        }
    }
}

</script>
<style scoped>
.content-wrapper {
    padding: 140px 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

main {
    position: relative;
}

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

form {
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

.formulario {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 0 auto;
}

.buttons {
    margin-top: 40px;
    display: flex;
    gap: 20px;
}

.buttons button {
    padding: 10px 15px;
    min-width: 200px;
    font-size: 18px;
}

.buttons button:last-child {
    background-color: grey;
}

h1 {
    font-size: 45px;
    margin-top: 40px;
    margin-bottom: 30px;
    text-align: center;
    color: #fafafa;
    padding: 10px;
    border: none;
}

p {
    font-size: 18px;
}

h3 {
    font-size: 34px;
}

#description {
    font-size: 22px;
}



.direita {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

button {
    padding: 20px 35px;
    min-width: 350px;
    border-radius: 50px;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    font-size: 16px;
    font-weight: 600;
    background-color: #00CC61;
    border: none;
    color: white;
}

label {
    font-weight: 600;
    font-size: 20px;
    text-align: center;
}
</style>