<template>
  <div>
    
    <v-flex grid-list-md v-if="flagSearch === false">
      <v-layout row wrap>
        <best-products></best-products>
      </v-layout>
    </v-flex>

    <v-flex grid-list-md>
      <v-layout row wrap>
        <cat-products :products="productsList"></cat-products>
      </v-layout>
    </v-flex>
    <div class="section" v-if="productsList.length === 0">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs6 justify-center>
            <h1>Oops!</h1>
            <h2>{{ noProductLabel }}</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import { getByTitle } from "@/components/products/filters/filters";
import BestProducts from "@/components/products/BestProducts.vue";
import CatProducts from "@/components/products/CatProducts.vue";
import { mapActions, mapGetters, mapStates } from "vuex";
import _ from "lodash";
export default {
  name: "shop",
  components: {
    BestProducts,
    CatProducts
    //   TopProducts
  },

  data() {
    return {
      loading: false,
      id: "",
      noProductLabel: "No product found",
      productsFiltered: [],
      flagSearch: false,
    };
  },

  computed: {
    ...mapGetters(["products"]),
    // ...mapStates("userInfo"),
    productsList() {
      if (this.$store.state.userInfo.hasSearched) {
        this.flagSearch = true;
        return this.getProductByTitle();
      } else {
        this.flagSearch = false;
        return this.products;
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
