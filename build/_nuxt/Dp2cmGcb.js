import{E as l,G as u,l as g,H as p,I as b,J as c,L as f,M as y,N as m,o as s,b as k,w as v,c as r,n as o,O as d,f as n,Q as h,ab as $}from"./BKwvWj0J.js";const C={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},w=l(u.ui.strategy,u.ui.card,C),S=p({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(a){const{ui:e,attrs:i}=b("card",c(a,"ui"),w),t=f(()=>y(m(e.value.base,e.value.rounded,e.value.divide,e.value.ring,e.value.shadow,e.value.background),a.class));return{ui:e,attrs:i,cardClass:t}}});function B(a,e,i,t,O,j){return s(),k($(a.$attrs.onSubmit?"form":a.as),h({class:a.cardClass},a.attrs),{default:v(()=>[a.$slots.header?(s(),r("div",{key:0,class:o([a.ui.header.base,a.ui.header.padding,a.ui.header.background])},[d(a.$slots,"header")],2)):n("",!0),a.$slots.default?(s(),r("div",{key:1,class:o([a.ui.body.base,a.ui.body.padding,a.ui.body.background])},[d(a.$slots,"default")],2)):n("",!0),a.$slots.footer?(s(),r("div",{key:2,class:o([a.ui.footer.base,a.ui.footer.padding,a.ui.footer.background])},[d(a.$slots,"footer")],2)):n("",!0)]),_:3},16,["class"])}const E=g(S,[["render",B]]);export{E as _};