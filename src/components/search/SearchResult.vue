<template>
  <section>
    <v-flex grid-list-md>
      <v-layout row wrap>
        <cat-products :products="productsList"></cat-products>
      </v-layout>
    </v-flex>
    <div class="section" v-if="productsList.length === 0 || productsList == undifined">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs6 justify-center>
            <h1>Oops!</h1>
            <h2>{{ noProductLabel }}</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </section>
</template>

<script>
import { getByTitle } from "@/components/products/filters/filters";
import CatProducts from "@/components/products/CatProducts.vue";
import { mapActions, mapGetters, mapStates } from "vuex";
export default {
  data() {
    return {
      id: "",
      noProductLabel: "No product found",
      productsFiltered: [],
      flagSearch: false
    };
  },
  components: {
    CatProducts
  },
  computed: {
    ...mapGetters(["products"]),
    productsList() {
      if (this.$store.state.userInfo.hasSearched) {
        this.flagSearch = true;
        return this.getProductByTitle();
      }else {
        this.flagSearch = false;
      }
    }
  },
  methods: {
    ...mapActions(["fetchProducts"]),
    getProductByTitle() {
      let listOfProducts = this.products,
        titleSearched = this.$store.state.userInfo.productTitleSearched;
      return (this.productsFiltered = getByTitle(
        listOfProducts,
        titleSearched
      ));
    }
  },

  created() {
    this.loading = true;
    this.fetchProducts().then(() => {
      this.loading = false;
    });
  }
};
</script>

<style>
</style>
