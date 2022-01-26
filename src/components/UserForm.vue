<template>
  <form>
    <label for="name">Nome</label>
    <input type="text" name="name" id="name" v-model="name" />
    <label for="email">Email</label>
    <input type="email" name="email" id="email" v-model="email" />
    <label for="password">Senha</label>
    <input type="password" name="password" id="password" v-model="password" />
    <label for="cep">Cep</label>
    <input type="text" name="cep" id="cep" v-model="cep" />
    <label for="number">Número</label>
    <input type="number" name="number" id="number" v-model="number" />
    <label for="street">Rua</label>
    <input type="text" name="street" id="street" v-model="street" />
    <label for="district">Bairro</label>
    <input type="text" name="district" id="district" v-model="district" />
    <label for="city">City</label>
    <input type="text" name="city" id="city" v-model="city" />
    <label for="state">Estado</label>
    <input type="text" name="state" id="state" v-model="state" />
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "../helpers";
export default {
  computed: {
    ...mapFields({
      fields: [
        "name",
        "email",
        "password",
        "cep",
        "number",
        "street",
        "district",
        "city",
        "state",
      ],
      base: "user",
      mutation: "UPDATE_USER",
    }),
  },
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>
