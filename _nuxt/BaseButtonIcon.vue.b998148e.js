import{_ as b}from"./BasePlaceload.36e028a3.js";import{d as g,u as v,c as t,o as r,f as n,w as _,q as x,m as y,e as a,g as k}from"./entry.3ca38a09.js";import{u as w}from"./buttons.74dfc8fe.js";const P=g({__name:"BaseButtonIcon",props:{type:{default:void 0},to:{default:void 0},disabled:{type:Boolean},rel:{default:""},target:{default:""},shape:{default:void 0},color:{default:"default"},loading:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1}},setup(s){const e=s,d=v(),u=t(()=>{var o;return e.shape??((o=d.nui.defaultShapes)==null?void 0:o.buttonIcon)}),l=t(()=>{switch(u.value){case"rounded":return"rounded-md";case"curved":return"rounded-xl";case"full":return"rounded-full";case"straight":return""}}),i=t(()=>[e.color==="muted"&&"text-muted-500 bg-muted-200 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 hover:bg-muted-100",e.color==="primary"&&"text-primary-500 border-2 border-primary-500 hover:bg-primary-500/20",e.color==="default"&&"text-muted-700 bg-white border border-muted-300 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 dark:border-muted-600 hover:bg-muted-50"].join(" ")),c=t(()=>e.condensed?"h-8 w-8 p-1":"h-10 w-10 p-2"),p=t(()=>["disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none",e.loading?"!text-transparent":"",i.value,l.value,c.value]),{attributes:m,is:f}=w(e);return(o,B)=>{const h=b;return r(),n(k(a(f)),y(a(m),{class:[a(p),"nui-focus relative inline-flex items-center justify-center space-x-1 font-sans text-sm font-normal leading-5 no-underline outline-none transition-all duration-300"]}),{default:_(()=>[e.loading?(r(),n(h,{key:1,class:"h-4 w-4 rounded-md"})):x(o.$slots,"default",{key:0})]),_:3},16,["class"])}}});export{P as _};
