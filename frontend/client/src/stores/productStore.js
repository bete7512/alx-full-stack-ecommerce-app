import { defineStore } from 'pinia'
import { provideApolloClient } from '@vue/apollo-composable';
import apolloclient from '../apollo.config'
import { buyer_login, buyer_signup,CATEGORY_FECTH,ADD_ORDER } from '../Constants/Query'
import router from '../router/index'
provideApolloClient(apolloclient);
export const ProductStore = defineStore("products", {
    state: () => ({
        categories:[],
        category:'',
        subcategory:'',
    }),
    actions: {
        // async signup(fname, lname, email, password, address, username) {
        //     try {
        //         const response = await apolloclient.mutate({
        //             mutation: buyer_signup,
        //             variables: {
        //                 fname: fname,
        //                 lname: lname,
        //                 username: username,
        //                 email: email,
        //                 password: password,
        //                 address: address
        //             }

        //         })
        //         console.log(response);

        //     } catch (err) {
        //         console.log(err);
        //         return err.message
        //     }
        // },
        // async login(email,password) {
        //     try {
        //         const response = await apolloclient.mutate({
        //             mutation: buyer_login,
        //             variables: {
        //                 email: email,
        //                 password: password
        //             }
        //         })
        //         localStorage.setItem('Apollotoken', response.data.loginseller.accestoken)
        //         if(window.localStorage.getItem('Apollotoken')){
        //             router.push('/')
        //         }
        //         return response.data.loginseller.accestoken
        //     } catch (err) {
        //         console.log(err);
        //         return err.message
        //     }
        // },
        async getCategories(){
            try {
                const response = await apolloclient.query({
                    query: CATEGORY_FECTH
                })
                this.categories = response.data.category
                console.log(this.categories);
            } catch (err) {
                console.log(err);
                return err.message
            }

        },
        async add_order(id){
            try {
                const response = await apolloclient.mutate({
                    mutation:ADD_ORDER,
                    variables:{
                        id:id
                    }
                })
                console.log(response.data.insert_orders.payment_url);
                location.replace(response.data.insert_orders.payment_url)
                
            } catch (error) {
                console.log(error);
            }

        },
        async addto_cart(){
            
        }

    },
    getters: {

    }
})
