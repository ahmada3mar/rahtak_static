import{_ as D}from"./DpJIlhw1.js";import{l as I,j as L,P,c as a,a as e,w as t,f as h,d as o,o as n,b as U,e as V,t as g,F as T,r as q,h as G,_ as H,g as M}from"./DkjnHYNC.js";import{_ as O}from"./B7W1RA6L.js";import{_ as J}from"./ChgCovpv.js";import{_ as K}from"./D8muxX-I.js";import{_ as Q}from"./C1qNP5fO.js";import{_ as W}from"./BPpa9h3-.js";import{_ as X}from"./qP7ueB3e.js";import{_ as Y}from"./CNgx7MjZ.js";import Z from"./DkpGBWhZ.js";import"./BhjNqLyH.js";import"./OvrWM3Ul.js";import"./bytfvySq.js";import"./zD-oC1t3.js";import"./qxXErEEh.js";const $={data(){return{response:null,resource:null,config:{values:[]},options:Z}},mounted(){L(`/channels/${(this._.provides[P]||this.$route).params.id}`).then(p=>{var m;this.response=p;const{updated_at:y,created_by:B,created_at:z,channels:s,reviewed:F,config:b,rules_ids:x,available_rules:_,activities:v,...u}=p;this.resource=u,this.response.rules_ids=this.response.rules_ids.filter(l=>this.response.available_rules.includes(l)),(m=this.response.config)!=null&&m.values&&Object.keys(this.response.config.values).forEach((l,f)=>{this.config.values.push({name:l,value:this.response.config.values[l]})})})}},ee={key:0},se={key:0,class:"py-4 mb-8 rounded-md bg-white-bk"},te={key:0,class:"flex justify-end"},oe={class:"pl-2 col-start-2"},ne={key:0},ie={key:1},re={class:"py-4 mb-8 rounded-md bg-white-bk"},ae=o("div",{class:"p-4 flex justify-between items-center"},[o("p",null,"Configs")],-1),le={class:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14"},ce={class:"flex items-center justify-center mb-4 gap-5"},de=o("span",{class:"text-gray-400"},"No Configs",-1),pe={class:"py-4 mb-8 rounded-md bg-white-bk"},_e=o("p",{class:"p-4"},"Channels",-1),ue={class:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14"},me={class:"flex items-center justify-center mb-4 gap-5"},fe=o("span",{class:"text-gray-400"},"No channels",-1),ye={key:1};function he(p,y,B,z,s,F){const b=D,x=G,_=H,v=O,u=J,m=K,l=Q,f=W,k=M,w=X,E=Y;return n(),a("div",null,[s.response?(n(),a("div",ee,[s.response?(n(),a("div",se,[e(f,{class:"w-full",ui:{base:"p-5",ring:"",divide:"divide-none",header:{padding:"px-4 py-5"},body:{padding:"",base:"min-w-fit"},footer:{padding:"p-4"}}},{default:t(()=>{var c,i;return[p.$can("update channels")?(n(),a("div",te,[(i=(c=s.response)==null?void 0:c.activities)!=null&&i.length?(n(),U(b,{key:0,response:s.response},null,8,["response"])):h("",!0),e(_,{to:{name:"channels-id-edit",params:{id:s.resource.id}}},{default:t(()=>[e(x,{icon:"i-heroicons-pencil-square",color:"primary",label:"Edit",variant:"outline"})]),_:1},8,["to"])])):h("",!0),e(v,{disabled:"",resource:s.resource},{merchant:t(({value:d})=>[e(_,{to:{name:"merchants-id",params:{id:d.id}},class:"relative block w-full underline font-bold text-primary focus:outline-none border-0 form-input rounded-md text-sm px-3 py-2 shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"},{default:t(()=>[V(g(d.name),1)]),_:2},1032,["to"])]),_:1},8,["resource"]),e(l,{label:"Rules"},{default:t(()=>{var d;return[e(m,{disabled:"",modelValue:s.response.rules_ids,"onUpdate:modelValue":y[0]||(y[0]=r=>s.response.rules_ids=r),"value-attribute":"id","option-attribute":"name",options:(d=s.response)==null?void 0:d.available_rules,multiple:"",placeholder:"Rules"},{option:t(({option:r})=>[e(u,{class:"capitalize text-[10px] p-1 py-0 justify-center w-11",label:r.is_default?"default":"custom",color:r.is_default?"blue":"teal"},null,8,["label","color"]),o("span",oe,g(r.name),1)]),label:t(()=>{var r,j;return[(j=(r=s.response)==null?void 0:r.rules_ids)!=null&&j.length?(n(),a("span",ne,[(n(!0),a(T,null,q(s.response.rules_ids,(R,S)=>{var C,N;return n(),U(u,{class:"mr-2 capitalize justify-center",size:"xs",label:((N=(C=s.response)==null?void 0:C.available_rules.filter(A=>A.id==R)[0])==null?void 0:N.name)||"N/A",color:"primary",key:S},null,8,["label"])}),128))])):(n(),a("span",ie,"No rules attached"))]}),_:1},8,["modelValue","options"])]}),_:1})]}),_:1})])):h("",!0),o("div",re,[e(f,{class:"w-full",ui:{base:"",ring:"",divide:"divide-y divide-gray-200 dark:divide-gray-700 min-w-fit",header:{padding:"px-4 py-5"},body:{padding:"",base:"divide-y divide-gray-200 dark:divide-gray-700 min-w-fit"},footer:{padding:"p-4"}}},{default:t(()=>[ae,e(w,{ui:{th:{base:"text-left"}},rows:s.config.values,"sort-asc-icon":"i-heroicons-arrow-up","sort-desc-icon":"i-heroicons-arrow-down",class:"w-full"},{"empty-state":t(()=>[o("div",le,[o("div",ce,[e(k,{color:"rgb(var(--color-gray-400) / var(--tw-text-opacity))",name:"iconoir:info-empty",size:"50px"}),de])])]),_:1},8,["rows"])]),_:1})]),o("div",pe,[e(f,{class:"w-full",ui:{base:"",ring:"",divide:"divide-y divide-gray-200 dark:divide-gray-700 min-w-fit",header:{padding:"px-4 py-5"},body:{padding:"",base:"divide-y divide-gray-200 dark:divide-gray-700 min-w-fit"},footer:{padding:"p-4"}}},{default:t(()=>{var c;return[_e,e(w,{ui:{th:{base:"text-left"}},rows:(c=s.response)==null?void 0:c.channels,columns:[{key:"id",label:"Channel ID"},{key:"name",label:"Channel name"},{key:"created_at",label:"Created at"}],"sort-asc-icon":"i-heroicons-arrow-up","sort-desc-icon":"i-heroicons-arrow-down",class:"w-full"},{"id-data":t(({row:i})=>[e(_,{to:{name:"webhook-id",params:{id:i==null?void 0:i.id}},class:"text-primary font-bold underline dark:text-gray-400"},{default:t(()=>[V(g(i==null?void 0:i.id),1)]),_:2},1032,["to"])]),"empty-state":t(()=>[o("div",ue,[o("div",me,[e(k,{color:"rgb(var(--color-gray-400) / var(--tw-text-opacity))",name:"iconoir:info-empty",size:"50px"}),fe])])]),_:1},8,["rows"])]}),_:1})])])):(n(),a("div",ye,[e(E,{count:8})]))])}const Re=I($,[["render",he]]);export{Re as default};