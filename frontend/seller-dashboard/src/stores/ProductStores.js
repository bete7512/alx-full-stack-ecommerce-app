import { defineStore } from 'pinia'
import { provideApolloClient } from '@vue/apollo-composable';
import apolloclient from '../apollo.config'
import { insert_product, subcategory_query, category_query, file_upload } from '../Constants/Query/query'
import router from '../router/index'
import { ref, computed } from 'vue'
provideApolloClient(apolloclient);
export const ProductStore = defineStore("product", {
    state: () => ({
        product_name: "",
        about_product: "",
        options: [],
        o_name: '',
        price: '',
        c_id: '',
        sub_category_id: '',
        difference: '',
        categories: [],
        subcategories: [],
        options: [],
        image_url: [],
        base64str: '',
        type: '',
        f_name: '',
        ObjectFile: [],
        file: '',
        adding_product: false,
        adding_option: false,
    }),
    actions: {

        async products() {
            try {

            } catch (err) {
                console.log(err);
                return err.message
            }
        },
       async insert_product() {
            try {
                // this.adding_option = true;
                await this.add_options()
                const response = apolloclient.mutate({
                    mutation: insert_product,
                    variables:{
                        name:this.product_name,
                        about_product:this.about_product,
                        category_id:this.c_id,
                        data:this.options,
                        sub_category_id:this.sub_category_id
                    }
                })
                console.log(response);
            }
            catch (err) {
                console.log(err);
                // this.adding_option = false;
                return err.message
            }
        },
        async category() {
            const { data } = await apolloclient.query({
                query: category_query
            })
            this.categories = data.category
            console.log(this.categories)
            return this.categories
        },
        async subcategory(id) {
            const { data } = await apolloclient.query({
                query: subcategory_query
            })
            console.log(data);
            this.subcategories = data.sub_category
            console.log(this.subcategories);
        },
        async add_image() {
            console.log("on loop");
            // console.log(this.ObjectFile);

            for (let i = 0; i < this.ObjectFile.length; i++) {
                console.log("inside a loop" + this.ObjectFile[i]);
                var hold = this.ObjectFile[i]
                console.log(hold);
                try {
                    var tempourl = await fileupload(hold)
                    this.image_url.push(tempourl)
                    console.log(tempourl);
                } catch (error) {
                    console.log(error);
                }
            }
            // try {
            //     const response =await apolloClient.mutate({
            //         mutation:file_upload,
            //         variables:{
            //             name:object.file.name,
            //             type:object.file.type,
            //             base64str:object.base64str
            //         }
            //     })
            //     console.log(response.data.fileupload.file_path);
            //     return response.data.fileupload.file_path;
            // } catch (error) {
            // console.log(error);
            // }
        },
        async add_options() {
            // if(!this.adding_product){
            //     this.add_options = true;
            // }
           await this.add_image()
            console.log("this is url testing"+this.image_url);
            this.options.push({ image_url: this.image_url.join(), name: this.o_name, price: this.price, difference: this.difference })
            // this.o_name=''
            // this.price=''
            // this.difference=''
            console.log("this options testing if it is working"+this.options);
            this.ObjectFile = []
            this.image_url = []
            // if(!this.adding_product){
            //     this.add_options = false;
            // }
        }
    },
    getters: {

    }
})


const fileupload = async (object) => {
    try {
        const response = await apolloclient.mutate({
            mutation: file_upload,
            variables: {
                name: object.file.name,
                type: object.file.type,
                base64str: object.base64str
            }
        })
        console.log(response.data.fileupload.file_path);
        return response.data.fileupload.file_path;

    } catch (error) {

    }
}

