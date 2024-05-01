import{_ as $}from"./BaseHeading.vue.edfc172b.js";import{_ as D}from"./BaseParagraph.vue.ba33e99a.js";import{_ as P}from"./BaseInput.vue.35b3195f.js";import{_ as T}from"./BaseButton.7d754e71.js";import{_ as U}from"./BaseButtonClose.vue.570eed02.js";import{_ as W}from"./TairoModal.vue.51291f49.js";import{u as z}from"./toaster.37697a2b.js";import{d as F,aw as L,r as o,y as R,L as H,o as J,a as O,i as e,b as s,w as l,j as v,Q as S,e as Q,H as q}from"./entry.12ee9a67.js";import{C as k}from"./index.4e5993e3.js";import{L as G}from"./index.59421564.js";import"./buttons.5256f0d8.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./nuxt-link.5c040d36.js";import"./Icon.b1912392.js";import"./index.e6d885ed.js";import"./input-id.df1d5aca.js";import"./use-outside-click.597dd1fa.js";import"./transition.ccd45c40.js";const K={class:"bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4"},X=e("div",{class:"mx-auto flex h-32 w-full max-w-6xl items-center justify-between px-4"},null,-1),Y={class:"flex w-full items-center justify-center"},Z={class:"relative mx-auto w-full max-w-2xl shadow-muted-400 shadow shadow-5xl rounded bg-muted-50 dark:bg-muted-700/70"},ee={class:"me-auto ms-auto mt-4 w-full"},te={class:"me-auto ms-auto mt-4 w-full max-w-md",novalidate:""},oe={class:"text-center"},se={class:"px-8 py-4"},ae={class:"mb-4 space-y-4"},le=e("div",{class:"mb-6"},[e("div",{class:"mt-6 flex items-center justify-between"})],-1),ne={class:"mb-6 flex items-center justify-center"},re={class:"px-3"},ce={class:"flex w-full items-center justify-between p-4 md:p-6"},de=e("h3",{class:"font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"}," Enter your Passcode to confirm ",-1),ie=e("div",{class:"p-4 md:p-6"},[e("div",{class:"mx-auto w-full max-w-xs text-center"})],-1),ue={class:"p-4 md:p-6"},me={class:"flex gap-x-2"},Ee=F({__name:"[id]",setup(pe){const A=L(),u=z(),V=new G,y=o("");o(""),o("");const m=o(0),p=o("");var r=o("");o("");var g=o("");function C(d){try{navigator.clipboard.writeText(d)}catch(t){console.error("Unable to copy text: ",t)}}const{id:B}=A.currentRoute.value.params,_=o([]),c=o({}),h=o(!1);function b(){h.value=!1}function N(){h.value=!0}function I(d,t){g.value=k.AES.decrypt(d,t).toString(k.enc.Utf8)}function j(){_.value=localStorage.getItem("nftData")||[],_.value=JSON.parse(_.value),c.value=_.value[B],y.value=localStorage.getItem("gen_wallet_Name")||"";var t=localStorage.getItem("wallet_address");const w=localStorage.getItem("encrytedDataPhrase")||"";I(w,r.value),c.value.nftAmount;var x=c.value.nft.tokenStart,i=c.value.nft.tokenEnd,f=c.value.nft.propertyId;try{V.transferNft(y.value,g.value,f,x,i,m.value,t,p.value).then(a=>{a.successful?(u.clearAll(),u.show({title:"SDA sent successfully",message:a.data,color:"success",icon:"ph:check",closable:!0}),C(a.data)):(u.clearAll(),u.show({title:"Error",message:a.message,color:"danger",icon:"ph:user",closable:!0}))})}catch(a){console.log(a)}}return R(()=>{console.log(m.value,p.value)}),(d,t)=>{const w=$,x=D,i=P,f=H("Field"),a=T,E=U,M=W;return J(),O("div",K,[X,e("div",Y,[e("div",Z,[e("div",ee,[e("form",te,[e("div",oe,[s(w,{as:"h2",size:"3xl",weight:"medium"},{default:l(()=>[v(" Send ")]),_:1}),s(x,{size:"sm",class:"text-muted-400 mb-6"},{default:l(()=>[v(" Enter SDA amount you want to send! ")]),_:1})]),e("div",se,[e("div",ae,[s(f,{name:"Amount"},{default:l(()=>[s(i,{modelValue:m.value,"onUpdate:modelValue":t[0]||(t[0]=n=>m.value=n),type:"text",label:"Amount",placeholder:"Amount",classes:{input:"h-12"},icon:"cryptocurrency:ltc"},null,8,["modelValue"])]),_:1}),s(f,{name:"Wallet Address"},{default:l(()=>[s(i,{modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=n=>p.value=n),type:"text",label:"Wallet Address",placeholder:"Wallet Address",classes:{input:"h-12"},icon:"solar:copy-bold"},null,8,["modelValue"])]),_:1})]),le,e("div",ne,[s(a,{onClick:t[2]||(t[2]=S(n=>N(),["prevent"])),type:"submit",color:"primary",class:"!h-12 w-36"},{default:l(()=>[v(" Confirm ")]),_:1})]),s(M,{open:h.value,size:"sm",onClose:b},{header:l(()=>[e("div",re,[e("div",ce,[de,s(E,{onClick:b})]),s(i,{label:"Passcode",modelValue:Q(r),"onUpdate:modelValue":t[3]||(t[3]=n=>q(r)?r.value=n:r=n),type:"password",class:"",icon:"uil:padlock",shape:"curved",classes:{wrapper:"w-full",input:"!h-12 !ps-12",icon:"!h-12 !w-12"}},null,8,["modelValue"])])]),footer:l(()=>[e("div",ue,[e("div",me,[s(a,{color:"primary",flavor:"solid",onClick:t[4]||(t[4]=S(n=>j(),["prevent"]))},{default:l(()=>[v(" Send ")]),_:1})])])]),default:l(()=>[ie]),_:1},8,["open"])])])])])])])}}});export{Ee as default};
