"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[982],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>u});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=r.createContext({}),l=function(e){var t=r.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},m=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=l(o),g=n,u=s["".concat(d,".").concat(g)]||s[g]||c[g]||i;return o?r.createElement(u,a(a({ref:t},m),{},{components:o})):r.createElement(u,a({ref:t},m))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=g;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[s]="string"==typeof e?e:n,a[1]=p;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},4999:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=o(7462),n=(o(7294),o(3905));const i={sidebar_position:9},a="LogMediator",p={unversionedId:"components-of-ditsmod-app/log-mediator",id:"components-of-ditsmod-app/log-mediator",title:"LogMediator",description:"\u0423 Ditsmod-\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0430\u0445 \u043c\u043e\u0436\u043d\u0430 \u043f\u0456\u0434\u043c\u0456\u043d\u0438\u0442\u0438 \u0434\u0435\u0444\u043e\u043b\u0442\u043d\u0438\u0439 \u043b\u043e\u0433\u0435\u0440 \u043d\u0430 \u0441\u0432\u0456\u0439 \u043b\u043e\u0433\u0435\u0440, \u0456 \u0446\u0435 \u0434\u0430\u0441\u0442\u044c \u0432\u0430\u043c \u0437\u043c\u043e\u0433\u0443 \u0443 \u0441\u0432\u0456\u0439 \u0441\u043f\u043e\u0441\u0456\u0431 \u0437\u0430\u043f\u0438\u0441\u0443\u0432\u0430\u0442\u0438 \u043d\u0430\u0432\u0456\u0442\u044c \u0442\u0456 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f, \u0449\u043e \u0432\u0438\u0434\u0430\u044e\u0442\u044c\u0441\u044f \u0443 @ditsmod/core. \u0410\u043b\u0435 \u043f\u0456\u0434\u043c\u0456\u043d\u0430 \u043b\u043e\u0433\u0435\u0440\u0430 \u043d\u0435 \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u0437\u043c\u0456\u043d\u044e\u0432\u0430\u0442\u0438 \u0442\u0435\u043a\u0441\u0442 \u0441\u0430\u043c\u0438\u0445 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u044c \u0442\u0430 \u0440\u0456\u0432\u0435\u043d\u044c \u043b\u043e\u0433\u0443\u0432\u0430\u043d\u043d\u044f (trace, debug, info, warn, error). \u0414\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f LogMediator (\u0430\u0431\u043e \u0439\u043e\u0433\u043e \u0434\u043e\u0447\u0456\u0440\u043d\u0456\u0439 \u043a\u043b\u0430\u0441 SystemLogMediator). \u0417\u0432\u0438\u0447\u0430\u0439\u043d\u043e \u0436, \u044f\u043a\u0449\u043e \u0432\u0438 \u043c\u0430\u0454\u0442\u0435 \u0431\u0435\u0437\u043f\u043e\u0441\u0435\u0440\u0435\u0434\u043d\u0456\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u043a\u043e\u0434\u0443, \u0434\u0435 \u043b\u043e\u0433\u0435\u0440 \u0437\u0430\u043f\u0438\u0441\u0443\u0454 \u043f\u0435\u0432\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f, \u0442\u043e \u0432\u0438 \u0442\u0443\u0442 \u0436\u0435 \u043d\u0430 \u043c\u0456\u0441\u0446\u0456 \u0437\u043c\u043e\u0436\u0435\u0442\u0435 \u0446\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u0456 \u0431\u0435\u0437 LogMediator. \u0410 \u044f\u043a\u0449\u043e \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0432\u0438\u0434\u0430\u0454 \u0441\u0430\u043c \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a Ditsmod \u0430\u0431\u043e \u0439\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u0456, \u0431\u0435\u0437 LogMediator \u043d\u0435 \u043e\u0431\u0456\u0439\u0442\u0438\u0441\u044c.",source:"@site/docs/00-components-of-ditsmod-app/09-log-mediator.md",sourceDirName:"00-components-of-ditsmod-app",slug:"/components-of-ditsmod-app/log-mediator",permalink:"/components-of-ditsmod-app/log-mediator",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/docs/00-components-of-ditsmod-app/09-log-mediator.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Logger",permalink:"/components-of-ditsmod-app/logger"},next:{title:"HttpErrorHandler",permalink:"/components-of-ditsmod-app/http-error-handler"}},d={},l=[{value:"\u0420\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u043d\u044f \u043a\u043b\u0430\u0441\u0443 LogMediator",id:"\u0440\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u043d\u044f-\u043a\u043b\u0430\u0441\u0443-logmediator",level:2},{value:"\u041f\u0456\u0434\u043c\u0456\u043d\u0430 LogMediator \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443",id:"\u043f\u0456\u0434\u043c\u0456\u043d\u0430-logmediator-\u043d\u0430-\u0440\u0456\u0432\u043d\u0456-\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443",level:2},{value:"\u041f\u0456\u0434\u043c\u0456\u043d\u0430 LogMediator \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u043c\u043e\u0434\u0443\u043b\u044f",id:"\u043f\u0456\u0434\u043c\u0456\u043d\u0430-logmediator-\u043d\u0430-\u0440\u0456\u0432\u043d\u0456-\u043c\u043e\u0434\u0443\u043b\u044f",level:2}],m={toc:l},s="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(s,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"logmediator"},"LogMediator"),(0,n.kt)("p",null,"\u0423 Ditsmod-\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0430\u0445 \u043c\u043e\u0436\u043d\u0430 \u043f\u0456\u0434\u043c\u0456\u043d\u0438\u0442\u0438 \u0434\u0435\u0444\u043e\u043b\u0442\u043d\u0438\u0439 \u043b\u043e\u0433\u0435\u0440 \u043d\u0430 \u0441\u0432\u0456\u0439 \u043b\u043e\u0433\u0435\u0440, \u0456 \u0446\u0435 \u0434\u0430\u0441\u0442\u044c \u0432\u0430\u043c \u0437\u043c\u043e\u0433\u0443 \u0443 \u0441\u0432\u0456\u0439 \u0441\u043f\u043e\u0441\u0456\u0431 \u0437\u0430\u043f\u0438\u0441\u0443\u0432\u0430\u0442\u0438 \u043d\u0430\u0432\u0456\u0442\u044c \u0442\u0456 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f, \u0449\u043e \u0432\u0438\u0434\u0430\u044e\u0442\u044c\u0441\u044f \u0443 ",(0,n.kt)("inlineCode",{parentName:"p"},"@ditsmod/core"),". \u0410\u043b\u0435 \u043f\u0456\u0434\u043c\u0456\u043d\u0430 \u043b\u043e\u0433\u0435\u0440\u0430 \u043d\u0435 \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u0437\u043c\u0456\u043d\u044e\u0432\u0430\u0442\u0438 \u0442\u0435\u043a\u0441\u0442 \u0441\u0430\u043c\u0438\u0445 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u044c \u0442\u0430 \u0440\u0456\u0432\u0435\u043d\u044c \u043b\u043e\u0433\u0443\u0432\u0430\u043d\u043d\u044f (trace, debug, info, warn, error). \u0414\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f ",(0,n.kt)("inlineCode",{parentName:"p"},"LogMediator")," (\u0430\u0431\u043e \u0439\u043e\u0433\u043e \u0434\u043e\u0447\u0456\u0440\u043d\u0456\u0439 \u043a\u043b\u0430\u0441 ",(0,n.kt)("inlineCode",{parentName:"p"},"SystemLogMediator"),"). \u0417\u0432\u0438\u0447\u0430\u0439\u043d\u043e \u0436, \u044f\u043a\u0449\u043e \u0432\u0438 \u043c\u0430\u0454\u0442\u0435 \u0431\u0435\u0437\u043f\u043e\u0441\u0435\u0440\u0435\u0434\u043d\u0456\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u043a\u043e\u0434\u0443, \u0434\u0435 \u043b\u043e\u0433\u0435\u0440 \u0437\u0430\u043f\u0438\u0441\u0443\u0454 \u043f\u0435\u0432\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f, \u0442\u043e \u0432\u0438 \u0442\u0443\u0442 \u0436\u0435 \u043d\u0430 \u043c\u0456\u0441\u0446\u0456 \u0437\u043c\u043e\u0436\u0435\u0442\u0435 \u0446\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u0456 \u0431\u0435\u0437 ",(0,n.kt)("inlineCode",{parentName:"p"},"LogMediator"),". \u0410 \u044f\u043a\u0449\u043e \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0432\u0438\u0434\u0430\u0454 \u0441\u0430\u043c \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a Ditsmod \u0430\u0431\u043e \u0439\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u0456, \u0431\u0435\u0437 ",(0,n.kt)("inlineCode",{parentName:"p"},"LogMediator")," \u043d\u0435 \u043e\u0431\u0456\u0439\u0442\u0438\u0441\u044c."),(0,n.kt)("p",null,"\u042f\u043a\u0449\u043e \u0432\u0438 \u0437\u0430\u0445\u043e\u0447\u0435\u0442\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u0438 \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043b\u044f \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443 Ditsmod, \u0449\u043e\u0431 \u043e\u043f\u0443\u0431\u043b\u0456\u043a\u0443\u0432\u0430\u0442\u0438 \u0439\u043e\u0433\u043e, \u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u043d\u0430 npmjs.com, \u0442\u043e \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0454\u0442\u044c\u0441\u044f \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u0441\u0430\u043c\u0435 ",(0,n.kt)("inlineCode",{parentName:"p"},"LogMediator")," \u0437\u0430\u043c\u0456\u0441\u0442\u044c ",(0,n.kt)("inlineCode",{parentName:"p"},"Logger"),", \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 \u0437\u043c\u043e\u0436\u0443\u0442\u044c \u0437\u043c\u0456\u043d\u044e\u0432\u0430\u0442\u0438 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f, \u044f\u043a\u0456 \u043f\u0438\u0448\u0435 \u0432\u0430\u0448 \u043c\u043e\u0434\u0443\u043b\u044c."),(0,n.kt)("p",null,"\u0423 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0456\u0457 Ditsmod \u0454 \u043f\u0440\u0438\u043a\u043b\u0430\u0434 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/tree/main/examples/11-override-core-log-messages"},"11-override-core-log-messages"),", \u0434\u0435 \u043f\u0440\u043e\u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u043e \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0432\u0430\u0440\u0456\u0430\u043d\u0442\u0456\u0432 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f ",(0,n.kt)("inlineCode",{parentName:"p"},"LogMediator"),". \u0429\u043e\u0431 \u0441\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u0442\u0438 \u0434\u0430\u043d\u0438\u0439 \u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e \u0441\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u043a\u043b\u043e\u043d\u0443\u0432\u0430\u0442\u0438 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0456\u0439 \u0442\u0430 \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0438 \u0437\u0430\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0456:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ditsmod/ditsmod.git\ncd ditsmod\nnpm i\ncd examples/11-override-core-log-messages\nnpm start\n")),(0,n.kt)("p",null,"\u041f\u0456\u0441\u043b\u044f \u0447\u043e\u0433\u043e \u0432\u0438 \u0437\u043c\u043e\u0436\u0435\u0442\u0435 \u0443 \u0441\u0432\u043e\u0454\u043c\u0443 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0456 \u0431\u0435\u0437\u043f\u043e\u0441\u0435\u0440\u0435\u0434\u043d\u044c\u043e \u043f\u0440\u043e\u0433\u043b\u044f\u0434\u0430\u0442\u0438 \u0442\u0430 \u0435\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0443\u0432\u0430\u0442\u0438 \u0437 \u0434\u0430\u043d\u0438\u043c \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u043e\u043c."),(0,n.kt)("h2",{id:"\u0440\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u043d\u044f-\u043a\u043b\u0430\u0441\u0443-logmediator"},"\u0420\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u043d\u044f \u043a\u043b\u0430\u0441\u0443 LogMediator"),(0,n.kt)("p",null,"\u041e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0443 \u0446\u044c\u043e\u043c\u0443 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0456 \u0440\u043e\u0437\u0448\u0438\u0440\u044e\u0454\u0442\u044c\u0441\u044f \u043a\u043b\u0430\u0441, \u0442\u0443\u0442 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u0435 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f TypeScript \u0443 ",(0,n.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    // ...\n    "noImplicitOverride": true\n    // ...\n  }\n  // ...\n}\n')),(0,n.kt)("p",null,"\u0426\u044f \u0444\u0456\u0447\u0430 \u0441\u0442\u0430\u043b\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u044e \u0443 TypeScript \u043f\u043e\u0447\u0438\u043d\u0430\u044e\u0447\u0438 \u0437 \u0432\u0435\u0440\u0441\u0456\u0457 4.3, \u0432\u043e\u043d\u0430 \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u0440\u043e\u0431\u0438\u0442\u0438 \u0432\u0430\u0448 \u043a\u043e\u0434 \u0431\u0456\u043b\u044c\u0448 \u0447\u0438\u0442\u0430\u0431\u0435\u043b\u044c\u043d\u0438\u043c, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u043d\u0435 \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u0443\u0432\u0430\u0442\u0438 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u0456 \u0442\u0430 \u043c\u0435\u0442\u043e\u0434\u0438 \u0431\u0430\u0442\u044c\u043a\u0456\u0432\u0441\u044c\u043a\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0443 \u0431\u0435\u0437 \u0441\u043b\u043e\u0432\u0430 ",(0,n.kt)("inlineCode",{parentName:"p"},"override"),". \u0417 \u0456\u043d\u0448\u043e\u0433\u043e \u0431\u043e\u043a\u0443, \u044f\u043a\u0449\u043e \u0443 \u0431\u0430\u0442\u044c\u043a\u0456\u0432\u0441\u044c\u043a\u043e\u043c\u0443 \u043a\u043b\u0430\u0441\u0456 \u0437\u043d\u0438\u043a\u043d\u0435 \u043c\u0435\u0442\u043e\u0434, \u044f\u043a\u0438\u0439 \u0443 \u0434\u043e\u0447\u0456\u0440\u043d\u044c\u043e\u043c\u0443 \u043a\u043b\u0430\u0441\u0456 \u043f\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u043e ",(0,n.kt)("inlineCode",{parentName:"p"},"override"),", \u0442\u043e TypeScript \u0442\u0430\u043a\u043e\u0436 \u043a\u0438\u043d\u0435 \u043f\u043e\u043c\u0438\u043b\u043a\u0443 \u0437 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e\u044e \u043f\u0456\u0434\u043a\u0430\u0437\u043a\u043e\u044e."),(0,n.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440 \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u0440\u043e\u0433\u043b\u044f\u043d\u0435\u043c\u043e \u043d\u0430 ",(0,n.kt)("inlineCode",{parentName:"p"},"MyLogMediator"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { SystemLogMediator, InputLogFilter } from \'@ditsmod/core\';\n\nexport class MyLogMediator extends SystemLogMediator {\n  /**\n   * Here host: "${host}", and here port: "${port}"\n   */\n  override serverListen(self: object, host: string, port: number) {\n    const className = self.constructor.name;\n    const inputLogFilter = new InputLogFilter();\n    inputLogFilter.className = className;\n    this.setLog(\'info\', inputLogFilter, `Here host: "${host}", and here port: "${port}"`);\n  }\n}\n')),(0,n.kt)("p",null,"\u042f\u043a \u0431\u0430\u0447\u0438\u0442\u0435, ",(0,n.kt)("inlineCode",{parentName:"p"},"MyLogMediator")," \u0440\u043e\u0437\u0448\u0438\u0440\u044e\u0454 ",(0,n.kt)("inlineCode",{parentName:"p"},"SystemLogMediator"),", \u0430 \u043c\u0435\u0442\u043e\u0434 ",(0,n.kt)("inlineCode",{parentName:"p"},"serverListen()")," \u043f\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u043e \u043a\u043b\u044e\u0447\u043e\u0432\u0438\u043c \u0441\u043b\u043e\u0432\u043e\u043c ",(0,n.kt)("inlineCode",{parentName:"p"},"override"),", \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0442\u0443\u0442 \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u0443\u0454\u0442\u044c\u0441\u044f \u0431\u0430\u0442\u044c\u043a\u0456\u0432\u0441\u044c\u043a\u0438\u0439 \u043c\u0435\u0442\u043e\u0434 \u0437 \u0442\u043e\u0447\u043d\u043e \u0442\u0430\u043a\u043e\u044e \u043d\u0430\u0437\u0432\u043e\u044e. \u0423 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u044f\u0445 \u0434\u043e \u043c\u0435\u0442\u043e\u0434\u0443 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u0442\u0435\u043a\u0441\u0442 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f, \u0449\u043e \u0431\u0443\u0434\u0435 \u0437\u0430\u043f\u0438\u0441\u0443\u0432\u0430\u0442\u0438\u0441\u044c \u0443 \u043b\u043e\u0433\u0438. \u041c\u0430\u0439\u0436\u0435 \u0432 \u0443\u0441\u0456 \u043c\u0435\u0442\u043e\u0434\u0438 ",(0,n.kt)("inlineCode",{parentName:"p"},"SystemLogMediator")," \u043f\u0435\u0440\u0448\u0438\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u043c \u043f\u0435\u0440\u0435\u0434\u0430\u0454\u0442\u044c\u0441\u044f ",(0,n.kt)("inlineCode",{parentName:"p"},"this")," \u0442\u043e\u0433\u043e \u0456\u043d\u0441\u0442\u0430\u043d\u0441\u0443 \u043a\u043b\u0430\u0441\u0443, \u0434\u0435 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f ",(0,n.kt)("inlineCode",{parentName:"p"},"SystemLogMediator"),", \u0449\u043e\u0431 \u043c\u043e\u0436\u043d\u0430 \u0431\u0443\u043b\u043e \u043b\u0435\u0433\u043a\u043e \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0456\u043c'\u044f \u0442\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0443. \u0420\u0435\u0448\u0442\u0430 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0456\u0432 \u0454 \u0434\u043e\u0432\u0456\u043b\u044c\u043d\u043e\u044e, \u0443\u0441\u0435 \u0437\u0430\u043b\u0435\u0436\u0438\u0442\u044c \u0432\u0456\u0434 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0443 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0446\u0438\u0445 \u043c\u0435\u0442\u043e\u0434\u0456\u0432."),(0,n.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043c\u043e\u0436\u043d\u0430 \u043f\u043e\u0431\u0430\u0447\u0438\u0442\u0438, \u044f\u043a\u0449\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0438 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043e\u043a \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u044e ",(0,n.kt)("inlineCode",{parentName:"p"},"npm start"),", \u043f\u0456\u0441\u043b\u044f \u0447\u043e\u0433\u043e \u0432\u0430\u043c \u043f\u043e\u0432\u0438\u043d\u043d\u043e \u0432\u0438\u0434\u0430\u0442\u0438\u0441\u044c \u0441\u0430\u043c\u0435 \u0442\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f, \u044f\u043a\u0435 \u0441\u0444\u043e\u0440\u043c\u043e\u0432\u0430\u043d\u043e \u0443 \u0434\u0430\u043d\u043e\u043c\u0443 \u043c\u0435\u0442\u043e\u0434\u0456."),(0,n.kt)("h2",{id:"\u043f\u0456\u0434\u043c\u0456\u043d\u0430-logmediator-\u043d\u0430-\u0440\u0456\u0432\u043d\u0456-\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443"},"\u041f\u0456\u0434\u043c\u0456\u043d\u0430 LogMediator \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443"),(0,n.kt)("p",null,"\u042f\u043a\u0449\u043e \u043f\u0440\u043e\u0433\u043b\u044f\u043d\u0443\u0442\u0438 ",(0,n.kt)("inlineCode",{parentName:"p"},"AppModule"),", \u043c\u043e\u0436\u043d\u0430 \u043f\u043e\u0431\u0430\u0447\u0438\u0442\u0438 \u044f\u043a \u043f\u0456\u0434\u043c\u0456\u043d\u044f\u0454\u0442\u044c\u0441\u044f ",(0,n.kt)("inlineCode",{parentName:"p"},"SystemLogMediator")," \u043d\u0430 ",(0,n.kt)("inlineCode",{parentName:"p"},"MyLogMediator"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{8-9}","{8-9}":!0},"import { SystemLogMediator, rootModule } from '@ditsmod/core';\n\nimport { MyLogMediator } from './my-log-mediator.js';\n\n@rootModule({\n// ...\n  providersPerApp: [\n    { token: SystemLogMediator, useClass: MyLogMediator },\n    MyLogMediator,\n  ],\n})\nexport class AppModule {}\n")),(0,n.kt)("p",null,"\u0423 \u0434\u0430\u043d\u043e\u043c\u0443 \u0440\u0430\u0437\u0456, \u043f\u0435\u0440\u0448\u0438\u0439 \u0435\u043b\u0435\u043c\u0435\u043d\u0442 \u043c\u0430\u0441\u0438\u0432\u0443 ",(0,n.kt)("inlineCode",{parentName:"p"},"providersPerApp")," \u0434\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u044c \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 ",(0,n.kt)("inlineCode",{parentName:"p"},"MyLogMediator")," \u0443 \u043a\u043e\u0434\u0456 Ditsmod core, \u0434\u0440\u0443\u0433\u0438\u0439 \u0435\u043b\u0435\u043c\u0435\u043d\u0442 - \u0434\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0442\u0443\u0432\u0430\u0442\u0438 \u0456\u043d\u0441\u0442\u0430\u043d\u0441 ",(0,n.kt)("inlineCode",{parentName:"p"},"MyLogMediator")," \u0443 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u0430\u0445 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440\u0456\u0432 \u0447\u0438 \u0441\u0435\u0440\u0432\u0456\u0441\u0456\u0432 \u0432\u0430\u0448\u043e\u0433\u043e \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443."),(0,n.kt)("p",null,"\u041c\u0430\u0439\u0442\u0435 \u043d\u0430 \u0443\u0432\u0430\u0437\u0456, \u0449\u043e \u0442\u0430\u043a\u0430 \u043f\u0456\u0434\u043c\u0456\u043d\u0430 \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443 \u043f\u0440\u0430\u0446\u044e\u0454 \u0431\u0435\u0437 \u0434\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0438\u0445 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u044c \u0442\u0456\u043b\u044c\u043a\u0438 \u0432 \u043a\u043e\u0440\u0435\u043d\u0435\u0432\u043e\u043c\u0443 \u043c\u043e\u0434\u0443\u043b\u0456. \u042f\u043a\u0449\u043e \u0436 \u0432\u0438 \u0446\u0435 \u0437\u0440\u043e\u0431\u0438\u0442\u0435 \u043d\u0435 \u0432 \u043a\u043e\u0440\u0435\u043d\u0435\u0432\u043e\u043c\u0443 \u043c\u043e\u0434\u0443\u043b\u0456, \u0432\u0430\u043c \u0434\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u043e \u043f\u0440\u0438\u0439\u0434\u0435\u0442\u044c\u0441\u044f ",(0,n.kt)("a",{parentName:"p",href:"/developer-guides/providers-collisions/"},"\u0432\u0438\u0440\u0456\u0448\u0443\u0432\u0430\u0442\u0438 \u043a\u043e\u043b\u0456\u0437\u0456\u044e \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0456\u0432")," \u0432 \u043a\u043e\u0440\u0435\u043d\u0435\u0432\u043e\u043c\u0443 \u043c\u043e\u0434\u0443\u043b\u0456 (\u0445\u043e\u0447\u0430 \u0446\u0435 \u0456 \u0440\u043e\u0431\u0438\u0442\u044c\u0441\u044f \u0434\u043e\u0441\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u043e)."),(0,n.kt)("h2",{id:"\u043f\u0456\u0434\u043c\u0456\u043d\u0430-logmediator-\u043d\u0430-\u0440\u0456\u0432\u043d\u0456-\u043c\u043e\u0434\u0443\u043b\u044f"},"\u041f\u0456\u0434\u043c\u0456\u043d\u0430 LogMediator \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u043c\u043e\u0434\u0443\u043b\u044f"),(0,n.kt)("p",null,"\u042f\u043a \u0431\u0443\u043b\u043e \u0441\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0430 \u043f\u043e\u0447\u0430\u0442\u043a\u0443, \u044f\u043a\u0449\u043e \u0432\u0438 \u043f\u043b\u0430\u043d\u0443\u0454\u0442\u0435 \u043f\u0443\u0431\u043b\u0456\u043a\u0443\u0432\u0430\u0442\u0438 \u0432\u0430\u0448 \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043b\u044f \u0456\u043d\u0448\u0438\u0445 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432, \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0454\u0442\u044c\u0441\u044f \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 ",(0,n.kt)("inlineCode",{parentName:"p"},"LogMediator")," \u0437\u0430\u043c\u0456\u0441\u0442\u044c ",(0,n.kt)("inlineCode",{parentName:"p"},"Logger"),". \u0412 \u0442\u0430\u043a\u043e\u043c\u0443 \u0440\u0430\u0437\u0456 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 \u0437\u043c\u043e\u0436\u0443\u0442\u044c \u0437\u043c\u0456\u043d\u044e\u0432\u0430\u0442\u0438 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f, \u044f\u043a\u0456 \u043f\u0438\u0448\u0435 \u0432\u0430\u0448 \u043c\u043e\u0434\u0443\u043b\u044c."),(0,n.kt)("p",null,"\u0429\u043e\u0431 \u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0456\u0437 \u0437\u043e\u0432\u043d\u0456\u0448\u043d\u044c\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0456\u0441\u0443, \u0443 ",(0,n.kt)("inlineCode",{parentName:"p"},"OtherModule")," \u0440\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u043e ",(0,n.kt)("inlineCode",{parentName:"p"},"SomeLogMediator")," \u0442\u0430 \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u0430\u043d\u043e \u0442\u043e\u0439 \u043c\u0435\u0442\u043e\u0434, \u0449\u043e \u043f\u0440\u0430\u0446\u044e\u0454 \u0443 ",(0,n.kt)("inlineCode",{parentName:"p"},"SomeService"),". \u041f\u0456\u0441\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u0437\u0440\u043e\u0431\u043b\u0435\u043d\u0443 \u043f\u0456\u0434\u043c\u0456\u043d\u0443 ",(0,n.kt)("inlineCode",{parentName:"p"},"SomeLogMediator")," \u043d\u0430 ",(0,n.kt)("inlineCode",{parentName:"p"},"OtherLogMediator"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { featureModule } from '@ditsmod/core';\n\nimport { SomeModule } from '../some/some.module.js';\nimport { SomeLogMediator } from '../some/some-log-mediator.js';\nimport { OtherController } from './other.controller.js';\nimport { OtherLogMediator } from './other-log-mediator.js';\n\n@featureModule({\n  imports: [SomeModule],\n  controllers: [OtherController],\n  providersPerMod: [{ token: SomeLogMediator, useClass: OtherLogMediator }],\n})\nexport class OtherModule {}\n")))}c.isMDXComponent=!0}}]);