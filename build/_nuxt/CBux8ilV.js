import{_ as h}from"./C4_rv_f2.js";import{l as x,aN as v,j as _,x as g,c as n,a,F as y,r as k,o as e,b as w,w as c,d as t,t as b,q as F,aM as $,g as B}from"./DE5WV1es.js";import{_ as M}from"./DdlxD6FP.js";import{_ as A}from"./BkuWWDfs.js";import"./Cwxwmxwk.js";const j={data(){return{count:[]}},mounted(){const[s,r]=v().params.service.split("_");_(`/sadad/get-service-info/${s}`).then(i=>{this.count=i})},methods:{fav(s){_(`/sadad/add-fav/${s.id}`).then(r=>{g().setFav(r)})}}},L={key:0,class:"grid grid-cols-4 gap-5 py-5 px-2"},N={key:1,class:"flex justify-center items-center p-20"},U=t("div",{role:"status"},[t("svg",{"aria-hidden":"true",class:"w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-primary-500",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),t("span",{class:"sr-only"},"Loading...")],-1),Z=[U];function S(s,r,i,V,l,d){const m=h,p=$,u=B,f=M,C=A;return e(),n("div",null,[a(m),l.count.length?(e(),n("div",L,[(e(!0),n(y,null,k(l.count,o=>(e(),w(C,{key:o.nameAr,ui:{body:{base:"h-36 flex flex-col justify-between"}}},{default:c(()=>[a(p,{class:"h-full",to:{name:"services-sadad-type-service-id",params:{id:o.id??0}}},{default:c(()=>[t("h5",null,b(o.nameAr),1)]),_:2},1032,["to"]),a(f,{role:"button",onClick:F(q=>d.fav(o),["stop"]),class:"mx-1 mr-auto",text:"اضافة الى المفضلة"},{default:c(()=>[a(u,{size:"25px",class:"hover:text-primary",name:"carbon:star-filled"})]),_:2},1032,["onClick"])]),_:2},1024))),128))])):(e(),n("div",N,Z))])}const T=x(j,[["render",S]]);export{T as default};