<template>
  <nav>
    <v-toolbar color="yellow accent-3" has-shadow app>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer" style="...">Botanica <span class="green--text">El Poder de Orula</span></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <search></search>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn flat @click="showLoginModal" to="" v-if="!isUserLoggedIn">Login</v-btn>
      <v-btn flat @click="dialog2 = true">Sign up</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="sideNav" app temporary class="hidden-sm-and-up">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import Search from "./search/Search";
export default {
  name: "AppMenu",
  data() {
    return {
      sideNav: false,
      loginDialog: false
    };
  },

  components: {
    Search
  },
computed: {
		isUserLoggedIn () {
			return this.$store.getters.isUserLoggedIn;
		},
		getUserName () {
			let name = this.$store.getters.getUserName;
			
			if (name === '') {
				return 'user';
			} else {
				return name;
			}
    },
    ...mapGetters(["productsAdded", "productsAddedToFavourite", "cartProducts"]),
    numProductsAdded() {
      return this.cartProducts.length;
    },
    numProductsFav() {
      return this.productsAddedToFavourite.length;
    },
    menuItems() {
      let menuItems = [
        { icon: "mdi-shopify", title: "Shop", link: "/shop" },
        { icon: "mdi-blogger", title: "Blog", link: "/blog" },
        { icon: "mdi-contacts", title: "Contact", link: "/contact" },
        { icon: (this.numProductsFav) ? "mdi-heart" : "mdi-heart-outline", title: this.numProductsFav, link: "/wishlist" },
        { icon: (this.numProductsAdded) ? "mdi-cart" : "mdi-cart-outline", title: this.numProductsAdded, link: "/cart" },
        // { icon: "mdi-account-plus-outline", title: "Sign up", link: "/signup" },
        // { icon: "mdi-account-tie", title: "Login", link: "/login" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: "supervisor_account", title: "Recarga", link: "/recarga" },
          { icon: "room", title: "Acerca de", link: "/about" },
          { icon: "person", title: "Perfil", link: "/perfil" }
        ];
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return false;
    }
  },
  methods: {
    showLoginModal () {
			this.$store.commit('showLoginModal', true);
    },
    ...mapMutations(["SET_CART_PRODUCTS"]),

    getLocalProducts() {
      const products = JSON.parse(localStorage.getItem("iki-cart"));

      if (products) {
        this.SET_CART_PRODUCTS(products);
      }
    },
  },
  created() {
    this.getLocalProducts();
  }
};
</script>
<style scoped>
.pointer{
  cursor: pointer;
}
</style>

