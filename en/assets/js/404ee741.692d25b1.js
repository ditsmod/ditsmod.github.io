"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[67],{785:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>a,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"native-modules/session-cookie","title":"@ditsmod/session-cookie","description":"The @ditsmod/session-cookie module simplifies working with the session cookie. A ready-made example of using this module can be found in the Ditsmod repository.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/02-session-cookie.md","sourceDirName":"02-native-modules","slug":"/native-modules/session-cookie","permalink":"/en/native-modules/session-cookie","draft":false,"unlisted":false,"editUrl":"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/02-session-cookie.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"@ditsmod/body-parser","permalink":"/en/native-modules/body-parser"},"next":{"title":"@ditsmod/jwt","permalink":"/en/native-modules/jwt"}}');var i=s(4848),t=s(8453);const r={sidebar_position:2},d="@ditsmod/session-cookie",a={},l=[{value:"Installation, importing and usage",id:"installation-importing-and-usage",level:2}];function c(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"ditsmodsession-cookie",children:"@ditsmod/session-cookie"})}),"\n",(0,i.jsxs)(o.p,{children:["The ",(0,i.jsx)(o.code,{children:"@ditsmod/session-cookie"})," module simplifies working with the session cookie. A ready-made example of using this module can be found in the ",(0,i.jsx)(o.a,{href:"https://github.com/ditsmod/ditsmod/tree/main/examples/19-session-cookie",children:"Ditsmod repository"}),"."]}),"\n",(0,i.jsx)(o.h2,{id:"installation-importing-and-usage",children:"Installation, importing and usage"}),"\n",(0,i.jsx)(o.p,{children:"Installation:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"npm i @ditsmod/session-cookie\n"})}),"\n",(0,i.jsx)(o.p,{children:"Importing:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-ts",children:"import { rootModule } from '@ditsmod/core';\nimport { SessionCookieModule } from '@ditsmod/session-cookie';\n\nconst sessionModuleWithParams = SessionCookieModule.withParams({\n  cookieName: 'custom-session-name',\n  httpOnly: true,\n});\n\n@rootModule({\n  imports: [\n    sessionModuleWithParams,\n    // ...\n  ],\n  exports: [sessionModuleWithParams],\n})\nexport class AppModule {}\n"})}),"\n",(0,i.jsx)(o.p,{children:"Usage:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-ts",children:"import { controller, Res } from '@ditsmod/core';\nimport { route } from '@ditsmod/routing';\nimport { SessionCookie } from '@ditsmod/session-cookie';\n\n@controller()\nexport class HelloWorldController {\n  constructor(private session: SessionCookie, private res: Res) {}\n\n  @route('GET', 'set')\n  setCookie() {\n    this.session.id = '123';\n    this.res.send('Hello, World!\\n');\n  }\n\n  @route('GET', 'get')\n  getCookie() {\n    this.res.send(`session ID: ${this.session.id}`);\n  }\n}\n"})})]})}function m(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,o,s)=>{s.d(o,{R:()=>r,x:()=>d});var n=s(6540);const i={},t=n.createContext(i);function r(e){const o=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);