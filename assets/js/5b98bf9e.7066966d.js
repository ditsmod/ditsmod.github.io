"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[203],{9852:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"native-modules/openapi","title":"@ditsmod/openapi","description":"\u0429\u043e\u0431 \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u044e \u0437\u0430 \u0441\u043f\u0435\u0446\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u0454\u044e OpenAPI, \u043c\u043e\u0436\u043d\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u043c\u043e\u0434\u0443\u043b\u044c @ditsmod/openapi.","source":"@site/docs/02-native-modules/20-openapi.md","sourceDirName":"02-native-modules","slug":"/native-modules/openapi","permalink":"/native-modules/openapi","draft":false,"unlisted":false,"editUrl":"https://github.com/ditsmod/ditsmod/edit/main/website/docs/02-native-modules/20-openapi.md","tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"sidebar_position":20},"sidebar":"tutorialSidebar","previous":{"title":"@ditsmod/i18n","permalink":"/native-modules/i18n"},"next":{"title":"@ditsmod/openapi-validation","permalink":"/native-modules/openapi-validation"}}');var s=o(4848),t=o(8453);const i={sidebar_position:20},a="@ditsmod/openapi",d={},c=[{value:"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0442\u0430 \u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",id:"\u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f-\u0442\u0430-\u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",level:2},{value:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u0457",id:"\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u0457",level:2},{value:"\u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432 Operation Object",id:"\u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432-operation-object",level:2},{value:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f TypeScript-\u043c\u043e\u0434\u0435\u043b\u0435\u0439",id:"\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f-typescript-\u043c\u043e\u0434\u0435\u043b\u0435\u0439",level:2},{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f TypeScript-\u043c\u043e\u0434\u0435\u043b\u0435\u0439",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f-typescript-\u043c\u043e\u0434\u0435\u043b\u0435\u0439",level:2},{value:"requestBody \u0442\u0430 responses content",id:"requestbody-\u0442\u0430-responses-content",level:3},{value:"OpenAPI \u043e\u043f\u0446\u0456\u0457 \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u043c\u043e\u0434\u0443\u043b\u044f",id:"openapi-\u043e\u043f\u0446\u0456\u0457-\u043d\u0430-\u0440\u0456\u0432\u043d\u0456-\u043c\u043e\u0434\u0443\u043b\u044f",level:2},{value:"\u0425\u0435\u043b\u043f\u0435\u0440\u0438, \u0449\u043e \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u044e\u0442\u044c \u0446\u0456\u043b\u0438\u0439 Operation Object",id:"\u0445\u0435\u043b\u043f\u0435\u0440\u0438-\u0449\u043e-\u043f\u043e\u0432\u0435\u0440\u0442\u0430\u044e\u0442\u044c-\u0446\u0456\u043b\u0438\u0439-operation-object",level:2},{value:"\u0421\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0438\u0439 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u0491\u0430\u0440\u0434\u0456\u0432",id:"\u0441\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0438\u0439-\u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440-\u0434\u043b\u044f-\u0491\u0430\u0440\u0434\u0456\u0432",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ditsmodopenapi",children:"@ditsmod/openapi"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0429\u043e\u0431 \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u044e \u0437\u0430 \u0441\u043f\u0435\u0446\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u0454\u044e ",(0,s.jsx)(n.a,{href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md",children:"OpenAPI"}),", \u043c\u043e\u0436\u043d\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u043c\u043e\u0434\u0443\u043b\u044c ",(0,s.jsx)(n.code,{children:"@ditsmod/openapi"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"\u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f-\u0442\u0430-\u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",children:"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0442\u0430 \u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm i @ditsmod/openapi\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0429\u043e\u0431 \u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0438 ",(0,s.jsx)(n.code,{children:"OpenapiModule"})," \u0437 \u0434\u0435\u0444\u043e\u043b\u0442\u043d\u0438\u043c\u0438 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f\u043c\u0438, \u0434\u043e\u0441\u0442\u0430\u0442\u043d\u044c\u043e \u0456\u043c\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0439\u043e\u0433\u043e \u0443 \u0431\u0443\u0434\u044c-\u044f\u043a\u0438\u0439 \u043c\u043e\u0434\u0443\u043b\u044c:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{5}",children:"import { featureModule } from '@ditsmod/core';\nimport { OpenapiModule } from '@ditsmod/openapi';\n\n@featureModule({\n  imports: [OpenapiModule],\n  // ...\n})\nexport class SomeModule {}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0412 \u0442\u0430\u043a\u043e\u043c\u0443 \u0440\u0430\u0437\u0456, \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u044f \u0431\u0443\u0434\u0435 \u0441\u0442\u0432\u043e\u0440\u044e\u0432\u0430\u0442\u0438\u0441\u044c \u0437 \u0443\u0441\u044c\u043e\u0433\u043e \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443 \u0437\u0430 URL-\u0430\u0434\u0440\u0435\u0441\u043e\u044e, \u044f\u043a\u0430 \u0431\u0443\u0434\u0435 \u0437\u0430\u043b\u0435\u0436\u0430\u0442\u0438 \u0432\u0456\u0434 path-\u043f\u0440\u0435\u0444\u0456\u043a\u0441\u0430 \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u044f\u043a\u0449\u043e path-\u043f\u0440\u0435\u0444\u0456\u043a\u0441 \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443 \u0431\u0443\u0434\u0435 ",(0,s.jsx)(n.code,{children:"/api"}),", \u0437\u043d\u0430\u0447\u0438\u0442\u044c OpenAPI-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u044f \u0431\u0443\u0434\u0435 \u0437\u0430 \u0430\u0434\u0440\u0435\u0441\u043e\u044e ",(0,s.jsx)(n.code,{children:"/api/openapi"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["\u0422\u0430\u043a\u043e\u0436 \u043c\u043e\u0436\u043d\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u0441\u0442\u0430\u0442\u0438\u0447\u043d\u0438\u0439 \u043c\u0435\u0442\u043e\u0434 ",(0,s.jsx)(n.code,{children:"OpenapiModule.withParams"})," \u0449\u043e\u0431 \u0432\u043a\u0430\u0437\u0430\u0442\u0438 \u0434\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0456 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u0434\u043b\u044f \u0456\u043c\u043f\u043e\u0440\u0442\u0443 ",(0,s.jsx)(n.code,{children:"OpenapiModule"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{11,14}",children:"import { featureModule } from '@ditsmod/core';\nimport { OpenapiModule, SwaggerOAuthOptions } from '@ditsmod/openapi';\nimport { oasObject } from './oas-object.js';\n\nconst swaggerOAuthOptions: SwaggerOAuthOptions = {\n  appName: 'Swagger UI Demo',\n  // See https://demo.duendesoftware.com/ for configuration details.\n  clientId: 'implicit',\n};\n\nconst moduleWithParams = OpenapiModule.withParams(oasObject, 'absolute-path', swaggerOAuthOptions);\n\n@featureModule({\n  imports: [moduleWithParams],\n  // ...\n})\nexport class SomeModule {}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0414\u0435 ",(0,s.jsx)(n.code,{children:"oasObject"})," - \u0446\u0435 \u043a\u043e\u0440\u0435\u043d\u0435\u0432\u0438\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 OpenAPI-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u0457, \u0432 \u044f\u043a\u043e\u043c\u0443 \u043c\u043e\u0436\u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u0442\u0438 \u0434\u0435\u044f\u043a\u0456 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0456 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u0456:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { XOasObject, openapi } from '@ts-stack/openapi-spec';\n\nexport const oasObject: XOasObject = {\n  openapi,\n  info: { title: 'Testing @ditsmod/openapi', version: '1.0.0' },\n  tags: [\n    {\n      name: 'NonOasRoutes',\n      description:\n        'Routes that used `@route()` decorator. If you want to change this description, ' +\n        '[use tags](https://swagger.io/docs/specification/grouping-operations-with-tags/) ' +\n        'for `@oasRoute()` imported from @ditsmod/openapi.',\n    },\n    {\n      name: 'withParameter',\n      description: 'Parameter in path.',\n    },\n    {\n      name: 'withBasicAuth',\n      description: 'Here you need username and password.',\n    },\n  ],\n  components: {\n    responses: {\n      UnauthorizedError: {\n        description: 'Authentication information is missing or invalid',\n        headers: {\n          WWW_Authenticate: {\n            schema: { type: 'string' },\n            description:\n              'Taken from [swagger.io](https://swagger.io/docs/specification/authentication/basic-authentication/)',\n          },\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u0457",children:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u0457"}),"\n",(0,s.jsxs)(n.p,{children:["\u0429\u043e\u0431 \u0441\u0442\u0432\u043e\u0440\u044e\u0432\u0430\u0442\u0438 \u043e\u043a\u0440\u0435\u043c\u0456 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438, \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0439\u0442\u0435\u0441\u044c \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u043e\u043c ",(0,s.jsx)(n.code,{children:"oasRoute"}),", \u0432 \u044f\u043a\u043e\u043c\u0443 \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u0438\u043c \u0430\u0431\u043e \u0442\u0440\u0435\u0442\u0456\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c (\u044f\u043a\u0449\u043e \u043d\u0435\u043c\u0430\u0454 \u0491\u0430\u0440\u0434\u0456\u0432) \u0439\u0434\u0435 \u0442\u0430\u043a \u0437\u0432\u0430\u043d\u0438\u0439 ",(0,s.jsx)(n.a,{href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object",children:"Operation Object"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{8-18}",children:"import { controller } from '@ditsmod/core';\nimport { oasRoute } from '@ditsmod/openapi';\n\n@controller()\nexport class SomeController {\n  // ...\n  @oasRoute('GET', 'users/:username', {\n    parameters: [\n      {\n        name: 'username',\n        in: 'path',\n        required: true,\n        description: 'Username of the profile to get',\n        schema: {\n          type: 'string',\n        },\n      },\n    ],\n  })\n  async getSome() {\n    // ...\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Ditsmod \u043c\u0430\u0454 \u0445\u043e\u0440\u043e\u0448\u0443 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u043a\u0443 TypeScript-\u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0434\u043b\u044f OpenAPI v3.1.0, \u0437\u043e\u043a\u0440\u0435\u043c\u0430 \u0439 Operation Object, \u0430\u043b\u0435 \u0432\u0440\u0443\u0447\u043d\u0443 \u043f\u0440\u043e\u043f\u0438\u0441\u0443\u0432\u0430\u0442\u0438 \u0432\u0435\u0441\u044c Operation Object \u043f\u0440\u044f\u043c\u043e \u0432 \u043a\u043e\u0434\u0456 \u0434\u043e \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0443 - \u043d\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u043e. \u041a\u0440\u0430\u0449\u0435 \u0441\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044c \u0445\u0435\u043b\u043f\u0435\u0440\u0430\u043c\u0438, \u044f\u043a\u0456 \u0437\u0430 \u0432\u0430\u0441 \u0437\u0433\u0435\u043d\u0435\u0440\u0443\u044e\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0438\u0439 \u043a\u043e\u0434, \u0442\u0430 \u0449\u0435 \u0439 \u0437\u043c\u0435\u043d\u0448\u0430\u0442\u044c \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u043f\u043e\u043c\u0438\u043b\u043e\u043a \u0437\u0430 \u0440\u0430\u0445\u0443\u043d\u043e\u043a \u0449\u0435 \u043a\u0440\u0430\u0449\u043e\u0457 \u043f\u0456\u0442\u0440\u0438\u043c\u043a\u0438 TypeScript. Ditsmod \u043c\u0430\u0454 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0442\u0430\u043a\u0438\u0445 \u0445\u0435\u043b\u043f\u0435\u0440\u0456\u0432: ",(0,s.jsx)(n.code,{children:"getParams()"}),", ",(0,s.jsx)(n.code,{children:"getContent()"}),", ",(0,s.jsx)(n.code,{children:"Parameters"}),", ",(0,s.jsx)(n.code,{children:"Content"}),". \u0423\u0441\u0456 \u0432\u043e\u043d\u0438 \u0456\u043c\u043f\u043e\u0440\u0442\u0443\u044e\u0442\u044c\u0441\u044f \u0437 \u043c\u043e\u0434\u0443\u043b\u044f ",(0,s.jsx)(n.code,{children:"@ditsmod/openapi"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"\u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432-operation-object",children:"\u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432 Operation Object"}),"\n",(0,s.jsxs)(n.p,{children:["\u0412 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u043c\u0443 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0456 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u0445\u0435\u043b\u043f\u0435\u0440\u0430 ",(0,s.jsx)(n.code,{children:"getParams()"})," \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u043c\u0430\u0439\u0436\u0435 \u0443\u0441\u0435 \u0442\u0435, \u0449\u043e \u0443 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u044c\u043e\u043c\u0443 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0456 \u043c\u0438 \u043f\u0440\u043e\u043f\u0438\u0441\u0430\u043b\u0438 \u0432\u0440\u0443\u0447\u043d\u0443 \u0434\u043b\u044f ",(0,s.jsx)(n.code,{children:"parameters"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{8}",children:"import { controller } from '@ditsmod/core';\nimport { oasRoute, getParams } from '@ditsmod/openapi';\n\n@controller()\nexport class SomeController {\n  // ...\n  @oasRoute('GET', 'users/:username', {\n    parameters: getParams('path', true, 'username'),\n  })\n  async getSome() {\n    // ...\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0422\u0443\u0442 \u043d\u0435 \u0432\u0438\u0441\u0442\u0430\u0447\u0430\u0454 \u0449\u0435 \u0432\u043a\u0430\u0437\u0430\u043d\u043d\u044f \u0442\u0438\u043f\u0443 \u0434\u0430\u043d\u0438\u0445 \u0434\u043b\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 ",(0,s.jsx)(n.code,{children:"username"})," \u0442\u0430 \u0439\u043e\u0433\u043e \u043e\u043f\u0438\u0441\u0443. \u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0454\u043c\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 TypeScript-\u043a\u043b\u0430\u0441 \u0443 \u044f\u043a\u043e\u0441\u0442\u0456 \u043c\u043e\u0434\u0435\u043b\u0456, \u0449\u043e\u0431 \u043f\u043e\u0442\u0456\u043c \u043c\u043e\u0436\u043d\u0430 \u0431\u0443\u043b\u043e \u043d\u0430 \u043d\u044c\u043e\u0433\u043e \u043f\u043e\u0441\u0438\u043b\u0430\u0442\u0438\u0441\u044c \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u0445\u0435\u043b\u043f\u0435\u0440\u0456\u0432, \u044f\u043a\u0456 \u0432\u043c\u0456\u044e\u0442\u044c \u0447\u0438\u0442\u0430\u0442\u0438 \u0439\u043e\u0433\u043e \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u0456 \u0456 \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u0442\u0438 \u0433\u043e\u0442\u043e\u0432\u0456 JSON-\u043e\u0431'\u0454\u043a\u0442\u0438."]}),"\n",(0,s.jsx)(n.h2,{id:"\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f-typescript-\u043c\u043e\u0434\u0435\u043b\u0435\u0439",children:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f TypeScript-\u043c\u043e\u0434\u0435\u043b\u0435\u0439"}),"\n",(0,s.jsx)(n.p,{children:"\u0412 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u043c\u0443 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0456 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043c\u043e\u0434\u0435\u043b\u044c \u0437 \u0442\u0440\u044c\u043e\u043c\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { property } from '@ditsmod/openapi';\n\nclass Params {\n  @property({ description: 'Username of the profile to get.' })\n  username: string;\n\n  @property({ minimum: 1, maximum: 100, description: 'Page number.' })\n  page: number;\n\n  @property()\n  hasName: boolean;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u042f\u043a \u0431\u0430\u0447\u0438\u0442\u0435, \u0449\u043e\u0431 \u0437\u0430\u043a\u0440\u0456\u043f\u0438\u0442\u0438 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u0456 \u0437\u0430 \u043c\u043e\u0434\u0435\u043b\u043b\u044e, \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440 ",(0,s.jsx)(n.code,{children:"@property()"}),", \u043a\u0443\u0434\u0438 \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u0438 \u043f\u0435\u0440\u0448\u0438\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u043c ",(0,s.jsx)(n.a,{href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schema-object",children:"Schema Object"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["\u0417\u0432\u0435\u0440\u043d\u0456\u0442\u044c \u0443\u0432\u0430\u0433\u0443, \u0449\u043e \u0432 \u0434\u0430\u043d\u043e\u043c\u0443 \u0440\u0430\u0437\u0456 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u0456\u0441\u0442\u044c ",(0,s.jsx)(n.code,{children:"type"})," \u043d\u0435 \u043f\u0440\u043e\u043f\u0438\u0441\u0443\u0454\u0442\u044c\u0441\u044f \u0443 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u0438\u0445, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u0456 \u0442\u0443\u0442 \u0442\u0438\u043f\u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u0447\u0438\u0442\u0430\u044e\u0442\u044c\u0441\u044f \u0445\u0435\u043b\u043f\u0435\u0440\u0430\u043c\u0438. \u0429\u043e\u043f\u0440\u0430\u0432\u0434\u0430 \u043d\u0435 \u0443\u0441\u0456 \u043d\u0430\u044f\u0432\u043d\u0456 \u0443 TypeScript \u0442\u0438\u043f\u0438 \u043c\u043e\u0436\u0443\u0442\u044c \u0447\u0438\u0442\u0430\u0442\u0438\u0441\u044c. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u0445\u0435\u043b\u043f\u0435\u0440\u0438 \u043d\u0435 \u0437\u043c\u043e\u0436\u0443\u0442\u044c \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u043f\u043e\u0431\u0430\u0447\u0438\u0442\u0438 \u044f\u043a\u0438\u0439 \u0442\u0438\u043f \u043c\u0430\u0441\u0438\u0432\u0443 \u0432\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0454\u0442\u0435. \u0426\u0435 \u0441\u0430\u043c\u0435 \u0441\u0442\u043e\u0441\u0443\u0454\u0442\u044c\u0441\u044f ",(0,s.jsx)(n.code,{children:"enum"}),". \u0422\u0430\u043a\u043e\u0436 \u0445\u0435\u043b\u043f\u0435\u0440\u0438 \u043d\u0435 \u0431\u0430\u0447\u0430\u0442\u044c \u0447\u0438 \u0454 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u0456\u0441\u0442\u044c \u043e\u0431'\u0454\u043a\u0442\u0430 \u043e\u043f\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u044e \u0447\u0438 \u043d\u0456."]}),"\n",(0,s.jsxs)(n.p,{children:["\u0422\u0438\u043f \u043c\u0430\u0441\u0438\u0432\u0443 \u0447\u0438 ",(0,s.jsx)(n.code,{children:"enum"})," \u043c\u043e\u0436\u043d\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u0438 \u0434\u0440\u0443\u0433\u0438\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c \u0432 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440 ",(0,s.jsx)(n.code,{children:"@property()"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { property } from '@ditsmod/openapi';\n\nenum NumberEnum {\n  one,\n  two,\n  three,\n}\n\nclass Params {\n  @property({}, { enum: NumberEnum })\n  property1: NumberEnum;\n\n  @property({}, { array: String })\n  property2: string[];\n\n  @property({}, { array: [String, Number] })\n  property3: (string | number)[];\n\n  @property({}, { array: [[String]] }) // \u041c\u0430\u0441\u0438\u0432 \u0432 \u043c\u0430\u0441\u0438\u0432\u0456\n  property4: string[][];\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u043e\u0434\u043d\u0438\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043d\u0430 \u0456\u043d\u0448\u0456 \u0434\u043e\u0431\u0440\u0435 \u0447\u0438\u0442\u0430\u044e\u0442\u044c\u0441\u044f. \u0412 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u043c\u0443 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0456 ",(0,s.jsx)(n.code,{children:"Model2"})," \u043c\u0430\u0454 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u043d\u0430 ",(0,s.jsx)(n.code,{children:"Model1"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { property } from '@ditsmod/openapi';\n\nexport class Model1 {\n  @property()\n  property1: string;\n}\n\nexport class Model2 {\n  @property()\n  model1: Model1;\n\n  @property({}, { array: Model1 })\n  arrModel1: Model1[];\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f-typescript-\u043c\u043e\u0434\u0435\u043b\u0435\u0439",children:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f TypeScript-\u043c\u043e\u0434\u0435\u043b\u0435\u0439"}),"\n",(0,s.jsxs)(n.p,{children:["\u0425\u0435\u043b\u043f\u0435\u0440 ",(0,s.jsx)(n.code,{children:"getParams()"})," \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u043c\u043e\u0434\u0435\u043b\u0456, \u0456 \u044f\u043a\u0449\u043e \u0432\u0438 \u0437\u0440\u043e\u0431\u0438\u0442\u0435 \u043f\u043e\u043c\u0438\u043b\u043a\u0443 \u0443 \u043d\u0430\u0437\u0432\u0456 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430, TypeScript \u0441\u043a\u0430\u0436\u0435 \u0432\u0430\u043c \u043f\u0440\u043e \u0446\u0435:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{10}",children:"import { controller } from '@ditsmod/core';\nimport { oasRoute, getParams } from '@ditsmod/openapi';\n\nimport { Params } from './params.js';\n\n@controller()\nexport class SomeController {\n  // ...\n  @oasRoute('GET', '', {\n    parameters: getParams('path', true, Params, 'username'),\n  })\n  async getSome() {\n    // ...\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0422\u0443\u0442 ",(0,s.jsx)(n.code,{children:"Params"})," - \u0446\u0435 \u043a\u043b\u0430\u0441, \u044f\u043a\u0438\u0439 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0443 \u044f\u043a\u043e\u0441\u0442\u0456 \u043c\u043e\u0434\u0435\u043b\u0456 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432."]}),"\n",(0,s.jsxs)(n.p,{children:["\u0410\u043b\u0435 \u0445\u0435\u043b\u043f\u0435\u0440 ",(0,s.jsx)(n.code,{children:"getParams()"})," \u043d\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0449\u043e\u0431 \u0439\u043e\u0433\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u043b\u0438 \u043e\u0434\u043d\u043e\u0447\u0430\u0441\u043d\u043e \u0434\u043b\u044f \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0445 \u0442\u0430 \u043d\u0435\u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432. \u0422\u0430\u043a\u043e\u0436 \u0447\u0435\u0440\u0435\u0437 \u043d\u044c\u043e\u0433\u043e \u043d\u0435 \u043c\u043e\u0436\u043d\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u0438 \u043e\u043f\u0438\u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432, \u044f\u043a\u0438\u0439 \u0432\u0456\u0434\u0440\u0456\u0437\u043d\u044f\u0454\u0442\u044c\u0441\u044f \u0432\u0456\u0434 \u043e\u043f\u0438\u0441\u0443 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432 \u0443 \u043c\u043e\u0434\u0435\u043b\u0456 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432. \u0414\u043b\u044f \u0442\u0430\u043a\u0438\u0445 \u0446\u0456\u043b\u0435\u0439 \u043c\u043e\u0436\u043d\u0430 \u0441\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044c \u0456\u043d\u0448\u0438\u043c \u0445\u0435\u043b\u043f\u0435\u0440\u043e\u043c - ",(0,s.jsx)(n.code,{children:"Parameters"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{10-13}",children:"import { controller } from '@ditsmod/core';\nimport { oasRoute, Parameters } from '@ditsmod/openapi';\n\nimport { Params } from './params.js';\n\n@controller()\nexport class SomeController {\n  // ...\n  @oasRoute('GET', '', {\n    parameters: new Parameters()\n      .required('path', Params, 'username')\n      .optional('query', Params, 'page', 'hasName')\n      .getParams(),\n  })\n  async getSome() {\n    // ...\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"requestbody-\u0442\u0430-responses-content",children:"requestBody \u0442\u0430 responses content"}),"\n",(0,s.jsxs)(n.p,{children:["\u041c\u043e\u0434\u0435\u043b\u0456 \u0434\u0430\u043d\u0438\u0445 \u0442\u0430\u043a\u043e\u0436 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0442\u044c\u0441\u044f \u0449\u043e\u0431 \u043e\u043f\u0438\u0441\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 ",(0,s.jsx)(n.code,{children:"requestBody"}),", \u0430\u043b\u0435 \u0442\u0443\u0442 \u0454 \u043e\u0434\u043d\u0430 \u043d\u0435\u0432\u0435\u043b\u0438\u043a\u0430 \u0432\u0456\u0434\u043c\u0456\u043d\u043d\u0456\u0441\u0442\u044c \u0443 \u043f\u043e\u0440\u0456\u0432\u043d\u044f\u043d\u043d\u0456 \u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438. \u041f\u043e \u0434\u0435\u0444\u043e\u043b\u0442\u0443, \u0443\u0441\u0456 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u0456 \u043c\u043e\u0434\u0435\u043b\u0456 \u0454 \u043d\u0435\u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c\u0438, \u0456 \u0449\u043e\u0431 \u043f\u043e\u0437\u043d\u0430\u0447\u0438\u0442\u0438 \u043f\u0435\u0432\u043d\u0443 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u0456\u0441\u0442\u044c \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u043e\u044e, \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e \u0441\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044c \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043e\u044e ",(0,s.jsx)(n.code,{children:"REQUIRED"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { property, REQUIRED } from '@ditsmod/openapi';\n\nclass Model1 {\n  @property()\n  property1: string;\n  @property({ [REQUIRED]: true })\n  property2: number;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u042f\u043a\u0449\u043e \u0434\u0430\u043d\u0430 \u043c\u043e\u0434\u0435\u043b\u044c \u0431\u0443\u0434\u0435 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438\u0441\u044c \u0434\u043b\u044f \u043e\u043f\u0438\u0441\u0443 ",(0,s.jsx)(n.code,{children:"requestBody"}),", \u0442\u043e ",(0,s.jsx)(n.code,{children:"property2"})," \u0432 \u043d\u0456\u0439 \u0431\u0443\u0434\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u043e\u044e. \u0410\u043b\u0435 \u044f\u043a\u0449\u043e \u0446\u044e \u043c\u043e\u0434\u0435\u043b\u044c \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u0434\u043b\u044f \u043e\u043f\u0438\u0441\u0443 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0456\u0432, \u043c\u0430\u0440\u043a\u0435\u0440 ",(0,s.jsx)(n.code,{children:"REQUIRED"})," \u0431\u0443\u0434\u0435 \u0456\u0433\u043d\u043e\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044c:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{4}",children:"class SomeController {\n  // ...\n  @oasRoute('GET', 'users', {\n    parameters: getParams('query', false, Model1, 'property2'),\n  })\n  async getSome() {\n    // ...\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0414\u043b\u044f \u043e\u043f\u0438\u0441\u0443 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u0432 ",(0,s.jsx)(n.code,{children:"requestBody"})," \u0442\u0430 ",(0,s.jsx)(n.code,{children:"responses"})," \u0456\u0441\u043d\u0443\u0454 \u0442\u0430\u043a\u043e\u0436 \u0445\u0435\u043b\u043f\u0435\u0440 ",(0,s.jsx)(n.code,{children:"getContent()"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{12}",children:"import { controller, Status } from '@ditsmod/core';\nimport { oasRoute, getContent } from '@ditsmod/openapi';\n\nimport { SomeModel } from '#models/some.js';\n\n@controller()\nexport class SomeController {\n  // ...\n  @oasRoute('POST', '', {\n    requestBody: {\n      description: 'All properties are taken from Model1.',\n      content: getContent({ mediaType: 'application/json', model: Model1 }),\n    },\n  })\n  async postSome() {\n    // ...\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0425\u0435\u043b\u043f\u0435\u0440 ",(0,s.jsx)(n.code,{children:"getContent()"})," \u043f\u0440\u0438\u0439\u043c\u0430\u0454 \u0441\u043a\u043e\u0440\u043e\u0447\u0435\u043d\u0443 \u0432\u0435\u0440\u0441\u0456\u044e \u0434\u0430\u043d\u0438\u0445, \u043a\u043e\u043b\u0438 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u043e\u043f\u0438\u0441\u0430\u0442\u0438 \u0454\u0434\u0438\u043d\u0438\u0439 \u0432\u0430\u0440\u0456\u0430\u043d\u0442 ",(0,s.jsx)(n.code,{children:"mediaType"}),". \u042f\u043a\u0449\u043e \u0436 \u0432\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u043e\u043f\u0438\u0441\u0430\u0442\u0438 \u0431\u0456\u043b\u044c\u0448\u0443 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c ",(0,s.jsx)(n.code,{children:"mediaType"}),", \u043c\u043e\u0436\u043d\u0430 \u0441\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044c \u043a\u043b\u0430\u0441\u043e\u043c ",(0,s.jsx)(n.code,{children:"Content"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{10-18}",children:"import { controller, Status } from '@ditsmod/core';\nimport { oasRoute, Content } from '@ditsmod/openapi';\n\nimport { SomeModel } from '#models/some.js';\n\n@controller()\nexport class SomeController {\n  // ...\n  @oasRoute('GET', '', {\n    responses: {\n      [Status.OK]: {\n        description: '\u041e\u043f\u0438\u0441 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0443 \u0456\u0437 \u0434\u0430\u043d\u0438\u043c \u0441\u0442\u0430\u0442\u0443\u0441\u043e\u043c',\n        content: new Content()\n          .set({ mediaType: 'application/xml', model: SomeModel })\n          .set({ mediaType: 'application/json', model: SomeModel })\n          .get(),\n      },\n    },\n  })\n  async getSome() {\n    // ...\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"openapi-\u043e\u043f\u0446\u0456\u0457-\u043d\u0430-\u0440\u0456\u0432\u043d\u0456-\u043c\u043e\u0434\u0443\u043b\u044f",children:"OpenAPI \u043e\u043f\u0446\u0456\u0457 \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u043c\u043e\u0434\u0443\u043b\u044f"}),"\n",(0,s.jsx)(n.p,{children:"\u0422\u0435\u0433\u0438 \u0442\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438 \u043c\u043e\u0436\u043d\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u0438 \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u043c\u043e\u0434\u0443\u043b\u044f:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { OasOptions } from '@ditsmod/openapi';\n\n@featureModule({\n  // ...\n  extensionsMeta: {\n    oasOptions: {\n      tags: ['i18n'],\n      paratemers: new Parameters()\n        .optional('query', Params, 'lcl')\n        .describe('Internalization')\n        .getParams(),\n    } as OasOptions,\n  },\n})\nexport class I18nModule {}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u0445\u0435\u043b\u043f\u0435\u0440\u0438-\u0449\u043e-\u043f\u043e\u0432\u0435\u0440\u0442\u0430\u044e\u0442\u044c-\u0446\u0456\u043b\u0438\u0439-operation-object",children:"\u0425\u0435\u043b\u043f\u0435\u0440\u0438, \u0449\u043e \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u044e\u0442\u044c \u0446\u0456\u043b\u0438\u0439 Operation Object"}),"\n",(0,s.jsxs)(n.p,{children:["\u0423 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456\u0445 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0430\u0445 \u0431\u0443\u043b\u0438 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0456 \u0445\u0435\u043b\u043f\u0435\u0440\u0438, \u0449\u043e \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u044e\u0442\u044c \u0447\u0430\u0441\u0442\u0438\u043d\u0438 ",(0,s.jsx)(n.a,{href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object",children:"Operation Object"}),", \u0430\u043b\u0435, \u0437\u0432\u0438\u0447\u0430\u0439\u043d\u043e \u0436, \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0432\u043b\u0430\u0441\u043d\u0456 \u0445\u0435\u043b\u043f\u0435\u0440\u0438, \u044f\u043a\u0456 \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u044e\u0442\u044c \u0446\u0456\u043b\u0456 Operation Object. \u041e\u0434\u0438\u043d \u0456\u0437 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0456\u0432 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0442\u0430\u043a\u0438\u0445 \u0445\u0435\u043b\u043f\u0435\u0440\u0456\u0432 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0438\u0439 \u0432 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0456\u0457 ",(0,s.jsx)(n.a,{href:"https://github.com/ditsmod/realworld/blob/e8947f8767/packages/server/src/app/modules/routed/profiles/profiles.controller.ts#L24-L30",children:"RealWorld"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"\u0441\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0438\u0439-\u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440-\u0434\u043b\u044f-\u0491\u0430\u0440\u0434\u0456\u0432",children:"\u0421\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0438\u0439 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u0491\u0430\u0440\u0434\u0456\u0432"}),"\n",(0,s.jsxs)(n.p,{children:["\u041c\u043e\u0434\u0443\u043b\u044c ",(0,s.jsx)(n.code,{children:"@ditsmod/openapi"})," \u043c\u0430\u0454 \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0438\u0439 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440 ",(0,s.jsx)(n.code,{children:"oasGuard"}),", \u0449\u043e \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u0437\u0430\u043a\u0440\u0456\u043f\u0438\u0442\u0438 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u0456 OpenAPI \u0437\u0430 \u0491\u0430\u0440\u0434\u0430\u043c\u0438:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { CanActivate } from '@ditsmod/core';\nimport { oasGuard } from '@ditsmod/openapi';\n\n@oasGuard({\n  tags: ['withBasicAuth'],\n  securitySchemeObject: {\n    type: 'http',\n    scheme: 'basic',\n    description:\n      'Enter username: `demo`, password: `p@55w0rd`. For more info see ' +\n      '[Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)',\n  },\n  responses: {\n    [Status.UNAUTHORIZED]: {\n      $ref: '#/components/responses/UnauthorizedError',\n    },\n  },\n})\nexport class BasicGuard implements CanActivate {\n  // ...\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u041d\u0430 \u0434\u0430\u043d\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440 ",(0,s.jsx)(n.code,{children:"oasGuard"})," \u043f\u0440\u0438\u0439\u043c\u0430\u0454 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0442\u0438\u043f \u0434\u0430\u043d\u0438\u0445:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface OasGuardMetadata {\n  securitySchemeObject: XSecuritySchemeObject;\n  responses?: XResponsesObject;\n  tags?: string[];\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0414\u0435 ",(0,s.jsx)(n.code,{children:"securitySchemeObject"})," \u043c\u0430\u0454 \u0442\u0438\u043f ",(0,s.jsx)(n.a,{href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#security-scheme-object",children:"Security Scheme Object"}),", \u0430 ",(0,s.jsx)(n.code,{children:"responses"})," - ",(0,s.jsx)(n.a,{href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#responses-object",children:"Responses Object"}),"."]}),"\n",(0,s.jsx)(n.p,{children:'\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0442\u044c\u0441\u044f \u0442\u0430\u043a\u0456 \u0491\u0430\u0440\u0434\u0438 \u0442\u043e\u0447\u043d\u043e \u0442\u0430\u043a \u0441\u0430\u043c\u043e, \u044f\u043a \u0456 "\u0437\u0432\u0438\u0447\u0430\u0439\u043d\u0456" \u0491\u0430\u0440\u0434\u0438:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { controller } from '@ditsmod/core';\nimport { oasRoute } from '@ditsmod/openapi';\n\n@controller()\nexport class SomeController {\n  // ...\n  @oasRoute('GET', 'users/:username', [BasicGuard])\n  async getSome() {\n    // ...\n  }\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var r=o(6540);const s={},t=r.createContext(s);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);