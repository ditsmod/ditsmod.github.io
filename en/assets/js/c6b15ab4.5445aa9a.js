"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[870],{1282:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=t(3117),r=(t(7294),t(3905));const i={sidebar_position:9},l="Collision of providers",d={unversionedId:"developer-guides/providers-collisions",id:"developer-guides/providers-collisions",title:"Collision of providers",description:"Imagine you have Module3 where you imported Module2 and Module1. You did this import because you need Service2 and Service1 from these modules, respectively. You are viewing how these services work, but for some reason Service1 does not work as expected. You start debug and it turns out that Service1 exports both modules: Module2 and Module1. You expected that Service1 would only be exported from Module1, but the version exported from Module2 actually worked.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/01-developer-guides/09-providers-collisions.md",sourceDirName:"01-developer-guides",slug:"/developer-guides/providers-collisions",permalink:"/en/developer-guides/providers-collisions",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/01-developer-guides/09-providers-collisions.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/en/developer-guides/testing"},next:{title:"Ditsmod coding style guide",permalink:"/en/developer-guides/conventions"}},a={},s=[{value:"Collision resolution",id:"collision-resolution",level:2}],p={toc:s};function u(e){let{components:o,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"collision-of-providers"},"Collision of providers"),(0,r.kt)("p",null,"Imagine you have ",(0,r.kt)("inlineCode",{parentName:"p"},"Module3")," where you imported ",(0,r.kt)("inlineCode",{parentName:"p"},"Module2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Module1"),". You did this import because you need ",(0,r.kt)("inlineCode",{parentName:"p"},"Service2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Service1")," from these modules, respectively. You are viewing how these services work, but for some reason ",(0,r.kt)("inlineCode",{parentName:"p"},"Service1")," does not work as expected. You start debug and it turns out that ",(0,r.kt)("inlineCode",{parentName:"p"},"Service1")," exports both modules: ",(0,r.kt)("inlineCode",{parentName:"p"},"Module2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Module1"),". You expected that ",(0,r.kt)("inlineCode",{parentName:"p"},"Service1")," would only be exported from ",(0,r.kt)("inlineCode",{parentName:"p"},"Module1"),", but the version exported from ",(0,r.kt)("inlineCode",{parentName:"p"},"Module2")," actually worked."),(0,r.kt)("p",null,"To prevent this from happening, if you import two or more modules that export non-identical providers with the same token, Ditsmod will throw the following error:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Error: Importing providers to Module3 failed: exports from Module2 and Module1 causes collision with Service1. If Module3 declared in your application (it is not imported from node_modules), you should add Service1 to resolvedCollisionsPer* in this module. For example: resolvedCollisionsPerReq: [ ","[Service1, Module1]"," ].")),(0,r.kt)("p",null,"Specifically in this case:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Module1")," substitute and then exports the provider with the token ",(0,r.kt)("inlineCode",{parentName:"li"},"Service1"),";"),(0,r.kt)("li",{parentName:"ol"},"and ",(0,r.kt)("inlineCode",{parentName:"li"},"Module2")," substitute and then exports the provider with the token ",(0,r.kt)("inlineCode",{parentName:"li"},"Service1"),";"),(0,r.kt)("li",{parentName:"ol"},"providers with token ",(0,r.kt)("inlineCode",{parentName:"li"},"Service1")," are not identical in ",(0,r.kt)("inlineCode",{parentName:"li"},"Module1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Module2"),", i.e. from ",(0,r.kt)("inlineCode",{parentName:"li"},"Module2")," can be exported, for example, object ",(0,r.kt)("inlineCode",{parentName:"li"},"{ token: Service1, useValue: {} }"),", and from ",(0,r.kt)("inlineCode",{parentName:"li"},"Module1")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Service1")," can be exported as a class.")),(0,r.kt)("p",null,"And since both of these modules are imported into ",(0,r.kt)("inlineCode",{parentName:"p"},"Module3"),', this causes a "provider collisions", because the developer may not know which of these substitutions will work in ',(0,r.kt)("inlineCode",{parentName:"p"},"Module3"),"."),(0,r.kt)("h2",{id:"collision-resolution"},"Collision resolution"),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"Module3")," is declared in your application (it is not imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"), the collision is resolved by adding to ",(0,r.kt)("inlineCode",{parentName:"p"},"resolvedCollisionsPer*")," an array of two elements, with the provider's token in the first place and the module from which the provider needs to be taken in the second place:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},"import { Module1, Service1 } from './module1';\nimport { Module2 } from './module2';\n\n@featureModule({\n  imports: [Module2, Module1],\n  resolvedCollisionsPerReq: [ [Service1, Module1] ]\n})\nexport class Module3 {}\n")),(0,r.kt)("p",null,"If you have installed ",(0,r.kt)("inlineCode",{parentName:"p"},"Module3")," using packages manager (npm, yarn, etc.), there is no point in modifying this module locally to resolve the collision. This situation can only occur if ",(0,r.kt)("inlineCode",{parentName:"p"},"Module2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Module1")," are exported from the root module, so you need to remove one of these modules from there. And, of course, after that you will have to explicitly import the deleted module into those modules where it is needed."))}u.isMDXComponent=!0},3905:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>m});var n=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function d(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=n.createContext({}),s=function(e){var o=n.useContext(a),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},p=function(e){var o=s(e.components);return n.createElement(a.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},c=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,v=c["".concat(a,".").concat(m)]||c[m]||u[m]||i;return t?n.createElement(v,l(l({ref:o},p),{},{components:t})):n.createElement(v,l({ref:o},p))}));function m(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var d={};for(var a in o)hasOwnProperty.call(o,a)&&(d[a]=o[a]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);