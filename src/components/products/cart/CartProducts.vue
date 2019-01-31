<template>
  <section>
    <template v-if="cartProducts.length > 0">
      <v-container fluid grid-list-md>
        <v-flex layout row wrap>
          <v-flex xs8 class="hidden-sm-and-down">
            <v-flex layout row wrap>
              <v-flex d-flex pa-2 md6 lg4 v-for="(item, index) in cartProducts" :key="index">
                <v-flex xs4 class>
                  <v-responsive class="text-xs-center">
                    <v-img :src="item.productImage" aspect-ratio="2.75" height="200px"></v-img>
                  </v-responsive>
                </v-flex>
                <v-flex xs8>
                  <p class="subheading grey--text">{{item.productName}}.</p>
                  <v-flex d-flex justify-end align-items-center mt-5>
                    <v-icon color="red" @click="removeProductCart(item.id, item, false)">mdi-cart-off</v-icon>
                  </v-flex>
                </v-flex>
              </v-flex>
            </v-flex>
          </v-flex>
          <v-flex xs12 md4>
            <cart-calculator ref="cartCalculator"></cart-calculator>
          </v-flex>
        </v-flex>
      </v-container>
    </template>
    <template v-else>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs6 justify-center>
            <h1>Oops!</h1>
            <h2>No Products Found</h2>
            <div class="error-details">Your cart is empty</div>
            <div class="error-actions">
              <a class="btn text-white">
                <span class="glyphicon glyphicon-envelope"></span>
                <router-link to="/shop/products">Take me to Products Page</router-link>
              </a>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import CartCalculator from "./CartCalculator";
export default {
  name: "CartProducts",
  components: { CartCalculator },
  data() {
    return {};
  },
  computed: mapGetters(["cartProducts"]),
  methods: {
    /* Resetting the store and localstorage after removing product from cart */
    ...mapMutations(["SET_CART_PRODUCTS"]),

    removeProductCart(id, product) {
      let data = {
        id: id,
        status: false
      };
      this.$store.commit("removeFromCart", id);
      this.$store.commit("setAddedBtn", data);

      const products = JSON.parse(localStorage.getItem("iki-cart"));
      for (let i = 0; i < products.length; i++) {
        if (products[i]._id === product._id) {
          products.splice(i, 1);
        }
      }
      this.SET_CART_PRODUCTS(products);
      localStorage.setItem("iki-cart", JSON.stringify(products));
      this.$refs.cartCalculator.calulateTotalPrice();
    }
  },
  mounted() {}
};
</script>
