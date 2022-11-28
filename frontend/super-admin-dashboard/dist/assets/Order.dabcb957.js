import{u as d,g as i,c as l,r,o,b as t,a as s,f as _,F as m,d as p}from"./index.c36cb58f.js";const f={key:0},y={key:1},g=p("div",null,"No Data Here Due to time",-1),v={__name:"Order",setup(h){const{error:n,result:c,loading:u}=d(i`
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
`,{fetchPolicy:"network-only"});return l(()=>{var e,a;return(a=(e=c.value)==null?void 0:e.product)!=null?a:[]}),r(0),r(!1),r(!1),(e,a)=>(o(),t(m,null,[s(n)?(o(),t("div",f,"error loading api")):s(u)?(o(),t("div",y,"loading API")):_("",!0),g],64))}};export{v as default};
