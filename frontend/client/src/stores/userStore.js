import { defineStore } from 'pinia'
import { provideApolloClient } from '@vue/apollo-composable';
import apolloclient from '../apollo.config'
import { buyer_login, buyer_signup, } from '../Constants/Query'
import router from '../router/index'
provideApolloClient(apolloclient);
export const UserStore = defineStore("user", {
    state: () => ({
        userLoggedin:localStorage.getItem('Apollotoken') ? true : false,
    }),
    actions: {
        async signup(fname, lname, email, password, address, username) {
            try {
                const response = await apolloclient.mutate({
                    mutation: buyer_signup,
                    variables: {
                        fname: fname,
                        lname: lname,
                        username: username,
                        email: email,
                        password: password,
                        address: address
                    }

                })
                return response.data.signupbuyer.success
            } catch (err) {
                console.log(err);
                return err.message
            }
        },
        async login(email,password) {
            try {
                const response = await apolloclient.mutate({
                    mutation: buyer_login,
                    variables: {
                        email: email,
                        password: password
                    }
                })
                localStorage.setItem('Apollotoken', response.data.loginbuyer.accestoken)
                if(window.localStorage.getItem('Apollotoken')){
                    router.push('/home')
                }
                return response.data.loginbuyer.accestoken
            } catch (err) {
                console.log(err);
                return err.message
            }
        }

    },
    getters: {

    }
})
