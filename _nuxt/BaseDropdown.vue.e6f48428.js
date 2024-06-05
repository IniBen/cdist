import{u as B}from"./buttons.4e3c9cb5.js";import{d as k,o,f as v,w as r,g as C,e as s,m as j,q as l,i as a,j as y,t as p,a as m,h as w,u as N,c as P,b as n,n as g,W as b,l as c,T as S}from"./entry.8b56785a.js";import{M as z,S as D,b as V,g as L}from"./menu.aa213390.js";import T from"./Icon.863bc465.js";import{_ as I}from"./BaseButton.8c2a11c7.js";const M={class:"grow"},q={class:"font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white"},A={key:0,class:"text-muted-400 font-sans text-xs"},tt=k({__name:"BaseDropdownItem",props:{type:{},to:{},disabled:{type:Boolean},rel:{},target:{},title:{},text:{}},setup(f){const t=f,{is:_,attributes:d}=B(t);return(e,$)=>(o(),v(s(z),{as:"div"},{default:r(({active:u,close:h})=>[(o(),v(C(s(_)),j(s(d),{class:["group/nui-dropdown-item flex w-full items-center justify-start rounded-md px-3 py-2 text-left text-sm transition-colors duration-300",[u?"bg-muted-100 dark:bg-muted-700 text-primary-500":"text-muted-500"]],onClickPassive:h}),{default:r(()=>[l(e.$slots,"start"),a("div",M,[a("div",q,[l(e.$slots,"default",{},()=>[y(p(t.title),1)])]),"text"in e.$slots||t.text?(o(),m("p",A,[l(e.$slots,"text",{},()=>[y(p(t.text),1)])])):w("",!0)]),l(e.$slots,"end")]),_:2},1040,["class","onClickPassive"]))]),_:3}))}}),E={class:"group/nui-dropdown inline-flex items-center justify-center text-right"},R={key:1,type:"button",class:"group-hover/nui-dropdown:ring-muted-200 dark:group-hover/nui-dropdown:ring-muted-700/70 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover/nui-dropdown:ring-offset-4"},W={class:"border-muted-200 dark:border-muted-700 dark:bg-muted-800 flex h-9 w-9 items-center justify-center rounded-full border bg-white"},F={key:2,type:"button",class:"flex items-center space-x-1"},G={class:"text-muted-400 font-sans"},H={key:0,class:"px-4 pt-5"},J={class:"relative flex items-center justify-between"},K={class:"font-heading text-muted-500 dark:text-muted-200 text-xs uppercase"},O={class:"p-2"},et=k({__name:"BaseDropdown",props:{flavor:{default:"button"},shape:{default:void 0},orientation:{default:"start"},label:{default:""},headerLabel:{default:void 0},condensed:{type:Boolean,default:!1}},setup(f){const t=f,_=N(),d=P(()=>{var e;return t.shape??((e=_.nui.defaultShapes)==null?void 0:e.dropdown)});return(e,$)=>{const u=T,h=I;return o(),m("div",E,[n(s(L),{as:"div",class:c(["relative text-left",t.flavor==="context"&&"w-9 h-9"])},{default:r(({open:i,close:x})=>[n(s(D),{as:"template"},{default:r(()=>[a("div",null,[t.flavor==="button"?(o(),v(h,{key:0,color:"default",shape:s(d),class:"!pe-3 !ps-4"},{default:r(()=>[l(e.$slots,"label",g(b({open:i,close:x})),()=>[a("span",null,p(t.label),1)]),n(u,{name:"lucide:chevron-down",class:c(["text-muted-400 h-4 w-4 transition-transform duration-300",i&&"rotate-180"])},null,8,["class"])]),_:2},1032,["shape"])):t.flavor==="context"?(o(),m("button",R,[a("span",W,[n(u,{name:"lucide:more-horizontal",class:c(["text-muted-400 h-5 w-5 transition-transform duration-300",i&&"rotate-90"])},null,8,["class"])])])):t.flavor==="text"?(o(),m("button",F,[l(e.$slots,"label",g(b({open:i,close:x})),()=>[a("span",G,p(t.label),1)]),n(u,{name:"lucide:chevron-down",class:c(["text-muted-400 h-4 w-4 transition-transform duration-300",i&&"rotate-180"])},null,8,["class"])])):w("",!0)])]),_:2},1024),n(S,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:r(()=>[n(s(V),{class:c(["border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute z-10 mt-2 border bg-white shadow-lg focus:outline-none",[t.orientation==="start"?"start-0 origin-top-left":"end-0 origin-top-right",s(d)==="rounded"&&"rounded-md",s(d)==="curved"&&"rounded-xl",s(d)==="full"&&"rounded-full",t.condensed?"w-56":"w-72"]])},{default:r(()=>[t.headerLabel?(o(),m("div",H,[a("div",J,[a("h4",K,p(t.headerLabel),1)])])):w("",!0),a("div",O,[l(e.$slots,"default",g(b({open:i,close:x})))])]),_:2},1032,["class"])]),_:2},1024)]),_:3},8,["class"])])}}});export{tt as _,et as a};
