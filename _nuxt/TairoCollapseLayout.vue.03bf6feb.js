import E from"./Icon.145c4119.js";import{_ as F}from"./nuxt-link.999b95ef.js";import{d as C,Y as R,c as _,r as T,o as r,a as m,i as d,b as k,l,e,t as B,Q as X,F as N,G as P,w as z,h as w,u as j,q as g,f as h,g as S,j as Y,m as V,n as D,X as I,ay as A,T as W,y as q}from"./entry.45720db6.js";import{r as M}from"./app-config.d38b19ac.js";import{u as L}from"./collapse.74f969f0.js";import{a as G}from"./tailwind.a676bc03.js";import{_ as H}from"./BaseHeading.vue.7e9c60be.js";import{u as Q}from"./panels.77501639.js";import{f as J}from"./index.d48bba14.js";const K={class:"group"},U=["onClick"],Z=C({__name:"TairoCollapseNavigationCollapseLinks",props:{item:{},expanded:{type:Boolean}},emits:["clicked"],setup(b,{emit:o}){const n=b,c=R(),s=_(()=>{var t;return(t=n.item)!=null&&t.activePath?c.path.startsWith(n.item.activePath):!1}),u=T(),p=T(s.value);function f(){var t;p.value=!p.value,p.value||(t=u.value)==null||t.blur(),o("clicked")}return(t,i)=>{const a=E,x=F;return r(),m("div",K,[d("button",{class:l(["nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center rounded-lg py-3 transition-colors duration-300",n.expanded?"gap-4 px-4":"px-2 justify-center"]),ref_key:"buttonRef",ref:u,onClick:X(f,["stop","prevent"])},[k(a,{name:t.item.icon.name,class:l([[t.item.icon.class,e(s)&&"text-primary-500"],"shrink-0"])},null,8,["name","class"]),d("span",{class:l(["block whitespace-nowrap font-sans text-sm",[e(s)&&"text-primary-500",n.expanded?"block":"hidden"]])},B(t.item.name),3),d("span",{class:l(["ms-auto items-center justify-center",n.expanded?"flex":"hidden"])},[k(a,{name:"lucide:chevron-up",class:l(["h-4 w-4 transition-transform duration-200",e(p)?"":"rotate-180"])},null,8,["class"])],2)],10,U),n.expanded?(r(),m("ul",{key:0,class:l(["border-muted-200 relative block ps-4",{"max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100":!e(p),"after:border-muted-200 max-h-max opacity-100":e(p)}])},[(r(!0),m(N,null,P(n.item.children,v=>(r(),m("li",{key:v.to,class:"border-muted-300 dark:border-muted-700 ms-2 border-s-2 first:mt-2"},[k(x,{to:v.to,"exact-active-class":"!border-primary-500 !text-primary-500 dark:!text-primary-500",class:"nui-focus text-muted-500 hover:text-muted-600 dark:text-muted-400/80 dark:hover:text-muted-200 relative -left-0.5 flex cursor-pointer items-center gap-2 border-s-2 border-transparent py-2 ps-4 transition-colors duration-300"},{default:z(()=>[k(a,{name:v.icon.name,class:l([v.icon.class,"shrink-0"])},null,8,["name","class"]),d("span",{class:l(["whitespace-nowrap font-sans text-[0.85rem]",[n.expanded?"block":"hidden"]])},B(v.name),3)]),_:2},1032,["to"])]))),128))],2)):w("",!0)])}}}),ee={id:"sidebar-menu",class:"space-y-2"},te={key:2,class:"border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t"},oe=["onClick"],ae=C({__name:"TairoCollapseNavigation",setup(b){const{isOpen:o,isMobileOpen:n,menuItems:c}=L(),s=j();return(u,p)=>{const f=Z,t=E,i=F;return r(),m("div",{class:l(["dark:bg-muted-800 border-muted-200 dark:border-muted-700 fixed left-0 top-0 z-[60] flex h-full flex-col border-r bg-white transition-all duration-300",[e(o)?"w-[280px]":"w-[80px]",e(n)?"translate-x-0 lg:translate-x-0":"-translate-x-full lg:translate-x-0"]])},[g(u.$slots,"header",{},()=>{var a,x,v,y,O,$;return[(v=(x=(a=e(s).tairo.collapse)==null?void 0:a.navigation)==null?void 0:x.header)!=null&&v.component?(r(),h(S(("resolveComponentOrNative"in u?u.resolveComponentOrNative:e(M))(($=(O=(y=e(s).tairo.collapse)==null?void 0:y.navigation)==null?void 0:O.header)==null?void 0:$.component)),{key:0})):w("",!0)]}),d("div",{class:l(["slimscroll relative w-full grow overflow-y-auto py-6",e(o)?"px-6":"px-4"])},[d("ul",ee,[(r(!0),m(N,null,P(e(c),(a,x)=>(r(),m("li",{key:x},[a.children?(r(),h(f,{key:0,item:a,expanded:e(o),onClicked:p[0]||(p[0]=v=>o.value=!0)},null,8,["item","expanded"])):a.to?(r(),h(i,{key:1,to:a.to,"exact-active-class":"!bg-primary-500/10 dark:!bg-primary-500/20 !text-primary-500 dark:!text-primary-500",class:l(["nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300",e(o)?"px-4":"px-1 justify-center"])},{default:z(()=>[k(t,{name:a.icon.name,class:l(a.icon.class)},null,8,["name","class"]),d("span",{class:l(["whitespace-nowrap font-sans text-sm",e(o)?"block":"hidden"])},B(a.name),3)]),_:2},1032,["to","class"])):a.divider?(r(),m("div",te)):(r(),m("button",{key:3,class:l(["nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300",e(o)?"px-4":"px-1 justify-center"]),onClick:a.click},[k(t,{name:a.icon.name,class:l(a.icon.class)},null,8,["name","class"]),d("span",{class:l(["whitespace-nowrap font-sans text-sm",e(o)?"block":"hidden"])},B(a.name),3)],10,oe))]))),128))])],2),g(u.$slots,"footer",{},()=>{var a,x,v,y,O,$;return[(v=(x=(a=e(s).tairo.collapse)==null?void 0:a.navigation)==null?void 0:x.footer)!=null&&v.component?(r(),h(S(("resolveComponentOrNative"in u?u.resolveComponentOrNative:e(M))(($=(O=(y=e(s).tairo.collapse)==null?void 0:y.navigation)==null?void 0:O.footer)==null?void 0:$.component)),{key:0})):w("",!0)]})],2)}}}),re=C({__name:"TairoCollapseBurger",setup(b){const{isOpen:o,isMobileOpen:n,toggle:c}=L(),{lg:s}=G();return(u,p)=>(r(),m("button",{type:"button",class:"flex h-10 w-10 items-center justify-center",onClick:p[0]||(p[0]=()=>e(c)())},[d("div",{class:l(["relative h-5 w-5",[e(o)&&e(s)?"scale-90":"",e(n)&&!e(s)?"scale-90":""]])},[d("span",{class:l(["bg-primary-500 absolute block h-0.5 w-full transition-all duration-300",[e(o)&&e(s)?"top-1 max-w-[75%] -rotate-45":"top-0.5",e(n)&&!e(s)?"top-1 max-w-[75%] -rotate-45":"top-0.5"]])},null,2),d("span",{class:l(["bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300",[e(o)&&e(s)?"translate-x-4 opacity-0":"",e(n)&&!e(s)?"translate-x-4 opacity-0":""]])},null,2),d("span",{class:l(["bg-primary-500 absolute block h-0.5 w-full transition-all duration-300",[e(o)&&e(s)?"bottom-1 max-w-[75%] rotate-45":"bottom-0",e(n)&&!e(s)?"bottom-1 max-w-[75%] rotate-45":"bottom-0"]])},null,2)],2)]))}}),ne=d("div",{class:"ms-auto"},null,-1),le=C({__name:"TairoCollapseToolbar",props:{collapse:{type:Boolean,default:!0},horizontalScroll:{type:Boolean}},setup(b){const o=b,n=j(),c=R(),s=_(()=>{var u,p;return o.collapse&&((p=(u=n.tairo.collapse)==null?void 0:u.toolbar)==null?void 0:p.showNavBurger)});return(u,p)=>{var i,a,x,v;const f=re,t=H;return r(),m("div",{class:l(["relative z-50 mb-5 flex h-16 items-center gap-2",o.horizontalScroll&&"pe-4 xl:pe-10"])},[e(s)?(r(),h(f,{key:0,class:"-ms-3"})):w("",!0),(a=(i=e(n).tairo.collapse)==null?void 0:i.toolbar)!=null&&a.showTitle?(r(),h(t,{key:1,as:"h1",size:"2xl",weight:"light",class:"text-muted-800 hidden dark:text-white md:block"},{default:z(()=>[g(u.$slots,"title",{},()=>[Y(B(e(c).meta.title),1)])]),_:3})):w("",!0),ne,(r(!0),m(N,null,P((v=(x=e(n).tairo.collapse)==null?void 0:x.toolbar)==null?void 0:v.tools,y=>(r(),m(N,null,[y.component?(r(),h(S(("resolveComponentOrNative"in u?u.resolveComponentOrNative:e(M))(y.component)),V({key:y.component},y.props),null,16)):w("",!0)],64))),256))],2)}}}),se=C({__name:"TairoPanels",setup(b){const{panels:o,current:n,transitionFrom:c,currentProps:s,showOverlay:u,open:p,close:f}=Q();return(t,i)=>(r(),m("div",null,[k(W,{"enter-active-class":"transition-transform duration-300 ease-out","enter-from-class":e(c)==="left"?"-translate-x-full rtl:translate-x-full":"translate-x-full rtl:-translate-x-full","leave-active-class":"transition-transform duration-300 ease-in","leave-to-class":e(c)==="left"?"-translate-x-full rtl:translate-x-full":"translate-x-full rtl:-translate-x-full"},{default:z(()=>[g(t.$slots,"default",D(I({panels:e(o),current:e(n),transitionFrom:e(c),currentProps:e(s),showOverlay:e(u),open:e(p),close:e(f)})),()=>[(r(),h(A,null,{default:z(()=>{var a;return[(a=e(n))!=null&&a.component?(r(),h(S(("resolveComponentOrNative"in t?t.resolveComponentOrNative:e(M))(e(n).component)),V({key:0},e(s),{class:["fixed top-0 z-[100] h-full w-96",[e(n).position==="left"?"start-0":"end-0"]]}),null,16,["class"])):w("",!0)]}),_:1}))])]),_:3},8,["enter-from-class","leave-to-class"]),d("div",{class:l(["bg-muted-800/60 fixed start-0 top-0 z-[99] h-full w-full cursor-pointer transition-opacity duration-300",e(n)&&e(u)?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"]),onClick:i[0]||(i[0]=(...a)=>e(f)&&e(f)(...a))},null,2)]))}});function ie(){const b=T(0),o=T(0);return J(window,"scroll",()=>{b.value=window.scrollX,o.value=window.scrollY},{capture:!1,passive:!0}),q(()=>{b.value=window.scrollX,o.value=window.scrollY}),{x:b,y:o}}const ue=C({__name:"TairoCollapseCircularMenu",setup(b){const{y:o}=ie(),n=j(),c=T(!1),s=_(()=>(o.value<60&&(c.value=!1),o.value>60)),u=["translate-x-[-6.5em] translate-y-[-0.25em]","translate-x-[-5.75em] translate-y-[3em]","translate-x-[-3.15em] translate-y-[5.5em]","translate-x-[0em] translate-y-[6.5em]"],p=_(()=>{var f,t,i;return((i=(t=(f=n.tairo.collapse)==null?void 0:f.circularMenu)==null?void 0:t.tools)==null?void 0:i.slice(0,4))||[]});return(f,t)=>(r(),m("div",{class:l(["after:bg-primary-600 after:shadow-primary-500/50 dark:after:shadow-muted-800/10 fixed right-[1em] top-[0.6em] z-[90] transition-transform duration-300 after:absolute after:right-0 after:top-0 after:block after:h-12 after:w-12 after:rounded-full after:shadow-lg after:transition-transform after:duration-300 after:content-['']",[e(c)?"after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)] after:scale-[5.5]":"",e(s)?"":"-translate-y-24"]])},[d("button",{type:"button",class:"bg-primary-500 shadow-primary-500/50 dark:shadow-muted-800/10 relative z-30 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg",onClick:t[0]||(t[0]=i=>c.value=!e(c))},[d("span",{class:l(["relative block h-3 w-3 transition-all duration-300",e(c)?"scale-90 top-0":"-top-0.5"])},[d("span",{class:l(["bg-muted-50 absolute block h-0.5 w-full transition-all duration-300",e(c)?"-rotate-45 top-1":"top-0.5"])},null,2),d("span",{class:l(["bg-muted-50 absolute top-1/2 block h-0.5 w-full transition-all duration-300",e(c)?"opacity-0 translate-x-4":""])},null,2),d("span",{class:l(["bg-muted-50 absolute block h-0.5 w-full transition-all duration-300",e(c)?"rotate-45 bottom-1.5":"bottom-0"])},null,2)],2)]),d("div",null,[(r(!0),m(N,null,P(e(p),(i,a)=>(r(),m(N,null,[i.component?(r(),m("div",{key:i.component,class:l(["absolute right-[0.2em] top-[0.2em] z-20 flex items-center justify-center transition-all duration-300",e(c)?u[a]:"translate-x-0 translate-y-0"])},[(r(),h(S(("resolveComponentOrNative"in f?f.resolveComponentOrNative:e(M))(i.component)),D(I(i.props)),null,16))],2)):w("",!0)],64))),256))])],2))}}),ce={class:"bg-muted-100 dark:bg-muted-900 pb-20"},we=C({__name:"TairoCollapseLayout",props:{collapse:{type:Boolean,default:!0},toolbar:{type:Boolean,default:!0},circularMenu:{type:Boolean,default:!0},condensed:{type:Boolean},horizontalScroll:{type:Boolean}},setup(b){const o=b,n=j(),{isOpen:c}=L(),s=_(()=>{var t,i;return((i=(t=n.tairo.collapse)==null?void 0:t.navigation)==null?void 0:i.enabled)!==!1&&o.collapse!==!1}),u=_(()=>{var t,i;return((i=(t=n.tairo.collapse)==null?void 0:t.toolbar)==null?void 0:i.enabled)!==!1&&o.toolbar!==!1}),p=_(()=>{var t,i;return((i=(t=n.tairo.collapse)==null?void 0:t.circularMenu)==null?void 0:i.enabled)!==!1&&o.circularMenu!==!1}),f=_(()=>{if(o.condensed)return"bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden";if(!s.value)return"bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10";const t=["bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10"];return c.value?t.push("lg:max-w-[calc(100%_-_280px)] lg:ms-[280px]"):t.push("lg:max-w-[calc(100%_-_80px)] lg:ms-[80px]"),o.horizontalScroll&&t.push("!pe-0 xl:!pe-0"),t});return(t,i)=>{const a=ae,x=le,v=se,y=ue;return r(),m("div",ce,[g(t.$slots,"navigation",{},()=>[e(s)?(r(),h(a,{key:0})):w("",!0)]),d("div",{class:l(e(f))},[d("div",{class:l([o.condensed&&!o.horizontalScroll&&"w-full",!o.condensed&&o.horizontalScroll&&"mx-auto w-full",!o.condensed&&!o.horizontalScroll&&"mx-auto w-full max-w-7xl"])},[g(t.$slots,"toolbar",{},()=>[e(u)?(r(),h(x,{key:0,collapse:o.collapse,"horizontal-scroll":o.horizontalScroll},{title:z(()=>[g(t.$slots,"toolbar-title")]),_:3},8,["collapse","horizontal-scroll"])):w("",!0)]),g(t.$slots,"default")],2)],2),k(v),e(p)?(r(),h(y,{key:0})):w("",!0)])}}});export{we as _};
