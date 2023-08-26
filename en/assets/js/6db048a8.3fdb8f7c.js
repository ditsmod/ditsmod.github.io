"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[121],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),c=n,y=u["".concat(s,".").concat(c)]||u[c]||m[c]||a;return r?o.createElement(y,i(i({ref:t},p),{},{components:r})):o.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8267:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1},i="@ditsmod/body-parser",l={unversionedId:"native-modules/body-parser",id:"native-modules/body-parser",title:"@ditsmod/body-parser",description:"This module adds an interceptor for parsing the request body to all routes that have the HTTP methods specified in bodyParserConfig.acceptMethods, by default it is:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/01-body-parser.md",sourceDirName:"02-native-modules",slug:"/native-modules/body-parser",permalink:"/en/native-modules/body-parser",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/01-body-parser.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"@ditsmod/router",permalink:"/en/native-modules/router"},next:{title:"@ditsmod/session-cookie",permalink:"/en/native-modules/session-cookie"}},s={},d=[{value:"Installation",id:"installation",level:2},{value:"Importing",id:"importing",level:2},{value:"Usage",id:"usage",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ditsmodbody-parser"},"@ditsmod/body-parser"),(0,n.kt)("p",null,"This module adds an interceptor for parsing the request body to all routes that have the HTTP methods specified in ",(0,n.kt)("inlineCode",{parentName:"p"},"bodyParserConfig.acceptMethods"),", by default it is:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PUT")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PATCH"))),(0,n.kt)("p",null,"The following data types are supported:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"application/json")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"text/plain")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"text/html"))),(0,n.kt)("p",null,"This module does not parse the request body when uploading files, for this you can use the third-party module ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@ts-stack/multiparty"},"multiparty"),"."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @ditsmod/body-parser\n")),(0,n.kt)("h2",{id:"importing"},"Importing"),(0,n.kt)("p",null,"To enable ",(0,n.kt)("inlineCode",{parentName:"p"},"@ditsmod/body-parser")," globally, you need to import and export ",(0,n.kt)("inlineCode",{parentName:"p"},"BodyParserModule")," in the root module:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { rootModule } from '@ditsmod/core';\nimport { BodyParserModule } from '@ditsmod/body-parser';\n\n@rootModule({\n  imports: [\n    BodyParserModule,\n    // ...\n  ],\n  exports: [BodyParserModule]\n})\nexport class AppModule {}\n")),(0,n.kt)("p",null,"In this case, the default settings will work. If you need to change some options, you can do it as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4}","{4}":!0},"import { rootModule } from '@ditsmod/core';\nimport { BodyParserModule } from '@ditsmod/body-parser';\n\nconst moduleWithBodyParserConfig = BodyParserModule.withParams({ maxBodySize: 1024 * 1024 });\n\n@rootModule({\n  imports: [\n    moduleWithBodyParserConfig,\n    // ...\n  ],\n  exports: [moduleWithBodyParserConfig]\n})\nexport class AppModule {}\n")),(0,n.kt)("p",null,"Another option for passing the configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { rootModule, Providers } from '@ditsmod/core';\nimport { BodyParserModule, BodyParserConfig } from '@ditsmod/body-parser';\n\n@rootModule({\n  imports: [\n    BodyParserModule,\n    // ...\n  ],\n  providersPerApp: [\n    ...new Providers()\n      .useValue<BodyParserConfig>(BodyParserConfig,  { maxBodySize: 1024*1024 })\n  ],\n  exports: [BodyParserModule]\n})\nexport class AppModule {}\n")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"The result of the interceptor can be obtained by ",(0,n.kt)("inlineCode",{parentName:"p"},"HTTP_BODY")," token:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{11}","{11}":!0},"import { controller, Res, route, inject } from '@ditsmod/core';\nimport { HTTP_BODY } from '@ditsmod/body-parser';\n\ninterface Body {\n  one: number;\n}\n\n@controller()\nexport class SomeController {\n  @route('POST')\n  ok(@inject(HTTP_BODY) body: Body, res: Res) {\n    res.sendJson(body);\n  }\n}\n")))}m.isMDXComponent=!0}}]);