"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[959],{9294:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(4848),n=t(8453);const s={sidebar_position:10},d="HttpErrorHandler",a={id:"components-of-ditsmod-app/http-error-handler",title:"HttpErrorHandler",description:"\u0423\u0441\u0456 \u043f\u043e\u043c\u0438\u043b\u043a\u0438, \u044f\u043a\u0456 \u0432\u0438\u043d\u0438\u043a\u0430\u044e\u0442\u044c \u043f\u0456\u0434 \u0447\u0430\u0441 \u043e\u0431\u0440\u043e\u0431\u043a\u0438 HTTP-\u0437\u0430\u043f\u0438\u0442\u0443, \u0456 \u044f\u043a\u0456 \u0432\u0438 \u043d\u0435 \u0437\u043b\u043e\u0432\u0438\u043b\u0438 \u0443 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0430\u0445, \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0430\u0445, \u0430\u0431\u043e \u0441\u0435\u0440\u0432\u0456\u0441\u0430\u0445, \u043f\u043e\u0442\u0440\u0430\u043f\u043b\u044f\u044e\u0442\u044c \u0434\u043e DefaultHttpErrorHandler. \u0426\u0435\u0439 \u043e\u0431\u0440\u043e\u0431\u043d\u0438\u043a \u043f\u0435\u0440\u0435\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0434\u043e \u0440\u0435\u0454\u0441\u0442\u0440\u0443 DI \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u0437\u0430\u043f\u0438\u0442\u0443, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0432\u0456\u043d \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u043c\u0430\u0442\u0438 \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u043e\u0431'\u0454\u043a\u0442\u0430 HTTP-\u0437\u0430\u043f\u0438\u0442\u0443/\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456 \u0434\u043b\u044f \u043c\u043e\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u0456 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043a\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456 \u043a\u043b\u0456\u0454\u043d\u0442\u0443.",source:"@site/docs/00-components-of-ditsmod-app/10-http-error-handler.md",sourceDirName:"00-components-of-ditsmod-app",slug:"/components-of-ditsmod-app/http-error-handler",permalink:"/components-of-ditsmod-app/http-error-handler",draft:!1,unlisted:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/docs/00-components-of-ditsmod-app/10-http-error-handler.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"LogMediator",permalink:"/components-of-ditsmod-app/log-mediator"},next:{title:"ModuleManager",permalink:"/components-of-ditsmod-app/module-manager"}},i={},l=[];function p(r){const e={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,n.R)(),...r.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"httperrorhandler",children:"HttpErrorHandler"})}),"\n",(0,o.jsxs)(e.p,{children:["\u0423\u0441\u0456 \u043f\u043e\u043c\u0438\u043b\u043a\u0438, \u044f\u043a\u0456 \u0432\u0438\u043d\u0438\u043a\u0430\u044e\u0442\u044c \u043f\u0456\u0434 \u0447\u0430\u0441 \u043e\u0431\u0440\u043e\u0431\u043a\u0438 HTTP-\u0437\u0430\u043f\u0438\u0442\u0443, \u0456 \u044f\u043a\u0456 \u0432\u0438 \u043d\u0435 \u0437\u043b\u043e\u0432\u0438\u043b\u0438 \u0443 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0430\u0445, \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0430\u0445, \u0430\u0431\u043e \u0441\u0435\u0440\u0432\u0456\u0441\u0430\u0445, \u043f\u043e\u0442\u0440\u0430\u043f\u043b\u044f\u044e\u0442\u044c \u0434\u043e ",(0,o.jsx)(e.a,{href:"https://github.com/ditsmod/ditsmod/blob/core-2.54.0/packages/core/src/error/default-http-error-handler.ts",children:"DefaultHttpErrorHandler"}),". \u0426\u0435\u0439 \u043e\u0431\u0440\u043e\u0431\u043d\u0438\u043a \u043f\u0435\u0440\u0435\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0434\u043e \u0440\u0435\u0454\u0441\u0442\u0440\u0443 DI \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u0437\u0430\u043f\u0438\u0442\u0443, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0432\u0456\u043d \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u043c\u0430\u0442\u0438 \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u043e\u0431'\u0454\u043a\u0442\u0430 HTTP-\u0437\u0430\u043f\u0438\u0442\u0443/\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456 \u0434\u043b\u044f \u043c\u043e\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u0456 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043a\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456 \u043a\u043b\u0456\u0454\u043d\u0442\u0443."]}),"\n",(0,o.jsxs)(e.p,{children:["\u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0441\u0432\u0456\u0439 \u0432\u043b\u0430\u0441\u043d\u0438\u0439 \u043e\u0431\u0440\u043e\u0431\u043d\u0438\u043a \u043f\u043e\u043c\u0438\u043b\u043e\u043a, \u0434\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u0432\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043a\u043b\u0430\u0441, \u0449\u043e \u0432\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0443\u0454 \u0456\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,o.jsx)(e.a,{href:"https://github.com/ditsmod/ditsmod/blob/core-2.54.0/packages/core/src/error/http-error-handler.ts",children:"HttpErrorHandler"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import { Logger, Status, HttpErrorHandler, injectable, Req, RequestContext, cleanErrorTrace } from '@ditsmod/core';\n\n@injectable()\nexport class MyHttpErrorHandler implements HttpErrorHandler {\n  constructor(\n    protected req: Req,\n    private logger: Logger,\n  ) {}\n\n  handleError(err: Error, ctx: RequestContext) {\n    cleanErrorTrace(err);\n    const message = err.message;\n    this.logger.log('error', { note: 'This is my implementation of HttpErrorHandler', err });\n    if (!ctx.nodeRes.headersSent) {\n      const error = { error: { message } };\n      const headers = { 'x-requestId': this.req.requestId };\n      ctx.sendJson(error, Status.INTERNAL_SERVER_ERROR, headers);\n    }\n  }\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u0429\u043e\u0431 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u0456\u0437\u043e\u0432\u0430\u043d\u043e \u0434\u043e\u0434\u0430\u0442\u0438 \u0432\u0430\u0448 \u043d\u043e\u0432\u0438\u0439 \u043e\u0431\u0440\u043e\u0431\u043d\u0438\u043a \u043f\u043e\u043c\u0438\u043b\u043e\u043a, \u043c\u043e\u0436\u0435\u0442\u0435 \u0446\u0435 \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u043f\u0440\u044f\u043c\u043e \u0443 \u043a\u043e\u0440\u0435\u043d\u0435\u0432\u043e\u043c\u0443 \u043c\u043e\u0434\u0443\u043b\u0456:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import { rootModule, HttpErrorHandler } from '@ditsmod/core';\nimport { MyHttpErrorHandler } from './my-http-error-handler.js';\n\n@rootModule({\n  // ...\n  providersPerReq: [{ token: HttpErrorHandler, useClass: MyHttpErrorHandler }],\n  exports: [HttpErrorHandler],\n})\nexport class AppModule {}\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u0417\u0432\u0438\u0447\u0430\u0439\u043d\u043e \u0436, \u044f\u043a\u0449\u043e \u0454 \u0441\u043f\u0435\u0446\u0438\u0444\u0456\u043a\u0430 \u043e\u0431\u0440\u043e\u0431\u043a\u0438 \u043f\u043e\u043c\u0438\u043b\u043e\u043a \u0434\u043b\u044f \u043e\u043a\u0440\u0435\u043c\u043e-\u0432\u0437\u044f\u0442\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f, \u0447\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0430, \u0432\u0438 \u0442\u043e\u0447\u043d\u043e \u0442\u0430\u043a \u0441\u0430\u043c\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0434\u0430\u0442\u0438 \u0432\u0430\u0448 \u043d\u043e\u0432\u0438\u0439 \u043e\u0431\u0440\u043e\u0431\u043d\u0438\u043a \u0442\u0456\u043b\u044c\u043a\u0438 \u0443 \u0457\u0445\u043d\u0456 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u0456, \u0431\u0435\u0437 \u0432\u043f\u043b\u0438\u0432\u0443 \u043d\u0430 \u0456\u043d\u0448\u0456 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0438 \u0432\u0430\u0448\u043e\u0433\u043e \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443."}),"\n",(0,o.jsxs)(e.p,{children:["\u042f\u043a\u0449\u043e \u0432\u0438 \u0434\u043e\u0434\u0430\u0454\u0442\u0435 \u0442\u0430\u043a\u0438\u0439 \u043e\u0431\u0440\u043e\u0431\u043d\u0438\u043a \u0443 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u0456 \u043d\u0435\u043a\u043e\u0440\u0435\u043d\u0435\u0432\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f, \u0442\u043e \u043d\u0430\u0432\u0440\u044f\u0434 \u0447\u0438 \u0432\u0430\u043c \u0442\u0440\u0435\u0431\u0430 \u0439\u043e\u0433\u043e \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438. \u0417 \u0456\u043d\u0448\u043e\u0433\u043e \u0431\u043e\u043a\u0443, \u044f\u043a\u0449\u043e \u0432\u0438 \u0437\u0430\u0445\u043e\u0447\u0435\u0442\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u0438 \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0438\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043b\u044f \u043e\u0431\u0440\u043e\u0431\u043a\u0438 \u043f\u043e\u043c\u0438\u043b\u043e\u043a \u0456 \u0437\u0430\u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0441\u0435-\u0442\u0430\u043a\u0438 \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437 \u043d\u044c\u043e\u0433\u043e ",(0,o.jsx)(e.code,{children:"HttpErrorHandler"}),", \u0442\u043e \u043c\u0430\u0439\u0442\u0435 \u043d\u0430 \u0443\u0432\u0430\u0437\u0456, \u0449\u043e \u0456\u043c\u043f\u043e\u0440\u0442 \u0439\u043e\u0433\u043e \u0443 \u0431\u0443\u0434\u044c-\u044f\u043a\u0438\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0432\u0438\u043c\u0430\u0433\u0430\u0442\u0438\u043c\u0435 \u0432\u0438\u0440\u0456\u0448\u0435\u043d\u043d\u044f ",(0,o.jsx)(e.a,{href:"/developer-guides/providers-collisions",children:"\u043a\u043e\u043b\u0456\u0437\u0456\u0457 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0456\u0432"}),". \u0426\u044f \u043e\u0441\u043e\u0431\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u0432\u0438\u043d\u0438\u043a\u0430\u0454 \u0447\u0435\u0440\u0435\u0437 \u0442\u0435, \u0449\u043e \u0434\u0435\u0444\u043e\u043b\u0442\u043d\u0438\u0439 \u043e\u0431\u0440\u043e\u0431\u043d\u0438\u043a \u043f\u043e\u043c\u0438\u043b\u043e\u043a \u0432\u0436\u0435 \u0434\u043e\u0434\u0430\u043d\u043e \u0443 \u0431\u0443\u0434\u044c-\u044f\u043a\u0438\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0432\u0430\u0448\u043e\u0433\u043e \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443, \u0456 \u043f\u0440\u0438 \u0456\u043c\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u043d\u043d\u0456 \u043c\u043e\u0434\u0443\u043b\u044f, \u0437\u0456 \u0441\u0432\u043e\u0457\u043c \u043d\u043e\u0432\u0438\u043c \u043e\u0431\u0440\u043e\u0431\u043d\u0438\u043a\u043e\u043c \u043f\u043e\u043c\u0438\u043b\u043e\u043a, \u0432\u0438\u043d\u0438\u043a\u0430\u0454 \u043a\u043e\u043b\u0456\u0437\u0456\u044f \u0434\u0432\u043e\u0445 \u043e\u0431\u0440\u043e\u0431\u043d\u0438\u043a\u0456\u0432 \u043f\u043e\u043c\u0438\u043b\u043e\u043a. \u0407\u0457 \u043c\u043e\u0436\u043d\u0430 \u0432\u0438\u0440\u0456\u0448\u0438\u0442\u0438 \u0434\u043e\u0441\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u043e:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",metastring:"{8}",children:"import { featureModule, HttpErrorHandler } from '@ditsmod/core';\nimport { ErrorHandlerModule } from './error-handler.module.js';\n\n@featureModule({\n  // ...\n  import: [ErrorHandlerModule]\n  resolvedCollisionsPerReq: [\n    [HttpErrorHandler, ErrorHandlerModule],\n  ],\n})\nexport class SomeModule {}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u042f\u043a \u0431\u0430\u0447\u0438\u0442\u0435, \u043a\u043e\u043b\u0456\u0437\u0456\u044f \u0432\u0438\u0440\u0456\u0448\u0443\u0454\u0442\u044c\u0441\u044f \u0432 \u043c\u0430\u0441\u0438\u0432\u0456 ",(0,o.jsx)(e.code,{children:"resolvedCollisionsPerReq"}),", \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0432\u043e\u043d\u0430 \u0432\u0456\u0434\u0431\u0443\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u0437\u0430\u043f\u0438\u0442\u0443. \u0422\u0443\u0434\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0454\u0442\u0435 \u043c\u0430\u0441\u0438\u0432 \u0437 \u0434\u0432\u043e\u0445 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0456\u0432, \u0434\u0435 \u043d\u0430 \u043f\u0435\u0440\u0448\u043e\u043c\u0443 \u043c\u0456\u0441\u0446\u0456 \u0439\u0434\u0435 \u0442\u043e\u043a\u0435\u043d, \u0437 \u044f\u043a\u0438\u043c \u0432\u0456\u0434\u0431\u0443\u043b\u0430\u0441\u044c \u043a\u043e\u043b\u0456\u0437\u0456\u044f, \u0430 \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u043c\u0456\u0441\u0446\u0456 - \u043c\u043e\u0434\u0443\u043b\u044c, \u0437 \u044f\u043a\u043e\u0433\u043e \u0432\u0438 \u0445\u043e\u0447\u0435\u0442\u0435 \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0434\u0430\u043d\u0438\u0439 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440."]}),"\n",(0,o.jsx)(e.p,{children:"\u041d\u0430\u0433\u0430\u0434\u0430\u0454\u043c\u043e, \u0449\u043e \u043a\u043e\u043b\u0456\u0437\u0456\u0457 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0456\u0432 \u043c\u043e\u0436\u0443\u0442\u044c \u0432\u0438\u043d\u0438\u043a\u0430\u0442\u0438 \u0432\u0438\u043a\u043b\u044e\u0447\u043d\u043e \u043f\u0456\u0434 \u0447\u0430\u0441 \u0456\u043c\u043f\u043e\u0440\u0442\u0443 \u043c\u043e\u0434\u0443\u043b\u0456\u0432. \u0422\u043e\u0431\u0442\u043e \u044f\u043a\u0449\u043e \u0432\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e \u0443 \u043c\u0435\u0436\u0430\u0445 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0435 \u0432\u043b\u0430\u0441\u043d\u0438\u0439 \u043e\u0431\u0440\u043e\u0431\u043d\u0438\u043a \u043f\u043e\u043c\u0438\u043b\u043e\u043a, \u0442\u043e \u043a\u043e\u043b\u0456\u0437\u0456\u0439 \u043d\u0435 \u0431\u0443\u0434\u0435."})]})}function c(r={}){const{wrapper:e}={...(0,n.R)(),...r.components};return e?(0,o.jsx)(e,{...r,children:(0,o.jsx)(p,{...r})}):p(r)}},8453:(r,e,t)=>{t.d(e,{R:()=>d,x:()=>a});var o=t(6540);const n={},s=o.createContext(n);function d(r){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function a(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(n):r.components||n:d(r.components),o.createElement(s.Provider,{value:e},r.children)}}}]);