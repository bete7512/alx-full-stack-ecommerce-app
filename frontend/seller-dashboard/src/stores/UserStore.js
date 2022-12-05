import { defineStore } from 'pinia'
import { provideApolloClient } from '@vue/apollo-composable';
import apolloclient from '../apollo.config'
import { insert_company, seller_login, seller_signup, } from '../Constants/Query/query'
import router from '../router/index'
provideApolloClient(apolloclient);
export const UserStore = defineStore("user", {
    state: () => ({
        user: "am here for a reason not for a season",
    }),
    actions: {
        async signup(fname, lname, email, password, address, username) {
            try {
                const response = await apolloclient.mutate({
                    mutation: seller_signup,
                    variables: {
                        fname: fname,
                        lname: lname,
                        username: username,
                        email: email,
                        password: password,
                        address: address
                    }
                })
                return response.data.signupseller.success
            } catch (err) {
                console.log(err);
                return err.message
            }
        },
        async login(email,password) {
            try {
                const response = await apolloclient.mutate({
                    mutation: seller_login,
                    variables: {
                        email: email,
                        password: password
                    }
                })
                console.log(response.data.loginseller.accestoken);
                localStorage.setItem('Apollotoken', response.data.loginseller.accestoken)
                console.log(localStorage.getItem('Apollotoken'));
                if(window.localStorage.getItem('Apollotoken')){
                    router.push('/')
                }
                return response.data.loginseller.accestoken
            } catch (err) {
                console.log(err);
                return err.message
            }
        }
    },
    getters: {

    }
})
