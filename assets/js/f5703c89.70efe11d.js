"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[55],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(y,p(p({ref:t},c),{},{components:r})):n.createElement(y,p({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2375:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(3117),o=(r(7294),r(3905));const a={},p="06-body-parser",i={unversionedId:"examples/body-parser",id:"examples/body-parser",title:"06-body-parser",description:"\u0429\u043e\u0431 \u0441\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u0442\u0438 \u0434\u0430\u043d\u0438\u0439 \u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e \u0441\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u043f\u0456\u0434\u0433\u043e\u0442\u0443\u0432\u0430\u0442\u0438 \u043f\u0435\u0440\u0435\u0434\u0443\u043c\u043e\u0432\u0438.",source:"@site/docs/10-examples/06-body-parser.md",sourceDirName:"10-examples",slug:"/examples/body-parser",permalink:"/examples/body-parser",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/docs/10-examples/06-body-parser.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"05-nested-routes",permalink:"/examples/nested-routes"},next:{title:"07-composing-modules",permalink:"/examples/dynamically-composing-modules"}},s={},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"06-body-parser"},"06-body-parser"),(0,o.kt)("p",null,"\u0429\u043e\u0431 \u0441\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u0442\u0438 \u0434\u0430\u043d\u0438\u0439 \u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e \u0441\u043f\u043e\u0447\u0430\u0442\u043a\u0443 ",(0,o.kt)("a",{parentName:"p",href:"./prerequisite"},"\u043f\u0456\u0434\u0433\u043e\u0442\u0443\u0432\u0430\u0442\u0438 \u043f\u0435\u0440\u0435\u0434\u0443\u043c\u043e\u0432\u0438"),"."),(0,o.kt)("p",null,"\u041c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0438 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043e\u043a \u0437 \u043f\u0435\u0440\u0448\u043e\u0433\u043e \u0442\u0435\u0440\u043c\u0456\u043d\u0430\u043b\u0443:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start6\n")),(0,o.kt)("p",null,"\u0417 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0442\u0435\u0440\u043c\u0456\u043d\u0430\u043b\u0443 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0440\u043e\u0431\u043e\u0442\u0443:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -isS localhost:3000 -d '{\"one\":1}' -H 'content-type: application/json'\n")))}u.isMDXComponent=!0}}]);