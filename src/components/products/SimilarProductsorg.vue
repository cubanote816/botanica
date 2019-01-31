<template>
  <v-layout row wrap>
    <card-loader :loopCount="4" v-if="loading"/>

    <v-card class="flex" flat tile xs12>
      <v-card-title class="teal">
        <strong class="subheading">Similar Products</strong>
      </v-card-title>
    </v-card>

    <div class="row">
      <div class="col-md-3 mt-3" v-for="(item, index) in similarProduct" :key="index">
        <card-template :item="item"/>
      </div>
    </div>
  </v-layout>
</template>

<script>
import CardLoader from "../shared/CardLoader";
import CardTemplate from "../shared/CardTemplate";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { CardLoader, CardTemplate },
  props: ["id"],
  data() {
    return {
      loading: false
    };
  },

  computed: {
    ...mapGetters("similarProduct"),
  },

  methods: {
    ...mapActions("fetchSimilarProduct")
  },

  created() {
    this.loading = true;
    this.fetchSimilarProduct(this.$props.id).then(() => {
      this.loading = false;
    });
  }
};
</script>

<style>
</style>
