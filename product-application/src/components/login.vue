<script setup>
import { ref, onMounted, computed } from "vue";
import { useUserStore } from "../stores/users";
const store = useUserStore();

function doLogin() {
store.login(username.value, password.value)
}
let username = ref("kminchelle");
let password = ref("0lelplR");
//BAD PRACTICE : Use token instead of u/p. 

onMounted(() => {
   let u = window.localStorage.getItem("username")
   let p = window.localStorage.getItem("password")
   if(u && p) {
    store.login(u,p)
   }
})


</script>

<template>
         <v-container class="fluid" >
            <v-row>
               <v-col class="mx-auto mt-4" cols="12" sm="12" md="6" lg="4" xl="3">
                <v-card 
                    class="mx-auto pa-12 pb-8 mt-4"
                    elevation="8"
                    rounded="lg">
                    <h1 class="mb-3">Log In</h1>
                  <form ref="form" @submit.prevent="doLogin()">
                      <div class="text-subtitle-1 text-medium-emphasis mb-1 mt-4">Account</div>
                            <v-text-field 
                              v-model="username"
                              name="username"
                              density="compact"
                              variant="outlined"
                              type="text"
                              placeholder="Username"
                              required
                           ></v-text-field>
                        <div class="text-subtitle-1 text-medium-emphasis mb-1">
                              Password
                        </div>
                          <v-text-field
                              v-model="password"
                              name="password"
                              type="password"
                              placeholder="Password"
                              density="compact"
                              variant="outlined"
                              required
                           ></v-text-field>
                           <v-btn 
                           type="submit"
                           block
                           class="my-6" 
                           color="blue" 
                           size="large" 
                           variant="tonal" 
                           value="log in">Log in
                          </v-btn>
                  </form>
                        <router-link to="/register" class="text-decoration-none">
                          <v-card-text class="text-center text-orange">
                            Dont have an account? Register here
                          </v-card-text>
                        </router-link>
                </v-card>
               </v-col>
             </v-row>
         </v-container>
</template>
