// implement your own methods in here, if your data is coming from A rest API

import * as Product from './product';
export default {
  // post
  getTopSellingProducts: Product.getTopSellingProducts,
  getBestProducts: Product.getProduct,
  getTopProducts: Product.getProduct,
  getAllProducts: Product.getProduct,
  getProductById: Product.getProductById,
  getSimilarProduct: Product.getSimilarProduct
};