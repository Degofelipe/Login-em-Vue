<template>
  <div class="container">
    <div class="section">
      <h2>Faça o login</h2>
      <v-form ref="form">
        <v-text-field
          label="Email?"
          id="email"
          type="email"
          placeholder="dego@email.com"
          autocomplete="off"
          v-model.trim="$v.form.email.$model"
        ></v-text-field>
        <v-text-field
          label="Senha:"
          id="password"
          type="password"
          placeholder="Digite aqui a sua senha"
          v-model.trim="$v.form.password.$model"
        ></v-text-field>

        <v-btn type="button" class="btn" @click="login">Entrar</v-btn>

        <v-btn type="button" class="btn" @click="goToRegister">
          Não tenho conta
        </v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import UsersModel from "@/models/UsersModel";
import ToastMixin from "@/mixins/toastMixin.js";

export default {
  mixins: [ToastMixin],

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  validations: {
    form: {
      email: {
        required,
        email,
      },

      password: {
        required,
        minLength: minLength(6),
      },
    },
  },

  methods: {
    async login() {
      this.$v.$touch();
      if (this.$v.$error) return;

      let user = await UsersModel.params({ email: this.form.email }).get();

      if (!user || !user[0] || !user[0].email) {
        alert("Usuário e/ou senha incorretos");
        this.clearForm();
        return;
      }
      user = user[0];
      if (user.password !== this.form.password) {
        alert("Usuário e/ou senha incorretos");
        this.clearForm();
        return;
      }

      localStorage.setItem("authUser", JSON.stringify(user));
      this.$router.push({ name: "homepage" });
    },

    clearForm() {
      this.form = {
        email: "",
        password: "",
      };
    },

    getValidation(field) {
      if (this.$v.form.$dirty === false) {
        return null;
      }

      return !this.$v.form[field].$error;
    },

    goToRegister() {
      this.$router.push({ name: "register" });
    },
  },
};
</script>

<style scoped>
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