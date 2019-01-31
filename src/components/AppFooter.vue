<template>
  <v-footer class="primary" dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="green darken-1">
        <strong class="subheading">Contactanos en las redes sociales!</strong>

        <v-spacer></v-spacer>
        <v-btn flat v-for="item in menuItems" :key="item.icon" :to="item.link" class="mx-3" dark icon>
          <v-icon size="24px">{{ item.icon }}</v-icon>
        </v-btn>
        
      </v-card-title>

      <v-card-actions class="primary darken-3 justify-center">
        &copy;2018
        &nbsp;Botanica El Poder de Orula by Cunaguero
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "mdi-instagram", title: "Follow us on Instagram", link: "#" },
        { icon: "mdi-facebook", title: "Follow us on Facebook", link: "#" }
      ];

      return menuItems;
    }
  }
};
</script>
