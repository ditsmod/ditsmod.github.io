"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[416],{608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=r(3117),o=(r(7294),r(3905));const a={sidebar_position:0},i="@ditsmod/router",u={unversionedId:"native-modules/router",id:"native-modules/router",title:"@ditsmod/router",description:"The @ditsmod/router module implements a router with the Router interface:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/00-router.md",sourceDirName:"02-native-modules",slug:"/native-modules/router",permalink:"/en/native-modules/router",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/00-router.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u0414\u043e\u043c\u043e\u0432\u043b\u0435\u043d\u043e\u0441\u0442\u0456 \u043f\u043e \u043a\u043e\u0434\u0443",permalink:"/en/developer-guides/conventions"},next:{title:"@ditsmod/body-parser",permalink:"/en/native-modules/body-parser"}},l={},s=[{value:"Installation and importing",id:"installation-and-importing",level:2},{value:"Custom router integration",id:"custom-router-integration",level:2}],d={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ditsmodrouter"},"@ditsmod/router"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@ditsmod/router")," module implements a router with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Router")," interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface Router {\n  on(method: HttpMethod, path: string, handle: RouteHandler): this;\n\n  all(path: string, handle: RouteHandler): this;\n\n  find(method: HttpMethod, path: string): RouterReturns;\n}\n\ntype RouteHandler = (\n  nodeReq: NodeRequest,\n  nodeRes: NodeResponse,\n  params: PathParam[],\n  queryString: any\n) => Promise<void>;\n\nclass RouterReturns {\n  handle: RouteHandler | null;\n  params: PathParam[] | null;\n}\n\ninterface PathParam {\n  key: string;\n  value: string;\n}\n")),(0,o.kt)("p",null,"A ready-made example of using this module can be found in any example in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/tree/main/examples"},"Ditsmod repository"),"."),(0,o.kt)("h2",{id:"installation-and-importing"},"Installation and importing"),(0,o.kt)("p",null,"Installation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @ditsmod/router\n")),(0,o.kt)("p",null,"Importing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { rootModule } from '@ditsmod/core';\nimport { RouterModule } from '@ditsmod/router';\n\n@rootModule({\n  imports: [RouterModule],\n  // ..\n})\nexport class AppModule {}\n")),(0,o.kt)("h2",{id:"custom-router-integration"},"Custom router integration"),(0,o.kt)("p",null,"If you want to integrate a custom router for the Ditsmod application, it is enough for your router to implement the above ",(0,o.kt)("inlineCode",{parentName:"p"},"Router")," interface, after which it can be added to the providers at the application level:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { featureModule, Router } from '@ditsmod/core';\n\nimport { MyRouter } from './my-router';\n\n@featureModule({\n  providersPerApp: [{ token: Router, useClass: MyRouter }],\n})\nexport class MyCustomRouterModule {}\n")))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=s(r),c=o,f=m["".concat(l,".").concat(c)]||m[c]||p[c]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);