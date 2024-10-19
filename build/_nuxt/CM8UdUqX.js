import{_ as D}from"./CGEdH86A.js";import{l as I,j,P as F,b as m,w as n,o as l,c as a,d as s,f as u,a as e,F as v,r as b,h as N,_ as S,C as T,D as V}from"./C0QMzjgp.js";import{d as A,_ as E,a as L,b as P,c as R}from"./hntELtMf.js";import{_ as H}from"./C3ZNbyct.js";import{a as J,_ as K}from"./D2hRbPYj.js";import{_ as M}from"./CQyNw8QI.js";import{_ as Q}from"./D-5T6m90.js";import W from"./B_AtC_7c.js";import"./BMXSq6Id.js";import"./mDn3YsyS.js";import"./dO6MjP5l.js";import"./DjSKj6tj.js";import"./CQRw3t0R.js";import"./ChayOu5x.js";import"./CSR_V0CX.js";const X={data(){return{resource:{},response:{},info_resource:null,query_resource:null,open_history:!1,options:W}},mounted(){j(`/rules/${(this._.provides[F]||this.$route).params.id}`).then(o=>{this.info_resource={id:o.id,name:o.name,description:o.description,action:o.action,created_at:o.created_at},this.query_resource={table:o.table,tables:o.tables,distinct:o.distinct,conditions:o.conditions,basedOn:o.basedOn},this.resource=o,this.response=o})}},p=o=>(T("data-v-30a2972f"),o=o(),V(),o),Y={key:0},Z={class:"py-4 mb-8 rounded-md"},G={key:0,class:"flex justify-end"},$={class:"grid my-4 gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"},ee={class:"grid grid-cols-3 overflow-y-auto"},se={class:"flex flex-col p-4"},te={class:"p-4 flex-1 col-span-2 overflow-y-auto"},oe={class:"grid grid-cols-4 items-center"},le={class:""},ne=p(()=>s("div",{class:"px-2 flex flex-col items-center"},[s("span",null,"|"),s("small",null,"Join"),s("span",null,"|")],-1)),ae={class:"flex gap-1 items-center relative"},re={key:0,class:"grid grid-cols-3 items-center"},ie={class:"border p-4"},ce={class:"p-4 flex flex-col gap-5 border border-gray-500 rounded"},ue={class:"relative"},de={class:"relative"},_e={class:"grid grid-cols-3 gap-3"},me=p(()=>s("h4",{class:"text-sm text-black"},"Determiner",-1)),pe={class:"flex gap-3"},ve={class:"flex items-center gap-3"},be=p(()=>s("label",{class:"text-sm text-nowrap",for:"based_on"},"Based on",-1)),fe={key:0,disabled:"",class:"relative"},he={class:"flex items-center gap-2"},ye=p(()=>s("label",{for:"based_on"},"Result: ",-1)),ge={key:0,class:"flex items-center gap-2 mr-20 mt-5 groupBy"},xe=p(()=>s("label",{for:"based_on"},"Group by:",-1)),ke={class:"relative mx-3"},qe={key:1,class:"px-4"};function Oe(o,we,Be,Ue,t,ze){const k=D,q=N,O=S,h=A,w=E,y=L,B=H,r=J,i=K,g=P,x=R,U=M,z=Q;return l(),m(z,{class:"w-full"},{default:n(()=>[t.info_resource?(l(),a("div",Y,[s("div",Z,[o.$can("update rules")?(l(),a("div",G,[t.response.activities.length?(l(),m(k,{key:0,response:t.response},null,8,["response"])):u("",!0),e(O,{to:{name:"rules-id-edit",params:{id:t.resource.id}}},{default:n(()=>[e(q,{icon:"i-heroicons-pencil-square",color:"primary",label:"Edit",variant:"outline"})]),_:1},8,["to"])])):u("",!0),s("div",$,[e(h,{ui:{title:"truncate"},title:t.response.is_default?"Default":"Custom",color:t.response.is_default?"green":"orange",variant:"outline"},null,8,["title","color"]),e(h,{ui:{title:"truncate"},title:"During "+o.$dayjs.duration(t.response.interval,"m").humanize(),color:"green",variant:"outline"},null,8,["title"])]),s("div",ee,[s("div",se,[e(B,{disabled:"",resource:t.info_resource},{description:n(({value:c})=>[e(w,{disabled:"",rows:9,icon:"i-heroicons-rule-circle",size:"md","model-value":c,variant:"outline"},null,8,["model-value"])]),is_default:n(({value:c})=>[e(y,{"model-value":c},null,8,["model-value"])]),_:1},8,["resource"])]),s("div",te,[e(i,{class:"my-2 capitalize",label:"Tables",name:"table"},{default:n(()=>[s("div",oe,[s("div",le,[e(r,{disabled:"","model-value":t.query_resource.table},null,8,["model-value"])]),(l(!0),a(v,null,b(t.query_resource.tables,(c,d)=>(l(),a("div",{key:d,class:"grid items-center",style:{"grid-template-columns":"45px auto"}},[ne,s("div",ae,[e(r,{disabled:"","model-value":c},null,8,["model-value"])])]))),128))])]),_:1}),e(i,{class:"my-5 capitalize",name:"distinct",ui:{label:{wrapper:"flex gap-5 justify-start"}},label:"Distinct"},{hint:n(()=>[e(y,{icon:"i-heroicons-rule-circle",size:"md",disabled:"","model-value":!!t.query_resource.distinct,variant:"outline"},null,8,["model-value"])]),default:n(()=>[t.query_resource.distinct?(l(),a("div",re,[e(r,{disabled:"","model-value":t.query_resource.distinct},null,8,["model-value"])])):u("",!0)]),_:1}),e(i,{class:"my-2 capitalize",label:"Conditions"},{default:n(()=>[s("div",ie,[(l(!0),a(v,null,b(t.query_resource.conditions,(c,d)=>(l(),a("div",{key:d,class:"my-2 capitalize flex flex-col gap-5"},[c.attached?(l(),m(x,{key:0,ui:{base:"-mx-2 rounded-full  absolute top-1/2 me-2 bg-transparent dark:bg-transparent w-14 h-[30px]"}},{default:n(()=>[e(g,{class:"my-2",label:c.attached},null,8,["label"])]),_:2},1024)):u("",!0),s("div",ce,[(l(!0),a(v,null,b(c.statements,(f,_)=>(l(),a("div",ue,[s("div",de,[_?(l(),m(g,{key:0,class:"mb-3",label:c.joins[_-1]},null,8,["label"])):u("",!0),_?(l(),m(x,{key:1,ui:{wrapper:"",base:"-mx-2 rounded-full  absolute right-0 top-1/2  me-2 bg-transparent dark:bg-transparent w-12 h-[25px]"}})):u("",!0)]),s("div",_e,[e(i,{name:`conditions.${d}.statements.${_}.column`},{default:n(()=>[e(r,{disabled:"","model-value":f.column},null,8,["model-value"])]),_:2},1032,["name"]),e(i,{name:`conditions.${d}.statements.${_}.operator`},{default:n(()=>[e(r,{disabled:"","model-value":f.operator},null,8,["model-value"])]),_:2},1032,["name"]),e(i,{name:`conditions.${d}.statements.${_}.operator`},{default:n(()=>[(l(!0),a(v,null,b(f.value,(C,Ce)=>(l(),m(r,{class:"mb-2",disabled:"","model-value":C},null,8,["model-value"]))),256))]),_:2},1032,["name"])])]))),256))])]))),128))])]),_:1}),me,s("div",pe,[e(i,{class:"my-2 capitalize",name:"basedOn.name"},{default:n(()=>[s("div",ve,[be,e(r,{disabled:"","model-value":t.query_resource.basedOn.name},null,8,["model-value"])])]),_:1}),e(i,{name:"basedOn.value",class:"flex items-center"},{default:n(()=>[t.query_resource.basedOn.name=="sum"?(l(),a("div",fe,[e(r,{disabled:"","model-value":t.query_resource.basedOn.value},null,8,["model-value"])])):u("",!0)]),_:1}),e(i,{name:"basedOn.operator",class:"flex items-center"},{default:n(()=>[e(r,{disabled:"","model-value":t.query_resource.basedOn.operator},null,8,["model-value"])]),_:1}),e(i,{name:"basedOn.result",class:"flex items-center"},{default:n(()=>[s("div",he,[ye,e(r,{disabled:"","model-value":t.query_resource.basedOn.result},null,8,["model-value"])])]),_:1})]),e(i,{name:"basedOn.groupBy"},{default:n(()=>[t.query_resource.basedOn.name=="sum"?(l(),a("div",ge,[xe,s("div",ke,[e(r,{disabled:"","model-value":t.query_resource.basedOn.groupBy},null,8,["model-value"])])])):u("",!0)]),_:1})])])])])):(l(),a("div",qe,[e(U,{count:8})]))]),_:1})}const Ke=I(X,[["render",Oe],["__scopeId","data-v-30a2972f"]]);export{Ke as default};
