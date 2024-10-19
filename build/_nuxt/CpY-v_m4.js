import{_ as N}from"./BScuflr9.js";import{_ as F}from"./DooR7aac.js";import{c as t,a as l,w as a,u as g,j as O,o,F as _,r as f,b as h,d as c,n as R,e as S,t as b,f as T,h as q,g as E}from"./BaDTJlVb.js";import{_ as I}from"./BAHLOY-X.js";import{a as L,_ as W}from"./BSWKwCqX.js";import{_ as A}from"./MTP1cPQq.js";import{o as D,s as G,t as H,_ as J,a as K}from"./BFarlzf4.js";import{_ as M}from"./jlaydRhK.js";import x from"./BCdkIiwY.js";import"./B8oC8YW5.js";import"./oFK375q7.js";import"./BfeqGGKE.js";import"./BT86SFtm.js";import"./DucMm7Dp.js";import"./D2-L4YOt.js";import"./Bm_J15cA.js";const Q={key:0,class:"flex flex-wrap gap-2 w-full p-2"},X={class:"truncate"},Y={key:1},Z={class:"p-4 flex-1 overflow-y-auto"},ee={class:"flex justify-end"},oe={class:"grid grid-cols-2 my-2"},se={data(){return{openSide:!1,resource:{permissions:[]},options:x,allPermissions:[]}},methods:{createResource(){O("/roles",{method:"POST",body:this.resource}).then(()=>{this.openSide=!1,this.$refs.table.refresh(),this.resource={permissions:[]}})},async openSideWithRes(){var p,n,e;this.openSide=!0,await((p=this.$refs.table)==null?void 0:p.response),this.allPermissions=this.groupPermission((e=(n=this.$refs.table)==null?void 0:n.response)==null?void 0:e.permissions)},groupPermission(p){const n={};return p.forEach(e=>{var r;n.hasOwnProperty(e.group)?(r=n[e.group])==null||r.push(e.name):n[e.group]=[e.name]}),console.log(n),n}}},ge=Object.assign(se,{__name:"index",setup(p){const n=D({name:G("Name is required"),permissions:H([K()],"Permissions is required")});return(e,r)=>{const k=N,U=F,v=q,P=I,w=E,$=L,V=W,z=A,B=J,C=M;return o(),t("div",null,[l(P,{ref:"table",columns:g(x).columns,filters:g(x).filters,url:"/roles",ui:{th:{base:"text-left"}}},{"roles-data":a(({row:s})=>[(o(!0),t(_,null,f(s.roles,i=>(o(),h(k,{key:i.name,ui:{rounded:"rounded-full"},class:"mx-1 capitalize",size:"xs",label:i.name,color:i.name.toLowerCase().includes("admin")?"emerald":"orange"},null,8,["label","color"]))),128))]),"permissions-data":a(({row:s,response:i})=>{var m;return[(m=s.permissions)!=null&&m.length?(o(),t("div",Q,[(o(!0),t(_,null,f(Object.groupBy(s.permissions,({group:u})=>u),(u,y)=>(o(),h(U,{ui:{base:"[@media(pointer:coarse)]:hidden  px-2 py-1 text-xs font-normal truncate relative"},class:"rounded-xl w-36 dark:bg-gray-800 bg-gray-100 px-3 py-1 mx-2 flex gap-2 items-center cursor-pointer",key:y},{text:a(()=>[(o(!0),t(_,null,f(i.permissions.filter(d=>d.group==y),d=>(o(),t("div",{key:d.name,class:"italic flex gap-1 items-center"},[c("div",{class:R(`block h-2 w-2 ${u.filter(j=>j.name==d.name).length?"bg-green-500":"bg-red-500"} rounded-full`)},null,2),S(" "+b(d.name),1)]))),128))]),default:a(()=>[l(k,{ui:{rounded:"rounded-full"},color:"emerald",label:u.length},null,8,["label"]),c("div",X,b(y),1)]),_:2},1024))),128))])):(o(),t("span",Y,b(s.name)+" has no permissions yet",1))]}),"extra-header":a(()=>[e.$can("create roles")?(o(),h(v,{key:0,size:"xs",onClick:e.openSideWithRes,label:"اضافة دور"},null,8,["onClick"])):T("",!0)]),_:1},8,["columns","filters"]),l(C,{modelValue:e.openSide,"onUpdate:modelValue":r[2]||(r[2]=s=>e.openSide=s)},{default:a(()=>[c("div",Z,[l(B,{schema:g(n),state:e.resource,onSubmit:e.createResource},{default:a(()=>[c("div",ee,[l(v,{type:"submit",color:"primary",variant:"outline"},{default:a(()=>[l(w,{name:"heroicons:user-plus"}),S(" اضافة ")]),_:1})]),l(V,{class:"my-2 capitalize",label:"Name",name:"name"},{default:a(()=>[l($,{icon:"i-heroicons-shield-exclamation",size:"md",modelValue:e.resource.name,"onUpdate:modelValue":r[0]||(r[0]=s=>e.resource.name=s),variant:"outline"},null,8,["modelValue"])]),_:1}),l(V,{class:"my-2 capitalize",label:"Permissions",name:"permissions"},{default:a(()=>[(o(!0),t(_,null,f(Object.keys(e.allPermissions),(s,i)=>(o(),t("div",{class:"my-4",key:i},[c("h4",null,b(s),1),c("div",oe,[(o(!0),t(_,null,f(e.allPermissions[s],m=>(o(),h(z,{value:m,key:m,modelValue:e.resource.permissions,"onUpdate:modelValue":r[1]||(r[1]=u=>e.resource.permissions=u),label:m,name:m},null,8,["value","modelValue","label","name"]))),128))])]))),128))]),_:1})]),_:1},8,["schema","state","onSubmit"])])]),_:1},8,["modelValue"])])}}});export{ge as default};
