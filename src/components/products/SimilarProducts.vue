 <template>
  <v-flex>
    <v-card class="flex" flat tile xs12>
      <v-card-title class="teal">
        <strong class="subheading">Similar Products</strong>
      </v-card-title>
    </v-card>
    <v-flex layout row wrap>
      <card-loader :loopCount="4" v-if="loading"/>

      <v-flex d-flex pa-2 xs12 sm6 md3 v-for="(item) in similarProduct" :key="item.id">
        <v-layout row wrap>
          <v-flex d-flex>
            <card-template :item="item"/>
          </v-flex>
        </v-layout>
      </v-flex>
      <edit-product ref="editProduct"/>
      <pre>{{similarProduct}}</pre>
    </v-flex>
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
  props: ['category'],
  data() {
    return {
      loading: false,
      product: null
    };
  },

  computed: {
    ...mapGetters(["similarProduct", "productDetail"]),
    id() {
      return this.$route.params.id;
    }
  },

  methods: {
    ...mapActions(["fetchSimilarProduct"]),
    //manadatory function called from cardTemplate
    editProduct(product) {
      this.$refs.editProduct.setProduct(product);
    }
  },

  created() {
    this.loading = true;
    this.fetchSimilarProduct(this.productDetail.productCategory).then(() => {
      this.loading = false;
      console.log(this.productDetail.productCategory);
    });
  }
};
</script>
