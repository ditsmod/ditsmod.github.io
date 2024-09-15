"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[436],{6546:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=o(4848),n=o(8453);const s={sidebar_position:10},a="HttpErrorHandler",d={id:"components-of-ditsmod-app/http-error-handler",title:"HttpErrorHandler",description:"Any errors that occur while processing an HTTP request that you have not caught in controllers, interceptors, or services go to DefaultHttpErrorHandler. This handler is passed to the DI registry at the route level.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/10-http-error-handler.md",sourceDirName:"00-components-of-ditsmod-app",slug:"/components-of-ditsmod-app/http-error-handler",permalink:"/en/components-of-ditsmod-app/http-error-handler",draft:!1,unlisted:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/10-http-error-handler.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"LogMediator",permalink:"/en/components-of-ditsmod-app/log-mediator"},next:{title:"ModuleManager",permalink:"/en/components-of-ditsmod-app/module-manager"}},i={},l=[];function c(e){const r={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"httperrorhandler",children:"HttpErrorHandler"})}),"\n",(0,t.jsxs)(r.p,{children:["Any errors that occur while processing an HTTP request that you have not caught in controllers, interceptors, or services go to ",(0,t.jsx)(r.a,{href:"https://github.com/ditsmod/ditsmod/blob/core-2.54.0/packages/core/src/error/default-http-error-handler.ts",children:"DefaultHttpErrorHandler"}),". This handler is passed to the DI registry at the route level."]}),"\n",(0,t.jsxs)(r.p,{children:["You can create your own error handler by creating a class that implements the ",(0,t.jsx)(r.a,{href:"https://github.com/ditsmod/ditsmod/blob/core-2.54.0/packages/core/src/error/http-error-handler.ts",children:"HttpErrorHandler"})," interface:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import { Logger, Status, HttpErrorHandler, injectable, Req, RequestContext, cleanErrorTrace } from '@ditsmod/core';\nimport { randomUUID } from 'node:crypto';\n\n@injectable()\nexport class MyHttpErrorHandler implements HttpErrorHandler {\n  constructor(protected logger: Logger) {}\n\n  handleError(err: Error, ctx: RequestContext) {\n    cleanErrorTrace(err);\n    const message = err.message;\n    this.logger.log('error', { err, note: 'This is my implementation of HttpErrorHandler' });\n    if (!ctx.nodeRes.headersSent) {\n      const error = { error: { message } };\n      const headers = { 'x-requestId': randomUUID() };\n      ctx.sendJson(error, Status.INTERNAL_SERVER_ERROR, headers);\n    }\n  }\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"To add your new error handler centrally, you can do it directly in the root module:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import { rootModule, HttpErrorHandler } from '@ditsmod/core';\nimport { MyHttpErrorHandler } from './my-http-error-handler.js';\n\n@rootModule({\n  // ...\n  providersPerRou: [{ token: HttpErrorHandler, useClass: MyHttpErrorHandler }],\n  exports: [HttpErrorHandler],\n})\nexport class AppModule {}\n"})}),"\n",(0,t.jsx)(r.p,{children:"Of course, if there are error handling specifics for a separate module or controller, you can just as easily add your new handler to its metadata without affecting other components of your application."}),"\n",(0,t.jsxs)(r.p,{children:["If you add such a handler to the metadata of a non-root module, you probably don't need to export it. On the other hand, if you want to write a custom error handling module and still want to export ",(0,t.jsx)(r.code,{children:"HttpErrorHandler"})," from it, be aware that importing it into any module will require ",(0,t.jsx)(r.a,{href:"/developer-guides/providers-collisions",children:"provider collisions"})," to be resolved. This occurs because a default error handler has already been added to each module in your application, and when you import the module with its new error handler, the two error handlers collide. This can be easily resolved:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:"{8}",children:"import { featureModule, HttpErrorHandler } from '@ditsmod/core';\nimport { ErrorHandlerModule } from './error-handler.module.js';\n\n@featureModule({\n  // ...\n  import: [ErrorHandlerModule]\n  resolvedCollisionsPerRou: [\n    [HttpErrorHandler, ErrorHandlerModule],\n  ],\n})\nexport class SomeModule {}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["As you can see, the collision is resolved in the ",(0,t.jsx)(r.code,{children:"resolvedCollisionsPerRou"})," array because it occurs at the route level. You pass there an array of two elements, where the first element is the token with which a collision occurred, and the second element is the module from which you want to export this provider."]}),"\n",(0,t.jsx)(r.p,{children:"We remind you that provider collisions can only occur when importing modules. That is, if you create your own error handler locally within a particular module, there will be no collisions."})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,r,o)=>{o.d(r,{R:()=>a,x:()=>d});var t=o(6540);const n={},s=t.createContext(n);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);