import { defineStore } from 'pinia'
import { provideApolloClient } from '@vue/apollo-composable';
import apolloclient from '../apollo.config'
import { insert_company, seller_login, seller_signup, seller_company } from '../Constants/Query/query'
import router from '../router/index'
import { ref, computed } from 'vue'
provideApolloClient(apolloclient);
export const CompanyStore = defineStore("company", {
    state: () => ({
        user: "am here for a reason not for a season",
        companies: [],
        name: '',
        have_company: false,
        about_company: '',
        address: '',
        licence_number: '',
        c_name: '',
    }),
    actions: {
        async seller_companies() {
            try {
                const response = await apolloclient.query({
                    query: seller_company
                })
                console.log(response.data.seller_company);
                this.companies = response.data.seller_company//[0].seller_company_for_seller[0].name
                console.log(response.data.seller_company.length);
                this.name = response.data.seller_company[0].name
                if (!this.name || !response.data.seller_company.length) {
                    this.have_company = false

                }
                else {
                    this.have_company = true
                }
                // console.log("this one is from store"+this.companies);
                // return response.data.seller_company
            } catch (err) {
                console.log(err);
                return err.message
            }
        },
        async insert_company() {
            try {
                const response = await apolloclient.mutate({
                    mutation: insert_company,
                    variables: {
                        name: this.c_name,
                        address: this.address,
                        licence_number: this.licence_number,
                        about_company: this.about_company
                    }
                })
                console.log(response.data.insert_seller_company.returning[0].name);
                // seller_companies()
                return true
                // return response.data.insert_seller_company.returning[0].name,
            }
            catch (err) {
                console.log(err);
                return err.message
            }

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
})
