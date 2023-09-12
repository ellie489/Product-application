<script setup>

import { ref, onMounted } from "vue";
import axios from "axios";
const products = ref([]);

const fetchProducts = async () => {
    try {
        const response = await axios.get("https://dummyjson.com/products?limit=50");
        products.value = response.data.products;
        console.log(products.value)
    }
    catch (error) {
        console.log(error);
    }
};

onMounted(() => {
    fetchProducts();
});

const deleteProduct = async (productId) => {

  const confirmDeletion = window.confirm("Are you sure you want to delete this product?");
  
  if (!confirmDeletion) {
    return;
  }
  try {
    await axios.delete(`https://dummyjson.com/products/${productId}`);
    
    products.value = products.value.filter((product) => product.id !== productId);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="product in products" :key="product.id">
          <v-card class="mx-auto card" max-width="400" height="100%">
            <v-img 
              height="250"
              :src="product.images[0]"
            >
            </v-img> 
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-subtitle class="pt-2 text-wrap">           
             {{ product.description }}
            </v-card-subtitle>
            <v-card-text class="text-blue font-weight-bold">
                Price: {{ product.price }}$
            </v-card-text>
            <v-card-actions>
              <v-btn class="me-1" color="orange">Edit</v-btn>
              <v-btn color="red" @click="deleteProduct(product.id)">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
