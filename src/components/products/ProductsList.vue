<template>
  <v-flex layout row wrap>
    <card-loader :loopCount="4" v-if="loading"/>

    <v-flex d-flex pa-2 xs12 sm6 md3 v-for="(item, index) in products_list" :key="index">
      <v-layout row wrap>
        <v-flex d-flex>
          <card-template :item="item"/>
        </v-flex>
      </v-layout>
    </v-flex>
    <edit-product ref="editProduct"/>
  </v-flex>
</template>


<script>
import axios from "axios";
import CardLoader from "@/components/shared/CardLoader";
import CardTemplate from "../shared/CardTemplate";
import EditProduct from "./actions/EditProduct";
export default {
  name: "productslist",
  props: ["products_list"],
  components: { CardTemplate, EditProduct },
  data() {
    return {
      selectedProduct: Object,
      loading: false
    };
  },
  methods: {
    //manadatory function called from cardTemplate while onClick 'edit'
    editProduct(product) {
      // this.will pass the product to the editProduct to bind with Product Object
      this.$refs.editProduct.setProduct(product);
    }
  },
  mounted() {}
};
</script>
