<template>
  <div class="container">
    <h2>Faça o seu cadastro</h2>
    <v-form class="section">
      <v-text-field
        label="Nome"
        id="name"
        type="text"
        placeholder="Digite seu nome"
        autocomplete="off"
        v-model.trim="$v.form.name.$model"
        :state="getValidation('name')"
      >
      </v-text-field>
      <v-text-field
        label="Email?"
        id="email"
        type="email"
        placeholder="dego@email.com"
        autocomplete="off"
        v-model.trim="$v.form.email.$model"
        :state="getValidation('email')"
      ></v-text-field>
      <v-text-field
        label="Senha:"
        id="password"
        type="password"
        placeholder="Digite aqui a sua senha"
        v-model.trim="$v.form.password.$model"
        :state="getValidation('password')"
      ></v-text-field>
      <v-text-field
        label="Senha:"
        id="confirmPassword"
        type="password"
        placeholder="Digite aqui a sua senha"
        v-model.trim="$v.form.confirmPassword.$model"
        :state="getValidation('confirmPassword')"
      ></v-text-field>
      <v-btn type="button" @click="register">Cadastrar</v-btn>
      <hr />
      <v-btn type="button" @click="goToLogin">Voltar</v-btn>
    </v-form>
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import UsersModel from "@/models/UsersModel";

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
    register() {
      this.$v.$touch();
      if (this.$v.$error) return;

      const user = new UsersModel(this.form);
      user.save();

      alert("Usuário cadastrado com sucesso!");
      this.goToLogin();
    },

    getValidation(field) {
      if (this.$v.form.$dirty === false) {
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
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
}
</style>