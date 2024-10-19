import{_ as N}from"./BScuflr9.js";import{c as y,a,w as n,u as t,j as C,o as l,F,r as j,b,f as U,e as V,t as A,d as v,h as L,_ as T,g as E}from"./BaDTJlVb.js";import{_ as G}from"./DooR7aac.js";import{_ as I}from"./BAHLOY-X.js";import{a as M,_ as O}from"./BSWKwCqX.js";import{_ as P}from"./oFK375q7.js";import{o as f,s as d,p as z,d as x,n as D,_ as H}from"./BFarlzf4.js";import{_ as J}from"./jlaydRhK.js";import i from"./BiOA115m.js";import"./B8oC8YW5.js";import"./DucMm7Dp.js";import"./BT86SFtm.js";import"./BfeqGGKE.js";import"./D2-L4YOt.js";import"./MTP1cPQq.js";import"./Bm_J15cA.js";const K={class:"p-4 flex-1"},Q={class:"flex justify-end"},R={data(){return{addUser:!1,user:{roles:{value:null},branch_id:{value:null}},options:i}},methods:{createUser(){var m,e;let u={...this.user};u.roles=[(m=this.user.roles)==null?void 0:m.value],u.branch_id=(e=this.user.branch_id)==null?void 0:e.value,C("/users",{method:"POST",body:u}).then(()=>{this.addUser=!1,this.$refs.table.refresh(),this.user={roles:[]}})}}},pe=Object.assign(R,{__name:"index",setup(u){const m=f({name:d("Name is required"),branch_id:f({value:z(D("branch_id is required"),x("based on is required"))}),mobile:d("Mobile is required"),password:d("Password is required"),roles:f({value:z(d("roles is required"),x("based on is required"))})});return(e,s)=>{const k=N,p=L,g=G,w=T,S=I,q=E,c=M,r=O,h=P,$=H,B=J;return l(),y("div",null,[a(S,{ref:"table",columns:t(i).columns,filters:t(i).filters,url:"/users"},{"roles-data":n(({row:o})=>[(l(!0),y(F,null,j(o.roles,_=>(l(),b(k,{key:_.name,ui:{rounded:"rounded-full"},class:"mx-1 capitalize",size:"xs",label:_.name,color:_.name.toLowerCase().includes("admin")?"emerald":"orange"},null,8,["label","color"]))),128))]),"extra-header":n(()=>[e.$can("create users")?(l(),b(p,{key:0,size:"xs",onClick:s[0]||(s[0]=o=>e.addUser=!0),label:"اضافة مستخدم"})):U("",!0)]),"extra-actions":n(()=>[a(g,{text:"delete"},{default:n(()=>[e.$can("delete users")?(l(),b(p,{key:0,class:"p-0 text-red-500 mx-1 pb-1",variant:"link",size:"md",icon:"i-heroicons-trash"})):U("",!0)]),_:1})]),"name-data":n(({row:o})=>[a(w,{class:"text-primary font-bold underline",to:{name:"users-id",params:{id:o.id}}},{default:n(()=>[V(A(o.name),1)]),_:2},1032,["to"])]),_:1},8,["columns","filters"]),a(B,{modelValue:e.addUser,"onUpdate:modelValue":s[6]||(s[6]=o=>e.addUser=o)},{default:n(()=>[v("div",K,[a($,{schema:t(m),state:e.user,onSubmit:e.createUser},{default:n(()=>[v("div",Q,[a(p,{type:"submit",color:"primary",variant:"outline"},{default:n(()=>[a(q,{name:"heroicons:user-plus"}),V(" Create User ")]),_:1})]),a(r,{class:"my-2 capitalize",label:"الاسم",name:"name"},{default:n(()=>[a(c,{icon:"i-heroicons-user-circle",size:"md",modelValue:e.user.name,"onUpdate:modelValue":s[1]||(s[1]=o=>e.user.name=o),variant:"outline"},null,8,["modelValue"])]),_:1}),a(r,{class:"my-2 capitalize",label:"موبايل",name:"mobile"},{default:n(()=>[a(c,{icon:"i-heroicons-at-symbol",size:"md",modelValue:e.user.mobile,"onUpdate:modelValue":s[2]||(s[2]=o=>e.user.mobile=o),variant:"outline"},null,8,["modelValue"])]),_:1}),a(r,{class:"my-2 capitalize",label:"كلمة المرور",name:"password"},{default:n(()=>[a(c,{icon:"i-heroicons-finger-print-solid",size:"md",type:"password",modelValue:e.user.password,"onUpdate:modelValue":s[3]||(s[3]=o=>e.user.password=o),variant:"outline"},null,8,["modelValue"])]),_:1}),a(r,{class:"my-2 capitalize",label:"الدور",name:"roles.value"},{default:n(()=>[a(h,{modelValue:e.user.roles,"onUpdate:modelValue":s[4]||(s[4]=o=>e.user.roles=o),"option-attribute":"value",by:"value",searchable:t(i).searchAsync,placeholder:"Select roles..."},null,8,["modelValue","searchable"])]),_:1}),a(r,{class:"my-2 capitalize",label:"الفرع",name:"branch_id.value"},{default:n(()=>[a(h,{modelValue:e.user.branch_id,"onUpdate:modelValue":s[5]||(s[5]=o=>e.user.branch_id=o),"option-attribute":"label",by:"value",searchable:t(i).searchGroupAsync,placeholder:"Select branch..."},null,8,["modelValue","searchable"])]),_:1})]),_:1},8,["schema","state","onSubmit"])])]),_:1},8,["modelValue"])])}}});export{pe as default};
