<!-- <script setup>
import { ref } from 'vue';

const drawer = ref(true)
</script> -->
<script>
import Login from './components/login.vue'
export default {
  name: 'App',
  components: {
    Login,
  },
  data: () => ({
    //
  }),
};
</script>

  <template>
  <!-- <v-layout class="rounded rounded-md"> -->
    <v-app>
      <v-app-bar title="ProApp">
    </v-app-bar>
    
    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Log in" to="/login"></v-list-item>
        <v-list-item title="Register" to="/register"></v-list-item>
        <v-list-item title="All Products" to="/all-products"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main d-flex align-center justify-center >
        <router-view />
    </v-main>
    </v-app>
    
  <!-- </v-layout> -->
</template>
<style scoped>
</style>
