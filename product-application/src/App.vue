
<script setup>
import { ref, onMounted, computed } from "vue";
import { useUserStore } from "../src/stores/users";
const store = useUserStore();

function doLogin() {
store.login(username.value, password.value)
}
let username = ref("kminchelle");
let password = ref("0lelplR");
//BAD PRACTICE : Use token instead of u/p. 
//By using this in the Main App, user will be logged in on every page

onMounted(() => {
   let u = window.localStorage.getItem("username")
   let p = window.localStorage.getItem("password")
   if(u && p) {
    store.login(u,p)
   }
})
</script>

  <template>
    <v-app>
      <v-app-bar title="ProApp">
    </v-app-bar>
    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Log in" to="/login"></v-list-item>
        <v-list-item title="Register" to="/register"></v-list-item>
        <v-list-item title="All Products" to="/all-products"></v-list-item>
        <v-list-item title="Create Product" to="/create-product"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main d-flex align-center justify-center >
        <router-view />
    </v-main>
    </v-app>
</template>
