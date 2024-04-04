"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[652],{1592:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=s(4848),o=s(8453);const i={slug:"/",sidebar_position:1},r="Introduction",d={id:"intro",title:"Introduction",description:"About the project",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/",permalink:"/en/",draft:!1,unlisted:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Modules",permalink:"/en/components-of-ditsmod-app/module"}},l={},c=[{value:"About the project",id:"about-the-project",level:2},{value:"ExpressJS vs. Ditsmod",id:"expressjs-vs-ditsmod",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Start in Development Mode",id:"start-in-development-mode",level:2},{value:"Start in product mode",id:"start-in-product-mode",level:2},{value:"Entry file for Node.js",id:"entry-file-for-nodejs",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.h2,{id:"about-the-project",children:"About the project"}),"\n",(0,t.jsxs)(n.p,{children:["Ditsmod is a Node.js web framework, named ",(0,t.jsx)(n.strong,{children:"DI"})," + ",(0,t.jsx)(n.strong,{children:"TS"})," + ",(0,t.jsx)(n.strong,{children:"Mod"})," to emphasize its important components: it has ",(0,t.jsx)(n.strong,{children:"D"}),"ependency ",(0,t.jsx)(n.strong,{children:"I"}),"njection, written in ",(0,t.jsx)(n.strong,{children:"T"}),"ype",(0,t.jsx)(n.strong,{children:"S"}),"cript, and designed for good ",(0,t.jsx)(n.strong,{children:"Mod"}),"ularity."]}),"\n",(0,t.jsx)(n.p,{children:"The main features of Ditsmod:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Modular architecture on decorators, which allows you to declaratively describe the structure of the application."}),"\n",(0,t.jsxs)(n.li,{children:["A convenient mechanism for ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Dependency_injection",children:"specifying and resolving dependencies"}),' between different classes: you specify the instances of which classes you need in the constructor, and DI does the hard work of "how to get them".']}),"\n",(0,t.jsx)(n.li,{children:"Ability to write your own extensions (sometimes called plugins) that can be asynchronously initialized and that can depend on each other."}),"\n",(0,t.jsx)(n.li,{children:"Ability to dynamically add and remove modules after starting the web server, without the need to restart."}),"\n",(0,t.jsx)(n.li,{children:"Has OpenAPI support, and has the ability to validate queries based on OpenAPI metadata."}),"\n",(0,t.jsxs)(n.li,{children:["To date, ",(0,t.jsx)(n.a,{href:"https://github.com/ditsmod/vs-webframework#readme",children:"Ditsmod is one of the fastest"})," among Node.js web frameworks."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Some concepts of Ditsmod architecture are taken from Angular concepts, and DI is built based on the native Angular DI module."}),"\n",(0,t.jsx)(n.h3,{id:"expressjs-vs-ditsmod",children:"ExpressJS vs. Ditsmod"}),"\n",(0,t.jsx)(n.p,{children:"For comparison, the following two examples show the minimal code required to run ExpressJS and Ditsmod applications."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import express from 'express';\nconst app = express();\n\napp.get('/hello', function (req, res) {\n  res.send('Hello, World!');\n});\n\napp.listen(3000, '0.0.0.0');\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { controller, route, Res, rootModule, Application } from '@ditsmod/core';\nimport { RoutingModule } from '@ditsmod/routing';\n\n@controller()\nexport class ExampleController {\n  @route('GET', 'hello')\n  tellHello(res: Res) {\n    res.send('Hello, World!');\n  }\n}\n\n@rootModule({\n  imports: [RoutingModule],\n  controllers: [ExampleController],\n})\nexport class AppModule {}\n\nconst app = await new Application().bootstrap(AppModule);\napp.server.listen(3000, '0.0.0.0');\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Looking at the amount of code, you might think that Ditsmod is slower than ExpressJS because of its verbosity. But in fact, only Ditsmod's cold start is slightly slower (it starts in 18ms on my laptop, while ExpressJS starts in 4ms). In terms of request processing speed, ",(0,t.jsx)(n.a,{href:"https://github.com/ditsmod/vs-webframework#readme",children:"Ditsmod is more than twice as fast as ExpressJS"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Please make sure that Node.js >= v18.14.0 is installed on your operating system."}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["The basic set for running the application has a repository ",(0,t.jsx)(n.a,{href:"https://github.com/ditsmod/seed",children:"ditsmod/seed"}),". Clone it and install the dependencies:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone --depth 1 https://github.com/ditsmod/seed.git my-app\ncd my-app\nnpm i\n"})}),"\n",(0,t.jsx)(n.p,{children:"Alternatively, you can use the starter monorepo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone --depth 1 https://github.com/ditsmod/monorepo.git my-app\ncd my-app\nnpm i\n"})}),"\n",(0,t.jsx)(n.h2,{id:"start-in-development-mode",children:"Start in Development Mode"}),"\n",(0,t.jsx)(n.p,{children:"For development mode, you'll need two terminals. In one, TypeScript code will be compiled into JavaScript code, and in the other, a web server will be running. After each code change, the web server will pick up these changes and reload."}),"\n",(0,t.jsx)(n.p,{children:"Command for the first terminal:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run watch\n"})}),"\n",(0,t.jsx)(n.p,{children:"Command for the second terminal:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can check the server operation using ",(0,t.jsx)(n.code,{children:"curl"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -i localhost:3000\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Or simply by going to ",(0,t.jsx)(n.a,{href:"http://localhost:3000/",children:"http://localhost:3000/"})," in your browser."]}),"\n",(0,t.jsxs)(n.p,{children:["Of course, instead of two terminals, you can use, for example, ",(0,t.jsx)(n.a,{href:"https://github.com/TypeStrong/ts-node",children:"ts-node"})," in one terminal, but this is a slower option, because after each change ",(0,t.jsx)(n.code,{children:"ts-node"})," will recompile all the code on the fly, while in ",(0,t.jsx)(n.code,{children:"tsc -w"})," only recompiles the changed file. In addition, thanks to ",(0,t.jsx)(n.a,{href:"https://github.com/ditsmod/seed",children:"ditsmod/seed"}),"'s use of the so-called ",(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/project-references.html",children:"Project References"})," and ",(0,t.jsx)(n.code,{children:"tsc -b"})," build mode, even very large projects compile very quickly."]}),"\n",(0,t.jsxs)(n.p,{children:["Note that there are four config files for TypeScript in the ",(0,t.jsx)(n.code,{children:"ditsmod/seed"})," repository:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tsconfig.json"})," - the basic configuration used by your IDE (in most cases it is probably VS Code)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tsconfig.build.json"})," - this configuration is used to compile the code from the ",(0,t.jsx)(n.code,{children:"src"})," directory to the ",(0,t.jsx)(n.code,{children:"dist"})," directory, it is intended for application code."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tsconfig.test.json"})," - this configuration is used to compile end-to-end tests."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tsconfig.unit.json"})," - this configuration is used to compile unit tests."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Also, note that since ",(0,t.jsx)(n.code,{children:"ditsmod/seed"})," is declared as an EcmaScript Module (ESM), you can use ",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/packages.html#imports",children:"native Node.js aliases"})," to shorten file paths. This is analogous to ",(0,t.jsx)(n.code,{children:"compilerOptions.paths"})," in ",(0,t.jsx)(n.code,{children:"tsconfig"}),". Such aliases are declared in ",(0,t.jsx)(n.code,{children:"package.json"})," in the ",(0,t.jsx)(n.code,{children:"imports"})," field:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"{2}",children:'"imports": {\n  "#app/*": "./dist/app/*"\n},\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Now you can use it, for example in the ",(0,t.jsx)(n.code,{children:"test"})," folder, like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { AppModule } from '#app/app.module.js';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["At the moment (2023-10-13) TypeScript does not yet fully support these aliases, so it is advisable to duplicate them in the ",(0,t.jsx)(n.code,{children:"tsconfig.json"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'// ...\n  "paths": {\n    "#app/*": ["./src/app/*"]\n  }\n// ...\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Note that in ",(0,t.jsx)(n.code,{children:"package.json"})," the aliases point to ",(0,t.jsx)(n.code,{children:"dist"}),", while in ",(0,t.jsx)(n.code,{children:"tsconfig.json"})," they point to ",(0,t.jsx)(n.code,{children:"src"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"start-in-product-mode",children:"Start in product mode"}),"\n",(0,t.jsx)(n.p,{children:"The application is compiled and the server is started in product mode using the command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run build\nnpm run start-prod\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In addition, you can view more examples in the ",(0,t.jsx)(n.a,{href:"https://github.com/ditsmod/ditsmod/tree/main/examples",children:"examples"})," folder, as well as in the repository ",(0,t.jsx)(n.a,{href:"https://github.com/ditsmod/realworld",children:"RealWorld"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"entry-file-for-nodejs",children:"Entry file for Node.js"}),"\n",(0,t.jsxs)(n.p,{children:["After ",(0,t.jsx)(n.a,{href:"#installation",children:"installing Ditsmod seed"}),", the first thing you need to know: all the application code is in the ",(0,t.jsx)(n.code,{children:"src"})," folder, it is compiled using the TypeScript utility ",(0,t.jsx)(n.code,{children:"tsc"}),", after compilation it goes to the ",(0,t.jsx)(n.code,{children:"dist"})," folder, and then as JavaScript code it can be executed in Node.js."]}),"\n",(0,t.jsxs)(n.p,{children:["Let's look at the ",(0,t.jsx)(n.code,{children:"src/main.ts"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { ServerOptions } from 'node:http';\nimport { Application } from '@ditsmod/core';\n\nimport { AppModule } from './app/app.module.js';\nimport { checkCliAndSetPort } from './app/utils/check-cli-and-set-port.js';\n\nconst serverOptions: ServerOptions = { keepAlive: true, keepAliveTimeout: 5000 };\nconst app = await new Application().bootstrap(AppModule, { serverOptions });\nconst port = checkCliAndSetPort(3000);\napp.server.listen(port, '0.0.0.0');\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After compilation, it becomes ",(0,t.jsx)(n.code,{children:"dist/main.js"})," and becomes the entry point for running the application in production mode, and so why you will specify it as an argument to Node.js:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node dist/main.js\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Looking at the file ",(0,t.jsx)(n.code,{children:"src/main.ts"}),", you can see that an instance of the class ",(0,t.jsx)(n.code,{children:"Application"})," is created, and as an argument for the method ",(0,t.jsx)(n.code,{children:"bootstrap()"})," is passed ",(0,t.jsx)(n.code,{children:"AppModule"}),". Here ",(0,t.jsx)(n.code,{children:"AppModule"})," is the root module to which other application modules then imports."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var t=s(6540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);