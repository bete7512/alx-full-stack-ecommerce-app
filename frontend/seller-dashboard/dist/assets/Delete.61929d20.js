import{_ as n,A as i,g as r,o as u,c as _,a as e,B as p,C as f}from"./index.3c5f2394.js";const h=t=>(p("data-v-0caf70f9"),t=t(),f(),t),v={class:"overlay top-0 left-0 bottom-0 right-0 flex items-center justify-center"},b=h(()=>e("div",null,"are you sure you want to delete? ",-1)),m={__name:"Delete",props:{id:Number},emits:["canceldelete","deletenotify"],setup(t,{emit:o}){const d=t,a=c=>{console.log("deleting"),l(),o("deletenotify"),o("canceldelete")},s=c=>{o("canceldelete")},{mutate:l}=i(r`
mutation MyMutation($id: Int!) {
  delete_product_by_pk(id: $id) {
    id
  }
}

   `,()=>({variables:{id:d.id}}));return(c,y)=>(u(),_("div",v,[e("div",{class:"space-y-80 h-40 w-auto bg-white rounded-md"},[e("div",{class:"inline-flex w-auto border-zinc-900 h-auto justify-center"},[e("div",{class:"space-y-2 h-auto p-5"},[e("div",{class:"flex justify-end"},[e("button",{onClick:s,class:"font-bold text-4xl hover:bg-red-700 h-10 w-10 rounded-md"},"x")]),b,e("div",{class:"flex space-x-2"},[e("button",{onClick:a,class:"w-24 h-10 bg-red-500 rounded-md text-white hover:bg-red-800"},"delete"),e("button",{onClick:s,class:"w-24 h-10 bg-sky-600 rounded-md text-white hover:bg-emerald-400"},"cancel")])])])])]))}},g=n(m,[["__scopeId","data-v-0caf70f9"]]);export{g as D};
