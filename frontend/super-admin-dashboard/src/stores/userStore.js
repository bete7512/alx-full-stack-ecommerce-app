import { defineStore } from 'pinia'
import { provideApolloClient } from '@vue/apollo-composable';
import apolloclient from '../apollo.config'
import { aggragteQuery,signup_mutation,login_mutation } from '../components/Constants/Query';
import router from '../router/index'
provideApolloClient(apolloclient);
export const UserStore = defineStore("user", {
    state: () => ({
        user: "am here for a reason not for a season",
    }),
    actions: {
        async signup({fname, lname, email, password,username}) {
            try {
                const response = await apolloclient.mutate({
                    mutation: signup_mutation,
                    variables: {
                        fname: fname,
                        lname: lname,
                        username: username,
                        email: email,
                        password: password,
                    }
                })
                console.log(response);
                return response.data.signupsuperadmin.success
            } catch (err) {
                console.log(err);
                return err.message
            }
        },
        async login(email,password) {
            try {
                const response = await apolloclient.mutate({
                    mutation: login_mutation,
                    variables: {
                        email: email,
                        password: password
                    }
                })
                console.log(response.data.loginsuper.accestoken);
                localStorage.setItem('Apollotoken', response.data.loginsuper.accestoken)
                if(window.localStorage.getItem('Apollotoken')){
                    router.push('/')
                }
                return response.data.loginsuper.accestoken
            } catch (err) {
                console.log(err);
                return err.message
            }
        }
    },
    getters: {

    }
})
