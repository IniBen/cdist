import ie from"./Icon.145c4119.js";import{_ as se}from"./nuxt-link.999b95ef.js";import{u as ue}from"./panels.77501639.js";import{_ as re}from"./3.e05f02bf.js";import{a as de,_ as ce}from"./18.9016844a.js";import{u as A,y as ve,c as pe,l as K,o as P,K as me,H as q,T as $,t as Q,N as H,p as fe,O as be,a as D}from"./use-outside-click.f566db00.js";import{x as xe,a as C,p as he,u as ge}from"./use-tracked-pointer.667d5055.js";import{f as _e,a as ye,n as we,S as Oe}from"./transition.29703387.js";import{r as I,c as h,d as L,v as x,x as Se,y as W,z as J,A as Y,F as ee,B as X,C as ke,D as te,E as Re,o as U,a as G,i as l,e as B,b as R,w as j,h as Ie,G as Ce,f as Pe,t as Z,H as Ve}from"./entry.45720db6.js";import"./_plugin-vue_export-helper.c27b6911.js";function ae(e={},c=null,u=[]){for(let[y,a]of Object.entries(e))oe(u,le(c,y),a);return u}function le(e,c){return e?e+"["+c+"]":c}function oe(e,c,u){if(Array.isArray(u))for(let[y,a]of u.entries())oe(e,le(c,y.toString()),a);else u instanceof Date?e.push([c,u.toISOString()]):typeof u=="boolean"?e.push([c,u?"1":"0"]):typeof u=="string"?e.push([c,u]):typeof u=="number"?e.push([c,`${u}`]):u==null?e.push([c,""]):ae(u,c,e)}function Te(e,c,u){let y=I(u==null?void 0:u.value),a=h(()=>e.value!==void 0);return[h(()=>a.value?e.value:y.value),function(t){return a.value||(y.value=t),c==null?void 0:c(t)}]}function De(e,c){return e===c}var Be=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Be||{}),je=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(je||{}),Ee=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ee||{});let ne=Symbol("ComboboxContext");function z(e){let c=Re(ne,null);if(c===null){let u=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,z),u}return c}let Ae=L({name:"Combobox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>De},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},nullable:{type:Boolean,default:!1},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:c,attrs:u,emit:y}){let a=I(1),t=I(null),m=I(null),_=I(null),b=I(null),O=I({static:!1,hold:!1}),r=I([]),S=I(null),V=I(1),T=I(!1);function N(n=p=>p){let p=S.value!==null?r.value[S.value]:null,f=be(n(r.value.slice()),g=>P(g.dataRef.domRef)),s=p?f.indexOf(p):null;return s===-1&&(s=null),{options:f,activeOptionIndex:s}}let o=h(()=>e.multiple?1:0),i=h(()=>e.nullable),[v,k]=Te(h(()=>e.modelValue===void 0?A(o.value,{[1]:[],[0]:void 0}):e.modelValue),n=>y("update:modelValue",n),h(()=>e.defaultValue)),d={comboboxState:a,value:v,mode:o,compare(n,p){if(typeof e.by=="string"){let f=e.by;return(n==null?void 0:n[f])===(p==null?void 0:p[f])}return e.by(n,p)},defaultValue:h(()=>e.defaultValue),nullable:i,inputRef:m,labelRef:t,buttonRef:_,optionsRef:b,disabled:h(()=>e.disabled),options:r,change(n){k(n)},activeOptionIndex:h(()=>{if(T.value&&S.value===null&&r.value.length>0){let n=r.value.findIndex(p=>!p.dataRef.disabled);if(n!==-1)return n}return S.value}),activationTrigger:V,optionsPropsRef:O,closeCombobox(){T.value=!1,!e.disabled&&a.value!==1&&(a.value=1,S.value=null)},openCombobox(){if(T.value=!0,e.disabled||a.value===0)return;let n=r.value.findIndex(p=>{let f=x(p.dataRef.value);return A(o.value,{[0]:()=>d.compare(x(d.value.value),x(f)),[1]:()=>x(d.value.value).some(s=>d.compare(x(s),x(f)))})});n!==-1&&(S.value=n),a.value=0},goToOption(n,p,f){if(T.value=!1,e.disabled||b.value&&!O.value.static&&a.value===1)return;let s=N();if(s.activeOptionIndex===null){let w=s.options.findIndex(M=>!M.dataRef.disabled);w!==-1&&(s.activeOptionIndex=w)}let g=xe(n===C.Specific?{focus:C.Specific,id:p}:{focus:n},{resolveItems:()=>s.options,resolveActiveIndex:()=>s.activeOptionIndex,resolveId:w=>w.id,resolveDisabled:w=>w.dataRef.disabled});S.value=g,V.value=f??1,r.value=s.options},selectOption(n){let p=r.value.find(s=>s.id===n);if(!p)return;let{dataRef:f}=p;k(A(o.value,{[0]:()=>f.value,[1]:()=>{let s=x(d.value.value).slice(),g=x(f.value),w=s.findIndex(M=>d.compare(g,x(M)));return w===-1?s.push(g):s.splice(w,1),s}}))},selectActiveOption(){if(d.activeOptionIndex.value===null)return;let{dataRef:n,id:p}=r.value[d.activeOptionIndex.value];k(A(o.value,{[0]:()=>n.value,[1]:()=>{let f=x(d.value.value).slice(),s=x(n.value),g=f.findIndex(w=>d.compare(s,x(w)));return g===-1?f.push(s):f.splice(g,1),f}})),d.goToOption(C.Specific,p)},registerOption(n,p){let f={id:n,dataRef:p},s=N(g=>[...g,f]);if(S.value===null){let g=p.value.value;A(o.value,{[0]:()=>d.compare(x(d.value.value),x(g)),[1]:()=>x(d.value.value).some(w=>d.compare(x(w),x(g)))})&&(s.activeOptionIndex=s.options.indexOf(f))}r.value=s.options,S.value=s.activeOptionIndex,V.value=1},unregisterOption(n){var p;d.activeOptionIndex.value!==null&&((p=d.options.value[d.activeOptionIndex.value])==null?void 0:p.id)===n&&(T.value=!0);let f=N(s=>{let g=s.findIndex(w=>w.id===n);return g!==-1&&s.splice(g,1),s});r.value=f.options,S.value=f.activeOptionIndex,V.value=1}};ve([m,_,b],()=>d.closeCombobox(),h(()=>a.value===0)),Se(ne,d),pe(h(()=>A(a.value,{[0]:K.Open,[1]:K.Closed})));let F=h(()=>d.activeOptionIndex.value===null?null:r.value[d.activeOptionIndex.value].dataRef.value),E=h(()=>{var n;return(n=P(m))==null?void 0:n.closest("form")});return W(()=>{J([E],()=>{if(!E.value||e.defaultValue===void 0)return;function n(){d.change(e.defaultValue)}return E.value.addEventListener("reset",n),()=>{var p;(p=E.value)==null||p.removeEventListener("reset",n)}},{immediate:!0})}),()=>{let{name:n,disabled:p,form:f,...s}=e,g={open:a.value===0,disabled:p,activeIndex:d.activeOptionIndex.value,activeOption:F.value,value:v.value};return Y(ee,[...n!=null&&v.value!=null?ae({[n]:v.value}).map(([w,M])=>Y(_e,me({features:ye.Hidden,key:w,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:f,name:w,value:M}))):[],q({theirProps:{...u,...$(s,["modelValue","defaultValue","nullable","multiple","onUpdate:modelValue","by"])},ourProps:{},slot:g,slots:c,attrs:u,name:"Combobox"})])}}}),Ne=L({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function},defaultValue:{type:String,default:void 0},id:{type:String,default:()=>`headlessui-combobox-input-${Q()}`}},emits:{change:e=>!0},setup(e,{emit:c,attrs:u,slots:y,expose:a}){let t=z("ComboboxInput"),m={value:!1};a({el:t.inputRef,$el:t.inputRef});let _=h(()=>{var o;let i=t.value.value;return P(t.inputRef)?typeof e.displayValue<"u"&&i!==void 0?(o=e.displayValue(i))!=null?o:"":typeof i=="string"?i:"":""});W(()=>{J([_,t.comboboxState],([o,i],[v,k])=>{if(m.value)return;let d=P(t.inputRef);d&&(k===0&&i===1||o!==v)&&(d.value=o)},{immediate:!0}),J([t.comboboxState],([o],[i])=>{if(o===0&&i===1){let v=P(t.inputRef);if(!v)return;let k=v.value,{selectionStart:d,selectionEnd:F,selectionDirection:E}=v;v.value="",v.value=k,E!==null?v.setSelectionRange(d,F,E):v.setSelectionRange(d,F)}})});let b=I(!1);function O(){b.value=!0}function r(){setTimeout(()=>{b.value=!1})}function S(o){switch(m.value=!0,o.key){case D.Backspace:case D.Delete:if(t.mode.value!==0||!t.nullable.value)return;let i=o.currentTarget;requestAnimationFrame(()=>{if(i.value===""){t.change(null);let v=P(t.optionsRef);v&&(v.scrollTop=0),t.goToOption(C.Nothing)}});break;case D.Enter:if(m.value=!1,t.comboboxState.value!==0||b.value)return;if(o.preventDefault(),o.stopPropagation(),t.activeOptionIndex.value===null){t.closeCombobox();return}t.selectActiveOption(),t.mode.value===0&&t.closeCombobox();break;case D.ArrowDown:return m.value=!1,o.preventDefault(),o.stopPropagation(),A(t.comboboxState.value,{[0]:()=>t.goToOption(C.Next),[1]:()=>t.openCombobox()});case D.ArrowUp:return m.value=!1,o.preventDefault(),o.stopPropagation(),A(t.comboboxState.value,{[0]:()=>t.goToOption(C.Previous),[1]:()=>{t.openCombobox(),te(()=>{t.value.value||t.goToOption(C.Last)})}});case D.Home:if(o.shiftKey)break;return m.value=!1,o.preventDefault(),o.stopPropagation(),t.goToOption(C.First);case D.PageUp:return m.value=!1,o.preventDefault(),o.stopPropagation(),t.goToOption(C.First);case D.End:if(o.shiftKey)break;return m.value=!1,o.preventDefault(),o.stopPropagation(),t.goToOption(C.Last);case D.PageDown:return m.value=!1,o.preventDefault(),o.stopPropagation(),t.goToOption(C.Last);case D.Escape:if(m.value=!1,t.comboboxState.value!==0)return;o.preventDefault(),t.optionsRef.value&&!t.optionsPropsRef.value.static&&o.stopPropagation(),t.closeCombobox();break;case D.Tab:if(m.value=!1,t.comboboxState.value!==0)return;t.mode.value===0&&t.selectActiveOption(),t.closeCombobox();break}}function V(o){t.openCombobox(),c("change",o)}function T(){m.value=!1}let N=h(()=>{var o,i,v,k;return(k=(v=(i=e.defaultValue)!=null?i:t.defaultValue.value!==void 0?(o=e.displayValue)==null?void 0:o.call(e,t.defaultValue.value):null)!=null?v:t.defaultValue.value)!=null?k:""});return()=>{var o,i,v,k,d,F;let E={open:t.comboboxState.value===0},{id:n,displayValue:p,onChange:f,...s}=e,g={"aria-controls":(o=t.optionsRef.value)==null?void 0:o.id,"aria-expanded":t.disabled.value?void 0:t.comboboxState.value===0,"aria-activedescendant":t.activeOptionIndex.value===null||(i=t.options.value[t.activeOptionIndex.value])==null?void 0:i.id,"aria-labelledby":(d=(v=P(t.labelRef))==null?void 0:v.id)!=null?d:(k=P(t.buttonRef))==null?void 0:k.id,"aria-autocomplete":"list",id:n,onCompositionstart:O,onCompositionend:r,onKeydown:S,onInput:V,onBlur:T,role:"combobox",type:(F=u.type)!=null?F:"text",tabIndex:0,ref:t.inputRef,defaultValue:N.value,disabled:t.disabled.value===!0?!0:void 0};return q({ourProps:g,theirProps:s,slot:E,attrs:u,slots:y,features:H.RenderStrategy|H.Static,name:"ComboboxInput"})}}}),Fe=L({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(e,{attrs:c,slots:u,expose:y}){let a=z("ComboboxOptions"),t=`headlessui-combobox-options-${Q()}`;y({el:a.optionsRef,$el:a.optionsRef}),X(()=>{a.optionsPropsRef.value.static=e.static}),X(()=>{a.optionsPropsRef.value.hold=e.hold});let m=fe(),_=h(()=>m!==null?(m.value&K.Open)===K.Open:a.comboboxState.value===0);return he({container:h(()=>P(a.optionsRef)),enabled:h(()=>a.comboboxState.value===0),accept(b){return b.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:b.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(b){b.setAttribute("role","none")}}),()=>{var b,O,r;let S={open:a.comboboxState.value===0},V={"aria-labelledby":(r=(b=P(a.labelRef))==null?void 0:b.id)!=null?r:(O=P(a.buttonRef))==null?void 0:O.id,id:t,ref:a.optionsRef,role:"listbox","aria-multiselectable":a.mode.value===1?!0:void 0},T=$(e,["hold"]);return q({ourProps:V,theirProps:T,slot:S,attrs:c,slots:u,features:H.RenderStrategy|H.Static,visible:_.value,name:"ComboboxOptions"})}}}),Me=L({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(e,{slots:c,attrs:u,expose:y}){let a=z("ComboboxOption"),t=`headlessui-combobox-option-${Q()}`,m=I(null);y({el:m,$el:m});let _=h(()=>a.activeOptionIndex.value!==null?a.options.value[a.activeOptionIndex.value].id===t:!1),b=h(()=>A(a.mode.value,{[0]:()=>a.compare(x(a.value.value),x(e.value)),[1]:()=>x(a.value.value).some(i=>a.compare(x(i),x(e.value)))})),O=h(()=>({disabled:e.disabled,value:e.value,domRef:m}));W(()=>a.registerOption(t,O)),ke(()=>a.unregisterOption(t)),X(()=>{a.comboboxState.value===0&&_.value&&a.activationTrigger.value!==0&&te(()=>{var i,v;return(v=(i=P(m))==null?void 0:i.scrollIntoView)==null?void 0:v.call(i,{block:"nearest"})})});function r(i){if(e.disabled)return i.preventDefault();a.selectOption(t),a.mode.value===0&&a.closeCombobox(),we()||requestAnimationFrame(()=>{var v;return(v=P(a.inputRef))==null?void 0:v.focus()})}function S(){if(e.disabled)return a.goToOption(C.Nothing);a.goToOption(C.Specific,t)}let V=ge();function T(i){V.update(i)}function N(i){V.wasMoved(i)&&(e.disabled||_.value||a.goToOption(C.Specific,t,0))}function o(i){V.wasMoved(i)&&(e.disabled||_.value&&(a.optionsPropsRef.value.hold||a.goToOption(C.Nothing)))}return()=>{let{disabled:i}=e,v={active:_.value,selected:b.value,disabled:i},k={id:t,ref:m,role:"option",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,"aria-selected":b.value,disabled:void 0,onClick:r,onFocus:S,onPointerenter:T,onMouseenter:T,onPointermove:N,onMousemove:N,onPointerleave:o,onMouseleave:o};return q({ourProps:k,theirProps:e,slot:v,attrs:u,slots:c,name:"ComboboxOption"})}}});const Le={class:"border-muted-200 dark:border-muted-700 dark:bg-muted-800 border bg-white"},Ue={class:"flex h-16 w-full items-center justify-between px-10"},Ke=l("h2",{class:"font-heading text-muted-700 text-lg font-semibold dark:text-white"}," Search ",-1),He={class:"relative h-[calc(100%_-_64px)] w-full px-10"},qe={class:"group relative"},ze={class:"text-muted-400 group-focus-within:text-primary-500 absolute start-0 top-0 flex h-12 w-12 items-center justify-center transition-colors duration-300"},Ge={key:0,class:"text-muted-700 relative cursor-default select-none px-4 py-2"},Je={class:"hover:bg-muted-100 dark:hover:bg-muted-700 flex cursor-pointer items-center rounded-lg p-2 transition-colors duration-300"},Xe={class:"relative inline-flex h-9 w-9 items-center justify-center rounded-full"},Qe=["src"],We={class:"ms-3"},Ye={class:"font-heading text-muted-800 text-sm font-semibold dark:text-white"},Ze={class:"text-muted-400 font-sans text-xs"},$e={class:"py-6"},et=l("h4",{class:"font-alt text-muted-400 mb-4 text-sm font-semibold uppercase"}," People ",-1),tt={class:"space-y-4"},at=l("div",{class:"relative inline-flex h-9 w-9 items-center justify-center rounded-full"},[l("img",{src:re,class:"max-w-full rounded-full object-cover shadow-sm dark:border-transparent",alt:""})],-1),lt=l("div",{class:"ms-3"},[l("h6",{class:"font-heading text-muted-800 text-sm font-semibold dark:text-white"}," Mike Miller "),l("p",{class:"text-muted-400 font-sans text-xs"}," Frontend Developer ")],-1),ot=l("div",{class:"relative inline-flex h-9 w-9 items-center justify-center rounded-full"},[l("img",{src:de,class:"max-w-full rounded-full object-cover shadow-sm dark:border-transparent",alt:""})],-1),nt=l("div",{class:"ms-3"},[l("h6",{class:"font-heading text-muted-800 text-sm font-semibold dark:text-white"}," John Sabierski "),l("p",{class:"text-muted-400 font-sans text-xs"}," Backend Developer ")],-1),it=l("div",{class:"relative inline-flex h-9 w-9 items-center justify-center rounded-full"},[l("img",{src:ce,class:"max-w-full rounded-full object-cover shadow-sm dark:border-transparent",alt:""})],-1),st=l("div",{class:"ms-3"},[l("h6",{class:"font-heading text-muted-800 text-sm font-semibold dark:text-white"}," Ronald Cardine "),l("p",{class:"text-muted-400 font-sans text-xs"}," Frontend Developer ")],-1),ut={class:"py-6"},rt=l("h4",{class:"font-alt text-muted-400 mb-4 text-sm font-semibold uppercase"}," Recent ",-1),dt={class:"space-y-4"},ct={class:"dark:text-muted-50 relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500"},vt=l("div",{class:"ms-3"},[l("h6",{class:"font-heading text-muted-800 text-sm font-semibold dark:text-white"}," Browser Support "),l("p",{class:"text-muted-400 font-sans text-xs"},"Blog article")],-1),pt={class:"bg-warning-100 text-warning-600 dark:bg-warning-500 dark:text-muted-50 relative inline-flex h-10 w-10 items-center justify-center rounded-full"},mt=l("div",{class:"ms-3"},[l("h6",{class:"font-heading text-muted-800 text-sm font-semibold dark:text-white"}," Twitch new API "),l("p",{class:"text-muted-400 font-sans text-xs"},"Blog article")],-1),ft={class:"bg-primary-100 text-primary-600 dark:bg-primary-500 dark:text-muted-50 relative inline-flex h-10 w-10 items-center justify-center rounded-full"},bt=l("div",{class:"ms-3"},[l("h6",{class:"font-heading text-muted-800 text-sm font-semibold dark:text-white"}," Social integrations "),l("p",{class:"text-muted-400 font-sans text-xs"},"Blog article")],-1),It=L({__name:"DemoPanelSearch",setup(e){const{close:c}=ue(),u=[{id:1,name:"Clarissa Perez",role:"Sales Manager",avatar:"/img/avatars/19.svg"},{id:2,name:"Aaaron Splatter",role:"Project Manager",avatar:"/img/avatars/16.svg"},{id:3,name:"Mike Miller",role:"UI/UX Designer",avatar:"/img/avatars/3.svg"},{id:4,name:"Benedict Kessler",role:"Mobile Developer",avatar:"/img/avatars/22.svg"},{id:5,name:"Maya Rosselini",role:"Product Manager",avatar:"/img/avatars/2.svg"}],y=I(""),a=I(""),t=h(()=>a.value===""?u:u.filter(m=>m.name.toLowerCase().includes(a.value.toLowerCase())));return(m,_)=>{const b=ie,O=se;return U(),G("div",Le,[l("div",Ue,[Ke,l("button",{type:"button",class:"text-muted-400 hover:bg-muted-100 hover:text-muted-600 dark:hover:bg-muted-700 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 dark:hover:text-white",onClick:_[0]||(_[0]=(...r)=>B(c)&&B(c)(...r))},[R(b,{name:"feather:chevron-left",class:"h-6 w-6"})])]),l("div",He,[R(B(Ae),{modelValue:B(y),"onUpdate:modelValue":_[3]||(_[3]=r=>Ve(y)?y.value=r:null),class:"relative z-10 mt-5",as:"div"},{default:j(()=>[l("div",qe,[R(B(Ne),{class:"border-muted-300 text-muted-600 focus:border-primary-500 focus:shadow-muted-300/50 dark:border-muted-700 dark:bg-muted-800 dark:text-muted-200 dark:placeholder:text-muted-600 dark:focus:border-muted-600 dark:focus:shadow-muted-800/50 h-12 w-full rounded-lg border bg-white py-3 pe-4 ps-10 font-sans text-sm leading-5 !outline-none transition duration-300 focus:shadow-lg","display-value":r=>r.name,placeholder:"Search...",onChange:_[1]||(_[1]=r=>a.value=r.target.value)},null,8,["display-value"]),l("div",ze,[R(b,{name:"feather:search",class:"h-5 w-5"})])]),R(B(Oe),{leave:"transition ease-in duration-100","leave-from":"opacity-100","leave-to":"opacity-0",onAfterLeave:_[2]||(_[2]=r=>a.value="")},{default:j(()=>[R(B(Fe),{as:"div",class:"slimscroll divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute mt-1 max-h-60 w-full divide-y overflow-auto rounded-lg border bg-white py-1 text-base shadow-lg outline-none sm:text-sm"},{default:j(()=>[B(t).length===0&&B(a)!==""?(U(),G("div",Ge," Nothing found. ")):Ie("",!0),(U(!0),G(ee,null,Ce(B(t),r=>(U(),Pe(B(Me),{key:r.id,class:"p-2",as:"div",value:r},{default:j(()=>[l("div",Je,[l("div",Xe,[l("img",{src:r.avatar,class:"max-w-full rounded-full object-cover shadow-sm dark:border-transparent",alt:""},null,8,Qe)]),l("div",We,[l("h6",Ye,Z(r.name),1),l("p",Ze,Z(r.role),1)])])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"]),l("div",$e,[et,l("ul",tt,[l("li",null,[R(O,{to:"#",class:"flex items-center"},{default:j(()=>[at,lt]),_:1})]),l("li",null,[R(O,{to:"#",class:"flex items-center"},{default:j(()=>[ot,nt]),_:1})]),l("li",null,[R(O,{to:"#",class:"flex items-center"},{default:j(()=>[it,st]),_:1})])])]),l("div",ut,[rt,l("ul",dt,[l("li",null,[R(O,{to:"#",class:"flex items-center"},{default:j(()=>[l("div",ct,[R(b,{name:"feather:chrome",class:""})]),vt]),_:1})]),l("li",null,[R(O,{to:"#",class:"flex items-center"},{default:j(()=>[l("div",pt,[R(b,{name:"feather:tv",class:""})]),mt]),_:1})]),l("li",null,[R(O,{to:"#",class:"flex items-center"},{default:j(()=>[l("div",ft,[R(b,{name:"feather:twitter",class:""})]),bt]),_:1})])])])])])}}});export{It as default};
