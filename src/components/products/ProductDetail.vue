<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md5>
        <v-layout row wrap justify-center>
          <v-flex d-flex>
            <v-img :src="product.productImage" contain :aspect-ratio="16/9"></v-img>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm6 md7>
        <v-list two-line>
          <template>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title class="title">{{product.productName}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile class="grey--text font-weight-light caption">
              <v-list-tile-content>
                <v-list-tile-title>
                  <p>{{product.productDescription}}</p>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>
                  <strong>&dollar; {{ product.productPrice }}</strong>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>
                  <v-icon v-if="product.ratings === 1">mdi-star</v-icon>
                  <v-icon v-if="product.ratings === 2">mdi-star</v-icon>
                  <v-icon v-if="product.ratings === 2">mdi-star</v-icon>
                  <v-icon v-if="product.ratings === 3">mdi-star</v-icon>
                  <v-icon v-if="product.ratings === 3">mdi-star</v-icon>
                  <v-icon v-if="product.ratings === 3">mdi-star</v-icon>
                  <v-icon v-if="product.ratings === 4">mdi-star</v-icon>
                  <v-icon v-if="product.ratings === 4">mdi-star</v-icon>
                  <v-icon v-if="product.ratings === 4">mdi-star</v-icon>
                  <v-icon v-if="product.ratings === 4">mdi-star</v-icon>
                  <v-icon v-if="product.ratings === 5">mdi-star</v-icon>
                  <v-icon v-if="product.ratings === 5">mdi-star</v-icon>
                  <v-icon v-if="product.ratings === 5">mdi-star</v-icon>
                  <v-icon v-if="product.ratings === 5">mdi-star</v-icon>
                  <v-icon v-if="product.ratings === 5">mdi-star</v-icon>
                </v-list-tile-title>
                <v-list-tile-title>
                  <p>{{ product.reviews > 0 ? `${product.reviews} Reviews` : 'No reviews' }}</p>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-space-around>
      <v-flex flex xs4>
        <v-btn color="indigo" v-if="!isAddedBtn" @click="addToCart(product.id)">{{addToCartLabel}}</v-btn>
        <v-btn
          color="warning"
          v-if="isAddedBtn"
          @click="removeFromCart(product.id)"
        >{{removeFromCartLabel}}</v-btn>
            
      </v-flex>
      <v-flex xs4>
        <!-- <v-select @change="onSelectQuantity(product.id)" v-model="selected" :items="quantityArray"></v-select> -->
      </v-flex>
      <v-flex xs4>
        <v-btn
          class="button is-small"
          v-show="product.isFavourite"
          :title="removeFromFavouriteLabel"
          @click="removeFromFavourite(product.id)"
        >
          <span class="icon is-small">
            <i class="fas fa-heart"></i>
          </span>
        </v-btn>
        <v-btn
          fab
          v-show="!product.isFavourite"
          small
          dark
          color="purple"
          :title="addToFavouriteLabel"
          @click="saveToFavorite(product.id)"
        >
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "product",
  data() {
    return {
      loading: false,
      addToCartLabel: "Add to cart",
      removeFromCartLabel: "Remove from cart",
      addToFavouriteLabel: "Add to favourite",
      removeFromFavouriteLabel: "Remove from favourite",
      product: {},
      selected: 1,
      quantityArray: []
    };
  },

  // mounted () {
  //   this.product = this.product;
  //   this.selected = this.product.quantity;

  //   for (let i = 1; i <= 20; i++) {
  //     this.quantityArray.push(i);
  //   }
  // },

  computed: {
    isAddedBtn() {
      return this.product.isAddedBtn;
    },
    ...mapGetters(["productDetail"]),
    id() {
      return this.$route.params.id;
    },
  },

  methods: {
    ...mapActions(["fetchProductById"]),
    addToCart(id) {
      let data = {
        id: id,
        status: true
      };
      this.$store.commit("addToCart", id);
      this.$store.commit("setAddedBtn", data);
    },
    removeFromCart(id) {
      let data = {
        id: id,
        status: false
      };
      this.$store.commit("removeFromCart", id);
      this.$store.commit("setAddedBtn", data);
    },
    onSelectQuantity(id) {
      let data = {
        id: id,
        quantity: this.selected
      };
      this.$store.commit("quantity", data);
    },
    saveToFavorite(id) {
      let isUserLogged = this.$store.state.userInfo.isLoggedIn;

      if (isUserLogged) {
        this.$store.commit("addToFavourite", id);
      } else {
        this.$store.commit("showLoginModal", true);
      }
    },
    removeFromFavourite(id) {
      this.$store.commit("removeFromFavourite", id);
    }
  },

  created() {
    this.loading = true;
    this.fetchProductById(this.id).then(() => {
      this.product = this.productDetail;
      this.selected = this.product.quantity;
      this.loading = false;
    });
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }
    // const starTotal = 5;
    // const starPercentage =
    //   (Number(this.product.productRating) / starTotal) * 100;
    // // 3
    // const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    // // 4
    // document.querySelector(`.stars-inner`).style.width = starPercentageRounded;

    // Getting Similar Product
  }
};
</script>

<style>
</style>
