"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[388],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(o),m=n,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return o?r.createElement(h,i(i({ref:t},u),{},{components:o})):r.createElement(h,i({ref:t},u))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2405:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:0},i="Modules",l={unversionedId:"components-of-ditsmod-app/module",id:"components-of-ditsmod-app/module",title:"Modules",description:"One of the main elements of the Ditsmod architecture are its modules. But what exactly is good about modular architecture? - It allows you to isolate in one module several code files that may have different roles, but common specialization. A module can be compared to an orchestra, in which there are different instruments, but they all create music together. On the other hand, the need to isolate different modules arises due to the fact that they may have different specializations and because of this - may interfere with each other. Continuing the analogy with people, if you put police and musicians, or brokers and translators in the same office, they will most likely interfere with each other. That is why narrow specialization is important for a module.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/00-module.md",sourceDirName:"00-components-of-ditsmod-app",slug:"/components-of-ditsmod-app/module",permalink:"/en/components-of-ditsmod-app/module",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/00-module.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/en/"},next:{title:"Router, controllers and services",permalink:"/en/components-of-ditsmod-app/controllers-and-services"}},s={},d=[{value:"Feature module",id:"feature-module",level:2},{value:"The root module",id:"the-root-module",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"modules"},"Modules"),(0,n.kt)("p",null,"One of the main elements of the Ditsmod architecture are its modules. But what exactly is good about modular architecture? - It allows you to isolate in one module ",(0,n.kt)("strong",{parentName:"p"},"several code files")," that may have different roles, but ",(0,n.kt)("strong",{parentName:"p"},"common specialization"),". A module can be compared to an orchestra, in which there are different instruments, but they all create music together. On the other hand, the need to isolate different modules arises due to the fact that they may have different specializations and because of this - may interfere with each other. Continuing the analogy with people, if you put police and musicians, or brokers and translators in the same office, they will most likely interfere with each other. That is why ",(0,n.kt)("strong",{parentName:"p"},"narrow specialization")," is important for a module."),(0,n.kt)("p",null,"However, modules can also have different types. Two types are most often used:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"service")," - this type includes modules that provide certain services: a database module, a security module, a module for recording logs, a module for translating messages into different languages, etc.; such modules are rarely pinned to specific URLs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"routed")," - modules that serve a certain part of the URL should be assigned to this type: for example, one module can process all HTTP requests at the address ",(0,n.kt)("inlineCode",{parentName:"li"},"/api/users"),", another module - at the address ",(0,n.kt)("inlineCode",{parentName:"li"},"/api/posts")," .")),(0,n.kt)("p",null,"Modules can contain:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"controllers that accept HTTP requests and send HTTP responses;"),(0,n.kt)("li",{parentName:"ul"},"services where the business logic of the application is described;"),(0,n.kt)("li",{parentName:"ul"},"other classes, interfaces, helpers, data types intended for the operation of the current module.")),(0,n.kt)("h2",{id:"feature-module"},"Feature module"),(0,n.kt)("p",null,"The TypeScript class becomes a Ditsmod module with ",(0,n.kt)("inlineCode",{parentName:"p"},"featureModule")," decorator:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { featureModule } from '@ditsmod/core';\n\n@featureModule()\nexport class SomeModule {}\n")),(0,n.kt)("p",null,"It is recommended that module files end with ",(0,n.kt)("inlineCode",{parentName:"p"},"*.module.ts")," and that their class names end with ",(0,n.kt)("inlineCode",{parentName:"p"},"*Module"),"."),(0,n.kt)("p",null,"In general, an object with the following properties can be passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"featureModule")," decorator:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { featureModule } from '@ditsmod/core';\n\n@featureModule({\n  appends: [], // Appended modules (these are only needed to inherit the path prefix from the current module)\n  imports: [], // Import modules\n  controllers: [], // Binding controllers to the module\n  providersPerApp: [], // Application-level providers\n  providersPerMod: [], // Module-level providers\n  providersPerRou: [], // Route-level providers\n  providersPerReq: [], // Request-level providers\n  exports: [], // Export modules and providers from the current module\n  extensions: [],\n  extensionsMeta: {}, // Data for extensions\n  resolvedCollisionsPerMod: [], // Collision resolution of imported classes at the module level\n  resolvedCollisionsPerRou: [], //                                    ...at the route level\n  resolvedCollisionsPerReq: [], //                                    ...at the request level\n  id: '', // Can be used to dynamically add or remove modules\n})\nexport class SomeModule {}\n")),(0,n.kt)("h2",{id:"the-root-module"},"The root module"),(0,n.kt)("p",null,"Other modules are imported into the root module, it is the only one for the whole application, and its class is recommended to be called ",(0,n.kt)("inlineCode",{parentName:"p"},"AppModule"),". The TypeScript class becomes the root module of Ditsmod with ",(0,n.kt)("inlineCode",{parentName:"p"},"rootModule")," decorator:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { rootModule } from '@ditsmod/core';\n\n@rootModule()\nexport class AppModule {}\n")),(0,n.kt)("p",null,"It can contain exactly the same metadata as feature modules."))}c.isMDXComponent=!0}}]);