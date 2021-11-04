<template>

    <div class="container">
      <div class="section">
        <h2>Faça o login</h2>
        <v-form ref="form">
          <v-text-field
            label="Email:"
            id="email"
            type="email"
            placeholder="dego@email.com"
            autocomplete="off"
            v-model="email"
          ></v-text-field>
          <v-text-field
            label="Senha:"
            id="password"
            type="password"
            placeholder="Digite aqui a sua senha"
            v-model="password"
          ></v-text-field>

          <v-btn type="button" class="btn-entrar" @click="login">Entrar</v-btn>

          <v-btn type="button" class="btn-cadastrar" @click="goToRegister">
            Cadastrar-se
          </v-btn>
        </v-form>
      </div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async login() {
      let listaUser = [];

      let userValid = {
        name: "",
        email: "",
        password: "",
      };

      listaUser = JSON.parse(localStorage.getItem("listaUser"));

      listaUser.forEach((item) => {
        if (this.email == item.email && this.password == item.password) {
          userValid = {
            name: item.name,
            email: item.email,
            password: item.password,
          };
        }
      });
      console.log(userValid);

      if (
        this.email == userValid.email &&
        this.password == userValid.password
      ) {
        this.$router.push({ name: "homepage" });

        let token =
          Math.random().toString(16).substring(2) +
          Math.random().toString(16).substring(2);
        localStorage.setItem("token", token);
      } else {
        alert("Usuário e/ou senha incorretos!");
      }
    },

    clearForm() {
      this.form = {
        email: "",
        password: "",
      };
    },

    goToRegister() {
      this.$router.push({ name: "register" });
    },
  },
};
</script>

<style scoped>
.container {
  width: 250px;
  background-color: rgb(160, 185, 202);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 70px;
}

.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
}
.btn-entrar {
  margin-bottom: 10px;
}
</style>