import{_ as b}from"./CQlhs-Kp.js";import{l as B,j as w,P as C,b as i,w as c,o,c as t,d as N,f as m,a as n,F as $,r as F,h as L,_ as U}from"./BBRSKody.js";import{_ as V}from"./BLsVZqv3.js";import{_ as j}from"./ByErCGtE.js";import{_ as E}from"./_996UUey.js";import{_ as P}from"./CGnFqt5o.js";import q from"./63JmLspP.js";import"./N-RVOXpC.js";import"./RLMrsIsz.js";import"./oqbOulnE.js";import"./CReo74yQ.js";import"./CXKHNq1l.js";import"./zinKk7y7.js";import"./Dr5RZ6Yl.js";const z={data(){return{resource:null,response:null,options:q}},mounted(){w(`/permissions/${(this._.provides[C]||this.$route).params.id}`).then(s=>{const{group:p,guard_name:u,activities:d,...e}=s;this.resource=e,this.response=s})},methods:{}},A={key:0},H={class:"py-4 mb-8 rounded-md"},R={key:0,class:"flex justify-end"},S={key:1,class:"p-4"};function D(s,p,u,d,e,G){const l=b,f=L,h=U,x=V,k=j,y=E,g=P;return o(),i(g,{class:"w-full"},{default:c(()=>{var _,a;return[e.resource?(o(),t("div",A,[N("div",H,[s.$can("update permissions")?(o(),t("div",R,[(a=(_=e.response)==null?void 0:_.activities)!=null&&a.length?(o(),i(l,{key:0,response:e.response},null,8,["response"])):m("",!0),n(h,{to:{name:"permissions-id-edit",params:{id:e.resource.id}}},{default:c(()=>[n(f,{icon:"i-heroicons-pencil-square",color:"primary",label:"Edit",variant:"outline"})]),_:1},8,["to"])])):m("",!0),n(k,{disabled:"",resource:e.resource},{roles:c(({value:v})=>[(o(!0),t($,null,F(v,r=>(o(),i(x,{key:r.name,ui:{rounded:"rounded-md"},class:"mx-1",size:"lg",label:r.name,color:r.name.toLowerCase().includes("admin")?"emerald":"orange"},null,8,["label","color"]))),128))]),_:1},8,["resource"])])])):(o(),t("div",S,[n(y,{count:8})]))]}),_:1})}const te=B(z,[["render",D]]);export{te as default};