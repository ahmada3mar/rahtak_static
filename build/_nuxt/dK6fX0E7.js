import{_ as C}from"./CGEdH86A.js";import{l as F,j as N,P as j,b as r,w as i,o,c as n,d as p,f as u,a as _,F as d,r as f,h as w,_ as E}from"./C0QMzjgp.js";import{_ as L}from"./DjSKj6tj.js";import{_ as P}from"./D2hRbPYj.js";import{_ as q}from"./C3ZNbyct.js";import{_ as A}from"./CQyNw8QI.js";import{_ as G}from"./D-5T6m90.js";import H from"./51CEU6Uh.js";import"./BMXSq6Id.js";import"./mDn3YsyS.js";import"./dO6MjP5l.js";import"./CQRw3t0R.js";import"./ChayOu5x.js";const O={data(){return{resource:null,response:null,options:H}},mounted(){N(`/roles/${(this._.provides[j]||this.$route).params.id}`).then(s=>{this.resource={name:s.name,permissions:s.permissions.map(t=>t.name)},this.response=s})},methods:{}},R={key:0},S={class:"py-4 mb-8 rounded-md"},$={key:0,class:"flex justify-end"},z={class:"grid grid-cols-2 xl:grid-cols-4"},D={key:1,class:"p-4"};function I(s,t,J,K,e,M){const h=C,x=w,b=E,k=L,v=P,y=q,V=A,g=G;return o(),r(g,{class:"w-full"},{default:i(()=>{var m,a;return[e.resource?(o(),n("div",R,[p("div",S,[s.$can("update roles")?(o(),n("div",$,[(a=(m=e.response)==null?void 0:m.activities)!=null&&a.length?(o(),r(h,{key:0,response:e.response},null,8,["response"])):u("",!0),_(b,{to:{name:"roles-id-edit",params:{id:e.resource.id}}},{default:i(()=>[_(x,{icon:"i-heroicons-pencil-square",color:"primary",label:"Edit",variant:"outline"})]),_:1},8,["to"])])):u("",!0),_(y,{disabled:"",resource:e.resource},{permissions:i(()=>[p("div",z,[(o(!0),n(d,null,f(Object.keys(e.response.available_permissions),l=>(o(),r(v,{class:"my-2",label:l},{default:i(()=>[(o(!0),n(d,null,f(e.response.available_permissions[l],(c,B)=>(o(),r(k,{disabled:"",label:c.name,key:B,id:c.name,value:c.name,modelValue:e.resource.permissions,"onUpdate:modelValue":t[0]||(t[0]=U=>e.resource.permissions=U)},null,8,["label","id","value","modelValue"]))),128))]),_:2},1032,["label"]))),256))])]),_:1},8,["resource"])])])):(o(),n("div",D,[_(V,{count:8})]))]}),_:1})}const _e=F(O,[["render",I]]);export{_e as default};