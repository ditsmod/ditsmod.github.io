"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[842],{3002:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var s=r(4848),i=r(8453);const c={sidebar_position:40},t="\u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f",o={id:"developer-guides/testing",title:"\u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f",description:"\u0429\u043e \u0442\u0430\u043a\u0435 unit-\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f",source:"@site/docs/01-developer-guides/40-testing.md",sourceDirName:"01-developer-guides",slug:"/developer-guides/testing",permalink:"/developer-guides/testing",draft:!1,unlisted:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/docs/01-developer-guides/40-testing.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"\u041a\u043e\u043b\u0456\u0437\u0456\u0457 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0456\u0432",permalink:"/developer-guides/providers-collisions"},next:{title:"\u0414\u043e\u043c\u043e\u0432\u043b\u0435\u043d\u043e\u0441\u0442\u0456 \u043f\u043e \u043a\u043e\u0434\u0443",permalink:"/developer-guides/conventions"}},d={},l=[{value:"\u0429\u043e \u0442\u0430\u043a\u0435 unit-\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f",id:"\u0449\u043e-\u0442\u0430\u043a\u0435-unit-\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456 \u0443\u043c\u043e\u0432\u0438 \u0434\u043b\u044f \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044f \u044e\u043d\u0456\u0442-\u0442\u0435\u0441\u0442\u0456\u0432",id:"\u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456-\u0443\u043c\u043e\u0432\u0438-\u0434\u043b\u044f-\u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044f-\u044e\u043d\u0456\u0442-\u0442\u0435\u0441\u0442\u0456\u0432",level:2},{value:"End-to-end \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f",id:"end-to-end-\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f",level:2},{value:"\u0412\u043a\u043b\u0430\u0434\u0435\u043d\u0456 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0438 \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f",id:"\u0432\u043a\u043b\u0430\u0434\u0435\u043d\u0456-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0438-\u0434\u043b\u044f-\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f",children:"\u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f"}),"\n",(0,s.jsx)(n.h2,{id:"\u0449\u043e-\u0442\u0430\u043a\u0435-unit-\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f",children:"\u0429\u043e \u0442\u0430\u043a\u0435 unit-\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f"}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u043e-\u0441\u0443\u0442\u0456, \u044e\u043d\u0456\u0442-\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f - \u0446\u0435 \u043c\u0435\u0442\u043e\u0434 \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f, \u044f\u043a\u0438\u0439 \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0447\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043f\u0440\u0430\u0446\u044e\u044e\u0442\u044c \u043e\u043a\u0440\u0435\u043c\u0456 \u043d\u0430\u0439\u043c\u0435\u043d\u0448\u0456 \u0447\u0430\u0441\u0442\u0438\u043d\u0438 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443, \u0442\u0430\u043a\u0456 \u044f\u043a \u0444\u0443\u043d\u043a\u0446\u0456\u0457 \u0442\u0430 \u043c\u0435\u0442\u043e\u0434\u0438 \u043a\u043b\u0430\u0441\u0456\u0432 (\u044f\u043a\u0456 \u043f\u043e-\u0441\u0443\u0442\u0456 \u0442\u0430\u043a\u043e\u0436 \u0454 \u0444\u0443\u043d\u043a\u0446\u0456\u044f\u043c\u0438). \u0414\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f, \u043f\u043e\u0447\u0435\u0440\u0433\u043e\u0432\u043e \u0444\u043e\u043a\u0443\u0441\u0443\u044e\u0442\u044c\u0441\u044f \u043d\u0430 \u043e\u043a\u0440\u0435\u043c\u0456\u0439 \u0444\u0443\u043d\u043a\u0446\u0456\u0457, \u043f\u0440\u0438 \u0446\u044c\u043e\u043c\u0443 \u0456\u0437\u043e\u043b\u044e\u044e\u0442\u044c \u0443\u0441\u0456 \u0456\u043d\u0448\u0456 \u0447\u0430\u0441\u0442\u0438\u043d\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438, \u044f\u043a\u0456 \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u044e\u0442\u044c \u0437 \u0446\u0456\u0454\u044e \u0444\u0443\u043d\u043a\u0446\u0456\u0454\u044e."}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0456 \u044e\u043d\u0456\u0442-\u0442\u0435\u0441\u0442\u0438 \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442\u044c \u0447\u0438\u0442\u0430\u0442\u0438 \u0457\u0445 \u044f\u043a \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u044e \u0434\u043e \u0432\u0430\u0448\u043e\u0457 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438. \u041c\u043e\u0436\u043d\u0430 \u0441\u043a\u0430\u0437\u0430\u0442\u0438, \u0449\u043e \u0443 \u0431\u0456\u043b\u044c\u0448\u043e\u0441\u0442\u0456 \u043f\u0440\u043e\u0435\u043a\u0442\u0456\u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0443\u044e\u0442\u044c \u043b\u0438\u0448\u0435 \u043f\u0443\u0431\u043b\u0456\u0447\u043d\u0443 \u0447\u0430\u0441\u0442\u0438\u043d\u0443 API \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443, \u0430 \u0440\u0435\u0448\u0442\u0430 - \u0446\u0435 TypeScript-\u0442\u0438\u043f\u0438, \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u044e\u043d\u0456\u0442-\u0442\u0435\u0441\u0442\u0456\u0432 \u0442\u0430 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0456\u0432 \u0443 \u043a\u043e\u0434\u0456."}),"\n",(0,s.jsxs)(n.p,{children:["\u041e\u0434\u043d\u0438\u043c \u0456\u0437 \u0441\u0430\u043c\u0438\u0445 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0438\u0445 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0456\u0432 \u0434\u043b\u044f \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044f \u044e\u043d\u0456\u0442-\u0442\u0435\u0441\u0442\u0456\u0432 \u0434\u043b\u044f JavaScript-\u043a\u043e\u0434\u0443 \u0454 ",(0,s.jsx)(n.a,{href:"https://jestjs.io/",children:"jest"}),". \u0412 \u0434\u0430\u043d\u043e\u043c\u0443 \u0440\u043e\u0437\u0434\u0456\u043b\u0456 \u043c\u0438 \u0431\u0443\u0434\u0435\u043c\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u0441\u0430\u043c\u0435 \u0446\u0435\u0439 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a."]}),"\n",(0,s.jsx)(n.h2,{id:"\u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456-\u0443\u043c\u043e\u0432\u0438-\u0434\u043b\u044f-\u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044f-\u044e\u043d\u0456\u0442-\u0442\u0435\u0441\u0442\u0456\u0432",children:"\u041f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456 \u0443\u043c\u043e\u0432\u0438 \u0434\u043b\u044f \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044f \u044e\u043d\u0456\u0442-\u0442\u0435\u0441\u0442\u0456\u0432"}),"\n",(0,s.jsxs)(n.p,{children:["\u0425\u043e\u0440\u043e\u0448\u0456 \u0437\u043d\u0430\u043d\u043d\u044f \u0432 \u0430\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0456 ",(0,s.jsx)(n.a,{href:"/components-of-ditsmod-app/dependency-injection",children:"Ditsmod DI"})," \u0434\u043e\u043f\u043e\u043c\u043e\u0436\u0443\u0442\u044c \u0432\u0430\u043c \u043b\u0435\u0433\u043a\u043e \u043f\u0438\u0441\u0430\u0442\u0438 \u044e\u043d\u0456\u0442-\u0442\u0435\u0441\u0442\u0438 \u0434\u043b\u044f Ditsmod-\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0456\u0432, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u043e\u0434\u043d\u0456\u0454\u044e \u0437 \u0433\u043e\u043b\u043e\u0432\u043d\u0438\u0445 \u043f\u0435\u0440\u0435\u0432\u0430\u0433 DI - \u0454 \u043f\u043e\u043b\u0435\u0433\u0448\u0435\u043d\u0435 \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f. \u041f\u0435\u0440\u0448 \u0437\u0430 \u0432\u0441\u0435, \u0432\u0438 \u043f\u043e\u0432\u0438\u043d\u043d\u0456 \u043d\u0430\u0432\u0447\u0438\u0442\u0438\u0441\u044c \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0437 ",(0,s.jsx)(n.a,{href:"/components-of-ditsmod-app/dependency-injection#%D1%96%D0%BD%D0%B6%D0%B5%D0%BA%D1%82%D0%BE%D1%80",children:"\u0456\u043d\u0436\u0435\u043a\u0442\u043e\u0440\u0430\u043c\u0438"})," \u0442\u0430 \u0437 ",(0,s.jsx)(n.a,{href:"/components-of-ditsmod-app/dependency-injection#%D1%96%D1%94%D1%80%D0%B0%D1%80%D1%85%D1%96%D1%8F-%D1%96%D0%BD%D0%B6%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D1%96%D0%B2",children:"\u0456\u0454\u0440\u0430\u0440\u0445\u0456\u0454\u044e \u0456\u043d\u0436\u0435\u043a\u0442\u043e\u0440\u0456\u0432"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["\u041f\u0440\u0438\u043f\u0443\u0441\u0442\u0438\u043c\u043e, \u0432\u0438 \u0445\u043e\u0447\u0435\u0442\u0435 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0442\u0438 ",(0,s.jsx)(n.code,{children:"Service2"})," \u0443 \u0446\u044c\u043e\u043c\u0443 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0456:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// service1.ts\nimport { injectable } from '@ditsmod/core';\n\nclass Service1 {\n  saySomething() {\n    return 'Hello';\n  }\n}\n\n// service2.ts\n@injectable()\nclass Service2 {\n  constructor(private service1: Service1) {}\n\n  method1() {\n    return this.service1.saySomething();\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u041e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 ",(0,s.jsx)(n.code,{children:"Service2"})," \u0437\u0430\u043b\u0435\u0436\u0438\u0442\u044c \u0432\u0456\u0434 ",(0,s.jsx)(n.code,{children:"Service1"}),", \u043d\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e \u0456\u0437\u043e\u043b\u044e\u0432\u0430\u0442\u0438 \u0446\u0435\u0439 \u0441\u0435\u0440\u0432\u0456\u0441 \u0432\u0456\u0434 \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u0457 \u0437 ",(0,s.jsx)(n.code,{children:"Service1"}),". \u041f\u0435\u0440\u0435\u0434 \u0442\u0438\u043c, \u044f\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u0438 \u0442\u0435\u0441\u0442\u0438, \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043d\u0430\u0433\u0430\u0434\u0430\u0454\u043c\u043e, \u044f\u043a \u043c\u043e\u0436\u043d\u0430 \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0456\u043d\u0436\u0435\u043a\u0442\u043e\u0440, \u044f\u043a\u0438\u0439 \u0432\u043c\u0456\u0454 \u0432\u0438\u0440\u0456\u0448\u0443\u0432\u0430\u0442\u0438 \u0437\u0430\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0456 \u043a\u043b\u0430\u0441\u0456\u0432 \u0437 \u043d\u0430\u0448\u043e\u0433\u043e \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0443:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Injector } from '@ditsmod/core';\nimport { Service1 } from './service1.js';\nimport { Service2 } from './service2.js';\n\nconst injector = Injector.resolveAndCreate([Service1, Service2]);\nconst service2 = injector.get(Service2);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u041e\u0442\u0436\u0435, \u043d\u0430 \u0432\u0445\u043e\u0434\u0456 \u043c\u0435\u0442\u043e\u0434\u0443 ",(0,s.jsx)(n.code,{children:"Injector.resolveAndCreate()"})," \u043c\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0454\u043c\u043e \u043c\u0430\u0441\u0438\u0432 \u0443\u0441\u0456\u0445 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0438\u0445 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0456\u0432, \u044f\u043a\u0456 \u043f\u0440\u0438\u0439\u043c\u0430\u0442\u0438\u043c\u0443\u0442\u044c \u0443\u0447\u0430\u0441\u0442\u044c \u0443 \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u0456, \u0430 \u043d\u0430 \u0432\u0438\u0445\u043e\u0434\u0456 - \u043d\u0430\u043c \u0432\u0438\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0456\u043d\u0436\u0435\u043a\u043e\u0440, \u044f\u043a\u0438\u0439 \u0432\u043c\u0456\u0454 \u0441\u0442\u0432\u043e\u0440\u044e\u0432\u0430\u0442\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430."]}),"\n",(0,s.jsxs)(n.p,{children:["\u0412 \u0434\u0430\u043d\u043e\u043c\u0443 \u0440\u0430\u0437\u0456, \u0434\u043b\u044f \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f ",(0,s.jsx)(n.code,{children:"Service2"}),", \u0456\u043d\u0436\u0435\u043a\u0442\u043e\u0440 \u0441\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u044c \u0456\u043d\u0441\u0442\u0430\u043d\u0441 \u043a\u043b\u0430\u0441\u0443 ",(0,s.jsx)(n.code,{children:"Service1"}),". \u0410\u043b\u0435 \u0449\u043e\u0431 \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u0438 \u0442\u0435\u0441\u0442\u0438 \u0441\u0430\u043c\u0435 \u0434\u043b\u044f ",(0,s.jsx)(n.code,{children:"Service2"}),", \u043d\u0430\u043c \u043d\u0435 \u0432\u0430\u0436\u043b\u0438\u0432\u043e \u0447\u0438 \u0441\u043f\u0440\u0430\u0432\u043d\u043e \u043f\u0440\u0430\u0446\u044e\u0454 ",(0,s.jsx)(n.code,{children:"Service1"}),", \u0442\u043e\u043c\u0443 \u0437\u0430\u043c\u0456\u0441\u0442\u044c \u0441\u043f\u0440\u0430\u0432\u0436\u043d\u044c\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0443 ",(0,s.jsx)(n.code,{children:"Service1"})," \u043d\u0430\u043c \u043c\u043e\u0436\u043d\u0430 \u0456\u043c\u0456\u0442\u0443\u0432\u0430\u0442\u0438 \u0439\u043e\u0433\u043e \u0440\u043e\u0431\u043e\u0442\u0443 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e ",(0,s.jsx)(n.a,{href:"https://jestjs.io/docs/mock-functions",children:"\u043c\u043e\u043a-\u0444\u0443\u043d\u043a\u0446\u0456\u0439"}),". \u041e\u0441\u044c \u044f\u043a \u0446\u0435 \u0432\u0438\u0433\u043b\u044f\u0434\u0430\u0442\u0438\u043c\u0435 (\u043f\u043e\u043a\u0438\u0449\u043e \u0431\u0435\u0437 \u0442\u0435\u0441\u0442\u0456\u0432):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{6}",children:"import { Injector } from '@ditsmod/core';\nimport { Service1 } from './service1.js';\nimport { Service2 } from './service2.js';\n\nconst injector = Injector.resolveAndCreate([\n  { token: Service1, useValue: { saySomething: jest.fn() } },\n  Service2\n]);\nconst service2 = injector.get(Service2);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u042f\u043a \u0431\u0430\u0447\u0438\u0442\u0435, \u0443 \u0432\u0438\u0434\u0456\u043b\u0435\u043d\u043e\u043c\u0443 \u0440\u044f\u0434\u043a\u0443 \u0437\u0430\u043c\u0456\u0441\u0442\u044c ",(0,s.jsx)(n.code,{children:"Service1"})," \u043f\u0435\u0440\u0435\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 \u0437\u043d\u0430\u0447\u0435\u043d\u044c \u0437 \u043c\u043e\u043a-\u0444\u0443\u043d\u043a\u0446\u0456\u0454\u044e, \u044f\u043a\u0430 \u0431\u0443\u0434\u0435 \u0456\u043c\u0456\u0442\u0443\u0432\u0430\u0442\u0438 \u0440\u043e\u0431\u043e\u0442\u0443 ",(0,s.jsx)(n.code,{children:"Service1"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"\u0422\u0435\u043f\u0435\u0440 \u043c\u043e\u0436\u043d\u0430 \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u0438 \u0442\u0435\u0441\u0442, \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0447\u0438 \u0446\u044e \u0442\u0435\u0445\u043d\u0456\u043a\u0443 \u043f\u0456\u0434\u043c\u0456\u043d\u0438 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0456\u0432:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{6-7,14}",children:"import { Injector } from '@ditsmod/core';\nimport { Service1 } from './service1.js';\nimport { Service2 } from './service2.js';\n\ndescribe('Service2', () => {\n  const saySomething = jest.fn();\n  const MockService1 = { saySomething } as Service1;\n  let service2: Service2;\n\n  beforeEach(() => {\n    jest.restoreAllMocks();\n\n    const injector = Injector.resolveAndCreate([\n      { token: Service1, useValue: MockService1 },\n      Service2\n    ]);\n\n    service2 = injector.get(Service2);\n  });\n\n  it('should say \"Hello, World!\"', () => {\n    saySomething.mockImplementation(() => 'Hello, World!');\n\n    expect(service2).toBeInstanceOf(Service2);\n    expect(service2.method1()).toBe('Hello, World!');\n    expect(saySomething).toHaveBeenCalledTimes(1);\n  });\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0454\u043c\u043e \u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0444\u0430\u0439\u043b\u0438 \u044e\u043d\u0456\u0442-\u0442\u0435\u0441\u0442\u0456\u0432 \u043f\u043e\u0440\u0443\u0447 \u0437 \u0442\u0438\u043c\u0438 \u0444\u0430\u0439\u043b\u0430\u043c\u0438, \u044f\u043a\u0456 \u0432\u043e\u043d\u0438 \u0442\u0435\u0441\u0442\u0443\u044e\u0442\u044c. \u0422\u043e\u0431\u0442\u043e \u044f\u043a\u0449\u043e \u0444\u0430\u0439\u043b \u043d\u0430\u0437\u0438\u0432\u0430\u0454\u0442\u044c\u0441\u044f ",(0,s.jsx)(n.code,{children:"some.service.ts"}),", \u0442\u043e \u0444\u0430\u0439\u043b \u0442\u0435\u0441\u0442\u0456\u0432 \u043a\u0440\u0430\u0449\u0435 \u043d\u0430\u0437\u0438\u0432\u0430\u0442\u0438 ",(0,s.jsx)(n.code,{children:"some.service.spec.ts"})," \u0430\u0431\u043e ",(0,s.jsx)(n.code,{children:"some.service.test.ts"}),". \u0426\u0435 \u0441\u0443\u0442\u0442\u0454\u0432\u043e \u0441\u043f\u0440\u043e\u0449\u0443\u0454 \u0440\u043e\u0431\u043e\u0442\u0443 \u0437 \u0442\u0435\u0441\u0442\u0430\u043c\u0438, \u0430 \u0442\u0430\u043a\u043e\u0436 \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u0437\u0440\u0430\u0437\u0443 \u0431\u0430\u0447\u0438\u0442\u0438 \u044f\u043a\u0456 \u0444\u0430\u0439\u043b\u0438 \u0449\u0435 \u043d\u0435 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u043e\u0432\u0430\u043d\u0456."]}),"\n",(0,s.jsx)(n.h2,{id:"end-to-end-\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f",children:"End-to-end \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f"}),"\n",(0,s.jsxs)(n.p,{children:["\u041f\u0456\u0434 \u0447\u0430\u0441 end-to-end \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u044e\u0442\u044c \u0440\u043e\u0431\u043e\u0442\u0443 \u0446\u0456\u043b\u043e\u0433\u043e \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443. \u0414\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u043c\u043e\u0436\u043d\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438, \u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, ",(0,s.jsx)(n.a,{href:"https://github.com/ladjs/supertest",children:"supertest"}),". \u0427\u0430\u0441\u0442\u0456\u0448\u0435 \u0437\u0430 \u0432\u0441\u0435, \u0434\u043b\u044f \u0442\u0430\u043a\u043e\u0433\u043e \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e \u0440\u043e\u0431\u0438\u0442\u0438 \u043c\u043e\u043a\u0438 \u0442\u0456\u043b\u044c\u043a\u0438 \u0434\u043b\u044f \u0442\u0438\u0445 \u0441\u0435\u0440\u0432\u0456\u0441\u0456\u0432, \u044f\u043a\u0456 \u043f\u0440\u0430\u0446\u044e\u044e\u0442\u044c \u0456\u0437 \u0437\u043e\u0432\u043d\u0456\u0448\u043d\u0456\u043c\u0438 \u0441\u0435\u0440\u0432\u0456\u0441\u0430\u043c\u0438: \u0437 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043a\u043e\u044e email, \u0437 \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u0438\u0445 \u0456 \u0442.\u0434. \u0420\u0435\u0448\u0442\u0430 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443 \u043f\u0440\u0430\u0446\u044e\u0454 \u0442\u0430\u043a, \u044f\u043a \u0431\u0443\u0434\u0435 \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0443 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u043e\u043c\u0443 \u0440\u0435\u0436\u0438\u043c\u0456."]}),"\n",(0,s.jsxs)(n.p,{children:["\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0440\u043e\u0437\u0433\u043b\u044f\u043d\u0435\u043c\u043e \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u044e, \u043a\u043e\u043b\u0438 \u043c\u0438 \u0440\u043e\u0431\u0438\u043c\u043e \u043c\u043e\u043a \u0434\u043b\u044f ",(0,s.jsx)(n.code,{children:"EmailService"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{12,19}",children:"import request = require('supertest');\nimport { Server } from '@ditsmod/core';\nimport { TestApplication } from '@ditsmod/testing';\n\nimport { AppModule } from '#app/app.module.js';\nimport { EmailService } from '#app/email.service.js';\nimport { InterfaceOfEmailService } from '#app/types.js';\n\ndescribe('End-to-end testing', () => {\n  let server: Server;\n  const query = jest.fn();\n  const MockEmailService = { query } as InterfaceOfEmailService;\n\n  beforeEach(async () => {\n    jest.restoreAllMocks();\n\n    server = await new TestApplication(AppModule)\n      .overrideProviders([\n        { token: EmailService, useValue: MockEmailService }\n      ])\n      .getServer();\n  });\n\n  it('work with EmailService', async () => {\n    const values = [{ one: 1, two: 2 }];\n    query.mockImplementation(() => values);\n\n    await request(server)\n      .get('/get-some-from-email')\n      .expect(200)\n      .expect(values);\n\n    expect(query).toHaveBeenCalledTimes(1);\n\n    server.close();\n  });\n});\n"})}),"\n",(0,s.jsxs)(n.admonition,{title:"\u0414\u0435\u0444\u043e\u043b\u0442\u043d\u0438\u0439 \u0456\u043c\u043f\u043e\u0440\u0442 supertest",type:"info",children:[(0,s.jsxs)(n.p,{children:["\u041f\u0435\u0440\u0448 \u0437\u0430 \u0432\u0441\u0435, \u0437\u0432\u0435\u0440\u043d\u0456\u0442\u044c \u0443\u0432\u0430\u0433\u0443 \u043d\u0430 \u0442\u0435, \u0449\u043e \u0443 \u043f\u0435\u0440\u0448\u043e\u043c\u0443 \u0440\u044f\u0434\u043a\u0443 \u043f\u0440\u0438 \u0456\u043c\u043f\u043e\u0440\u0442\u0456 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0438 ",(0,s.jsx)(n.code,{children:"supertest"})," \u043e\u0434\u043d\u043e\u0447\u0430\u0441\u043d\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u043a\u043b\u044e\u0447\u043e\u0432\u0456 \u0441\u043b\u043e\u0432\u0430 ",(0,s.jsx)(n.code,{children:"import"})," \u0442\u0430 ",(0,s.jsx)(n.code,{children:"reuire"}),". \u0426\u044f \u043e\u0441\u043e\u0431\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u0432\u0438\u043d\u0438\u043a\u0430\u0454 \u0447\u0435\u0440\u0435\u0437 \u0442\u0435, \u0449\u043e ",(0,s.jsx)(n.code,{children:"supertest"})," \u043f\u043e \u0434\u0435\u0444\u043e\u043b\u0442\u0443 \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u0454 \u0444\u0443\u043d\u043a\u0446\u0456\u044e, \u0430 \u043d\u0435 \u043e\u0431'\u0454\u043a\u0442, \u0456 \u0446\u0435 \u043f\u0440\u043e\u0442\u0438\u0440\u0456\u0447\u0456\u0442\u044c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0430\u043c \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443 ES2015+. \u0422\u043e\u043c\u0443 \u043e\u0434\u043d\u0438\u043c \u0456\u0437 \u0432\u0430\u0440\u0456\u0430\u043d\u0442\u0456\u0432 \u0432\u0438\u0440\u0456\u0448\u0435\u043d\u043d\u044f \u0446\u044c\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u043d\u044f \u0454 \u0437\u043c\u0456\u043d\u0430 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e \u0456\u043c\u043f\u043e\u0440\u0442\u0443."]}),(0,s.jsxs)(n.p,{children:["\u0422\u0430\u043a\u043e\u0436 \u043c\u043e\u0436\u043d\u0430 \u0456\u043c\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0446\u044e \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0443 \u043e\u0441\u044c \u0442\u0430\u043a: ",(0,s.jsx)(n.code,{children:"import request from 'supertest'"}),", \u043f\u0440\u0438 \u0446\u044c\u043e\u043c\u0443 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0442\u0430\u043a\u043e\u0436 \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0438 ",(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/tsconfig#esModuleInterop",children:(0,s.jsx)(n.code,{children:'"esModuleInterop": true'})})," \u0443 \u0444\u0430\u0439\u043b\u0456 ",(0,s.jsx)(n.code,{children:"tsconfig"}),"."]})]}),"\n",(0,s.jsxs)(n.p,{children:["\u042f\u043a \u0431\u0430\u0447\u0438\u0442\u0435 \u0443 \u043a\u043e\u0434\u0456 \u0442\u0435\u0441\u0442\u0443, \u0441\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u0441\u0442\u0432\u043e\u0440\u044e\u0454\u0442\u044c\u0441\u044f \u0442\u0435\u0441\u0442\u043e\u0432\u0438\u0439 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043e\u043a \u043d\u0430 \u0431\u0430\u0437\u0456 \u043a\u043b\u0430\u0441\u0443 ",(0,s.jsx)(n.code,{children:"TestApplication"}),", \u043f\u043e\u0442\u0456\u043c \u0440\u043e\u0431\u0438\u0442\u044c\u0441\u044f \u043f\u0456\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043c\u043e\u043a\u0443 \u0434\u043b\u044f ",(0,s.jsx)(n.code,{children:"EmailService"}),". \u0412 \u0441\u0430\u043c\u043e\u043c\u0443 \u043a\u0456\u043d\u0446\u0456 \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u0454\u0442\u044c\u0441\u044f \u043c\u0435\u0442\u043e\u0434 ",(0,s.jsx)(n.code,{children:"getServer()"})," \u0456 \u0442\u0430\u043a\u0438\u043c \u0447\u0438\u043d\u043e\u043c \u0441\u0442\u0432\u043e\u0440\u044e\u0454\u0442\u044c\u0441\u044f \u0442\u0430 \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u0454\u0442\u044c\u0441\u044f \u0432\u0435\u0431\u0441\u0435\u0440\u0432\u0435\u0440, \u044f\u043a\u0438\u0439 \u0449\u0435 \u043d\u0435 \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u0432 \u043c\u0435\u0442\u043e\u0434 ",(0,s.jsx)(n.code,{children:"server.listen()"}),", \u0442\u043e\u043c\u0443 supertest \u043c\u0430\u0454 \u0437\u043c\u043e\u0433\u0443 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u0446\u0435 \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u043f\u0456\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0447\u0438 \u0440\u0430\u043d\u0434\u043e\u043c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 \u043f\u043e\u0440\u0442\u0443, \u0449\u043e \u0454 \u0432\u0430\u0436\u043b\u0438\u0432\u0438\u043c \u043c\u043e\u043c\u0435\u043d\u0442\u043e\u043c \u043f\u0456\u0434 \u0447\u0430\u0441 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0433\u043e \u0432\u0438\u043a\u043b\u0438\u043a\u0443 \u0437\u0440\u0430\u0437\u0443 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u043e\u0445 \u0442\u0435\u0441\u0442\u0456\u0432. \u0422\u0443\u0442 ",(0,s.jsx)(n.code,{children:"AppModule"})," - \u0446\u0435 \u043a\u043e\u0440\u0435\u043d\u0435\u0432\u0438\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443."]}),"\n",(0,s.jsxs)(n.p,{children:["\u041f\u0456\u0434\u043c\u0456\u043d\u0430 \u043c\u043e\u043a\u0456\u0432, \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u043c\u0435\u0442\u043e\u0434\u0443 ",(0,s.jsx)(n.code,{children:"testApplication.overrideProviders()"}),", \u043f\u0440\u0430\u0446\u044e\u0454 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e \u043d\u0430 \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u043c\u0443 \u0440\u0456\u0432\u043d\u0456 \u0456\u0454\u0440\u0430\u0440\u0445\u0456\u0457 \u0456\u043d\u0436\u0435\u043a\u0442\u043e\u0440\u0456\u0432. \u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0438 \u0437 \u043c\u043e\u043a\u0430\u043c\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u044c\u0441\u044f \u0434\u043e DI \u043d\u0430 \u043f\u0435\u0432\u043d\u0438\u0439 \u0440\u0456\u0432\u0435\u043d\u044c \u0456\u0454\u0440\u0430\u0440\u0445\u0456\u0457, \u0442\u0456\u043b\u044c\u043a\u0438 \u044f\u043a\u0449\u043e \u0443 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443 \u043d\u0430 \u0446\u044c\u043e\u043c\u0443 \u0440\u0456\u0432\u043d\u0456 \u0454 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u0456 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0438 \u0437 \u0442\u0430\u043a\u0438\u043c\u0438 \u0441\u0430\u043c\u0438\u043c\u0438 \u0442\u043e\u043a\u0435\u043d\u0430\u043c\u0438."]}),"\n",(0,s.jsxs)(n.p,{children:["\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0454\u043c\u043e \u043f\u043e\u0434\u0456\u0431\u043d\u0456 \u0442\u0435\u0441\u0442\u0438 \u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0432 \u043e\u043a\u0440\u0435\u043c\u043e\u043c\u0443 \u043a\u0430\u0442\u0430\u043b\u043e\u0437\u0456 \u0437 \u043d\u0430\u0437\u0432\u043e\u044e ",(0,s.jsx)(n.code,{children:"test"}),", \u043d\u0430 \u043e\u0434\u043d\u043e\u043c\u0443 \u0440\u0456\u0432\u043d\u0456 \u0437 \u043a\u043e\u0440\u0435\u043d\u0435\u0432\u0438\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043e\u043c ",(0,s.jsx)(n.code,{children:"src"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"\u0432\u043a\u043b\u0430\u0434\u0435\u043d\u0456-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0438-\u0434\u043b\u044f-\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f",children:"\u0412\u043a\u043b\u0430\u0434\u0435\u043d\u0456 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0438 \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f"}),"\n",(0,s.jsxs)(n.p,{children:["\u041d\u0430\u0433\u0430\u0434\u0430\u0454\u043c\u043e, \u0449\u043e \u0443 \u043c\u0435\u0442\u043e\u0434 ",(0,s.jsx)(n.code,{children:"testApplication.overrideProviders()"})," \u0454 \u0441\u0435\u043d\u0441 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u0438 \u043b\u0438\u0448\u0435 \u043c\u043e\u043a\u0438 \u0442\u0438\u0445 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0456\u0432, \u044f\u043a\u0456 \u0443 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443 \u0432\u0438 \u0432\u0436\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043b\u0438 \u0434\u043e DI. \u0412\u0438\u0445\u043e\u0434\u0438\u0442\u044c, \u0449\u043e \u043c\u043e\u043a\u0438 \u043d\u0435 \u043c\u043e\u0436\u0443\u0442\u044c \u043c\u0430\u0442\u0438 \u0437\u0430\u043b\u0435\u0436\u043d\u0456\u0441\u0442\u044c \u0432\u0456\u0434 \u043d\u043e\u0432\u0438\u0445 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0456\u0432, \u044f\u043a\u0438\u0445 \u043d\u0435 \u0456\u0441\u043d\u0443\u0454 \u0443 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443. \u0422\u043e\u0431\u0442\u043e, \u044f\u043a\u0449\u043e \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043e\u043a \u043c\u0430\u0454 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0438 ",(0,s.jsx)(n.code,{children:"Service1"})," \u0442\u0430 ",(0,s.jsx)(n.code,{children:"Service2"}),", \u0442\u043e \u043c\u043e\u043a \u0434\u043b\u044f \u043f\u0456\u0434\u043c\u0456\u043d\u0438 \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u0433\u043e \u0437 \u0446\u0438\u0445 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0456\u0432 \u043d\u0435 \u043c\u043e\u0436\u0435 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u0437\u0430\u043b\u0435\u0436\u043d\u0456\u0441\u0442\u044c, \u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u0432\u0456\u0434 ",(0,s.jsx)(n.code,{children:"SpyService"}),'. \u0421\u0430\u043c\u0435 \u0442\u043e\u043c\u0443 \u0434\u043b\u044f end-to-end \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0432\u0432\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u043f\u043e\u043d\u044f\u0442\u0442\u044f "\u0432\u043a\u043b\u0430\u0434\u0435\u043d\u0438\u0445 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0456\u0432", \u044f\u043a\u0456 \u0432\u0438\u0440\u0456\u0448\u0443\u044e\u0442\u044c \u0437\u0430\u043b\u0435\u0436\u043d\u0456\u0441\u0442\u044c \u0434\u043b\u044f \u043d\u043e\u0432\u0438\u0445 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0456\u0432, \u0437\u0430\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0435\u043d\u0438\u0445 \u0443 \u043c\u043e\u043a\u0430\u0445:']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{6}",children:"const server = await new TestApplication(AppModule)\n  .overrideProviders([\n    {\n      token: Service1,\n      useClass: MockService1,\n      providers: [SpyService],\n    },\n  ])\n  .getServer();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u042f\u043a \u0431\u0430\u0447\u0438\u0442\u0435, \u0442\u0443\u0442 \u043c\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0454\u043c\u043e \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440, \u0432 \u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0456 \u044f\u043a\u043e\u0433\u043e \u0454 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u0456\u0441\u0442\u044c ",(0,s.jsx)(n.code,{children:"providers"}),", \u044f\u043a\u0430 \u043c\u043e\u0436\u0435 \u0439\u0442\u0438 \u043d\u0430 \u043e\u0434\u043d\u043e\u043c\u0443 \u0440\u0456\u0432\u043d\u0456 \u0437 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u0456\u0441\u0442\u044e ",(0,s.jsx)(n.code,{children:"useClass"})," \u0430\u0431\u043e ",(0,s.jsx)(n.code,{children:"useFactory"}),". \u0412 \u0434\u0430\u043d\u043e\u043c\u0443 \u0440\u0430\u0437\u0456, \u043f\u0435\u0440\u0435\u0434\u0431\u0430\u0447\u0430\u0454\u0442\u044c\u0441\u044f \u0449\u043e ",(0,s.jsx)(n.code,{children:"MockService1"})," \u043c\u0430\u0454 \u0437\u0430\u043b\u0435\u0436\u043d\u0456\u0441\u0442\u044c \u0432\u0456\u0434 ",(0,s.jsx)(n.code,{children:"SpyService"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["\u0417\u0432\u0438\u0447\u0430\u0439\u043d\u043e \u0436, \u044f\u043a\u0449\u043e \u0454 \u043c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044c, \u0434\u043b\u044f \u043c\u043e\u043a\u0456\u0432 \u043a\u0440\u0430\u0449\u0435 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 ",(0,s.jsx)(n.code,{children:"useValue"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{8}",children:"const method1 = jest.fn();\nconst mockService1 = { method1 } as Service1;\n\nconst server = await new TestApplication(AppModule)\n  .overrideProviders([\n    {\n      token: Service1,\n      useValue: mockService1,\n    },\n  ])\n  .getServer();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0412 \u0442\u0430\u043a\u043e\u043c\u0443 \u0440\u0430\u0437\u0456 \u0432\u0430\u043c \u043d\u0435 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u0456 \u0432\u043a\u043b\u0430\u0434\u0435\u043d\u0456 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0438. \u0410\u043b\u0435 \u043d\u0435 \u0437\u0430\u0432\u0436\u0434\u0438 \u043f\u0435\u0432\u043d\u0438\u0439 \u0441\u0435\u0440\u0432\u0456\u0441 \u043c\u043e\u0436\u0435 \u043c\u0430\u0442\u0438 \u0442\u0430\u043a\u0438\u0439 \u043f\u0440\u043e\u0441\u0442\u0438\u0439 \u043c\u043e\u043a. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u044f\u043a\u0449\u043e \u0443 \u0434\u0430\u043d\u043e\u043c\u0443 \u0440\u0430\u0437\u0456 ",(0,s.jsx)(n.code,{children:"Service1"})," \u043c\u0430\u0454 \u0437\u0430\u043b\u0435\u0436\u043d\u0456\u0441\u0442\u044c \u0432\u0456\u0434 \u043e\u0431'\u0454\u043a\u0442\u0443 \u0437\u0430\u043f\u0438\u0442\u0443, \u044f\u043a\u0438\u0439 \u0433\u0435\u043d\u0435\u0440\u0443\u0454 Node.js \u0432\u0435\u0431\u0441\u0435\u0440\u0432\u0435\u0440, \u0456 \u0432\u0438 \u043d\u0435 \u0445\u043e\u0447\u0435\u0442\u0435 \u043f\u0456\u0434\u043c\u0456\u043d\u044f\u0442\u0438 \u0446\u0435\u0439 \u043e\u0431'\u0454\u043a\u0442 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u0438\u043c \u043c\u043e\u043a\u043e\u043c, \u0434\u043b\u044f ",(0,s.jsx)(n.code,{children:"Service1"})," \u043c\u043e\u043a \u043c\u043e\u0436\u0435 \u043c\u0430\u0442\u0438 \u0442\u0430\u043a\u0438\u0439 \u0432\u0438\u0433\u043b\u044f\u0434:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{8,14}",children:"import { inject, injectable, NODE_REQ, NodeRequest } from '@ditsmod/core';\nimport { SpyService } from './spy.service.js';\n\n@injectable()\nexport class MockService1 extends Service1 {\n  constructor(\n    @inject(NODE_REQ) private nodeReq: NodeRequest,\n    private spyService: SpyService,\n  ) {\n    super(nodeReq);\n  }\n\n  method1() {\n    this.spyService.setInsights(this.nodeReq.headers);\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0422\u0443\u0442 ",(0,s.jsx)(n.code,{children:"SpyService"})," - \u0446\u0435 \u043d\u043e\u0432\u0438\u0439 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440, \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0439 \u043b\u0438\u0448\u0435 \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f, \u0449\u043e\u0431 \u0447\u0435\u0440\u0435\u0437 \u043d\u044c\u043e\u0433\u043e \u043c\u043e\u0436\u043d\u0430 \u0431\u0443\u043b\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043d\u043e \u043e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u0443 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044e \u0437 \u0440\u043e\u0431\u043e\u0447\u043e\u0433\u043e \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443. \u0412 \u0442\u0430\u043a\u043e\u043c\u0443 \u0440\u0430\u0437\u0456 ",(0,s.jsx)(n.code,{children:"MockService1"})," \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u0438 \u0443 ",(0,s.jsx)(n.code,{children:"useClass"}),", \u0430 \u0443 \u0432\u043a\u043b\u0430\u0434\u0435\u043d\u0438\u0445 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430\u0445 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u0438 \u0432\u0436\u0435 ",(0,s.jsx)(n.code,{children:"SpyService"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{1-2,9}",children:"const setInsights = jest.fn();\nconst spyService = { setInsights } as SpyService;\n\nconst server = await new TestApplication(AppModule)\n  .overrideProviders([\n    {\n      token: Service1,\n      useClass: MockService1,\n      providers: [{ token: SpyService, useValue: spyService }],\n    },\n  ])\n  .getServer();\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>o});var s=r(6540);const i={},c=s.createContext(i);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);