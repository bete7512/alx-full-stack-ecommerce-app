<template>
    <div class="space-y-10">
        <div class="flex justify-center items-center">Add image of product</div>
        <div class="flex items-center justify-center">
            <div class="w-full">
                <div class="flex space-x-2 flex-wrap">
                    <div class="" v-for="(key, index) in url.length" :key="key">
                        <div class="flex ">
                            <img :src="url[index]" class="bg-black py-2" width="120" height="120" alt="insert image">
                            <button @click="remove_image(index)"
                                class="w-8 h-8 rounded-full bg-black text-white flex justify-center items-center">X</button>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center w-64 mt-5">
                    <label for="dropzone-file"
                        class="flex flex-col justify-center items-center w-full h-32 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col justify-center items-center py-5">

                            <svg xmlns="http://www.w3.org/2000/svg" class="py-auto w-10 h-10 text-gray-400" fill="none"
                                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click
                                    to add image</span> or drag and drop</p>
                        </div>
                        <input @change="changefile" id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script setup>
import { ProductStore } from '../../../stores/ProductStores';
import { ref, reactive, onMounted } from 'vue'
const product = ProductStore();
const file = ref('')
const base64str = ref('')
const url = reactive([])
const path = reactive([])
const remove_image = (index) => {
    url.splice(index, 1)
}
onMounted(() => {
    console.log("jhndfviuiuuiiubi");
    console.log(product.ObjectFile);
})

// const objectfile = reactive([])
// const fileUpload = (e) => {
//     const file = e.target.files[0]
//     const reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onload = () => {
//         base64str.value = reader.result
//     }
// }
const changefile = async (e) => {
    product.file = e.target.files[0];
    const newurl = URL.createObjectURL(product.file);
    url.push(newurl);
    const reader = new FileReader();
    if (e.target.files[0]) {
        reader.readAsBinaryString(e.target.files[0]);
    }
    reader.onload = () => {
        product.base64str = btoa(reader.result);
        product.ObjectFile.push({ file: product.file, base64str: product.base64str });
    };
}
</script>

<style>

</style>