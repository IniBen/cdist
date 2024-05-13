import{_ as oe}from"./BaseInput.vue.4a65707e.js";import{_ as ne}from"./BaseButton.e02d6ce0.js";import{_ as re}from"./BasePlaceholderPage.vue.f1695e26.js";import{_ as ce}from"./BaseHeading.vue.9a9fc5ec.js";import{_ as de}from"./nuxt-link.89ea7923.js";import{_ as ie}from"./BaseCard.vue.60dc2080.js";import{_ as ue}from"./TairoContentWrapper.vue.acfe121f.js";import{d as fe,P as me,Q as _e,c as R,r as n,y as pe,o as p,a as w,b as o,w as t,j as v,i as e,e as S,S as I,F as O,G as j,f as T,t as _}from"./entry.63b4628a.js";import{u as ge}from"./toaster.31e779e7.js";import{_ as he,a as ve}from"./placeholder-search-6-dark.eb19e01d.js";import{L as ye}from"./index.59421564.js";import"./buttons.0840fcf5.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Icon.ee796011.js";import"./index.7d7b5c60.js";import"./input-id.865b9bb7.js";const xe={key:0},we=e("img",{class:"block dark:hidden",src:he,alt:"Placeholder image"},null,-1),ke=e("img",{class:"hidden dark:block",src:ve,alt:"Placeholder image"},null,-1),be={key:1},Ne=e("hr",{class:"border-gray-400 py-2"},null,-1),Ae={class:"ltablet:grid-cols-4 grid w-full gap-4 sm:grid-cols-3 lg:grid-cols-4"},Se={class:"relative"},Ie=["src"],Oe={class:"flex items-center justify-between mb-2 mt-3 px-2"},je={class:"bg-muted-500/20 rounded-full text-xs text-muted-500 p-2"},Te={class:"mt-auto flex items-center gap-2"},$e={class:"leading-none"},Ee={class:"text-muted-800 dark:text-muted-100 font-sans text-sm font-medium leading-tight"},qe=e("span",null,"Send",-1),ze=e("div",{class:"mt-6"},null,-1),Be=e("hr",{class:"border-gray-400 py-2"},null,-1),De=e("div",null,null,-1),Pe={class:"ltablet:grid-cols-4 grid w-full gap-4 sm:grid-cols-3 lg:grid-cols-4"},Fe={class:"relative"},Le=["src"],Ce={class:"flex items-center justify-between mb-2 mt-3 px-2"},Je={class:"bg-muted-500/20 rounded-full text-xs text-muted-500 p-2"},Ve={class:"mt-auto flex items-center gap-2"},Ge={class:"leading-none"},Ue={class:"text-muted-800 dark:text-muted-100 font-sans text-sm font-medium leading-tight"},We=e("span",null,"Send",-1),Re=e("div",{class:"mt-6"},null,-1),He=e("hr",{class:"border-gray-400 py-2"},null,-1),Me=e("div",null,null,-1),Qe={class:"ltablet:grid-cols-4 grid w-full gap-4 sm:grid-cols-3 lg:grid-cols-4"},Ke={class:"relative"},Xe=["src"],Ye={class:"flex items-center justify-between mb-2 mt-3 px-2"},Ze={class:"bg-muted-500/20 rounded-full text-xs text-muted-500 p-2"},et={class:"mt-auto flex items-center gap-2"},tt={class:"leading-none"},st={class:"text-muted-800 dark:text-muted-100 font-sans text-sm font-medium leading-tight"},at=e("span",null,"Send",-1),lt=e("div",{class:"mt-6"},null,-1),ot=e("hr",{class:"border-gray-400 py-2"},null,-1),nt=e("div",null,null,-1),rt={class:"ltablet:grid-cols-4 grid w-full gap-4 sm:grid-cols-3 lg:grid-cols-4"},ct={class:"relative"},dt=["src"],it={class:"flex items-center justify-between mb-2 mt-3 px-2"},ut={class:"bg-muted-500/20 rounded-full text-xs text-muted-500 p-2"},ft={class:"mt-auto flex items-center gap-2"},mt={class:"leading-none"},_t={class:"text-muted-800 dark:text-muted-100 font-sans text-sm font-medium leading-tight"},pt=e("span",null,"Send",-1),qt=fe({__name:"index",setup(gt){const k=new ye,H=me();_e();const b=ge(),M=R(()=>parseInt(H.query.page??"1")),$=n(""),Q=n(12);n(""),n([]);var F=n([]),L=n([]),C=n([]);n([]);var J=n([]);n([]);const m=n([]);var K={},N=n([]),E=n([]),q=n([]);n({}),n([]);var y=n({});R(()=>({filter:$.value,perPage:Q.value,page:M.value})),n(""),n("");var A=n([]);const X=n([]),z=n([{propertyid:"",tokens:[{tokenstart:"",tokenend:"",amount:""}]}]);var B=n(!0);async function Y(d){try{const l=localStorage.getItem("gen_wallet_Name");await k.walletDetails(l).then(i=>{i.message.includes("Requested wallet does not exist or is not loaded")?k.loadWallet(l).then(s=>{console.log("this is the response of a loaded wallet ",s.message),d()}):d()}).catch(()=>{console.log("catch error")})}catch(l){console.log(l)}}n([]);const Z=()=>{console.log("unique nwa--->",m.value);var d="";setTimeout(()=>{d=localStorage.getItem("nftData")},3e3),m.value.length===0?V():(B.value=!1,m.value=JSON.parse(d),console.log("this guysss",m.value),V(),console.log("This is AllUniqueNFTs",m.value))};function V(){Y(ee),console.log("checked loaded")}async function ee(){const d=localStorage.getItem("gen_wallet_Name");try{k.walletAddresses(d).then(l=>{l.successful?(l.data.forEach(i=>{A.value.push(i.address),console.log("what",A.value)}),A.value.forEach(i=>{te(i)})):console.log("error prone",l.message)})}catch(l){console.log(l)}}const te=async d=>{try{console.log("walletttt",A.value),k.addressNfts(d).then(l=>{l.successful?(z.value=l.data,se()):(b.clearAll(),b.show({title:"Error",message:l.message,color:"danger",icon:"user-circle-fill",closable:!0}))})}catch(l){console.log(l)}};function D(d){const l=[],i=new Set;console.log("the guy here",typeof d);for(const s in d){console.log("the guy key",s);const u=d[s];console.log("the guy obj",u);const a=JSON.stringify(u);i.has(a)||(i.add(a),l.push(u))}return l}const se=async()=>{console.log("hi there again what",z.value),z.value.forEach(async d=>{const l=parseInt(d.propertyid),i=d.tokens;for(const a of i){const f=parseInt(a.tokenstart),h=parseInt(a.tokenend);try{const x=await k.nftDetails(f,h,l);if(x.successful){const r=new Set,c={};var s=n("");x.data.forEach((g,P)=>{if(s=JSON.parse(g.grantdata).name,s in c?c[s]++:c[s]=1,!r.has(s)){r.add(s);const U={},W=`object_${P}`;U[W]=JSON.parse(g.grantdata),y.value[W]=JSON.parse(g.grantdata),X.value.push(U)}}),K=c;for(const g in y.value)if(Object.hasOwnProperty.call(y.value,g)){const P=y.value[g].name,G=c[P];B.value=!1,m.value.push({nftAmount:G,nft:{name:y.value[g].name,image:y.value[g].image,description:y.value[g].description,attributes:y.value[g].attributes,propertyId:l,tokenStart:f,tokenEnd:h}})}localStorage.setItem("nftData",JSON.stringify(m.value))}else b.clearAll(),b.show({title:"Error",message:x.data.value.message,color:"danger",icon:"user-circle-fill",closable:!0})}catch(x){console.log(x)}}let u=n([]);for(let a=0;a<m.value.length;a++){let f=m.value[a];u.value.push(f.nft.propertyId)}F.value=u.value.filter((a,f,h)=>h.indexOf(a)===f),ae()}),le()},ae=()=>{let d=F.value.map(l=>{const i={method:"GET"};return fetch(`https://liaas20240129020448.azurewebsites.net/api/Explorer/propertyId?propertyId=${l}`,i).then(s=>s.json()).then(s=>{if(s.successful)return s.data}).catch(s=>console.error(s))});Promise.all(d).then(l=>{let i=l.filter(s=>s!==void 0);i&&i.length?i.forEach(s=>{let u;s.category==="SDA21"?(u=m.value.find(a=>(a==null?void 0:a.nft.propertyId)===s.propertyid),N.value.push(u),console.log("wetirin dey",N.value)):s.category==="SDA11"?(u=m.value.find(a=>(a==null?void 0:a.nft.propertyId)===s.propertyid),E.value.push(u),console.log("wetirin dey",E.value)):(u=m.value.find(a=>(a==null?void 0:a.nft.propertyId)===s.propertyid),q.value.push(u),console.log("wetirin dey",q.value))}):console.log("No data available.")})};async function le(){console.log("event1",N.value),setTimeout(()=>{L.value=D(N.value),C.value=D(E.value),J.value=D(q.value)},5e3)}return pe(async()=>{Z()}),(d,l)=>{const i=oe,s=ne,u=re,a=ce,f=de,h=ie,x=ue;return p(),w("div",null,[o(x,null,{left:t(()=>[o(i,{modelValue:$.value,"onUpdate:modelValue":l[0]||(l[0]=r=>$.value=r),icon:"lucide:search",shape:"curved",placeholder:"Search SDA...",classes:{wrapper:"w-full sm:w-auto"}},null,8,["modelValue"])]),right:t(()=>[o(s,{shape:"curved",class:"w-full sm:w-28",to:"/"},{default:t(()=>[v("Dashboard")]),_:1})]),default:t(()=>[e("div",null,[S(B)===!0?(p(),w("div",xe,[o(u,{title:"Wait for a while...",subtitle:"Looks like you do not have any SDA. If you have SDAs then it will be shown here in few time. Till then try other things."},{image:t(()=>[we,ke]),_:1})])):(p(),w("div",be,[o(a,{tag:"h3",size:"md",weight:"medium",class:"text-muted-800 dark:text-muted-100"},{default:t(()=>[v(" SDA ")]),_:1}),Ne,e("div",Ae,[o(I,{"enter-active-class":"transform-gpu","enter-from-class":"opacity-0 -translate-x-full","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"absolute transform-gpu","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-full"},{default:t(()=>[(p(!0),w(O,null,j(m.value,(r,c)=>(p(),T(h,{key:c,shape:"curved",class:"group p-3"},{default:t(()=>[o(f,{to:`${"/sda/details/"+c}`},{default:t(()=>[e("div",Se,[e("img",{src:r.nft.image,class:"h-40 w-full rounded-lg object-cover"},null,8,Ie)]),e("div",null,[e("div",Oe,[o(a,{tag:"h3",size:"md",weight:"medium",lead:"snug",class:"line-clamp-2 text-gray-800 dark:text-gray-100"},{default:t(()=>[v(_(r.nft.name),1)]),_:2},1024),e("div",je,[e("p",null,_(r.nftAmount),1)])]),e("div",Te,[e("div",$e,[e("h4",Ee,_(r.nft.description),1)])])])]),_:2},1032,["to"]),o(f,{to:`${"/sda/"+c}`},{default:t(()=>[o(s,{color:"primary",class:"w-full"},{default:t(()=>[qe]),_:1})]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})]),ze,o(a,{tag:"h3",size:"md",weight:"medium",class:"text-muted-800 dark:text-muted-100"},{default:t(()=>[v(" Events ")]),_:1}),Be,De,e("div",Pe,[o(I,{"enter-active-class":"transform-gpu","enter-from-class":"opacity-0 -translate-x-full","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"absolute transform-gpu","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-full"},{default:t(()=>[(p(!0),w(O,null,j(S(L),(r,c)=>(p(),T(h,{key:c,shape:"curved",class:"group p-3"},{default:t(()=>[o(f,{to:`${"/sda/details/"+c}`},{default:t(()=>[e("div",Fe,[e("img",{src:r.nft.image,class:"h-40 w-full rounded-lg object-cover"},null,8,Le)]),e("div",null,[e("div",Ce,[o(a,{tag:"h3",size:"md",weight:"medium",lead:"snug",class:"line-clamp-2 text-gray-800 dark:text-gray-100"},{default:t(()=>[v(_(r.nft.name),1)]),_:2},1024),e("div",Je,[e("p",null,_(r.nftAmount),1)])]),e("div",Ve,[e("div",Ge,[e("h4",Ue,_(r.nft.description),1)])])])]),_:2},1032,["to"]),o(f,{to:`${"/sda/"+c}`},{default:t(()=>[o(s,{color:"primary",class:"w-full"},{default:t(()=>[We]),_:1})]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})]),Re,o(a,{tag:"h3",size:"md",weight:"medium",class:"text-muted-800 dark:text-muted-100"},{default:t(()=>[v(" Arts ")]),_:1}),He,Me,e("div",Qe,[o(I,{"enter-active-class":"transform-gpu","enter-from-class":"opacity-0 -translate-x-full","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"absolute transform-gpu","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-full"},{default:t(()=>[(p(!0),w(O,null,j(S(C),(r,c)=>(p(),T(h,{key:c,shape:"curved",class:"group p-3"},{default:t(()=>[o(f,{to:`${"/sda/details/"+c}`},{default:t(()=>[e("div",Ke,[e("img",{src:r.nft.image,class:"h-40 w-full rounded-lg object-cover"},null,8,Xe)]),e("div",null,[e("div",Ye,[o(a,{tag:"h3",size:"md",weight:"medium",lead:"snug",class:"line-clamp-2 text-gray-800 dark:text-gray-100"},{default:t(()=>[v(_(r.nft.name),1)]),_:2},1024),e("div",Ze,[e("p",null,_(r.nftAmount),1)])]),e("div",et,[e("div",tt,[e("h4",st,_(r.nft.description),1)])])])]),_:2},1032,["to"]),o(f,{to:`${"/sda/"+c}`},{default:t(()=>[o(s,{color:"primary",class:"w-full"},{default:t(()=>[at]),_:1})]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})]),lt,o(a,{tag:"h3",size:"md",weight:"medium",class:"text-muted-800 dark:text-muted-100"},{default:t(()=>[v(" Others ")]),_:1}),ot,nt,e("div",rt,[o(I,{"enter-active-class":"transform-gpu","enter-from-class":"opacity-0 -translate-x-full","enter-to-class":"opacity-100 translate-x-0","leave-active-class":"absolute transform-gpu","leave-from-class":"opacity-100 translate-x-0","leave-to-class":"opacity-0 -translate-x-full"},{default:t(()=>[(p(!0),w(O,null,j(S(J),(r,c)=>(p(),T(h,{key:c,shape:"curved",class:"group p-3"},{default:t(()=>[o(f,{to:`${"/sda/details/"+c}`},{default:t(()=>[e("div",ct,[e("img",{src:r.nft.image,class:"h-40 w-full rounded-lg object-cover"},null,8,dt)]),e("div",null,[e("div",it,[o(a,{tag:"h3",size:"md",weight:"medium",lead:"snug",class:"line-clamp-2 text-gray-800 dark:text-gray-100"},{default:t(()=>[v(_(r.nft.name),1)]),_:2},1024),e("div",ut,[e("p",null,_(r.nftAmount),1)])]),e("div",ft,[e("div",mt,[e("h4",_t,_(r.nft.description),1)])])])]),_:2},1032,["to"]),o(f,{to:`${"/sda/"+c}`},{default:t(()=>[o(s,{color:"primary",class:"w-full"},{default:t(()=>[pt]),_:1})]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})])]))])]),_:1})])}}});export{qt as default};
