<template>
  <section v-if="purchase">
    <h2>Compras</h2>
    <div
      class="product-wrapper"
      v-for="(purchase, index) in purchase"
      :key="index"
    >
      <ProductItem v-if="purchase.product" :product="purchase.product">
        <p class="seller">
          <span>Vendedo(a)r: {{ purchase.seller_id }}</span>
        </p>
      </ProductItem>
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
      purchase: null,
    };
  },
  computed: {
    ...mapState(["user", "login"]),
  },
  methods: {
    getPurchase() {
      api.get(`/transacao?buyer_id=${this.user.id}`).then((response) => {
        this.purchase = response.data;
      });
    },
  },
  watch: {
    login() {
      this.getPurchase();
    },
  },
  created() {
    if (this.login) {
      this.getPurchase();
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
</style>
