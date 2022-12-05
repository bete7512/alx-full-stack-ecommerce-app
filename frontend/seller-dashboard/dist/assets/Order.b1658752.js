import{u as k,g as V,o as e,c as s,a as t,b as i,d as v,t as o,F as y,r as g,e as h,f as M,h as w,D as j}from"./index.3c5f2394.js";import{P as $}from"./ProductStores.07d341a3.js";import{D as B}from"./Delete.61929d20.js";const D={class:"overlay px-10 sm:px-0 sm:py-4 py-2 z-50 top-0 left-0 bottom-0 right-0 flex items-center justify-center"},L={class:"space-y-4 auto w-full h-full sm:w-1/2 md:w-3/4 lg:w-1/2 bg-white rounded-md"},P={class:"flex justify-between items-center px-4 pt-3"},S=t("div",null,null,-1),A=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",class:"bi bi-x",viewBox:"0 0 16 16"},[t("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1),H=[A],q={key:0},N={key:1},F={key:2,class:"flex justify-center items-center"},O={class:"font-bold text-lg italic underline flex justify-center items-center"},Q={class:"py-3 italic flex justify-center items-center"},R={classs:"flex justify-center items-center"},E=t("div",{class:"font-bold italic flex justify-center items-center"},"Category",-1),I={class:"italic px-20"},W={classs:"flex justify-center items-center"},G=t("div",{class:"font-bold italic flex justify-center items-center"},"Sub Category",-1),J={class:"italic px-20"},K={classs:"flex justify-center items-center"},T={class:"font-bold italic flex justify-center items-center"},U={class:""},X=t("div",{class:"font-bold"},"name",-1),Y=t("div",{class:"font-bold"},"price",-1),Z=t("div",{class:"font-bold"},"difference",-1),tt={class:"flex"},et={class:"flex flex-wrap space-x-2"},st=["src"],ot={__name:"orderdetail",props:{id:Number},emits:["close"],setup(b,{emit:f}){const m=b,{error:x,loading:r,result:c}=k(V`
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
`,()=>({id:m.id}),{fetchPolicy:"network-only"});return $(),(_,p)=>(e(),s("div",null,[t("div",D,[t("div",L,[t("div",P,[S,t("button",{class:"p-3 hover:bg-red-800 rounded-lg",onClick:p[0]||(p[0]=()=>f("close"))},H)]),i(x)?(e(),s("div",q,"error in fetching products")):v("",!0),i(r)?(e(),s("div",N,"loading Please Wait")):(e(),s("div",F,[t("div",null,[t("div",O,o(i(c).product_by_pk.name),1),t("div",Q,o(i(c).product_by_pk.about_product),1),t("div",R,[E,t("div",I,o(i(c).product_by_pk.category.name),1)]),t("div",W,[G,t("div",J,o(i(c).product_by_pk.sub_category_ob.name),1)]),t("div",K,[t("div",T,o(i(c).product_by_pk.p_options.length)+" Options ",1),(e(!0),s(y,null,g(i(c).product_by_pk.p_options,n=>(e(),s("div",{class:"italic px-20",key:n.id},[t("div",U,[X,t("div",null,o(n.me),1),Y,t("div",null,o(n.price),1),Z,t("div",null,o(n.difference),1),t("div",tt,[(e(!0),s(y,null,g(n.image_url.split(","),u=>(e(),s("div",et,[t("img",{src:u,class:"w-20 h-20"},null,8,st)]))),256))])])]))),128))])])]))])])]))}},it={class:"overflow-x-scroll"},lt={class:"w-full pt-2 text-sm text-left text-gray-500 dark:text-gray-400"},at=t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{class:"py-3 px-2"},"client name"),t("th",{class:"py-3 px-2"},"client email"),t("th",{class:"py-3 px-2"},"Product name"),t("th",{class:"py-3 px-2"},"Products Reviews"),t("th",{class:"py-3 px-2"},"Release Date"),t("th",{class:"py-3 px-2"},"activity")])],-1),ct={class:"px-2"},nt={key:0},dt={key:1},rt={class:"py-3 px-2"},_t={class:"py-3 px-2"},ut={class:"py-3 px-2"},pt=t("td",{class:"py-3 px-2"},"0",-1),ht={class:"py-3 px-2"},vt={class:"py-3 px-2"},yt={class:"flex space-x-2"},ft=["onClick"],mt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-eye",viewBox:"0 0 16 16"},[t("path",{d:"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"}),t("path",{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"})],-1),xt=[mt],gt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"green",class:"bi bi-pencil",viewBox:"0 0 16 16"},[t("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})],-1),bt=[gt],wt=["onClick"],kt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"red",class:"bi bi-trash",viewBox:"0 0 16 16"},[t("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),t("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})],-1),$t=[kt],Mt={__name:"Order",setup(b){const{error:f,result:m,loading:x}=k(j,{fetchPolicy:"network-only"}),r=h(!1);$();const c=M(()=>{var d,a;return(a=(d=m.value)==null?void 0:d.product_orders)!=null?a:[]}),_=h(0),p=()=>{},n=d=>{_.value=d,r.value=!0},u=h(!1),z=d=>{_.value=d,u.value=!0};return h(!1),(d,a)=>(e(),s(y,null,[t("div",it,[t("table",lt,[at,t("tbody",ct,[i(f)?(e(),s("tr",nt,"error fetching data")):v("",!0),i(x)?(e(),s("tr",dt,"loading")):(e(!0),s(y,{key:2},g(i(c),l=>(e(),s("tr",{key:l.id,class:"bg-white border-b dark:bg-gray-900 dark:border-gray-700"},[t("td",rt,o(l.buyer.first_name),1),t("td",_t,o(l.buyer.email),1),t("td",ut,o(l.p_option.product.name),1),pt,t("td",ht,o(l.created_at),1),t("td",vt,[t("div",yt,[t("button",{onClick:C=>z(l.id)},xt,8,ft),t("button",{onClick:p},bt),t("button",{onClick:C=>n(l.id)},$t,8,wt)])])]))),128))])])]),u.value?(e(),w(ot,{key:0,id:_.value,onClose:a[0]||(a[0]=l=>u.value=!1)},null,8,["id"])):v("",!0),r.value?(e(),w(B,{key:1,onCanceldelete:a[1]||(a[1]=l=>r.value=!1),id:_.value,onDeletenotify:a[2]||(a[2]=l=>r.value=!1)},null,8,["id"])):v("",!0)],64))}};export{Mt as default};