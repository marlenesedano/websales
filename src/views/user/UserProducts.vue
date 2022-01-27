<template>
  <section>
    <h2>Adicionar Produtos</h2>
    <AddProduct />
    <h2>Seus Produtos</h2>
    <transition-group v-if="user_product" name="list" tag="ul">
      <li v-for="(product, index) in user_product" :key="index">
        <ProductItem :product="product">
          <p>{{ product.descricao }}</p>
        </ProductItem>
      </li>
    </transition-group>
    {{ user_product }}
  </section>
</template>

<script>
import AddProduct from "../../components/AddProduct.vue";
import ProductItem from "../../components/ProductItem.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "userProduct",
  components: {
    AddProduct,
    ProductItem,
  },
  computed: {
    ...mapState(["login", "user", "user_product"]),
  },
  methods: {
    ...mapActions(["getUserProduct"]),
  },
  watch: {
    login() {
      this.getUserProduct();
    },
  },
  created() {
    if (this.login) {
      this.getUserProduct();
    }
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
</style>
