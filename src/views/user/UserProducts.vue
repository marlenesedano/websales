<template>
  <section>
    <h2>Adicionar Produtos</h2>
    <AddProduct />
    <h2>Seus Produtos</h2>
    <transition-group v-if="user_product" name="list" tag="ul">
      <li v-for="(product, index) in user_product" :key="index">
        <ProductItem :product="product">
          <p>{{ product.descricao }}</p>
          <button class="delete" @click="deleteProduct(product.id)">
            Deletar
          </button>
        </ProductItem>
      </li>
    </transition-group>
    {{ user_product }}
  </section>
</template>

<script>
import AddProduct from "../../components/AddProduct.vue";
import ProductItem from "../../components/ProductItem.vue";
import { api } from "../../services";
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
    deleteProduct(id) {
      const confirm = window.confirm("Deseja Remover esse produto?");
      if (confirm) {
        api
          .delete(`/produto/${id}`)
          .then(() => {
            this.getUserProduct();
          })
          .catch((error) => {
            console.log(error.response);
          });
      }
    },
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

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px), 0, 0;
}

.list-enter-active,
.list-enter-active {
  transition: all 0.3s;
}

.delete {
  position: absolute;
  top: 0px;
  right: 0px;
  background: url("../../assets/remove.svg") no-repeat center center;
  width: 24px;
  height: 24px;
  text-indent: -140px;
  overflow: hidden;
  cursor: pointer;
  border: none;
}
</style>
