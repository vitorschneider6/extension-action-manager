<template>
    <div class="modal">

        <form @submit.prevent>
            <div class="formulario">
                <div class="input-wrapper">
                    <div class="input-wrapper">
                        <label for="title">O que precisa?</label> <br>
                        <input type="text" v-model="title">
                    </div>
                    <label for="place">Local:</label> <br>
                    <select name="place" id="place" v-model="city">
                        <option value="Feliz">Feliz</option>
                        <option value="Harmonia">Harmonia</option>
                        <option value="Vale Real">Vale Real</option>
                        <option value="Bom Principio">Bom Princípio</option>
                    </select>
                </div>
                <div class="input-wrapper">
                    <label for="note">Descrição:</label> <br>
                    <textarea name="note" id="note" cols="30" rows="10" v-model="desc"></textarea>

                </div>
                <div class="buttons">
                    <button @click="submitSuggestion">Sugerir</button>
                    <button @click="switchModal">Cancelar</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            isModalOpen: false,
        }

    },
    methods: {
        submitSuggestion() {
            const newSuggestion = {
                title: this.title,
                description: this.desc,
                createUser: sessionStorage.getItem('id')
            }
            axios.post("http://localhost:3000/suggestions", newSuggestion)
            this.switchModal()
        },
        switchModal() {
            this.$emit("close")
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

input,
textarea {
    font-size: 16px;
}
</style>