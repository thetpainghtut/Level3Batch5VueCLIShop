<template>
  <!-- Header-->
  <Header title="Testing Page" subtitle="Say Something!" />
  <!-- Section-->
  <section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
      {{this.$store.getters.getAdult}}
      <div class="dropdown" v-if="categories.length > 1">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#" @click="getAllProducts">All</a></li>
          <li v-for="(category, index) in categories" :key="index">
            <a
              class="dropdown-item"
              href="#"
              @click="getProductsByCategory(category)"
              >{{ category }}</a
            >
          </li>
        </ul>
      </div>
      <div
        class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
      >
        <div class="col mb-5" v-for="(row, index) in products" :key="index">
          <Card :product="row" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
const axios = require("axios");

export default {
  name: "TestingView",
  data() {
    return {
      products: [],
      categories: [],
    };
  },
  mounted() {
    this.getAllCategories();
    this.getAllProducts();
  },
  methods: {
    getAllProducts() {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        // console.log(response)
        this.products = response.data;
      });
    },
    getAllCategories() {
      axios
        .get("https://fakestoreapi.com/products/categories")
        .then((response) => {
          // console.log(response)
          this.categories = response.data;
        });
    },
    getProductsByCategory(category) {
      axios
        .get(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => {
          // console.log(response)
          this.products = response.data;
        });
    },
  },
  components: { Header, Card },
};
</script>

<style></style>
