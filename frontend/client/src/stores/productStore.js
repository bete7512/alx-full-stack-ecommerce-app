import { defineStore } from 'pinia'
import { provideApolloClient } from '@vue/apollo-composable';
import apolloclient from '../apollo.config'
import { buyer_login, buyer_signup,CATEGORY_FECTH,ADD_ORDER,INSERT_TO_CART } from '../Constants/Query'
import router from '../router/index'
provideApolloClient(apolloclient);
export const ProductStore = defineStore("products", {
    state: () => ({
        categories:[],
        category:'',
        subcategory:'',

    }),
    actions: {
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
            if(!localStorage.getItem('Apollotoken')){
                console.log('not logged in');
                router.push('/login')
                return
            }
            try {
                const response = await apolloclient.mutate({
                    mutation:ADD_ORDER,
                    variables:{
                        id:id
                    }
                })
                location.replace(response.data.insert_orders.payment_url)
                return response.data.insert_orders.payment_url
            } catch (err) {
                console.log(err);
                return err.message
                
            }

        },
        async add_to_cart(id){
            if(!localStorage.getItem('Apollotoken')){
                router.push('/login')
                return
            }
            try {
                const response = await apolloclient.mutate({
                    mutation:INSERT_TO_CART,
                    variables:{
                        id:id
                    }
                })
                console.log(response);
                return response
                
            } catch (error) {
                console.log(error);
                return error.message
            }

        }

    },
    getters: {

    }
})






