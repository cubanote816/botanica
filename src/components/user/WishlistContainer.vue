<template>
  <section>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex>
          <h3 class="title">{{ pageTitle }}</h3>
          <v-flex layout row wrap>
            <card-loader :loopCount="4" v-if="loading"/>
            <v-flex d-flex pa-2 xs12 sm6 md3 v-for="(item) in productsInWishlist" :key="item.id">
              <v-layout row wrap>
                <v-flex d-flex>
                  <card-template :item="item"/>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex v-if="productsInWishlist.length === 0">
              <p>{{ noProductLabel }}</p>
            </v-flex>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import CardLoader from "../shared/CardLoader";
import CardTemplate from "../shared/CardTemplate";
import { getByTitle } from "@/components/products/filters/filters";
// import { mapGetters } from "vuex";

export default {
  name: "wishlist-container-component",
  data() {
    return {
      pageTitle: "Your Wishlist",
      noProductLabel: "Your wishlist is empty"
    };
  },

  components: {
    CardTemplate,
    CardLoader
  },

  computed: {
    // ...mapGetters("productsAddedToFavourite"),
    productsInWishlist() {
      if (this.$store.state.userInfo.hasSearched) {
        return this.getProductByTitle();
      } else {
        return this.$store.getters.productsAddedToFavourite;
      }
    }
  },

  methods: {
    getProductByTitle() {
      let listOfProducts = this.$store.getters.productsAddedToFavourite,
        titleSearched = this.$store.state.userInfo.productTitleSearched;

      return (this.productsFiltered = getByTitle(
        listOfProducts,
        titleSearched
      ));
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin: 10px;
}
</style>


