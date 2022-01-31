<template>
  <form class="add-product">
    <label for="name">Nome</label>
    <input id="name" name="name" type="text" v-model="product.nome" />
    <label for="price">Preço R$</label>
    <input id="price" name="preco" type="number" v-model="product.preco" />
    <label for="photo">Fotos</label>
    <input id="photo" name="photo" type="file" ref="foto" />
    <label for="description">Descrição</label>
    <textarea
      id="description"
      name="descricao"
      type="text"
      v-model="product.descricao"
    ></textarea>
    <input
      class="btn"
      type="button"
      value="Adicionar Produto"
      @click.prevent="addProduct"
    />
  </form>
</template>

<script>
import { api } from "../services.js";
export default {
  name: "AddProduct",
  data() {
    return {
      product: {
        nome: "",
        preco: "",
        descricao: "",
        fotos: null,
      },
    };
  },
  methods: {
    formatProduct() {
      this.product.usuario_id = this.$store.state.user.id;
    },
    addProduct() {
      this.formatProduct();
      api.post("/produto", this.product).then(() => {
        this.$store.dispatch("getUserProduct");
      });
    },
  },
};
</script>

<style scoped>
.add-product {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
}
</style>
