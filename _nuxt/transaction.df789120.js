import w from"./Icon.3da843a1.js";import{_ as v}from"./BaseIconBox.vue.a491c50e.js";import{_ as b}from"./BaseButton.d2c9924f.js";import{L as y}from"./index.59421564.js";import{d as k,r as m,Y as B,o as e,a as s,i as t,e as u,F as N,v as T,b as c,w as r,f,t as h}from"./entry.3ca38a09.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./BasePlaceload.36e028a3.js";import"./buttons.74dfc8fe.js";import"./nuxt-link.c9e0679d.js";const E={class:"w-full"},F={class:"h-full"},I={class:"flex h-full w-full flex-col"},j={class:"mt-auto w-full"},L={key:0},S={class:"space-y-4 w-full"},z={class:"w-full flex items-center"},C={class:"px-2 md:px-0"},D=t("p",{weight:"medium",lead:"tight",class:"text-muted-800 dark:text-white text-xs lg:text-[sm]"},[t("span",{class:"text-muted-800 dark:text-muted-100 font-sans text-xs lg:text-sm font-semibold"},"Transfer ")],-1),M={class:"text-muted-400 text-[8px] lg:text-xs space-x-0.5"},O={key:0},R={key:1},V={class:""},W={class:"text-muted-800 dark:text-muted-100 font-sans text-xs lg:text-sm font-semibold"},Y={class:"mt-6 flex items-center justify-center"},A=t("span",null,"No Transaction",-1),H={key:1,class:"mt-6 flex items-center justify-center"},U=t("span",{class:"text-default"},"No Transaction",-1),$=[U],st=k({__name:"transaction",setup(q){var l=m([]),i=m(!1);const p=new y;function x(){try{const a=localStorage.getItem("gen_wallet_Name");console.log(a),p.walletTransactions(a).then(o=>{console.log("this is respect"),o.successful?(console.log("this is me for you",o.data),o.data.length==0&&(i.value=!0),l.value=o.data,console.log("this is the sliced wallet transactions: ",l),console.log("this is the tranx number: ",o.data.length)):console.log("Error from the get trancsactions")}).catch(()=>{console.log("catch error")})}catch(a){console.log(a)}}return B(()=>{console.log("I AM HERE FOR YOU"),x()}),(a,o)=>{const d=w,_=v,g=b;return e(),s("div",E,[t("div",F,[t("div",I,[t("div",j,[u(i)?(e(),s("div",H,$)):(e(),s("div",L,[t("div",S,[(e(!0),s(N,null,T(u(l),n=>(e(),s("div",{class:"w-full flex items-center justify-between gap-2 border-b border-1 border-muted-800 pb-2",key:n.blockhash},[t("div",z,[n.category=="receive"?(e(),f(_,{key:0,class:"bg-red-500/10 text-green-500",size:"sm",shape:"full"},{default:r(()=>[c(d,{name:"tabler:arrow-bar-to-down",class:"h-5 w-5"})]),_:1})):(e(),f(_,{key:1,class:"bg-red-500/10 text-red-500",size:"sm",shape:"full"},{default:r(()=>[c(d,{name:"tabler:arrow-bar-to-up",class:"h-5 w-5"})]),_:1})),t("div",C,[D,t("p",M,[n.category=="receive"?(e(),s("span",O,"From:")):(e(),s("span",R,"To:")),t("span",null,h(n.address),1)])])]),t("div",V,[t("span",W,h(n.amount),1)])]))),128))]),t("div",Y,[c(g,{color:"default",class:""},{default:r(()=>[A]),_:1})])]))])])])])}}});export{st as default};
