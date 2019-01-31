<template>
  <v-flex layout row wrap>
    <v-flex v-for="group, productCategory in groups">
      <v-card class="flex" flat tile>
            <v-card-title class="teal">
              <strong class="subheading white--text">{{productCategory}}</strong>

              <v-spacer></v-spacer>

              <router-link class="white--text" to="/shop/products">Show All</router-link>
            </v-card-title>
          </v-card>
      <v-layout row wrap>
          <card-loader :loopCount="4" v-if="loading"/>

        <v-flex d-flex xs12 sm6 md3 pa-4 v-for="item in group">
          <card-template :item="item"/>
        </v-flex>
      </v-layout>
    </v-flex>
    <edit-product ref="editProduct"/>
  </v-flex>
</template>

<script>
import { errorToaster } from "../shared/service/ErrorHandler";
import CardLoader from "../shared/CardLoader";
import CardTemplate from "../shared/CardTemplate";
import EditProduct from "./actions/EditProduct";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "BestProducts",
  components: { CardLoader, CardTemplate, EditProduct },
  props: ["products"],
  data() {
    return {
      loading: false,
      product: null
    };
  },

  computed: {
    // ...mapGetters(["products"]),

    groups() {
      return _.groupBy(this.$props.products, "productCategory");
    }
  },

  // methods: {
    // ...mapActions(["fetchProducts"]),
    //manadatory function called from cardTemplate
    // editProduct(product) {
    //   this.$refs.editProduct.setProduct(product);
    // },
  // },

  // created() {
  //   this.loading = true;
  //   this.fetchProducts().then(() => {
  //     this.loading = false;
  //   });
  // }
};
</script>
