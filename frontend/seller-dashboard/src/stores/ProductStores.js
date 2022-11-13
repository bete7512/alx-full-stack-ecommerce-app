import { defineStore } from 'pinia'
import { provideApolloClient } from '@vue/apollo-composable';
import apolloclient from '../apollo.config'
import { insert_product } from '../Constants/Query/query'
import router from '../router/index'
import { ref, computed } from 'vue'
provideApolloClient(apolloclient);
export const ProductStore = defineStore("product", {
    state: () => ({
        products: [],
        
    }),
    actions: {
        async products() {
            try {
                
            } catch (err) {
                console.log(err);
                return err.message
            }
        },
        insert_product() {
            try{
                const response = apolloclient.mutate({
                    mutation: insert_product,
                    variables: {
                        name: this.name,
                        description: this.description,
                        price: this.price,
                        image: this.image,
                        seller_company_id: this.seller_company_id
                    }
                })
            }
            catch(err){
                console.log(err);
                return err.message
            }

    },
    getters: {
        // async Companies(){
        //     try {
        //         const response = await apolloclient.query({
        //             query: seller_company                })
        //             console.log("am from here"+response.data.seller_company);
        //         state.companies = response.data.seller_company
        //     } catch (err) {
        //         console.log(err);
        //         state.companies = []
        //     }
        // }
    }
}})
