import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "blog" */ './views/Blog.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "shop" */ './views/shop/Shop.vue')
    },
    {
      path: '/shop/products',
      name: "products",
      component: () => import(/* webpackChunkName: "products" */ "./views/products/Products.vue")
    },
    {
      path: '/shop/product/:id',
      name: "productDetails",
      component: () => import(/* webpackChunkName: "productDetails" */ "./views/products/Detail.vue")
    },
    // {
    //   path: '/products/:id',
    //   name: 'productDetails',
    //   component: () => import('./components/products/ProductDetail.vue'),
    // },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./components/products/cart/CartProducts.vue'),
      // beforeEnter: (to, from, next) => {
      //   console.log("From", from)
      //   console.log("To", to)
      //   if (isLoggedIn()) {
      //     next();
      //   } else {
      //     next({
      //       name: 'login',
      //       query: {
      //         from: to.name
      //       }
      //     })
      //   }
      // }
    }, 
    {
      path: '/wishlist',
      name: 'wishlist-container-component',
      component: () => import(/* webpackChunkName: "wishlist" */ './components/user/WishlistContainer.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ './views/auth/Login.vue')
    },
    {
      path: '/singup',
      name: 'singup',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "singup" */ './views/auth/Singup.vue')
    }
  ]
})
