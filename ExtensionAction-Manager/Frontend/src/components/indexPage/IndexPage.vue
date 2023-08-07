<template>
    <main>
        <div>
            <h2>O que são atividades?</h2>
            <div class="text-wrapper">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maxime dolore quos sapiente suscipit
                    delectus
                    in
                    vitae
                    unde excepturi sed blanditiis, fugiat distinctio. Temporibus vel provident cum soluta quas fugiat.Esse
                    maxime dolore quos sapiente suscipit delectus
                    in
                    vitae
                    unde excepturi sed blanditiis, fugiat distinctio.</p>
                <router-link to="/acoes"><base-button>Visualizar Atividades</base-button></router-link>
            </div>
        </div>
        <div class="accepted-sugestions">
            <h3>Lista de Sugestões aceitas:</h3>
            <ul>
                <li>Desenvolvimento em Delphi</li>
                <li>Aula de Python</li>
                <li>Aula de Mandarim</li>
            </ul>
        </div>
    </main>
</template>

<script>
export default {

}
</script>

<style scoped>
main {
    margin: 250px auto 0 120px;
    width: 1400px;
    display: flex;
    gap: 200px;
    align-items: center;
}

h2 {
    font-size: 58px;
    color: white;
}

p {
    font-size: 20px;
    color: white;
}

.text-wrapper p {
    margin-bottom: 40px;
    max-width: 850px;
}


.accepted-sugestions h3 {
    font-size: 36px;
}

.accepted-sugestions li {
    font-size: 18px;
}
</style>