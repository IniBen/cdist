import{_}from"./_plugin-vue_export-helper.c27b6911.js";import{o as r,a as l,i as t,p as h,d as x,c as v,A as b,ap as k,e as a,x as y,b as u,l as n}from"./entry.3ca38a09.js";const g={},w={"aria-hidden":"true",viewBox:"0 0 24 24"},M=t("g",{fill:"currentColor",stroke:"currentColor",class:"stroke-2"},[t("circle",{cx:"12",cy:"12",r:"5"}),t("path",{d:"M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})],-1),B=[M];function C(s,e){return r(),l("svg",w,B)}const T=_(g,[["render",C]]),$={},z={"aria-hidden":"true",viewBox:"0 0 24 24"},E=t("path",{fill:"currentColor",stroke:"currentColor",d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",class:"stroke-2"},null,-1),V=[E];function A(s,e){return r(),l("svg",z,V)}const D=_($,[["render",A]]),I=()=>h("color-mode").value,S=x({__name:"BaseThemeToggle",props:{inverted:{type:Boolean,default:!1},disableTransitions:{type:Boolean,default:!1}},setup(s){const e=s,c=I(),o=v({get(){return c.value==="dark"},set(i){e.disableTransitions&&document.documentElement.classList.add("nui-no-transition"),c.preference=i?"dark":"light",e.disableTransitions&&setTimeout(()=>{document.documentElement.classList.remove("nui-no-transition")},0)}});return(i,d)=>{const p=T,m=D;return r(),l("label",{class:n(["nui-focus relative block h-9 w-9 shrink-0 overflow-hidden rounded-full transition-all duration-300 focus-visible:outline-2",e.inverted?"ring-offset-muted-500 dark:ring-offset-muted-400":"dark:ring-offset-muted-900"])},[b(t("input",{"onUpdate:modelValue":d[0]||(d[0]=f=>y(o)?o.value=f:null),type:"checkbox",class:"absolute start-0 top-0 z-[2] h-full w-full cursor-pointer opacity-0"},null,512),[[k,a(o)]]),t("span",{class:n(["relative block h-9 w-9 rounded-full",e.inverted?"bg-primary-700 ":"bg-white dark:bg-muted-800  border border-muted-300 dark:border-muted-700"])},[u(p,{class:n(["pointer-events-none absolute start-1/2 top-1/2 block h-5 w-5 text-yellow-400 transition-all duration-300",[a(o)?"translate-x-[-50%] translate-y-[-150%] opacity-0 rtl:translate-x-[50%]":"-translate-y-1/2 translate-x-[-50%] opacity-100 rtl:translate-x-[50%]"]])},null,8,["class"]),u(m,{class:n(["pointer-events-none absolute start-1/2 top-1/2 block h-5 w-5 text-yellow-400 transition-all duration-300",[a(o)?"-translate-y-1/2 translate-x-[-45%] opacity-100 rtl:translate-x-[45%]":"translate-x-[-45%] translate-y-[-150%] opacity-0 rtl:translate-x-[45%]"]])},null,8,["class"])],2)],2)}}});export{S as _};
