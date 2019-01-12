<template>
  <div>
    <v-toolbar class='primary' dark has-shadow>
      <v-toolbar-side-icon @click.stop='sideNav = !sideNav' class='hidden-sm-and-up'></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to='/' tag='span' style='...'>Botanica El Poder de Orula</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field hide-details prepend-icon='search' single-line></v-text-field>
      <v-toolbar-items class='hidden-xs-only'>
        <v-btn flat v-for='item in menuItems' :key='item.title' :to='item.link'>
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model='sideNav' temporary class='hidden-sm-and-up'>
      <v-list>
        <v-list-tile v-for='item in menuItems' :key='item.title' :to='item.link'>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "AppMenu",
  data() {
    return {
      sideNav: false,
      cartValue: 0
    }; 
  },
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "mdi-shopify", title: "Shop", link: "/shop" },
        { icon: "mdi-blogger", title: "Blog", link: "/blog" },
        { icon: "mdi-contacts", title: "Contact", link: "/contact" },
        { icon: "mdi-login", title: "Login", link: "/login" },
        // {
        //   icon: "shopping-cart",
        //   title: this.cartProducts.length,
        //   link: "/cart"
        // }
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
}
</script>
