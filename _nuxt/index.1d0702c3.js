import K from"./Icon.cd622b41.js";import{_ as Z}from"./buttons.3ff0afbe.js";import{_ as Se}from"./BaseButton.2b54a2c4.js";import{_ as Ae,a as Te}from"./BaseDropdown.vue.ae05530a.js";import{_ as Ie}from"./BaseCard.vue.f4e6894d.js";import{_ as Ce}from"./BaseHeading.vue.367aa72a.js";import{_ as Ne}from"./BaseIconBox.vue.1d099b02.js";import{d as F,r as c,y as ee,a as _,p as Le,S as De,_ as ze,D as Be,o as d,e as u,f as D,I as Y,h as U,b as n,w as r,J as H,n as te,m as $e,U as J,V as X,P as Oe,z as je,i as e,t as L,Q as j,F as Ee,G as Pe,W as Me,H as Re,j as Ve}from"./entry.4f1f4e90.js";import{a as qe}from"./index.a63dc9f9.js";import{_ as Ue}from"./BaseButtonClose.vue.2b3e83ce.js";import{_ as He}from"./BaseInput.vue.ac862dc4.js";import{_ as Je}from"./TairoModal.vue.02bd1e2c.js";import{u as Fe}from"./toaster.29c7b5e4.js";import{u as We}from"./tailwind.04951d72.js";import"./index.4e5993e3.js";import{L as Qe}from"./index.92423b2e.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./nuxt-link.8273492f.js";import"./menu.99e6d505.js";import"./use-outside-click.eb7af496.js";import"./use-tracked-pointer.a09b6512.js";import"./input-id.477f8fd9.js";import"./transition.d9dd8cdc.js";const Ge=F({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(S,{slots:h,attrs:A}){const i=c(!1);return ee(()=>{i.value=!0}),g=>{var b;if(i.value)return(b=h.default)==null?void 0:b.call(h);const v=h.fallback||h.placeholder;if(v)return v();const T=g.fallback||g.placeholder||"",p=g.fallbackTag||g.placeholderTag||"span";return _(p,A,T)}}}),se=()=>Le("apex-loaded",()=>!1),Ke=De({suspensible:!1,loader:()=>ze(()=>import("./vue3-apexcharts.90babb5e.js"),["./vue3-apexcharts.90babb5e.js","./entry.4f1f4e90.js","./entry.de5f88f2.css"],import.meta.url).then(S=>(Be(()=>{se().value=!0}),S.default))});function Ye(){const S=se();return{LazyApexCharts:Ke,isLoaded:S}}const Xe=F({__name:"AddonApexcharts",props:{type:{},height:{},width:{},series:{},options:{}},setup(S){const h=S,{LazyApexCharts:A,isLoaded:i}=Ye(),g=c(null),v=c(!1),{stop:T}=qe(g,([{isIntersecting:p}])=>{p&&(v.value=p,T())});return(p,b)=>{const I=Z,z=Ge;return d(),_("div",{ref_key:"target",ref:g},[!u(i)&&!u(v)?(d(),D(I,{key:0,class:"m-4 w-[calc(100%-32px)]",style:Y({height:`${p.height-32}px`})},null,8,["style"])):U("",!0),n(z,null,{default:r(()=>[u(v)?H((d(),D(u(A),te($e({key:0},h)),null,16)),[[J,u(i)]]):(d(),D(I,{key:1,class:"m-4 w-[calc(100%-32px)]",style:Y({height:`${p.height-32}px`})},null,8,["style"]))]),_:1})],512)}}}),Ze={class:"relative"},et={class:"flex flex-col gap-6"},tt={class:"flex items-center justify-center w-full px-6 lg:my-12 mx-auto -sm:mt-10"},st={class:"mx-auto md:mr-10 md:mx-0 space-y-2"},ot={class:"flex items-center h-full flex-col lg:ps-12"},at={class:"flex space-x-2"},lt={class:"flex items-center space-x-2"},nt={class:"bg-transparent border-0 outline-0 text-xl lg:text-4xl"},ct=e("p",{class:"text-lg lg:text-xl text-start"},"LTC",-1),rt={class:"flex lg:justify-end justify-center mb-20"},it={key:0,class:"lg:w-60 lg:h-40 w-40 lg:px-6"},dt={key:1,class:"lg:w-60 lg:h-36 w-36 lg:px-6"},ut=["src"],pt={key:0,class:""},mt={class:"leading-relaxed space-y-10 mt-10"},ft={class:"flex items-center space-x-3"},_t=e("span",null,"Send",-1),ht=e("span",null,"Fund",-1),gt=e("span",null,"Receive",-1),xt={class:"flex items-start"},vt={weight:"semibold",lead:"tight",class:"text-muted-600 lg:text-sm text-xs dark:text-white"},wt={class:"ms-auto absolute top-5 right-0 lg:px-24 px-5"},yt={class:"ltablet:w-3/5 w-full lg:w-3/5 px-6"},bt={class:"mb-12 flex items-center justify-between"},kt=e("span",null,"Send",-1),St=e("div",null,null,-1),At=e("div",{class:"hidden flex justify-end text-center -mt-8 mr-28"},[e("p",{class:"ltablet:mx-0 text-muted-400 mx-auto max-w-xs text-center font-sans text-xs lg:mx-0"}," Scan to transfer tokens ")],-1),Tt={class:"ltablet:border-r lg:border-r ltablet:w-3/5 w-full lg:w-3/5"},It={class:"h-full lg:px-4"},Ct={class:"flex h-full w-full flex-col"},Nt={class:"mb-6 flex items-center justify-between"},Lt=e("span",null,"Activites",-1),Dt={key:0,class:"mt-auto"},zt={class:"space-y-4"},Bt=e("span",null,"No transaction yet",-1),$t={class:"w-full flex items-center"},Ot={class:"px-2 md:px-0"},jt={class:"flex justify-between"},Et=e("p",{weight:"medium",lead:"tight",class:"text-muted-800 dark:text-white text-xs lg:text-[sm]"},[e("span",{class:"text-muted-800 dark:text-muted-100 font-sans text-xs lg:text-sm font-semibold"},"Transfer ")],-1),Pt={class:"text-muted-800 dark:text-muted-100 font-sans text-xs lg:text-sm font-semibold"},Mt={class:"text-muted-400 text-[8px] lg:text-xs space-x-0.5"},Rt={key:0},Vt={key:1},qt={class:"mt-6 flex items-center justify-center"},Ut=e("span",null,"view more",-1),Ht={key:1,class:"mt-6 flex items-center justify-center"},Jt=e("span",{class:"text-default"},"No Transaction",-1),Ft=[Jt],Wt={class:"border-muted-300 dark:border-muted-700 w-full"},Qt={class:"flex h-full w-full flex-col gap-16 sm:flex-row px-4"},Gt={class:"shrink-0"},Kt=e("span",null,"Monthly Summary",-1),Yt={class:"border-muted-300 dark:border-muted-700 flex flex-col rounded-lg border"},Xt={class:"p-4"},Zt=e("div",{class:"text-muted-400 mb-1 font-sans text-xs font-medium uppercase"},[e("span",null,"Income")],-1),es={class:"text-success-500 font-sans text-sm font-semibold"},ts={class:"p-4"},ss=e("div",{class:"text-muted-400 mb-1 font-sans text-xs font-medium uppercase"},[e("span",null,"Expenses")],-1),os={class:"text-danger-500 font-sans text-sm font-semibold"},as={class:"ltablet:pe-12 flex h-full grow flex-col lg:pe-12"},ls={class:"mt-auto"},ns={class:"px-3"},cs={class:"flex w-full items-center justify-between p-4 md:p-6"},rs=e("h3",{class:"font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"}," Enter your Passcode to confirm ",-1),is=e("div",{class:"p-4 md:p-6"},[e("div",{class:"mx-auto w-full max-w-xs text-center"})],-1),ds={class:"p-4 md:p-6"},us={class:"flex gap-x-2"},js=F({__name:"index",setup(S){var h=c(0);const A=c(!1);var i=c(""),g=c([]),v=c(""),T=c(!1);c("");var p=c([]),b=c([]);const I=c(0),z=c(0);var E=c(""),B=c(""),C=c("text");X({title:"Success",message:"Message has been sent!",color:"success",icon:"lucide:check",closable:!0});const $=Fe(),oe=Oe();var ae=c("");const O=new Qe;je(ae,(s,t)=>{var o=s-t;o<0?($.clearAll(),$.show({title:`Recieved ${o}`,message:`Sent to your wallet address ${i}`,color:"success",icon:"ph:copy",closable:!0}),console.log("Negative")):o>0&&($.show({title:`Sent ${o}`,message:`from your address ${i}`,color:"danger",icon:"ph:copy",closable:!0}),console.log("Positive"))});function le(){console.log("Toggling input type:",C),C=C==="password"?"text":"password",console.log("Toggling out type:",C)}function ne(s){try{navigator.clipboard.writeText(s),$.clearAll(),$.show({title:"Success!",message:"Address copied successfully",color:"success",icon:"ph:copy",closable:!0})}catch(t){console.error("Unable to copy text: ",t)}}const ce=c([{id:1,name:"Litecoin",text:"LPsvd8n76fGmHZVYNkM7cj2idAKJQg4KhU",media:"/img/illustrations/tokens/litecoin-ltc-logo.svg",balance:"30.45",publicadd:"02e57cc430dd0ebada066cfa57bac138af2e42406c3d8c77579ac453a683a0f606"}][0]);c(0);const re=X(de());function P(){G(ie)}function ie(){try{const s=localStorage.getItem("gen_wallet_Name");console.log("catch error",s),O.walletBalance(s).then(t=>{t.successful?(h.value=t.data,console.log("this is the wallet response walletBalance ",h)):console.log("Error from the get balance now")}).catch(()=>{console.log("catch error")})}catch(s){console.log(s)}}function W(){try{const s=localStorage.getItem("gen_wallet_Name");O.walletTransactions(s).then(t=>{if(t.successful){for(let l=0;l<t.data.length;l++){const f=t.data;f[l].category==="send"?p.value.push(f[l].amount):b.value.push(f[l].amount)}console.log("sending array",p.value),console.log("recieve array",b.value);for(let l=0;l<p.value.length;l++)z.value+=p.value[l],console.log("the rec",I.value);for(let l=0;l<b.value.length;l++)I.value+=b.value[l],console.log("the send",z.value);t.data.length==0&&(T.value=!0);const o=t.data.slice(0,5);console.log("the get trancsactions",o),g.value=o,console.log("this is the sliced wallet transactions: ",g.value),console.log("this is the tranx number: ",t.data.length)}else console.log("Error from the get trancsactions ")}).catch(()=>{console.log("catch error")})}catch(s){console.log(s)}}function de(){const{primary:s,info:t,success:o}=We(),l="area",f=250,a={chart:{foreColor:"#999",stacked:!0,toolbar:{show:!1},dropShadow:{enabled:!0,enabledSeries:[0],top:-2,left:2,blur:5,opacity:.06}},colors:[o.value,s.value,t.value],stroke:{curve:"smooth",width:3},title:{text:"",align:"left"},dataLabels:{enabled:!1},markers:{size:0,strokeColor:"#fff",strokeWidth:3,strokeOpacity:1,fillOpacity:1,hover:{size:6}},xaxis:{type:"datetime",axisBorder:{show:!0},axisTicks:{show:!1},categories:[1991,1992,1993,1994,1995,1996,1997,1998,1999]},yaxis:{labels:{offsetX:0,offsetY:-5},tooltip:{enabled:!0}},grid:{show:!1,padding:{left:-5,right:5}},tooltip:{x:{format:"dd MMM yyyy"}},legend:{position:"top",horizontalAlign:"left"},fill:{type:"solid",fillOpacity:.7}},x=p.value.sort(function(k,N){return console.log("sorted",x),k-N}),w=b.value.sort(function(k,N){return k-N}),y=c([{name:"Incoming",data:w},{name:"outgoing",data:x}]);return{type:l,height:f,options:a,series:y}}c(0),c(0);async function Q(){const s=localStorage.getItem("wallet_address")||"";v.value="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+s+"&amp;size=50x50"}async function ue(){i.value=localStorage.getItem("wallet_address")||"",console.log("wallet address is here value: ",i.value);const s=localStorage.getItem("onboardingLevel")||"",t=parseInt(s,10);console.log("na my level: ",t),t>6?i.value==null||i.value==""?oe.push("/onboarding"):(P(),W(),await Q()):window.location.href="/onboarding"}async function pe(){i.value=localStorage.getItem("wallet_address")||"",console.log("wallet address is here value: ",i.value);const s=localStorage.getItem("importlevel")||"",t=parseInt(s,10);console.log("na my level: ",t),t>2?i.value==null||i.value==""?window.location.href="/onboarding":(P(),W(),await Q()):window.location.href="/onboarding"}const M=c(!1);function R(){M.value=!1}function me(){M.value=!0}var V=c([]),q=c([]);async function fe(){try{var s=localStorage.getItem("gen_wallet_Name")||"";O.walletAddresses(s).then(t=>{t.successful?(t.data.forEach(o=>{V.value.push(o.address)}),V.value.forEach(o=>{_e(o)})):console.log("error prone",t.message)})}catch(t){console.log(t)}}async function _e(s){console.log("get priv");const t=localStorage.getItem("gen_wallet_Name"),o=localStorage.getItem("wallet_address"),l=localStorage.getItem("encrytedDataPhrase");console.log("decrypted 2",l,o,t);let f;if(l)try{await he(l,B.value)}catch(a){console.error("Error decrypting data:",a);return}try{const a=new Headers;a.append("Usev2","true"),t&&(a.append("wallet",t),a.append("encryptedPassphrase",E.value)),console.log("wetin again:",f,t);const x={method:"GET",headers:a};console.log("requestOptions",E.value,t),await fetch(`https://cytonode20240606091952.azurewebsites.net/api/Address/get-address-privatekey?Address=${s}`,x).then(w=>w.text()).then(w=>{console.log("resp: ",w);const y=JSON.parse(w);console.log("privatekey: ",y),y.successful?(q.value.push(y.data),console.log("privatekey: ",q.value)):console.log(y.message)}).catch(w=>console.error(w))}catch{}}async function he(s,t){const o=new Headers;o.append("Content-Type","application/json");const l=JSON.stringify({encryptedData:s,key:t});console.log("raw war",l),await fetch("https://cyto-node.azurewebsites.net/encryption/decrypt",{method:"POST",headers:o,body:l}).then(a=>a.text()).then(a=>{const x=JSON.parse(a);return console.log("grace",x),console.log("encryptedData.value",x.decryptedData),E.value=x.decryptedData,x.decryptedData}).catch(a=>console.error(a))}const ge=async()=>{await fe();const s=[];return q.value.forEach(t=>{V.value.forEach(o=>{s.push({[o]:t})})}),s},xe=async()=>{A.value=!0;const s=await ge(),t=JSON.stringify(s,null,2),o=new Blob([t],{type:"text/plain"}),f=`${(localStorage.getItem("gen_wallet_Name")||"").replace(/\s/g,"")}.txt`,a=document.createElement("a");a.href=URL.createObjectURL(o),a.download=f,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(a.href),A.value=!1,R()};async function G(s){try{const t=localStorage.getItem("gen_wallet_Name");await O.walletDetails(t).then(o=>{o.message.includes("Requested wallet does not exist or is not loaded")?O.loadWallet(t).then(l=>{console.log("this is the response of a loaded wallet ",l.message),s()}):s()}).catch(o=>{console.log("catch error",o)})}catch(t){console.log(t)}}function ve(){G(ue)}return ee(async()=>{const s=localStorage.getItem("signin");(s?JSON.parse(s):null)===!0?ve():await pe()}),(s,t)=>{const o=K,l=K,f=Z,a=Se,x=Ae,w=Te,y=Ie,k=Ce,N=Ne,we=Xe,ye=Ue,be=He,ke=Je;return d(),_("div",Ze,[e("div",et,[n(y,{id:"#detail",class:"ltablet:flex-row gap-y-10 overflow-hidden space-y-3 p-6 sm:p-10 lg:flex-row space-x-6 relative"},{default:r(()=>[e("div",tt,[e("div",st,[e("div",ot,[e("div",at,[e("div",lt,[e("span",nt,L(u(h)),1),ct,e("button",{onClick:t[0]||(t[0]=j(m=>le(),["prevent"]))},[H(n(o,{name:"mdi:hide-outline",class:"text-default-500 h-4 w-4 ml-2"},null,512),[[J,u(C)==="password"]]),H(n(o,{name:"mdi:show-outline",class:"text-default-500 h-4 w-4 ml-2"},null,512),[[J,u(C)==="text"]])])]),e("button",{onClick:t[1]||(t[1]=j(m=>P(),["prevent"]))},[n(l,{name:"el:refresh",class:"text-default-500 h-4 w-4 ml-2"})])])]),e("div",rt,[u(v)==""?(d(),_("div",it,[n(f,{class:"lg:w-40 lg:h-36 w-36 lg:px-6 rounded-xl flex justify-center"})])):(d(),_("div",dt,[e("img",{class:"rounded-xl border-4 h-15",src:u(v),alt:"qrImage"},null,8,ut)]))]),ce.value?(d(),_("div",pt,[e("div",mt,[e("div",ft,[n(a,{color:"default",class:"w-full",to:"/send"},{default:r(()=>[_t]),_:1}),n(a,{color:"primary",class:"w-full",to:"https://www.moonpay.com/buy",target:"_blank"},{default:r(()=>[ht]),_:1}),n(a,{color:"default",class:"w-full",to:"/receive"},{default:r(()=>[gt]),_:1})])])])):U("",!0),e("div",{class:"flex space-x-1 items-center justify-center mx-auto text-center -mt-6 lg:mt-0 font-sans lg:mx-0",onClick:t[2]||(t[2]=j(m=>ne(u(i)),["prevent"]))},[e("button",xt,[n(o,{name:"ion:copy",class:"text-default-500 h-3 w-3"})]),e("p",vt,L(u(i)),1)])])]),e("div",wt,[n(w,{flavor:"context",label:"Dropdown",orientation:"end",condensed:"",class:"z-20",shape:"curved"},{default:r(()=>[n(x,{onClick:t[3]||(t[3]=m=>me()),title:"Export"},{start:r(()=>[n(o,{name:"tabler:send",class:"me-2 block h-5 w-5"})]),_:1})]),_:1})])]),_:1}),n(y,{id:"#sent",class:"hidden ltablet:flex-row flex flex-col gap-y-10 overflow-hidden p-6 sm:p-10 lg:flex-row space-x-6"},{default:r(()=>[e("div",yt,[e("div",bt,[n(k,{as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 dark:text-white"},{default:r(()=>[kt]),_:1}),St]),At])]),_:1}),n(y,{class:"ltablet:flex-row !bg-muted-200 dark:!bg-muted-800 flex flex-col gap-y-10 p-10 lg:p-4 lg:flex-row"},{default:r(()=>[e("div",Tt,[e("div",It,[e("div",Ct,[e("div",Nt,[n(k,{as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 mb-6 dark:text-white"},{default:r(()=>[Lt]),_:1})]),u(T)?(d(),_("div",Ht,Ft)):(d(),_("div",Dt,[e("div",zt,[u(T)?(d(),D(k,{key:0,as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-600 dark:text-white py-1 ml-12 lg:py-4"},{default:r(()=>[Bt]),_:1})):U("",!0),(d(!0),_(Ee,null,Pe(u(g),m=>(d(),_("div",{class:"w-full flex items-center space-x-2 border-b border-1 border-muted-800 pb-2",key:m.blockhash},[e("div",$t,[m.category=="receive"?(d(),D(N,{key:0,class:"bg-red-500/10 text-green-500",size:"sm",shape:"full"},{default:r(()=>[n(o,{name:"tabler:arrow-bar-to-down",class:"h-5 w-5"})]),_:1})):(d(),D(N,{key:1,class:"bg-red-500/10 text-red-500",size:"sm",shape:"full"},{default:r(()=>[n(o,{name:"tabler:arrow-bar-to-up",class:"h-5 w-5"})]),_:1})),e("div",Ot,[e("div",jt,[Et,e("span",Pt,L(m.amount),1)]),e("p",Mt,[m.category=="receive"?(d(),_("span",Rt,"From:")):(d(),_("span",Vt,"To:")),e("span",null,L(m.address),1)])])])]))),128))]),e("div",qt,[n(a,{color:"default",class:"",to:"/transaction"},{default:r(()=>[Ut]),_:1})])]))])])]),e("div",Wt,[e("div",Qt,[e("div",Gt,[n(k,{as:"h3",size:"md",weight:"semibold",lead:"tight",class:"text-muted-800 mb-6 dark:text-white"},{default:r(()=>[Kt]),_:1}),e("div",Yt,[e("div",Xt,[Zt,e("div",es,[e("span",null,"+ "+L(Math.abs(I.value.toPrecision(5))),1)])]),e("div",ts,[ss,e("div",os,[e("span",null,"- "+L(Math.abs(z.value)),1)])])])]),e("div",as,[e("div",ls,[n(we,te(Me(re)),null,16)])])])])]),_:1}),n(ke,{open:M.value,size:"sm",onClose:R},{header:r(()=>[e("div",ns,[e("div",cs,[rs,n(ye,{onClick:R})]),n(be,{label:"Passcode",modelValue:u(B),"onUpdate:modelValue":t[4]||(t[4]=m=>Re(B)?B.value=m:B=m),type:"password",class:"",icon:"uil:padlock",shape:"curved",classes:{wrapper:"w-full",input:"!h-12 !ps-12",icon:"!h-12 !w-12"}},null,8,["modelValue"])])]),footer:r(()=>[e("div",ds,[e("div",us,[n(a,{color:"primary",flavor:"solid",onClick:t[5]||(t[5]=j(m=>xe(),["prevent"])),loading:A.value},{default:r(()=>[Ve(" Export Keys ")]),_:1},8,["loading"])])])]),default:r(()=>[is]),_:1},8,["open"])])])}}});export{js as default};
