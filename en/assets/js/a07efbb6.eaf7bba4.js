"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[166],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>h});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),d=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=d(e.components);return o.createElement(l.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(t),m=n,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return t?o.createElement(h,s(s({ref:r},p),{},{components:t})):o.createElement(h,s({ref:r},p))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<a;d++)s[d]=t[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6012:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=t(7462),n=(t(7294),t(3905));const a={sidebar_position:10},s="HttpErrorHandler",i={unversionedId:"components-of-ditsmod-app/http-error-handler",id:"components-of-ditsmod-app/http-error-handler",title:"HttpErrorHandler",description:"Any errors that occur while processing an HTTP request that you have not caught in controllers, interceptors, or services go to DefaultHttpErrorHandler. This handler is passed to the DI registry at the request level because it must have access to the HTTP request/response object in order to generate and send a response to the client.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/10-http-error-handler.md",sourceDirName:"00-components-of-ditsmod-app",slug:"/components-of-ditsmod-app/http-error-handler",permalink:"/en/components-of-ditsmod-app/http-error-handler",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/10-http-error-handler.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"LogMediator",permalink:"/en/components-of-ditsmod-app/log-mediator"},next:{title:"\u0415\u043a\u0441\u043f\u043e\u0440\u0442, \u0456\u043c\u043f\u043e\u0440\u0442, \u043f\u0440\u0438\u043a\u0440\u0456\u043f\u043b\u0435\u043d\u043d\u044f",permalink:"/en/developer-guides/exports-and-imports"}},l={},d=[],p={toc:d},c="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(c,(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"httperrorhandler"},"HttpErrorHandler"),(0,n.kt)("p",null,"Any errors that occur while processing an HTTP request that you have not caught in controllers, interceptors, or services go to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/blob/core-2.44.0/packages/core/src/services/default-http-error-handler.ts"},"DefaultHttpErrorHandler"),". This handler is passed to the DI registry at the request level because it must have access to the HTTP request/response object in order to generate and send a response to the client."),(0,n.kt)("p",null,"You can create your own error handler by creating a class that implements the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/blob/core-2.44.0/packages/core/src/services/http-error-handler.ts"},"HttpErrorHandler")," interface:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Logger,\n  Status,\n  HttpErrorHandler,\n  injectable,\n  Res,\n  NodeResponse,\n  inject,\n  NODE_RES,\n  cleanErrorTrace,\n  Req,\n} from '@ditsmod/core';\n\n@injectable()\nexport class MyHttpErrorHandler implements HttpErrorHandler {\n  constructor(\n    @inject(NODE_RES) private nodeRes: NodeResponse,\n    protected req: Req,\n    private res: Res,\n    private logger: Logger,\n  ) {}\n\n  handleError(err: Error) {\n    cleanErrorTrace(err);\n    const message = err.message;\n    this.logger.error({ note: 'This is my implementation of HttpErrorHandler', err });\n    if (!this.nodeRes.headersSent) {\n      this.addRequestIdToHeader();\n      this.res.sendJson({ error: { message } }, Status.INTERNAL_SERVER_ERROR);\n    }\n  }\n\n  protected addRequestIdToHeader() {\n    const header = 'x-requestId';\n    this.nodeRes.setHeader(header, this.req.requestId);\n  }\n}\n")),(0,n.kt)("p",null,"To add your new error handler centrally, you can do it directly in the root module:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { rootModule, HttpErrorHandler } from '@ditsmod/core';\nimport { MyHttpErrorHandler } from './my-http-error-handler.js';\n\n@rootModule({\n  // ...\n  providersPerReq: [{ token: HttpErrorHandler, useClass: MyHttpErrorHandler }],\n  exports: [HttpErrorHandler],\n})\nexport class AppModule {}\n")),(0,n.kt)("p",null,"Of course, if there are error handling specifics for a separate module or controller, you can just as easily add your new handler to its metadata without affecting other components of your application."),(0,n.kt)("p",null,"If you're adding such a handler to the metadata of a regular non-root module, you probably don't need to export it. On the other hand, if you want to write a custom error handling module and still want to export ",(0,n.kt)("inlineCode",{parentName:"p"},"HttpErrorHandler")," from it, be aware that importing it into any module will require ",(0,n.kt)("a",{parentName:"p",href:"/developer-guides/providers-collisions"},"provider collision")," to be resolved. This occurs because a default error handler has already been added to any module in your application, and when you import the module with its new error handler, the two error handlers collide. This can be easily resolved:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{8}","{8}":!0},"import { featureModule, HttpErrorHandler } from '@ditsmod/core';\nimport { ErrorHandlerModule } from './error-handler.module.js';\n\n@featureModule({\n  // ...\n  import: [ErrorHandlerModule]\n  resolvedCollisionsPerReq: [\n    [HttpErrorHandler, ErrorHandlerModule],\n  ],\n})\nexport class SomeModule {}\n")),(0,n.kt)("p",null,"As you can see, the collision is resolved in the ",(0,n.kt)("inlineCode",{parentName:"p"},"resolvedCollisionsPerReq")," array because it occurs at the request level. You pass there an array of two elements, where the first element is the token with which a collision occurred, and the second element is the module from which you want to export this provider."),(0,n.kt)("p",null,"We remind you that provider collisions can only occur when importing modules. That is, if you create your own error handler locally within a particular module, there will be no collisions."))}u.isMDXComponent=!0}}]);