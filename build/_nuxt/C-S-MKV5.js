import{a as P,_ as q}from"./oqbOulnE.js";import{c as f,b as y,w as o,j as g,aN as m,m as v,x as S,o as u,a,e as _,d as b,t as $,f as c,u as A,h as j}from"./BBRSKody.js";import{o as T,p as V,d as N,s as U,l as R,_ as B}from"./B6W5BCDp.js";import{_ as D}from"./j95PYyrS.js";import{_ as E}from"./CGnFqt5o.js";import{_ as O}from"./9GbNKYy4.js";const w={class:"py-5 px-2"},z={key:0},I=b("h4",{class:"my-5"},"معلومات العميل",-1),M={key:0},G={class:"text-green-500 font-bold"},H={class:"flex mt-5 justify-between"},J=b("h4",{class:"my-5"},"معلومات الدفعة",-1),K={key:2},Q={class:"flex mt-5 justify-between"},W={data(){return{totalTrx:0,isLoading:!1,isUserLoading:!1,input:{},cat:[],billingNo:"",catValue:"",response:null,paid:!1,paymentAmount:0,client:null,user:{name:"",mobile:""},payments:{amount:0,fees:0,addtionalAmount:0}}},mounted(){g(`/sadad/get-service-details/${m().params.id}`).then(i=>{this.input=i.input,this.cat=i.cat})},methods:{fetchCustomer(i){i.length==10?(this.isUserLoading=!0,g(`/get-customer?search=${i}`).then(d=>{this.user.name=d.name??"",this.totalTrx=d.transactions_count??0,this.isUserLoading=!1})):(this.user.name="",this.totalTrx=0,this.isUserLoading=!1)},saveUser(){this.client={...this.user}},removeUser(){this.client=null},getFees(){return this.payments.amount<=100?.25:(parseInt((this.payments.amount-1)/100)+1)*.5-.25},inq(){this.isLoading=!0;const[i,d]=m().params.service.split("_");let p={paymentType:this.input.paymentType,catValue:this.catValue,billingNo:this.billingNo,service:i,id:m().params.id,code:d,billingNoRequired:this.input.billingNoRequired,containsPrepaidCats:this.input.containsPrepaidCats,paymentAmount:this.paymentAmount};g("/sadad/inquire",{method:"POST",body:p}).then(e=>{this.response=e,this.payments.addtionalAmount=parseFloat(e.addtionalAmount),this.payments.amount=parseFloat(e.amount),this.payments.fees=parseFloat(e.fees)}).catch(e=>{v().add({title:e.response._data.message,color:"orange"})}).finally(()=>{this.isLoading=!1})},pay(){var e,t;this.isLoading=!0;const[i,d]=m().params.service.split("_");let p={paymentType:this.input.paymentType,catValue:this.catValue,billingNo:this.billingNo,billerName:i,billerCode:d,billerType:m().params.type,totalPayment:this.response.totalPayment,dueAmount:this.response.dueAmount,serviceTypeNo:m().params.id,transType:this.response.transType,amount:this.response.amount,fees:this.response.fees,rahtak_fees:this.getFees(),validationCode:this.response.validationCode,clientName:((e=this.client)==null?void 0:e.name)??"ahmad",clientMobile:((t=this.client)==null?void 0:t.mobile)??"0799991230",billingNoRequired:this.input.billingNoRequired,containsPrepaidCats:this.input.containsPrepaidCats,additionalAmount:this.payments.addtionalAmount??0};g(`/sadad/pay/${m().params.id}`,{method:"POST",body:p}).then(l=>{var n;v().add({title:"تم الدفع بنجاح",color:"green"}),this.paid={transaction:l.bankTrxID,created_at:l.sTMTDate,billerName:i,serviceType:((n=S().list.filter(r=>r.id==m().params.id)[0])==null?void 0:n.serviceNameAr)??m().params.type,invoice:this.billingNo,customerName:l.customerName,amount:this.payments.amount,fees:this.payments.fees,addtionalAmount:this.payments.addtionalAmount,rahtakFees:this.getFees(),total:parseFloat(this.getFees()+Object.values(this.payments).reduce((r,h)=>r+h,0)),branch:"tabrbor"}}).catch(l=>{v().add({title:l.response._data.message,color:"red"})}).finally(()=>{this.isLoading=!1})}}},te=Object.assign(W,{__name:"index",setup(i){const d=T({name:V(U(),N("اسم العميل مطلوب")),mobile:V(U(),N("رقم العميل مطلوب"),R(10,"رقم العميل يجب ان يكون 10 ارقام"))}),p=T({billingNo:V(U(),N("الحقل مطلوب"))});return(e,t)=>{const l=P,n=q,r=j,h=B,k=D,F=E,C=O;return u(),f("div",w,[e.paid?(u(),y(C,{key:1,details:e.paid},null,8,["details"])):(u(),y(F,{key:0},{default:o(()=>[e.client?(u(),y(h,{key:1,schema:A(p),state:{billingNo:e.billingNo,paymentAmount:e.paymentAmount},onSubmit:t[11]||(t[11]=s=>e.response?e.pay():e.inq())},{default:o(()=>[J,e.cat.length>1?(u(),y(n,{key:0,class:"my-2",label:"الفئة"},{default:o(()=>[a(k,{modelValue:e.catValue,"onUpdate:modelValue":t[3]||(t[3]=s=>e.catValue=s),options:e.cat,"option-attribute":"nameEn","value-attribute":"nameEn"},null,8,["modelValue","options"])]),_:1})):c("",!0),a(n,{class:"my-2",name:"billingNo",label:e.input.arDesc},{default:o(()=>[a(l,{"onUpdate:modelValue":[t[4]||(t[4]=s=>e.response=null),t[5]||(t[5]=s=>e.billingNo=s)],modelValue:e.billingNo,placeholder:e.input.arDesc},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e.input.billingNoRequired&&!e.input.containsPrepaidCats?(u(),y(n,{key:1,name:"paymentAmount",class:"my-2",label:"القيمة"},{default:o(()=>[a(l,{"onUpdate:modelValue":[t[6]||(t[6]=s=>e.response=null),t[7]||(t[7]=s=>e.paymentAmount=s)],modelValue:e.paymentAmount,placeholder:"ادخل القيمة"},null,8,["modelValue"])]),_:1})):c("",!0),e.response?(u(),f("div",K,[a(n,{class:"my-2",label:"اسم العميل"},{default:o(()=>[a(l,{disabled:!0,value:e.response.customerName},null,8,["value"])]),_:1}),a(n,{class:"my-2",label:"ملاحظات"},{default:o(()=>[a(l,{disabled:!0,value:e.response.freeText},null,8,["value"])]),_:1}),a(n,{class:"my-2",label:"الحد الأعلى"},{default:o(()=>[a(l,{disabled:!0,value:e.response.maxPaymentLimit},null,8,["value"])]),_:1}),a(n,{class:"my-2",label:"الحد الأدنى"},{default:o(()=>[a(l,{disabled:!0,value:e.response.minPaymentLimit},null,8,["value"])]),_:1}),a(n,{class:"my-2",label:"القيمة"},{default:o(()=>[a(l,{type:"number",disabled:!e.response.isAmountEnabled,modelValue:e.payments.amount,"onUpdate:modelValue":t[8]||(t[8]=s=>e.payments.amount=s)},null,8,["disabled","modelValue"])]),_:1}),a(n,{class:"my-2",label:"عمولات"},{default:o(()=>[a(l,{disabled:!0,modelValue:e.payments.fees,"onUpdate:modelValue":t[9]||(t[9]=s=>e.payments.fees=s)},null,8,["modelValue"])]),_:1}),a(n,{class:"my-2",label:"القيمة المضافة"},{default:o(()=>[a(l,{disabled:!0,modelValue:e.payments.addtionalAmount,"onUpdate:modelValue":t[10]||(t[10]=s=>e.payments.addtionalAmount=s)},null,8,["modelValue"])]),_:1}),a(n,{class:"my-2",label:"عمولة راحتك"},{default:o(()=>[a(l,{disabled:!0,type:"number",value:e.getFees()},null,8,["value"])]),_:1}),a(n,{class:"my-2",label:"القيمة الكلية"},{default:o(()=>[a(l,{disabled:!0,value:parseFloat(e.getFees()+Object.values(e.payments).reduce((s,L)=>s+L,0)).toFixed(3)},null,8,["value"])]),_:1})])):c("",!0),b("div",Q,[a(r,{onClick:e.removeUser,size:"lg",color:"gray",class:"",label:"رجوع"},null,8,["onClick"]),a(r,{loading:e.isLoading,size:"lg",type:"submit",class:"mr-auto",label:e.response?"دفع":"استعلام"},null,8,["loading","label"])])]),_:1},8,["schema","state"])):(u(),f("div",z,[a(h,{onSubmit:e.saveUser,schema:A(d),state:e.user},{default:o(()=>[I,a(n,{class:"my-2",name:"mobile",label:"رقم هاتف العميل"},{default:o(()=>[a(l,{"onUpdate:modelValue":[e.fetchCustomer,t[0]||(t[0]=s=>e.user.mobile=s)],modelValue:e.user.mobile,placeholder:"رقم الهاتف"},null,8,["onUpdate:modelValue","modelValue"])]),_:1}),a(n,{class:"my-2",name:"name",label:"اسم العميل"},{default:o(()=>[a(l,{loading:e.user.mobile!=""&&e.isUserLoading,disabled:e.user.mobile.length<10,"onUpdate:modelValue":[t[1]||(t[1]=s=>e.client=null),t[2]||(t[2]=s=>e.user.name=s)],modelValue:e.user.name,placeholder:"الأسم"},null,8,["loading","disabled","modelValue"])]),_:1}),e.totalTrx?(u(),f("h3",M,[_(" مجموع حركات العميل "),b("span",G,$(e.totalTrx),1),_(" حركة ")])):c("",!0),b("div",H,[a(r,{size:"lg",type:"submit",class:"mr-auto",label:"التالي"})])]),_:1},8,["onSubmit","schema","state"])]))]),_:1}))])}}});export{te as default};
