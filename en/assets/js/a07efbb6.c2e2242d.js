"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[436],{9091:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=t(4848),n=t(5680);const s={sidebar_position:10},a="HttpErrorHandler",i={id:"components-of-ditsmod-app/http-error-handler",title:"HttpErrorHandler",description:"Any errors that occur while processing an HTTP request that you have not caught in controllers, interceptors, or services go to DefaultHttpErrorHandler. This handler is passed to the DI registry at the request level because it must have access to the HTTP request/response object to be able to send a response to the client.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/10-http-error-handler.md",sourceDirName:"00-components-of-ditsmod-app",slug:"/components-of-ditsmod-app/http-error-handler",permalink:"/en/components-of-ditsmod-app/http-error-handler",draft:!1,unlisted:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/10-http-error-handler.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"LogMediator",permalink:"/en/components-of-ditsmod-app/log-mediator"},next:{title:"ModuleManager",permalink:"/en/components-of-ditsmod-app/module-manager"}},l={},d=[];function c(e){const r={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.RP)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"httperrorhandler",children:"HttpErrorHandler"}),"\n",(0,o.jsxs)(r.p,{children:["Any errors that occur while processing an HTTP request that you have not caught in controllers, interceptors, or services go to ",(0,o.jsx)(r.a,{href:"https://github.com/ditsmod/ditsmod/blob/core-2.50.0/packages/core/src/services/default-http-error-handler.ts",children:"DefaultHttpErrorHandler"}),". This handler is passed to the DI registry at the request level because it must have access to the HTTP request/response object to be able to send a response to the client."]}),"\n",(0,o.jsxs)(r.p,{children:["You can create your own error handler by creating a class that implements the ",(0,o.jsx)(r.a,{href:"https://github.com/ditsmod/ditsmod/blob/core-2.50.0/packages/core/src/services/http-error-handler.ts",children:"HttpErrorHandler"})," interface:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"import { Logger, Status, HttpErrorHandler, injectable, Req, RequestContext, cleanErrorTrace } from '@ditsmod/core';\n\n@injectable()\nexport class MyHttpErrorHandler implements HttpErrorHandler {\n  constructor(\n    protected req: Req,\n    private logger: Logger,\n  ) {}\n\n  handleError(err: Error, { nodeRes }: RequestContext) {\n    cleanErrorTrace(err);\n    const message = err.message;\n    this.logger.log('error', { note: 'This is my implementation of HttpErrorHandler', err });\n    if (!nodeRes.headersSent) {\n      nodeRes.statusCode = Status.INTERNAL_SERVER_ERROR;\n      nodeRes.setHeader('x-requestId', this.req.requestId);\n      nodeRes.setHeader('Content-Type', 'application/json; charset=utf-8');\n      nodeRes.end(JSON.stringify({ error: { message } }));\n    }\n  }\n}\n"})}),"\n",(0,o.jsx)(r.p,{children:"To add your new error handler centrally, you can do it directly in the root module:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"import { rootModule, HttpErrorHandler } from '@ditsmod/core';\nimport { MyHttpErrorHandler } from './my-http-error-handler.js';\n\n@rootModule({\n  // ...\n  providersPerReq: [{ token: HttpErrorHandler, useClass: MyHttpErrorHandler }],\n  exports: [HttpErrorHandler],\n})\nexport class AppModule {}\n"})}),"\n",(0,o.jsx)(r.p,{children:"Of course, if there are error handling specifics for a separate module or controller, you can just as easily add your new handler to its metadata without affecting other components of your application."}),"\n",(0,o.jsxs)(r.p,{children:["If you add such a handler to the metadata of a non-root module, you probably don't need to export it. On the other hand, if you want to write a custom error handling module and still want to export ",(0,o.jsx)(r.code,{children:"HttpErrorHandler"})," from it, be aware that importing it into any module will require ",(0,o.jsx)(r.a,{href:"/developer-guides/providers-collisions",children:"provider collisions"})," to be resolved. This occurs because a default error handler has already been added to any module in your application, and when you import the module with its new error handler, the two error handlers collide. This can be easily resolved:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",metastring:"{8}",children:"import { featureModule, HttpErrorHandler } from '@ditsmod/core';\nimport { ErrorHandlerModule } from './error-handler.module.js';\n\n@featureModule({\n  // ...\n  import: [ErrorHandlerModule]\n  resolvedCollisionsPerReq: [\n    [HttpErrorHandler, ErrorHandlerModule],\n  ],\n})\nexport class SomeModule {}\n"})}),"\n",(0,o.jsxs)(r.p,{children:["As you can see, the collision is resolved in the ",(0,o.jsx)(r.code,{children:"resolvedCollisionsPerReq"})," array because it occurs at the request level. You pass there an array of two elements, where the first element is the token with which a collision occurred, and the second element is the module from which you want to export this provider."]}),"\n",(0,o.jsx)(r.p,{children:"We remind you that provider collisions can only occur when importing modules. That is, if you create your own error handler locally within a particular module, there will be no collisions."})]})}function p(e={}){const{wrapper:r}={...(0,n.RP)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},5680:(e,r,t)=>{t.d(r,{RP:()=>d});var o=t(6540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),d=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(t),h=n,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||s;return t?o.createElement(m,a(a({ref:r},p),{},{components:t})):o.createElement(m,a({ref:r},p))}));p.displayName="MDXCreateElement"}}]);