"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[682],{924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(3117),r=(n(7294),n(3905));const a={sidebar_position:1},s="Router, controllers and services",i={unversionedId:"components-of-ditsmod-app/controllers-and-services",id:"components-of-ditsmod-app/controllers-and-services",title:"Router, controllers and services",description:"What does a router do?",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/01-controllers-and-services.md",sourceDirName:"00-components-of-ditsmod-app",slug:"/components-of-ditsmod-app/controllers-and-services",permalink:"/en/components-of-ditsmod-app/controllers-and-services",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/01-controllers-and-services.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/en/components-of-ditsmod-app/module"},next:{title:"Dependency Injection",permalink:"/en/components-of-ditsmod-app/dependency-injection"}},l={},p=[{value:"What does a router do?",id:"what-does-a-router-do",level:2},{value:"Binding of the controller to the module",id:"binding-of-the-controller-to-the-module",level:2},{value:"Services",id:"services",level:2},{value:"Services in controllers",id:"services-in-controllers",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"router-controllers-and-services"},"Router, controllers and services"),(0,r.kt)("h2",{id:"what-does-a-router-do"},"What does a router do?"),(0,r.kt)("p",null,"The router has a mapping between the URL and the HTTP request handler. Although you will not have to manually write this mapping, but for a general idea of how the router works, in a very simplified form, this mapping can be imagined as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const routes = new Map<string, Function>();\nroutes.set('/one', function() { /** request processing... **/ });\nroutes.set('/two', function() { /** request processing... **/ });\nroutes.set('/three', function() { /** request processing... **/ });\n// ...\n")),(0,r.kt)("p",null,"Right after Node.js receives an HTTP request and passes it to Ditsmod, the request URL is split into two parts separated by a question mark (if present). The first part always contains the so-called ",(0,r.kt)("em",{parentName:"p"},"path"),", while the second part contains the ",(0,r.kt)("em",{parentName:"p"},"query parameters"),", if the URL included a question mark."),(0,r.kt)("p",null,"The task of the router is to find the HTTP request handler by the ",(0,r.kt)("em",{parentName:"p"},"path"),". After that, in most cases, the request handler calls the controller method. In a very simplified form, this process can be imagined as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const path = '/two';\nconst handle = routes.get(path);\nhandle();\n")),(0,r.kt)("h1",{id:"what-is-a-controller"},"What is a controller?"),(0,r.kt)("p",null,"A TypeScript class becomes a Ditsmod controller thanks to the ",(0,r.kt)("inlineCode",{parentName:"p"},"controller")," decorator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { controller } from '@ditsmod/core';\n\n@controller()\nexport class SomeController {}\n")),(0,r.kt)("p",null,"It is recommended that controller files end with ",(0,r.kt)("inlineCode",{parentName:"p"},"*.controller.ts")," and their class names end with ",(0,r.kt)("inlineCode",{parentName:"p"},"*Controller"),"."),(0,r.kt)("p",null,"As mentioned above, after the router finds the HTTP request handler, this handler can call the controller method. To make this possible, HTTP requests are first bound to controller methods through a routing system using the ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," decorator. In the following example, a single route is created that accepts a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request at the address ",(0,r.kt)("inlineCode",{parentName:"p"},"/hello"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{5}","{5}":!0},"import { controller, route, Res } from '@ditsmod/core';\n\n@controller()\nexport class HelloWorldController {\n  @route('GET', 'hello')\n  method1(res: Res) {\n    res.send('Hello World!');\n  }\n}\n")),(0,r.kt)("p",null,"What we see here:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The route is created using the ",(0,r.kt)("inlineCode",{parentName:"li"},"route")," decorator, which is placed in front of the class method, and it does not matter what the name of this method is."),(0,r.kt)("li",{parentName:"ol"},"In the class method, the parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"res")," is declared with the data type ",(0,r.kt)("inlineCode",{parentName:"li"},"Res"),". So we ask Ditsmod to create an instance of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Res")," class and pass it to the corresponding variable. By the way, ",(0,r.kt)("inlineCode",{parentName:"li"},"res")," is short for the word ",(0,r.kt)("em",{parentName:"li"},"response"),"."),(0,r.kt)("li",{parentName:"ol"},"Text responses to HTTP requests are sent via ",(0,r.kt)("inlineCode",{parentName:"li"},"res.send()"),".")),(0,r.kt)("p",null,"Although in the previous example, an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Res")," class was requested through ",(0,r.kt)("inlineCode",{parentName:"p"},"method1()"),", we can similarly request this instance in the constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{5}","{5}":!0},"import { controller, route, Res } from '@ditsmod/core';\n\n@controller()\nexport class HelloWorldController {\n  constructor(private res: Res) {}\n\n  @route('GET', 'hello')\n  method1() {\n    this.res.send('Hello World!');\n  }\n}\n")),(0,r.kt)("p",null,"Of course, other instances of classes can be requested in the parameters, and the order of the parameters is not important."),(0,r.kt)("admonition",{title:"Use the access modifier",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The access modifier in the constructor can be any (private, protected or public), but without a modifier - ",(0,r.kt)("inlineCode",{parentName:"p"},"res")," will be just a simple parameter with visibility only in the constructor.")),(0,r.kt)("p",null,"To obtain ",(0,r.kt)("inlineCode",{parentName:"p"},"pathParams")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"queryParams"),", we need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"inject")," decorator and the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH_PARAMS")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"QUERY_PARAMS")," tokens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7-8}","{7-8}":!0},"import { controller, Res, route, inject, AnyObj, PATH_PARAMS, QUERY_PARAMS } from '@ditsmod/core';\n\n@controller()\nexport class SomeController {\n  @route('POST', 'some-url/:param1/:param2')\n  postSomeUrl(\n    @inject(PATH_PARAMS) pathParams: AnyObj,\n    @inject(QUERY_PARAMS) queryParams: AnyObj,\n    res: Res\n  ) {\n    res.sendJson(pathParams, queryParams);\n  }\n}\n")),(0,r.kt)("p",null,"You can find more information about what a token is and what the ",(0,r.kt)("inlineCode",{parentName:"p"},"inject")," decorator does in the ",(0,r.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/dependency-injection#dependency-token"},"Dependency Injection")," section."),(0,r.kt)("p",null,"As you can see from the previous example, to send responses with objects, you need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"res.sendJson()")," method instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"res.send()")," (which only sends text)."),(0,r.kt)("p",null,"Native Node.js request and response objects can be obtained by tokens, respectively - ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_REQ")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_RES"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6-7}","{6-7}":!0},"import { controller, route, inject, NODE_REQ, NODE_RES, NodeRequest, NodeResponse } from '@ditsmod/core';\n\n@controller()\nexport class HelloWorldController {\n  constructor(\n    @inject(NODE_REQ) private nodeReq: NodeRequest,\n    @inject(NODE_RES) private nodeRes: NodeResponse\n  ) {}\n\n  @route('GET', 'hello')\n  method1() {\n    this.nodeRes.end('Hello World!');\n  }\n}\n")),(0,r.kt)("p",null,"You may also be interested in ",(0,r.kt)("a",{parentName:"p",href:"/native-modules/body-parser#usage"},"how to get the HTTP request body"),"."),(0,r.kt)("h2",{id:"binding-of-the-controller-to-the-module"},"Binding of the controller to the module"),(0,r.kt)("p",null,"The controller is bound to the module through the ",(0,r.kt)("inlineCode",{parentName:"p"},"controllers")," array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},"import { featureModule } from '@ditsmod/core';\n\nimport { SomeController } from './some.controller';\n\n@featureModule({\n  controllers: [SomeController]\n})\nexport class SomeModule {}\n")),(0,r.kt)("p",null,"After binding controllers to a module, in order for Ditsmod to take these controllers into account, the module should be either appended or imported in an object that has the ",(0,r.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/exports-and-imports#ModuleWithParams"},"ModuleWithParams")," interface. The following example shows both the appendage and the full import of the module (this is done only to demonstrate the possibility, in practice it does not make sense to do simultaneous appendage and import):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6-8}","{6-8}":!0},"import { featureModule } from '@ditsmod/core';\n\nimport { SomeModule } from './some.module';\n\n@featureModule({\n  appends: [SomeModule],\n  // OR\n  imports: [{ path: 'some-prefix', module: SomeModule }]\n})\nexport class OtherModule {}\n")),(0,r.kt)("p",null,"You can read more detailed information in the section ",(0,r.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/exports-and-imports#import-module"},"Export, import and appends of modules"),"."),(0,r.kt)("h2",{id:"services"},"Services"),(0,r.kt)("p",null,"Although from a technical point of view, it's possible to get by with just one controller to handle an HTTP request, it's better to separate the voluminous code with business logic into separate classes so that the code can be reused when needed and easier to test. These separate classes with business logic are usually called ",(0,r.kt)("em",{parentName:"p"},"services"),"."),(0,r.kt)("p",null,"What services can do:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"provide configuration;"),(0,r.kt)("li",{parentName:"ul"},"validate the request;"),(0,r.kt)("li",{parentName:"ul"},"parsing the request body;"),(0,r.kt)("li",{parentName:"ul"},"check access rights;"),(0,r.kt)("li",{parentName:"ul"},"work with databases, with email;"),(0,r.kt)("li",{parentName:"ul"},"etc.")),(0,r.kt)("p",null,"The TypeScript class becomes a Ditsmod service with ",(0,r.kt)("inlineCode",{parentName:"p"},"injectable")," decorator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { injectable } from '@ditsmod/core';\n\n@injectable()\nexport class SomeService {}\n")),(0,r.kt)("p",null,"It is recommended that service files end with ",(0,r.kt)("inlineCode",{parentName:"p"},"*.service.ts"),", and their classes end with ",(0,r.kt)("inlineCode",{parentName:"p"},"*Service"),"."),(0,r.kt)("p",null,"Often, some services depend on other services, and to get an instance of a certain service, you need to specify its class in the constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7}","{7}":!0},"import { injectable } from '@ditsmod/core';\n\nimport { FirstService } from './first.service';\n\n@injectable()\nexport class SecondService {\n  constructor(private firstService: FirstService) {}\n\n  methodOne() {\n    this.firstService.doSomeThing();\n  }\n}\n")),(0,r.kt)("p",null,"As you can see, the rules for obtaining a class instance in the constructor are the same as in the controllers: using the ",(0,r.kt)("inlineCode",{parentName:"p"},"private")," access modifier, we declare the ",(0,r.kt)("inlineCode",{parentName:"p"},"firstService")," class property with the ",(0,r.kt)("inlineCode",{parentName:"p"},"FirstService")," data type. More detailed information about the rules for obtaining class instances using DI can be found in ",(0,r.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/dependency-injection"},"Dependency Injection"),"."),(0,r.kt)("h3",{id:"services-in-controllers"},"Services in controllers"),(0,r.kt)("p",null,"If you have created a ",(0,r.kt)("inlineCode",{parentName:"p"},"FirstService")," and ",(0,r.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/dependency-injection#passing-of-providers-to-the-di-registry"},"passed it to DI"),", you will now be able to request its instance in controllers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{8}","{8}":!0},"import { controller, route, Res } from '@ditsmod/core';\n\nimport { FirstService } from './first.service';\n\n@controller()\nexport class HelloWorldController {\n  @route('GET', 'hello')\n  method1(res: Res, firstService: FirstService) {\n    res.send(firstService.sayHello());\n  }\n}\n")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);