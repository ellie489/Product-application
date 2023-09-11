import { defineStore } from 'pinia'
import axios from "axios"
export const useUserStore = defineStore("user", {
    state: () => ({
        users: [],
        user: null
    }),
    getters: {
      getUsers(state){
          return state.users
        }
    },
    actions: {
        async login(username, password) {
            return new Promise((resolve, reject)=>{
                 axios.post('https://dummyjson.com/auth/login', {
                    username, password
                }) .then((response)=>{
                    console.log(response)
                    this.user = response.data
                    window.localStorage.setItem("username", username)
                    window.localStorage.setItem("password", password)
                }) .catch((error)=>{
                    console.log(error)
                })
            })
        },

      async fetchUsers() {
        try {
          const data = await axios.get("https://dummyjson.com/users")
            this.users = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})