<!-- <script setup>
import { ref } from 'vue';
import axios, {isCancel, AxiosError} from 'axios';
</script> -->
<script>
export default {
 name: "Register",
 data() {
   return {
     username: "",
     password: "",
     confirmPassword: "",
     isRegister : false,
     errorMessage: "",
     stateObj: {
        register :{
           name: 'Register',
           message: 'Aleady have an Acoount? login.'
        },
        login : {
           name: 'Login',
           message: 'Register'
        }
     }
   };
 },
 methods: {
   login() {
     const { username } = this;
     console.log(username + "logged in")
   },
   register() {
      if(this.password == this.confirmPassword){
         this.isRegister = false;
         this.errorMessage = "";
         this.$refs.form.reset();
      }
      else {
        this.errorMessage = "password did not match"
      }
   }
 },
     computed: {
      toggleMessage : function() { 
         return this.isRegister ? this.stateObj.register.message : this.stateObj.login.message }
   }
};
</script>
<template>
  <v-container fluid v-flex>
    <v-row class="row" v-flex justify-center align-center>
        <v-col cols="12" sm="12" md="6" lg="4" xl="3" class="mx-auto mt-4">  
          <v-card 
                class="mx-auto pa-12 pb-8 mt-4"
                elevation="8"
                rounded="lg"
                ><h1 class="mb-3">Create Account</h1>
                <form action="">   
                <div class="text-subtitle-1 text-medium-emphasis">Username</div>
                <v-text-field
                    density="compact"
                    placeholder="Create username"
                    variant="outlined"
                ></v-text-field>
                <div class="text-subtitle-1 text-medium-emphasis">Email</div>
                <v-text-field
                    density="compact"
                    placeholder="Email address"
                    variant="outlined"
                ></v-text-field>
                <div class="text-subtitle-1 text-medium-emphasis">
                    Password
                </div>
                <v-text-field
                    density="compact"
                    placeholder="Create password"
                    variant="outlined"
                ></v-text-field>

                <v-card
                    class="mb-6"
                    color="surface-variant"
                    variant="tonal"
                >
                </v-card>

                <v-btn
                    block
                    class="mb-6"
                    color="orange"
                    size="large"
                    variant="tonal"
                >
                    Register
                </v-btn>
                </form>
              

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="/login"
          rel="noopener noreferrer"
        >
        Already have an account? Log In
        </a>
      </v-card-text>
    </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

