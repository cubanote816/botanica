 <template>
  <v-flex>
    <v-flex layout row wrap>
      <v-flex d-flex pa-2 xs12 sm6 md3 v-for="item in bestProducts" :key="item.id">
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card class="mx-auto black--text" width="344">
              <v-card-title>
                <v-layout row wrap>
                  <v-flex xs4 class="py-4">
                    <v-responsive class="text-xs-center">
                      <v-img :src="item.productImage" aspect-ratio="2.75" height="200px"></v-img>
                    </v-responsive>
                  </v-flex>
                  <v-flex xs8>
                    <v-flex>
                      <p class="subheading" v-text="item.productName"></p>
                    </v-flex>
                    <v-layout row wrap>
                      <v-flex xs8>
                        <p class="is-pulled-right">
                          <span class="title is-4">
                            <strong>&euro; {{ item.productPrice }}</strong>
                          </span>
                        </p>
                      </v-flex>
                      <v-flex v-show="item.isFavourite" xs4>
                        <v-btn
                          class="button is-small"
                          :title="removeFromFavouriteLabel"
                          @click="removeFromFavourite(item.id)"
                        ></v-btn>
                      </v-flex>
                      <v-flex v-show="!item.isFavourite" xs4>
                        <v-btn
                          fab
                          small
                          dark
                          color="purple"
                          :title="addToFavouriteLabel"
                          @click="saveToFavorite(item.id)"
                        >
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <edit-product ref="editProduct"/>
    </v-flex>
  </v-flex>
</template>

<script>
import { errorToaster } from "../shared/service/ErrorHandler";
import CardLoader from "../shared/CardLoader";
import CardTemplate from "../shared/CardTemplate";
import EditProduct from "./actions/EditProduct";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "HomeTopSellingProducts",
  components: { CardLoader, CardTemplate, EditProduct },
  data() {
    return {
      loading: false,
      product: null,
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

  computed: {
    ...mapGetters(["bestProducts", "cartProducts"])
  },

  methods: {
    ...mapActions(["fetchBestProducts"]),
    //manadatory function called from cardTemplate
    editProduct(product) {
      this.$refs.editProduct.setProduct(product);
    },
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
  },

  created() {
    this.loading = true;
    this.fetchBestProducts().then(() => {
      this.loading = false;
    });
  }
};
</script>
