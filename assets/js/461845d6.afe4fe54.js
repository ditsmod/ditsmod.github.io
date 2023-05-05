"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(3117),o=(n(7294),n(3905));const l={},a="07-composing-modules",i={unversionedId:"examples/dynamically-composing-modules",id:"examples/dynamically-composing-modules",title:"07-composing-modules",description:"\u0429\u043e\u0431 \u0441\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u0442\u0438 \u0434\u0430\u043d\u0438\u0439 \u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e \u0441\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u043f\u0456\u0434\u0433\u043e\u0442\u0443\u0432\u0430\u0442\u0438 \u043f\u0435\u0440\u0435\u0434\u0443\u043c\u043e\u0432\u0438.",source:"@site/docs/10-examples/07-dynamically-composing-modules.md",sourceDirName:"10-examples",slug:"/examples/dynamically-composing-modules",permalink:"/examples/dynamically-composing-modules",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/docs/10-examples/07-dynamically-composing-modules.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"06-body-parser",permalink:"/examples/body-parser"},next:{title:"15-i18n",permalink:"/examples/i18n"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"07-composing-modules"},"07-composing-modules"),(0,o.kt)("p",null,"\u0429\u043e\u0431 \u0441\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u0442\u0438 \u0434\u0430\u043d\u0438\u0439 \u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e \u0441\u043f\u043e\u0447\u0430\u0442\u043a\u0443 ",(0,o.kt)("a",{parentName:"p",href:"./prerequisite"},"\u043f\u0456\u0434\u0433\u043e\u0442\u0443\u0432\u0430\u0442\u0438 \u043f\u0435\u0440\u0435\u0434\u0443\u043c\u043e\u0432\u0438"),"."),(0,o.kt)("p",null,"Ditsmod \u043c\u0430\u0454 \u043c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u0434\u043e\u0434\u0430\u0432\u0430\u0442\u0438 \u0442\u0430 \u0432\u0438\u0434\u0430\u043b\u044f\u0442\u0438 \u043c\u043e\u0434\u0443\u043b\u0456 \u043f\u0456\u0441\u043b\u044f \u0441\u0442\u0430\u0440\u0442\u0443 \u0432\u0435\u0431\u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043f\u0440\u0438\u0447\u043e\u043c\u0443 \u043d\u0435\u043c\u0430\u0454 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e\u0441\u0442\u0456 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u0438 \u0437\u0430\u043d\u043e\u0432\u043e \u0432\u0435\u0431\u0441\u0435\u0440\u0432\u0435\u0440, \u0430 HTTP-\u043a\u043b\u0456\u0454\u043d\u0442\u0438 \u043d\u0435 \u043f\u043e\u043c\u0456\u0442\u044f\u0442\u044c \u043f\u0435\u0440\u0435\u0431\u043e\u0457\u0432, \u043f\u0456\u0434 \u0447\u0430\u0441 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0447\u0438 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f \u0446\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0456\u0432."),(0,o.kt)("p",null,"\u0417\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0443:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start7\n")),(0,o.kt)("p",null,"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0430 \u0440\u043e\u0431\u043e\u0442\u0438:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# OK \u0456\u0437 \u043f\u0435\u0440\u0448\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f\ncurl -isS localhost:3000\n\n# \u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0456\u0437 404 \u0441\u0442\u0430\u0442\u0443\u0441\u043e\u043c \u0456\u0437 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f\ncurl -isS localhost:3000/get-2\n\n# \u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f\ncurl -isS localhost:3000/add-2\n\n# \u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0456\u0437 200 \u0441\u0442\u0430\u0442\u0443\u0441\u043e\u043c \u0456\u0437 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f\ncurl -isS localhost:3000/get-2\n\n# \u041f\u0456\u0434 \u0447\u0430\u0441 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0442\u0440\u0435\u0442\u044c\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f, \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u0441\u0442\u0430\u0442\u0438\u0441\u044f \u0437\u0431\u0456\u0439\ncurl -isS localhost:3000/add-3\n\n# \u0410\u043b\u0435 \u0456\u043d\u0448\u0456 \u043c\u043e\u0434\u0443\u043b\u0456 \u043f\u0440\u043e\u0434\u043e\u0432\u0436\u0443\u044e\u0442\u044c \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438\ncurl -isS localhost:3000\ncurl -isS localhost:3000/get-2\n\n# \u0412\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f\ncurl -isS localhost:3000/del-2\n\n# \u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0456\u0437 404 \u0441\u0442\u0430\u0442\u0443\u0441\u043e\u043c \u0456\u0437 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f\ncurl -isS localhost:3000/get-2\n\n# \u0410\u043b\u0435 \u0432\u0441\u0435 OK \u0456\u0437 \u043f\u0435\u0440\u0448\u0438\u043c \u043c\u043e\u0434\u0443\u043b\u0435\u043c\ncurl -isS localhost:3000\n")))}u.isMDXComponent=!0}}]);