import{c as i,d as e,p as n,q as t,v as a,a as m,s as u,o as c,h as g}from"./CieyZeqY.js";const b={class:"bg-gray-50 dark:bg-gray-900"},p={class:"flex items-center px-6 py-8 md:h-screen lg:py-0"},y={class:"w-full flex justify-center"},k={class:"w-full bg-white-bk rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"},f={class:"p-6 space-y-4 md:space-y-6 sm:p-8"},h=e("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"}," تسجيل الدخول ",-1),x=e("label",{for:"mobile",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"رقم الهاتف",-1),_=e("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"كلمة المرور",-1),w={data(){return{user:{mobile:"",password:""}}},methods:{login(){u().login(this.user)}}},B=Object.assign(w,{__name:"login",setup(d){return(r,s)=>{const l=g;return c(),i("section",b,[e("div",p,[e("div",y,[e("div",k,[e("div",f,[h,e("form",{class:"space-y-4 md:space-y-6",onSubmit:s[2]||(s[2]=n((...o)=>r.login&&r.login(...o),["prevent"]))},[e("div",null,[x,t(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=o=>r.user.mobile=o),name:"mobile",id:"mobile",class:"bg-gray-50 dark:bg-gray-700 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com",required:""},null,512),[[a,r.user.mobile]])]),e("div",null,[_,t(e("input",{autocomplete:"","onUpdate:modelValue":s[1]||(s[1]=o=>r.user.password=o),type:"password",name:"password",id:"password",placeholder:"••••••••",class:"bg-gray-50 dark:bg-gray-700 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[a,r.user.password]])]),m(l,{size:"md",type:"submit",block:"",label:"تسجيل الدخول",color:"primary"})],32)])])])])])}}});export{B as default};
