<template>
  <v-text-field
    hide-details
    prepend-icon="search"
    single-line
    v-model="value"
    :placeholder="placeholder"
    @keyup="search(value)"
  ></v-text-field>
</template>

<script>
export default {
  name: "search-component",
  data() {
    return {
      value: ""
    };
  },

  computed: {
    placeholder() {
      if (this.$route.path === "/wishlist") {
        return "Search in wishlist...";
      } else {
        return "Search...";
      }
    }
  },

  methods: {
    search(value) {
      if (value.length > 0) {
        this.$store.commit("setHasUserSearched", true);
        this.$store.commit("setProductTitleSearched", value);
      } else {
        this.$store.commit("setHasUserSearched", false);
        this.$store.commit("setProductTitleSearched", "");
      }
    }
  }
};
</script>

