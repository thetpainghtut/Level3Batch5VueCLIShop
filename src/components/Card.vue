<template>
  <div class="card h-100">
    <!-- Product image-->
    <img class="card-img-top" :src="product.image" alt="..." />
    <!-- Product details-->
    <div class="card-body p-4">
      <div class="text-center">
        <!-- Product name-->
        <h5 class="fw-bolder">{{ product.title }}</h5>
        <!-- Product price-->
        {{this.$store.state.name}}
        ${{ product.price }}
      </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div class="text-center">
        <button class="btn btn-outline-info mt-auto mx-2" @click="addToCart">Add to card</button>
        <router-link class="btn btn-outline-dark mt-auto" :to="{ name: 'detail', params: { id: product.id }}">View</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPart",
  props: {
    product: Object,
  },
  mounted(){

  },
  methods:{
    addToCart(){
      let status = true
      let product = this.product
      product['qty']=1;
      let productArray;
      let cart = localStorage.getItem('cart');
      if(cart){
        productArray = JSON.parse(cart);
      }else{
        productArray = new Array;
      }

      for (const p of productArray) {
        if(p.id == product.id){
          p.qty++;
          status = false
          break;
        }
      }

      if(status){
        productArray.push(product);
      }
      localStorage.setItem('cart',JSON.stringify(productArray));
      this.$store.dispatch('getData')
    }
  }
};
</script>

- primitive
- objective
