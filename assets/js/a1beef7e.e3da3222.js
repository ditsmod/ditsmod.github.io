"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[11],{9732:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(3117),o=(r(7294),r(3905));const i={},a="\u041f\u0435\u0440\u0435\u0434\u0443\u043c\u043e\u0432\u0438",p={unversionedId:"examples/prerequisite",id:"examples/prerequisite",title:"\u041f\u0435\u0440\u0435\u0434\u0443\u043c\u043e\u0432\u0438",description:"\u0422\u0435\u043a\u0430 examples \u043c\u0456\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f Ditsmod \u0434\u043b\u044f \u0442\u0438\u043f\u043e\u0432\u0438\u0445 \u0432\u0438\u043f\u0430\u0434\u043a\u0456\u0432. \u0407\u0445 \u0437\u0440\u0443\u0447\u043d\u0456\u0448\u0435 \u043f\u0440\u043e\u0433\u043b\u044f\u0434\u0430\u0442\u0438, \u044f\u043a\u0449\u043e \u043a\u043b\u043e\u043d\u0443\u0432\u0430\u0442\u0438 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0456\u0439 Ditsmod \u0442\u0430 \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0438 npm \u0437\u0430\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0456:",source:"@site/docs/10-examples/00-prerequisite.md",sourceDirName:"10-examples",slug:"/examples/prerequisite",permalink:"/examples/prerequisite",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/docs/10-examples/00-prerequisite.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"@ditsmod/openapi-validation",permalink:"/native-modules/openapi-validation"},next:{title:"01-hello-world",permalink:"/examples/hello-world"}},l={},s=[],c={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u043f\u0435\u0440\u0435\u0434\u0443\u043c\u043e\u0432\u0438"},"\u041f\u0435\u0440\u0435\u0434\u0443\u043c\u043e\u0432\u0438"),(0,o.kt)("p",null,"\u0422\u0435\u043a\u0430 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/tree/main/examples"},"examples")," \u043c\u0456\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f Ditsmod \u0434\u043b\u044f \u0442\u0438\u043f\u043e\u0432\u0438\u0445 \u0432\u0438\u043f\u0430\u0434\u043a\u0456\u0432. \u0407\u0445 \u0437\u0440\u0443\u0447\u043d\u0456\u0448\u0435 \u043f\u0440\u043e\u0433\u043b\u044f\u0434\u0430\u0442\u0438, \u044f\u043a\u0449\u043e \u043a\u043b\u043e\u043d\u0443\u0432\u0430\u0442\u0438 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0456\u0439 Ditsmod \u0442\u0430 \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0438 npm \u0437\u0430\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0456:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ditsmod/ditsmod.git\ncd ditsmod\nyarn\nyarn boot\n")),(0,o.kt)("p",null,"\u041f\u0456\u0441\u043b\u044f \u0447\u043e\u0433\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0438 \u043e\u0434\u0438\u043d \u0456\u0437 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0456\u0432, \u0435\u043a\u0441\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u0442\u0443\u0432\u0430\u0442\u0438 \u0437 \u043d\u0438\u043c\u0438, \u0456 \u0437\u0440\u0430\u0437\u0443 \u0431\u0430\u0447\u0438\u0442\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442."),(0,o.kt)("p",null,"\u041a\u043e\u0436\u0435\u043d \u043f\u0440\u0438\u043a\u043b\u0430\u0434 \u043c\u0430\u0454 README.md, \u0434\u0435 \u043a\u043e\u0440\u043e\u0442\u043a\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u043e\u0441\u043d\u043e\u0432\u043d\u0456 \u0439\u043e\u0433\u043e \u043e\u0441\u043e\u0431\u043b\u0438\u0432\u043e\u0441\u0442\u0456."))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);