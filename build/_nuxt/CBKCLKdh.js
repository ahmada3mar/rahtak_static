import{l as S,j as g,m as U,P as j,c as r,d as n,a as s,w as o,o as l,e as N,f as A,t as B,F as D,r as E,b as M,g as R,h as L,_ as G}from"./C0QMzjgp.js";import{a as O,_ as q}from"./D2hRbPYj.js";import{_ as H}from"./C3ZNbyct.js";import{_ as J}from"./B101c9wz.js";import{_ as K}from"./CeBeLe1J.js";import{_ as Q}from"./D-5T6m90.js";import{_ as W}from"./dO6MjP5l.js";import{_ as X}from"./CQyNw8QI.js";import Y from"./DEo09LKX.js";import"./CSR_V0CX.js";import"./ChayOu5x.js";import"./mDn3YsyS.js";import"./DjSKj6tj.js";const Z={data(){return{response:null,resource:null,config:{values:[]},options:Y}},methods:{save(){g("/merchants/8ac7a4c77f430065017f4527d82b0d49",{method:"PUT",body:{...this.resource}}).then(()=>{U().add({title:"Merchant updated success",icon:"i-heroicons-check-circle-20-solid"})})}},methods:{addConfig(){this.config.values.push({name:"",value:""})},removeConfig(i){this.config.values.splice(i,1)},save(){const i={};this.config.values.forEach(u=>{i[u.name]=u.value});const p={...this.response,...this.resource,config:{values:i}};g(`/merchants/${(this._.provides[j]||this.$route).params.id}`,{method:"PUT",body:p}).then(u=>{U().add({title:"Created successfully",icon:"i-heroicons-x-mark",color:"green"})})}},mounted(){g(`/merchants/${(this._.provides[j]||this.$route).params.id}`).then(i=>{var y;this.response=i;const{updated_at:p,created_by:u,created_at:b,channels:a,reviewed:_,config:m,rules_ids:f,available_rules:h,activities:x,...v}=i;this.resource=v,this.response.rules_ids=this.response.rules_ids.filter(c=>this.response.available_rules.includes(c)),(y=this.response.config)!=null&&y.values&&Object.keys(this.response.config.values).forEach(c=>{var d;this.config.values.push({name:c,value:(d=this.response.config)==null?void 0:d.values[c]})})})}},$={key:0},ee={class:"py-4 mb-8 rounded-md bg-white-bk"},se={key:0,class:"flex justify-end"},te={class:"pl-2 col-start-2"},oe={key:0},ne={key:1},ae={class:"py-4 mb-8 rounded-md bg-white-bk"},ie=n("div",{class:"p-4 flex justify-between items-center"},[n("p",null,"Configs")],-1),le={class:"flex flex-col items-center justify-center flex-1 px-6 py-5 sm:px-14"},re={class:"flex items-center justify-center gap-5"},ce=n("span",{class:"text-gray-400"},"No Configs",-1),de={class:"flex justify-end gap-5"},pe={class:"py-4 mb-8 rounded-md bg-white-bk"},ue=n("p",{class:"p-4"},"Channels",-1),_e={class:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14"},me={class:"flex items-center justify-center mb-4 gap-5"},fe=n("span",{class:"text-gray-400"},"No channels",-1),he={key:1};function ve(i,p,u,b,a,_){const m=R,f=L,h=O,x=H,v=J,y=K,c=q,d=Q,k=W,z=G,T=X;return l(),r("div",null,[a.response?(l(),r("div",$,[n("div",ee,[s(d,{class:"w-full",ui:{base:"p-5",ring:"",divide:"divide-none",header:{padding:"px-4 py-5"},body:{padding:"",base:"min-w-fit"},footer:{padding:"p-4"}}},{default:o(()=>[i.$can("update merchants")?(l(),r("div",se,[s(f,{onClick:_.save,color:"primary",variant:"outline"},{default:o(()=>[s(m,{name:"iconoir:save-floppy-disk"}),N(" Save ")]),_:1},8,["onClick"])])):A("",!0),s(x,{resource:a.resource},{id:o(({value:t})=>[s(h,{disabled:"",value:t},null,8,["value"])]),_:1},8,["resource"]),s(c,{label:"Rules"},{default:o(()=>{var t;return[s(y,{uiMenu:{option:{container:"flex items-center gap-1.5 min-w-0 pl-10",selectedIcon:{wrapper:"absolute inset-y-0 start-0 flex items-center px-4"}}},modelValue:a.response.rules_ids,"onUpdate:modelValue":p[0]||(p[0]=e=>a.response.rules_ids=e),"value-attribute":"id","option-attribute":"name",options:(t=a.response)==null?void 0:t.available_rules,multiple:"",placeholder:"Rules"},{option:o(({option:e})=>[s(v,{class:"capitalize text-[10px] p-1 py-0 justify-center w-11",label:e.is_default?"default":"custom",color:e.is_default?"blue":"teal"},null,8,["label","color"]),n("span",te,B(e.name),1)]),label:o(()=>{var e,w;return[(w=(e=a.response)==null?void 0:e.rules_ids)!=null&&w.length?(l(),r("span",oe,[(l(!0),r(D,null,E(a.response.rules_ids,(F,I)=>{var C,V;return l(),M(v,{class:"mr-2 capitalize justify-center",size:"xs",label:((V=(C=a.response)==null?void 0:C.available_rules.filter(P=>P.id==F)[0])==null?void 0:V.name)||"N/A",color:"primary",key:I},null,8,["label"])}),128))])):(l(),r("span",ne,"No rules attached"))]}),_:1},8,["modelValue","options"])]}),_:1})]),_:1})]),n("div",ae,[s(d,{class:"w-full",ui:{base:"",ring:"",divide:"divide-y divide-gray-200 dark:divide-gray-700 min-w-fit",header:{padding:"px-4 py-5"},body:{padding:"",base:"divide-y divide-gray-200 dark:divide-gray-700 min-w-fit"},footer:{padding:"p-4"}}},{footer:o(()=>[n("div",de,[s(f,{onClick:_.addConfig,icon:"i-line-md-plus",variant:"link",color:"green",label:"Add config"},null,8,["onClick"])])]),default:o(()=>[ie,s(k,{ui:{th:{base:"text-left last:text-center last:w-5 last:pr-5  last:px-0"},td:{base:"last:text-center last:w-5 last:pr-5  last:px-0"}},rows:a.config.values,columns:[{label:"Name",key:"name"},{label:"Value",key:"value"},{label:"Delete",key:"delete"}],"sort-asc-icon":"i-heroicons-arrow-up","sort-desc-icon":"i-heroicons-arrow-down",class:"w-full"},{"name-data":o(({row:t})=>[s(h,{color:`${a.config.values.filter(e=>e.name==t.name).length>1?"red":"white"}`,modelValue:t.name,"onUpdate:modelValue":e=>t.name=e},null,8,["color","modelValue","onUpdate:modelValue"])]),"value-data":o(({row:t})=>[s(h,{modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},null,8,["modelValue","onUpdate:modelValue"])]),"delete-data":o(({index:t})=>[s(f,{class:"mx-1",onClick:e=>_.removeConfig(t),icon:"i-heroicons-trash",variant:"soft",color:"red"},null,8,["onClick"])]),"empty-state":o(()=>[n("div",le,[n("div",re,[s(m,{color:"rgb(var(--color-gray-400) / var(--tw-text-opacity))",name:"iconoir:info-empty",size:"50px"}),ce])])]),_:1},8,["rows"])]),_:1})]),n("div",pe,[s(d,{class:"w-full",ui:{base:"",ring:"",divide:"divide-y divide-gray-200 dark:divide-gray-700 min-w-fit",header:{padding:"px-4 py-5"},body:{padding:"",base:"divide-y divide-gray-200 dark:divide-gray-700 min-w-fit"},footer:{padding:"p-4"}}},{default:o(()=>{var t;return[ue,s(k,{ui:{th:{base:"text-left"}},rows:(t=a.response)==null?void 0:t.channels,columns:[{key:"id",label:"Channel ID"},{key:"name",label:"Channel name"},{key:"created_at",label:"Created at"}],"sort-asc-icon":"i-heroicons-arrow-up","sort-desc-icon":"i-heroicons-arrow-down",class:"w-full"},{"id-data":o(({row:e})=>[s(z,{to:{name:"merchants-id",params:{id:e==null?void 0:e.id}},class:"text-primary font-bold underline dark:text-gray-400"},{default:o(()=>[N(B(e==null?void 0:e.id),1)]),_:2},1032,["to"])]),"empty-state":o(()=>[n("div",_e,[n("div",me,[s(m,{color:"rgb(var(--color-gray-400) / var(--tw-text-opacity))",name:"iconoir:info-empty",size:"50px"}),fe])])]),_:1},8,["rows"])]}),_:1})])])):(l(),r("div",he,[s(T,{count:8})]))])}const Te=S(Z,[["render",ve]]);export{Te as default};
