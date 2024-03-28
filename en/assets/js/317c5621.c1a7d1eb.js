"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[139],{5128:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=o(4848),i=o(8453);const t={sidebar_position:10},r="Ditsmod coding style guide",d={id:"developer-guides/conventions",title:"Ditsmod coding style guide",description:'Here is the recommended format in the form of a pair "file name" - "class name":',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/01-developer-guides/99-conventions.md",sourceDirName:"01-developer-guides",slug:"/developer-guides/conventions",permalink:"/en/developer-guides/conventions",draft:!1,unlisted:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/01-developer-guides/99-conventions.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Collision of providers",permalink:"/en/developer-guides/providers-collisions"},next:{title:"Testing",permalink:"/en/developer-guides/testing"}},l={},c=[];function a(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"ditsmod-coding-style-guide",children:"Ditsmod coding style guide"}),"\n",(0,s.jsx)(n.p,{children:'Here is the recommended format in the form of a pair "file name" - "class name":'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hello-world.module.ts"})," - ",(0,s.jsx)(n.code,{children:"HelloWorldModule"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hello-world.controller.ts"})," - ",(0,s.jsx)(n.code,{children:"HelloWorldController"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hello-world.service.ts"})," - ",(0,s.jsx)(n.code,{children:"HelloWorldService"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"auth.guard.ts"})," - ",(0,s.jsx)(n.code,{children:"AuthGuard"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"That is,"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"the names of any files must contain only lowercase letters;"}),"\n",(0,s.jsx)(n.li,{children:"if there are several words in the file name, you should separate them with a hyphen;"}),"\n",(0,s.jsxs)(n.li,{children:["class roles must precede the extension and must be preceded by a dot (",(0,s.jsx)(n.code,{children:"*.module.ts"}),", ",(0,s.jsx)(n.code,{children:"*.controller.ts"}),", ",(0,s.jsx)(n.code,{children:"*.service.ts"}),", ",(0,s.jsx)(n.code,{children:"*.guard.ts"}),");"]}),"\n",(0,s.jsxs)(n.li,{children:["class names must start with a capital letter, and contain exactly the same words as in the name of their files, but in the style of ",(0,s.jsx)(n.a,{href:"https://uk.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D0%B1%D0%BB%D1%8E%D0%B6%D0%B8%D0%B9_%D1%80%D0%B5%D0%B3%D1%96%D1%81%D1%82%D1%80",children:"CamelCase"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["It is recommended to call the root module - ",(0,s.jsx)(n.code,{children:"AppModule"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When importing, it is recommended not to mix import from local files and import from ",(0,s.jsx)(n.code,{children:"node_modules"}),". At the top are imports from ",(0,s.jsx)(n.code,{children:"node_modules"}),", and then retreating one line are local imports:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { injectable } from '@ditsmod/core';\nimport { CanActivate, Status } from '@ditsmod/core';\n\nimport { AuthService } from './auth.service.js';\nimport { Permission } from './permission.js';\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Extension group token names must end in ",(0,s.jsx)(n.code,{children:"_EXTENSIONS"}),", such as ",(0,s.jsx)(n.code,{children:"MY_EXTENSIONS"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>d});var s=o(6540);const i={},t=s.createContext(i);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);