import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { SIGNUP_QUERY,LOGIN_QUERY } from '../constants/query'
import {provideApolloClient} from '@vue/apollo-composable'
import router from '../router/index'
import apolloclient from '../apollo.config'
// provideApolloClient(apolloclient);
export const userStore = defineStore('user',{
      state: () => ({
          userLoggedin:localStorage.getItem('Apollotoken') ? true : false,
      }),
      actions:{
        async signup(fname, lname, email, password, address, username){
          try {
              const response = await apolloclient.mutate({
                  mutation: SIGNUP_QUERY,
                  variables: {
                      fname: fname,
                      lname: lname,
                      username: username,
                      email: email,
                      password: password,
                      address: address
                  }

              })
              return response.data.signupdeliveragent.success
          } catch (err) {
              console.log(err);
              return err.message
          }
      },
      async login(email,password) {
          try {
              const response = await apolloclient.mutate({
                  mutation: LOGIN_QUERY,
                  variables: {
                      email: email,
                      password: password
                  }
              })
              console.log(response.data.logindeliveragent.accestoken);
              localStorage.setItem('Apollotoken', response.data.logindeliveragent.accestoken)
              if(window.localStorage.getItem('Apollotoken')){
                  router.push('/')
              }
              return response.data.logindeliveragent.accestoken
          } catch (err) {
              console.log(err);
              return err.message
          }
      },
      },
      getters:{
          userLoggedin: computed(() => this.userLoggedin),
      }
    }
)
