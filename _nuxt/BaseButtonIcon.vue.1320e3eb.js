import{u as b,_ as g}from"./buttons.65f63765.js";import{d as v,u as _,c as t,o as r,f as n,w as x,q as y,m as k,e as a,g as w}from"./entry.45720db6.js";const I=v({__name:"BaseButtonIcon",props:{type:{default:void 0},to:{default:void 0},disabled:{type:Boolean},rel:{default:""},target:{default:""},shape:{default:void 0},color:{default:"default"},loading:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1}},setup(s){const e=s,d=_(),u=t(()=>{var o;return e.shape??((o=d.nui.defaultShapes)==null?void 0:o.buttonIcon)}),l=t(()=>{switch(u.value){case"rounded":return"rounded-md";case"curved":return"rounded-xl";case"full":return"rounded-full";case"straight":return""}}),c=t(()=>[e.color==="muted"&&"text-muted-500 bg-muted-200 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 hover:bg-muted-100",e.color==="primary"&&"text-primary-500 border-2 border-primary-500 hover:bg-primary-500/20",e.color==="default"&&"text-muted-700 bg-white border border-muted-300 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 dark:border-muted-600 hover:bg-muted-50"].join(" ")),i=t(()=>e.condensed?"h-8 w-8 p-1":"h-10 w-10 p-2"),p=t(()=>["disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none",e.loading?"!text-transparent":"",c.value,l.value,i.value]),{attributes:m,is:f}=b(e);return(o,B)=>{const h=g;return r(),n(w(a(f)),k(a(m),{class:[a(p),"nui-focus relative inline-flex items-center justify-center space-x-1 font-sans text-sm font-normal leading-5 no-underline outline-none transition-all duration-300"]}),{default:x(()=>[e.loading?(r(),n(h,{key:1,class:"h-4 w-4 rounded-md"})):y(o.$slots,"default",{key:0})]),_:3},16,["class"])}}});export{I as _};
