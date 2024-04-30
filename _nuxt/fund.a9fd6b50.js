import{_ as ee}from"./BaseHeading.vue.7e9c60be.js";import{_ as se}from"./BaseParagraph.vue.514466a1.js";import{_ as oe}from"./BaseInput.vue.cc474dad.js";import{_ as te}from"./BaseButton.d121d688.js";import{_ as ae}from"./BaseButtonClose.vue.f71592fa.js";import{_ as le}from"./TairoModal.vue.c4bdbd03.js";import{d as re,r as l,c as B,P as ne,z as ce,y as ie,L as de,o as ue,a as me,i as o,Q as D,b as r,w as c,j as b,e as u,H as A,t as pe}from"./entry.45720db6.js";import{u as fe}from"./fetch.2c4fdd2f.js";import{u as ve}from"./toaster.7ed542fb.js";import{z as x,u as _e,F as V,t as he}from"./vee-validate.esm.4bcc2709.js";import{C as F}from"./index.4e5993e3.js";import{L as ge}from"./index.59421564.js";import"./buttons.65f63765.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./nuxt-link.999b95ef.js";import"./Icon.145c4119.js";import"./index.d48bba14.js";import"./input-id.94a04492.js";import"./use-outside-click.f566db00.js";import"./transition.29703387.js";const we={class:"bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4"},ye={class:"flex w-full items-center justify-center"},be={class:"relative mx-auto w-full max-w-2xl shadow-muted-400 shadow shadow-5xl rounded bg-muted-50 dark:bg-muted-700/70"},Ae={class:"me-auto ms-auto mt-4 w-full"},xe={class:"text-center"},Se={class:"px-8 py-4"},Ee={class:"mb-4 space-y-4"},Te={class:"space-y-1"},Ve=o("span",null,"Max",-1),ke={class:"mb-2 pl-2"},Ce={class:"flex items-center justify-between"},Ie={class:"text-gray-400 text-sm"},Be={class:"mb-6 flex items-center justify-center"},De={class:"px-3"},Fe={class:"flex w-full items-center justify-between p-4 md:p-6"},Pe=o("h3",{class:"font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"}," Enter your Passcode to confirm ",-1),Re=o("div",{class:"p-4 md:p-6"},[o("div",{class:"mx-auto w-full max-w-xs text-center"})],-1),Ue={class:"p-4 md:p-6"},Le={class:"flex gap-x-2"},ms=re({__name:"fund",setup(Me){const S=l(!1);function E(){S.value=!1}function P(){S.value=!0}l(!1);const k=new ge;var f=l(""),t=l(0),i=l("");l(!1);const v=l(!1);var _=l("");l("");var m=l("");l("");var h=l("");l("");var g=l("");function R(s){d.clearAll(),d.show({title:"Sent! Your Transaction ID has been copied Automatically",message:s,color:"success",icon:"ph:check",closable:!0})}function U(s){try{navigator.clipboard.writeText(s)}catch(e){console.error("Unable to copy text: ",e)}}function w(s){d.clearAll(),d.show({title:"Error",message:s,color:"danger",icon:"ph:user",closable:!0})}function L(){const s={isValid:!1,message:""};try{if(!t.value)throw"Sorry! enter amount to send";if(!i.value)throw"Sorry! enter receiver's address";s.isValid=!0,s.message="all looks good"}catch(e){s.message=e,s.isValid=!1}return s}function M(s,e){h.value=F.AES.decrypt(s,e).toString(F.enc.Utf8),console.log("hash here",h.value)}function N(){if(t.value===0)w("Input Amount");else if(i.value==="")w("Input Address");else try{E();var s=L();if(!s.isValid)throw s.message;const e=localStorage.getItem("gen_wallet_Name"),p=localStorage.getItem("encrytedDataPhrase");console.log("the datasses",p),M(p,m.value);const y=localStorage.getItem("wallet_address");console.log("amount1:",t.value),console.log("userpin:",m.value),console.log("receiver Address1:",i.value),console.log("Comment1:",f.value),console.log("Wallet Name1:",e),console.log("Sender Address1:",y),console.log("Encypted passphase1:",h.value),v.value=!0,k.sendLtcFromWalletAddress(e,h.value,i.value,t.value,f.value,y).then(n=>{n.successful?(R("https://pteri-test1.netlify.app/LTCTransaction/"+n.data),U("https://pteri-test1.netlify.app/LTCTransaction/"+n.data),console.log("send Response:",n),f.value="",t.value=0,i.value="",m.value=" "):(w(n.message),m.value=" ")}).catch(n=>{console.log("The error: ",n)}).finally(()=>{v.value=!1})}catch(e){console.log("error  here",e);const p="Enter the correct Passcode";e.message.includes("Malformed UTF-8 data")?w(p):console.error("Decryption error:",e.message)}}const j=async()=>(await fe("https://api.coinbase.com/v2/prices/LTC-USD/buy","$vNTQgScAaB")).data,C={EMAIL_REQUIRED:"A valid email is required",PASSWORD_REQUIRED:"A password is required"},W=x.object({email:x.string().email(C.EMAIL_REQUIRED),password:x.string().min(1,C.PASSWORD_REQUIRED),trustDevice:x.boolean()}),O=he(W),z=B(()=>({email:"",password:"",trustDevice:!1})),{handleSubmit:Q,isSubmitting:Ne,setFieldError:q,meta:je,values:We,errors:Oe,resetForm:ze,setFieldValue:Qe,setErrors:qe}=_e({validationSchema:O,initialValues:z});ne();const d=ve(),I=Q(async s=>{console.log("auth-success",s);try{await new Promise((e,p)=>{s.password!=="password"&&setTimeout(()=>p(new Error("Fake backend validation error")),2e3),setTimeout(e,4e3)}),d.clearAll(),d.show({title:"Success",message:"Welcome back!",color:"success",icon:"ph:user-circle-fill",closable:!0})}catch(e){e.message==="Fake backend validation error"&&q("password",'Invalid credentials (use "password")');return}window.location.href="/dashboards"});function $(){if(g.value=localStorage.getItem("wallet_address")||"",console.log("wallet address is here value: ",g.value),g.value==null||g.value=="")window.location.href="/onboarding";else{const e=new URLSearchParams(window.location.search).get("address");e&&(i.value=e)}}const G=B({get(){return t.value*parseFloat(_.value)},set(s){}});ce([t,_],()=>{});async function H(){const s=localStorage.getItem("gen_wallet_Name");await k.walletBalance(s).then(e=>{e.successful?(t.value=e.data,console.log("amounting object",t)):(d.clearAll(),d.show({title:"Error",message:e.message,color:"danger",icon:"user-circle-fill",closable:!0}))})}async function J(){await H(),console.log("amounting here",t);const s=t.value-.01;l(0),t.value>=.01?(t.value=s,console.log("inside",t.value),console.log("outside",s)):(t.value=0,d.clearAll(),d.show({title:"Insufficient balance",message:"Not enough amount",color:"danger",icon:"ph:check",closable:!0}))}async function X(){$();const e=(await j()).value;return _.value=e.data.amount,_.value}return ie(()=>{X()}),(s,e)=>{const p=ee,y=se,n=oe,T=te,Y=de("BaseButtonGroup"),K=ae,Z=le;return ue(),me("div",we,[o("div",ye,[o("div",be,[o("div",Ae,[o("form",{method:"POST",action:"",onSubmit:e[6]||(e[6]=D((...a)=>u(I)&&u(I)(...a),["prevent"])),class:"me-auto ms-auto mt-4 w-full max-w-md",novalidate:""},[o("div",xe,[r(p,{as:"h2",size:"3xl",weight:"medium"},{default:c(()=>[b(" Send Funds ")]),_:1}),r(y,{size:"sm",class:"text-muted-400 mb-6"},{default:c(()=>[b(" Enter LTC amount you want to send! ")]),_:1})]),o("div",Se,[o("div",Ee,[o("div",Te,[r(u(V),{name:"Amount"},{default:c(()=>[r(Y,{class:"flex items-center"},{default:c(()=>[r(n,{type:"number",label:"Amount",placeholder:"Amount",classes:{input:"h-12",wrapper:"w-96"},icon:"cryptocurrency:ltc",modelValue:u(t),"onUpdate:modelValue":e[0]||(e[0]=a=>A(t)?t.value=a:t=a)},null,8,["modelValue"]),r(T,{color:"muted",class:"mt-6 h-12",onClick:e[1]||(e[1]=a=>J())},{default:c(()=>[Ve]),_:1})]),_:1})]),_:1}),o("div",ke,[o("div",Ce,[o("span",Ie,pe(u(G))+" in USD",1)])])]),r(u(V),{name:"WalletAddress"},{default:c(()=>[r(n,{ref:"addressInput",modelValue:u(i),"onUpdate:modelValue":e[2]||(e[2]=a=>A(i)?i.value=a:i=a),type:"text",label:"Wallet Address",placeholder:"Wallet Address",classes:{input:"h-12"},icon:"solar:copy-bold"},null,8,["modelValue"])]),_:1}),r(u(V),{name:"EnterComment"},{default:c(()=>[r(n,{modelValue:u(f),"onUpdate:modelValue":e[3]||(e[3]=a=>A(f)?f.value=a:f=a),type:"text",label:"Enter Comment",placeholder:"Enter Comment",classes:{input:"h-12"}},null,8,["modelValue"])]),_:1})]),o("div",Be,[r(T,{disabled:v.value,loading:v.value,type:"submit",color:"primary",class:"!h-12 w-36",onClick:P},{default:c(()=>[b(" Send ")]),_:1},8,["disabled","loading"])]),r(Z,{open:S.value,size:"sm",onClose:E},{header:c(()=>[o("div",De,[o("div",Fe,[Pe,r(K,{onClick:E})]),r(n,{label:"Passcode",modelValue:u(m),"onUpdate:modelValue":e[4]||(e[4]=a=>A(m)?m.value=a:m=a),type:"password",class:"",icon:"uil:padlock",shape:"curved",classes:{wrapper:"w-full",input:"!h-12 !ps-12",icon:"!h-12 !w-12"}},null,8,["modelValue"])])]),footer:c(()=>[o("div",Ue,[o("div",Le,[r(T,{color:"primary",flavor:"solid",onClick:e[5]||(e[5]=D(a=>N(),["prevent"]))},{default:c(()=>[b(" Send ")]),_:1})])])]),default:c(()=>[Re]),_:1},8,["open"])])],32)])])])])}}});export{ms as default};
