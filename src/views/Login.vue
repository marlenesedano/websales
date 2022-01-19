<template>
  <section class="login">
    <form>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />
      <label for="password">Senha</label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="login.password"
      />
      <button class="btn" @click.prevent="logar">Logar</button>
    </form>
    <p class="lost">
      <a href="/" target="_black">Esqueceu a senha? Clique aqui</a>
    </p>
    <CreateLogin />
  </section>
</template>

<script>
import CreateLogin from "../components/CreateLogin.vue";
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style></style>
