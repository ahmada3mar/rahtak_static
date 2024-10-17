var v;function h(n){return v==null?void 0:v.get(n)}var o;function b(n){return o==null?void 0:o.get(n)}var m;function g(n,s){var e;return(e=m==null?void 0:m.get(n))==null?void 0:e.get(s)}function a(n){var e,i;const s=typeof n;return s==="string"?`"${n}"`:s==="number"||s==="bigint"||s==="boolean"?`${n}`:s==="object"||s==="function"?(n&&((i=(e=Object.getPrototypeOf(n))==null?void 0:e.constructor)==null?void 0:i.name))??"null":s}function y(n,s,e,i,u){const c=u&&"input"in u?u.input:e.value,l=(u==null?void 0:u.expected)??n.expects??null,p=(u==null?void 0:u.received)??a(c),r={kind:n.kind,type:n.type,input:c,expected:l,received:p,message:`Invalid ${s}: ${l?`Expected ${l} but r`:"R"}eceived ${p}`,requirement:n.requirement,path:u==null?void 0:u.path,issues:u==null?void 0:u.issues,lang:i.lang,abortEarly:i.abortEarly,abortPipeEarly:i.abortPipeEarly},t=n.kind==="schema",f=(u==null?void 0:u.message)??n.message??g(n.reference,r.lang)??(t?b(r.lang):null)??i.message??h(r.lang);f&&(r.message=typeof f=="function"?f(r):f),t&&(e.typed=!1),e.issues?e.issues.push(r):e.issues=[r]}function k(n,s){return{kind:"validation",type:"max_value",reference:k,async:!1,expects:`<=${n instanceof Date?n.toJSON():a(n)}`,requirement:n,message:s,_run(e,i){return e.typed&&e.value>this.requirement&&y(this,"value",e,i,{received:e.value instanceof Date?e.value.toJSON():a(e.value)}),e}}}function _(n,s){return{kind:"validation",type:"min_length",reference:_,async:!1,expects:`>=${n}`,requirement:n,message:s,_run(e,i){return e.typed&&e.value.length<this.requirement&&y(this,"length",e,i,{received:`${e.value.length}`}),e}}}function x(n,s){return{kind:"validation",type:"min_value",reference:x,async:!1,expects:`>=${n instanceof Date?n.toJSON():a(n)}`,requirement:n,message:s,_run(e,i){return e.typed&&e.value<this.requirement&&y(this,"value",e,i,{received:e.value instanceof Date?e.value.toJSON():a(e.value)}),e}}}function E(n){return{kind:"validation",type:"non_empty",reference:E,async:!1,expects:"!0",message:n,_run(s,e){return s.typed&&s.value.length===0&&y(this,"length",s,e,{received:"0"}),s}}}function $(){return{kind:"schema",type:"any",reference:$,expects:"any",async:!1,_run(n){return n.typed=!0,n}}}function j(n,s){return{kind:"schema",type:"array",reference:j,expects:"Array",async:!1,item:n,message:s,_run(e,i){var c;const u=e.value;if(Array.isArray(u)){e.typed=!0,e.value=[];for(let l=0;l<u.length;l++){const p=u[l],r=this.item._run({typed:!1,value:p},i);if(r.issues){const t={type:"array",origin:"value",input:u,key:l,value:p};for(const f of r.issues)f.path?f.path.unshift(t):f.path=[t],(c=e.issues)==null||c.push(f);if(e.issues||(e.issues=r.issues),i.abortEarly){e.typed=!1;break}}r.typed||(e.typed=!1),e.value.push(r.value)}}else y(this,"type",e,i);return e}}}function D(n,s){return{kind:"schema",type:"custom",reference:D,expects:"unknown",async:!1,check:n,message:s,_run(e,i){return this.check(e.value)?e.typed=!0:y(this,"type",e,i),e}}}function O(n){return{kind:"schema",type:"number",reference:O,expects:"number",async:!1,message:n,_run(s,e){return typeof s.value=="number"&&!isNaN(s.value)?s.typed=!0:y(this,"type",s,e),s}}}function S(n,s){return{kind:"schema",type:"object",reference:S,expects:"Object",async:!1,entries:n,message:s,_run(e,i){var c;const u=e.value;if(u&&typeof u=="object"){e.typed=!0,e.value={};for(const l in this.entries){const p=u[l],r=this.entries[l]._run({typed:!1,value:p},i);if(r.issues){const t={type:"object",origin:"value",input:u,key:l,value:p};for(const f of r.issues)f.path?f.path.unshift(t):f.path=[t],(c=e.issues)==null||c.push(f);if(e.issues||(e.issues=r.issues),i.abortEarly){e.typed=!1;break}}r.typed||(e.typed=!1),(r.value!==void 0||l in u)&&(e.value[l]=r.value)}}else y(this,"type",e,i);return e}}}function A(n){return{kind:"schema",type:"string",reference:A,expects:"string",async:!1,message:n,_run(s,e){return typeof s.value=="string"?s.typed=!0:y(this,"type",s,e),s}}}function N(n,s){return{kind:"schema",type:"tuple",reference:N,expects:"Array",async:!1,items:n,message:s,_run(e,i){var c;const u=e.value;if(Array.isArray(u)){e.typed=!0,e.value=[];for(let l=0;l<this.items.length;l++){const p=u[l],r=this.items[l]._run({typed:!1,value:p},i);if(r.issues){const t={type:"array",origin:"value",input:u,key:l,value:p};for(const f of r.issues)f.path?f.path.unshift(t):f.path=[t],(c=e.issues)==null||c.push(f);if(e.issues||(e.issues=r.issues),i.abortEarly){e.typed=!1;break}}r.typed||(e.typed=!1),e.value.push(r.value)}}else y(this,"type",e,i);return e}}}function I(...n){return{...n[0],pipe:n,_run(s,e){for(const i of n)if(i.kind!=="metadata"){if(s.issues&&(i.kind==="schema"||i.kind==="transformation")){s.typed=!1;break}(!s.issues||!e.abortEarly&&!e.abortPipeEarly)&&(s=i._run(s,e))}return s}}}export{$ as a,k as b,j as c,E as d,D as e,_ as f,x as m,O as n,S as o,I as p,A as s,N as t};