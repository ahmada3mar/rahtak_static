import{c,a as i,w as a,u as p,o as s,b as d,e as n,t as r,d as h,P as b,_ as y,g as k}from"./C0QMzjgp.js";import{_ as v}from"./BMXSq6Id.js";import{_ as g}from"./XwYopbd3.js";import l from"./DT-rYTM8.js";import"./mDn3YsyS.js";import"./CeBeLe1J.js";import"./D2hRbPYj.js";import"./CSR_V0CX.js";import"./ChayOu5x.js";import"./CQRw3t0R.js";import"./Bd1Swj9h.js";import"./dO6MjP5l.js";import"./DjSKj6tj.js";import"./D-5T6m90.js";const F={key:1},N={key:1},$={class:"flex gap-2"},G={__name:"index",setup(B){return(_,V)=>{const m=y,u=k,f=v,x=g;return s(),c("div",null,[i(x,{columns:p(l).columns,filters:p(l).filters,url:"/transactions",ui:{th:{base:"text-left"}}},{"branch-data":a(({row:t})=>{var e;return[(e=t.branch)!=null&&e.name?(s(),d(m,{key:0,class:"text-primary font-bold underline dark:text-gray-400",to:{name:"branches-id",params:{id:t.branch.id}}},{default:a(()=>{var o;return[n(r((o=t.branch)==null?void 0:o.name),1)]}),_:2},1032,["to"])):(s(),c("div",F," N/A "))]}),"user-data":a(({row:t})=>{var e;return[(e=t.user)!=null&&e.name?(s(),d(m,{key:0,class:"text-primary font-bold underline dark:text-gray-400",to:{name:"users-id",params:{id:t.user.id}}},{default:a(()=>{var o;return[n(r((o=t.user)==null?void 0:o.name),1)]}),_:2},1032,["to"])):(s(),c("div",N," N/A "))]}),"customer-data":a(({row:t})=>{var e;return[n(r(((e=t.customer)==null?void 0:e.name)??"غير موجود"),1)]}),"service-data":a(({row:t})=>{var e;return[n(r(((e=t.service)==null?void 0:e.name)??"غير موجود"),1)]}),"total-data":a(({row:t})=>[n(r(parseFloat(parseFloat(t.additional_amount)+parseFloat(t.amount)+parseFloat(t.rahtak_fees)+parseFloat(t.fees)).toFixed(3)),1)]),"actions-data":a(({row:t})=>[h("div",$,[i(m,{to:`${(_._.provides[b]||_.$route).path}/${t.id}`},{default:a(()=>[i(f,{text:"View"},{default:a(()=>[i(u,{class:"hover:text-primary mx-1",name:"carbon:view"})]),_:1})]),_:2},1032,["to"])])]),_:1},8,["columns","filters"])])}}};export{G as default};
