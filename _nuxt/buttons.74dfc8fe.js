import{d as f}from"./nuxt-link.c9e0679d.js";import{c as n}from"./entry.3ca38a09.js";const h=(t,{externalDefaultRelationship:a="noopener noreferrer",externalDefaultTarget:o="_blank"}={})=>{const r=f({}),u=n(()=>t.to?r:"button"),l=n(()=>{if(u.value==="button")return t.type||"button"}),e=n(()=>typeof t.to=="string"&&t.to.startsWith("http")?!0:!!(typeof t.to=="object"&&"path"in t.to&&t.to.path.startsWith("http"))),s=n(()=>{if(e.value)return t.rel??a}),i=n(()=>{if(e.value)return t.target??o});return{attributes:n(()=>({to:t.disabled?void 0:t.to,disabled:t.disabled,type:l.value,rel:s.value,target:i.value})),is:u}};export{h as u};
