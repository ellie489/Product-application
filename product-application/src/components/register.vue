<script setup>
import { ref } from 'vue';
import axios from 'axios';

const username = ref('');
const email = ref('');
const password = ref('');

const addUser = async () => {
  try {
    const result = await axios.post('https://dummyjson.com/users/add', {
      username: username.value,
      email: email.value,
      password: password.value,
    });
    console.log(result.data);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <v-container class="fluid">
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="4" xl="3" class="mx-auto mt-4">
        <v-card
          class="mx-auto pa-12 pb-8 mt-4"
          elevation="8"
          rounded="lg"
        >
          <h1 class="mb-3">Create Account</h1>
          <v-form>
            <div class="text-subtitle-1 text-medium-emphasis">Username</div>
            <v-text-field
              type="input"
              density="compact"
              placeholder="Create username"
              variant="outlined"
              v-model="username"
              required
            ></v-text-field>
            <div class="text-subtitle-1 text-medium-emphasis">Email</div>
            <v-text-field
              type="email"
              density="compact"
              placeholder="Email address"
              variant="outlined"
              v-model="email"
              required
            ></v-text-field>
            <div class="text-subtitle-1 text-medium-emphasis">Password</div>
            <v-text-field
              type="password"
              density="compact"
              placeholder="Create password"
              variant="outlined"
              v-model="password"
              required
            ></v-text-field>
            <v-card class="mb-6" color="surface-variant" variant="tonal">
            </v-card>
          </v-form>
          <v-btn
            @click="addUser"
            type="submit"
            block
            class="mb-6"
            color="orange"
            size="large"
            variant="tonal"
          >
            Register
          </v-btn>

          <router-link to="/login" class="text-decoration-none">
            <v-card-text class="text-center text-blue">
              Already have an account? Log In
            </v-card-text>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>