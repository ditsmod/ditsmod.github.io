"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[11],{7743:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"native-modules/body-parser","title":"@ditsmod/body-parser","description":"\u0423 \u0446\u044c\u043e\u043c\u0443 \u043c\u043e\u0434\u0443\u043b\u0456 \u0437\u0440\u043e\u0431\u043b\u0435\u043d\u0430 \u0456\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0456\u044f \u0437 @ts-stack/body-parser \u0442\u0430 @ts-stack/multer. \u041f\u043e-\u0434\u0435\u0444\u043e\u043b\u0442\u0443, \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u044e\u0442\u044c\u0441\u044f \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0456 \u0444\u043e\u0440\u043c\u0430\u0442\u0438 \u0434\u0430\u043d\u0438\u0445:","source":"@site/docs/02-native-modules/01-body-parser.md","sourceDirName":"02-native-modules","slug":"/native-modules/body-parser","permalink":"/native-modules/body-parser","draft":false,"unlisted":false,"editUrl":"https://github.com/ditsmod/ditsmod/edit/main/website/docs/02-native-modules/01-body-parser.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"@ditsmod/routing","permalink":"/native-modules/routing"},"next":{"title":"@ditsmod/session-cookie","permalink":"/native-modules/session-cookie"}}');var o=n(4848),t=n(8453);const d={sidebar_position:1},i="@ditsmod/body-parser",l={},c=[{value:"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f",id:"\u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f",level:2},{value:"\u041f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",id:"\u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",level:2},{value:"\u041e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0442\u0456\u043b\u0430 \u0437\u0430\u043f\u0438\u0442\u0443",id:"\u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f-\u0442\u0456\u043b\u0430-\u0437\u0430\u043f\u0438\u0442\u0443",level:2},{value:"\u0412\u0438\u043c\u043a\u043d\u0435\u043d\u043d\u044f \u043f\u0430\u0440\u0441\u0435\u0440\u0430 \u0442\u0456\u043b\u0430 \u0437\u0430\u043f\u0438\u0442\u0443",id:"\u0432\u0438\u043c\u043a\u043d\u0435\u043d\u043d\u044f-\u043f\u0430\u0440\u0441\u0435\u0440\u0430-\u0442\u0456\u043b\u0430-\u0437\u0430\u043f\u0438\u0442\u0443",level:2},{value:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0444\u0430\u0439\u043b\u0456\u0432",id:"\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f-\u0444\u0430\u0439\u043b\u0456\u0432",level:2},{value:"MulterExtendedOptions",id:"multerextendedoptions",level:3}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"ditsmodbody-parser",children:"@ditsmod/body-parser"})}),"\n",(0,o.jsxs)(r.p,{children:["\u0423 \u0446\u044c\u043e\u043c\u0443 \u043c\u043e\u0434\u0443\u043b\u0456 \u0437\u0440\u043e\u0431\u043b\u0435\u043d\u0430 \u0456\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0456\u044f \u0437 ",(0,o.jsx)(r.a,{href:"https://github.com/ts-stack/body-parser/",children:"@ts-stack/body-parser"})," \u0442\u0430 ",(0,o.jsx)(r.a,{href:"https://github.com/ts-stack/multer",children:"@ts-stack/multer"}),". \u041f\u043e-\u0434\u0435\u0444\u043e\u043b\u0442\u0443, \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u044e\u0442\u044c\u0441\u044f \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0456 \u0444\u043e\u0440\u043c\u0430\u0442\u0438 \u0434\u0430\u043d\u0438\u0445:"]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"application/json"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"application/x-www-form-urlencoded"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"text/plain"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"application/octet-stream"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"multipart/form-data"})}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["\u0417\u0430 \u043f\u0435\u0440\u0448\u0456 \u0447\u043e\u0442\u0438\u0440\u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u0438 \u0456\u0437 \u0446\u044c\u043e\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0443 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u043f\u0430\u043a\u0435\u0442 ",(0,o.jsx)(r.code,{children:"@ts-stack/body-parser"}),", \u0437\u0430 \u043e\u0441\u0442\u0430\u043d\u0456\u0439 - ",(0,o.jsx)(r.code,{children:"@ts-stack/multer"}),", \u044f\u043a\u0438\u0439 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0444\u0430\u0439\u043b\u0456\u0432. \u0406 \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0434\u043b\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0444\u0430\u0439\u043b\u0456\u0432 \u043c\u043e\u0436\u0435 \u0441\u0438\u043b\u044c\u043d\u043e \u0432\u0456\u0434\u0440\u0456\u0437\u043d\u044f\u0442\u0438\u0441\u044c \u0432\u0456\u0434 \u0440\u043e\u0443\u0442\u0430 \u0434\u043e \u0440\u043e\u0443\u0442\u0430, \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e - \u0434\u043b\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0444\u0430\u0439\u043b\u0456\u0432 Ditsmod \u043d\u0430\u0434\u0430\u0454 \u0441\u0435\u0440\u0432\u0456\u0441, \u0449\u043e \u0441\u043f\u0440\u043e\u0449\u0443\u0454 \u0440\u043e\u0431\u043e\u0442\u0443 \u0437 \u0444\u0430\u0439\u043b\u0430\u043c\u0438, \u0437\u0430\u043c\u0456\u0441\u0442\u044c \u0433\u043e\u0442\u043e\u0432\u0438\u0445 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456\u0432."]}),"\n",(0,o.jsxs)(r.p,{children:["\u0414\u043b\u044f \u043f\u0430\u0440\u0441\u0438\u043d\u0433\u0443 \u043f\u0435\u0440\u0448\u0438\u0445 \u0447\u043e\u0442\u0438\u0440\u044c\u043e\u0445 \u0444\u043e\u0440\u043c\u0430\u0442\u0456\u0432, \u0446\u0435\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043e\u0434\u0430\u0454 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440 \u0434\u043e \u0443\u0441\u0456\u0445 \u0440\u043e\u0443\u0442\u0456\u0432, \u0449\u043e \u043c\u0430\u044e\u0442\u044c HTTP-\u043c\u0435\u0442\u043e\u0434\u0438 \u0432\u043a\u0430\u0437\u0430\u043d\u0456 \u0443 ",(0,o.jsx)(r.code,{children:"bodyParserConfig.acceptMethods"}),", \u043f\u043e-\u0434\u0435\u0444\u043e\u043b\u0442\u0443 \u0446\u0435:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"POST"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"PUT"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"PATCH"})}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["\u0413\u043e\u0442\u043e\u0432\u0438\u0439 \u043f\u0440\u0438\u043a\u043b\u0430\u0434 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f ",(0,o.jsx)(r.code,{children:"@ditsmod/body-parser"})," \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0432 ",(0,o.jsx)(r.a,{href:"https://github.com/ditsmod/ditsmod/tree/main/examples/06-body-parser",children:"\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0456\u0457 Ditsmod"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"\u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f",children:"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"npm i @ditsmod/body-parser\n"})}),"\n",(0,o.jsx)(r.h2,{id:"\u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",children:"\u041f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f"}),"\n",(0,o.jsxs)(r.p,{children:["\u0429\u043e\u0431 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e \u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0438 ",(0,o.jsx)(r.code,{children:"@ditsmod/body-parser"}),", \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0456\u043c\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0442\u0430 \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 ",(0,o.jsx)(r.code,{children:"BodyParserModule"})," \u0432 \u043a\u043e\u0440\u0435\u043d\u0435\u0432\u043e\u043c\u0443 \u043c\u043e\u0434\u0443\u043b\u0456:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"import { rootModule } from '@ditsmod/core';\nimport { BodyParserModule } from '@ditsmod/body-parser';\n\n@rootModule({\n  imports: [\n    BodyParserModule,\n    // ...\n  ],\n  exports: [BodyParserModule]\n})\nexport class AppModule {}\n"})}),"\n",(0,o.jsx)(r.p,{children:"\u0412 \u0442\u0430\u043a\u043e\u043c\u0443 \u0440\u0430\u0437\u0456 \u0431\u0443\u0434\u0443\u0442\u044c \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0434\u0435\u0444\u043e\u043b\u0442\u043d\u0456 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f. \u042f\u043a\u0449\u043e \u0436 \u0432\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u0434\u0435\u044f\u043a\u0456 \u043e\u043f\u0446\u0456\u0457, \u043c\u043e\u0436\u0435\u0442\u0435 \u0446\u0435 \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u043c \u0447\u0438\u043d\u043e\u043c:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",metastring:"{4-8,12,15}",children:"import { rootModule } from '@ditsmod/core';\nimport { BodyParserModule } from '@ditsmod/body-parser';\n\nconst moduleWithBodyParserConfig = BodyParserModule.withParams({\n  acceptMethods: ['POST'],\n  jsonOptions: { limit: '500kb', strict: false },\n  urlencodedOptions: { extended: true },\n});\n\n@rootModule({\n  imports: [\n    moduleWithBodyParserConfig,\n    // ...\n  ],\n  exports: [moduleWithBodyParserConfig],\n})\nexport class AppModule {}\n"})}),"\n",(0,o.jsx)(r.p,{children:"\u0429\u0435 \u043e\u0434\u0438\u043d \u0432\u0430\u0440\u0456\u0430\u043d\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0456 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",metastring:"{6,9-11}",children:"import { rootModule, Providers } from '@ditsmod/core';\nimport { BodyParserModule, BodyParserConfig } from '@ditsmod/body-parser';\n\n@rootModule({\n  imports: [\n    BodyParserModule,\n    // ...\n  ],\n  providersPerApp: new Providers()\n    .useValue<BodyParserConfig>(BodyParserConfig,  { acceptMethods: ['POST'] }),\n  exports: [BodyParserModule]\n})\nexport class AppModule {}\n"})}),"\n",(0,o.jsx)(r.h2,{id:"\u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f-\u0442\u0456\u043b\u0430-\u0437\u0430\u043f\u0438\u0442\u0443",children:"\u041e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0442\u0456\u043b\u0430 \u0437\u0430\u043f\u0438\u0442\u0443"}),"\n",(0,o.jsxs)(r.p,{children:["\u0412 \u0437\u0430\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0456 \u0432\u0456\u0434 \u0442\u043e\u0433\u043e, \u0447\u0438 \u043f\u0440\u0430\u0446\u044e\u0454 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440 ",(0,o.jsx)(r.a,{href:"/components-of-ditsmod-app/controllers-and-services/#what-is-a-controller",children:"\u0432 context-scoped, \u0447\u0438 injector-scoped \u0440\u0435\u0436\u0438\u043c\u0456"}),", \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0440\u043e\u0431\u043e\u0442\u0438 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0430 \u043c\u043e\u0436\u043d\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0434\u0432\u043e\u043c\u0430 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438:"]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\u042f\u043a\u0449\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440 \u043f\u0440\u0430\u0446\u044e\u0454 \u0432 \u0440\u0435\u0436\u0438\u043c\u0456 injector-scoped, \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043c\u043e\u0436\u043d\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u0442\u043e\u043a\u0435\u043d\u0430 ",(0,o.jsx)(r.code,{children:"HTTP_BODY"}),":"]}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",metastring:"{12}",children:"import { controller, Res, inject } from '@ditsmod/core';\nimport { route } from '@ditsmod/routing';\nimport { HTTP_BODY } from '@ditsmod/body-parser';\n\ninterface Body {\n  one: number;\n}\n\n@controller()\nexport class SomeController {\n  @route('POST')\n  ok(@inject(HTTP_BODY) body: Body, res: Res) {\n    res.sendJson(body);\n  }\n}\n"})}),"\n",(0,o.jsxs)(r.ol,{start:"2",children:["\n",(0,o.jsx)(r.li,{children:"\u042f\u043a\u0449\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440 \u043f\u0440\u0430\u0446\u044e\u0454 \u0432 \u0440\u0435\u0436\u0438\u043c\u0456 context-scoped, \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043c\u043e\u0436\u043d\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0437 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0443:"}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",metastring:"{7}",children:"import { controller, RequestContext } from '@ditsmod/core';\nimport { route } from '@ditsmod/routing';\n\n@controller({ scope: 'ctx' })\nexport class SomeController {\n  @route('POST')\n  ok(ctx: RequestContext) {\n    ctx.sendJson(ctx.body);\n  }\n}\n"})}),"\n",(0,o.jsx)(r.h2,{id:"\u0432\u0438\u043c\u043a\u043d\u0435\u043d\u043d\u044f-\u043f\u0430\u0440\u0441\u0435\u0440\u0430-\u0442\u0456\u043b\u0430-\u0437\u0430\u043f\u0438\u0442\u0443",children:"\u0412\u0438\u043c\u043a\u043d\u0435\u043d\u043d\u044f \u043f\u0430\u0440\u0441\u0435\u0440\u0430 \u0442\u0456\u043b\u0430 \u0437\u0430\u043f\u0438\u0442\u0443"}),"\n",(0,o.jsxs)(r.p,{children:["\u0417\u0432\u0438\u0447\u0430\u0439\u043d\u043e \u0436, \u043f\u0435\u0440\u0448\u0435, \u0449\u043e \u043c\u043e\u0436\u043d\u0430 \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u0449\u043e\u0431 \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u0432 \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u043f\u0430\u0440\u0441\u0435\u0440 \u0442\u0456\u043b\u0430 \u0437\u0430\u043f\u0438\u0442\u0443, \u0446\u0435  - \u043d\u0435 \u0456\u043c\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0443 \u0432\u0430\u0448 \u043c\u043e\u0434\u0443\u043b\u044c ",(0,o.jsx)(r.code,{children:"@ditsmod/body-parser"})," \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e \u0447\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e. \u0422\u0430\u043a\u043e\u0436 \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0438\u043c\u043a\u043d\u0443\u0442\u0438 \u043f\u0430\u0440\u0441\u0435\u0440 \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0430 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u043c \u0447\u0438\u043d\u043e\u043c:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",metastring:"{6}",children:"import { controller } from '@ditsmod/core';\nimport { BodyParserConfig } from '@ditsmod/body-parser';\n\n@controller({\n  providersPerRou: [\n    { token: BodyParserConfig, useValue: { acceptMethods: [] } }\n  ],\n})\nexport class SomeController {\n  // ...\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:["\u0422\u043e\u0431\u0442\u043e, \u0442\u0430\u043a\u0438\u043c \u0447\u0438\u043d\u043e\u043c \u0432\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0454\u0442\u0435 \u043f\u0443\u0441\u0442\u0438\u0439 \u043c\u0430\u0441\u0438\u0432, \u0437\u0430\u043c\u0456\u0441\u0442\u044c \u0434\u0435\u0444\u043e\u043b\u0442\u043d\u043e\u0433\u043e \u043c\u0430\u0441\u0438\u0432\u0443 ",(0,o.jsx)(r.code,{children:"['POST', 'PUT', 'PATCH']"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f-\u0444\u0430\u0439\u043b\u0456\u0432",children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0444\u0430\u0439\u043b\u0456\u0432"}),"\n",(0,o.jsxs)(r.p,{children:["\u0412 \u0437\u0430\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0456 \u0432\u0456\u0434 \u0442\u043e\u0433\u043e, \u0447\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440 \u043f\u0440\u0430\u0446\u044e\u0454 ",(0,o.jsx)(r.a,{href:"/components-of-ditsmod-app/controllers-and-services/#what-is-a-controller",children:"\u0432 \u0440\u0435\u0436\u0438\u043c\u0456 injector-scope, \u0447\u0438 context-scope"}),", \u0441\u043f\u043e\u0441\u0456\u0431 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u043f\u0430\u0440\u0441\u0435\u0440\u0430, \u0442\u0430 \u0441\u0438\u0433\u043d\u0430\u0442\u0443\u0440\u0438 \u0439\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0456\u0432 \u0442\u0440\u043e\u0445\u0438 \u0432\u0456\u0434\u0440\u0456\u0437\u043d\u044f\u044e\u0442\u044c\u0441\u044f:"]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\u042f\u043a\u0449\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440 \u043f\u0440\u0430\u0446\u044e\u0454 \u0432 \u0440\u0435\u0436\u0438\u043c\u0456 injector-scope, \u0447\u0435\u0440\u0435\u0437 DI \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e \u0437\u0430\u043f\u0438\u0442\u0430\u0442\u0438 ",(0,o.jsx)(r.code,{children:"MulterParser"}),", \u043f\u0456\u0441\u043b\u044f \u0447\u043e\u0433\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044c \u0439\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438:"]}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",metastring:"{10}",children:"import { createWriteStream } from 'node:fs';\nimport { controller, Res } from '@ditsmod/core';\nimport { route } from '@ditsmod/routing';\nimport { MulterParsedForm, MulterParser } from '@ditsmod/body-parser';\n\n@controller()\nexport class SomeController {\n  @route('POST', 'file-upload')\n  async downloadFile(res: Res, parse: MulterParser) {\n    const parsedForm = await parse.array('fieldName', 5);\n    await this.saveFiles(parsedForm);\n    // ...\n    res.send('ok');\n  }\n\n  protected saveFiles(parsedForm: MulterParsedForm) {\n    const promises: Promise<void>[] = [];\n    parsedForm.files.forEach((file) => {\n      const promise = new Promise<void>((resolve, reject) => {\n        const path = `uploaded-files/${file.originalName}`;\n        const writableStream = createWriteStream(path).on('error', reject).on('finish', resolve);\n        file.stream.pipe(writableStream);\n      });\n      promises.push(promise);\n    });\n\n    return Promise.all(promises);\n  }\n}\n"})}),"\n",(0,o.jsxs)(r.ol,{start:"2",children:["\n",(0,o.jsxs)(r.li,{children:["\u042f\u043a\u0449\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440 \u043f\u0440\u0430\u0446\u044e\u0454 \u0432 \u0440\u0435\u0436\u0438\u043c\u0456 context-scoped, \u0447\u0435\u0440\u0435\u0437 DI \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e \u0437\u0430\u043f\u0438\u0442\u0430\u0442\u0438 ",(0,o.jsx)(r.code,{children:"MulterCtxParser"}),", \u043f\u0456\u0441\u043b\u044f \u0447\u043e\u0433\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044c \u0439\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438:"]}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",metastring:"{8,12}",children:"import { createWriteStream } from 'node:fs';\nimport { controller, RequestContext } from '@ditsmod/core';\nimport { route } from '@ditsmod/routing';\nimport { MulterParsedForm, MulterCtxParser } from '@ditsmod/body-parser';\n\n@controller({ scope: 'ctx' })\nexport class SomeController {\n  constructor(protected parse: MulterCtxParser) {}\n\n  @route('POST', 'file-upload')\n  async downloadFile(ctx: RequestContext) {\n    const parsedForm = await this.parse.array(ctx, 'fieldName', 5);\n    await this.saveFiles(parsedForm);\n    // ...\n    ctx.rawRes.end('ok');\n  }\n\n  protected saveFiles(parsedForm: MulterParsedForm) {\n    const promises: Promise<void>[] = [];\n    parsedForm.files.forEach((file) => {\n      const promise = new Promise<void>((resolve, reject) => {\n        const path = `uploaded-files/${file.originalName}`;\n        const writableStream = createWriteStream(path).on('error', reject).on('finish', resolve);\n        file.stream.pipe(writableStream);\n      });\n      promises.push(promise);\n    });\n\n    return Promise.all(promises);\n  }\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:["\u041e\u0431'\u0454\u043a\u0442 ",(0,o.jsx)(r.code,{children:"parsedForm"}),", \u044f\u043a\u0438\u0439 \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u044e\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u0438 \u043f\u0430\u0440\u0441\u0435\u0440\u0456\u0432, \u043c\u0430\u0442\u0438\u043c\u0435 \u0447\u043e\u0442\u0438\u0440\u0438 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u0456:"]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"textFields"})," \u043c\u0456\u0441\u0442\u0438\u0442\u0438\u043c\u0435 \u043e\u0431'\u0454\u043a\u0442 \u0437\u0456 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f\u043c\u0438 \u0437 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0438\u0445 \u043f\u043e\u043b\u0456\u0432 HTML-\u0444\u043e\u0440\u043c\u0438 (\u044f\u043a\u0449\u043e \u0442\u0430\u043a\u0456 \u0454);"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"file"})," \u043c\u0456\u0441\u0442\u0438\u0442\u0438\u043c\u0435 \u043e\u0431'\u0454\u043a\u0442, \u0434\u0435 \u0437\u043e\u043a\u0440\u0435\u043c\u0430 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0442\u0438\u043c\u0435\u0442\u044c\u0441\u044f \u0444\u0430\u0439\u043b \u0443 \u0432\u0438\u0433\u043b\u044f\u0434\u0456 ",(0,o.jsx)(r.code,{children:"Readable"})," \u043f\u043e\u0442\u043e\u043a\u0443, \u044f\u043a\u0438\u0439 \u043c\u043e\u0436\u043d\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u0434\u043b\u044f \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u0444\u0430\u0439\u043b\u0443."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"files"})," \u043c\u0456\u0441\u0442\u0438\u0442\u0438\u043c\u0435 \u043c\u0430\u0441\u0438\u0432 \u043e\u0431'\u0454\u043a\u0442\u0456\u0432, \u043a\u043e\u0436\u0435\u043d \u0435\u043b\u0435\u043c\u0435\u043d\u0442 \u044f\u043a\u043e\u0433\u043e \u043c\u0430\u0454 \u0442\u0438\u043f, \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0439 \u0432 \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u043f\u0443\u043d\u043a\u0442\u0456."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"groups"})," \u043c\u0456\u0441\u0442\u0438\u0442\u0438\u043c\u0435 \u043e\u0431'\u0454\u043a\u0442, \u0434\u0435 \u043a\u043e\u0436\u0435\u043d \u043a\u043b\u044e\u0447 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u043d\u0430\u0437\u0432\u0456 \u043f\u043e\u043b\u044f \u0443 HTML-\u0444\u043e\u0440\u043c\u0456, \u0430 \u0432\u043c\u0456\u0441\u0442 \u043a\u043e\u0436\u043d\u043e\u0457 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u0456 - \u0446\u0435 \u043c\u0430\u0441\u0438\u0432 \u0444\u0430\u0439\u043b\u0456\u0432, \u0449\u043e \u043c\u0430\u0454 \u0442\u0438\u043f, \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0439 \u0443 \u0442\u0440\u0435\u0442\u044c\u043e\u043c\u0443 \u043f\u0443\u043d\u043a\u0442\u0456."]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["\u0417\u0430 \u043e\u0434\u0438\u043d \u043f\u0430\u0440\u0441\u0438\u043d\u0433 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0434\u0432\u0456 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u0456 \u0456\u0437 \u0447\u043e\u0442\u0438\u0440\u044c\u043e\u0445 - \u0446\u0435 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u0456\u0441\u0442\u044c ",(0,o.jsx)(r.code,{children:"textFields"})," \u0456 \u043e\u0434\u043d\u0430 \u0456\u0437 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u0435\u0439: ",(0,o.jsx)(r.code,{children:"file"}),", ",(0,o.jsx)(r.code,{children:"files"})," \u0430\u0431\u043e ",(0,o.jsx)(r.code,{children:"groups"}),". \u042f\u043a\u0430 \u0456\u0437 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u0435\u0439 \u0431\u0443\u0434\u0435 \u0437\u0430\u043f\u043e\u0432\u043d\u044e\u0432\u0430\u0442\u0438\u0441\u044c, \u0437\u0430\u043b\u0435\u0436\u0438\u0442\u044c \u0432\u0456\u0434 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0443 \u043f\u0430\u0440\u0441\u0435\u0440\u0430."]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["\u043c\u0435\u0442\u043e\u0434 ",(0,o.jsx)(r.code,{children:"single"})," \u043f\u0440\u0438\u0439\u043c\u0430\u0454 \u0454\u0434\u0438\u043d\u0438\u0439 \u0444\u0430\u0439\u043b \u0437 \u0443\u043a\u0430\u0437\u0430\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044f \u0444\u043e\u0440\u043c\u0438; \u0437\u0432\u0435\u0440\u043d\u0456\u0442\u044c \u0443\u0432\u0430\u0433\u0443 \u043d\u0430 \u043d\u0430\u0437\u0432\u0438 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u0435\u0439 \u043f\u0456\u0434 \u0447\u0430\u0441 \u0434\u0435\u0441\u0442\u0440\u0443\u043a\u0446\u0456\u0457 \u043e\u0431'\u0454\u043a\u0442\u0430 (\u0456\u043d\u0448\u0456 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u0456, \u0432 \u0434\u0430\u043d\u043e\u043c\u0443 \u0432\u0438\u043f\u0430\u0434\u043a\u0443, \u0454 \u043d\u0435\u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u0438\u043c\u0438):"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"const { textFields, file } = await parse.single('fieldName');\n// OR\nconst { textFields, file } = await parse.single(ctx, 'fieldName'); // For context-scoped.\n"})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["\u043c\u0435\u0442\u043e\u0434 ",(0,o.jsx)(r.code,{children:"array"})," \u043c\u043e\u0436\u0435 \u043f\u0440\u0438\u0439\u043c\u0430\u0442\u0438 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0444\u0430\u0439\u043b\u0456\u0432 \u0437 \u0443\u043a\u0430\u0437\u0430\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044f \u0444\u043e\u0440\u043c\u0438:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"const { textFields, files } = await parse.array('fieldName', 5);\n// OR\nconst { textFields, files } = await parse.array(ctx, 'fieldName', 5); // For context-scoped.\n"})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["\u043c\u0435\u0442\u043e\u0434 ",(0,o.jsx)(r.code,{children:"any"})," \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u0442\u0430\u043a\u0438\u0439 \u0441\u0430\u043c\u0438\u0439 \u0442\u0438\u043f \u0434\u0430\u043d\u0438\u0445, \u0449\u043e \u0456 \u043c\u0435\u0442\u043e\u0434 ",(0,o.jsx)(r.code,{children:"array"}),", \u0430\u043b\u0435 \u0432\u0456\u043d \u043f\u0440\u0438\u0439\u043c\u0430\u0454 \u0444\u0430\u0439\u043b\u0438 \u0437 \u0431\u0443\u0434\u044c-\u044f\u043a\u0438\u043c\u0438 \u043d\u0430\u0437\u0432\u0430\u043c\u0438 \u043f\u043e\u043b\u0456\u0432 \u0444\u043e\u0440\u043c\u0438, \u0430 \u0442\u0430\u043a\u043e\u0436 \u0432\u0456\u043d \u043d\u0435 \u043c\u0430\u0454 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432 \u0434\u043b\u044f \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0457 \u043a\u0456\u043b\u044c\u043a\u043e\u0441\u0442\u0456 \u0444\u0430\u0439\u043b\u0456\u0432 (\u0432\u043e\u043d\u0430 \u043e\u0431\u043c\u0435\u0436\u0443\u0454\u0442\u044c\u0441\u044f \u043b\u0438\u0448\u0435 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u043e\u044e \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0454\u044e, \u043f\u0440\u043e \u044f\u043a\u0443 \u0431\u0443\u0434\u0435 \u0439\u0442\u0438 \u043c\u043e\u0432\u0430 \u0437\u0433\u043e\u0434\u043e\u043c):"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"const { textFields, files } = await parse.any();\n// OR\nconst { textFields, files } = await parse.any(ctx); // For context-scoped.\n"})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["\u043c\u0435\u0442\u043e\u0434 ",(0,o.jsx)(r.code,{children:"groups"})," \u043f\u0440\u0438\u0439\u043c\u0430\u0454 \u043c\u0430\u0441\u0438\u0432\u0438 \u0444\u0430\u0439\u043b\u0456\u0432 \u0437 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u043c\u0438 \u043f\u043e\u043b\u044f\u043c\u0438 \u0444\u043e\u0440\u043c\u0438:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"const { textFields, groups } = await parse.groups([\n  { name: 'avatar', maxCount: 1 },\n  { name: 'gallery', maxCount: 8 },\n]);\n// OR\nconst { textFields, groups } = await parse.groups(ctx, [\n  { name: 'avatar', maxCount: 1 },\n  { name: 'gallery', maxCount: 8 },\n]); // For context-scoped.\n"})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["\u043c\u0435\u0442\u043e\u0434 ",(0,o.jsx)(r.code,{children:"textFields"})," \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u043e\u0431'\u0454\u043a\u0442 \u043b\u0438\u0448\u0435 \u0437 \u043f\u043e\u043b\u0456\u0432 \u0444\u043e\u0440\u043c\u0438, \u0449\u043e \u043d\u0435 \u043c\u0430\u044e\u0442\u044c ",(0,o.jsx)(r.code,{children:'type="file"'}),"; \u044f\u043a\u0449\u043e \u0443 \u0444\u043e\u0440\u043c\u0456 \u0431\u0443\u0434\u0443\u0442\u044c \u043f\u043e\u043b\u044f \u0437 \u0444\u0430\u0439\u043b\u0430\u043c\u0438, \u0446\u0435\u0439 \u043c\u0435\u0442\u043e\u0434 \u043a\u0438\u043d\u0435 \u043f\u043e\u043c\u0438\u043b\u043a\u0443:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"const textFields = await parse.textFields();\n// OR\nconst textFields = await parse.textFields(ctx); // For context-scoped.\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"multerextendedoptions",children:"MulterExtendedOptions"}),"\n",(0,o.jsxs)(r.p,{children:["\u0423 \u043c\u043e\u0434\u0443\u043b\u044f\u0445, \u0434\u0435 \u0431\u0443\u0434\u0435 \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 ",(0,o.jsx)(r.code,{children:"@ditsmod/body-parser"})," \u0434\u043b\u044f \u0444\u043e\u0440\u043c \u0437 \u0434\u0430\u043d\u0438\u043c\u0438 \u0443 \u0444\u043e\u0440\u043c\u0430\u0442\u0456 ",(0,o.jsx)(r.code,{children:"multipart/form-data"}),", \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u0438 \u0434\u043e DI \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 \u0437 \u0442\u043e\u043a\u0435\u043d\u043e\u043c ",(0,o.jsx)(r.code,{children:"MulterExtendedOptions"}),". \u0426\u0435\u0439 \u043a\u043b\u0430\u0441 \u043c\u0430\u0454 \u043d\u0430 \u0434\u0432\u0456 \u043e\u043f\u0446\u0456\u0457 \u0431\u0456\u043b\u044c\u0448\u0435, \u043d\u0456\u0436 \u0440\u0456\u0434\u043d\u0438\u0439 \u0434\u043b\u044f ",(0,o.jsx)(r.code,{children:"@ts-stack/multer"})," \u043a\u043b\u0430\u0441 ",(0,o.jsx)(r.code,{children:"MulterOptions"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"import { InputLogLevel, Status } from '@ditsmod/core';\nimport { MulterOptions } from '@ts-stack/multer';\n\nexport class MulterExtendedOptions extends MulterOptions {\n  errorStatus?: Status = Status.BAD_REQUEST;\n  errorLogLevel?: InputLogLevel = 'debug';\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:["\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0454\u043c\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u0438 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 \u0437 \u0446\u0438\u043c \u0442\u043e\u043a\u0435\u043d\u043e\u043c \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u043c\u043e\u0434\u0443\u043b\u044f, \u0449\u043e\u0431 \u0432\u0456\u043d \u0434\u0456\u044f\u0432 \u044f\u043a \u0434\u043b\u044f ",(0,o.jsx)(r.code,{children:"MulterParser"})," \u0442\u0430\u043a \u0456 \u0434\u043b\u044f ",(0,o.jsx)(r.code,{children:"MulterCtxParser"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",metastring:"{4,12}",children:"import { featureModule } from '@ditsmod/core';\nimport { BodyParserModule, MulterExtendedOptions } from '@ditsmod/body-parser';\n\nconst multerOptions: MulterExtendedOptions = { limits: { files: 20 }, errorLogLevel: 'debug' };\n\n@featureModule({\n  imports: [\n    // ...\n    BodyParserModule\n  ],\n  providersPerMod: [\n    { token: MulterExtendedOptions, useValue: multerOptions },\n  ],\n})\nexport class SomeModule {}\n"})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>i});var s=n(6540);const o={},t=s.createContext(o);function d(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);