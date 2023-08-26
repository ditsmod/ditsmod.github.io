"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[109],{3905:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>f});var n=t(7294);function i(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function s(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?s(Object(t),!0).forEach((function(o){i(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,n,i=function(e,o){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],o.indexOf(t)>=0||(i[t]=e[t]);return i}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),d=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):r(r({},o),e)),t},c=function(e){var o=d(e.components);return n.createElement(l.Provider,{value:o},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},p=n.forwardRef((function(e,o){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=d(t),p=i,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||s;return t?n.createElement(f,r(r({ref:o},c),{},{components:t})):n.createElement(f,r({ref:o},c))}));function f(e,o){var t=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=p;var a={};for(var l in o)hasOwnProperty.call(o,l)&&(a[l]=o[l]);a.originalType=e,a[u]="string"==typeof e?e:i,r[1]=a;for(var d=2;d<s;d++)r[d]=t[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4422:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=t(7462),i=(t(7294),t(3905));const s={sidebar_position:2},r="@ditsmod/session-cookie",a={unversionedId:"native-modules/session-cookie",id:"native-modules/session-cookie",title:"@ditsmod/session-cookie",description:"The @ditsmod/session-cookie module simplifies working with the session cookie. A ready-made example of using this module can be found in the Ditsmod repository.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/02-session-cookie.md",sourceDirName:"02-native-modules",slug:"/native-modules/session-cookie",permalink:"/en/native-modules/session-cookie",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/02-session-cookie.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"@ditsmod/body-parser",permalink:"/en/native-modules/body-parser"},next:{title:"@ditsmod/jwt",permalink:"/en/native-modules/jwt"}},l={},d=[{value:"Installation, importing and usage",id:"installation-importing-and-usage",level:2}],c={toc:d},u="wrapper";function m(e){let{components:o,...t}=e;return(0,i.kt)(u,(0,n.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ditsmodsession-cookie"},"@ditsmod/session-cookie"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@ditsmod/session-cookie")," module simplifies working with the session cookie. A ready-made example of using this module can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/tree/main/examples/19-session-cookie"},"Ditsmod repository"),"."),(0,i.kt)("h2",{id:"installation-importing-and-usage"},"Installation, importing and usage"),(0,i.kt)("p",null,"Installation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @ditsmod/session-cookie\n")),(0,i.kt)("p",null,"Importing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { rootModule } from '@ditsmod/core';\nimport { SessionCookieModule } from '@ditsmod/session-cookie';\n\nconst sessionModuleWithParams = SessionCookieModule.withParams({\n  cookieName: 'custom-session-name',\n  httpOnly: true,\n});\n\n@rootModule({\n  imports: [\n    sessionModuleWithParams,\n    // ...\n  ],\n  exports: [sessionModuleWithParams],\n})\nexport class AppModule {}\n")),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { controller, Res, route } from '@ditsmod/core';\nimport { SessionCookie } from '@ditsmod/session-cookie';\n\n@controller()\nexport class HelloWorldController {\n  constructor(private session: SessionCookie, private res: Res) {}\n\n  @route('GET', 'set')\n  setCookie() {\n    this.session.id = '123';\n    this.res.send('Hello World!\\n');\n  }\n\n  @route('GET', 'get')\n  getCookie() {\n    this.res.send(`session ID: ${this.session.id}`);\n  }\n}\n")))}m.isMDXComponent=!0}}]);