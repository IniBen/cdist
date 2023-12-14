import{_ as q}from"./BaseInput.vue.cca94ccc.js";import{_ as L}from"./BaseButton.d2c9924f.js";import{_ as P}from"./BasePlaceholderPage.vue.76c8885f.js";import{_ as U}from"./BaseTag.vue.557ed841.js";import{_ as E}from"./BaseHeading.vue.3de0d3e4.js";import{_ as G}from"./BaseAvatar.vue.4ad84cf4.js";import{_ as J}from"./nuxt-link.c9e0679d.js";import{_ as O}from"./BaseCard.vue.71987941.js";import{_ as R}from"./TairoContentWrapper.vue.f3c0947f.js";import{d as W,I as H,V as M,c as j,r,Y,o as f,a as x,b as n,w as l,e as b,x as K,j as T,i as t,W as Q,F as X,v as Z,f as ee,t as k}from"./entry.3ca38a09.js";import{u as te}from"./toaster.bf488b3c.js";import{_ as ae,a as se}from"./placeholder-search-6-dark.57f36d38.js";import{b as $}from"./index.c75d904c.js";import"./BasePlaceload.36e028a3.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Icon.3da843a1.js";import"./input-id.dddb5502.js";import"./buttons.74dfc8fe.js";const oe={key:0},ne=t("img",{class:"block dark:hidden",src:ae,alt:"Placeholder image"},null,-1),le=t("img",{class:"hidden dark:block",src:se,alt:"Placeholder image"},null,-1),re={key:1},ie={class:"ltablet:grid-cols-4 grid w-full gap-4 sm:grid-cols-3 lg:grid-cols-4"},ce={class:"relative"},de=["src"],ue={class:"flex items-center justify-between mb-2 mt-3 px-2"},pe={class:"mt-auto flex items-center gap-2"},me={class:"leading-none"},_e={class:"text-muted-800 dark:text-muted-100 font-sans text-sm font-medium leading-tight"},fe=t("span",null,"Send",-1),ge=t("div",{class:"mt-6"},null,-1),Ve=W({__name:"nfts1",setup(ve){const C=H();M();const g=te(),D=j(()=>parseInt(C.query.page??"1")),v=r(""),z=r(12);j(()=>({filter:v.value,perPage:z.value,page:D.value})),r(""),r("");const N=r(""),d=r([{propertyid:"",tokens:[{tokenstart:"",tokenend:"",amount:""}]}]),A=r([{owner:"",nft:{index:"",propertyid:"",amount:"",name:"",description:"",image:""}}]),i=r([{owner:"",nft:{index:"",propertyid:"",amount:"",name:"",description:"",image:""}}]),S=r(!0),I=()=>{const s=localStorage.getItem("AUNs");i.value===0?B():(S.value=!1,i.value=JSON.parse(s),console.log("nftlatest ?",i),B(),console.log("This is AllUniqueNFTs",A.value))},B=async()=>{N.value=localStorage.getItem("wallet_address");try{const s={headers:{"Content-Type":"application/json"}},e=await $(`https://cyto.azurewebsites.net/api/Address/NFTs?Address=${N.value}`,s).get().json();e.data.value.successful?(d.value=e.data.value.data,A.value=[],V()):(g.clearAll(),g.show({title:"Error",message:e.data.value.message,color:"danger",icon:"user-circle-fill",closable:!0}))}catch(s){console.log(s)}},V=async()=>{for(let e=0;e<d.value.length;e++){const h=d.value[e].tokens[0].tokenstart,p=d.value[e].tokens[0].tokenend,m=d.value[e].propertyid,y=Number(d.value[e].tokens[0].amount);console.log("DATA",h,p,m);try{const u={headers:{"Content-Type":"application/json"}},w={tokenidstart:h,tokenidend:p,propertyid:m},a=await $("https://cyto.azurewebsites.net/api/Explorer/UniqueNFTdetails",u).post(w).json();if(a.data.value.successful)for(let o=0;o<a.data.value.data.length;o++){const _=JSON.parse(a.data.value.data[o].grantdata);var s=y;o+1>=a.data.value.data.length?s=y-a.data.value.data[o].index+1:s=a.data.value.data[o+1].index-a.data.value.data[o].index,console.log("This is nftAmount",s),i.value.push({owner:a.data.value.data[o].owner,nft:{index:a.data.value.data[o].index,propertyid:m,amount:s.toLocaleString(),name:_.name,description:_.description,image:_.image}}),console.log("allnnftzz",i.value),localStorage.setItem("nftData",JSON.stringify(i.value))}else g.clearAll(),g.show({title:"Error",message:a.data.value.message,color:"danger",icon:"user-circle-fill",closable:!0})}catch(u){console.log(u)}}};return Y(async()=>{I()}),(s,e)=>{const h=q,p=L,m=P,y=U,u=E,w=G,a=J,o=O,_=R;return f(),x("div",null,[n(_,null,{left:l(()=>[n(h,{modelValue:b(v),"onUpdate:modelValue":e[0]||(e[0]=c=>K(v)?v.value=c:null),icon:"lucide:search",shape:"curved",placeholder:"Search SDA...",classes:{wrapper:"w-full sm:w-auto"}},null,8,["modelValue"])]),right:l(()=>[n(p,{shape:"curved",class:"w-full sm:w-28",to:"/"},{default:l(()=>[T("Dashboard")]),_:1})]),default:l(()=>[t("div",null,[b(S)?(f(),x("div",oe,[n(m,{title:"Wait for a while...",subtitle:"Looks like you do not have any SDA. If you have SDAs then it will be shown here in few time. Till then try other things."},{image:l(()=>[ne,le]),_:1})])):(f(),x("div",re,[t("div",ie,[n(Q,{"enter-active-class":"transform-gpu","enter-from-class":"opacity-0 -translate-x-full","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"absolute transform-gpu","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-full"},{default:l(()=>[(f(!0),x(X,null,Z(b(i),(c,F)=>(f(),ee(o,{key:F,shape:"curved",class:"group p-3"},{default:l(()=>[t("div",ce,[t("img",{src:c.nft.image,class:"h-40 w-full rounded-lg object-cover"},null,8,de),n(y,{shape:"full",color:"primary",flavor:"pastel",condensed:"",class:"absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"},{default:l(()=>[T(k(c.nft.propertyid),1)]),_:2},1024)]),t("div",null,[t("div",ue,[n(u,{tag:"h3",size:"md",weight:"medium",lead:"snug",class:"line-clamp-2 text-gray-800 dark:text-gray-100"},{default:l(()=>[T(k(c.nft.name),1)]),_:2},1024),n(u,{tag:"h3",size:"md",weight:"medium",lead:"snug",class:"line-clamp-2 text-gray-800 dark:text-gray-100"})]),t("div",pe,[n(w,{textContent:k(c.nft.amount),size:"xs",class:"bg-muted-500/20 text-muted-500"},null,8,["textContent"]),t("div",me,[t("h4",_e,k(c.nft.description),1)])])]),n(a,{to:`${"/sda/"+F}`},{default:l(()=>[n(p,{color:"primary",class:"w-full"},{default:l(()=>[fe]),_:1})]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})]),ge]))])]),_:1})])}}});export{Ve as default};
