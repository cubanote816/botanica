<template>
  <v-container fluid grid-list-md>
    <v-layout row xs4>
      <v-flex xs4>
        <v-card gray xs4>
          <v-card-text>
            <product-filter :categories="categories" :sellers="sellers"/>
          </v-card-text>
        </v-card>
      </v-flex>
      <products-list :products_list="product_duplicate"/>
    </v-layout>
  </v-container>
</template>
<script>
import CardLoader from "@/components/shared/CardLoader";
import ProductsList from "@/components/products/ProductsList";
import ProductFilter from "@/components/products/filters/ProductFilter";
import _ from "lodash";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "allProducts",
  components: { ProductsList, CardLoader, ProductFilter },
  data() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      categories: [],
      sellers: [],
      products_list: [],
      product_duplicate: [],
      loading: false
    };
  },
  computed: {
    ...mapGetters(["products"])
  },
  methods: {
    ...mapActions(["fetchProducts"]),

    getAllProducts() {
      this.products_list = this.products;
      this.product_duplicate = this.products;
      // getting all products and getting the uniq value for
      // productCategory and returning the productCategory property only
      this.categories = _.uniqBy(
        _.map(this.products_list, function(object) {
          return _.pick(object, ["productCategory"]);
        }),
        "productCategory"
      );
      this.categories.unshift({ productCategory: "All" });

      this.sellers = _.uniqBy(
        _.map(this.products_list, function(object) {
          return _.pick(object, ["productSeller"]);
        }),
        "productSeller"
      );
      this.sellers.unshift({ productSeller: "All" });
    },

    filterProductBy(event, productFilterID) {
      const productList = [...this.products_list];
      let filteredData = [];
      if (event.target.value !== "All") {
        productList.map(product => {
          if (product[productFilterID] === event.target.value) {
            filteredData.push(product);
          }
        });
        this.product_duplicate = filteredData;
      } else {
        filteredData = productList;

        this.product_duplicate = filteredData;
      }
    }
  },

  created() {
    this.loading = true;
    this.fetchProducts().then(() => {
      this.loading = false;
    });
    this.getAllProducts();    
  }
};
</script>
<style lang="scss">
.products {
  margin-top: 40px;
}
</style>
