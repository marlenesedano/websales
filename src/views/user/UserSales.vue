<template>
  <section v-if="sales">
    <h2>Vendas</h2>
    <div class="product-wrapper" v-for="(sales, index) in sales" :key="index">
      <ProductItem v-if="sales.product" :product="sales.product">
        <p class="seller">
          <span>Comprador(a)r: {{ sales.buyer_id }}</span>
        </p>
      </ProductItem>
      <div class="delivery">
        <h3>Entrega:</h3>
        <ul v-if="sales.adress">
          <li v-for="(value, key) in sales.adress" :key="key">
            {{ key }} : {{ value }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import ProductItem from "../../components/ProductItem.vue";
import { api } from "../../services.js";
export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      sales: null,
    };
  },
  computed: {
    ...mapState(["user", "login"]),
  },
  methods: {
    getSales() {
      api.get(`/transacao?usuario_id=${this.user.id}`).then((response) => {
        this.sales = response.data;
      });
    },
  },
  watch: {
    login() {
      this.getSales();
    },
  },
  created() {
    if (this.login) {
      this.getSales();
    }
  },
};
</script>

<style scoped>
.product-wrapper {
  margin-bottom: 40px;
}

.seller {
  color: #e80;
}

h2 {
  margin-bottom: 20px;
}

.delivery {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  margin-bottom: 60px;
}

h3 {
  margin: 0px;
  justify-self: end;
}
</style>
