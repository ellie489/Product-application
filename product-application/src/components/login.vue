<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const { username } = this;
      console.log(username + "logged in")
    },
  },
};
</script>

<template>
<!-- 
<v-app >
      <v-main> -->
         <v-container class="fluid" >
            <v-row>
               <v-col class="mx-auto mt-4" cols="12" sm="12" md="6" lg="4" xl="3">
                <v-card 
                  class="mx-auto pa-12 pb-8 mt-4"
                elevation="8"
                rounded="lg">
                <h1 class="mb-3">Log In</h1>
                  <form ref="form" @submit.prevent="login()">
                    <div class="text-subtitle-1 text-medium-emphasis mb-1 mt-4">Account</div>
                            <v-text-field 
                              v-model="username"
                              name="username"
                              label="Username"
                              density="compact"
                              variant="outlined"
                              type="text"
                              placeholder="username"
                              required
                           ></v-text-field>
                           <div class="text-subtitle-1 text-medium-emphasis mb-1">
                              Password
                           </div>
                          <v-text-field
                              v-model="password"
                              name="password"
                              label="Password"
                              type="password"
                              placeholder="password"
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
                          <v-card-text class="text-center">
                            <a
                              class="text-orange text-decoration-none"
                              href="/login"
                              rel="noopener noreferrer"
                            >
                            Dont have an account? Register here
                            </a>
                          </v-card-text>
                        
                  </v-card>
               </v-col>
                  
             
            </v-row>
         </v-container>
      <!-- </v-main>
   </v-app> -->
</template>
<!-- 
<template>
  <v-container fluid class="fluid">
    <v-row class="row">
        <v-col class="col" cols="6" sm="12" md="6">
            <div>
                <v-text-field><h1>Sign in</h1></v-text-field>
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="800"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        density="compact"
        placeholder="Email address"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password
      </div>

      <v-text-field
        density="compact"
        placeholder="Enter your password"
        variant="outlined"
      ></v-text-field>

      <v-card
        class="mb-3"
        color="surface-variant"
        variant="tonal"
      >
      </v-card>

      <v-btn
        block
        class="mb-4"
        color="blue"
        size="large"
        variant="tonal"
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-orange text-decoration-none"
          href="/register"
          rel="noopener noreferrer"
        >
          Dont have an account? Register here <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
        </v-col>
      

    </v-row>
  </v-container>
</template> -->