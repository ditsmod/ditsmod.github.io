"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[827],{3874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(3117),i=(n(7294),n(3905));const o={sidebar_position:0},s="Testing",a={unversionedId:"developer-guides/testing",id:"developer-guides/testing",title:"Testing",description:"What is unit testing",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/01-developer-guides/01-testing.md",sourceDirName:"01-developer-guides",slug:"/developer-guides/testing",permalink:"/en/developer-guides/testing",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/01-developer-guides/01-testing.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"LogMediator",permalink:"/en/components-of-ditsmod-app/log-mediator"},next:{title:"Collision of providers",permalink:"/en/developer-guides/providers-collisions"}},c={},l=[{value:"What is unit testing",id:"what-is-unit-testing",level:2},{value:"Prerequisites for writing unit tests",id:"prerequisites-for-writing-unit-tests",level:2},{value:"End-to-end testing",id:"end-to-end-testing",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testing"},"Testing"),(0,i.kt)("h2",{id:"what-is-unit-testing"},"What is unit testing"),(0,i.kt)("p",null,"Basically, unit testing is a testing method that allows you to verify that the smallest parts of an application work correctly, such as functions and methods of classes (which can also be considered a function). To perform testing, you alternately focus on a separate function while isolating all other parts of the program that interact with that function."),(0,i.kt)("p",null,"Properly written unit tests allow you to read them as documentation for your program. It can be said that most projects document only the public part of the application's API, and the rest is documentation based on unit tests and comments in the code."),(0,i.kt)("p",null,"One of the most popular frameworks for writing unit tests for JavaScript code is ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"jest"),". In this section, we will use this framework."),(0,i.kt)("h2",{id:"prerequisites-for-writing-unit-tests"},"Prerequisites for writing unit tests"),(0,i.kt)("p",null,"A good knowledge of the ",(0,i.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/dependency-injection"},"Ditsmod DI")," architecture will help you easily write unit tests for Ditsmod applications, since one of the main advantages of DI is its ease of testing. First, you need to learn how to work with ",(0,i.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/dependency-injection#injector"},"injectors")," and the ",(0,i.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/dependency-injection#hierarchy-of-injectors"},"injector hierarchy"),"."),(0,i.kt)("p",null,"Let's say you want to test ",(0,i.kt)("inlineCode",{parentName:"p"},"Service2")," in this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// service1.ts\nimport { injectable } from '@ditsmod/core';\n\nclass Service1 {\n  saySomething() {\n    return 'Hello';\n  }\n}\n\n// service2.ts\n@injectable()\nclass Service2 {\n  constructor(private service1: Service1) {}\n\n  method1() {\n    return this.service1.saySomething();\n  }\n}\n")),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"Service2")," depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"Service1"),", we need to isolate this service from interacting with ",(0,i.kt)("inlineCode",{parentName:"p"},"Service1"),". Before we write the tests, let's recall how we can create an injector that can resolve class dependencies from our example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Injector } from '@ditsmod/core';\nimport { Service1 } from './service1';\nimport { Service2 } from './service2';\n\nconst injector = Injector.resolveAndCreate([Service1, Service2]);\nconst service2 = injector.get(Service2);\n")),(0,i.kt)("p",null,"So, as an input to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Injector.resolveAndCreate()")," method, we pass an array of all the necessary providers that will participate in testing, and as an output, we get an injector that can create values for any passed provider."),(0,i.kt)("p",null,"In this case, to create ",(0,i.kt)("inlineCode",{parentName:"p"},"Service2"),", the injector will first create an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Service1")," class. But in order to write tests specifically for ",(0,i.kt)("inlineCode",{parentName:"p"},"Service2"),", we don't care if ",(0,i.kt)("inlineCode",{parentName:"p"},"Service1")," is working properly, so instead of the real ",(0,i.kt)("inlineCode",{parentName:"p"},"Service1")," class, we can simulate its operation using ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/mock-functions"},"mock functions"),". This is how it will look like (without tests yet):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},"import { Injector } from '@ditsmod/core';\nimport { Service1 } from './service1';\nimport { Service2 } from './service2';\n\nconst injector = Injector.resolveAndCreate([\n  { token: Service1, useValue: { saySomething: jest.fn() } },\n  Service2\n]);\nconst service2 = injector.get(Service2);\n")),(0,i.kt)("p",null,"As you can see, in the highlighted line, instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"Service1"),", a value provider with a mock function is passed that will simulate the operation of ",(0,i.kt)("inlineCode",{parentName:"p"},"Service1"),"."),(0,i.kt)("p",null,"Now you can write a test using this technique of substituting providers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2-3,10}","{2-3,10}":!0},"describe('Service2', () => {\n  const saySomething = jest.fn();\n  const MockService1 = { saySomething } as Service1;\n  let service2: Service2;\n\n  beforeEach(() => {\n    jest.restoreAllMocks();\n\n    const injector = Injector.resolveAndCreate([\n      { token: Service1, useValue: MockService1 },\n      Service2\n    ]);\n\n    service2 = injector.get(Service2);\n  });\n\n  it('should say \"Hello, World!\"', () => {\n    saySomething.mockImplementation(() => 'Hello, World!');\n\n    expect(service2).toBeInstanceOf(Service2);\n    expect(service2.method1()).toBe('Hello, World!');\n    expect(saySomething).toBeCalledTimes(1);\n  });\n});\n")),(0,i.kt)("p",null,"We recommend that you place your unit test files close to the files they test. That is, if the file is called ",(0,i.kt)("inlineCode",{parentName:"p"},"some.service.ts"),", then the test file should be called ",(0,i.kt)("inlineCode",{parentName:"p"},"some.service.spec.ts")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"some.service.test.ts"),". This makes working with tests much easier, and also allows you to immediately see which files have not yet been tested."),(0,i.kt)("h2",{id:"end-to-end-testing"},"End-to-end testing"),(0,i.kt)("p",null,"End-to-end testing checks the operation of the entire application. For this purpose, you can use, for example, ","[supertest][102]",". Most often, for such tests, it is necessary to create mocks only for those services that work with external services: with databases, with sending email, etc."),(0,i.kt)("p",null,"Let's look at the situation when we make a mock for ",(0,i.kt)("inlineCode",{parentName:"p"},"DatabaseService"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{12,19}","{12,19}":!0},"import request = require('supertest');\nimport { Server } from '@ditsmod/core';\nimport { TestApplication } from '@ditsmod/testing';\n\nimport { AppModule } from '../src/app/app.module';\nimport { DatabaseService } from '../src/app/database.service';\nimport { InterfaceOfDatabaseService } from '../src/app/types';\n\ndescribe('End-to-end testing', () => {\n  let server: Server;\n  const query = jest.fn();\n  const MockDatabaseService = { query } as InterfaceOfDatabaseService;\n\n  beforeEach(async () => {\n    jest.restoreAllMocks();\n\n    server = await new TestApplication(AppModule)\n      .overrideProviders([\n        { token: DatabaseService, useValue: MockDatabaseService }\n      ])\n      .getServer();\n  });\n\n  it('work with DatabaseService', async () => {\n    const values = [{ one: 1, two: 2 }];\n    query.mockImplementation(() => values);\n\n    await request(server)\n      .get('/get-some-from-database')\n      .expect(200)\n      .expect(values);\n\n    expect(query).toBeCalledTimes(1);\n\n    server.close();\n  });\n});\n")),(0,i.kt)("admonition",{title:"Default import supertest",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"First of all, notice the ",(0,i.kt)("inlineCode",{parentName:"p"},"supertest")," library import in the first line. This feature occurs because ",(0,i.kt)("inlineCode",{parentName:"p"},"supertest")," defaults to exporting a function rather than an object, which is against ES2015+ export standards. You can also import this library as follows: ",(0,i.kt)("inlineCode",{parentName:"p"},"import request from 'supertest'"),", while also setting ","[",(0,i.kt)("inlineCode",{parentName:"p"},'"esModuleInterop": true'),"][103]"," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig")," file.")),(0,i.kt)("p",null,"As you can see in the test code, the test application is first created using an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"TestApplication")," class, then a mock substitution is made for ",(0,i.kt)("inlineCode",{parentName:"p"},"DatabaseService"),". At the very end, the ",(0,i.kt)("inlineCode",{parentName:"p"},"getServer()")," method is called and thus creates and returns a web server that has not yet called the ",(0,i.kt)("inlineCode",{parentName:"p"},"server.listen()")," method, so supertest can automatically do this by substituting a random port number, which is an important point when asynchronously calling several tests at once. Here ",(0,i.kt)("inlineCode",{parentName:"p"},"AppModule")," is the root module of the application."),(0,i.kt)("p",null,"Overriding mocks with the ",(0,i.kt)("inlineCode",{parentName:"p"},"testApplication.overrideProviders()")," method works globally at any level of the injector hierarchy. Providers with mocks passed to this method are first added at the application level. Then, if there are providers with the same token at other levels (module, routing, or request), they will be added at those levels as well."),(0,i.kt)("p",null,"We recommend keeping such tests in a separate directory called ",(0,i.kt)("inlineCode",{parentName:"p"},"tests"),", at the same level as the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," root directory."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);