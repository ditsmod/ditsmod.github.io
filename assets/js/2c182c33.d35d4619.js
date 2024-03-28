"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[882],{3921:(e,o,d)=>{d.r(o),d.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>t});var i=d(4848),r=d(8453);const l={sidebar_position:9},s="\u041a\u043e\u043b\u0456\u0437\u0456\u0457 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0456\u0432",n={id:"developer-guides/providers-collisions",title:"\u041a\u043e\u043b\u0456\u0437\u0456\u0457 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0456\u0432",description:"\u0423\u044f\u0432\u0456\u0442\u044c, \u0449\u043e \u0443 \u0432\u0430\u0441 \u0454 Module3, \u043a\u0443\u0434\u0438 \u0432\u0438 \u0456\u043c\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u043b\u0438 Module2 \u0442\u0430 Module1. \u0412\u0438 \u0437\u0440\u043e\u0431\u0438\u043b\u0438 \u0442\u0430\u043a\u0438\u0439 \u0456\u043c\u043f\u043e\u0440\u0442, \u0431\u043e \u0432\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e Service2 \u0442\u0430 Service1 \u0456\u0437 \u0446\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0456\u0432. \u0412\u0438 \u043f\u0440\u043e\u0433\u043b\u044f\u0434\u0430\u0454\u0442\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0440\u043e\u0431\u043e\u0442\u0438 \u0434\u0430\u043d\u0438\u0445 \u0441\u0435\u0440\u0432\u0456\u0441\u0456\u0432, \u0430\u043b\u0435 \u043f\u043e \u044f\u043a\u0456\u0439\u0441\u044c \u043f\u0440\u0438\u0447\u0438\u043d\u0456 Service1 \u043f\u0440\u0430\u0446\u044e\u0454 \u043d\u0435 \u0442\u0430\u043a \u044f\u043a \u043e\u0447\u0456\u043a\u0443\u0454\u0442\u044c\u0441\u044f. \u0412\u0438 \u043f\u043e\u0447\u0438\u043d\u0430\u0454\u0442\u0435 \u0434\u0435\u0431\u0430\u0436\u0438\u0442\u0438 \u0456 \u0432\u0438\u044f\u0432\u043b\u044f\u0454\u0442\u044c\u0441\u044f, \u0449\u043e Service1 \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u044e\u0442\u044c \u043e\u0431\u0438\u0434\u0432\u0430 \u043c\u043e\u0434\u0443\u043b\u0456: Module2 \u0442\u0430 Module1. \u0412\u0438 \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043b\u0438, \u0449\u043e Service1 \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438\u043c\u0435\u0442\u044c\u0441\u044f \u043b\u0438\u0448\u0435 \u0437 Module1, \u0430\u043b\u0435 \u043d\u0430\u0441\u043f\u0440\u0430\u0432\u0434\u0456 \u0441\u043f\u0440\u0430\u0446\u044e\u0432\u0430\u043b\u0430 \u0442\u0430 \u0432\u0435\u0440\u0441\u0456\u044f, \u0449\u043e \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u0454\u0442\u044c\u0441\u044f \u0437 Module2.",source:"@site/docs/01-developer-guides/09-providers-collisions.md",sourceDirName:"01-developer-guides",slug:"/developer-guides/providers-collisions",permalink:"/developer-guides/providers-collisions",draft:!1,unlisted:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/docs/01-developer-guides/09-providers-collisions.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u0415\u043a\u0441\u043f\u043e\u0440\u0442, \u0456\u043c\u043f\u043e\u0440\u0442, \u043f\u0440\u0438\u043a\u0440\u0456\u043f\u043b\u0435\u043d\u043d\u044f",permalink:"/developer-guides/exports-and-imports"},next:{title:"\u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f",permalink:"/developer-guides/testing"}},c={},t=[{value:"\u0412\u0438\u0440\u0456\u0448\u0435\u043d\u043d\u044f \u043a\u043e\u043b\u0456\u0437\u0456\u0457",id:"\u0432\u0438\u0440\u0456\u0448\u0435\u043d\u043d\u044f-\u043a\u043e\u043b\u0456\u0437\u0456\u0457",level:2}];function u(e){const o={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"\u043a\u043e\u043b\u0456\u0437\u0456\u0457-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0456\u0432",children:"\u041a\u043e\u043b\u0456\u0437\u0456\u0457 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0456\u0432"}),"\n",(0,i.jsxs)(o.p,{children:["\u0423\u044f\u0432\u0456\u0442\u044c, \u0449\u043e \u0443 \u0432\u0430\u0441 \u0454 ",(0,i.jsx)(o.code,{children:"Module3"}),", \u043a\u0443\u0434\u0438 \u0432\u0438 \u0456\u043c\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u043b\u0438 ",(0,i.jsx)(o.code,{children:"Module2"})," \u0442\u0430 ",(0,i.jsx)(o.code,{children:"Module1"}),". \u0412\u0438 \u0437\u0440\u043e\u0431\u0438\u043b\u0438 \u0442\u0430\u043a\u0438\u0439 \u0456\u043c\u043f\u043e\u0440\u0442, \u0431\u043e \u0432\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e ",(0,i.jsx)(o.code,{children:"Service2"})," \u0442\u0430 ",(0,i.jsx)(o.code,{children:"Service1"})," \u0456\u0437 \u0446\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0456\u0432. \u0412\u0438 \u043f\u0440\u043e\u0433\u043b\u044f\u0434\u0430\u0454\u0442\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0440\u043e\u0431\u043e\u0442\u0438 \u0434\u0430\u043d\u0438\u0445 \u0441\u0435\u0440\u0432\u0456\u0441\u0456\u0432, \u0430\u043b\u0435 \u043f\u043e \u044f\u043a\u0456\u0439\u0441\u044c \u043f\u0440\u0438\u0447\u0438\u043d\u0456 ",(0,i.jsx)(o.code,{children:"Service1"})," \u043f\u0440\u0430\u0446\u044e\u0454 \u043d\u0435 \u0442\u0430\u043a \u044f\u043a \u043e\u0447\u0456\u043a\u0443\u0454\u0442\u044c\u0441\u044f. \u0412\u0438 \u043f\u043e\u0447\u0438\u043d\u0430\u0454\u0442\u0435 \u0434\u0435\u0431\u0430\u0436\u0438\u0442\u0438 \u0456 \u0432\u0438\u044f\u0432\u043b\u044f\u0454\u0442\u044c\u0441\u044f, \u0449\u043e ",(0,i.jsx)(o.code,{children:"Service1"})," \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u044e\u0442\u044c \u043e\u0431\u0438\u0434\u0432\u0430 \u043c\u043e\u0434\u0443\u043b\u0456: ",(0,i.jsx)(o.code,{children:"Module2"})," \u0442\u0430 ",(0,i.jsx)(o.code,{children:"Module1"}),". \u0412\u0438 \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043b\u0438, \u0449\u043e ",(0,i.jsx)(o.code,{children:"Service1"})," \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438\u043c\u0435\u0442\u044c\u0441\u044f \u043b\u0438\u0448\u0435 \u0437 ",(0,i.jsx)(o.code,{children:"Module1"}),", \u0430\u043b\u0435 \u043d\u0430\u0441\u043f\u0440\u0430\u0432\u0434\u0456 \u0441\u043f\u0440\u0430\u0446\u044e\u0432\u0430\u043b\u0430 \u0442\u0430 \u0432\u0435\u0440\u0441\u0456\u044f, \u0449\u043e \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u0454\u0442\u044c\u0441\u044f \u0437 ",(0,i.jsx)(o.code,{children:"Module2"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"\u0429\u043e\u0431 \u0446\u044c\u043e\u0433\u043e \u043d\u0435 \u0441\u0442\u0430\u043b\u043e\u0441\u044c, \u044f\u043a\u0449\u043e \u0432\u0438 \u0456\u043c\u043f\u043e\u0440\u0442\u0443\u0454\u0442\u0435 \u0434\u0432\u0430 \u0430\u0431\u043e \u0431\u0456\u043b\u044c\u0448\u0435 \u043c\u043e\u0434\u0443\u043b\u0456, \u0432 \u044f\u043a\u0438\u0445 \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u044e\u0442\u044c\u0441\u044f \u043d\u0435\u0456\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u0456 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0438 \u0437 \u043e\u0434\u043d\u0430\u043a\u043e\u0432\u0438\u043c \u0442\u043e\u043a\u0435\u043d\u043e\u043c, Ditsmod \u043a\u0438\u0434\u0430\u0442\u0438\u043c\u0435 \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0442\u0430\u043a\u0443 \u043f\u043e\u043c\u0438\u043b\u043a\u0443:"}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:"Error: Importing providers to Module3 failed: exports from Module2 and Module1 causes collision with Service1. If Module3 declared in your application (it is not imported from node_modules), you should add Service1 to resolvedCollisionsPer* in this module. For example: resolvedCollisionsPerReq: [ [Service1, Module1] ]."}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"\u041a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e \u0443 \u0446\u0456\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u0457:"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["\u0456 ",(0,i.jsx)(o.code,{children:"Module1"})," \u043f\u0456\u0434\u043c\u0456\u043d\u044e\u0454, \u0430 \u043f\u043e\u0442\u0456\u043c \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u0454 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 \u0437 \u0442\u043e\u043a\u0435\u043d\u043e\u043c ",(0,i.jsx)(o.code,{children:"Service1"}),";"]}),"\n",(0,i.jsxs)(o.li,{children:["\u0456 ",(0,i.jsx)(o.code,{children:"Module2"})," \u043f\u0456\u0434\u043c\u0456\u043d\u044e\u0454, \u0430 \u043f\u043e\u0442\u0456\u043c \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u0454 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 \u0437 \u0442\u043e\u043a\u0435\u043d\u043e\u043c ",(0,i.jsx)(o.code,{children:"Service1"}),";"]}),"\n",(0,i.jsxs)(o.li,{children:["\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0438 \u0437 \u0442\u043e\u043a\u0435\u043d\u043e\u043c ",(0,i.jsx)(o.code,{children:"Service1"})," \u0454 \u043d\u0435\u0456\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u0438\u043c\u0438 \u0443 ",(0,i.jsx)(o.code,{children:"Module1"})," \u0442\u0430 ",(0,i.jsx)(o.code,{children:"Module2"}),", \u0442\u043e\u0431\u0442\u043e \u0437 ",(0,i.jsx)(o.code,{children:"Module2"})," \u043c\u043e\u0436\u0435 \u0435\u0441\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044c, \u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u043e\u0431'\u0454\u043a\u0442 ",(0,i.jsx)(o.code,{children:"{ token: Service1, useValue: {} }"}),", \u0430 \u0437 ",(0,i.jsx)(o.code,{children:"Module1"})," \u043c\u043e\u0436\u0435 \u0435\u0441\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044c ",(0,i.jsx)(o.code,{children:"Service1"})," \u0443 \u0432\u0438\u0433\u043b\u044f\u0434\u0456 \u043a\u043b\u0430\u0441\u0443."]}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["\u0406 \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u043e\u0431\u0438\u0434\u0432\u0430 \u0446\u0456 \u043c\u043e\u0434\u0443\u043b\u0456 \u0456\u043c\u043f\u043e\u0440\u0442\u0443\u044e\u0442\u044c\u0441\u044f \u0443 ",(0,i.jsx)(o.code,{children:"Module3"}),', \u044f\u043a\u0440\u0430\u0437 \u0442\u043e\u043c\u0443 \u0456 \u0432\u0438\u043d\u0438\u043a\u0430\u0454 "\u043a\u043e\u043b\u0456\u0437\u0456\u044f \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0456\u0432", \u0440\u043e\u0437\u0440\u043e\u0431\u043d\u0438\u043a \u043c\u043e\u0436\u0435 \u043d\u0435 \u0437\u043d\u0430\u0442\u0438 \u044f\u043a\u0430 \u0456\u0437 \u0446\u0438\u0445 \u043f\u0456\u0434\u043c\u0456\u043d \u0431\u0443\u0434\u0435 \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0432 ',(0,i.jsx)(o.code,{children:"Module3"}),"."]}),"\n",(0,i.jsx)(o.h2,{id:"\u0432\u0438\u0440\u0456\u0448\u0435\u043d\u043d\u044f-\u043a\u043e\u043b\u0456\u0437\u0456\u0457",children:"\u0412\u0438\u0440\u0456\u0448\u0435\u043d\u043d\u044f \u043a\u043e\u043b\u0456\u0437\u0456\u0457"}),"\n",(0,i.jsxs)(o.p,{children:["\u042f\u043a\u0449\u043e ",(0,i.jsx)(o.code,{children:"Module3"})," \u043e\u0433\u043e\u043b\u043e\u0448\u0435\u043d\u043e \u0443 \u0432\u0430\u0448\u043e\u043c\u0443 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443 (\u0442\u043e\u0431\u0442\u043e \u043d\u0435 \u0456\u043c\u043f\u043e\u0440\u0442\u043e\u0432\u0430\u043d\u043e \u0437 ",(0,i.jsx)(o.code,{children:"node_modules"}),"), \u043a\u043e\u043b\u0456\u0437\u0456\u044f \u0432\u0438\u0440\u0456\u0448\u0443\u0454\u0442\u044c\u0441\u044f \u0448\u043b\u044f\u0445\u043e\u043c \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0434\u043e ",(0,i.jsx)(o.code,{children:"resolvedCollisionsPer*"})," \u043c\u0430\u0441\u0438\u0432\u0443 \u0437 \u0434\u0432\u043e\u0445 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0456\u0432, \u0434\u0435 \u043d\u0430 \u043f\u0435\u0440\u0448\u043e\u043c\u0443 \u043c\u0456\u0441\u0446\u0456 \u0439\u0434\u0435 \u0442\u043e\u043a\u0435\u043d \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430, \u0430 \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u043c\u0443 - \u043c\u043e\u0434\u0443\u043b\u044c, \u0437 \u044f\u043a\u043e\u0433\u043e \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0431\u0440\u0430\u0442\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u0438\u0439 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-ts",metastring:"{6}",children:"import { Module1, Service1 } from './module1.js';\nimport { Module2 } from './module2.js';\n\n@featureModule({\n  imports: [Module2, Module1],\n  resolvedCollisionsPerReq: [ [Service1, Module1] ]\n})\nexport class Module3 {}\n"})}),"\n",(0,i.jsxs)(o.p,{children:["\u042f\u043a\u0449\u043e ",(0,i.jsx)(o.code,{children:"Module3"})," \u0432\u0438 \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430 \u043f\u0430\u043a\u0435\u0442\u0456\u0432 (npm, npm run \u0456 \u0442.\u0434.), \u043d\u0435\u043c\u0430\u0454 \u0441\u0435\u043d\u0441\u0443 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e \u0437\u043c\u0456\u043d\u044e\u0432\u0430\u0442\u0438 \u0446\u0435\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0449\u043e\u0431 \u0432\u0438\u0440\u0456\u0448\u0438\u0442\u0438 \u043a\u043e\u043b\u0456\u0437\u0456\u044e. \u0422\u0430\u043a\u0430 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u044f \u043c\u043e\u0436\u0435 \u0432\u0438\u043d\u0438\u043a\u043d\u0443\u0442\u0438 \u043b\u0438\u0448\u0435 \u044f\u043a\u0449\u043e ",(0,i.jsx)(o.code,{children:"Module1"})," \u0442\u0430 ",(0,i.jsx)(o.code,{children:"Module2"})," \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u044e\u0442\u044c\u0441\u044f \u0437 \u043a\u043e\u0440\u0435\u043d\u0435\u0432\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f, \u0442\u043e\u043c\u0443 \u0432\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u043e\u0434\u0438\u043d \u0456\u0437 \u0446\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0456\u0432 \u0437\u0432\u0456\u0434\u0442\u0438. \u041d\u0443 \u0456, \u0437\u0432\u0438\u0447\u0430\u0439\u043d\u043e \u0436, \u043f\u0456\u0441\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u0432\u0430\u043c \u043f\u0440\u0438\u0439\u0434\u0435\u0442\u044c\u0441\u044f \u044f\u0432\u043d\u043e \u0456\u043c\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0438\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0443 \u0442\u0456 \u043c\u043e\u0434\u0443\u043b\u0456, \u0434\u0435 \u0432\u0456\u043d \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0438\u0439."]})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,o,d)=>{d.d(o,{R:()=>s,x:()=>n});var i=d(6540);const r={},l=i.createContext(r);function s(e){const o=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:o},e.children)}}}]);