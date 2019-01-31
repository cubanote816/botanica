<template>
  <v-app>
    <v-content>
      <app-menu></app-menu>
      <main>
        <router-view/>
      </main>
      <app-footer></app-footer>
      <login-modal></login-modal>
    <registration-modal></registration-modal>
    </v-content>
  </v-app>
</template>

<script>
import AppMenu from "@/components/AppMenu";
import AppFooter from "@/components/AppFooter";
import LoginModal from '@/components/modal/Login';
// import RegistrationModal from './components/modal/Registration';
export default {
  name: "App",
  components: {
    AppMenu,
    AppFooter,
    // RegistrationModal,
    LoginModal
  },
  data() {
    return {
      //
    };
  },
};
</script>
