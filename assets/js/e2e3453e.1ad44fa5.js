"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[11],{9941:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(4848),t=n(5680);const s={sidebar_position:1},d="@ditsmod/body-parser",i={id:"native-modules/body-parser",title:"@ditsmod/body-parser",description:"\u0426\u0435\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043e\u0434\u0430\u0454 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440 \u0434\u043b\u044f \u043f\u0430\u0440\u0441\u0456\u043d\u0433\u0443 \u0442\u0456\u043b\u0430 \u0437\u0430\u043f\u0438\u0442\u0443 \u0434\u043e \u0443\u0441\u0456\u0445 \u0440\u043e\u0443\u0442\u0456\u0432, \u0449\u043e \u043c\u0430\u044e\u0442\u044c HTTP-\u043c\u0435\u0442\u043e\u0434\u0438 \u0432\u043a\u0430\u0437\u0430\u043d\u0456 \u0443 bodyParserConfig.acceptMethods, \u043f\u043e-\u0434\u0435\u0444\u043e\u043b\u0442\u0443 \u0446\u0435:",source:"@site/docs/02-native-modules/01-body-parser.md",sourceDirName:"02-native-modules",slug:"/native-modules/body-parser",permalink:"/native-modules/body-parser",draft:!1,unlisted:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/docs/02-native-modules/01-body-parser.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"@ditsmod/routing",permalink:"/native-modules/routing"},next:{title:"@ditsmod/session-cookie",permalink:"/native-modules/session-cookie"}},l={},c=[{value:"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f",id:"\u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f",level:2},{value:"\u041f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",id:"\u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",level:2},{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.RP)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"ditsmodbody-parser",children:"@ditsmod/body-parser"}),"\n",(0,o.jsxs)(r.p,{children:["\u0426\u0435\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043e\u0434\u0430\u0454 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440 \u0434\u043b\u044f \u043f\u0430\u0440\u0441\u0456\u043d\u0433\u0443 \u0442\u0456\u043b\u0430 \u0437\u0430\u043f\u0438\u0442\u0443 \u0434\u043e \u0443\u0441\u0456\u0445 \u0440\u043e\u0443\u0442\u0456\u0432, \u0449\u043e \u043c\u0430\u044e\u0442\u044c HTTP-\u043c\u0435\u0442\u043e\u0434\u0438 \u0432\u043a\u0430\u0437\u0430\u043d\u0456 \u0443 ",(0,o.jsx)(r.code,{children:"bodyParserConfig.acceptMethods"}),", \u043f\u043e-\u0434\u0435\u0444\u043e\u043b\u0442\u0443 \u0446\u0435:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"POST"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"PUT"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"PATCH"})}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"\u041f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u044e\u0442\u044c\u0441\u044f \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0456 \u0442\u0438\u043f\u0438 \u0434\u0430\u043d\u0438\u0445:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"application/json"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"application/x-www-form-urlencoded"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"text/plain"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"text/html"})}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["\u0414\u0430\u043d\u0438\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u043d\u0435 \u043f\u0430\u0440\u0441\u0438\u0442\u044c \u0442\u0456\u043b\u043e \u0437\u0430\u043f\u0438\u0442\u0443 \u043f\u0440\u0438 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u0456 \u0444\u0430\u0439\u043b\u0456\u0432, \u0434\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044c \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0456\u043c \u043c\u043e\u0434\u0443\u043b\u0435\u043c ",(0,o.jsx)(r.a,{href:"https://www.npmjs.com/package/@ts-stack/multiparty",children:"@ts-stack/multiparty"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"\u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f",children:"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"npm i @ditsmod/body-parser\n"})}),"\n",(0,o.jsx)(r.h2,{id:"\u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",children:"\u041f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f"}),"\n",(0,o.jsxs)(r.p,{children:["\u0429\u043e\u0431 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e \u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0438 ",(0,o.jsx)(r.code,{children:"@ditsmod/body-parser"}),", \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0456\u043c\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0442\u0430 \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 ",(0,o.jsx)(r.code,{children:"BodyParserModule"})," \u0432 \u043a\u043e\u0440\u0435\u043d\u0435\u0432\u043e\u043c\u0443 \u043c\u043e\u0434\u0443\u043b\u0456:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"import { rootModule } from '@ditsmod/core';\nimport { BodyParserModule } from '@ditsmod/body-parser';\n\n@rootModule({\n  imports: [\n    BodyParserModule,\n    // ...\n  ],\n  exports: [BodyParserModule]\n})\nexport class AppModule {}\n"})}),"\n",(0,o.jsx)(r.p,{children:"\u0412 \u0442\u0430\u043a\u043e\u043c\u0443 \u0440\u0430\u0437\u0456 \u0431\u0443\u0434\u0443\u0442\u044c \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0434\u0435\u0444\u043e\u043b\u0442\u043d\u0456 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f. \u042f\u043a\u0449\u043e \u0436 \u0432\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u0434\u0435\u044f\u043a\u0456 \u043e\u043f\u0446\u0456\u0457, \u043c\u043e\u0436\u0435\u0442\u0435 \u0446\u0435 \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u043c \u0447\u0438\u043d\u043e\u043c:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",metastring:"{4}",children:"import { rootModule } from '@ditsmod/core';\nimport { BodyParserModule } from '@ditsmod/body-parser';\n\nconst moduleWithBodyParserConfig = BodyParserModule.withParams({ maxBodySize: 1024 * 1024 });\n\n@rootModule({\n  imports: [\n    moduleWithBodyParserConfig,\n    // ...\n  ],\n  exports: [moduleWithBodyParserConfig]\n})\nexport class AppModule {}\n"})}),"\n",(0,o.jsx)(r.p,{children:"\u0429\u0435 \u043e\u0434\u0438\u043d \u0432\u0430\u0440\u0456\u0430\u043d\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0456 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"import { rootModule, Providers } from '@ditsmod/core';\nimport { BodyParserModule, BodyParserConfig } from '@ditsmod/body-parser';\n\n@rootModule({\n  imports: [\n    BodyParserModule,\n    // ...\n  ],\n  providersPerApp: [\n    ...new Providers()\n      .useValue<BodyParserConfig>(BodyParserConfig,  { maxBodySize: 1024*1024 })\n  ],\n  exports: [BodyParserModule]\n})\nexport class AppModule {}\n"})}),"\n",(0,o.jsx)(r.h2,{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",children:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\n",(0,o.jsxs)(r.p,{children:["\u0412 \u0437\u0430\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0456 \u0432\u0456\u0434 \u0442\u043e\u0433\u043e, \u0447\u0438 \u0454 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440 ",(0,o.jsx)(r.a,{href:"/components-of-ditsmod-app/controllers-and-services/#%D1%89%D0%BE-%D1%8F%D0%B2%D0%BB%D1%8F%D1%94-%D1%81%D0%BE%D0%B1%D0%BE%D1%8E-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D0%B5%D1%80",children:"\u043e\u0434\u0438\u043d\u0430\u043a\u043e\u043c"})," \u0447\u0438 \u043d\u0456, \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0440\u043e\u0431\u043e\u0442\u0438 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0430 \u043c\u043e\u0436\u043d\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0434\u0432\u043e\u043c\u0430 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438:"]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\u042f\u043a\u0449\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440 \u043d\u0435 \u0454 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u043c, \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043c\u043e\u0436\u043d\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u0442\u043e\u043a\u0435\u043d\u0430 ",(0,o.jsx)(r.code,{children:"HTTP_BODY"}),":"]}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",metastring:"{11}",children:"import { controller, Res, route, inject } from '@ditsmod/core';\nimport { HTTP_BODY } from '@ditsmod/body-parser';\n\ninterface Body {\n  one: number;\n}\n\n@controller()\nexport class SomeController {\n  @route('POST')\n  ok(@inject(HTTP_BODY) body: Body, res: Res) {\n    res.sendJson(body);\n  }\n}\n"})}),"\n",(0,o.jsxs)(r.ol,{start:"2",children:["\n",(0,o.jsx)(r.li,{children:"\u042f\u043a\u0449\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440 \u0454 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u043c, \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043c\u043e\u0436\u043d\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0437 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0443:"}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",metastring:"{6}",children:"import { controller, route, SingletonRequestContext } from '@ditsmod/core';\n\n@controller({ isSingleton: true })\nexport class SomeController {\n  @route('POST')\n  ok(ctx: SingletonRequestContext) {\n    const bodyStr = JSON.stringify(ctx.body);\n    ctx.nodeRes.end(bodyStr);\n  }\n}\n"})})]})}function p(e={}){const{wrapper:r}={...(0,t.RP)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},5680:(e,r,n)=>{n.d(r,{RP:()=>c});var o=n(6540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=o.createContext({}),c=function(e){var r=o.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):d(d({},r),e)),n},a={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=t,h=m["".concat(l,".").concat(u)]||m[u]||a[u]||s;return n?o.createElement(h,d(d({ref:r},p),{},{components:n})):o.createElement(h,d({ref:r},p))}));p.displayName="MDXCreateElement"}}]);