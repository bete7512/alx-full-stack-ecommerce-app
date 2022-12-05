import V from"./AddnewProduct.43092e87.js";import{u as $,g as C,o as e,c as o,a as t,b as i,d as p,t as l,F as f,r as w,e as v,f as P,h as b}from"./index.3c5f2394.js";import{P as z}from"./ProductStores.07d341a3.js";import{D as B}from"./Delete.61929d20.js";const D={class:"overlay px-10 sm:px-0 sm:py-4 py-2 z-50 top-0 left-0 bottom-0 right-0 flex items-center justify-center"},L={class:"space-y-4 auto w-full h-full sm:w-1/2 md:w-3/4 lg:w-1/2 bg-white rounded-md"},S={class:"flex justify-between items-center px-4 pt-3"},A=t("div",null,null,-1),H=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",class:"bi bi-x",viewBox:"0 0 16 16"},[t("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1),q=[H],N={key:0},Q={key:1},F={key:2,class:"flex justify-center items-center"},R={class:"font-bold text-lg italic underline flex justify-center items-center"},E={class:"py-3 italic flex justify-center items-center"},I={classs:"flex justify-center items-center"},O=t("div",{class:"font-bold italic flex justify-center items-center"},"Category",-1),W={class:"italic px-20"},G={classs:"flex justify-center items-center"},J=t("div",{class:"font-bold italic flex justify-center items-center"},"Sub Category",-1),K={class:"italic px-20"},T={classs:"flex justify-center items-center"},U={class:"font-bold italic flex justify-center items-center"},X={class:""},Y=t("div",{class:"font-bold"},"name",-1),Z=t("div",{class:"font-bold"},"price",-1),tt=t("div",{class:"font-bold"},"difference",-1),et={class:"flex"},st={class:"flex flex-wrap space-x-2"},ot=["src"],it={__name:"ProductDetail",props:{id:Number},emits:["close"],setup(k,{emit:y}){const m=k,{error:g,loading:r,result:n}=$(C`
query MyQuery($id: Int!) {
  product_by_pk(id: $id) {
    about_product
    category {
      name
    }
    created_at
    name
    sub_category_ob {
      name
    }
    p_options {
    id
      name
      image_url
      difference
      price
    }
  }
}
`,()=>({id:m.id}),{fetchPolicy:"network-only"});return z(),(_,h)=>(e(),o("div",null,[t("div",D,[t("div",L,[t("div",S,[A,t("button",{class:"p-3 hover:bg-red-800 rounded-lg",onClick:h[0]||(h[0]=()=>y("close"))},q)]),i(g)?(e(),o("div",N,"error in fetching products")):p("",!0),i(r)?(e(),o("div",Q,"loading Please Wait")):(e(),o("div",F,[t("div",null,[t("div",R,l(i(n).product_by_pk.name),1),t("div",E,l(i(n).product_by_pk.about_product),1),t("div",I,[O,t("div",W,l(i(n).product_by_pk.category.name),1)]),t("div",G,[J,t("div",K,l(i(n).product_by_pk.sub_category_ob.name),1)]),t("div",T,[t("div",U,l(i(n).product_by_pk.p_options.length)+" Options ",1),(e(!0),o(f,null,w(i(n).product_by_pk.p_options,c=>(e(),o("div",{class:"italic px-20",key:c.id},[t("div",X,[Y,t("div",null,l(c.me),1),Z,t("div",null,l(c.price),1),tt,t("div",null,l(c.difference),1),t("div",et,[(e(!0),o(f,null,w(c.image_url.split(","),u=>(e(),o("div",st,[t("img",{src:u,class:"w-20 h-20"},null,8,ot)]))),256))])])]))),128))])])]))])])]))}},lt={class:"overflow-x-scroll"},at={class:"flex justify-between"},nt=t("div",null,null,-1),ct={class:"w-full pt-2 text-sm text-left text-gray-500 dark:text-gray-400"},dt=t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{class:"py-3 px-2"},"Product name"),t("th",{class:"py-3 px-2"},"Product options"),t("th",{class:"py-3 px-2"},"Products Reviews"),t("th",{class:"py-3 px-2"},"Release Date"),t("th",{class:"py-3 px-2"},"activity")])],-1),rt={class:"px-2"},_t={key:0},ut={key:1},pt={class:"py-3 px-2"},ht={class:"py-3 px-2"},vt=t("td",{class:"py-3 px-2"},"0",-1),ft={class:"py-3 px-2"},yt={class:"py-3 px-2"},mt={class:"flex space-x-2"},gt=["onClick"],xt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-eye",viewBox:"0 0 16 16"},[t("path",{d:"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"}),t("path",{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"})],-1),bt=[xt],wt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"green",class:"bi bi-pencil",viewBox:"0 0 16 16"},[t("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})],-1),kt=[wt],$t=["onClick"],Ct=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"red",class:"bi bi-trash",viewBox:"0 0 16 16"},[t("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),t("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})],-1),zt=[Ct],jt={class:"overflow-hidden h-screen"},Dt={__name:"Products",setup(k){const{error:y,result:m,loading:g}=$(C`
query MyQuery {
  product {
    about_product
    id
    category {
      name
    }
    name
    created_at
    p_options {
      difference
      name
      image_url
      price
    }
  }
}
`,{fetchPolicy:"network-only"}),r=v(!1);z();const n=P(()=>{var d,s;return(s=(d=m.value)==null?void 0:d.product)!=null?s:[]}),_=v(0),h=()=>{},c=d=>{_.value=d,r.value=!0},u=v(!1),j=d=>{_.value=d,u.value=!0},x=v(!1);return(d,s)=>(e(),o(f,null,[t("div",lt,[t("div",at,[nt,t("button",{onClick:s[0]||(s[0]=a=>x.value=!0),class:"text-green-900 p-4 mb-2 rounded-lg bg-orange-400"},"add new product")]),t("table",ct,[dt,t("tbody",rt,[i(y)?(e(),o("tr",_t,"jknds")):p("",!0),i(g)?(e(),o("tr",ut,"jknds")):(e(!0),o(f,{key:2},w(i(n),a=>(e(),o("tr",{key:a.id,class:"bg-white border-b dark:bg-gray-900 dark:border-gray-700"},[t("td",pt,l(a.name),1),t("td",ht,l(a.p_options.length),1),vt,t("td",ft,l(a.created_at),1),t("td",yt,[t("div",mt,[t("button",{onClick:M=>j(a.id)},bt,8,gt),t("button",{onClick:h},kt),t("button",{onClick:M=>c(a.id)},zt,8,$t)])])]))),128))]),t("div",null,l(i(n).options),1)])]),t("div",jt,[x.value?(e(),b(V,{key:0,class:"",onClose:s[1]||(s[1]=a=>x.value=!1)})):p("",!0)]),u.value?(e(),b(it,{key:0,id:_.value,onClose:s[2]||(s[2]=a=>u.value=!1)},null,8,["id"])):p("",!0),r.value?(e(),b(B,{key:1,onCanceldelete:s[3]||(s[3]=a=>r.value=!1),id:_.value,onDeletenotify:s[4]||(s[4]=a=>r.value=!1)},null,8,["id"])):p("",!0)],64))}};export{Dt as default};
