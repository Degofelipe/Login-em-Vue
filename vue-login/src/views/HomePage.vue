<template>
    <v-app>
        <v-navigation-drawer class="menu" v-model="drawer" app>
            <ul class="menuList">
                <li class="itemList"><a href="https://github.com/Degofelipe">Github</a></li>
                <li class="itemList"><a
                        href="https://www.linkedin.com/in/diego-felipe-dos-santos-745887215/">Linkedin</a></li>
                <li class="itemList"><a href="https://instagram.com/dego_felipe?utm_medium=copy_link">Instagram</a></li>
            </ul>

        </v-navigation-drawer>

        <v-app-bar class="v-app-bar" app>
            <v-btn @click="drawer = !drawer">Menu</v-btn>

            <v-toolbar-title class="title">Teste Menu</v-toolbar-title>

            <v-btn @click="logout">Sair</v-btn>
        </v-app-bar>

        <v-main class="mainContainer">
            <!--  -->
        </v-main>
    </v-app>
</template>

<script>


    export default {
        data: () => ({ drawer: null }),

        methods: {

            logout() {
                this.$router.push({ name: "/" });
                localStorage.removeItem('token')
            }
        }
    }

</script>
<style>
    .mainContainer{
   background-image: url('../assets/código-do-javascript-no-software-suporte-programador-typing-new-lines-html-112936678.jpg');
   background-size: cover;
 }
    .v-toolbar__content {
        align-items: center;
        display: flex;
        justify-content: space-between;
        position: relative;
        background-color: rgb(6, 17, 70);
    }

    .menuList {
        padding-top: 30px;
        background-color: rgb(191, 191, 240);
        height: 100vh;
    }
    .menu{

    }

    .itemList {
        margin-top: 20px;
        list-style-type: none;

    }

    .itemList a {
        text-decoration: none;

    }

    .v-application a:hover {
        color: rgb(9, 21, 190);
    }

</style>