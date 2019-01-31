<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto black--text"
      width="344"
    >
      <v-responsive class="pt-2 text-xs-center">
        <v-img
          :src="item.productImage"
          contain
          :aspect-ratio="16/9"
          @click.prevent="navigateProductDetail(item)"
        ></v-img>
      </v-responsive>
      <v-card-title>
        <div>
          <!-- <router-link :to='{name: 'product/detail', params: {id: card.id}}'> -->
          <p class="title" v-text="item.productName"></p>
          <!-- </router-link> -->
          <span class="caption font-weight-light grey--text">
            {{_.truncate(item.productDescription, {
            'length': 124,
            'separator': /,? +/
            })}}
          </span>
        </div>
      </v-card-title>
      <v-card-actions class="pa-3">
        <div class="is-pulled-left">
          <v-icon v-if="item.ratings === 1">mdi-star</v-icon>
          <v-icon v-if="item.ratings === 2">mdi-star</v-icon>
          <v-icon v-if="item.ratings === 2">mdi-star</v-icon>
          <v-icon v-if="item.ratings === 3">mdi-star</v-icon>
          <v-icon v-if="item.ratings === 3">mdi-star</v-icon>
          <v-icon v-if="item.ratings === 3">mdi-star</v-icon>
          <v-icon v-if="item.ratings === 4">mdi-star</v-icon>
          <v-icon v-if="item.ratings === 4">mdi-star</v-icon>
          <v-icon v-if="item.ratings === 4">mdi-star</v-icon>
          <v-icon v-if="item.ratings === 4">mdi-star</v-icon>
          <v-icon v-if="item.ratings === 5">mdi-star</v-icon>
          <v-icon v-if="item.ratings === 5">mdi-star</v-icon>
          <v-icon v-if="item.ratings === 5">mdi-star</v-icon>
          <v-icon v-if="item.ratings === 5">mdi-star</v-icon>
          <v-icon v-if="item.ratings === 5">mdi-star</v-icon>
          <p>{{ item.reviews > 0 ? `${item.reviews} Reviews` : 'No reviews' }}</p>
        </div>

        <v-spacer></v-spacer>
        <p class="is-pulled-right">
          <span class="title is-4">
            <strong>&euro; {{ item.productPrice }}</strong>
          </span>
        </p>
      </v-card-actions>
      <v-divider light></v-divider>
      <v-layout row wrap>
        <!-- <v-flex xs5 v-if="item.id !== cartProducts.id" py-2>
          <v-btn @click="addToCart(item.id, item)">{{ addToCartLabel }}</v-btn>
        </v-flex>-->
        <v-flex xs5 v-if="!cartLocal(item.id)">
          <!-- <v-btn @click="addToCart(item.id, item)">{{ addToCartLabel }}</v-btn> -->
          <v-icon color="green"  @click="addToCart(item.id, item)">mdi-cart-plus</v-icon>
        </v-flex>
        <v-flex xs5 v-if="cartLocal(item.id)">
          <!-- <v-btn
            class="button is-text"
            @click="removeFromCart(item.id, item, false)"
          >{{ removeFromCartLabel }}</v-btn> -->
          <v-icon color="red" @click="removeFromCart(item.id, item, false)">mdi-cart-off</v-icon>
        </v-flex>
        <v-flex xs2 v-if="item.isFavourite">
            <v-icon @click="removeFromFavourite(item.id)">mdi-heart</v-icon>
        </v-flex>
        <v-flex xs2 v-if="!item.isFavourite">
            <v-icon @click="saveToFavorite(item.id)">mdi-heart-outline</v-icon>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs2>
          <v-select @change="onSelectQuantity(item.id)" v-model="selected" :items="quantityArray"></v-select>
        </v-flex>
      </v-layout>
    </v-card>
    <!-- <router-link
      class="details"
      :to="{
        path: '/product/:id',
        name: 'productDetails',
        params: {
          id: item.id,
          title: item.title,
          price: item.price,
          rating: item.ratings,
          reviews: item.reviews,
          isAddedBtn: item.isAddedBtn
        }
      }"
    >
    </router-link>-->
  </v-hover>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import { infoToaster, successToaster } from "./service/ErrorHandler";

import _ from "lodash";
export default {
  name: "cardTemplate",
  props: ["item"],
  data() {
    return {
      addToCartLabel: "Add to cart",
      viewDetailsLabel: "Details",
      removeFromCartLabel: "Remove from cart",
      addToFavouriteLabel: "Add to favourite",
      removeFromFavouriteLabel: "Remove from favourite",
      showModal: false,
      selected: 1,
      quantityArray: [],
      id: "",
      noProductLabel: "No product found",
      productsFiltered: []
    };
  },
  components: {},

  mounted() {
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }

    if (this.$props.item.quantity > 1) {
      this.selected = this.$props.item.quantity;
    }
  },

  computed: {
    ...mapGetters(["isUserLoggedIn", "cartProducts"]),
    isUserLogged() {
      return this.isUserLoggedIn;
    },
    _() {
      return _;
    }
  },

  methods: {
    cartLocal(id) {
      let result;
      result = this.cartProducts.find(item => item.id === id);
      if (result) return true;
      else return false;
    },
    navigateProductDetail(product) {
      this.$router.push({
        name: "productDetails",
        params: { id: product.id }
      });
    },
    ...mapMutations(["ADD_CART_LOCAL", "SET_CART_PRODUCTS"]),

    addToCart(id, product) {
      let data = {
        id: id,
        status: true
      };
      this.$store.commit("addToCart", id);
      this.$store.commit("setAddedBtn", data);
      // this.ADD_CART_LOCAL(product);
      const localItem = _.find(this.cartProducts, product);
      if (localItem) {
        infoToaster("Already Added", "Product Already Added");
      } else {
        successToaster("Added Successfully", "Product Added Successfully");
        this.ADD_CART_LOCAL(product);
      }
    },
    removeFromCart(id, product) {
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
      // this.$refs.cartCalculator.calulateTotalPrice();
    },
    saveToFavorite(id) {
      this.$store.commit("addToFavourite", id);
      // let isUserLogged = this.$store.state.userInfo.isLoggedIn;

      // if (isUserLogged) {
      //   this.$store.commit("addToFavourite", id);
      // } else {
      //   this.$store.commit("showLoginModal", true);
      // }
    },
    removeFromFavourite(id) {
      this.$store.commit("removeFromFavourite", id);
    },
    onSelectQuantity(id) {
      let data = {
        id: id,
        quantity: this.selected
      };
      this.$store.commit("quantity", data);
    }
  }
};
</script>
<style lang="scss" scoped>
.details {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &:hover {
    border: 1px solid #51bafc;
  }
}
.button,
.select {
  z-index: 2;
}
.select {
  position: absolute;
  right: 15px;
}
</style>
