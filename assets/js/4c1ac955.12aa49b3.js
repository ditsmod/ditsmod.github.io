"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=o,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||p;return n?r.createElement(k,a(a({ref:t},d),{},{components:n})):r.createElement(k,a({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<p;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const p={sidebar_position:4},a="HTTP \u0406\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438",i={unversionedId:"components-of-ditsmod-app/http-interceptors",id:"components-of-ditsmod-app/http-interceptors",title:"HTTP \u0406\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438",description:"\u0406\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438 \u0434\u0443\u0436\u0435 \u0431\u043b\u0438\u0437\u044c\u043a\u0456 \u043f\u043e \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456 \u0434\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0456\u0432, \u0430\u043b\u0435 \u0432\u043e\u043d\u0438 \u043d\u0435 \u0441\u0442\u0432\u043e\u0440\u044e\u044e\u0442\u044c \u0440\u043e\u0443\u0442\u0456\u0432, \u0432\u043e\u043d\u0438 \u043f\u0440\u0438\u0432'\u044f\u0437\u0443\u044e\u0442\u044c\u0441\u044f \u0434\u043e \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u044e\u0447\u0438\u0445 \u0440\u043e\u0443\u0442\u0456\u0432. \u041d\u0430 \u043e\u0434\u043d\u043e\u043c\u0443 \u0440\u043e\u0443\u0442\u0456 \u043c\u043e\u0436\u0435 \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0446\u0456\u043b\u0430 \u0433\u0440\u0443\u043f\u0430 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0456\u0432, \u0449\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u044c\u0441\u044f \u043e\u0434\u0438\u043d \u0437\u0430 \u043e\u0434\u043d\u0438\u043c. \u0406\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438 - \u0446\u0435 \u0430\u043d\u0430\u043b\u043e\u0433 middleware \u0432 ExpressJS, \u0430\u043b\u0435 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438 \u043c\u043e\u0436\u0443\u0442\u044c \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 DI. \u041e\u043a\u0440\u0456\u043c \u0446\u044c\u043e\u0433\u043e, \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438 \u043c\u043e\u0436\u0443\u0442\u044c \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0434\u043e \u0442\u0430 \u043f\u0456\u0441\u043b\u044f \u0440\u043e\u0431\u043e\u0442\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0430.",source:"@site/docs/00-components-of-ditsmod-app/04-http-interceptors.md",sourceDirName:"00-components-of-ditsmod-app",slug:"/components-of-ditsmod-app/http-interceptors",permalink:"/components-of-ditsmod-app/http-interceptors",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/docs/00-components-of-ditsmod-app/04-http-interceptors.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Dependency Injection",permalink:"/components-of-ditsmod-app/dependency-injection"},next:{title:"\u0490\u0430\u0440\u0434\u0438 (\u043e\u0445\u043e\u0440\u043e\u043d\u0446\u0456)",permalink:"/components-of-ditsmod-app/guards"}},l={},s=[{value:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0431\u0440\u043e\u0431\u043a\u0438 HTTP-\u0437\u0430\u043f\u0438\u0442\u0443",id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0431\u0440\u043e\u0431\u043a\u0438-http-\u0437\u0430\u043f\u0438\u0442\u0443",level:2},{value:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0430",id:"\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f-\u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0430",level:2},{value:"\u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0430 \u0432 \u0456\u043d\u0436\u0435\u043a\u0442\u043e\u0440",id:"\u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430-\u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0430-\u0432-\u0456\u043d\u0436\u0435\u043a\u0442\u043e\u0440",level:2}],d={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"http-\u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438"},"HTTP \u0406\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438"),(0,o.kt)("p",null,"\u0406\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438 \u0434\u0443\u0436\u0435 \u0431\u043b\u0438\u0437\u044c\u043a\u0456 \u043f\u043e \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456 \u0434\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0456\u0432, \u0430\u043b\u0435 \u0432\u043e\u043d\u0438 \u043d\u0435 \u0441\u0442\u0432\u043e\u0440\u044e\u044e\u0442\u044c \u0440\u043e\u0443\u0442\u0456\u0432, \u0432\u043e\u043d\u0438 \u043f\u0440\u0438\u0432'\u044f\u0437\u0443\u044e\u0442\u044c\u0441\u044f \u0434\u043e \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u044e\u0447\u0438\u0445 \u0440\u043e\u0443\u0442\u0456\u0432. \u041d\u0430 \u043e\u0434\u043d\u043e\u043c\u0443 \u0440\u043e\u0443\u0442\u0456 \u043c\u043e\u0436\u0435 \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0446\u0456\u043b\u0430 \u0433\u0440\u0443\u043f\u0430 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0456\u0432, \u0449\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u044c\u0441\u044f \u043e\u0434\u0438\u043d \u0437\u0430 \u043e\u0434\u043d\u0438\u043c. \u0406\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438 - \u0446\u0435 \u0430\u043d\u0430\u043b\u043e\u0433 ",(0,o.kt)("a",{parentName:"p",href:"https://expressjs.com/en/guide/writing-middleware.html"},"middleware \u0432 ExpressJS"),", \u0430\u043b\u0435 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438 \u043c\u043e\u0436\u0443\u0442\u044c \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 ",(0,o.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/dependency-injection"},"DI"),". \u041e\u043a\u0440\u0456\u043c \u0446\u044c\u043e\u0433\u043e, \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438 \u043c\u043e\u0436\u0443\u0442\u044c \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0434\u043e \u0442\u0430 \u043f\u0456\u0441\u043b\u044f \u0440\u043e\u0431\u043e\u0442\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0430."),(0,o.kt)("p",null,"\u0412\u0440\u0430\u0445\u043e\u0432\u0443\u044e\u0447\u0438 \u0449\u043e \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438 \u0440\u043e\u0431\u043b\u044f\u0442\u044c \u0442\u0430\u043a\u0443 \u0436 \u0440\u043e\u0431\u043e\u0442\u0443, \u044f\u043a\u0443 \u043c\u043e\u0436\u0443\u0442\u044c \u0440\u043e\u0431\u0438\u0442\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0438, \u0431\u0435\u0437 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0456\u0432 \u043c\u043e\u0436\u043d\u0430 \u043e\u0431\u0456\u0439\u0442\u0438\u0441\u044c. \u0410\u043b\u0435 \u0432 \u0442\u0430\u043a\u043e\u043c\u0443 \u0440\u0430\u0437\u0456 \u0432\u0430\u043c \u043f\u0440\u0438\u0439\u0434\u0435\u0442\u044c\u0441\u044f \u0437\u043d\u0430\u0447\u043d\u043e \u0447\u0430\u0441\u0442\u0456\u0448\u0435 \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u0442\u0438 \u0440\u0456\u0437\u043d\u0456 \u0441\u0435\u0440\u0432\u0456\u0441\u0438 \u0432 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0430\u0445."),(0,o.kt)("p",null,"\u042f\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0456\u0457 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0457 \u043e\u0431\u0440\u043e\u0431\u043a\u0438, \u0442\u0430\u043a\u043e\u0457 \u044f\u043a:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u043f\u0430\u0440\u0441\u0438\u043d\u0433 \u0442\u0456\u043b\u0430 \u0437\u0430\u043f\u0438\u0442\u0443 \u0447\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0456\u0432;"),(0,o.kt)("li",{parentName:"ul"},"\u0432\u0430\u043b\u0456\u0434\u0430\u0446\u0456\u044f \u0437\u0430\u043f\u0438\u0442\u0443;"),(0,o.kt)("li",{parentName:"ul"},"\u0437\u0431\u0438\u0440\u0430\u043d\u043d\u044f \u0442\u0430 \u043b\u043e\u0433\u0443\u0432\u0430\u043d\u043d\u044f \u0440\u0456\u0437\u043d\u0438\u0445 \u043c\u0435\u0442\u0440\u0438\u043a \u0440\u043e\u0431\u043e\u0442\u0438 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443;"),(0,o.kt)("li",{parentName:"ul"},"\u043a\u0435\u0448\u0443\u0432\u0430\u043d\u043d\u044f;"),(0,o.kt)("li",{parentName:"ul"},"\u0456 \u0442.\u0434.")),(0,o.kt)("p",null,"\u0406\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438 \u043c\u043e\u0436\u043d\u0430 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u0456\u0437\u043e\u0432\u0430\u043d\u043e \u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u0438 \u0430\u0431\u043e \u0432\u0456\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u0438, \u043d\u0435 \u0437\u043c\u0456\u043d\u044e\u044e\u0447\u0438 \u043f\u0440\u0438 \u0446\u044c\u043e\u043c\u0443 \u043a\u043e\u0434 \u043c\u0435\u0442\u043e\u0434\u0456\u0432 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0456\u0432, \u0434\u043e \u044f\u043a\u0438\u0445 \u0432\u043e\u043d\u0438 \u043f\u0440\u0438\u0432'\u044f\u0437\u0443\u044e\u0442\u044c\u0441\u044f."),(0,o.kt)("h2",{id:"\u0441\u0445\u0435\u043c\u0430-\u043e\u0431\u0440\u043e\u0431\u043a\u0438-http-\u0437\u0430\u043f\u0438\u0442\u0443"},"\u0421\u0445\u0435\u043c\u0430 \u043e\u0431\u0440\u043e\u0431\u043a\u0438 HTTP-\u0437\u0430\u043f\u0438\u0442\u0443"),(0,o.kt)("p",null,"\u041e\u0431\u0440\u043e\u0431\u043a\u0430 HTTP-\u0437\u0430\u043f\u0438\u0442\u0443 \u043c\u0430\u0454 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0440\u043e\u0431\u043e\u0447\u0438\u0439 \u043f\u043e\u0442\u0456\u043a:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ditsmod \u0441\u0442\u0432\u043e\u0440\u044e\u0454 \u0456\u043d\u0441\u0442\u0430\u043d\u0441 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ditsmod/ditsmod/blob/core-2.38.1/packages/core/src/services/pre-router.ts"},"PreRouter")," \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"PreRouter")," \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u0440\u043e\u0443\u0442\u0435\u0440\u0430 \u0448\u0443\u043a\u0430\u0454 \u043e\u0431\u0440\u043e\u0431\u043d\u0438\u043a\u0430 \u0437\u0430\u043f\u0438\u0442\u0443 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e \u0434\u043e URI."),(0,o.kt)("li",{parentName:"ol"},"\u042f\u043a\u0449\u043e \u043e\u0431\u0440\u043e\u0431\u043d\u0438\u043a\u0430 \u0437\u0430\u043f\u0438\u0442\u0443 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e, ",(0,o.kt)("inlineCode",{parentName:"li"},"PreRouter")," \u0432\u0438\u0434\u0430\u0454 \u043f\u043e\u043c\u0438\u043b\u043a\u0443 \u0437\u0456 \u0441\u0442\u0430\u0442\u0443\u0441\u043e\u043c 404."),(0,o.kt)("li",{parentName:"ol"},"\u042f\u043a\u0449\u043e \u0437\u043d\u0430\u0439\u0448\u043e\u0432\u0441\u044f \u043e\u0431\u0440\u043e\u0431\u043d\u0438\u043a \u0437\u0430\u043f\u0438\u0442\u0443, Ditsmod \u0441\u0442\u0432\u043e\u0440\u044e\u0454 \u0456\u043d\u0441\u0442\u0430\u043d\u0441 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u0437 \u0442\u043e\u043a\u0435\u043d\u043e\u043c ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ditsmod/ditsmod/blob/core-2.38.1/packages/core/src/services/default-http-frontend.ts"},"HttpFrontend")," \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u0437\u0430\u043f\u0438\u0442\u0443, \u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0439\u043e\u0433\u043e \u043f\u0435\u0440\u0448\u0438\u043c \u0443 \u0447\u0435\u0440\u0437\u0456 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0456\u0432 \u0456 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u0454. By default, \u0446\u0435\u0439 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u0437\u0430 \u0432\u0438\u043a\u043b\u0438\u043a \u0491\u0430\u0440\u0434\u0456\u0432 \u0442\u0430 \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u044c \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0456\u0432 \u0437 \u0442\u043e\u043a\u0435\u043d\u0430\u043c\u0438 ",(0,o.kt)("inlineCode",{parentName:"li"},"QUERY_PARAMS")," \u0442\u0430 ",(0,o.kt)("inlineCode",{parentName:"li"},"PATH_PARAMS"),"."),(0,o.kt)("li",{parentName:"ol"},"\u0414\u0440\u0443\u0433\u0438\u0439 \u0442\u0430 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0456 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438 \u043c\u043e\u0436\u0443\u0442\u044c \u0456 \u043d\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0438\u0441\u044c, \u0446\u0435 \u0437\u0430\u043b\u0435\u0436\u0430\u0442\u044c \u0432\u0456\u0434 \u0442\u043e\u0433\u043e, \u0447\u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0457\u0445 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456\u0439 \u0443 \u0447\u0435\u0440\u0437\u0456 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440."),(0,o.kt)("li",{parentName:"ol"},"\u042f\u043a\u0449\u043e \u0443\u0441\u0456 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438 \u0432\u0456\u0434\u043f\u0440\u0430\u0446\u044e\u0432\u0430\u043b\u0438, Ditsmod \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0454 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ditsmod/ditsmod/blob/core-2.38.1/packages/core/src/services/default-http-backend.ts"},"HttpBackend"),", \u0456\u043d\u0441\u0442\u0430\u043d\u0441 \u044f\u043a\u043e\u0433\u043e \u0441\u0442\u0432\u043e\u0440\u044e\u0454\u0442\u044c\u0441\u044f \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u0437\u0430\u043f\u0438\u0442\u0443. By default, ",(0,o.kt)("inlineCode",{parentName:"li"},"HttpBackend")," \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0454 \u0431\u0435\u0437\u043f\u043e\u0441\u0435\u0440\u0435\u0434\u043d\u044c\u043e \u043c\u0435\u0442\u043e\u0434 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0430, \u0449\u043e \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u0437\u0430 \u043e\u0431\u0440\u043e\u0431\u043a\u0443 \u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0442\u0443.")),(0,o.kt)("p",null,"\u041e\u0442\u0436\u0435, \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u0438\u0439 \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043e\u0431\u0440\u043e\u0431\u043a\u0438 \u0437\u0430\u043f\u0438\u0442\u0443 \u0442\u0430\u043a\u0438\u0439:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"    \u0437\u0430\u043f\u0438\u0442 -> PreRouter -> HttpFrontend -> [\u0456\u043d\u0448\u0456 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438] -> HttpBackend -> [\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440]\n\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c <- PreRouter <- HttpFrontend <- [\u0456\u043d\u0448\u0456 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438] <- HttpBackend <- [\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440]\n")),(0,o.kt)("p",null,"\u041e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0456\u043d\u0441\u0442\u0430\u043d\u0441\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"PreRouter"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpFrontend")," \u0442\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpBackend")," \u0441\u0442\u0432\u043e\u0440\u044e\u044e\u0442\u044c\u0441\u044f \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e DI, \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0457\u0445 \u043f\u0456\u0434\u043c\u0456\u043d\u044f\u0442\u0438 \u0441\u0432\u043e\u0454\u044e \u0432\u0435\u0440\u0441\u0456\u0454\u044e \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u0438\u0445 \u043a\u043b\u0430\u0441\u0456\u0432. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u044f\u043a\u0449\u043e \u0432\u0438 \u0445\u043e\u0447\u0435\u0442\u0435 \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438 404-\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u0443 \u0432\u0438\u043f\u0430\u0434\u043a\u0443 \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u043e\u0441\u0442\u0456 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430, \u0430 \u0445\u043e\u0447\u0435\u0442\u0435 \u0449\u0435 \u0439 \u0434\u043e\u0434\u0430\u0442\u0438 \u043f\u0435\u0432\u043d\u0438\u0439 \u0442\u0435\u043a\u0441\u0442 \u0447\u0438 \u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438, \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0456\u0434\u043c\u0456\u043d\u0438\u0442\u0438 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/blob/core-2.38.1/packages/core/src/services/pre-router.ts"},"PreRouter")," \u0441\u0432\u043e\u0457\u043c \u043a\u043b\u0430\u0441\u043e\u043c."),(0,o.kt)("p",null,"\u0417\u0432\u0435\u0440\u043d\u0456\u0442\u044c \u0443\u0432\u0430\u0433\u0443, \u0449\u043e \u043a\u043e\u0436\u0435\u043d \u0432\u0438\u043a\u043b\u0438\u043a \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0430 \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<any>"),", \u0456 \u0432 \u043a\u0456\u043d\u0446\u0435\u0432\u043e\u043c\u0443 \u043f\u0456\u0434\u0441\u0443\u043c\u043a\u0443 \u0432\u0456\u043d \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u044c \u0434\u043e \u043c\u0435\u0442\u043e\u0434\u0430 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0430, \u043f\u0440\u0438\u0432'\u044f\u0437\u0430\u043d\u043e\u0433\u043e \u0434\u043e \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430. \u0426\u0435 \u043e\u0437\u043d\u0430\u0447\u0430\u0454, \u0449\u043e \u0432 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0456 \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043b\u0443\u0445\u0430\u0442\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0440\u0435\u0437\u043e\u043b\u0432\u0443 \u043f\u0440\u043e\u043c\u0456\u0441\u0430, \u0449\u043e \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u043c\u0435\u0442\u043e\u0434 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0430. \u0429\u043e\u043f\u0440\u0430\u0432\u0434\u0430, \u043d\u0430 \u0434\u0430\u043d\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 (Ditsmod v2.0.0), ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpFrontend")," \u0442\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpBackend")," by default \u0456\u0433\u043d\u043e\u0440\u0443\u044e\u0442\u044c \u0443\u0441\u0435, \u0449\u043e \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440 \u0447\u0438 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438, \u0442\u043e\u043c\u0443 \u0442\u0430\u043a\u0438\u0439 \u0440\u0435\u0437\u043e\u043b\u0432 \u043f\u0440\u043e\u043c\u0456\u0441\u0430 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u043d\u0438\u043c \u0434\u043b\u044f \u0456\u043d\u0448\u0438\u0445 \u0446\u0456\u043b\u0435\u0439 - \u0434\u043b\u044f \u0437\u0431\u043e\u0440\u0443 \u043c\u0435\u0442\u0440\u0438\u043a, \u043b\u043e\u0433\u0443\u0432\u0430\u043d\u043d\u044f \u0456 \u0442.\u043f."),(0,o.kt)("p",null,"\u0417 \u0456\u043d\u0448\u043e\u0433\u043e \u0431\u043e\u043a\u0443, \u0447\u0435\u0440\u0435\u0437 DI \u0432\u0438 \u043b\u0435\u0433\u043a\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0456\u0434\u043c\u0456\u043d\u0438\u0442\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpFrontend")," \u0442\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpBackend")," \u0441\u0432\u043e\u0457\u043c\u0438 \u0432\u043b\u0430\u0441\u043d\u0438\u043c\u0438 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0430\u043c\u0438, \u0449\u043e\u0431 \u0431\u0440\u0430\u0442\u0438 \u0434\u043e \u0443\u0432\u0430\u0433\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f, \u0449\u043e \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u043c\u0435\u0442\u043e\u0434 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0430. \u041e\u0434\u0438\u043d \u0456\u0437 \u0432\u0430\u0440\u0456\u0430\u043d\u0442\u0456\u0432 \u0442\u0430\u043a\u043e\u0457 \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456 \u0440\u0435\u0430\u043b\u0456\u0437\u043e\u0432\u0430\u043d\u043e \u0443 \u043c\u043e\u0434\u0443\u043b\u0456 ",(0,o.kt)("a",{parentName:"p",href:"/native-modules/return"},"@ditsmod/return"),"."),(0,o.kt)("h2",{id:"\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f-\u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0430"},"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0430"),(0,o.kt)("p",null,"\u041a\u043e\u0436\u0435\u043d \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440 \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u0431\u0443\u0442\u0438 \u043a\u043b\u0430\u0441\u043e\u043c, \u0449\u043e \u0432\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0443\u0454 \u0456\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/blob/core-2.38.1/packages/core/src/types/http-interceptor.ts#L20-L22"},"HttpInterceptor"),", \u0442\u0430 \u043c\u0430\u0454 \u0430\u043d\u043e\u0442\u0430\u0446\u0456\u044e \u0437 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u043e\u043c ",(0,o.kt)("inlineCode",{parentName:"p"},"injectable"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { injectable } from '@ditsmod/core';\nimport { HttpHandler, HttpInterceptor } from '@ditsmod/core';\n\n@injectable()\nexport class MyHttpInterceptor implements HttpInterceptor {\n  intercept(next: HttpHandler) {\n    return next.handle(); // Here returns Promise<any>;\n  }\n}\n")),(0,o.kt)("p",null,"\u042f\u043a \u0431\u0430\u0447\u0438\u0442\u0435, \u043c\u0435\u0442\u043e\u0434 ",(0,o.kt)("inlineCode",{parentName:"p"},"intercept()")," \u043c\u0430\u0454 \u0454\u0434\u0438\u043d\u0438\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 - \u0446\u0435 \u0456\u043d\u0441\u0442\u0430\u043d\u0441 \u043e\u0431\u0440\u043e\u0431\u043d\u0438\u043a\u0430, \u0449\u043e \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u0454 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440. \u042f\u043a\u0449\u043e \u0434\u043b\u044f \u0441\u0432\u043e\u0454\u0457 \u0440\u043e\u0431\u043e\u0442\u0438 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0454 \u0434\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0438\u0445 \u0434\u0430\u043d\u0438\u0445, \u0457\u0445 \u043c\u043e\u0436\u043d\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0432 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u0456 \u0447\u0435\u0440\u0435\u0437 DI, \u044f\u043a \u0456 \u0432 \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u043c\u0443 \u0441\u0435\u0440\u0432\u0456\u0441\u0456."),(0,o.kt)("h2",{id:"\u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430-\u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0430-\u0432-\u0456\u043d\u0436\u0435\u043a\u0442\u043e\u0440"},"\u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0430 \u0432 \u0456\u043d\u0436\u0435\u043a\u0442\u043e\u0440"),(0,o.kt)("p",null,"\u0411\u0443\u0434\u044c-\u044f\u043a\u0438\u0439 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440 \u043f\u0435\u0440\u0435\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0432 \u0456\u043d\u0436\u0435\u043a\u0442\u043e\u0440 \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u0437\u0430\u043f\u0438\u0442\u0443 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e ",(0,o.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/dependency-injection#%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D0%B8-%D0%BF%D1%80%D0%BE%D0%B2%D0%B0%D0%B9%D0%B4%D0%B5%D1%80%D0%B8"},"\u043c\u0443\u043b\u044c\u0442\u0438-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0456\u0432")," \u0437 \u0442\u043e\u043a\u0435\u043d\u043e\u043c ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP_INTERCEPTORS"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { HTTP_INTERCEPTORS, featureModule } from '@ditsmod/core';\n\nimport { MyHttpInterceptor } from './my-http-interceptor';\n\n@featureModule({\n  // ...\n  providersPerReq: [{ token: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true }],\n})\nexport class SomeModule {}\n")),(0,o.kt)("p",null,"\u0412 \u0434\u0430\u043d\u043e\u043c\u0443 \u0440\u0430\u0437\u0456 \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u044c\u0441\u044f \u0432 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u0456 \u043c\u043e\u0434\u0443\u043b\u044f. \u0422\u0430\u043a \u0441\u0430\u043c\u043e \u0432\u043e\u043d\u0438 \u043c\u043e\u0436\u0443\u0442\u044c \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u0438\u0441\u044c \u0443 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u0456 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0430. \u0422\u043e\u0431\u0442\u043e \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438 \u043c\u043e\u0436\u0443\u0442\u044c \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0430\u0431\u043e \u0434\u043b\u044f \u0443\u0441\u0456\u0445 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0456\u0432 \u0443 \u043c\u043e\u0434\u0443\u043b\u0456 \u0431\u0435\u0437 \u0432\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u044c, \u0430\u0431\u043e \u0442\u0456\u043b\u044c\u043a\u0438 \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0430. \u042f\u043a\u0449\u043e \u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0434\u043e\u0434\u0430\u0442\u0438 \u043b\u0438\u0448\u0435 \u0434\u043e \u043e\u043a\u0440\u0435\u043c\u0438\u0445 \u0440\u043e\u0443\u0442\u0456\u0432 \u0443 \u043c\u0435\u0436\u0430\u0445 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0456\u0432, \u0446\u0435 \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e ",(0,o.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/extensions"},"\u0440\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u044c")," (\u0442\u0430\u043a\u0438\u043c \u0447\u0438\u043d\u043e\u043c \u0434\u043e\u0434\u0430\u044e\u0442\u044c\u0441\u044f ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/blob/core-2.38.1/packages/body-parser/src/body-parser.extension.ts#L36"},"\u0456\u043d\u0442\u0435\u0440\u0441\u0435\u043f\u0442\u043e\u0440\u0438 \u0434\u043b\u044f \u043f\u0430\u0440\u0441\u0438\u043d\u0433\u0443 \u0442\u0456\u043b\u0430 \u0437\u0430\u043f\u0438\u0442\u0443"),")."))}m.isMDXComponent=!0}}]);