import{i as o,j as s}from"./CieyZeqY.js";const i={response:{},columns:[{key:"id",label:"المعرف",sortable:!0},{key:"branch",label:"الفرع",sortable:!0},{key:"service",label:"الخدمة",sortable:!1},{key:"customer",label:"اسم العميل",sortable:!1},{key:"amount",label:"القيمة",sortable:!1},{key:"fees",label:"العمولة",sortable:!0},{key:"additional_amount",label:"القيمة المضافة",sortable:!0},{key:"rahtak_fees",label:"عمولة راحتك",sortable:!0},{key:"created_at",label:"التاريخ",sortable:!0}],get filters(){return[{key:"status",label:"الحالة",options:[{label:"Paid",value:"2"},{label:"Pending",value:"1"},{label:"Failed",value:"4"},{label:"Cancelled",value:"5"},{label:"Inactive",value:"3"}]},{key:"branch_id",label:"الفرع",searchable:this.searchAsync,searchable_label:"الفرع...",options:[]}]},resolveColor:e=>e=="Paid"?"emerald":e=="Pending"?"orange":e=="Failed"||e=="Cancelled"?"red":e=="Inactive"?"gray":"blue",searchAsync:async e=>{var a,l;const t=(l=(a=o().currentRoute.value)==null?void 0:a.query)==null?void 0:l.branch_id,{data:n}=await s("/branches",{query:{search:e,id:t}});return n.map(r=>({label:r.name,value:r.id}))}};export{i as default};
