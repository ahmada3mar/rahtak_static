import{_ as N}from"./etka5WHZ.js";import{c as y,a as o,w as r,u as n,j as C,o as l,F,r as j,b,f as U,e as V,t as A,d as v,h as L,_ as T,g as E}from"./CoG7h6FH.js";import{_ as G}from"./DGr3VPFq.js";import{_ as I}from"./ByztRZBZ.js";import{a as M,_ as O}from"./VRrd0pE0.js";import{_ as P}from"./D0qMK5Um.js";import{o as f,s as d,p as z,d as x,n as D,_ as H}from"./BQMDyy34.js";import{_ as J}from"./aGSfHpKg.js";import i from"./C_TBhWd5.js";import"./CwoNnZx2.js";import"./BpYWtPHU.js";import"./BctIDPK0.js";import"./NQndlOba.js";import"./DdOCX8m7.js";import"./Bz3EP7Ex.js";import"./BDxSIY00.js";import"./CVOac5bM.js";const K={class:"p-4 flex-1"},Q={class:"flex justify-end"},R={data(){return{addUser:!1,user:{roles:{value:null},branch_id:{value:null}},options:i}},methods:{createUser(){var m,e;let u={...this.user};u.roles=[(m=this.user.roles)==null?void 0:m.value],u.branch_id=(e=this.user.branch_id)==null?void 0:e.value,C("/users",{method:"POST",body:u}).then(()=>{this.addUser=!1,this.$refs.table.refresh(),this.user={roles:[]}})}}},ce=Object.assign(R,{__name:"index",setup(u){const m=f({name:d("Name is required"),branch_id:f({value:z(D("branch_id is required"),x("based on is required"))}),mobile:d("Mobile is required"),password:d("Password is required"),roles:f({value:z(d("roles is required"),x("based on is required"))})});return(e,s)=>{const k=N,p=L,g=G,w=T,S=I,q=E,c=M,t=O,h=P,$=H,B=J;return l(),y("div",null,[o(S,{ref:"table",columns:n(i).columns,filters:n(i).filters,url:"/users"},{"roles-data":r(({row:a})=>[(l(!0),y(F,null,j(a.roles,_=>(l(),b(k,{key:_.name,ui:{rounded:"rounded-full"},class:"mx-1 capitalize",size:"xs",label:_.name,color:_.name.toLowerCase().includes("admin")?"emerald":"orange"},null,8,["label","color"]))),128))]),"extra-header":r(()=>[e.$can("create users")?(l(),b(p,{key:0,size:"xs",onClick:s[0]||(s[0]=a=>e.addUser=!0),label:"اضافة مستخدم"})):U("",!0)]),"extra-actions":r(()=>[o(g,{text:"delete"},{default:r(()=>[e.$can("delete users")?(l(),b(p,{key:0,class:"p-0 text-red-500 mx-1 pb-1",variant:"link",size:"md",icon:"i-heroicons-trash"})):U("",!0)]),_:1})]),"name-data":r(({row:a})=>[o(w,{class:"text-primary font-bold underline dark:text-gray-400",to:{name:"users-id",params:{id:a.id}}},{default:r(()=>[V(A(a.name),1)]),_:2},1032,["to"])]),_:1},8,["columns","filters"]),o(B,{modelValue:e.addUser,"onUpdate:modelValue":s[6]||(s[6]=a=>e.addUser=a)},{default:r(()=>[v("div",K,[o($,{schema:n(m),state:e.user,onSubmit:e.createUser},{default:r(()=>[v("div",Q,[o(p,{type:"submit",color:"primary",variant:"outline"},{default:r(()=>[o(q,{name:"heroicons:user-plus"}),V(" Create User ")]),_:1})]),o(t,{class:"my-2 capitalize",label:"الاسم",name:"name"},{default:r(()=>[o(c,{icon:"i-heroicons-user-circle",size:"md",modelValue:e.user.name,"onUpdate:modelValue":s[1]||(s[1]=a=>e.user.name=a),variant:"outline"},null,8,["modelValue"])]),_:1}),o(t,{class:"my-2 capitalize",label:"موبايل",name:"mobile"},{default:r(()=>[o(c,{icon:"i-heroicons-at-symbol",size:"md",modelValue:e.user.mobile,"onUpdate:modelValue":s[2]||(s[2]=a=>e.user.mobile=a),variant:"outline"},null,8,["modelValue"])]),_:1}),o(t,{class:"my-2 capitalize",label:"كلمة المرور",name:"password"},{default:r(()=>[o(c,{icon:"i-heroicons-finger-print-solid",size:"md",type:"password",modelValue:e.user.password,"onUpdate:modelValue":s[3]||(s[3]=a=>e.user.password=a),variant:"outline"},null,8,["modelValue"])]),_:1}),o(t,{class:"my-2 capitalize",label:"الدور",name:"roles.value"},{default:r(()=>[o(h,{modelValue:e.user.roles,"onUpdate:modelValue":s[4]||(s[4]=a=>e.user.roles=a),"option-attribute":"value",by:"value",searchable:n(i).searchAsync,placeholder:"Select roles..."},null,8,["modelValue","searchable"])]),_:1}),o(t,{class:"my-2 capitalize",label:"الفرع",name:"branch_id.value"},{default:r(()=>[o(h,{modelValue:e.user.branch_id,"onUpdate:modelValue":s[5]||(s[5]=a=>e.user.branch_id=a),"option-attribute":"label",by:"value",searchable:n(i).searchGroupAsync,placeholder:"Select branch..."},null,8,["modelValue","searchable"])]),_:1})]),_:1},8,["schema","state","onSubmit"])])]),_:1},8,["modelValue"])])}}});export{ce as default};