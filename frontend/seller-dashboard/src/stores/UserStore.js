import { defineStore } from 'pinia'
import { register, signin, user_profile_query } from '@/tools/queries';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloclient from '../apollo.config'
import {insert_company,seller_login,seller_signup,} from '../Constants/Query/query'
import router from '../router/index'
provideApolloClient(apolloClient);
export const UserStore = defineStore("user", {
    state: () => ({

    }),
    actions: {
        async signup(fname, lname, username, email, password,address) {
            try {
                const response = await apolloClient.mutate({
                    mutation: register,
                    variables: {
                        fname: fname,
                        lname: lname,
                        username: username,
                        email: email,
                        password: password,
                        address:address
                    }
                })
                return response.data.signupseller.success
                console.log(response.data.signupseller.success);
            } catch (error) {
                return error.message
            }
        },

    },
    getters: {

    }
})
