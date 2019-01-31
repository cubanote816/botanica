<template>
    <div class="cart-calculator">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-primary badge-pill">{{cartProducts.length}}</span>
        </h4>
        <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed" v-for="(product, index) in cartProducts" :key="index">
                <div>
                     <p class="caption my-0">{{product.productName}}</p>
                </div>
                <span class="text-muted text-xs-right" style="width:120px">$ {{product.productPrice}}</span>
            </li>
            <hr>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
                <span>Total ($)</span>
                <strong class="text-xs-right">$ {{totalValue}}</strong>
            </li>
            <a class="btn btn-primary mt-2 text-white" >Continue Shipping</a>
            <a class="btn btn-danger mt-2 text-white" >Checkout</a>

        </ul>
    </div>
</template>
<script>
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";
import _ from "lodash";
export default {
  name: "cartCalculator",
  data() {
    return {
      totalValue: 0.0
    };
  },
  computed: mapGetters(["cartProducts"]),
  methods: {
    calulateTotalPrice() {
      console.log("from parent");
      this.totalValue = 0;
      this.cartProducts.forEach(product => {
        this.totalValue += parseFloat(_.replace(product.productPrice, ',', ''));
      });
    }
  },
  created() {
    this.calulateTotalPrice();
  }
};
</script>
