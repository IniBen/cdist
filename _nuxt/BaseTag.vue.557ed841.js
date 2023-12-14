import{d as b,u as n,c as s,o as i,a as c,q as u,l as p,e as k}from"./entry.3ca38a09.js";const h=b({__name:"BaseTag",props:{flavor:{default:"solid"},color:{default:"default"},shape:{default:void 0},condensed:{type:Boolean},shadow:{default:void 0}},setup(t){const r=t,d=n(),a=s(()=>{var e;return r.shape??((e=d.nui.defaultShapes)==null?void 0:e.tag)}),o=s(()=>{const e=[];if(r.condensed?e.push("py-1 text-[0.65rem]"):e.push("py-1.5 text-xs"),a.value&&e.push(a.value==="straight"&&"",a.value==="rounded"&&"rounded-md",a.value==="curved"&&"rounded-lg",a.value==="full"&&"rounded-full"),r.shadow)switch(e.push(r.shadow==="flat"&&"shadow-xl",r.shadow==="hover"&&"hover:shadow-xl"),r.color){case"default":{e.push("border-muted-300 text-muted-600 dark:bg-muted-800 dark:border-muted-700 dark:text-muted-300 border bg-white");break}case"muted":{e.push("text-muted-500 bg-muted-200 dark:bg-muted-700 dark:text-white");break}case"primary":{switch(r.flavor){case"solid":{e.push("bg-primary-500 dark:bg-primary-500 text-white");break}case"pastel":{e.push("bg-primary-100 text-primary-500 border-primary-100 dark:border-primary-500 dark:text-primary-500 border dark:bg-transparent");break}case"outline":{e.push(" text-primary-500  border-primary-500 border ");break}}break}case"info":{switch(r.flavor){case"solid":{e.push("bg-info-500 dark:bg-info-500   text-white");break}case"pastel":{e.push("bg-info-100  text-info-500 border-info-100 dark:border-info-500 dark:text-info-500 border dark:bg-transparent");break}case"outline":{e.push("text-info-500  border-info-500 border");break}}break}case"success":{switch(r.flavor){case"solid":{e.push("bg-success-500 dark:bg-success-500  text-white");break}case"pastel":{e.push("bg-success-100  text-success-500 border-success-100 dark:border-success-500 dark:text-success-500 border dark:bg-transparent");break}case"outline":{e.push("text-success-500  border-success-500 border");break}}break}case"warning":{switch(r.flavor){case"solid":{e.push("bg-warning-500 dark:bg-warning-500  text-white");break}case"pastel":{e.push("bg-warning-100  text-warning-500 border-warning-100 dark:border-warning-500 dark:text-warning-500 border dark:bg-transparent");break}case"outline":{e.push("text-warning-500  border-warning-500 border");break}}break}case"danger":{switch(r.flavor){case"solid":{e.push("bg-danger-500 dark:bg-danger-500  text-white");break}case"pastel":{e.push("bg-danger-100  text-danger-500 border-danger-100 dark:border-danger-500 dark:text-danger-500 border dark:bg-transparent");break}case"outline":{e.push("text-danger-500  border-danger-500 border");break}}break}}else switch(r.color){case"default":{e.push("border-muted-300 text-muted-600 dark:bg-muted-800 dark:border-muted-700 dark:text-muted-300 border bg-white");break}case"muted":{switch(r.flavor){case"solid":e.push("text-muted-500 bg-muted-200 dark:bg-muted-700 dark:text-white");case"pastel":e.push("text-muted-500 bg-muted-100 dark:bg-muted-800 dark:text-muted-200")}break}case"primary":{switch(r.flavor){case"solid":{e.push("bg-primary-500 dark:bg-primary-500 text-white");break}case"pastel":{e.push("bg-primary-100 text-primary-500 border-primary-100 dark:border-primary-500 dark:text-primary-500 border dark:bg-transparent");break}case"outline":{e.push("text-primary-500 border-primary-500 border ");break}}break}case"info":{switch(r.flavor){case"solid":{e.push("bg-info-500 dark:bg-info-500 text-white");break}case"pastel":{e.push("bg-info-100 text-info-500 border-info-100 dark:border-info-500 dark:text-info-500 border dark:bg-transparent");break}case"outline":{e.push("text-info-500 border-info-500 border");break}}break}case"success":{switch(r.flavor){case"solid":{e.push("bg-success-500 dark:bg-success-500  text-white");break}case"pastel":{e.push("bg-success-100 text-success-500 border-success-100 dark:border-success-500 dark:text-success-500 border dark:bg-transparent");break}case"outline":{e.push("text-success-500  border-success-500 border");break}}break}case"warning":{switch(r.flavor){case"solid":{e.push("bg-warning-500 dark:bg-warning-500 text-white");break}case"pastel":{e.push("bg-warning-100  text-warning-500 border-warning-100 dark:border-warning-500 dark:text-warning-500 border dark:bg-transparent");break}case"outline":{e.push("text-warning-500  border-warning-500 border");break}}break}case"danger":{switch(r.flavor){case"solid":{e.push("bg-danger-500 dark:bg-danger-500 text-white");break}case"pastel":{e.push("bg-danger-100  text-danger-500 border-danger-100 dark:border-danger-500 dark:text-danger-500 border dark:bg-transparent");break}case"outline":{e.push("text-danger-500  border-danger-500 border");break}}break}}return e});return(e,g)=>(i(),c("span",{class:p(["inline-block px-3 font-sans transition-shadow duration-300",k(o)])},[u(e.$slots,"default")],2))}});export{h as _};
