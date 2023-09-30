"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[496],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),c=o,y=m["".concat(d,".").concat(c)]||m[c]||u[c]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="@ditsmod/body-parser",l={unversionedId:"native-modules/body-parser",id:"native-modules/body-parser",title:"@ditsmod/body-parser",description:"\u0426\u0435\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043e\u0434\u0430\u0454 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440 \u0434\u043b\u044f \u043f\u0430\u0440\u0441\u0456\u043d\u0433\u0443 \u0442\u0456\u043b\u0430 \u0437\u0430\u043f\u0438\u0442\u0443 \u0434\u043e \u0443\u0441\u0456\u0445 \u0440\u043e\u0443\u0442\u0456\u0432, \u0449\u043e \u043c\u0430\u044e\u0442\u044c HTTP-\u043c\u0435\u0442\u043e\u0434\u0438 \u0432\u043a\u0430\u0437\u0430\u043d\u0456 \u0443 bodyParserConfig.acceptMethods, \u043f\u043e-\u0434\u0435\u0444\u043e\u043b\u0442\u0443 \u0446\u0435:",source:"@site/docs/02-native-modules/01-body-parser.md",sourceDirName:"02-native-modules",slug:"/native-modules/body-parser",permalink:"/native-modules/body-parser",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/docs/02-native-modules/01-body-parser.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"@ditsmod/routing",permalink:"/native-modules/routing"},next:{title:"@ditsmod/session-cookie",permalink:"/native-modules/session-cookie"}},d={},s=[{value:"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f",id:"\u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f",level:2},{value:"\u041f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",id:"\u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",level:2},{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ditsmodbody-parser"},"@ditsmod/body-parser"),(0,o.kt)("p",null,"\u0426\u0435\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043e\u0434\u0430\u0454 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440 \u0434\u043b\u044f \u043f\u0430\u0440\u0441\u0456\u043d\u0433\u0443 \u0442\u0456\u043b\u0430 \u0437\u0430\u043f\u0438\u0442\u0443 \u0434\u043e \u0443\u0441\u0456\u0445 \u0440\u043e\u0443\u0442\u0456\u0432, \u0449\u043e \u043c\u0430\u044e\u0442\u044c HTTP-\u043c\u0435\u0442\u043e\u0434\u0438 \u0432\u043a\u0430\u0437\u0430\u043d\u0456 \u0443 ",(0,o.kt)("inlineCode",{parentName:"p"},"bodyParserConfig.acceptMethods"),", \u043f\u043e-\u0434\u0435\u0444\u043e\u043b\u0442\u0443 \u0446\u0435:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"POST")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PUT")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PATCH"))),(0,o.kt)("p",null,"\u041f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u044e\u0442\u044c\u0441\u044f \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0456 \u0442\u0438\u043f\u0438 \u0434\u0430\u043d\u0438\u0445:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"application/json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"text/plain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"text/html"))),(0,o.kt)("p",null,"\u0414\u0430\u043d\u0438\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u043d\u0435 \u043f\u0430\u0440\u0441\u0438\u0442\u044c \u0442\u0456\u043b\u043e \u0437\u0430\u043f\u0438\u0442\u0443 \u043f\u0440\u0438 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u0456 \u0444\u0430\u0439\u043b\u0456\u0432, \u0434\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044c \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0456\u043c \u043c\u043e\u0434\u0443\u043b\u0435\u043c ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@ts-stack/multiparty"},"multiparty"),"."),(0,o.kt)("h2",{id:"\u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f"},"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @ditsmod/body-parser\n")),(0,o.kt)("h2",{id:"\u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f"},"\u041f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f"),(0,o.kt)("p",null,"\u0429\u043e\u0431 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e \u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"@ditsmod/body-parser"),", \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0456\u043c\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0442\u0430 \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"BodyParserModule")," \u0432 \u043a\u043e\u0440\u0435\u043d\u0435\u0432\u043e\u043c\u0443 \u043c\u043e\u0434\u0443\u043b\u0456:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { rootModule } from '@ditsmod/core';\nimport { BodyParserModule } from '@ditsmod/body-parser';\n\n@rootModule({\n  imports: [\n    BodyParserModule,\n    // ...\n  ],\n  exports: [BodyParserModule]\n})\nexport class AppModule {}\n")),(0,o.kt)("p",null,"\u0412 \u0442\u0430\u043a\u043e\u043c\u0443 \u0440\u0430\u0437\u0456 \u0431\u0443\u0434\u0443\u0442\u044c \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0434\u0435\u0444\u043e\u043b\u0442\u043d\u0456 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f. \u042f\u043a\u0449\u043e \u0436 \u0432\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u0434\u0435\u044f\u043a\u0456 \u043e\u043f\u0446\u0456\u0457, \u043c\u043e\u0436\u0435\u0442\u0435 \u0446\u0435 \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u043c \u0447\u0438\u043d\u043e\u043c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4}","{4}":!0},"import { rootModule } from '@ditsmod/core';\nimport { BodyParserModule } from '@ditsmod/body-parser';\n\nconst moduleWithBodyParserConfig = BodyParserModule.withParams({ maxBodySize: 1024 * 1024 });\n\n@rootModule({\n  imports: [\n    moduleWithBodyParserConfig,\n    // ...\n  ],\n  exports: [moduleWithBodyParserConfig]\n})\nexport class AppModule {}\n")),(0,o.kt)("p",null,"\u0429\u0435 \u043e\u0434\u0438\u043d \u0432\u0430\u0440\u0456\u0430\u043d\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0456 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { rootModule, Providers } from '@ditsmod/core';\nimport { BodyParserModule, BodyParserConfig } from '@ditsmod/body-parser';\n\n@rootModule({\n  imports: [\n    BodyParserModule,\n    // ...\n  ],\n  providersPerApp: [\n    ...new Providers()\n      .useValue<BodyParserConfig>(BodyParserConfig,  { maxBodySize: 1024*1024 })\n  ],\n  exports: [BodyParserModule]\n})\nexport class AppModule {}\n")),(0,o.kt)("h2",{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"},"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,o.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0440\u043e\u0431\u043e\u0442\u0438 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0430 \u043c\u043e\u0436\u043d\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u0442\u043e\u043a\u0435\u043d\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP_BODY"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{11}","{11}":!0},"import { controller, Res, route, inject } from '@ditsmod/core';\nimport { HTTP_BODY } from '@ditsmod/body-parser';\n\ninterface Body {\n  one: number;\n}\n\n@controller()\nexport class SomeController {\n  @route('POST')\n  ok(@inject(HTTP_BODY) body: Body, res: Res) {\n    res.sendJson(body);\n  }\n}\n")))}u.isMDXComponent=!0}}]);