import{_ as C}from"./BScuflr9.js";import{c,a as o,w as t,u as d,o as m,F as $,r as U,b as V,d as l,t as s,e as f,n as j,f as B,_ as N,g as z,h as E}from"./BaDTJlVb.js";import{_ as F}from"./DooR7aac.js";import{_ as L}from"./BAHLOY-X.js";import{_ as O}from"./BSWKwCqX.js";import{_ as T}from"./D2-L4YOt.js";import{_ as A}from"./Bm_J15cA.js";import{_ as M}from"./DucMm7Dp.js";import i from"./cy25XQ9x.js";import"./B8oC8YW5.js";import"./oFK375q7.js";import"./BfeqGGKE.js";import"./BT86SFtm.js";import"./MTP1cPQq.js";const D=["onClick"],G={class:"flex gap-2"},I={class:"flex items-center justify-between"},S=l("h3",{class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"}," Changes ",-1),q={key:0},H={class:"px-2 bg-green-300 text-primary"},J={class:"px-2 line-through bg-red-300 text-primary"},K={data(){return{open:!1,log:null,options:i}},methods:{view(_){this.open=!0;let n=[];Object.keys(_.properties.attributes).forEach(a=>{n.push({new:{key:a,value:_.properties.attributes[a]},old:{key:a,value:_.properties.old[a]}})}),this.log=n}}},re=Object.assign(K,{__name:"index",setup(_){return(n,a)=>{const u=C,p=N,x=z,v=F,g=L,h=E,b=O,y=T,k=A,w=M;return m(),c("div",null,[o(g,{ref:"table",columns:d(i).columns,filters:d(i).filters,url:"/activities",ui:{th:{base:"text-left"}}},{"roles-data":t(({row:e})=>[(m(!0),c($,null,U(e.roles,r=>(m(),V(u,{key:r.name,ui:{rounded:"rounded-full"},class:"mx-1 capitalize",size:"xs",label:r.name,color:r.name.toLowerCase().includes("admin")?"emerald":"orange"},null,8,["label","color"]))),128))]),"id-data":t(({row:e})=>[l("span",{role:"button",class:"underline text-primary font-bold",onClick:r=>n.view(e)},s(e.id),9,D)]),"causer-data":t(({row:e})=>[o(p,{class:"text-primary font-bold underline",to:{name:"users-id",params:{id:e.causer.id}}},{default:t(()=>[f(s(e.causer.name),1)]),_:2},1032,["to"])]),"event-data":t(({row:e})=>[o(u,{variant:"soft",label:e.event,color:d(i).resolveEventColor(e.event)},null,8,["label","color"])]),"subject-data":t(({row:e})=>[l("span",{class:j(`text-[11px] w-16 text-center inline-block 
      bg-${d(i).resolveColor(e.log_name)}-500 
      rounded-lg text-gray-200 px-1 mr-2`)},s(e.subject_type.replace("App\\Models\\","")),3),o(p,{class:"text-primary font-bold underline",to:{name:`${e.log_name}s-id`,params:{id:e.subject.id}}},{default:t(()=>[f(s(e.subject.name),1)]),_:2},1032,["to"])]),"actions-data":t(({row:e})=>[l("div",G,[o(v,{role:"button",onClick:r=>n.view(e),text:"View"},{default:t(()=>[o(x,{role:"button",class:"hover:text-primary mx-1",name:"carbon:view"})]),_:2},1032,["onClick"])])]),_:1},8,["columns","filters"]),o(w,{id:"lll",ui:{width:"w-full sm:max-w-3xl"},modelValue:n.open,"onUpdate:modelValue":a[1]||(a[1]=e=>n.open=e)},{default:t(()=>[o(k,{ui:{ring:"",divide:"divide-y divide-gray-100 dark:divide-gray-800"}},{header:t(()=>[l("div",I,[S,o(h,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:a[0]||(a[0]=e=>n.open=!1)})])]),default:t(()=>[n.log?(m(),c("div",q,[o(y,{columns:[{key:"old",label:"Old"},{key:"new",label:"New"}],rows:n.log},{"new-data":t(({row:e})=>[o(b,{label:e.new.key},{default:t(()=>[l("label",H,s(e.new.value),1)]),_:2},1032,["label"])]),"old-data":t(({row:e})=>[o(b,{label:e.old.key},{default:t(()=>[l("label",J,s(e.old.value),1)]),_:2},1032,["label"])]),_:1},8,["rows"])])):B("",!0)]),_:1})]),_:1},8,["modelValue"])])}}});export{re as default};
