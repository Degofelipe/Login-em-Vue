<template>
  <v-app>
    <router-view />
    <div class="container-title" v-if="notIsLoginPage">
      <h1 class="title">Teste Diego</h1>
      <v-btn class="btn-login" @click="goToLogin">Login</v-btn>
    </div>

  </v-app>
</template>

<script>

  export default {

  computed: {
    notIsLoginPage() {
      return this.$route.name !== "login" && this.$route.name !== "register" && this.$route.name !== "homepage";
    }
  },
  methods:{
    goToLogin() {
      this.$router.push({ name: "login" });
    },
  }

}

</script>

<style>
 #app{
   background-image: url('./assets/plano-de-fundo-texturizado-em-aquarela-azul-claro_53876-103486.jpg');
   background-size: cover;
 }
.container-title{
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(36, 166, 226, 0.479);
  justify-content: space-between;
}

.title{
  color: rgb(11, 50, 100);
  margin-left: 30px;
}

.btn-login{
  margin-right: 30px;
}
</style>
