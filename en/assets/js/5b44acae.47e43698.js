"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={slug:"/",sidebar_position:1},i="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"About the project",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/",permalink:"/en/",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Modules",permalink:"/en/components-of-ditsmod-app/module"}},p={},l=[{value:"About the project",id:"about-the-project",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install the Ditsmod seed",id:"install-the-ditsmod-seed",level:2},{value:"Run the application",id:"run-the-application",level:2},{value:"Entry file for Node.js",id:"entry-file-for-nodejs",level:2}],d={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("h2",{id:"about-the-project"},"About the project"),(0,a.kt)("p",null,"Ditsmod is a Node.js web framework, named ",(0,a.kt)("strong",{parentName:"p"},"DI")," + ",(0,a.kt)("strong",{parentName:"p"},"TS")," + ",(0,a.kt)("strong",{parentName:"p"},"Mod")," to emphasize its important components: it has ",(0,a.kt)("strong",{parentName:"p"},"D"),"ependency ",(0,a.kt)("strong",{parentName:"p"},"I"),"njection, written in ",(0,a.kt)("strong",{parentName:"p"},"T"),"ype",(0,a.kt)("strong",{parentName:"p"},"S"),"cript, and designed for good ",(0,a.kt)("strong",{parentName:"p"},"Mod"),"ularity."),(0,a.kt)("p",null,"The main features of Ditsmod:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Modular architecture on decorators, which allows you to declaratively describe the structure of the application."),(0,a.kt)("li",{parentName:"ul"},"A convenient mechanism for ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Dependency_injection"},"specifying and resolving dependencies"),' between different classes: you specify the instances of which classes you need in the constructor, and DI does the hard work of "how to get them".'),(0,a.kt)("li",{parentName:"ul"},"Ability to write your own extensions (sometimes called plugins) that can be asynchronously initialized and that can depend on each other."),(0,a.kt)("li",{parentName:"ul"},"Ability to dynamically add and remove modules after starting the web server, without the need to restart."),(0,a.kt)("li",{parentName:"ul"},"Has OpenAPI support, and has the ability to validate queries based on OpenAPI metadata."),(0,a.kt)("li",{parentName:"ul"},"To date, ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ditsmod/vs-webframework#readme"},"Ditsmod is one of the fastest")," among Node.js web frameworks.")),(0,a.kt)("p",null,"Some concepts of Ditsmod architecture are taken from Angular concepts, and DI is built based on the native Angular DI module."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Please make sure that Node.js >= v18.0.0 is installed on your operating system."),(0,a.kt)("h2",{id:"install-the-ditsmod-seed"},"Install the Ditsmod seed"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/seed"},"ditsmod-seed")," repository has the basic set for application operation. Clone it and install the dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --depth 1 https://github.com/ditsmod/seed.git my-app\ncd my-app\nnpm i\n")),(0,a.kt)("h2",{id:"run-the-application"},"Run the application"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,a.kt)("p",null,"This command cannot be used for production mode, but it is suitable for application development, because every time you save your code, the web server will automatically reboot to apply the latest changes."),(0,a.kt)("p",null,"You can check the server with ",(0,a.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -isS localhost:3000\n")),(0,a.kt)("p",null,"Or just open the browser on ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/"),"."),(0,a.kt)("p",null,"The application is compiled and the server is started in product mode using the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\nnpm run start-prod\n")),(0,a.kt)("p",null,"In addition, you can view more examples in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/tree/main/examples"},"examples")," folder, as well as in the repository ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/realworld"},"RealWorld"),"."),(0,a.kt)("h2",{id:"entry-file-for-nodejs"},"Entry file for Node.js"),(0,a.kt)("p",null,"After ",(0,a.kt)("a",{parentName:"p",href:"#install-the-ditsmod-seed"},"installing Ditsmod seed"),", the first thing you need to know: all the application code is in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," folder, it is compiled using the TypeScript utility ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc"),", after compilation it goes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder, and then as JavaScript code it can be executed in Node.js."),(0,a.kt)("p",null,"Let's look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main.ts")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Application } from '@ditsmod/core';\nimport { AppModule } from './app/app.module';\n\nnew Application().bootstrap(AppModule).then((app) => {\n  app.server.listen(3000, 'localhost');\n});\n")),(0,a.kt)("p",null,"After compilation, it becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/src/main.js")," (or just ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/main.js"),", depending on your ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," configuration) and becomes the entry point for running the application in production mode, and so why you will specify it as an argument to Node.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node dist/src/main.js\n")),(0,a.kt)("p",null,"Looking further at the file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main.ts"),", you can see that an instance of the class ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," is created, and as an argument for the method ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap()")," is passed ",(0,a.kt)("inlineCode",{parentName:"p"},"AppModule"),". Here ",(0,a.kt)("inlineCode",{parentName:"p"},"AppModule")," is the root module to which other application modules then imports."))}u.isMDXComponent=!0}}]);