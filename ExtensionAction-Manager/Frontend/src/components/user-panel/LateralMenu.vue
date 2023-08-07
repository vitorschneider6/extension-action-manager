<template>
    <div class="lateral-menu">
        <button-menu v-for="permission in permissions[role]" :permission="permission" :key="permission.id"></button-menu>
    </div>
</template>

<script>
import { auth } from '@/globalState';
import ButtonMenu from './ButtonMenu.vue';
export default {
    data() {
        return {
            permissions: {
                "servidor": [
                    {
                        id: 1,
                        name: "Gerenciar Ações",
                        route: "/painel/manage-actions"
                    },
                    {
                        id: 2,
                        name: "Cadastros",
                        route: "/painel/manage-accounts"
                    },
                ],
                "estudante":
                    [
                        {
                            id: 3,
                            name: "Minhas Ações",
                            route: "/painel/my-actions"
                        },

                    ],
                "comunidade":
                    [
                        {
                            id: 4,
                            name: "Minhas sugestões",
                            route: "/painel/sugestoes"
                        }
                    ]
            },
            role: auth.role
        }
    },
    components: {
        ButtonMenu
    }
}
</script>

<style scoped>
.lateral-menu {
    margin: 40px auto 50px auto;
    display: flex;
    gap: 20px;
    justify-content: center;
}
</style>