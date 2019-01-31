<template>
  <v-flex layout row wrap>
    <v-flex d-flex pa-2 xs12 sm6 md3 v-for='loop in loopCount' v-bind:key='loop'>
      <v-layout row wrap>
        <v-flex d-flex>
          <vcl-instagram :width='220' :height='450' style='padding: 20px'></vcl-instagram>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-flex>
</template>
<script>
import { VclFacebook, VclInstagram } from "vue-content-loading";

export default {
  name: "cardLoader",
  props: ["loopCount"],
  components: { VclInstagram }
};
</script>
