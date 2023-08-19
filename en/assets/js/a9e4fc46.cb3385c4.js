"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[533],{7501:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(3117),o=(r(7294),r(3905));const a={sidebar_position:9},i="HttpErrorHandler",p={unversionedId:"components-of-ditsmod-app/http-error-handler",id:"components-of-ditsmod-app/http-error-handler",title:"HttpErrorHandler",description:"\u0423\u0441\u0456 \u043f\u043e\u043c\u0438\u043b\u043a\u0438, \u044f\u043a\u0456 \u0432\u0438\u043d\u0438\u043a\u0430\u044e\u0442\u044c \u043f\u0456\u0434 \u0447\u0430\u0441 \u043e\u0431\u0440\u043e\u0431\u043a\u0438 HTTP-\u0437\u0430\u043f\u0438\u0442\u0443, \u0456 \u044f\u043a\u0456 \u0432\u0438 \u043d\u0435 \u0437\u043b\u043e\u0432\u0438\u043b\u0438 \u0443 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0430\u0445, \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0430\u0445, \u0430\u0431\u043e \u0441\u0435\u0440\u0432\u0456\u0441\u0430\u0445, \u043f\u043e\u0442\u0440\u0430\u043f\u043b\u044f\u044e\u0442\u044c \u0434\u043e DefaultHttpErrorHandler. \u0426\u0435\u0439 \u043e\u0431\u0440\u043e\u0431\u043d\u0438\u043a \u043f\u0435\u0440\u0435\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0434\u043e \u0440\u0435\u0454\u0441\u0442\u0440\u0443 DI \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u0437\u0430\u043f\u0438\u0442\u0443, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0432\u0456\u043d \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u043c\u0430\u0442\u0438 \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u043e\u0431'\u0454\u043a\u0442\u0430 HTTP-\u0437\u0430\u043f\u0438\u0442\u0443/\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456, \u0434\u043b\u044f \u043c\u043e\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u0456 \u0444\u043e\u0440\u043c\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u0430 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043a\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456 \u043a\u043b\u0456\u0454\u043d\u0442\u0443.",source:"@site/docs/00-components-of-ditsmod-app/09-http-error-handler.md",sourceDirName:"00-components-of-ditsmod-app",slug:"/components-of-ditsmod-app/http-error-handler",permalink:"/en/components-of-ditsmod-app/http-error-handler",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/09-http-error-handler.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"LogMediator",permalink:"/en/components-of-ditsmod-app/log-mediator"},next:{title:"Testing",permalink:"/en/developer-guides/testing"}},c={},s=[],d={toc:s};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"httperrorhandler"},"HttpErrorHandler"),(0,o.kt)("p",null,"\u0423\u0441\u0456 \u043f\u043e\u043c\u0438\u043b\u043a\u0438, \u044f\u043a\u0456 \u0432\u0438\u043d\u0438\u043a\u0430\u044e\u0442\u044c \u043f\u0456\u0434 \u0447\u0430\u0441 \u043e\u0431\u0440\u043e\u0431\u043a\u0438 HTTP-\u0437\u0430\u043f\u0438\u0442\u0443, \u0456 \u044f\u043a\u0456 \u0432\u0438 \u043d\u0435 \u0437\u043b\u043e\u0432\u0438\u043b\u0438 \u0443 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0430\u0445, \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0430\u0445, \u0430\u0431\u043e \u0441\u0435\u0440\u0432\u0456\u0441\u0430\u0445, \u043f\u043e\u0442\u0440\u0430\u043f\u043b\u044f\u044e\u0442\u044c \u0434\u043e ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/blob/core-2.43.0/packages/core/src/services/default-http-error-handler.ts"},"DefaultHttpErrorHandler"),". \u0426\u0435\u0439 \u043e\u0431\u0440\u043e\u0431\u043d\u0438\u043a \u043f\u0435\u0440\u0435\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0434\u043e \u0440\u0435\u0454\u0441\u0442\u0440\u0443 DI \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u0437\u0430\u043f\u0438\u0442\u0443, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0432\u0456\u043d \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u043c\u0430\u0442\u0438 \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u043e\u0431'\u0454\u043a\u0442\u0430 HTTP-\u0437\u0430\u043f\u0438\u0442\u0443/\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456, \u0434\u043b\u044f \u043c\u043e\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u0456 \u0444\u043e\u0440\u043c\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u0430 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043a\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456 \u043a\u043b\u0456\u0454\u043d\u0442\u0443."))}l.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||l[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);