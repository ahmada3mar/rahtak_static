import{u as ot}from"./D2hRbPYj.js";import{j as qe,k as it,d as ee,f as Te,e as Se,A as M,S as x,o as E,m as Ge,u as Y,P as de,c as V,n as Ne,T as ut,p as st,q as fe,I as De,l as ze,i as F,w as dt,N as $e,a as ft,s as ct,r as U,t as vt,x as pt,g as mt}from"./ChayOu5x.js";import{a5 as R,y as v,H as D,L as f,a4 as C,X as k,a7 as T,F as gt,Y as z,V as ht,a3 as H,a6 as A,av as yt,a8 as bt,a0 as wt,z as Et,n as _,E as Tt,G as Me,l as St,I as $t,J as je,k as ie,o as Ie,b as Ve,w as J,a as he,Q as ye,d as be,f as Lt,O as Ft}from"./C0QMzjgp.js";const Ct={wrapper:"relative z-50",inner:"fixed inset-0 overflow-y-auto",container:"flex min-h-full items-end sm:items-center justify-center text-center",padding:"p-4 sm:p-0",margin:"sm:my-8",base:"relative text-left rtl:text-right flex flex-col",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},background:"bg-white dark:bg-gray-900",ring:"",rounded:"rounded-lg",shadow:"shadow-xl",width:"w-full sm:max-w-lg",height:"",fullscreen:"w-screen h-screen",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}};function Qe(e,t,a,l){qe.isServer||R(n=>{e=e??window,e.addEventListener(t,a,l),n(()=>e.removeEventListener(t,a,l))})}var Z=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Z||{});function Pt(){let e=v(0);return it("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Je(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let a of e.value){let l=E(a);l instanceof HTMLElement&&t.add(l)}return t}var Ke=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ke||{});let K=Object.assign(D({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:v(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:a,expose:l}){let n=v(null);l({el:n,$el:n});let r=f(()=>ee(n)),o=v(!1);C(()=>o.value=!0),k(()=>o.value=!1),Dt({ownerDocument:r},f(()=>o.value&&!!(e.features&16)));let i=Ot({ownerDocument:r,container:n,initialFocus:f(()=>e.initialFocus)},f(()=>o.value&&!!(e.features&2)));Bt({ownerDocument:r,container:n,containers:e.containers,previousActiveElement:i},f(()=>o.value&&!!(e.features&8)));let u=Pt();function s(g){let m=E(n);m&&(w=>w())(()=>{Y(u.value,{[Z.Forwards]:()=>{de(m,V.First,{skipElements:[g.relatedTarget]})},[Z.Backwards]:()=>{de(m,V.Last,{skipElements:[g.relatedTarget]})}})})}let d=v(!1);function b(g){g.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function c(g){if(!o.value)return;let m=Je(e.containers);E(n)instanceof HTMLElement&&m.add(E(n));let w=g.relatedTarget;w instanceof HTMLElement&&w.dataset.headlessuiFocusGuard!=="true"&&(Xe(m,w)||(d.value?de(E(n),Y(u.value,{[Z.Forwards]:()=>V.Next,[Z.Backwards]:()=>V.Previous})|V.WrapAround,{relativeTo:g.target}):g.target instanceof HTMLElement&&x(g.target)))}return()=>{let g={},m={ref:n,onKeydown:b,onFocusout:c},{features:w,initialFocus:y,containers:N,...S}=e;return T(gt,[!!(w&4)&&T(Te,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:Se.Focusable}),M({ourProps:m,theirProps:{...t,...S},slot:g,attrs:t,slots:a,name:"FocusTrap"}),!!(w&4)&&T(Te,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:Se.Focusable})])}}}),{features:Ke});function At(e){let t=v(Ne.slice());return z([e],([a],[l])=>{l===!0&&a===!1?Ge(()=>{t.value.splice(0)}):l===!1&&a===!0&&(t.value=Ne.slice())},{flush:"post"}),()=>{var a;return(a=t.value.find(l=>l!=null&&l.isConnected))!=null?a:null}}function Dt({ownerDocument:e},t){let a=At(t);C(()=>{R(()=>{var l,n;t.value||((l=e.value)==null?void 0:l.activeElement)===((n=e.value)==null?void 0:n.body)&&x(a())},{flush:"post"})}),k(()=>{t.value&&x(a())})}function Ot({ownerDocument:e,container:t,initialFocus:a},l){let n=v(null),r=v(!1);return C(()=>r.value=!0),k(()=>r.value=!1),C(()=>{z([t,a,l],(o,i)=>{if(o.every((s,d)=>(i==null?void 0:i[d])===s)||!l.value)return;let u=E(t);u&&Ge(()=>{var s,d;if(!r.value)return;let b=E(a),c=(s=e.value)==null?void 0:s.activeElement;if(b){if(b===c){n.value=c;return}}else if(u.contains(c)){n.value=c;return}b?x(b):de(u,V.First|V.NoScroll)===ut.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),n.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),n}function Bt({ownerDocument:e,container:t,containers:a,previousActiveElement:l},n){var r;Qe((r=e.value)==null?void 0:r.defaultView,"focus",o=>{if(!n.value)return;let i=Je(a);E(t)instanceof HTMLElement&&i.add(E(t));let u=l.value;if(!u)return;let s=o.target;s&&s instanceof HTMLElement?Xe(i,s)?(l.value=s,x(s)):(o.preventDefault(),o.stopPropagation(),x(u)):x(l.value)},!0)}function Xe(e,t){for(let a of e)if(a.contains(t))return!0;return!1}function Rt(e){let t=ht(e.getSnapshot());return k(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function kt(e,t){let a=e(),l=new Set;return{getSnapshot(){return a},subscribe(n){return l.add(n),()=>l.delete(n)},dispatch(n,...r){let o=t[n].call(a,...r);o&&(a=o,l.forEach(i=>i()))}}}function Ht(){let e;return{before({doc:t}){var a;let l=t.documentElement;e=((a=t.defaultView)!=null?a:window).innerWidth-l.clientWidth},after({doc:t,d:a}){let l=t.documentElement,n=l.clientWidth-l.offsetWidth,r=e-n;a.style(l,"paddingRight",`${r}px`)}}}function Nt(){return st()?{before({doc:e,d:t,meta:a}){function l(n){return a.containers.flatMap(r=>r()).some(r=>r.contains(n))}t.microTask(()=>{var n;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let i=fe();i.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>i.dispose()))}let r=(n=window.scrollY)!=null?n:window.pageYOffset,o=null;t.addEventListener(e,"click",i=>{if(i.target instanceof HTMLElement)try{let u=i.target.closest("a");if(!u)return;let{hash:s}=new URL(u.href),d=e.querySelector(s);d&&!l(d)&&(o=d)}catch{}},!0),t.addEventListener(e,"touchstart",i=>{if(i.target instanceof HTMLElement)if(l(i.target)){let u=i.target;for(;u.parentElement&&l(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(i.target,"touchAction","none")}),t.addEventListener(e,"touchmove",i=>{if(i.target instanceof HTMLElement){if(i.target.tagName==="INPUT")return;if(l(i.target)){let u=i.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&i.preventDefault()}else i.preventDefault()}},{passive:!1}),t.add(()=>{var i;let u=(i=window.scrollY)!=null?i:window.pageYOffset;r!==u&&window.scrollTo(0,r),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})})}}:{}}function Mt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function jt(e){let t={};for(let a of e)Object.assign(t,a(t));return t}let W=kt(()=>new Map,{PUSH(e,t){var a;let l=(a=this.get(e))!=null?a:{doc:e,count:0,d:fe(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let a=this.get(e);return a&&(a.count--,a.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:a}){let l={doc:e,d:t,meta:jt(a)},n=[Nt(),Ht(),Mt()];n.forEach(({before:r})=>r==null?void 0:r(l)),n.forEach(({after:r})=>r==null?void 0:r(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});W.subscribe(()=>{let e=W.getSnapshot(),t=new Map;for(let[a]of e)t.set(a,a.documentElement.style.overflow);for(let a of e.values()){let l=t.get(a.doc)==="hidden",n=a.count!==0;(n&&!l||!n&&l)&&W.dispatch(a.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",a),a.count===0&&W.dispatch("TEARDOWN",a)}});function It(e,t,a){let l=Rt(W),n=f(()=>{let r=e.value?l.value.get(e.value):void 0;return r?r.count>0:!1});return z([e,t],([r,o],[i],u)=>{if(!r||!o)return;W.dispatch("PUSH",r,a);let s=!1;u(()=>{s||(W.dispatch("POP",i??r,a),s=!0)})},{immediate:!0}),n}let we=new Map,X=new Map;function Ue(e,t=v(!0)){R(a=>{var l;if(!t.value)return;let n=E(e);if(!n)return;a(function(){var o;if(!n)return;let i=(o=X.get(n))!=null?o:1;if(i===1?X.delete(n):X.set(n,i-1),i!==1)return;let u=we.get(n);u&&(u["aria-hidden"]===null?n.removeAttribute("aria-hidden"):n.setAttribute("aria-hidden",u["aria-hidden"]),n.inert=u.inert,we.delete(n))});let r=(l=X.get(n))!=null?l:0;X.set(n,r+1),r===0&&(we.set(n,{"aria-hidden":n.getAttribute("aria-hidden"),inert:n.inert}),n.setAttribute("aria-hidden","true"),n.inert=!0)})}function Vt({defaultContainers:e=[],portals:t,mainTreeNodeRef:a}={}){let l=v(null),n=ee(l);function r(){var o,i,u;let s=[];for(let d of e)d!==null&&(d instanceof HTMLElement?s.push(d):"value"in d&&d.value instanceof HTMLElement&&s.push(d.value));if(t!=null&&t.value)for(let d of t.value)s.push(d);for(let d of(o=n==null?void 0:n.querySelectorAll("html > *, body > *"))!=null?o:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(E(l))||d.contains((u=(i=E(l))==null?void 0:i.getRootNode())==null?void 0:u.host)||s.some(b=>d.contains(b))||s.push(d));return s}return{resolveContainers:r,contains(o){return r().some(i=>i.contains(o))},mainTreeNodeRef:l,MainTreeNode(){return a!=null?null:T(Te,{features:Se.Hidden,ref:l})}}}let _e=Symbol("ForcePortalRootContext");function Ut(){return A(_e,!1)}let We=D({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:a}){return H(_e,e.force),()=>{let{force:l,...n}=e;return M({theirProps:n,ourProps:{},slot:{},slots:t,attrs:a,name:"ForcePortalRoot"})}}}),Ze=Symbol("StackContext");var Le=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Le||{});function Wt(){return A(Ze,()=>{})}function xt({type:e,enabled:t,element:a,onUpdate:l}){let n=Wt();function r(...o){l==null||l(...o),n(...o)}C(()=>{z(t,(o,i)=>{o?r(0,e,a):i===!0&&r(1,e,a)},{immediate:!0,flush:"sync"})}),k(()=>{t.value&&r(1,e,a)}),H(Ze,r)}let Yt=Symbol("DescriptionContext");function qt({slot:e=v({}),name:t="Description",props:a={}}={}){let l=v([]);function n(r){return l.value.push(r),()=>{let o=l.value.indexOf(r);o!==-1&&l.value.splice(o,1)}}return H(Yt,{register:n,slot:e,name:t,props:a}),f(()=>l.value.length>0?l.value.join(" "):void 0)}function Gt(e){let t=ee(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let a=t.getElementById("headlessui-portal-root");if(a)return a;let l=t.createElement("div");return l.setAttribute("id","headlessui-portal-root"),t.body.appendChild(l)}const Fe=new WeakMap;function zt(e){var t;return(t=Fe.get(e))!=null?t:0}function xe(e,t){let a=t(zt(e));return a<=0?Fe.delete(e):Fe.set(e,a),a}let Qt=D({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:a}){let l=v(null),n=f(()=>ee(l)),r=Ut(),o=A(et,null),i=v(r===!0||o==null?Gt(l.value):o.resolveTarget());i.value&&xe(i.value,c=>c+1);let u=v(!1);C(()=>{u.value=!0}),R(()=>{r||o!=null&&(i.value=o.resolveTarget())});let s=A(Ce,null),d=!1,b=wt();return z(l,()=>{if(d||!s)return;let c=E(l);c&&(k(s.register(c),b),d=!0)}),k(()=>{var c,g;let m=(c=n.value)==null?void 0:c.getElementById("headlessui-portal-root");!m||i.value!==m||xe(i.value,w=>w-1)||i.value.children.length>0||(g=i.value.parentElement)==null||g.removeChild(i.value)}),()=>{if(!u.value||i.value===null)return null;let c={ref:l,"data-headlessui-portal":""};return T(yt,{to:i.value},M({ourProps:c,theirProps:e,slot:{},attrs:a,slots:t,name:"Portal"}))}}}),Ce=Symbol("PortalParentContext");function Jt(){let e=A(Ce,null),t=v([]);function a(r){return t.value.push(r),e&&e.register(r),()=>l(r)}function l(r){let o=t.value.indexOf(r);o!==-1&&t.value.splice(o,1),e&&e.unregister(r)}let n={register:a,unregister:l,portals:t};return[t,D({name:"PortalWrapper",setup(r,{slots:o}){return H(Ce,n),()=>{var i;return(i=o.default)==null?void 0:i.call(o)}}})]}let et=Symbol("PortalGroupContext"),Kt=D({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:a}){let l=bt({resolveTarget(){return e.target}});return H(et,l),()=>{let{target:n,...r}=e;return M({theirProps:r,ourProps:{},slot:{},attrs:t,slots:a,name:"PortalGroup"})}}});var Xt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Xt||{});let Pe=Symbol("DialogContext");function tt(e){let t=A(Pe,null);if(t===null){let a=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,tt),a}return t}let ue="DC8F892D-2EBD-447C-A4C8-A03058436FF4",_t=D({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ue},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:a,slots:l,expose:n}){var r,o;let i=(r=e.id)!=null?r:`headlessui-dialog-${De()}`,u=v(!1);C(()=>{u.value=!0});let s=!1,d=f(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(s||(s=!0,console.warn(`Invalid role [${d}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),b=v(0),c=ze(),g=f(()=>e.open===ue&&c!==null?(c.value&F.Open)===F.Open:e.open),m=v(null),w=f(()=>ee(m));if(n({el:m,$el:m}),!(e.open!==ue||c!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof g.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${g.value===ue?void 0:e.open}`);let y=f(()=>u.value&&g.value?0:1),N=f(()=>y.value===0),S=f(()=>b.value>1),j=A(Pe,null)!==null,[te,ae]=Jt(),{resolveContainers:q,mainTreeNodeRef:le,MainTreeNode:ne}=Vt({portals:te,defaultContainers:[f(()=>{var p;return(p=G.panelRef.value)!=null?p:m.value})]}),ve=f(()=>S.value?"parent":"leaf"),re=f(()=>c!==null?(c.value&F.Closing)===F.Closing:!1),pe=f(()=>j||re.value?!1:N.value),me=f(()=>{var p,h,$;return($=Array.from((h=(p=w.value)==null?void 0:p.querySelectorAll("body > *"))!=null?h:[]).find(L=>L.id==="headlessui-portal-root"?!1:L.contains(E(le))&&L instanceof HTMLElement))!=null?$:null});Ue(me,pe);let P=f(()=>S.value?!0:N.value),Q=f(()=>{var p,h,$;return($=Array.from((h=(p=w.value)==null?void 0:p.querySelectorAll("[data-headlessui-portal]"))!=null?h:[]).find(L=>L.contains(E(le))&&L instanceof HTMLElement))!=null?$:null});Ue(Q,P),xt({type:"Dialog",enabled:f(()=>y.value===0),element:m,onUpdate:(p,h)=>{if(h==="Dialog")return Y(p,{[Le.Add]:()=>b.value+=1,[Le.Remove]:()=>b.value-=1})}});let O=qt({name:"DialogDescription",slot:f(()=>({open:g.value}))}),B=v(null),G={titleId:B,panelRef:v(null),dialogState:y,setTitleId(p){B.value!==p&&(B.value=p)},close(){t("close",!1)}};H(Pe,G);let Re=f(()=>!(!N.value||S.value));dt(q,(p,h)=>{p.preventDefault(),G.close(),Et(()=>h==null?void 0:h.focus())},Re);let ke=f(()=>!(S.value||y.value!==0));Qe((o=w.value)==null?void 0:o.defaultView,"keydown",p=>{ke.value&&(p.defaultPrevented||p.key===ft.Escape&&(p.preventDefault(),p.stopPropagation(),G.close()))});let He=f(()=>!(re.value||y.value!==0||j));return It(w,He,p=>{var h;return{containers:[...(h=p.containers)!=null?h:[],q]}}),R(p=>{if(y.value!==0)return;let h=E(m);if(!h)return;let $=new ResizeObserver(L=>{for(let ge of L){let oe=ge.target.getBoundingClientRect();oe.x===0&&oe.y===0&&oe.width===0&&oe.height===0&&G.close()}});$.observe(h),p(()=>$.disconnect())}),()=>{let{open:p,initialFocus:h,...$}=e,L={...a,ref:m,id:i,role:d.value,"aria-modal":y.value===0?!0:void 0,"aria-labelledby":B.value,"aria-describedby":O.value},ge={open:y.value===0};return T(We,{force:!0},()=>[T(Qt,()=>T(Kt,{target:m.value},()=>T(We,{force:!1},()=>T(K,{initialFocus:h,containers:q,features:N.value?Y(ve.value,{parent:K.features.RestoreFocus,leaf:K.features.All&~K.features.FocusLock}):K.features.None},()=>T(ae,{},()=>M({ourProps:L,theirProps:{...$,...a},slot:ge,attrs:a,slots:l,visible:y.value===0,features:$e.RenderStrategy|$e.Static,name:"Dialog"})))))),T(ne)])}}}),Zt=D({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:a,expose:l}){var n;let r=(n=e.id)!=null?n:`headlessui-dialog-panel-${De()}`,o=tt("DialogPanel");l({el:o.panelRef,$el:o.panelRef});function i(u){u.stopPropagation()}return()=>{let{...u}=e,s={id:r,ref:o.panelRef,onClick:i};return M({ourProps:s,theirProps:u,slot:{open:o.dialogState.value===0},attrs:t,slots:a,name:"DialogPanel"})}}});function ea(e){let t={called:!1};return(...a)=>{if(!t.called)return t.called=!0,e(...a)}}function Ee(e,...t){e&&t.length>0&&e.classList.add(...t)}function se(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Ae=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Ae||{});function ta(e,t){let a=fe();if(!e)return a.dispose;let{transitionDuration:l,transitionDelay:n}=getComputedStyle(e),[r,o]=[l,n].map(i=>{let[u=0]=i.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,d)=>d-s);return u});return r!==0?a.setTimeout(()=>t("finished"),r+o):t("finished"),a.add(()=>t("cancelled")),a.dispose}function Ye(e,t,a,l,n,r){let o=fe(),i=r!==void 0?ea(r):()=>{};return se(e,...n),Ee(e,...t,...a),o.nextFrame(()=>{se(e,...a),Ee(e,...l),o.add(ta(e,u=>(se(e,...l,...t),Ee(e,...n),i(u))))}),o.add(()=>se(e,...t,...a,...l,...n)),o.add(()=>i("cancelled")),o.dispose}function I(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let Oe=Symbol("TransitionContext");var aa=(e=>(e.Visible="visible",e.Hidden="hidden",e))(aa||{});function la(){return A(Oe,null)!==null}function na(){let e=A(Oe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function ra(){let e=A(Be,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Be=Symbol("NestingContext");function ce(e){return"children"in e?ce(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function at(e){let t=v([]),a=v(!1);C(()=>a.value=!0),k(()=>a.value=!1);function l(r,o=U.Hidden){let i=t.value.findIndex(({id:u})=>u===r);i!==-1&&(Y(o,{[U.Unmount](){t.value.splice(i,1)},[U.Hidden](){t.value[i].state="hidden"}}),!ce(t)&&a.value&&(e==null||e()))}function n(r){let o=t.value.find(({id:i})=>i===r);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:r,state:"visible"}),()=>l(r,U.Unmount)}return{children:t,register:n,unregister:l}}let lt=$e.RenderStrategy,nt=D({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:l,expose:n}){let r=v(0);function o(){r.value|=F.Opening,t("beforeEnter")}function i(){r.value&=~F.Opening,t("afterEnter")}function u(){r.value|=F.Closing,t("beforeLeave")}function s(){r.value&=~F.Closing,t("afterLeave")}if(!la()&&ct())return()=>T(rt,{...e,onBeforeEnter:o,onAfterEnter:i,onBeforeLeave:u,onAfterLeave:s},l);let d=v(null),b=f(()=>e.unmount?U.Unmount:U.Hidden);n({el:d,$el:d});let{show:c,appear:g}=na(),{register:m,unregister:w}=ra(),y=v(c.value?"visible":"hidden"),N={value:!0},S=De(),j={value:!1},te=at(()=>{!j.value&&y.value!=="hidden"&&(y.value="hidden",w(S),s())});C(()=>{let P=m(S);k(P)}),R(()=>{if(b.value===U.Hidden&&S){if(c.value&&y.value!=="visible"){y.value="visible";return}Y(y.value,{hidden:()=>w(S),visible:()=>m(S)})}});let ae=I(e.enter),q=I(e.enterFrom),le=I(e.enterTo),ne=I(e.entered),ve=I(e.leave),re=I(e.leaveFrom),pe=I(e.leaveTo);C(()=>{R(()=>{if(y.value==="visible"){let P=E(d);if(P instanceof Comment&&P.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function me(P){let Q=N.value&&!g.value,O=E(d);!O||!(O instanceof HTMLElement)||Q||(j.value=!0,c.value&&o(),c.value||u(),P(c.value?Ye(O,ae,q,le,ne,B=>{j.value=!1,B===Ae.Finished&&i()}):Ye(O,ve,re,pe,ne,B=>{j.value=!1,B===Ae.Finished&&(ce(te)||(y.value="hidden",w(S),s()))})))}return C(()=>{z([c],(P,Q,O)=>{me(O),N.value=!1},{immediate:!0})}),H(Be,te),vt(f(()=>Y(y.value,{visible:F.Open,hidden:F.Closed})|r.value)),()=>{let{appear:P,show:Q,enter:O,enterFrom:B,enterTo:G,entered:Re,leave:ke,leaveFrom:He,leaveTo:p,...h}=e,$={ref:d},L={...h,...g.value&&c.value&&qe.isServer?{class:_([a.class,h.class,...ae,...q])}:{}};return M({theirProps:L,ourProps:$,slot:{},slots:l,attrs:a,features:lt,visible:y.value==="visible",name:"TransitionChild"})}}}),oa=nt,rt=D({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:l}){let n=ze(),r=f(()=>e.show===null&&n!==null?(n.value&F.Open)===F.Open:e.show);R(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=v(r.value?"visible":"hidden"),i=at(()=>{o.value="hidden"}),u=v(!0),s={show:r,appear:f(()=>e.appear||!u.value)};return C(()=>{R(()=>{u.value=!1,r.value?o.value="visible":ce(i)||(o.value="hidden")})}),H(Be,i),H(Oe,s),()=>{let d=pt(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),b={unmount:e.unmount};return M({ourProps:{...b,as:"template"},theirProps:{},slot:{},slots:{...l,default:()=>[T(oa,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...a,...b,...d},l.default)]},attrs:{},features:lt,visible:o.value==="visible",name:"Transition"})}}});const ia=Tt(Me.ui.strategy,Me.ui.modal,Ct),ua=D({components:{HDialog:_t,HDialogPanel:Zt,TransitionRoot:rt,TransitionChild:nt},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented","after-leave"],setup(e,{emit:t}){const{ui:a,attrs:l}=$t("modal",je(e,"ui"),ia,je(e,"class")),n=f({get(){return e.modelValue},set(u){t("update:modelValue",u)}}),r=f(()=>e.transition?{...a.value.transition}:{});function o(u){if(e.preventClose){t("close-prevented");return}n.value=u,t("close")}const i=()=>{t("after-leave")};return mt(()=>ot("$HAJMhYDoe7")),{ui:a,attrs:l,isOpen:n,transitionClass:r,onAfterLeave:i,close:o}}});function sa(e,t,a,l,n,r){const o=ie("TransitionChild"),i=ie("HDialogPanel"),u=ie("HDialog"),s=ie("TransitionRoot");return Ie(),Ve(s,{appear:e.appear,show:e.isOpen,as:"template",onAfterLeave:e.onAfterLeave},{default:J(()=>[he(u,ye({class:e.ui.wrapper},e.attrs,{onClose:e.close}),{default:J(()=>[e.overlay?(Ie(),Ve(o,ye({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:J(()=>[be("div",{class:_([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):Lt("",!0),be("div",{class:_(e.ui.inner)},[be("div",{class:_([e.ui.container,!e.fullscreen&&e.ui.padding])},[he(o,ye({as:"template",appear:e.appear},e.transitionClass),{default:J(()=>[he(i,{class:_([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?e.ui.fullscreen:[e.ui.width,e.ui.height,e.ui.rounded,e.ui.margin]])},{default:J(()=>[Ft(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])],2)],2)]),_:3},16,["class","onClose"])]),_:3},8,["appear","show","onAfterLeave"])}const va=St(ua,[["render",sa]]);export{Qe as E,Zt as G,Vt as N,rt as S,_t as Y,va as _,Z as d,nt as h,Pt as n,Jt as q};
