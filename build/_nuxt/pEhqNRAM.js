import{c,a as i,w as a,u as p,o as s,b as l,e as n,t as r,d as x,P as b,_ as y,g as k}from"./BBRSKody.js";import{_ as v}from"./N-RVOXpC.js";import{_ as F}from"./BCyRSKkc.js";import d from"./Cz8UGcN-.js";import"./RLMrsIsz.js";import"./B82ZZA_z.js";import"./oqbOulnE.js";import"./mUE41_Tb.js";import"./Dr5RZ6Yl.js";import"./zinKk7y7.js";import"./j95PYyrS.js";import"./CReo74yQ.js";import"./CXKHNq1l.js";import"./CGnFqt5o.js";const N={key:1},$={key:1},g={class:"flex gap-2"},G={__name:"index",setup(B){return(_,V)=>{const m=y,u=k,f=v,h=F;return s(),c("div",null,[i(h,{columns:p(d).columns,filters:p(d).filters,url:"/transactions",ui:{th:{base:"text-left"}}},{"branch-data":a(({row:t})=>{var e;return[(e=t.branch)!=null&&e.name?(s(),l(m,{key:0,class:"text-primary font-bold underline",to:{name:"branches-id",params:{id:t.branch.id}}},{default:a(()=>{var o;return[n(r((o=t.branch)==null?void 0:o.name),1)]}),_:2},1032,["to"])):(s(),c("div",N," N/A "))]}),"user-data":a(({row:t})=>{var e;return[(e=t.user)!=null&&e.name?(s(),l(m,{key:0,class:"text-primary font-bold underline",to:{name:"users-id",params:{id:t.user.id}}},{default:a(()=>{var o;return[n(r((o=t.user)==null?void 0:o.name),1)]}),_:2},1032,["to"])):(s(),c("div",$," N/A "))]}),"customer-data":a(({row:t})=>{var e;return[n(r(((e=t.customer)==null?void 0:e.name)??"غير موجود"),1)]}),"service-data":a(({row:t})=>{var e;return[n(r(((e=t.service)==null?void 0:e.name)??"غير موجود"),1)]}),"total-data":a(({row:t})=>[n(r(parseFloat(parseFloat(t.additional_amount)+parseFloat(t.amount)+parseFloat(t.rahtak_fees)+parseFloat(t.fees)).toFixed(3)),1)]),"actions-data":a(({row:t})=>[x("div",g,[i(m,{to:`${(_._.provides[b]||_.$route).path}/${t.id}`},{default:a(()=>[i(f,{text:"View"},{default:a(()=>[i(u,{class:"hover:text-primary mx-1",name:"carbon:view"})]),_:1})]),_:2},1032,["to"])])]),_:1},8,["columns","filters"])])}}};export{G as default};
