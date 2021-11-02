<template>
  <div id="app">
    <router-view />
    <div class="container-title" v-if="notIsLoginPage">
      <h1 class="title">Teste Diego</h1>
      <button class="btn-login" @click="goToLogin">Login</button>
    </div>
  </div>
</template>

<script>
  export default {
  computed: {
    notIsLoginPage() {
      return this.$route.name !== "login" && this.$route.name !== "register" && this.$route.name !== "homepage";
    }
  },

  methods: {
    logout() {
      localStorage.removeItem('authUser');
      this.$router.push({name: "login"});
    },
    goToLogin() {
      this.$router.push({ name: "login" });
    },
  }
}

</script>

<style>
.container-title{
display: flex;
justify-content: space-between;
align-items: center;
background-color: rgb(161, 172, 169);
}

.title{
  color: rgb(61, 61, 61);
  margin-left: 30px;
  padding-top: 8px;

}
.btn-login{
  display: block;
  margin-right: 30px;
  border-radius: 30px;
  width: 100px;
}
</style>
