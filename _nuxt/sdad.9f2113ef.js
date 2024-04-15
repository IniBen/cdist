import{_ as q}from"./BaseInput.vue.1004616c.js";import{_ as C}from"./BaseButton.c198d1f5.js";import{_ as D}from"./BasePlaceholderPage.vue.c0a35aa1.js";import{_ as J}from"./BaseHeading.vue.f809ece5.js";import{_ as W}from"./nuxt-link.6d21ee03.js";import{_ as G}from"./BaseCard.vue.0dab6440.js";import{_ as U}from"./TairoContentWrapper.vue.eb975085.js";import{d as R,I as z,V as H,c as B,r as o,Y as M,o as h,a as k,b as u,w as n,j as T,i as t,e as Y,W as K,F as Q,v as X,f as Z,t as N}from"./entry.208f3c12.js";import{u as ee}from"./toaster.7b030faf.js";import{_ as te,a as ae}from"./placeholder-search-6-dark.2d320733.js";import{L as se}from"./index.59421564.js";import"./BasePlaceload.b0c533ab.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Icon.2a80a34f.js";import"./index.cb2b65c4.js";import"./input-id.30136757.js";import"./buttons.576cce5f.js";const oe={key:0},le=t("img",{class:"block dark:hidden",src:te,alt:"Placeholder image"},null,-1),ne=t("img",{class:"hidden dark:block",src:ae,alt:"Placeholder image"},null,-1),re={key:1},ce={class:"ltablet:grid-cols-4 grid w-full gap-4 sm:grid-cols-3 lg:grid-cols-4"},ie={class:"relative"},ue=["src"],de={class:"flex items-center justify-between mb-2 mt-3 px-2"},me={class:"bg-muted-500/20 rounded-full text-xs text-muted-500 p-2"},fe={class:"mt-auto flex items-center gap-2"},_e={class:"leading-none"},pe={class:"text-muted-800 dark:text-muted-100 font-sans text-sm font-medium leading-tight"},ge=t("span",null,"Send",-1),ve=t("div",{class:"mt-6"},null,-1),$e=R({__name:"sdad",setup(he){const w=new se,j=z();H();const f=ee(),E=B(()=>parseInt(j.query.page??"1")),b=o(""),O=o(12);B(()=>({filter:b.value,perPage:O.value,page:E.value})),o(""),o(""),o("");const F=o([]),g=o([{propertyid:"",tokens:[{tokenstart:"",tokenend:"",amount:""}]}]),_=o([{nftAmount:"",nft:{name:"",image:"",description:"",attributes:"",propertyId:"",tokenStart:"",tokenEnd:""}}]);var L={};o({});var c=o({}),x=o(!0);const P=()=>{console.log("unique nwa--->",_.value);const r=localStorage.getItem("nftData");_.value.length===0||(x.value=!1,_.value=JSON.parse(r)),S()},V=async r=>{try{w.addressNfts(r).then(e=>{e.successful?(g.value=e.data,$()):(f.clearAll(),f.show({title:"Error",message:e.message,color:"danger",icon:"user-circle-fill",closable:!0}))})}catch(e){console.log(e)}};function S(){var r="sandia 353151";try{w.walletAddresses(r).then(e=>{e.successful?e.data.forEach(p=>{var a=p.address;V(a)}):(console.log("error prone",e.message),f.clearAll(),f.show({title:"Error",message:e.message,color:"danger",icon:"user-circle-fill",closable:!0}))})}catch(e){console.log(e)}}const $=async()=>{for(let a=0;a<g.value.length;a++){var r=parseInt(g.value[a].tokens[a].tokenstart),e=parseInt(g.value[a].tokens[a].tokenend),p=parseInt(g.value[a].propertyid);try{await w.nftDetails(r,e,p).then(d=>{if(d.successful){const y=new Set,m={};var i=o("");d.data.forEach((s,l)=>{if(i=JSON.parse(s.grantdata).name,i in m?m[i]++:m[i]=1,!y.has(i)){y.add(i);const A={},I=`object_${l}`,ye=a;A[I]=JSON.parse(s.grantdata),c.value[I]=JSON.parse(s.grantdata),F.value.push(A)}}),L=m;for(const s in c.value)if(Object.hasOwnProperty.call(c.value,s)){const l=c.value[s].name,v=m[l];x.value=!1,_.value.push({nftAmount:v,nft:{name:c.value[s].name,image:c.value[s].image,description:c.value[s].description,attributes:c.value[s].attributes,propertyId:p,tokenStart:r,tokenEnd:e}})}localStorage.setItem("nftData",JSON.stringify(_.value))}else f.clearAll(),f.show({title:"Error",message:d.message,color:"danger",icon:"user-circle-fill",closable:!0})})}catch(d){console.log(d)}}};return M(async()=>{P()}),(r,e)=>{const p=q,a=C,d=D,i=J,y=W,m=G,s=U;return h(),k("div",null,[u(s,null,{left:n(()=>[u(p,{modelValue:b.value,"onUpdate:modelValue":e[0]||(e[0]=l=>b.value=l),icon:"lucide:search",shape:"curved",placeholder:"Search SDA...",classes:{wrapper:"w-full sm:w-auto"}},null,8,["modelValue"])]),right:n(()=>[u(a,{shape:"curved",class:"w-full sm:w-28",to:"/"},{default:n(()=>[T("Dashboard")]),_:1})]),default:n(()=>[t("div",null,[Y(x)===!0?(h(),k("div",oe,[u(d,{title:"Wait for a while...",subtitle:"Looks like you do not have any SDA. If you have SDAs then it will be shown here in few time. Till then try other things."},{image:n(()=>[le,ne]),_:1})])):(h(),k("div",re,[t("div",ce,[u(K,{"enter-active-class":"transform-gpu","enter-from-class":"opacity-0 -translate-x-full","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"absolute transform-gpu","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-full"},{default:n(()=>[(h(!0),k(Q,null,X(_.value,(l,v)=>(h(),Z(m,{key:v,shape:"curved",class:"group p-3"},{default:n(()=>[t("div",ie,[t("img",{src:l.nft.image,class:"h-40 w-full rounded-lg object-cover"},null,8,ue)]),t("div",null,[t("div",de,[u(i,{tag:"h3",size:"md",weight:"medium",lead:"snug",class:"line-clamp-2 text-gray-800 dark:text-gray-100"},{default:n(()=>[T(N(l.nft.name),1)]),_:2},1024),t("div",me,[t("p",null,N(l.nftAmount),1)])]),t("div",fe,[t("div",_e,[t("h4",pe,N(l.nft.description),1)])])]),u(y,{to:`${"/sda/"+v}`},{default:n(()=>[u(a,{color:"primary",class:"w-full"},{default:n(()=>[ge]),_:1})]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})]),ve]))])]),_:1})])}}});export{$e as default};
