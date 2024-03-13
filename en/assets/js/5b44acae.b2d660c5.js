"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=a,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const i={slug:"/",sidebar_position:1},r="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"About the project",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/",permalink:"/en/",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Modules",permalink:"/en/components-of-ditsmod-app/module"}},p={},l=[{value:"About the project",id:"about-the-project",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Start in Development Mode",id:"start-in-development-mode",level:2},{value:"Start in product mode",id:"start-in-product-mode",level:2},{value:"Entry file for Node.js",id:"entry-file-for-nodejs",level:2}],d={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("h2",{id:"about-the-project"},"About the project"),(0,a.kt)("p",null,"Ditsmod is a Node.js web framework, named ",(0,a.kt)("strong",{parentName:"p"},"DI")," + ",(0,a.kt)("strong",{parentName:"p"},"TS")," + ",(0,a.kt)("strong",{parentName:"p"},"Mod")," to emphasize its important components: it has ",(0,a.kt)("strong",{parentName:"p"},"D"),"ependency ",(0,a.kt)("strong",{parentName:"p"},"I"),"njection, written in ",(0,a.kt)("strong",{parentName:"p"},"T"),"ype",(0,a.kt)("strong",{parentName:"p"},"S"),"cript, and designed for good ",(0,a.kt)("strong",{parentName:"p"},"Mod"),"ularity."),(0,a.kt)("p",null,"The main features of Ditsmod:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Modular architecture on decorators, which allows you to declaratively describe the structure of the application."),(0,a.kt)("li",{parentName:"ul"},"A convenient mechanism for ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Dependency_injection"},"specifying and resolving dependencies"),' between different classes: you specify the instances of which classes you need in the constructor, and DI does the hard work of "how to get them".'),(0,a.kt)("li",{parentName:"ul"},"Ability to write your own extensions (sometimes called plugins) that can be asynchronously initialized and that can depend on each other."),(0,a.kt)("li",{parentName:"ul"},"Ability to dynamically add and remove modules after starting the web server, without the need to restart."),(0,a.kt)("li",{parentName:"ul"},"Has OpenAPI support, and has the ability to validate queries based on OpenAPI metadata."),(0,a.kt)("li",{parentName:"ul"},"To date, ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ditsmod/vs-webframework#readme"},"Ditsmod is one of the fastest")," among Node.js web frameworks.")),(0,a.kt)("p",null,"Some concepts of Ditsmod architecture are taken from Angular concepts, and DI is built based on the native Angular DI module."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Please make sure that Node.js >= v18.14.0 is installed on your operating system."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"The basic set for running the application has a repository ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/seed"},"ditsmod/seed"),". Clone it and install the dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --depth 1 https://github.com/ditsmod/seed.git my-app\ncd my-app\nnpm i\n")),(0,a.kt)("p",null,"Alternatively, you can use the starter monorepo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --depth 1 https://github.com/ditsmod/monorepo.git my-app\ncd my-app\nnpm i\n")),(0,a.kt)("h2",{id:"start-in-development-mode"},"Start in Development Mode"),(0,a.kt)("p",null,"For development mode, you'll need two terminals. In one, TypeScript code will be compiled into JavaScript code, and in the other, a web server will be running. After each code change, the web server will pick up these changes and reload."),(0,a.kt)("p",null,"Command for the first terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run watch\n")),(0,a.kt)("p",null,"Command for the second terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,a.kt)("p",null,"You can check the server operation using ",(0,a.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -i localhost:3000\n")),(0,a.kt)("p",null,"Or simply by going to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/")," in your browser."),(0,a.kt)("p",null,"Of course, instead of two terminals, you can use, for example, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-node"},"ts-node")," in one terminal, but this is a slower option, because after each change ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node")," will recompile all the code on the fly, while in ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc -w")," only recompiles the changed file. In addition, thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/seed"},"ditsmod/seed"),"'s use of the so-called ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/project-references.html"},"Project References")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc -b")," build mode, even very large projects compile very quickly."),(0,a.kt)("p",null,"Note that there are four config files for TypeScript in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ditsmod/seed")," repository:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," - the basic configuration used by your IDE (in most cases it is probably VS Code)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.build.json")," - this configuration is used to compile the code from the ",(0,a.kt)("inlineCode",{parentName:"li"},"src")," directory to the ",(0,a.kt)("inlineCode",{parentName:"li"},"dist")," directory, it is intended for application code."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.test.json")," - this configuration is used to compile end-to-end tests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.unit.json")," - this configuration is used to compile unit tests.")),(0,a.kt)("p",null,"Also, note that since ",(0,a.kt)("inlineCode",{parentName:"p"},"ditsmod/seed")," is declared as an EcmaScript Module (ESM), you can use ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/packages.html#subpath-imports"},"native Node.js aliases")," to shorten file paths. This is analogous to ",(0,a.kt)("inlineCode",{parentName:"p"},"compilerOptions.paths")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig"),". Such aliases are declared in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"imports")," field:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"{2}","{2}":!0},'"imports": {\n  "#app/*": "./dist/app/*"\n},\n')),(0,a.kt)("p",null,"Now you can use it, for example in the ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," folder, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { AppModule } from '#app/app.module.js';\n")),(0,a.kt)("p",null,"At the moment (2023-10-13) TypeScript does not yet fully support these aliases, so it is advisable to duplicate them in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// ...\n  "paths": {\n    "#app/*": ["./src/app/*"]\n  }\n// ...\n')),(0,a.kt)("p",null,"There is no point in doing this in other ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig")," files because it is only needed by your code editor. Note that in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," the aliases point to ",(0,a.kt)("inlineCode",{parentName:"p"},"dist"),", while in ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," they point to ",(0,a.kt)("inlineCode",{parentName:"p"},"src"),"."),(0,a.kt)("h2",{id:"start-in-product-mode"},"Start in product mode"),(0,a.kt)("p",null,"The application is compiled and the server is started in product mode using the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\nnpm run start-prod\n")),(0,a.kt)("p",null,"In addition, you can view more examples in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/tree/main/examples"},"examples")," folder, as well as in the repository ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/realworld"},"RealWorld"),"."),(0,a.kt)("h2",{id:"entry-file-for-nodejs"},"Entry file for Node.js"),(0,a.kt)("p",null,"After ",(0,a.kt)("a",{parentName:"p",href:"#install-the-ditsmod-seed"},"installing Ditsmod seed"),", the first thing you need to know: all the application code is in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," folder, it is compiled using the TypeScript utility ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc"),", after compilation it goes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder, and then as JavaScript code it can be executed in Node.js."),(0,a.kt)("p",null,"Let's look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main.ts")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Application } from '@ditsmod/core';\nimport { AppModule } from './app/app.module.js';\n\nconst app = await new Application().bootstrap(AppModule);\napp.server.listen(3000, '0.0.0.0');\n")),(0,a.kt)("p",null,"After compilation, it becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/main.js")," and becomes the entry point for running the application in production mode, and so why you will specify it as an argument to Node.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node dist/main.js\n")),(0,a.kt)("p",null,"Looking at the file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main.ts"),", you can see that an instance of the class ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," is created, and as an argument for the method ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap()")," is passed ",(0,a.kt)("inlineCode",{parentName:"p"},"AppModule"),". Here ",(0,a.kt)("inlineCode",{parentName:"p"},"AppModule")," is the root module to which other application modules then imports."))}m.isMDXComponent=!0}}]);