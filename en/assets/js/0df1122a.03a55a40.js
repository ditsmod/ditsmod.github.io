"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[424],{1801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(3117),o=(n(7294),n(3905));const i={sidebar_position:10},a="Ditsmod coding style guide",l={unversionedId:"developer-guides/conventions",id:"developer-guides/conventions",title:"Ditsmod coding style guide",description:'Here is the recommended format in the form of a pair "file name" - "class name":',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/01-developer-guides/10-conventions.md",sourceDirName:"01-developer-guides",slug:"/developer-guides/conventions",permalink:"/en/developer-guides/conventions",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/01-developer-guides/10-conventions.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/en/developer-guides/testing"},next:{title:"@ditsmod/router",permalink:"/en/native-modules/router"}},s={},d=[],p={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ditsmod-coding-style-guide"},"Ditsmod coding style guide"),(0,o.kt)("p",null,'Here is the recommended format in the form of a pair "file name" - "class name":'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hello-world.module.ts")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"HelloWorldModule"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hello-world.controller.ts")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"HelloWorldController"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hello-world.service.ts")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"HelloWorldService"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"auth.guard.ts")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"AuthGuard"),".")),(0,o.kt)("p",null,"That is,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"the names of any files must contain only lowercase letters;"),(0,o.kt)("li",{parentName:"ol"},"if there are several words in the file name, you should separate them with a hyphen;"),(0,o.kt)("li",{parentName:"ol"},"class roles must precede the extension and must be preceded by a dot (",(0,o.kt)("inlineCode",{parentName:"li"},"*.module.ts"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"*.controller.ts"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"*.service.ts"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"*.guard.ts"),");"),(0,o.kt)("li",{parentName:"ol"},"class names must start with a capital letter, and contain exactly the same words as in the name of their files, but in the style of ",(0,o.kt)("a",{parentName:"li",href:"https://uk.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D0%B1%D0%BB%D1%8E%D0%B6%D0%B8%D0%B9_%D1%80%D0%B5%D0%B3%D1%96%D1%81%D1%82%D1%80"},"CamelCase"),".")),(0,o.kt)("p",null,"It is recommended to call the root module - ",(0,o.kt)("inlineCode",{parentName:"p"},"AppModule"),"."),(0,o.kt)("p",null,"When importing, it is recommended not to mix import from local files and import from ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),". At the top are imports from ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),", and then retreating one line are local imports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { injectable } from '@ditsmod/core';\nimport { CanActivate, Status } from '@ditsmod/core';\n\nimport { AuthService } from './auth.service';\nimport { Permission } from './permission';\n")),(0,o.kt)("p",null,"Extension group token names must end in ",(0,o.kt)("inlineCode",{parentName:"p"},"_EXTENSIONS"),", such as ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_EXTENSIONS"),"."))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=o,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);