import{_ as P}from"./buttons.65f63765.js";import T from"./Icon.145c4119.js";import{d as q,u as z,c as A,r as E,o as a,a as r,l,e as t,q as d,j as B,t as m,h as n,i as F,J as H,W as J,m as U,H as W,b as N}from"./entry.45720db6.js";import{u as G}from"./index.d48bba14.js";import{u as K}from"./input-id.94a04492.js";const L=["for"],O={class:"group/nui-input relative"},Q=["id","type","placeholder"],X=["for"],Y={inheritAttrs:!1},le=q({...Y,__name:"BaseInput",props:{modelValue:{},modelModifiers:{default:()=>({})},id:{default:void 0},type:{default:"text"},shape:{default:void 0},label:{default:void 0},labelFloat:{type:Boolean},placeholder:{default:void 0},icon:{default:void 0},colorFocus:{type:Boolean},loading:{type:Boolean},error:{type:[String,Boolean],default:!1},condensed:{type:Boolean},classes:{default:()=>({})}},emits:["update:modelValue"],setup($,{expose:C,emit:i}){const e=$,M=z(),c=A(()=>{var s;return e.shape??((s=M.nui.defaultShapes)==null?void 0:s.input)});function S(s){const o=Number.parseFloat(s);return Number.isNaN(o)?s:o}const p=G(e,"modelValue",(s,o)=>{e.modelModifiers.number?i("update:modelValue",S(o)):e.modelModifiers.trim?i("update:modelValue",typeof o=="string"?o.trim():o):i("update:modelValue",o)}),f=E();C({el:f});const u=K(()=>e.id),j=A(()=>{if(!e.loading)return e.labelFloat?e.label:e.placeholder});return(s,o)=>{var b,h,x,y,v,w,g,_,k,V;const D=P,I=T;return a(),r("div",{class:l(["relative",(b=e.classes)==null?void 0:b.wrapper])},["label"in s.$slots&&!e.labelFloat||e.label&&!e.labelFloat?(a(),r("label",{key:0,class:l(["nui-label w-full",[e.condensed&&"pb-1 text-xs",!e.condensed&&"pb-1 text-[0.825rem]",...(h=e.classes)!=null&&h.label&&Array.isArray(e.classes.label)?e.classes.label:[(x=e.classes)==null?void 0:x.label]]]),for:t(u)},[d(s.$slots,"label",{},()=>[B(m(e.label),1)])],10,L)):n("",!0),F("div",O,[H(F("input",U({id:t(u),ref_key:"inputRef",ref:f,"onUpdate:modelValue":o[0]||(o[0]=R=>W(p)?p.value=R:null),type:e.type},s.$attrs,{class:["nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75",[e.condensed&&"h-8 py-1 text-xs leading-4",e.condensed&&e.icon!==void 0?"pe-3 ps-7":"px-2",!e.condensed&&"h-10 py-2 text-sm leading-5",!e.condensed&&e.icon!==void 0?"pe-4 ps-9":"px-3",t(c)==="rounded"&&"rounded",t(c)==="curved"&&"rounded-xl",t(c)==="full"&&"rounded-full",e.colorFocus&&"focus:border-primary-500",e.loading&&"text-transparent placeholder:text-transparent dark:placeholder:text-transparent",e.labelFloat&&"placeholder:text-transparent dark:placeholder:text-transparent",e.error&&!e.loading&&"!border-danger-500 dark:!border-danger-500",...(y=e.classes)!=null&&y.input&&Array.isArray(e.classes.input)?e.classes.input:[(v=e.classes)==null?void 0:v.input]]],placeholder:t(j)}),null,16,Q),[[J,t(p)]]),"label"in s.$slots&&e.labelFloat||e.label&&e.labelFloat?(a(),r("label",{key:0,class:l(["nui-label text-primary-500 peer-focus-visible:text-primary-500 dark:peer-focus-visible:text-primary-500 pointer-events-none absolute inline-flex h-5 select-none items-center leading-none transition-all duration-300",[...(w=e.classes)!=null&&w.label&&Array.isArray(e.classes.label)?e.classes.label:[(g=e.classes)==null?void 0:g.label],e.loading?"peer-placeholder-shown:text-transparent":"peer-placeholder-shown:text-muted-300 dark:peer-placeholder-shown:text-muted-600",e.icon!==void 0&&!e.condensed&&"start-10 -ms-10 -mt-8 text-xs peer-placeholder-shown:ms-0 peer-placeholder-shown:mt-0 peer-placeholder-shown:text-[0.825rem] peer-focus-visible:-ms-10 peer-focus-visible:-mt-8 peer-focus-visible:text-xs",e.icon!==void 0&&e.condensed&&"start-8 -ms-8 -mt-7 text-xs peer-placeholder-shown:ms-0 peer-placeholder-shown:mt-0 peer-focus-visible:-ms-8 peer-focus-visible:-mt-7",e.icon===void 0&&!e.condensed&&"start-3 -ms-3  -mt-8 text-xs peer-placeholder-shown:ms-0 peer-placeholder-shown:mt-0 peer-placeholder-shown:text-[0.825rem] peer-focus-visible:-ms-3 peer-focus-visible:-mt-8 peer-focus-visible:text-xs",e.icon===void 0&&e.condensed&&"start-3 -ms-3  -mt-7 text-xs peer-placeholder-shown:ms-0 peer-placeholder-shown:mt-0 peer-focus-visible:-ms-3 peer-focus-visible:-mt-7",e.condensed?"top-1.5":"top-2.5"]]),for:t(u)},[d(s.$slots,"label",{},()=>[B(m(e.label),1)])],10,X)):n("",!0),e.loading?(a(),r("div",{key:1,class:l(["absolute start-0 top-0 flex w-full items-center px-4",[e.condensed&&"h-8",!e.condensed&&"h-10"]])},[N(D,{class:"h-3 w-full max-w-[75%] rounded"})],2)):n("",!0),e.icon?(a(),r("div",{key:2,class:l(["text-muted-400 group-focus-within/nui-input:text-primary-500 absolute start-0 top-0 flex items-center justify-center transition-colors duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-75",[e.condensed&&"h-8 w-8",!e.condensed&&"h-10 w-10",e.loading&&"opacity-0",e.error&&!e.loading&&"!text-danger-500",...(_=e.classes)!=null&&_.icon&&Array.isArray(e.classes.icon)?e.classes.icon:[(k=e.classes)==null?void 0:k.icon]]])},[d(s.$slots,"icon",{},()=>[N(I,{name:e.icon,class:l([e.condensed&&"h-[1rem] w-[1rem]",!e.condensed&&"h-[1.15rem] w-[1.15rem]"])},null,8,["name","class"])])],2)):n("",!0),d(s.$slots,"action"),e.error&&typeof e.error=="string"?(a(),r("span",{key:3,class:l([(V=e.classes)==null?void 0:V.error,"text-danger-600 mt-1 block font-sans text-[0.65rem] font-medium leading-none"])},m(e.error),3)):n("",!0)])],2)}}});export{le as _};
