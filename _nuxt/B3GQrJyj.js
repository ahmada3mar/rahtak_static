import{l as x,s as L,j as T,o as s,c as d,d as n,t as v,n as l,b as f,g as w,P as I,a as h,F as b,r as $,w as _,f as y,a8 as N,E as F,G as P,H as V,A as R,I as J,J as U,aR as q,M as G,N as H,D as C,Q as z,u as k,a9 as Q,q as M,p as W,v as X,av as Y,ac as K,_ as Z}from"./CieyZeqY.js";import{_ as ee}from"./CQTm2Kze.js";import{r as A}from"./Y92EZ8Ky.js";import{I as D}from"./CG9l0aM5.js";const te={wrapper:"relative min-w-0",ol:"flex items-center gap-x-1.5",li:"flex items-center gap-x-1.5 text-gray-500 dark:text-gray-400 text-sm leading-6 min-w-0",base:"flex items-center gap-x-1.5 group font-semibold min-w-0",label:"block truncate",icon:{base:"flex-shrink-0 w-5 h-5",active:"",inactive:""},divider:{base:"flex-shrink-0 w-5 h-5"},active:"text-primary-500 dark:text-primary-400",inactive:" hover:text-gray-700 dark:hover:text-gray-200",default:{divider:"i-heroicons-chevron-right-20-solid rtl:i-heroicons-chevron-left-20-solid"}},ae={data(){return{balance:{currentBalance:L().balance,availableBalance:0},is_fetching:!1}},methods:{refresh(){this.is_fetching=!0,T("/sadad/get-balance",{method:"GET"}).then(e=>{this.balance=e,this.is_fetching=!1})}},mounted(){}},ne={class:"flex gap-5 justify-between items-center p-5"},se=n("h5",{class:"m-0"},"الرصيد",-1);function re(e,a,t,c,i,p){var u,r;const o=w;return s(),d("div",ne,[se,n("h5",{class:l(`m-0 ${((u=i.balance)==null?void 0:u.currentBalance)==0?"text-red-500":"text-green-500"} `)},v((r=i.balance)==null?void 0:r.currentBalance)+" دينار ",3),i.is_fetching?(s(),f(o,{key:0,role:"button",class:"animate-spin",size:"25px",name:"i-hugeicons-refresh"})):(s(),f(o,{key:1,role:"button",size:"25px",name:"i-hugeicons-refresh",onClick:p.refresh},null,8,["onClick"]))])}const oe=x(ae,[["render",re]]),ie={props:{expanded:!1,item:{}},data(){return{expandedSub:!1}},created(){this.expandedSub=this.item.items.map(e=>{var a;return(a=e.path)==null?void 0:a.toLowerCase()}).includes((this._.provides[I]||this.$route).fullPath.toLowerCase())}},le={key:0,role:"button"},ce={class:l(`nav-parent relative flex flex-col justify-center nav-link  min-h-11 focus:outline-none 
        text-gray-400 dark:text-400`)},de={class:"inline-flex justify-center items-center mr-6"},ue={class:"inline-flex justify-center items-center"};function me(e,a,t,c,i,p){var r,m;const o=w,u=N;return!((r=t.item.meta)!=null&&r.auth)||e.$can((m=t.item.meta)==null?void 0:m.auth.permission)?(s(),d("li",le,[n("div",ce,[n("div",{onClick:a[0]||(a[0]=g=>i.expandedSub=!i.expandedSub),class:l(`nav-parent nav-menu relative flex justify-start items-center py-2 text-gray-600 
             dark:text-gray-400 hover:text-gray-100 hover:!bg-primary-500 dark:hover:bg-slate-500`)},[n("span",de,[h(o,{name:t.item.icon},null,8,["name"])]),n("span",{class:l(`mr-2 ${t.expanded?"w-full opacity-100":"opacity-0 w-0"}  eas-in-out duration-300 
                    nav-name text-sm tracking-wide hover:!bg-primary-500
                    truncate`)},v(t.item.name),3),h(o,{class:l(`absolute left-1 top-2 ${i.expandedSub&&"rotate-180"} transition-all ease-in duration-300`),name:"mdi:chevron-up"},null,8,["class"])]),n("ul",{class:l(` flex h-auto overflow-hidden ${i.expandedSub?"max-h-80 py-2":"max-h-0 p-0"} transition-all ease-in duration-300 text-sm text-gray-400  hover:text-gray-100
                 pl-8 sub-nav flex-col`)},[(s(!0),d(b,null,$(t.item.items,(g,j)=>{var S,B;return s(),d("div",{key:j},[!((S=g.meta)!=null&&S.auth)||e.$can((B=g.meta)==null?void 0:B.auth.permission)?(s(),f(u,{key:0,active:(e._.provides[I]||e.$route).fullPath.includes(g.path),"active-class":"bg-gray-200 dark:bg-slate-700 router-link-exact-active",to:g.path,class:"text-gray-600 dark:text-gray-400 hover:text-gray-100 hover:!bg-primary-500 dark:hover:!bg-slate-500 py-2 flex px-2"},{default:_(()=>[n("span",ue,[h(o,{size:"16px",name:g.icon},null,8,["name"])]),n("span",{class:l(`mr-2  ${t.expanded?"w-full opacity-100":"opacity-0 w-0"}  eas-in-out duration-300 
                    nav-name text-sm tracking-wide 
                    overflow-hidden
                    truncate`)},v(g.name),3)]),_:2},1032,["active","to"])):y("",!0)])}),128))],2)])])):y("",!0)}const he=x(ie,[["render",me]]),fe={props:{expanded:!1,target:null,item:{}}},pe={key:1},ge={class:"flex justify-start items-center py-2"},ye={class:"inline-flex justify-center items-center mr-5"};function ve(e,a,t,c,i,p){var m,g,j;const o=he,u=w,r=N;return t.item.items&&t.item.items.length?(s(),f(o,{key:0,item:t.item,expanded:t.expanded},null,8,["item","expanded"])):(s(),d("li",pe,[!((m=t.item.meta)!=null&&m.auth)||e.$can((g=t.item.meta)==null?void 0:g.auth.permission)?(s(),f(r,{key:0,active:t.item.path=="/"?(e._.provides[I]||e.$route).fullPath==t.item.path:(e._.provides[I]||e.$route).fullPath.includes(t.item.path),"active-class":"bg-primary-400 text-white dark:bg-slate-700 router-link-exact-active",target:(j=t.item.meta)==null?void 0:j.target,to:t.item.path,class:"relative flex flex-col justify-center nav-link min-h-11 focus:outline-none text-gray-600 hover:text-gray-100 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-primary-500 dark:hover:bg-slate-500"},{default:_(()=>[n("div",ge,[n("span",ye,[h(u,{name:t.item.icon},null,8,["name"])]),n("span",{class:l(`mr-2 ${t.expanded?"w-full opacity-100":"opacity-0 w-0"}  eas-in-out duration-300 
                    nav-name text-sm tracking-wide capitalize 
                    truncate`)},v(t.item.name),3)])]),_:1},8,["active","target","to"])):y("",!0)]))}const O=x(fe,[["render",ve]]),_e={components:{subNav:O},props:{list:{type:Array,default:[]},expanded:Boolean}};function be(e,a,t,c,i,p){const o=O;return s(!0),d(b,null,$(t.list,(u,r)=>(s(),f(o,{expanded:t.expanded,item:u,key:r},null,8,["expanded","item"]))),128)}const ke=x(_e,[["render",be]]),E=F(P.ui.strategy,P.ui.breadcrumb,te),xe=V({components:{UIcon:R,ULink:N},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},divider:{type:String,default:()=>E.default.divider},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:t}=J("breadcrumb",U(e,"ui"),E,U(e,"class"));return{ui:a,attrs:t,getULinkProps:q,twMerge:G,twJoin:H}}}),we={key:1,role:"presentation"};function $e(e,a,t,c,i,p){const o=R,u=N;return s(),d("nav",z({"aria-label":"Breadcrumb",class:e.ui.wrapper},e.attrs),[n("ol",{class:l(e.ui.ol)},[(s(!0),d(b,null,$(e.links,(r,m)=>(s(),d("li",{key:m,class:l(e.ui.li)},[h(u,z({as:"span",class:[e.ui.base,m===e.links.length-1?e.ui.active:r.to?e.ui.inactive:""],"aria-current":m===e.links.length-1?"page":void 0,ref_for:!0},e.getULinkProps(r),{onClick:r.click}),{default:_(()=>[C(e.$slots,"icon",{link:r,index:m,isActive:m===e.links.length-1},()=>[r.icon?(s(),f(o,{key:0,name:r.icon,class:l(e.twMerge(e.twJoin(e.ui.icon.base,m===e.links.length-1?e.ui.icon.active:r.to?e.ui.icon.inactive:""),r.iconClass))},null,8,["name","class"])):y("",!0)]),C(e.$slots,"default",{link:r,index:m,isActive:m===e.links.length-1},()=>[r.label?(s(),d("span",{key:0,class:l(e.twMerge(e.ui.label,r.labelClass))},v(r.label),3)):y("",!0)])]),_:2},1040,["class","aria-current","onClick"]),m<e.links.length-1?C(e.$slots,"divider",{key:0},()=>[e.divider?(s(),d(b,{key:0},[e.divider.startsWith("i-")?(s(),f(o,{key:0,name:e.divider,class:l(e.ui.divider.base),role:"presentation"},null,8,["name","class"])):(s(),d("span",we,v(e.divider),1))],64)):y("",!0)]):y("",!0)],2))),128))],2)],16)}const je=x(xe,[["render",$e]]),Ce={services:"الخدمات",cliq:"كليك",sadad:"سداد",TaxiF:"تكسي اف"},Ie={class:"p-5 mx-2 flex bg-gray-100 dark:bg-gray-900 my-5 rounded-lg"},Ne={__name:"Breadcrumb",setup(e){function a(t){let c="/services";return t.map((i,p)=>{let o=decodeURI(i.split("_")[0]),u=Ce[o]??o;return p===0?{label:u,to:c}:(c+=`/${i}`,{label:u,to:c})})}return(t,c)=>{const i=je;return s(),d("div",Ie,[h(i,{links:[{to:"/",label:"الرئيسية",icon:"i-heroicons-home"},...a(("useRoute"in t?t.useRoute:k(Q))().path.split("/").filter(p=>isNaN(p)))]},null,8,["links"])])}}},Ae={class:"mx-auto h-fit relative max-w-lg w-full"},Le={key:0,role:"button",class:"w-full"},Se={class:"flex items-center mx-2"},Be={class:"flex flex-col gap-1 mx-3"},Pe={key:1,class:"p-5"},Ue={data(){return{searchResults:[],searchList:[],keys:[],search:!1,searchInput:""}},watch:{searchInput(e){e.length>=3&&(e?this.searchList=L().list.filter(a=>a.billerNameAr.includes(e)||a.serviceNameAr.includes(e)||a.categoryNameAr.includes(e)):this.searchList=[])}},methods:{searchDialog(){this.search=!0,this.$nextTick(()=>this.$refs.searchInput.focus())},handleKeyPress(e){this.keys[e.key]=!0,this.keys.Shift&&this.keys.Control&&this.keys.F&&this.searchDialog()},handleKeyPressUp(){this.keys={}},setSearchItems(e,a=null){e.forEach(t=>{var c;if(t.path){const i={name:t.name,icon:t.icon,path:t.path};a&&(i.parent=a),this.searchResults.push(i)}if((c=t.items)!=null&&c.length)return this.setSearchItems(t.items,t.name)})}},created(){const e=Object.values(A).flat();this.setSearchItems(e),typeof window<"u"&&(document.addEventListener("keydown",this.handleKeyPress),document.addEventListener("keyup",this.handleKeyPressUp))},beforeDestroy(){typeof window<"u"&&(document.removeEventListener("keydown",this.handleKeyPress),document.removeEventListener("keyup",this.handleKeyPressUp))},expose:["searchDialog"]},ze=Object.assign(Ue,{__name:"SearchBar",setup(e){return(a,t)=>{const c=w,i=ee,p=Z;return s(),f(K,{"enter-to-class":"opacity-100","enter-active-class":"transition ease-in duration-300 opacity-0 ","leave-active-class":"transition opacity-100 ease-in duration-300","leave-to-class":"opacity-5"},{default:_(()=>[M(n("div",{onClick:t[2]||(t[2]=W(o=>a.search=!1,["self"])),class:l("absolute bg-[#00000059] flex  h-screen p-10 w-screen top-0 z-50")},[n("div",Ae,[M(n("input",{ref:"searchInput","onUpdate:modelValue":t[0]||(t[0]=o=>a.searchInput=o),class:l("h-10 w-full dark:text-gray-500 rounded px-4 pl-10"),placeholder:"Search",type:"text"},null,512),[[X,a.searchInput]]),h(c,{class:"absolute left-2 translate-y-1/2",color:"gray",name:"carbon:search"}),n("div",{class:l(`container ease-in overflow-y-scroll overflow-x-hidden duration-300
         bg-gray-100 dark:bg-gray-900
          ${a.searchInput.length>=3?"max-h-80":"max-h-0"} w-full rounded mt-2 rounded-b-lg flex justify-center`)},[a.searchList.length>0?(s(),d("div",Le,[(s(!0),d(b,null,$(a.searchList,(o,u)=>(s(),f(p,{key:u,class:"flex flex-col mx-4 route-search",onClick:t[1]||(t[1]=r=>{a.search=!1,a.searchInput=""}),to:{name:"services-sadad-type-service-id",params:{type:o.categoryNameAr??"na",service:`${o.billerNameAr}_${o.billerCode}`,id:o.id}}},{default:_(()=>[o?(s(),f(i,{key:0,class:"h-full my-3 dark:text-gray-500 hover:bg-orange-100 dark:border-gray-700 hover:border-orange-200 border"},{default:_(()=>[n("div",Se,[k(D)[o.categoryNameEn]?(s(),f(c,{key:0,size:"35px",name:k(D)[o.categoryNameEn]},null,8,["name"])):y("",!0),n("div",Be,[n("div",null,v(o.categoryNameAr),1),n("div",null,v(o.billerNameAr),1),n("div",null,v(o.serviceNameAr),1)])])]),_:2},1024)):y("",!0)]),_:2},1032,["to"]))),128))])):(s(),d("div",Pe,"No results"))],2)])],512),[[Y,a.search]])]),_:1})}}}),Me={class:"h-screen antialiased bg-gray-50 dark:bg-gray-950 text-gray-800"},De={class:"p-5 h-full pr-1 float-left w-fit dark:border-gray-700 border-none flex flex-col fixed z-40"},Ee={class:"flex items-center justify-center min-h-[64px] max-h-[64px] dark:border-gray-700 border-b px-2 py-3"},Re={class:"overflow-y-auto overflow-x-hidden flex-grow"},Ke={class:"flex flex-col py-4 space-y-1"},Oe={class:"flex flex-row items-center h-8"},Te={class:"text-sm font-light tracking-wide text-gray-400"},Fe={class:"relative flex flex-col justify-center nav-link min-h-11 focus:outline-none text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-slate-500 hover:bg-gray-300 dark:hover:text-gray-100"},Ve={class:"inline-flex justify-center items-center mr-5"},Je=n("span",{class:l(`mr-2  'w-full opacity-100'  eas-in-out duration-300 
                              nav-name text-sm tracking-wide capitalize 
                                  
                              truncate`)},"تسجيل خروج ",-1),qe={class:"flex justify-center items-center h-16 w-full overflow-hidden text-gray-400 bg-gray-100 dark:bg-gray-900 dark:text-gray-400 rounded-lg my-4"},Ge=n("div",{class:"flex items-center mr-2 dark:border-gray-700 border-l dark:border-gray-700 border-gray-300"},null,-1),He=n("a",{class:"flex items-center justify-center w-16 h-16 mr-auto bg-gray-200 hover:bg-gray-300 dark:bg-slate-700",href:"#"},[n("svg",{class:"w-6 h-6 stroke-current",xmrns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),Qe={class:"h-full w-full text-gray-400 rounded-lg my-4 overflow-y-auto gutter-stable"},We={data(){return{expanded:!0}},methods:{searchDialog(){this.$refs.searchBar.searchDialog()},logout(){L().logout()}}},tt=Object.assign(We,{__name:"default",setup(e){return(a,t)=>{const c=w,i=oe,p=ke,o=Ne,u=ze;return s(),d("div",Me,[n("div",De,[n("div",{class:l(`relative flex flex-col h-full ${a.expanded?"w-[240px] p-4":"w-[5rem]"} nav-bar transition-all ease-in duration-300 rounded-lg text-gray-400 bg-gray-100 dark:bg-gray-900 dark:text-gray-400 p-0  my-4 overflow-y-hidden`)},[n("div",Ee,[n("img",{class:l(`transition-all ease-in duration-300  ${a.expanded&&"h-0 opacity-0"}   short`),src:"https://www.rahtak.net/images/home/logo.png"},null,2),n("img",{class:l(`transition-all ease-in duration-300 ${a.expanded?"opacity-100 h-full":"h-0 opacity-0"}   long`),src:"https://www.rahtak.net/images/home/logo.png"},null,2),h(c,{role:"button",onClick:t[0]||(t[0]=r=>a.expanded=!a.expanded),name:a.expanded?"humbleicons:switch-on":"humbleicons:switch-off",class:l(`absolute right-5 top-5 ${!a.expanded&&"opacity-0"} nav-switch transition-all ease-in duration-300`)},null,8,["name","class"])]),n("div",Re,[n("ul",Ke,[h(i),(s(!0),d(b,null,$(Object.keys(k(A)),r=>(s(),d("div",{key:r},[r?(s(),d("li",{key:0,class:l(`px-5 ${a.expanded?"block":"hidden"} `)},[n("div",Oe,[n("div",Te,v(r),1)])],2)):y("",!0),h(p,{expanded:a.expanded,list:k(A)[r]},null,8,["expanded","list"])]))),128)),n("li",null,[n("div",Fe,[n("div",{onClick:t[1]||(t[1]=(...r)=>a.logout&&a.logout(...r)),role:"button",class:"flex justify-start items-center py-2"},[n("span",Ve,[h(c,{name:"ic:outline-logout"})]),Je])])])])])],2)]),n("div",{class:l(`flex flex-col  h-full  p-5 ${a.expanded?"mr-[260px]":"mr-[100px]"} transition-all ease-in duration-300`)},[n("div",qe,[n("a",{onClick:t[2]||(t[2]=(...r)=>a.searchDialog&&a.searchDialog(...r)),class:"flex items-center justify-center mr-3",href:"#"},[h(c,{name:"carbon:search",size:"26px"})]),n("a",{onClick:t[3]||(t[3]=r=>a.$colorMode.preference=a.$colorMode.preference=="light"?"dark":"light"),class:"flex items-center justify-center w-12 h-12 mr-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700",href:"#"},[h(K,{name:"fade",mode:"out-in"},{default:_(()=>[a.$colorMode.preference=="light"?(s(),f(c,{key:0,name:"carbon:moon",size:"26px"})):a.$colorMode.preference=="dark"?(s(),f(c,{key:1,name:"carbon:sun",size:"26px"})):(s(),f(c,{key:2,name:"carbon:window-black-saturation",size:"26px"}))]),_:1})]),Ge,He]),n("div",Qe,[h(o),C(a.$slots,"default")])],2),h(u,{ref:"searchBar"},null,512)])}}});export{tt as default};