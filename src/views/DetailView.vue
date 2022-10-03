<template>
  <!-- Header-->
  <Header title="Testing Page" subtitle="Say Something!" />
  <!-- Section-->
  <section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
      <div class="row gx-4 gx-lg-5 row-cols-12 justify-content-center">
        <div class="col">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="" class="img-fluid rounded-start" alt="" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{product.title}}</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
const axios = require("axios");

export default {
  name: "DetailView",
  data() {
    return {
      product: Object,
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      let id = this.$route.params.id;
      axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
        // console.log(response)
        this.product = response.data;
      });
    },
  },
  components: { Header },
};
</script>

<style></style>
