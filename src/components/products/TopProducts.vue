<template>
  <v-flex layout row wrap>
    <card-loader :loopCount='4' v-if='loading'/>

    <v-flex d-flex pa-2 xs12 sm6 md3 v-for='(item, index) in topProducts' :key='index'>
      <v-layout row wrap>
        <v-flex d-flex>
          <card-template :item='item'/>
        </v-flex>
      </v-layout>
    </v-flex>
    <edit-product ref='editProduct'/>
  </v-flex>
</template>

<script>
import { errorToaster } from "../shared/service/ErrorHandler";
import CardLoader from "../shared/CardLoader";
import CardTemplate from "../shared/CardTemplate";
import EditProduct from "./actions/EditProduct";
export default {
  name: "TopProducts",
  components: { CardLoader, CardTemplate, EditProduct },
  data() {
    return {
      topProducts: [],
      loading: false
    };
  },
  methods: {
    //manadatory function called from cardTemplate
    editProduct(product) {
      this.$refs.editProduct.setProduct(product);
    },

    getTopProducts() {
      this.loading = true;
      if (this.topProducts) {
        this.loading = false;
        return (this.topProducts = API.getBestProducts(6));
      }
    }
  },
  created() {
    this.getTopProducts();
  }
};
</script>
