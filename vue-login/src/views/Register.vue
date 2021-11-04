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

      >
      </v-text-field>

      <v-text-field
        v-model="email"
        label="Email"
        id="email"
        type="email"
        placeholder="dego@email.com"
        autocomplete="off"


      ></v-text-field>

      <v-text-field
        label="Senha:"
        id="password"
        type="password"
        placeholder="Digite aqui a sua senha"
        v-model="password"


      ></v-text-field>

      <v-text-field
        label="Confirme sua senha:"
        id="confirmPassword"
        type="password"
        placeholder="Digite aqui a sua senha"
        v-model="confirmPassword"
        :state="getValidation('confirmPassword')"
        required
      ></v-text-field>

      <v-btn class="btn-cadastrar" type="button" @click="cadastrar">Cadastrar</v-btn>
      <hr />
      <v-btn type="button" @click="goToLogin">Voltar</v-btn>
    </v-form>
  </div>
</div>
</template>

<script>

  import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
  import ToastMixin from "../mixins/toastMixin.js";

export default {

  mixins: [ToastMixin],

  data() {
    return {
        name: '',
        email: '',
        password: '',
        confirmPassword:'',
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
        sameAsPassword: sameAs('password')
      }
    },
  },



  methods: {

    cadastrar(){
      let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
          {
            name: this.name,
            email: this.email,
            password: this.password
          }
        );
      localStorage.setItem('listaUser', JSON.stringify(listaUser));
      alert("Usuário cadastrado com sucesso");
      this.goToLogin();
    },

    getValidation(field) {
      if (this.form === "") {
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
.body-container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.container-register {
  width: 250px;
  height: 470px;
  padding: 20px;
  background-color: rgb(160, 185, 202);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;

}
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
}
.btn-cadastrar{
  margin-bottom: 10px;
}
</style>