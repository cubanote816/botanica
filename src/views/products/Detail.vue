<template>
  <div>
    <product-details></product-details>
    <!-- <similar-products :id="id"></similar-products> -->
    <similar-products></similar-products>
    
  </div>
</template>

<script>
import ProductDetails from "@/components/products/ProductDetail.vue";
import SimilarProducts from "@/components/products/SimilarProducts.vue";
// import SimilarProducts from "@/components/products/SimilarProducts.vue";

export default {
  name: "Detail",
  components: {
    ProductDetails,
    SimilarProducts
    // SimilarProducts
  },
};
</script>

