"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,u=m["".concat(i,".").concat(d)]||m[d]||c[d]||a;return n?o.createElement(u,l(l({ref:t},g),{},{components:n})):o.createElement(u,l({ref:t},g))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:8},l="Logger",s={unversionedId:"components-of-ditsmod-app/logger",id:"components-of-ditsmod-app/logger",title:"Logger",description:"Ditsmod \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454 \u043a\u043b\u0430\u0441 Logger \u0443 \u044f\u043a\u043e\u0441\u0442\u0456 \u0456\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443, \u0430 \u0442\u0430\u043a\u043e\u0436 \u044f\u043a DI-\u0442\u043e\u043a\u0435\u043d. \u0414\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0443\u0432\u0430\u043d\u043d\u044f \u043b\u043e\u0433\u0456\u0432, \u043f\u043e-\u0434\u0435\u0444\u043e\u043b\u0442\u0443 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f ConsoleLogger. \u0423\u0441\u044c\u043e\u0433\u043e \u0454 8 \u0440\u0456\u0432\u043d\u0456\u0432 \u043b\u043e\u0433\u0443\u0432\u0430\u043d\u043d\u044f (\u0437\u0430\u043f\u043e\u0437\u0438\u0447\u0435\u043d\u043e \u0443 log4j):",source:"@site/docs/00-components-of-ditsmod-app/08-logger.md",sourceDirName:"00-components-of-ditsmod-app",slug:"/components-of-ditsmod-app/logger",permalink:"/components-of-ditsmod-app/logger",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/docs/00-components-of-ditsmod-app/08-logger.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u0420\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u043d\u044f",permalink:"/components-of-ditsmod-app/extensions"},next:{title:"LogMediator",permalink:"/components-of-ditsmod-app/log-mediator"}},i={},p=[{value:"\u041f\u0456\u0434\u043c\u0456\u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0433\u043e \u043b\u043e\u0433\u0435\u0440\u0430",id:"\u043f\u0456\u0434\u043c\u0456\u043d\u0430-\u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0433\u043e-\u043b\u043e\u0433\u0435\u0440\u0430",level:2},{value:"\u0420\u043e\u0431\u043e\u0442\u0430 \u0437 \u043b\u043e\u0433\u0435\u0440\u043e\u043c \u0432 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u043e\u043c\u0443 \u0440\u0435\u0436\u0438\u043c\u0456",id:"\u0440\u043e\u0431\u043e\u0442\u0430-\u0437-\u043b\u043e\u0433\u0435\u0440\u043e\u043c-\u0432-\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u043e\u043c\u0443-\u0440\u0435\u0436\u0438\u043c\u0456",level:2}],g={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"logger"},"Logger"),(0,r.kt)("p",null,"Ditsmod \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454 \u043a\u043b\u0430\u0441 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/blob/main/packages/core/src/types/logger.ts"},"Logger")," \u0443 \u044f\u043a\u043e\u0441\u0442\u0456 \u0456\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443, \u0430 \u0442\u0430\u043a\u043e\u0436 \u044f\u043a DI-\u0442\u043e\u043a\u0435\u043d. \u0414\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0443\u0432\u0430\u043d\u043d\u044f \u043b\u043e\u0433\u0456\u0432, \u043f\u043e-\u0434\u0435\u0444\u043e\u043b\u0442\u0443 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/blob/core-2.48.0/packages/core/src/services/console-logger.ts"},"ConsoleLogger"),". \u0423\u0441\u044c\u043e\u0433\u043e \u0454 8 \u0440\u0456\u0432\u043d\u0456\u0432 \u043b\u043e\u0433\u0443\u0432\u0430\u043d\u043d\u044f (\u0437\u0430\u043f\u043e\u0437\u0438\u0447\u0435\u043d\u043e \u0443 ",(0,r.kt)("a",{parentName:"p",href:"https://logging.apache.org/log4j/2.x/log4j-api/apidocs/org/apache/logging/log4j/Level.html"},"log4j"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"all")," - \u0443\u0441\u0456 \u043f\u043e\u0434\u0456\u0457 \u043f\u043e\u0432\u0438\u043d\u043d\u0456 \u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trace")," - \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043f\u0440\u043e \u0437\u043d\u0435\u0432\u0430\u0434\u0436\u0435\u043d\u043d\u044f, \u044f\u043a\u0435 \u0437\u0430\u0437\u0432\u0438\u0447\u0430\u0439 \u0444\u0456\u043a\u0441\u0443\u0454 \u043f\u043e\u0442\u0456\u043a \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0443."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"debug")," - \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u043f\u043e\u0434\u0456\u044f \u0437\u043d\u0435\u0432\u0430\u0434\u0436\u0435\u043d\u043d\u044f."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"info")," - \u043f\u043e\u0434\u0456\u044f \u0437 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0439\u043d\u043e\u044e \u043c\u0435\u0442\u043e\u044e."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"warn")," - \u043f\u043e\u0434\u0456\u044f, \u044f\u043a\u0430 \u043c\u043e\u0436\u0435 \u043f\u0440\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0434\u043e \u043f\u043e\u043c\u0438\u043b\u043a\u0438."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error")," - \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u0432 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443, \u044f\u043a\u0443 \u043c\u043e\u0436\u043d\u0430 \u0432\u0438\u043f\u0440\u0430\u0432\u0438\u0442\u0438."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fatal")," - \u0444\u0430\u0442\u0430\u043b\u044c\u043d\u0430 \u043f\u043e\u0434\u0456\u044f, \u044f\u043a\u0430 \u043f\u0435\u0440\u0435\u0448\u043a\u043e\u0434\u0436\u0430\u0454 \u043f\u0440\u043e\u0434\u043e\u0432\u0436\u0435\u043d\u043d\u044e \u0440\u043e\u0431\u043e\u0442\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"off")," - \u0436\u043e\u0434\u043d\u0456 \u043b\u043e\u0433\u0438 \u043d\u0435 \u043f\u0438\u0448\u0443\u0442\u044c\u0441\u044f. \u041f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f, \u0439\u043e\u0433\u043e \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0454\u0442\u044c\u0441\u044f \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u0432 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u043e\u043c\u0443 \u0440\u0435\u0436\u0438\u043c\u0456.")),(0,r.kt)("p",null,'\u0423 \u0446\u0456\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u0457, \u043a\u043e\u043b\u0438 \u043c\u0438 \u043a\u0430\u0436\u0435\u043c\u043e \u043f\u0440\u043e "\u0440\u0456\u0432\u043d\u0456 \u043b\u043e\u0433\u0443\u0432\u0430\u043d\u043d\u044f", \u043c\u0438 \u043c\u0430\u0454\u043c\u043e \u043d\u0430 \u0443\u0432\u0430\u0437\u0456 "\u0440\u0456\u0432\u0435\u043d\u044c \u0434\u0435\u0442\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0457 \u043b\u043e\u0433\u0456\u0432". \u041d\u0430\u0439\u0432\u0438\u0449\u0438\u0439 \u0440\u0456\u0432\u0435\u043d\u044c \u0434\u0435\u0442\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0457 - ',(0,r.kt)("inlineCode",{parentName:"p"},"all"),", \u043d\u0430\u0439\u043d\u0438\u0436\u0447\u0438\u0439 \u0440\u0456\u0432\u0435\u043d\u044c \u0434\u0435\u0442\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0457 - ",(0,r.kt)("inlineCode",{parentName:"p"},"off"),"."),(0,r.kt)("p",null,"\u0406\u043d\u043a\u043e\u043b\u0438 \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u0457, \u0430\u0431\u043e \u0443 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u0438\u0445 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f\u0445 Ditsmod, \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0443\u0441\u0442\u0440\u0456\u0442\u0438 \u0434\u0432\u0430 \u0442\u0438\u043f\u0438, \u0449\u043e \u043f\u043e\u0437\u043d\u0430\u0447\u0430\u044e\u0442\u044c \u0440\u0456\u0432\u0435\u043d\u044c \u043b\u043e\u0433\u0443\u0432\u0430\u043d\u043d\u044f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"InputLogLevel")," - \u0446\u0438\u043c \u0442\u0438\u043f\u043e\u043c \u043f\u043e\u0437\u043d\u0430\u0447\u0430\u044e\u0442\u044c \u0440\u0456\u0432\u0435\u043d\u044c \u043b\u043e\u0433\u0456\u0432, \u0449\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u0443 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u043c\u0443 \u0437\u0430\u043f\u0438\u0441\u0456 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0440\u0456\u0432\u0435\u043d\u044c \u043b\u043e\u0433\u0456\u0432 - ",(0,r.kt)("inlineCode",{parentName:"li"},"info"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"logger.log('info', 'some message');\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OutputLogLevel")," - \u0446\u0438\u043c \u0442\u0438\u043f\u043e\u043c \u043f\u043e\u0437\u043d\u0430\u0447\u0430\u044e\u0442\u044c \u0433\u0440\u0430\u043d\u0438\u0447\u043d\u0438\u0439 \u0440\u0456\u0432\u0435\u043d\u044c \u043b\u043e\u0433\u0456\u0432, \u0432\u0438\u0449\u0435 \u044f\u043a\u043e\u0433\u043e \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0456\u0433\u043d\u043e\u0440\u0443\u044e\u0442\u044c\u0441\u044f. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u0443 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u043c\u0443 \u0437\u0430\u043f\u0438\u0441\u0456 \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u044e\u0454\u0442\u044c\u0441\u044f \u0440\u0456\u0432\u0435\u043d\u044c \u043b\u043e\u0433\u0456\u0432 ",(0,r.kt)("inlineCode",{parentName:"li"},"debug"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"logger.setLevel('debug');\n")))),(0,r.kt)("p",null,"\u042f\u043a\u0449\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"InputLogLevel")," \u0454 \u0440\u0456\u0432\u043d\u0438\u043c \u0430\u0431\u043e \u043d\u0438\u0436\u0447\u0438\u043c \u0432\u0456\u0434 ",(0,r.kt)("inlineCode",{parentName:"p"},"OutputLogLevel"),", \u0442\u043e \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0437\u0430\u043f\u0438\u0441\u0443\u0454\u0442\u044c\u0441\u044f \u043b\u043e\u0433\u0435\u0440\u043e\u043c, \u0432 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c\u0443 \u0440\u0430\u0437\u0456 - \u0456\u0433\u043d\u043e\u0440\u0443\u0454\u0442\u044c\u0441\u044f. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u0443 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0456\u0439 \u043a\u043e\u043c\u0431\u0456\u043d\u0430\u0446\u0456\u0457 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0437\u0430\u043f\u0438\u0448\u0435\u0442\u044c\u0441\u044f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"logger.setLevel('debug');\nlogger.log('info', 'some message');\n")),(0,r.kt)("p",null,"\u0410 \u0432 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u043c\u0443 - \u0431\u0443\u0434\u0435 \u043f\u0440\u043e\u0456\u0433\u043d\u043e\u0440\u043e\u0432\u0430\u043d\u0435:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"logger.setLevel('warn');\nlogger.log('info', 'some message');\n")),(0,r.kt)("h2",{id:"\u043f\u0456\u0434\u043c\u0456\u043d\u0430-\u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0433\u043e-\u043b\u043e\u0433\u0435\u0440\u0430"},"\u041f\u0456\u0434\u043c\u0456\u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0433\u043e \u043b\u043e\u0433\u0435\u0440\u0430"),(0,r.kt)("p",null,"\u042f\u043a\u0449\u043e \u0432\u0438 \u0445\u043e\u0447\u0435\u0442\u0435 \u0449\u043e\u0431 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u0456 \u043b\u043e\u0433\u0438, \u044f\u043a\u0456 \u043f\u0438\u0448\u0435 Ditsmod, \u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044c \u0432\u0430\u0448\u0438\u043c \u0432\u043b\u0430\u0441\u043d\u0438\u043c \u043b\u043e\u0433\u0435\u0440\u043e\u043c, \u0432\u0456\u043d \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u0432\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0443\u0432\u0430\u0442\u0438 \u0456\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/blob/main/packages/core/src/types/logger.ts"},"Logger"),". \u041f\u0456\u0441\u043b\u044f \u0447\u043e\u0433\u043e \u0439\u043e\u0433\u043e \u043c\u043e\u0436\u043d\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u0438 \u0434\u043e DI \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Logger, rootModule } from '@ditsmod/core';\nimport { MyLogger } from './my-loggegr.js';\n\n@rootModule({\n  // ...\n  providersPerApp: [\n    { token: Logger, useClass: MyLogger }\n  ],\n})\nexport class AppModule {}\n")),(0,r.kt)("p",null,"\u0410\u043b\u0435, \u0448\u0432\u0438\u0434\u0448\u0435 \u0437\u0430 \u0432\u0441\u0435, \u0432\u0438 \u0437\u0430\u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u044f\u043a\u0438\u0439\u0441\u044c \u0432\u0436\u0435 \u0433\u043e\u0442\u043e\u0432\u0438\u0439, \u0448\u0438\u0440\u043e\u043a\u043e-\u0432\u0456\u0434\u043e\u043c\u0438\u0439 \u043b\u043e\u0433\u0435\u0440. \u0406 \u0432\u0435\u043b\u0438\u043a\u0430 \u0439\u043c\u043e\u0432\u0456\u0440\u043d\u0456\u0441\u0442\u044c, \u0449\u043e \u0439\u043e\u0433\u043e \u0456\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0432\u0456\u0434\u0440\u0456\u0437\u043d\u044f\u0454\u0442\u044c\u0441\u044f \u0432\u0456\u0434 \u0456\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/blob/main/packages/core/src/types/logger.ts"},"Logger"),". \u0410\u043b\u0435, \u044f\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u0446\u0435 \u0442\u0435\u0436 \u043d\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430, \u0431\u043e \u043f\u0435\u0440\u0435\u0434 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u043e\u044e \u0456\u043d\u0441\u0442\u0430\u043d\u0441\u0430 \u043b\u043e\u0433\u0435\u0440\u0430 \u0434\u043e DI, \u0439\u043e\u0433\u043e \u043c\u043e\u0436\u043d\u0430 \u043f\u0440\u043e\u043f\u0430\u0442\u0447\u0438\u0442\u0438 \u0442\u0430\u043a\u0438\u043c \u0447\u0438\u043d\u043e\u043c, \u0449\u043e\u0431 \u0432\u0456\u043d \u0432\u043f\u0440\u043e\u0432\u0430\u0434\u0436\u0443\u0432\u0430\u0432 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0438\u0439 \u0456\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441. \u0414\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 \u0437 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u0456\u0441\u0442\u044e ",(0,r.kt)("inlineCode",{parentName:"p"},"useFactory"),"."),(0,r.kt)("p",null,"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u043d\u0430\u043f\u0438\u0448\u0435\u043c\u043e \u043a\u043e\u0434 \u0434\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430. \u041d\u0430 \u0434\u0430\u043d\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 (2023-09-02), \u043e\u0434\u043d\u0438\u043c \u0456\u0437 \u0441\u0430\u043c\u0438\u0445 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0438\u0445 \u0441\u0435\u0440\u0435\u0434 Node.js-\u043b\u043e\u0433\u0435\u0440\u0456\u0432 \u0454 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/winstonjs/winston"},"winston"),". \u0414\u043b\u044f \u043f\u0430\u0442\u0447\u0456\u043d\u0433\u0443 \u043c\u0438 \u043d\u0430\u043f\u0438\u0441\u0430\u043b\u0438 \u043c\u0435\u0442\u043e\u0434 \u043a\u043b\u0430\u0441\u0443, \u043f\u0435\u0440\u0435\u0434 \u044f\u043a\u0438\u043c \u0434\u043e\u0434\u0430\u043b\u0438 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440 ",(0,r.kt)("inlineCode",{parentName:"p"},"methodFactory"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{42-44,47-49}","{42-44,47-49}":!0},"import { Logger, LoggerConfig, OutputLogLevel, methodFactory } from '@ditsmod/core';\nimport { createLogger, addColors, format, transports } from 'winston';\n\nexport class PatchLogger {\n  @methodFactory()\n  patchLogger(config: LoggerConfig) {\n    const logger = createLogger();\n\n    const transport = new transports.Console({\n      format: format.combine(format.colorize(), format.simple()),\n    });\n\n    const customLevels = {\n      levels: {\n        off: 0,\n        fatal: 1,\n        error: 2,\n        warn: 3,\n        info: 4,\n        debug: 5,\n        trace: 6,\n        all: 7,\n      },\n      colors: {\n        fatal: 'red',\n        error: 'brown',\n        warn: 'yellow',\n        info: 'blue',\n        debug: 'green',\n        trace: 'grey',\n        all: 'grey',\n      },\n    };\n\n    logger.configure({\n      levels: customLevels.levels,\n      level: config.level,\n      transports: [transport],\n    });\n\n    // Logger must have `setLevel` method.\n    (logger as unknown as Logger).setLevel = (value: OutputLogLevel) => {\n      logger.level = value;\n    };\n\n    // Logger must have `getLevel` method.\n    (logger as unknown as Logger).getLevel = () => {\n      return logger.level as OutputLogLevel;\n    };\n\n    addColors(customLevels.colors);\n\n    return logger;\n  }\n}\n")),(0,r.kt)("p",null,"\u042f\u043a \u0431\u0430\u0447\u0438\u0442\u0435, \u043e\u043a\u0440\u0456\u043c \u0437\u0432\u0438\u0447\u043d\u0438\u0445 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u044c \u0434\u043b\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"winston"),", \u0443 \u0432\u0438\u0434\u0456\u043b\u0435\u043d\u0438\u0445 \u0440\u044f\u0434\u043a\u0430\u0445 \u0434\u043e \u0439\u043e\u0433\u043e \u0456\u043d\u0441\u0442\u0430\u043d\u0441\u0443 \u0434\u043e\u0434\u0430\u044e\u0442\u044c\u0441\u044f \u0434\u0432\u0430 \u043c\u0435\u0442\u043e\u0434\u0438 - ",(0,r.kt)("inlineCode",{parentName:"p"},"setLevel")," \u0442\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"getLevel")," - \u044f\u043a\u0456 \u0443 \u043d\u044c\u043e\u0433\u043e \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456, \u0430\u043b\u0435 \u044f\u043a\u0456 \u0454 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0438\u043c\u0438 \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0449\u043e\u0431 Ditsmod \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u044f\u0432 \u0437 \u043d\u0438\u043c."),(0,r.kt)("p",null,"\u0406 \u0442\u0435\u043f\u0435\u0440 \u0432\u0436\u0435 \u0446\u0435\u0439 \u043a\u043b\u0430\u0441 \u043c\u043e\u0436\u043d\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u0438 \u0434\u043e DI \u043d\u0430 \u0440\u0456\u0432\u043d\u0456 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Logger, rootModule } from '@ditsmod/core';\nimport { PatchLogger } from './patch-logger.js';\n\n@rootModule({\n  // ...\n  providersPerApp: [\n    { token: Logger, useFactory: [PatchLogger, PatchLogger.prototype.patchLogger] }\n  ],\n})\nexport class AppModule {}\n")),(0,r.kt)("p",null,"\u0413\u043e\u0442\u043e\u0432\u0456 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438 \u0437 \u043b\u043e\u0433\u0435\u0440\u0430\u043c\u0438 \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0433\u043b\u044f\u043d\u0443\u0442\u0438 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/tree/core-2.48.0/examples/04-logger/src/app/modules"},"\u0432 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0456\u0457 Ditsmod"),"."),(0,r.kt)("h2",{id:"\u0440\u043e\u0431\u043e\u0442\u0430-\u0437-\u043b\u043e\u0433\u0435\u0440\u043e\u043c-\u0432-\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u043e\u043c\u0443-\u0440\u0435\u0436\u0438\u043c\u0456"},"\u0420\u043e\u0431\u043e\u0442\u0430 \u0437 \u043b\u043e\u0433\u0435\u0440\u043e\u043c \u0432 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u043e\u043c\u0443 \u0440\u0435\u0436\u0438\u043c\u0456"),(0,r.kt)("p",null,'\u0429\u043e\u0431 \u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u0440\u0456\u0432\u0435\u043d\u044c \u043b\u043e\u0433\u0443\u0432\u0430\u043d\u043d\u044f \u0432 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u043e\u043c\u0443 \u0440\u0435\u0436\u0438\u043c\u0456 (\u0456\u043d\u0448\u0438\u043c\u0438 \u0441\u043b\u043e\u0432\u0430\u043c\u0438 - "\u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u043a\u0442\u0456"), \u043d\u0435 \u043e\u0431\u043e\u0432\'\u044f\u0437\u043a\u043e\u0432\u043e \u0437\u0430\u0445\u043e\u0434\u0438\u0442\u0438 \u0432 \u0441\u043a\u043e\u043c\u043f\u0456\u043b\u044c\u043e\u0432\u0430\u043d\u0438\u0439 \u043a\u043e\u0434. \u0414\u043b\u044f \u0446\u0456\u0454\u0457 \u043c\u0435\u0442\u0438 \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0438\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u0440, \u0437\u0430\u0445\u0438\u0441\u0442\u0438\u0442\u0438 \u0439\u043e\u0433\u043e \u0491\u0430\u0440\u0434\u043e\u043c, \u0430 \u043f\u043e\u0442\u0456\u043c \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u0442\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u0438\u0439 \u0440\u043e\u0443\u0442 \u0434\u043b\u044f \u0437\u043c\u0456\u043d\u0438 \u0440\u0456\u0432\u043d\u044f \u043b\u043e\u0433\u0443\u0432\u0430\u043d\u043d\u044f, \u044f\u043a\u0438\u0439 \u0432\u0438 \u0432\u043a\u0430\u0436\u0435\u0442\u0435 \u0432 URL:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { AnyObj, controller, inject, Logger, LogLevel, QUERY_PARAMS, Res, route } from '@ditsmod/core';\n\nimport { requirePermissions } from '../auth/guards-utils.js';\nimport { Permission } from '../auth/types.js';\n\n@controller()\nexport class SomeController {\n  @route('GET', 'set-loglevel', [requirePermissions(Permission.canSetLogLevel)])\n  setLogLevel(@inject(QUERY_PARAMS) queryParams: AnyObj, logger: Logger, res: Res) {\n    const level = queryParams.logLevel as LogLevel;\n    try {\n      logger.setLevel(level);\n      res.send('Setting logLevel successful!');\n    } catch (error: any) {\n      res.send(`Setting logLevel is failed: ${error.message}`);\n    }\n  }\n}\n")),(0,r.kt)("p",null,"\u042f\u043a \u0431\u0430\u0447\u0438\u0442\u0435, \u0442\u0443\u0442 \u0441\u0442\u0432\u043e\u0440\u044e\u0454\u0442\u044c\u0441\u044f \u0440\u043e\u0443\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"/set-loglevel"),", \u0456\u0437 \u0437\u0430\u0445\u0438\u0441\u0442\u043e\u043c \u0447\u0435\u0440\u0435\u0437 \u0491\u0430\u0440\u0434, \u044f\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0454 \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0442\u0430\u043a\u0443 \u0434\u0456\u044e. \u0422\u0443\u0442 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"requirePermissions()"),", \u043f\u0440\u043e \u044f\u043a\u0438\u0439 \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u0438 \u0443 \u0440\u043e\u0437\u0434\u0456\u043b\u0456 ",(0,r.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/guards#%D1%85%D0%B5%D0%BB%D0%BF%D0%B5%D1%80%D0%B8-%D0%B4%D0%BB%D1%8F-%D2%91%D0%B0%D1%80%D0%B4%D1%96%D0%B2-%D0%B7-%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D0%B0%D0%BC%D0%B8"},"\u0425\u0435\u043b\u043f\u0435\u0440\u0438 \u0434\u043b\u044f \u0491\u0430\u0440\u0434\u0456\u0432 \u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438"),"."))}c.isMDXComponent=!0}}]);