<template>
  <div class="body-container">
    <div class="container-register">
      <h2>Faça o seu cadastro</h2>
      <v-form class="section">
        <v-text-field
          v-model="name"
          label="Nome"
          id="name"
          type="text"
          placeholder="Digite seu nome"
          autocomplete="off"
          :rules="[(v) => !!v || 'Campo obrigatório']"
          required
        >
        </v-text-field>

        <v-text-field
          v-model="email"
          label="Email"
          id="email"
          type="email"
          placeholder="dego@email.com"
          autocomplete="off"
          :rules="[ (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)|| 'Formato inválido']"
          required
        ></v-text-field>

        <v-text-field
          label="Senha:"
          id="password"
          type="password"
          placeholder="Digite aqui a sua senha"
          v-model="password"
          :rules="[(v) => !!v || 'Campo obrigatório']"
          required
        ></v-text-field>

        <v-text-field
          label="Confirme sua senha:"
          id="confirmPassword"
          type="password"
          placeholder="Digite aqui a sua senha"
          v-model="confirmPassword"
          :rules="[(v) => !!v || 'Campo obrigatório']"
          required
        ></v-text-field>

        <v-btn class="btn-cadastrar" type="button" @click="cadastrar"
          >Cadastrar</v-btn
        >
        <hr />
        <v-btn type="button" @click="goToLogin">Voltar</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },

  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
      },

      email: {
        required,
        email,
      },

      password: {
        required,
        minLength: minLength(6),
      },

      confirmPassword: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },

  methods: {
    cadastrar() {
      let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

      if (this.name == null || this.name == "" &&
      this.email == null || this.email == "" &&
      this.password == null || this.password == "" &&
      this.confirmPassword == null || this.confirmPassword == "") {
        alert("Preencher todos os campos");
      }else{
      listaUser.push({
        name: this.name,
        email: this.email,
        password: this.password,
      });
      localStorage.setItem("listaUser", JSON.stringify(listaUser));
      alert("Usuário cadastrado com sucesso");
      this.goToLogin();
      }
    },

    getValidation(field) {
      if (this.email === "") {
        return null;
      }

      return !this.$v.form[field].$error;
    },

    goToLogin() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>
.body-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.container-register {
  width: 250px;
  height: 470px;
  padding: 20px;
  background-color: rgba(85, 136, 170, 0.425);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  border-radius: 10px;
}
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
}
.btn-cadastrar {
  margin-bottom: 10px;
}
</style>