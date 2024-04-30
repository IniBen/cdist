import{_ as se}from"./BaseHeading.vue.7e9c60be.js";import{_ as ae}from"./BaseParagraph.vue.514466a1.js";import{_ as le}from"./BaseInput.vue.cc474dad.js";import{_ as ne}from"./BaseButton.d121d688.js";import{_ as re}from"./BaseButtonClose.vue.f71592fa.js";import{_ as ce}from"./TairoModal.vue.c4bdbd03.js";import{d as ie,r as n,c as x,P as de,z as ue,y as me,L as pe,o as fe,a as ve,i as o,Q as L,b as a,w as c,j as A,e as p,t as _e,H as k}from"./entry.45720db6.js";import{u as he}from"./fetch.2c4fdd2f.js";import{u as ge}from"./toaster.7ed542fb.js";import{z as S,u as we,F as C,t as ye}from"./vee-validate.esm.4bcc2709.js";import{C as R}from"./index.4e5993e3.js";import{L as be}from"./index.59421564.js";import"./buttons.65f63765.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./nuxt-link.999b95ef.js";import"./Icon.145c4119.js";import"./index.d48bba14.js";import"./input-id.94a04492.js";import"./use-outside-click.f566db00.js";import"./transition.29703387.js";const xe={class:"bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4"},Ae={class:"flex w-full items-center justify-center"},Se={class:"relative mx-auto w-full max-w-2xl shadow-muted-400 shadow shadow-5xl rounded bg-muted-50 dark:bg-muted-700/70"},Ee={class:"me-auto ms-auto mt-4 w-full"},Te={class:"text-center"},Ve={class:"px-8 py-4"},ke={class:"mb-4 space-y-4"},Ce={class:"space-y-1"},Ie=o("span",null,"Max",-1),De={class:"mb-2 pl-2"},Fe={class:"flex items-center justify-between"},Be={class:"text-gray-400 text-sm"},Le={class:"mb-6 flex items-center justify-center"},Re={class:"px-3"},Pe={class:"flex w-full items-center justify-between p-4 md:p-6"},Ue=o("h3",{class:"font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"}," Enter your Passcode to confirm ",-1),Me=o("div",{class:"p-4 md:p-6"},[o("div",{class:"mx-auto w-full max-w-xs text-center"})],-1),Ne={class:"p-4 md:p-6"},We={class:"flex gap-x-2"},vt=ie({__name:"send",setup(je){const E=n(!1);function T(){E.value=!1}function P(){E.value=!0}const v=new be;var f=n(""),s=n(0),i=n("");n(!1);const _=n(!1);var h=n("");n("");var m=n("");n("");var g=n("");n("");var w=n("");const I=x(()=>s.value.toFixed(2)),U=x(()=>X.value.toFixed(2));function M(t){d.clearAll(),d.show({title:"Sent! Your Transaction ID has been copied Automatically",message:t,color:"success",icon:"ph:check",closable:!0})}function N(t){try{navigator.clipboard.writeText(t)}catch(e){console.error("Unable to copy text: ",e)}}function y(t){d.clearAll(),d.show({title:"Error",message:t,color:"danger",icon:"ph:user",closable:!0})}function W(){const t={isValid:!1,message:""};try{if(!s.value)throw"Sorry! enter amount to send";if(!i.value)throw"Sorry! enter receiver's address";t.isValid=!0,t.message="all looks good"}catch(e){t.message=e,t.isValid=!1}return t}function j(t,e){g.value=R.AES.decrypt(t,e).toString(R.enc.Utf8),console.log("hash here",g.value)}function O(){if(s.value===0)y("Input Amount");else if(i.value==="")y("Input Address");else try{T();var t=W();if(!t.isValid)throw t.message;const e=localStorage.getItem("gen_wallet_Name"),u=localStorage.getItem("encrytedDataPhrase");console.log("the datasses",u),j(u,m.value);const b=localStorage.getItem("wallet_address");console.log("amount1:",s.value),console.log("userpin:",m.value),console.log("receiver Address1:",i.value),console.log("Comment1:",f.value),console.log("Wallet Name1:",e),console.log("Sender Address1:",b),console.log("Encypted passphase1:",g.value),_.value=!0,v.sendLtcFromWalletAddress(e,g.value,i.value,s.value,f.value,b).then(r=>{r.successful?(M("https://pteri-test1.netlify.app/LTCTransaction/"+r.data),N("https://pteri-test1.netlify.app/LTCTransaction/"+r.data),console.log("send Response:",r),f.value="",s.value=0,i.value="",m.value=" "):(y(r.message),m.value=" ")}).catch(r=>{console.log("The error: ",r)}).finally(()=>{_.value=!1})}catch(e){console.log("error  here",e);const u="Enter the correct Passcode";e.message.includes("Malformed UTF-8 data")?y(u):console.error("Decryption error:",e.message)}}const z=async()=>(await he("https://api.coinbase.com/v2/prices/LTC-USD/buy","$C1LpBalOev")).data,D={EMAIL_REQUIRED:"A valid email is required",PASSWORD_REQUIRED:"A password is required"},q=S.object({email:S.string().email(D.EMAIL_REQUIRED),password:S.string().min(1,D.PASSWORD_REQUIRED),trustDevice:S.boolean()}),Q=ye(q),$=x(()=>({email:"",password:"",trustDevice:!1})),{handleSubmit:G,isSubmitting:Oe,setFieldError:H,meta:ze,values:qe,errors:Qe,resetForm:$e,setFieldValue:Ge,setErrors:He}=we({validationSchema:Q,initialValues:$});de();const d=ge(),F=G(async t=>{console.log("auth-success",t);try{await new Promise((e,u)=>{t.password!=="password"&&setTimeout(()=>u(new Error("Fake backend validation error")),2e3),setTimeout(e,4e3)}),d.clearAll(),d.show({title:"Success",message:"Welcome back!",color:"success",icon:"ph:user-circle-fill",closable:!0})}catch(e){e.message==="Fake backend validation error"&&H("password",'Invalid credentials (use "password")');return}window.location.href="/dashboards"});function J(){if(w.value=localStorage.getItem("wallet_address")||"",console.log("wallet address is here value: ",w.value),w.value==null||w.value=="")window.location.href="/onboarding";else{const e=new URLSearchParams(window.location.search).get("address");e&&(i.value=e)}}const X=x({get(){return s.value*parseFloat(h.value)},set(t){}});ue([s,h],()=>{});async function Y(){const t=localStorage.getItem("gen_wallet_Name");await v.walletBalance(t).then(e=>{e.successful?(s.value=e.data,console.log("amounting object",s)):(d.clearAll(),d.show({title:"Error",message:e.message,color:"danger",icon:"user-circle-fill",closable:!0}))})}async function K(){await Y(),console.log("amounting here",s);const t=s.value-.01;n(0),s.value>=.01?(s.value=t,console.log("inside",s.value),console.log("outside",t)):(s.value=0,d.clearAll(),d.show({title:"Insufficient balance",message:"Not enough amount",color:"danger",icon:"ph:check",closable:!0}))}async function Z(){try{const t=localStorage.getItem("gen_wallet_Name");await v.walletDetails(t).then(e=>{e.message.includes("Requested wallet does not exist or is not loaded")?v.loadWallet(t).then(u=>{console.log("this is the response of a loaded wallet ",u.message),B()}):B()}).catch(()=>{console.log("catch error")})}catch(t){console.log(t)}}async function B(){J();const e=(await z()).value;return h.value=e.data.amount,h.value}return me(async()=>{await Z()}),(t,e)=>{const u=se,b=ae,r=le,V=ne,ee=pe("BaseButtonGroup"),te=re,oe=ce;return fe(),ve("div",xe,[o("div",Ae,[o("div",Se,[o("div",Ee,[o("form",{method:"POST",action:"",onSubmit:e[6]||(e[6]=L((...l)=>p(F)&&p(F)(...l),["prevent"])),class:"me-auto ms-auto mt-4 w-full max-w-md",novalidate:""},[o("div",Te,[a(u,{as:"h2",size:"3xl",weight:"medium"},{default:c(()=>[A(" Send Funds ")]),_:1}),a(b,{size:"sm",class:"text-muted-400 mb-6"},{default:c(()=>[A(" Enter LTC amount you want to send! ")]),_:1})]),o("div",Ve,[o("div",ke,[o("div",Ce,[a(p(C),{name:"Amount"},{default:c(()=>[a(ee,{class:"flex items-center"},{default:c(()=>[a(r,{type:"number",label:"Amount",placeholder:"Amount",classes:{input:"h-12",wrapper:"w-96"},icon:"cryptocurrency:ltc",modelValue:I.value,"onUpdate:modelValue":e[0]||(e[0]=l=>I.value=l)},null,8,["modelValue"]),a(V,{color:"muted",class:"mt-6 h-12",onClick:e[1]||(e[1]=l=>K())},{default:c(()=>[Ie]),_:1})]),_:1})]),_:1}),o("div",De,[o("div",Fe,[o("span",Be,_e(U.value)+" in USD",1)])])]),a(p(C),{name:"WalletAddress"},{default:c(()=>[a(r,{ref:"addressInput",modelValue:p(i),"onUpdate:modelValue":e[2]||(e[2]=l=>k(i)?i.value=l:i=l),type:"text",label:"Wallet Address",placeholder:"Wallet Address",classes:{input:"h-12"},icon:"solar:copy-bold"},null,8,["modelValue"])]),_:1}),a(p(C),{name:"EnterComment"},{default:c(()=>[a(r,{modelValue:p(f),"onUpdate:modelValue":e[3]||(e[3]=l=>k(f)?f.value=l:f=l),type:"text",label:"Enter Comment",placeholder:"Enter Comment",classes:{input:"h-12"}},null,8,["modelValue"])]),_:1})]),o("div",Le,[a(V,{disabled:_.value,loading:_.value,type:"submit",color:"primary",class:"!h-12 w-36",onClick:P},{default:c(()=>[A(" Send ")]),_:1},8,["disabled","loading"])]),a(oe,{open:E.value,size:"sm",onClose:T},{header:c(()=>[o("div",Re,[o("div",Pe,[Ue,a(te,{onClick:T})]),a(r,{label:"Passcode",modelValue:p(m),"onUpdate:modelValue":e[4]||(e[4]=l=>k(m)?m.value=l:m=l),type:"password",class:"",icon:"uil:padlock",shape:"curved",classes:{wrapper:"w-full",input:"!h-12 !ps-12",icon:"!h-12 !w-12"}},null,8,["modelValue"])])]),footer:c(()=>[o("div",Ne,[o("div",We,[a(V,{color:"primary",flavor:"solid",onClick:e[5]||(e[5]=L(l=>O(),["prevent"]))},{default:c(()=>[A(" Send ")]),_:1})])])]),default:c(()=>[Me]),_:1},8,["open"])])],32)])])])])}}});export{vt as default};
