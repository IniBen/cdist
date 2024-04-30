import{_ as k}from"./_plugin-vue_export-helper.c27b6911.js";import{o as s,a,i as n,d as C,u as B,c as z,r as N,B as j,J as I,an as M,e as t,m as A,H as R,l as i,b as v,q as S,j as D,t as x,h as b}from"./entry.45720db6.js";import{u as E}from"./index.d48bba14.js";import{u as L}from"./input-id.94a04492.js";const q={},H={"aria-hidden":"true",viewBox:"0 0 17 12"},J=n("path",{fill:"currentColor",d:"M16.576.414a1.386 1.386 0 0 1 0 1.996l-9.404 9.176A1.461 1.461 0 0 1 6.149 12c-.37 0-.74-.139-1.023-.414L.424 6.998a1.386 1.386 0 0 1 0-1.996 1.47 1.47 0 0 1 2.046 0l3.68 3.59L14.53.414a1.47 1.47 0 0 1 2.046 0z"},null,-1),P=[J];function T(d,c){return s(),a("svg",H,P)}const U=k(q,[["render",T]]),F={},G={"aria-hidden":"true",viewBox:"0 0 24 24"},K=n("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4",d:"M2 12h20"},null,-1),O=[K];function Q(d,c){return s(),a("svg",G,O)}const W=k(F,[["render",Q]]),X=["id","true-value","false-value"],Y={class:"inline-flex flex-col"},Z=["for"],ee={key:1,class:"text-danger-600 ms-1 inline-block font-sans text-xs"},te={inheritAttrs:!1},ae=C({...te,__name:"BaseCheckbox",props:{label:{default:void 0},trueValue:{default:!0},falseValue:{default:!1},modelValue:{},id:{default:void 0},error:{default:""},disabled:{type:Boolean},indeterminate:{type:Boolean},shape:{default:void 0},color:{default:void 0},classes:{default:()=>({})}},emits:["update:modelValue"],setup(d,{expose:c,emit:y}){const e=d,g=B(),r=z(()=>{var o;return e.shape??((o=g.nui.defaultShapes)==null?void 0:o.input)}),l=N(),u=E(e,"modelValue",y);j(()=>{l.value&&(l.value.indeterminate=e.indeterminate??!1)}),c({el:l});const p=L(()=>e.id);return(o,f)=>{var m,_,h;const w=U,V=W;return s(),a("div",{class:i(["relative inline-flex items-start gap-1",[e.disabled&&"opacity-50",e.color==="primary"&&"text-primary-500",e.color==="info"&&"text-info-500",e.color==="success"&&"text-success-500",e.color==="warning"&&"text-warning-500",e.color==="danger"&&"text-danger-500",e.color==="light"&&"text-muted-100",e.color==="muted"&&"text-muted-400",(m=e.classes)==null?void 0:m.wrapper]])},[n("div",{class:i(["nui-focus group/nui-checkbox relative flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center overflow-hidden",[t(r)==="rounded"&&"rounded",t(r)==="curved"&&"rounded-md",t(r)==="full"&&"rounded-full"]])},[I(n("input",A({id:t(p),ref_key:"inputRef",ref:l,"onUpdate:modelValue":f[0]||(f[0]=$=>R(u)?u.value=$:null),"true-value":e.trueValue,"false-value":e.falseValue,class:(_=e.classes)==null?void 0:_.input},o.$attrs,{class:"peer absolute z-20 h-5 w-5 cursor-pointer opacity-0",type:"checkbox"}),null,16,X),[[M,t(u)]]),n("div",{class:i(["border-muted-400 dark:border-muted-700 dark:bg-muted-700 absolute start-0 top-0 z-0 h-full w-full border-2 bg-white peer-checked:border-current peer-indeterminate:border-current peer-checked:dark:border-current peer-indeterminate:dark:border-current",[t(r)==="rounded"&&"rounded",t(r)==="curved"&&"rounded-md",t(r)==="full"&&"rounded-full"]])},null,2),v(w,{class:"pointer-events-none absolute z-10 h-2.5 w-2.5 translate-y-6 fill-current opacity-0 transition duration-300 peer-checked:translate-y-0 peer-checked:opacity-100 peer-indeterminate:!translate-y-6"}),v(V,{class:"pointer-events-none absolute z-10 h-2.5 w-2.5 translate-y-6 fill-current opacity-0 transition duration-300 peer-indeterminate:translate-y-0 peer-indeterminate:opacity-100"})],2),n("div",Y,[e.label||"default"in o.$slots?(s(),a("label",{key:0,for:t(p),class:i(["text-muted-400 ms-1 cursor-pointer select-none font-sans text-sm",(h=e.classes)==null?void 0:h.label])},[S(o.$slots,"default",{},()=>[D(x(e.label),1)])],10,Z)):b("",!0),e.error?(s(),a("div",ee,x(e.error),1)):b("",!0)])],2)}}});export{ae as _};
