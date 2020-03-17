import Login from './components/login.vue'
import ProductList from './components/productlist.vue';
import productoverview from './components/productoverview.vue';

export default [
    { path: '/', component: Login },
    {
      path: '/productlist',
      component: ProductList
    },
     {
       path: '/product-overview',
       component: productoverview
     }
]