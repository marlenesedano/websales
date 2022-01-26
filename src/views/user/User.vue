<template>
  <section class="user">
    <nav class="sidnavi">
      <ul>
        <li>
          <router-link :to="{ name: 'user' }">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'sales' }">Compras</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'purchase' }">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'user-edit' }">Editar Usuário</router-link>
        </li>
        <li>
          <button @click.prevent="logOut">Deslogar</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "User",
  methods: {
    logOut() {
      this.$store.dispatch("logOutUser");
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
