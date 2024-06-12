"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[274],{2065:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var i=o(4848),s=o(8453);const r={sidebar_position:99},d="\u0414\u043e\u043c\u043e\u0432\u043b\u0435\u043d\u043e\u0441\u0442\u0456 \u043f\u043e \u043a\u043e\u0434\u0443",t={id:"developer-guides/conventions",title:"\u0414\u043e\u043c\u043e\u0432\u043b\u0435\u043d\u043e\u0441\u0442\u0456 \u043f\u043e \u043a\u043e\u0434\u0443",description:'\u0422\u0443\u0442 \u043d\u0430\u0432\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0443 \u0432\u0438\u0433\u043b\u044f\u0434\u0456 \u043f\u0430\u0440\u0438 "\u043d\u0430\u0437\u0432\u0430 \u0444\u0430\u0439\u043b\u0443" - "\u0456\u043c\'\u044f \u043a\u043b\u0430\u0441\u0443":',source:"@site/docs/01-developer-guides/99-conventions.md",sourceDirName:"01-developer-guides",slug:"/developer-guides/conventions",permalink:"/developer-guides/conventions",draft:!1,unlisted:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/docs/01-developer-guides/99-conventions.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{sidebar_position:99},sidebar:"tutorialSidebar",previous:{title:"\u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f",permalink:"/developer-guides/testing"},next:{title:"@ditsmod/routing",permalink:"/native-modules/routing"}},l={},c=[];function u(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u0434\u043e\u043c\u043e\u0432\u043b\u0435\u043d\u043e\u0441\u0442\u0456-\u043f\u043e-\u043a\u043e\u0434\u0443",children:"\u0414\u043e\u043c\u043e\u0432\u043b\u0435\u043d\u043e\u0441\u0442\u0456 \u043f\u043e \u043a\u043e\u0434\u0443"}),"\n",(0,i.jsx)(n.p,{children:'\u0422\u0443\u0442 \u043d\u0430\u0432\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0443 \u0432\u0438\u0433\u043b\u044f\u0434\u0456 \u043f\u0430\u0440\u0438 "\u043d\u0430\u0437\u0432\u0430 \u0444\u0430\u0439\u043b\u0443" - "\u0456\u043c\'\u044f \u043a\u043b\u0430\u0441\u0443":'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"hello-world.module.ts"})," - ",(0,i.jsx)(n.code,{children:"HelloWorldModule"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"hello-world.controller.ts"})," - ",(0,i.jsx)(n.code,{children:"HelloWorldController"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"hello-world.service.ts"})," - ",(0,i.jsx)(n.code,{children:"HelloWorldService"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"auth.guard.ts"})," - ",(0,i.jsx)(n.code,{children:"AuthGuard"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u0422\u043e\u0431\u0442\u043e,"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u043d\u0430\u0437\u0432\u0438 \u0431\u0443\u0434\u044c-\u044f\u043a\u0438\u0445 \u0444\u0430\u0439\u043b\u0456\u0432 \u043f\u043e\u0432\u0438\u043d\u043d\u0456 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u0442\u0456\u043b\u044c\u043a\u0438 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0456 \u0431\u0443\u043a\u0432\u0438;"}),"\n",(0,i.jsx)(n.li,{children:"\u044f\u043a\u0449\u043e \u0443 \u043d\u0430\u0437\u0432\u0456 \u0444\u0430\u0439\u043b\u0443 \u0454 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u043b\u0456\u0432, \u0432\u0430\u0440\u0442\u043e \u0440\u043e\u0437\u0434\u0456\u043b\u044f\u0442\u0438 \u0457\u0445 \u0447\u0435\u0440\u0435\u0437 \u0434\u0435\u0444\u0456\u0437;"}),"\n",(0,i.jsxs)(n.li,{children:["\u0440\u043e\u043b\u0456 \u043a\u043b\u0430\u0441\u0456\u0432 \u043f\u043e\u0432\u0438\u043d\u043d\u0456 \u0439\u0442\u0438 \u043f\u0435\u0440\u0435\u0434 \u0440\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u043d\u044f\u043c \u0456 \u043f\u0435\u0440\u0435\u0434 \u043d\u0438\u043c\u0438 \u043f\u043e\u0432\u0438\u043d\u043d\u0430 \u0441\u0442\u0430\u0432\u0438\u0442\u0438\u0441\u044c \u043a\u0440\u0430\u043f\u043a\u0430\n(",(0,i.jsx)(n.code,{children:"*.module.ts"}),", ",(0,i.jsx)(n.code,{children:"*.controller.ts"}),", ",(0,i.jsx)(n.code,{children:"*.service.ts"}),", ",(0,i.jsx)(n.code,{children:"*.guard.ts"}),");"]}),"\n",(0,i.jsxs)(n.li,{children:["\u043d\u0430\u0437\u0432\u0438 \u043a\u043b\u0430\u0441\u0456\u0432 \u043f\u043e\u0432\u0438\u043d\u043d\u0456 \u043f\u043e\u0447\u0438\u043d\u0430\u0442\u0438\u0441\u044c \u0437 \u0432\u0435\u043b\u0438\u043a\u043e\u0457 \u043b\u0456\u0442\u0435\u0440\u0438, \u0456 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u0442\u043e\u0447\u043d\u043e \u0442\u0430\u043a\u0456 \u0436 \u0441\u043b\u043e\u0432\u0430, \u0449\u043e \u0454 \u0443 \u043d\u0430\u0437\u0432\u0456 \u0457\u0445\u043d\u0456\u0445 \u0444\u0430\u0439\u043b\u0456\u0432, \u0430\u043b\u0435 \u0443 \u0441\u0442\u0438\u043b\u0456 ",(0,i.jsx)(n.a,{href:"https://uk.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D0%B1%D0%BB%D1%8E%D0%B6%D0%B8%D0%B9_%D1%80%D0%B5%D0%B3%D1%96%D1%81%D1%82%D1%80",children:"CamelCase"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u041a\u043e\u0440\u0435\u043d\u0435\u0432\u0438\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0454\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0438\u0432\u0430\u0442\u0438 ",(0,i.jsx)(n.code,{children:"AppModule"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["\u041f\u0440\u0438 \u0456\u043c\u043f\u043e\u0440\u0442\u0456 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0454\u0442\u044c\u0441\u044f \u043d\u0435 \u0437\u043c\u0456\u0448\u0443\u0432\u0430\u0442\u0438 \u0456\u043c\u043f\u043e\u0440\u0442 \u0437 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0438\u0445 \u0444\u0430\u0439\u043b\u0456\u0432 \u0442\u0430 \u0456\u043c\u043f\u043e\u0440\u0442 \u0437 ",(0,i.jsx)(n.code,{children:"node_modules"}),". \u0412\u0433\u043e\u0440\u0456 \u0439\u0434\u0443\u0442\u044c \u0456\u043c\u043f\u043e\u0440\u0442\u0438 \u0437 ",(0,i.jsx)(n.code,{children:"node_modules"}),", \u0447\u0435\u0440\u0435\u0437 \u043e\u0434\u0438\u043d \u0440\u044f\u0434\u043e\u043a \u0439\u0434\u0443\u0442\u044c \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0456 \u0456\u043c\u043f\u043e\u0440\u0442\u0438:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { injectable } from '@ditsmod/core';\nimport { CanActivate, Status } from '@ditsmod/core';\n\nimport { AuthService } from './auth.service.js';\nimport { Permission } from './permission.js';\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u0422\u043e\u043a\u0435\u043d\u0438 \u0433\u0440\u0443\u043f \u0440\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u044c \u043f\u043e\u0432\u0438\u043d\u043d\u0456 \u043c\u0430\u0442\u0438 \u0437\u0430\u043a\u0456\u043d\u0447\u0435\u043d\u043d\u044f ",(0,i.jsx)(n.code,{children:"_EXTENSIONS"}),", \u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434 ",(0,i.jsx)(n.code,{children:"MY_EXTENSIONS"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>t});var i=o(6540);const s={},r=i.createContext(s);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);