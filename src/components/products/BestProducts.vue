 <template>
  <v-flex>
    <v-card class="flex" flat tile xs12>
      <v-card-title class="teal">
        <strong class="subheading white--text">Top-Selling Products</strong>

        <v-spacer></v-spacer>

        <router-link class="white--text" to="/shop/products">Show All</router-link>
      </v-card-title>
    </v-card>

    <v-layout row wrap>
        <card-loader :loopCount="4" v-if="loading"/>

        <v-flex d-flex pa-4 xs12 sm6 md3 v-for="(item) in bestProducts" :key="item.id">
          <v-layout row wrap>
            <v-flex d-flex>
              <card-template :item="item"/>
            </v-flex>
          </v-layout>
        </v-flex>
        <edit-product ref="editProduct"/>
    </v-layout>
  </v-flex>
</template>

<script>
import { errorToaster } from "../shared/service/ErrorHandler";
import CardLoader from "../shared/CardLoader";
import CardTemplate from "../shared/CardTemplate";
import EditProduct from "./actions/EditProduct";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "BestProducts",
  components: { CardLoader, CardTemplate, EditProduct },
  data() {
    return {
      loading: false,
      product: null
    };
  },

  computed: {
    ...mapGetters(["bestProducts"])
  },

  methods: {
    ...mapActions(["fetchBestProducts"]),
    //manadatory function called from cardTemplate
    editProduct(product) {
      this.$refs.editProduct.setProduct(product);
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
