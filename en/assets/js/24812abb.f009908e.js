"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[391],{9438:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(4848),s=t(8453);const r={sidebar_position:1},i="Router, controllers and services",l={id:"components-of-ditsmod-app/controllers-and-services",title:"Router, controllers and services",description:"What does a router do?",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/01-controllers-and-services.md",sourceDirName:"00-components-of-ditsmod-app",slug:"/components-of-ditsmod-app/controllers-and-services",permalink:"/en/components-of-ditsmod-app/controllers-and-services",draft:!1,unlisted:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/01-controllers-and-services.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/en/components-of-ditsmod-app/module"},next:{title:"Dependency Injection",permalink:"/en/components-of-ditsmod-app/dependency-injection"}},c={},d=[{value:"What does a router do?",id:"what-does-a-router-do",level:2},{value:"What is a controller",id:"what-is-a-controller",level:2},{value:"The controller non-singleton",id:"the-controller-non-singleton",level:3},{value:"The controller singleton",id:"the-controller-singleton",level:3},{value:"Binding of the controller to the module",id:"binding-of-the-controller-to-the-module",level:2},{value:"Services",id:"services",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"router-controllers-and-services",children:"Router, controllers and services"})}),"\n",(0,o.jsx)(n.h2,{id:"what-does-a-router-do",children:"What does a router do?"}),"\n",(0,o.jsxs)(n.p,{children:["A router maps URLs to the corresponding request handler. For example, when users navigates to ",(0,o.jsx)(n.code,{children:"/some-path"}),", ",(0,o.jsx)(n.code,{children:"/other-path"}),", or ",(0,o.jsx)(n.code,{children:"/path-with/:parameter"})," on your website, they are signaling to the Ditsmod application that they want to access a particular resource or make a change on the site. To let the Ditsmod application know what to do when these URLs are requested, you need to define the appropriate request handlers in the code. So, if ",(0,o.jsx)(n.code,{children:"/some-path"})," is requested, a certain function is executed; if ",(0,o.jsx)(n.code,{children:"/other-path"})," is requested, a different function is executed, and so on. Defining this relationship between the URL and its handler is the process of mapping URLs to their respective request handlers."]}),"\n",(0,o.jsx)(n.p,{children:"Although you won't have to manually write this mapping, for a general understanding of how a router works, it can be simplified like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const routes = new Map<string, Function>();\nroutes.set('/some-path', function() { /** request handling... **/ });\nroutes.set('/other-path', function() { /** request handling... **/ });\nroutes.set('/path-with/:parameter', function() { /** request handling... **/ });\n// ...\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Right after Node.js receives an HTTP request and passes it to Ditsmod, the request URL is split into two parts separated by a question mark (if present). The first part always contains the so-called ",(0,o.jsx)(n.em,{children:"path"}),", while the second part contains the ",(0,o.jsx)(n.em,{children:"query parameters"}),", if the URL included a question mark."]}),"\n",(0,o.jsxs)(n.p,{children:["The router's task is to find the HTTP request handler by ",(0,o.jsx)(n.em,{children:"path"}),". In a very simplified form, this process can be imagined as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const path = '/some-path';\nconst handle = routes.get(path);\n\n// ...\n// And then this handler is called in a function that listens for HTTP requests.\nif (handle) {\n  handle();\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"In most cases, the request handler calls the controller method."}),"\n",(0,o.jsx)(n.h2,{id:"what-is-a-controller",children:"What is a controller"}),"\n",(0,o.jsxs)(n.p,{children:["The mapping between the URL and the request handler is based on the metadata attached to the controller methods. A TypeScript class becomes a Ditsmod controller thanks to the ",(0,o.jsx)(n.code,{children:"controller"})," decorator:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { controller } from '@ditsmod/core';\n\n@controller()\nexport class SomeController {}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["It is recommended that controller files end with ",(0,o.jsx)(n.code,{children:"*.controller.ts"})," and their class names end with ",(0,o.jsx)(n.code,{children:"*Controller"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Starting with v2.50.0, Ditsmod makes it possible to work with the controller in two modes:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Controller non-singleton (by default). Its instance is created for each HTTP request."}),"\n",(0,o.jsxs)(n.li,{children:["Controller ",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Singleton_pattern",children:"singleton"}),". It is instantiated once at the module level during application initialization."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The first mode is safer when you need to work in the context of the current HTTP request (the client provides a certain identifier that must be taken into account to form a response). The second mode is noticeably faster (about 15%) and consumes less memory, but the request context cannot be stored in the properties of the controller instance, because this instance can be used for other clients at the same time. In the second mode, the request context will have to be passed only as an argument to the methods."}),"\n",(0,o.jsxs)(n.p,{children:["In order for Ditsmod to work with the controller as a singleton, ",(0,o.jsx)(n.code,{children:"{ isSingleton: true }"})," must be specified in the metadata:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { controller } from '@ditsmod/core';\n\n@controller({ isSingleton: true })\nexport class SomeController {}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"the-controller-non-singleton",children:"The controller non-singleton"}),"\n",(0,o.jsxs)(n.p,{children:["As mentioned above, after the router finds the HTTP request handler, this handler can call the controller method. To make this possible, HTTP requests are first bound to controller methods through a routing system using the ",(0,o.jsx)(n.code,{children:"route"})," decorator. In the following example, a single route is created that accepts a ",(0,o.jsx)(n.code,{children:"GET"})," request at the path ",(0,o.jsx)(n.code,{children:"/hello"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{5}",children:"import { controller, route, Res } from '@ditsmod/core';\n\n@controller()\nexport class HelloWorldController {\n  @route('GET', 'hello')\n  method1(res: Res) {\n    res.send('Hello World!');\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"What we see here:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["The route is created using the ",(0,o.jsx)(n.code,{children:"route"})," decorator, which is placed in front of the class method, and it does not matter what the name of this method is."]}),"\n",(0,o.jsxs)(n.li,{children:["In the class method, the parameter ",(0,o.jsx)(n.code,{children:"res"})," is declared with the data type ",(0,o.jsx)(n.code,{children:"Res"}),". So we ask Ditsmod to create an instance of the ",(0,o.jsx)(n.code,{children:"Res"})," class and pass it to the corresponding variable. By the way, ",(0,o.jsx)(n.code,{children:"res"})," is short for the word ",(0,o.jsx)(n.em,{children:"response"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Text responses to HTTP requests are sent via ",(0,o.jsx)(n.code,{children:"res.send()"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Although in the previous example, an instance of the ",(0,o.jsx)(n.code,{children:"Res"})," class was requested through ",(0,o.jsx)(n.code,{children:"method1"}),", we can similarly request this instance in the constructor:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{5}",children:"import { controller, route, Res } from '@ditsmod/core';\n\n@controller()\nexport class HelloWorldController {\n  constructor(private res: Res) {}\n\n  @route('GET', 'hello')\n  method1() {\n    this.res.send('Hello World!');\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Of course, other instances of classes can be requested in the parameters, and the order of the parameters is not important."}),"\n",(0,o.jsx)(n.admonition,{title:"Use the access modifier",type:"tip",children:(0,o.jsxs)(n.p,{children:["The access modifier in the constructor can be any (private, protected or public), but without a modifier - ",(0,o.jsx)(n.code,{children:"res"})," will be just a simple parameter with visibility only in the constructor."]})}),"\n",(0,o.jsxs)(n.p,{children:["To obtain ",(0,o.jsx)(n.code,{children:"pathParams"})," or ",(0,o.jsx)(n.code,{children:"queryParams"}),", you need to use the ",(0,o.jsx)(n.code,{children:"inject"})," decorator and the ",(0,o.jsx)(n.code,{children:"PATH_PARAMS"})," and ",(0,o.jsx)(n.code,{children:"QUERY_PARAMS"})," tokens:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{7-8}",children:"import { controller, Res, route, inject, AnyObj, PATH_PARAMS, QUERY_PARAMS } from '@ditsmod/core';\n\n@controller()\nexport class SomeController {\n  @route('GET', 'some-url/:param1/:param2')\n  method1(\n    @inject(PATH_PARAMS) pathParams: AnyObj,\n    @inject(QUERY_PARAMS) queryParams: AnyObj,\n    res: Res\n  ) {\n    res.sendJson({ pathParams, queryParams });\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can find more information about what a token is and what the ",(0,o.jsx)(n.code,{children:"inject"})," decorator does in the ",(0,o.jsx)(n.a,{href:"/components-of-ditsmod-app/dependency-injection#dependency-token",children:"Dependency Injection"})," section."]}),"\n",(0,o.jsxs)(n.p,{children:["As you can see from the previous example, to send responses with objects, you need to use the ",(0,o.jsx)(n.code,{children:"res.sendJson()"})," method instead of ",(0,o.jsx)(n.code,{children:"res.send()"})," (which only sends text)."]}),"\n",(0,o.jsxs)(n.p,{children:["Native Node.js request and response objects can be obtained by tokens, respectively - ",(0,o.jsx)(n.code,{children:"NODE_REQ"})," and ",(0,o.jsx)(n.code,{children:"NODE_RES"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{6-7}",children:"import { controller, route, inject, NODE_REQ, NODE_RES, NodeRequest, NodeResponse } from '@ditsmod/core';\n\n@controller()\nexport class HelloWorldController {\n  constructor(\n    @inject(NODE_REQ) private nodeReq: NodeRequest,\n    @inject(NODE_RES) private nodeRes: NodeResponse\n  ) {}\n\n  @route('GET', 'hello')\n  method1() {\n    this.nodeRes.end('Hello World!');\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You may also be interested in ",(0,o.jsx)(n.a,{href:"/native-modules/body-parser#retrieving-the-request-body",children:"how to get the HTTP request body"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"the-controller-singleton",children:"The controller singleton"}),"\n",(0,o.jsxs)(n.p,{children:["Because the controller is instantiated in this mode only once, you will not be able to query in its constructor for class instances that are instantiated on each request. For example, if you request an instance of the ",(0,o.jsx)(n.code,{children:"Res"})," class in the constructor, Ditsmod will throw an error:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{3,5}",children:"import { controller, route, RequestContext } from '@ditsmod/core';\n\n@controller({ isSingleton: true })\nexport class HelloWorldController {\n  constructor(private res: Res) {}\n\n  @route('GET', 'hello')\n  method1() {\n    this.res.send('Hello, World!');\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"The working case will be as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{3,6}",children:"import { controller, route, RequestContext } from '@ditsmod/core';\n\n@controller({ isSingleton: true })\nexport class HelloWorldController {\n  @route('GET', 'hello')\n  method1(ctx: RequestContext) {\n    ctx.send('Hello, World!');\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:'In the "controller singleton" mode, controller methods bound to specific routes receive a single argument - the request context. That is, in this mode, you will no longer be able to ask Ditsmod to pass instances of other classes to these methods. However, in the constructor you can still request instances of certain classes that are created only once.'}),"\n",(0,o.jsx)(n.h2,{id:"binding-of-the-controller-to-the-module",children:"Binding of the controller to the module"}),"\n",(0,o.jsxs)(n.p,{children:["The controller is bound to the module through the ",(0,o.jsx)(n.code,{children:"controllers"})," array:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{5}",children:"import { featureModule } from '@ditsmod/core';\nimport { SomeController } from './some.controller.js';\n\n@featureModule({\n  controllers: [SomeController]\n})\nexport class SomeModule {}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After binding controllers to a module, in order for Ditsmod to take these controllers into account, the module should be either appended or imported as an object that has the ",(0,o.jsx)(n.a,{href:"/developer-guides/exports-and-imports#ModuleWithParams",children:"ModuleWithParams"})," interface. The following example shows both the appending and the full import of the module (this is just to demonstrate the possibility, in practice it does not make sense to append and import at the same time):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{5-7}",children:"import { featureModule } from '@ditsmod/core';\nimport { SomeModule } from './some.module.js';\n\n@featureModule({\n  appends: [SomeModule],\n  // OR\n  imports: [{ path: 'some-prefix', module: SomeModule }]\n})\nexport class OtherModule {}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If the module is imported without the ",(0,o.jsx)(n.code,{children:"path"})," property, Ditsmod will only import ",(0,o.jsx)(n.a,{href:"/components-of-ditsmod-app/dependency-injection#providers",children:"providers"})," and ",(0,o.jsx)(n.a,{href:"/components-of-ditsmod-app/extensions/",children:"extensions"})," from it:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{5}",children:"import { featureModule } from '@ditsmod/core';\nimport { SomeModule } from './some.module.js';\n\n@featureModule({\n  imports: [SomeModule]\n})\nexport class OtherModule {}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can read more detailed information in the section ",(0,o.jsx)(n.a,{href:"/developer-guides/exports-and-imports#import-module",children:"Export, import and appends of modules"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"services",children:"Services"}),"\n",(0,o.jsxs)(n.p,{children:["While it's technically possible to get by with just one controller to handle an HTTP request, it's better to separate the extensive business logic code into separate classes so that the code can be reused as needed and is easier to test. These separate classes with business logic are usually called ",(0,o.jsx)(n.em,{children:"services"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"What services can do:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"provide configuration;"}),"\n",(0,o.jsx)(n.li,{children:"validate the request;"}),"\n",(0,o.jsx)(n.li,{children:"parsing the request body;"}),"\n",(0,o.jsx)(n.li,{children:"check access rights;"}),"\n",(0,o.jsx)(n.li,{children:"work with databases, with email;"}),"\n",(0,o.jsx)(n.li,{children:"etc."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Any TypeScript class can be a Ditsmod service, but if you want ",(0,o.jsx)(n.a,{href:"/components-of-ditsmod-app/dependency-injection",children:"DI"})," to resolve the dependency you specify in the constructors of these classes, you must specify the ",(0,o.jsx)(n.code,{children:"injectable"})," decorator before them:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{4,6}",children:"import { injectable } from '@ditsmod/core';\nimport { FirstService } from './first.service.js';\n\n@injectable()\nexport class SecondService {\n  constructor(private firstService: FirstService) {}\n\n  methodOne() {\n    this.firstService.doSomeThing();\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["It is recommended that service files end with ",(0,o.jsx)(n.code,{children:"*.service.ts"}),", and their classes end with ",(0,o.jsx)(n.code,{children:"*Service"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["As you can see, the rules for getting a class instance in the constructor are the same as in controllers: using the ",(0,o.jsx)(n.code,{children:"private"})," access modifier, we declare a property of the ",(0,o.jsx)(n.code,{children:"firstService"})," class with the ",(0,o.jsx)(n.code,{children:"FirstService"})," data type."]}),"\n",(0,o.jsxs)(n.p,{children:["To be able to use the newly created service classes, they must be passed in the metadata of the ",(0,o.jsx)(n.strong,{children:"current"})," module or controller. You can pass the services in the module metadata as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{7-8}",children:"import { featureModule } from '@ditsmod/core';\nimport { FirstService } from './first.service.js';\nimport { SecondService } from './second.service.js';\n\n@featureModule({\n  providersPerReq: [\n    FirstService,\n    SecondService\n  ],\n})\nexport class SomeModule {}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Similarly, the services is passed in the controller metadata:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{7-8}",children:"import { controller, route, Res } from '@ditsmod/core';\nimport { FirstService } from './first.service.js';\nimport { SecondService } from './second.service.js';\n\n@controller({\n  providersPerReq: [\n    FirstService,\n    SecondService\n  ],\n})\nexport class SomeController {\n  @route('GET', 'hello')\n  method1(res: Res, secondService: SecondService) {\n    res.send(secondService.sayHello());\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In the last two examples, the services is passed to the ",(0,o.jsx)(n.code,{children:"providersPerReq"})," array, but this is not the only way to pass services. For more information about the rules of working with DI, see ",(0,o.jsx)(n.a,{href:"/components-of-ditsmod-app/dependency-injection",children:"Dependency Injection"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);