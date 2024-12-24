"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[436],{3429:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"components-of-ditsmod-app/http-error-handler","title":"HttpErrorHandler","description":"CustomError","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/10-http-error-handler.md","sourceDirName":"00-components-of-ditsmod-app","slug":"/components-of-ditsmod-app/http-error-handler","permalink":"/en/components-of-ditsmod-app/http-error-handler","draft":false,"unlisted":false,"editUrl":"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/10-http-error-handler.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"HttpErrorHandler","sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"LogMediator","permalink":"/en/components-of-ditsmod-app/log-mediator"},"next":{"title":"ModuleManager","permalink":"/en/components-of-ditsmod-app/module-manager"}}');var n=t(4848),s=t(8453);const a={title:"HttpErrorHandler",sidebar_position:10},d="CustomError and HttpErrorHandler",i={},l=[{value:"CustomError",id:"customerror",level:2},{value:"HttpErrorHandler",id:"httperrorhandler",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"customerror-and-httperrorhandler",children:"CustomError and HttpErrorHandler"})}),"\n",(0,n.jsx)(r.h2,{id:"customerror",children:"CustomError"}),"\n",(0,n.jsxs)(r.p,{children:["Ditsmod provides two built-in classes - ",(0,n.jsx)(r.code,{children:"CustomError"})," and ",(0,n.jsx)(r.code,{children:"HttpErrorHandler"})," - that can be used to throw and catch errors, respectively."]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"CustomError"})," class can be composed to generate any error:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:"{9}",children:"import { CustomError, Status } from '@ditsmod/core';\n\n// ...\n\nif (someCondition) {\n  const msg1 = 'message for client';\n  const msg2 = 'message for logger';\n\n  throw new CustomError({ msg1, msg2, level: 'debug', status: Status.BAD_REQUEST });\n}\n"})}),"\n",(0,n.jsxs)(r.p,{children:["That is, in ",(0,n.jsx)(r.code,{children:"CustomError"})," arguments it is possible to transmit two types of messages:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"msg1"})," - message to be sent to the client that created the current HTTP request;"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"msg2"})," - message for the logger."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["In general, the constructor of the ",(0,n.jsx)(r.code,{children:"CustomError"})," class takes an object with the following interface as the first argument:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"interface ErrorOpts {\n  id?: string | number;\n  /**\n   * Message to send it to a client.\n   */\n  msg1?: string = 'Internal server error';\n  /**\n   * A message to send it to a logger.\n   */\n  msg2?: string = '';\n  /**\n   * Arguments for error handler to send it to a client.\n   */\n  args1?: any;\n  /**\n   * Arguments for error handler to send it to a logger.\n   */\n  args2?: any;\n  /**\n   * Log level. By default - `warn`.\n   */\n  level?: InputLogLevel = 'warn';\n  /**\n   * HTTP status.\n   */\n  status?: Status = Status.BAD_REQUEST;\n  /**\n   * The parameters that came with the HTTP request.\n   */\n  params?: any;\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:"The `CustomError' class constructor can accept cause error as the second argument, if there is one."}),"\n",(0,n.jsx)(r.h2,{id:"httperrorhandler",children:"HttpErrorHandler"}),"\n",(0,n.jsxs)(r.p,{children:["Any errors that occur while processing an HTTP request that you have not caught in controllers, interceptors, or services go to ",(0,n.jsx)(r.a,{href:"https://github.com/ditsmod/ditsmod/blob/core-2.54.0/packages/core/src/error/default-http-error-handler.ts",children:"DefaultHttpErrorHandler"}),". This handler is passed to the DI registry at the route level."]}),"\n",(0,n.jsxs)(r.p,{children:["You can create your own error handler by creating a class that implements the ",(0,n.jsx)(r.a,{href:"https://github.com/ditsmod/ditsmod/blob/core-2.54.0/packages/core/src/error/http-error-handler.ts",children:"HttpErrorHandler"})," interface:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import { HttpErrorHandler, injectable, isCustomError, Logger, RequestContext, Status } from '@ditsmod/core';\nimport { randomUUID } from 'node:crypto';\n\n@injectable()\nexport class MyHttpErrorHandler implements HttpErrorHandler {\n  constructor(protected logger: Logger) {}\n\n  async handleError(err: Error, ctx: RequestContext) {\n    const requestId = randomUUID();\n    const errObj = { requestId, err, note: 'This is my implementation of HttpErrorHandler' };\n    if (isCustomError(err)) {\n      const { level, status } = err.info;\n      this.logger.log(level || 'debug', errObj);\n      this.sendError(err.message, ctx, requestId, status);\n    } else {\n      this.logger.log('error', errObj);\n      const msg = err.message || 'Internal server error';\n      const status = (err as any).status || Status.INTERNAL_SERVER_ERROR;\n      this.sendError(msg, ctx, requestId, status);\n    }\n  }\n\n  protected sendError(error: string, ctx: RequestContext, requestId: string, status?: Status) {\n    if (!ctx.rawRes.headersSent) {\n      this.addRequestIdToHeader(requestId, ctx);\n      ctx.sendJson({ error }, status);\n    }\n  }\n\n  protected addRequestIdToHeader(requestId: string, ctx: RequestContext) {\n    ctx.rawRes.setHeader('x-requestId', requestId);\n  }\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:"To add your new error handler centrally, you can do it directly in the root module:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:"{6-7}",children:"import { rootModule, HttpErrorHandler } from '@ditsmod/core';\nimport { MyHttpErrorHandler } from './my-http-error-handler.js';\n\n@rootModule({\n  // ...\n  providersPerRou: [{ token: HttpErrorHandler, useClass: MyHttpErrorHandler }],\n  exports: [HttpErrorHandler],\n})\nexport class AppModule {}\n"})}),"\n",(0,n.jsx)(r.p,{children:"Of course, if there are error handling specifics for a separate module or controller, you can just as easily add your new handler to its metadata without affecting other components of your application."}),"\n",(0,n.jsxs)(r.p,{children:["If you add such a handler to the metadata of a feature module, you probably don't need to export it. On the other hand, if you want to write a custom error handling module and still want to export ",(0,n.jsx)(r.code,{children:"HttpErrorHandler"})," from it, be aware that importing it into any module will require ",(0,n.jsx)(r.a,{href:"/developer-guides/providers-collisions",children:"provider collisions"})," to be resolved. This occurs because a default error handler has already been added to each module in your application, and when you import the module with its new error handler, the two error handlers collide. This can be easily resolved:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:"{8}",children:"import { featureModule, HttpErrorHandler } from '@ditsmod/core';\nimport { ErrorHandlerModule } from './error-handler.module.js';\n\n@featureModule({\n  // ...\n  import: [ErrorHandlerModule]\n  resolvedCollisionsPerRou: [\n    [HttpErrorHandler, ErrorHandlerModule],\n  ],\n})\nexport class SomeModule {}\n"})}),"\n",(0,n.jsxs)(r.p,{children:["As you can see, the collision is resolved in the ",(0,n.jsx)(r.code,{children:"resolvedCollisionsPerRou"})," array because it occurs at the route level. You pass there an array of two elements, where the first element is the token with which a collision occurred, and the second element is the module from which you want to export this provider."]}),"\n",(0,n.jsx)(r.p,{children:"We remind you that provider collisions can only occur when importing modules. That is, if you create your own error handler locally within a particular module, there will be no collisions."})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>d});var o=t(6540);const n={},s=o.createContext(n);function a(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);