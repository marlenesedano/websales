<template>
  <section>
    <h1>Crie a sua conta</h1>
    <transition mode="out-in">
      <button v-if="!create" class="btn create" @click="create = true">
        Criar conta
      </button>
      <UserForm v-else>
        <button class="btn btn-form">Criar Usuário</button>
      </UserForm>
    </transition>
  </section>
</template>

<script>
import UserForm from "../components/UserForm.vue";

export default {
  name: "CreateLogin",
  components: {
    UserForm,
  },
  data() {
    return {
      create: false,
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 15px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.btn-form {
  max-width: 100%;
}
</style>
