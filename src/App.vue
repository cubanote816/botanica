<template>
  <v-app>
    <v-content>
      <app-menu></app-menu>
      <main>
        <router-view/>
      </main>
      <app-footer></app-footer>
    </v-content>
  </v-app>
</template>

<script>
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";
export default {
  name: "App",
  components: {
    AppMenu,
    AppFooter
  },
  data() {
    return {
      //
    };
  },
};
</script>
