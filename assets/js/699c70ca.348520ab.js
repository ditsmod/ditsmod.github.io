"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=o,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:5},a="@ditsmod/return",l={unversionedId:"native-modules/return",id:"native-modules/return",title:"@ditsmod/return",description:"\u041c\u043e\u0434\u0443\u043b\u044c @ditsmod/return \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u0438 HTTP-\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 return \u0443 \u043c\u0435\u0436\u0430\u0445 \u043c\u0435\u0442\u043e\u0434\u0430, \u0449\u043e \u043f\u0440\u0438\u0432'\u044f\u0437\u0443\u0454\u0442\u044c\u0441\u044f \u0434\u043e \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430:",source:"@site/docs/02-native-modules/05-return.md",sourceDirName:"02-native-modules",slug:"/native-modules/return",permalink:"/native-modules/return",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/docs/02-native-modules/05-return.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"@ditsmod/cors",permalink:"/native-modules/cors"},next:{title:"@ditsmod/i18n",permalink:"/native-modules/i18n"}},s={},d=[{value:"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0442\u0430 \u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",id:"\u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f-\u0442\u0430-\u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",level:2},{value:"HTTP \u0441\u0442\u0430\u0442\u0443\u0441\u0438 \u0442\u0430 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438",id:"http-\u0441\u0442\u0430\u0442\u0443\u0441\u0438-\u0442\u0430-\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ditsmodreturn"},"@ditsmod/return"),(0,o.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u044c ",(0,o.kt)("inlineCode",{parentName:"p"},"@ditsmod/return")," \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u0438 HTTP-\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," \u0443 \u043c\u0435\u0436\u0430\u0445 \u043c\u0435\u0442\u043e\u0434\u0430, \u0449\u043e \u043f\u0440\u0438\u0432'\u044f\u0437\u0443\u0454\u0442\u044c\u0441\u044f \u0434\u043e \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { controller, route } from '@ditsmod/core';\n\n@controller()\nexport class HelloWorldController {\n  @route('GET')\n  async tellHello() {\n    return 'Hello World!\\n';\n  }\n}\n")),(0,o.kt)("p",null,"\u042f\u043a\u0449\u043e \u0432\u0438 \u0445\u043e\u0447\u0435\u0442\u0435 \u0449\u043e\u0431 \u0442\u0430\u043a\u0430 \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456\u0441\u0442\u044c \u0431\u0443\u043b\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u044e \u0442\u0456\u043b\u044c\u043a\u0438 \u0432 \u043e\u043a\u0440\u0435\u043c\u043e\u043c\u0443 \u043c\u043e\u0434\u0443\u043b\u0456, \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0433\u043b\u044f\u043d\u0443\u0442\u0438 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/tree/main/examples/18-return"},"\u0433\u043e\u0442\u043e\u0432\u0438\u0439 \u043f\u0440\u0438\u043a\u043b\u0430\u0434 \u0443 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0456\u0457 Ditsmod"),"."),(0,o.kt)("h2",{id:"\u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f-\u0442\u0430-\u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f"},"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0442\u0430 \u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f"),(0,o.kt)("p",null,"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @ditsmod/return\n")),(0,o.kt)("p",null,"\u041f\u0440\u0438 \u0456\u043c\u043f\u043e\u0440\u0442\u0456 ",(0,o.kt)("inlineCode",{parentName:"p"},"ReturnModule")," \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0449\u0435 \u0439 ",(0,o.kt)("a",{parentName:"p",href:"/developer-guides/providers-collisions"},"\u0432\u0438\u0440\u0456\u0448\u0443\u0432\u0430\u0442\u0438 \u043a\u043e\u043b\u0456\u0437\u0456\u044e")," \u0432 \u043c\u0430\u0441\u0438\u0432\u0456 ",(0,o.kt)("inlineCode",{parentName:"p"},"resolvedCollisionsPerReq"),", \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"ReturnModule")," \u043f\u0456\u0434\u043c\u0456\u043d\u044f\u0454 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 \u0434\u043b\u044f \u0442\u043e\u043a\u0435\u043d\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpBackend"),", \u044f\u043a\u0438\u0439 \u0442\u0430\u043a\u043e\u0436 \u043f\u0456\u0434 \u043a\u0430\u043f\u043e\u0442\u043e\u043c \u043f\u0456\u0434\u043c\u0456\u043d\u044f\u0454\u0442\u044c\u0441\u044f \u0443 ",(0,o.kt)("inlineCode",{parentName:"p"},"@ditsmod/core"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6,10,12}","{6,10,12}":!0},"import { HttpBackend, rootModule } from '@ditsmod/core';\nimport { ReturnModule } from '@ditsmod/return';\n\n@rootModule({\n  imports: [\n    ReturnModule\n    // ...\n  ],\n  resolvedCollisionsPerReq: [\n    [HttpBackend, ReturnModule]\n  ],\n  exports: [ReturnModule],\n  // ...\n})\nexport class AppModule {}\n")),(0,o.kt)("p",null,"\u042f\u043a \u0431\u0430\u0447\u0438\u0442\u0435, \u043e\u043a\u0440\u0456\u043c \u0456\u043c\u043f\u043e\u0440\u0442\u0430, \u0432\u0456\u0434\u0431\u0443\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u0449\u0435 \u0439 \u0435\u043a\u0441\u043f\u043e\u0440\u0442 ",(0,o.kt)("inlineCode",{parentName:"p"},"ReturnModule")," \u0432 \u043a\u043e\u0440\u0435\u043d\u0435\u0432\u043e\u043c\u0443 \u043c\u043e\u0434\u0443\u043b\u0456 \u0449\u043e\u0431 \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456\u0441\u0442\u044c, \u044f\u043a\u0443 \u043d\u0430\u0434\u0430\u0454 \u043c\u043e\u0434\u0443\u043b\u044c ",(0,o.kt)("inlineCode",{parentName:"p"},"ReturnModule"),", \u0431\u0443\u043b\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0434\u043b\u044f \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0430."),(0,o.kt)("h2",{id:"http-\u0441\u0442\u0430\u0442\u0443\u0441\u0438-\u0442\u0430-\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438"},"HTTP \u0441\u0442\u0430\u0442\u0443\u0441\u0438 \u0442\u0430 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438"),(0,o.kt)("p",null,"\u041f\u043e \u0434\u0435\u0444\u043e\u043b\u0442\u0443, \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440 \u0432 \u043c\u043e\u0434\u0443\u043b\u0456 ",(0,o.kt)("inlineCode",{parentName:"p"},"@ditsmod/return")," \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u043f\u0456\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0454 201-\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0442\u0456\u0432 \u0437 HTTP-\u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,o.kt)("inlineCode",{parentName:"p"},"POST"),", 204-\u0438\u0439 - \u0434\u043b\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"OPTIONS"),", \u0456 200-\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 - \u0434\u043b\u044f \u0440\u0435\u0448\u0442\u0438. \u042f\u043a\u0449\u043e \u0432\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u0446\u044e \u043f\u043e\u0432\u0435\u0434\u0456\u043d\u043a\u0443, \u0432\u0430\u0440\u0442\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0438\u0439 \u043c\u0435\u0445\u0430\u043d\u0456\u0437\u043c (\u0431\u0435\u0437 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"return"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { controller, Res, route, Status } from '@ditsmod/core';\n\n@controller()\nexport class UsersController {\n  constructor(private res: Res) {}\n\n  @route('GET')\n  getUsersList() {\n    // ...\n    this.res.sendJson({ error: 'Page not found' }, Status.NOT_FOUND);\n  }\n}\n")))}m.isMDXComponent=!0}}]);