<script setup>
import { ref } from 'vue';
import axios from 'axios';

const title = ref('');
const description = ref('');
const price = ref('');

const addProduct = async () => {
  try {
    const result = await axios.post('https://dummyjson.com/products/add', {
      title: title.value,
      description: description.value,
      price: price.value,
    });
    console.log(result.data);
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
    <v-container>
      <v-row>
        <v-col class="mx-auto mt-4" cols="12" sm="12" md="6">
          <v-card class="mx-auto pa-10 pb-6 mt-4" elevation="8" rounded="lg">
            <v-text-field
              v-model="title"
              name="Title"
              type="text"
              placeholder="Title"
              density="compact"
              variant="outlined"
              required
            ></v-text-field>
            <v-text-field
              v-model="description"
              name="description"
              type="text"
              placeholder="description"
              density="compact"
              variant="outlined"
              required
            ></v-text-field>
            <v-text-field
              v-model="price"
              name="Price"
              type="text"
              placeholder="Price"
              density="compact"
              variant="outlined"
              required
            ></v-text-field>
            <v-btn color="green" @click="addProduct">Add Product</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>