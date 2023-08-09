"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[827],{3874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(3117),i=(n(7294),n(3905));const o={sidebar_position:0},s="Testing",a={unversionedId:"developer-guides/testing",id:"developer-guides/testing",title:"Testing",description:"Unit testing",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/01-developer-guides/01-testing.md",sourceDirName:"01-developer-guides",slug:"/developer-guides/testing",permalink:"/en/developer-guides/testing",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/01-developer-guides/01-testing.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"LogMediator",permalink:"/en/components-of-ditsmod-app/log-mediator"},next:{title:"Collision of providers",permalink:"/en/developer-guides/providers-collisions"}},l={},c=[{value:"Unit testing",id:"unit-testing",level:2},{value:"HTTP server testing",id:"http-server-testing",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testing"},"Testing"),(0,i.kt)("h2",{id:"unit-testing"},"Unit testing"),(0,i.kt)("p",null,"Currently, perhaps the most popular framework for writing unit tests for JavaScript code is ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"jest"),". In this documentation we will use this framework."),(0,i.kt)("p",null,"If you know how ",(0,i.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/dependency-injection"},"DI")," works, you can easily write unit tests for Ditsmod application classes. DI allows you to greatly simplify the process of writing tests. First, you need to learn how to work with ",(0,i.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/dependency-injection#injector"},"injectors")," and the ",(0,i.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/dependency-injection#hierarchy-of-injectors"},"injector hierarchy"),"."),(0,i.kt)("p",null,"Let's say we want to test ",(0,i.kt)("inlineCode",{parentName:"p"},"Service2")," in this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// service1.ts\nimport { injectable } from '@ditsmod/core';\n\nclass Service1 {\n  saySomething() {\n    return 'Hello';\n  }\n}\n\n// service2.ts\n@injectable()\nclass Service2 {\n  constructor(private service1: Service1) {}\n\n  method1() {\n    return this.service1.saySomething();\n  }\n}\n")),(0,i.kt)("p",null,"As you can see, ",(0,i.kt)("inlineCode",{parentName:"p"},"Service2")," depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"Service1"),". Before we write the tests, let's recall how we can create an injector that can resolve class dependencies from our example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Injector } from '@ditsmod/core';\nimport { Service1 } from './service1';\nimport { Service2 } from './service2';\n\nconst injector = Injector.resolveAndCreate([Service1, Service2]);\nconst service2 = injector.get(Service2);\n")),(0,i.kt)("p",null,"So, as an input to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Injector.resolveAndCreate()")," method, we pass an array of all the necessary providers that will participate in testing, and as an output, we get an injector that can create values for any passed provider."),(0,i.kt)("p",null,"In this case, to create ",(0,i.kt)("inlineCode",{parentName:"p"},"Service2"),", the injector will first create an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Service1")," class. But in order to write tests specifically for ",(0,i.kt)("inlineCode",{parentName:"p"},"Service2"),", we don't care if ",(0,i.kt)("inlineCode",{parentName:"p"},"Service1")," is working properly, so instead of the real ",(0,i.kt)("inlineCode",{parentName:"p"},"Service1")," class, we can simulate its operation using ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/mock-functions"},"mock functions"),". This is how it will look like (without tests yet):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},"import { Injector } from '@ditsmod/core';\nimport { Service1 } from './service1';\nimport { Service2 } from './service2';\n\nconst injector = Injector.resolveAndCreate([\n  { token: Service1, useValue: { saySomething: jest.fn() } },\n  Service2\n]);\nconst service2 = injector.get(Service2);\n")),(0,i.kt)("p",null,"As you can see, in the highlighted line, instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"Service1"),", a value provider with a mock function is passed that will simulate the operation of ",(0,i.kt)("inlineCode",{parentName:"p"},"Service1"),"."),(0,i.kt)("p",null,"Now you can write a test using this technique of substituting providers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2,9}","{2,9}":!0},"describe('Service2', () => {\n  const saySomething = jest.fn();\n  let service2: Service2;\n\n  beforeEach(() => {\n    jest.restoreAllMocks();\n\n    const injector = Injector.resolveAndCreate([\n      { token: Service1, useValue: { saySomething } },\n      Service2\n    ]);\n\n    service2 = injector.get(Service2);\n  });\n\n  it('should say \"Hello, World!\"', () => {\n    saySomething.mockImplementation(() => 'Hello, World!');\n\n    expect(service2).toBeInstanceOf(Service2);\n    expect(service2.method1()).toBe('Hello, World!');\n    expect(saySomething).toBeCalledTimes(1);\n  });\n});\n")),(0,i.kt)("p",null,"We recommend that you place your unit test files close to the files they test. That is, if the file is called ",(0,i.kt)("inlineCode",{parentName:"p"},"some.service.ts"),", it is better to place the test file next to a name that ends with ",(0,i.kt)("inlineCode",{parentName:"p"},".spec.ts")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".test.ts"),", for example ",(0,i.kt)("inlineCode",{parentName:"p"},"some.service.spec.ts"),". This makes working with tests much easier, and also allows you to immediately see which files have not yet been tested."),(0,i.kt)("h2",{id:"http-server-testing"},"HTTP server testing"),(0,i.kt)("p",null,"One of the most popular frameworks for HTTP server testing is ","[supertest][102]","."),(0,i.kt)("p",null,"To start a web server to test your application, pass ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," as the second argument to ",(0,i.kt)("inlineCode",{parentName:"p"},"Application#bootstrap()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{8}","{8}":!0},"import request from 'supertest';\nimport { Application } from '@ditsmod/core';\n\nimport { AppModule } from '../src/app/app.module';\n\ndescribe('HTTP server testing', () => {\n  it('Hello world works', async () => {\n    const { server } = await new Application().bootstrap(AppModule, false);\n\n    await request(server)\n      .get('/')\n      .expect(200)\n      .expect('Hello World!');\n\n    server.close();\n  });\n});\n")),(0,i.kt)("p",null,"As you can see, a web server is created in the highlighted line, which has not yet called the ",(0,i.kt)("inlineCode",{parentName:"p"},"server.listen()")," method. Therefore, supertest can automatically do this by substituting a random port number, which is crucial when asynchronously calling multiple tests at once. Here, ",(0,i.kt)("inlineCode",{parentName:"p"},"AppModule")," is the root module of the application."),(0,i.kt)("p",null,"We recommend keeping such tests in a separate directory called ",(0,i.kt)("inlineCode",{parentName:"p"},"tests"),", at the same level as the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," root directory."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);