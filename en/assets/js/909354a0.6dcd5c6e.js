"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[140],{597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"developer-guides/testing","title":"Testing","description":"What is unit testing","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/01-developer-guides/40-testing.md","sourceDirName":"01-developer-guides","slug":"/developer-guides/testing","permalink":"/en/developer-guides/testing","draft":false,"unlisted":false,"editUrl":"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/01-developer-guides/40-testing.md","tags":[],"version":"current","sidebarPosition":40,"frontMatter":{"sidebar_position":40},"sidebar":"tutorialSidebar","previous":{"title":"Ditsmod coding style guide","permalink":"/en/developer-guides/conventions"},"next":{"title":"@ditsmod/routing","permalink":"/en/native-modules/routing"}}');var s=n(4848),o=n(8453);const r={sidebar_position:40},c="Testing",a={},d=[{value:"What is unit testing",id:"what-is-unit-testing",level:2},{value:"Prerequisites for writing unit tests",id:"prerequisites-for-writing-unit-tests",level:2},{value:"End-to-end testing",id:"end-to-end-testing",level:2},{value:"<code>testApplication.overrideModuleMeta()</code>",id:"testapplicationoverridemodulemeta",level:3},{value:"<code>testApplication.overrideExtensionMeta()</code>",id:"testapplicationoverrideextensionmeta",level:3},{value:"<code>testApplication.$use()</code>",id:"testapplicationuse",level:3},{value:"<code>TestRoutingPlugin</code>",id:"testroutingplugin",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"testing",children:"Testing"})}),"\n",(0,s.jsx)(t.h2,{id:"what-is-unit-testing",children:"What is unit testing"}),"\n",(0,s.jsx)(t.p,{children:"In fact, unit testing is a testing method that allows you to verify that the smallest parts of an application, such as functions and class methods (which are also essentially functions), work correctly. To perform testing, you alternately focus on a separate function while isolating all other parts of the program that interact with that function. Properly written unit tests allow you to read them as documentation for your program."}),"\n",(0,s.jsxs)(t.p,{children:["One of the most popular frameworks for writing unit tests for JavaScript code is ",(0,s.jsx)(t.a,{href:"https://vitest.dev/",children:"vitest"}),". In this section, we will use this framework."]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites-for-writing-unit-tests",children:"Prerequisites for writing unit tests"}),"\n",(0,s.jsxs)(t.p,{children:["A good knowledge of the ",(0,s.jsx)(t.a,{href:"/components-of-ditsmod-app/dependency-injection",children:"Ditsmod DI"})," architecture will help you easily write unit tests for Ditsmod applications, as one of the main advantages of DI is the ease of testing. First, you need to learn how to work with ",(0,s.jsx)(t.a,{href:"/components-of-ditsmod-app/dependency-injection#injector",children:"injectors"})," and the ",(0,s.jsx)(t.a,{href:"/components-of-ditsmod-app/dependency-injection#hierarchy-of-injectors",children:"injector hierarchy"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Let's say you want to test ",(0,s.jsx)(t.code,{children:"Service2"})," in this example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// service1.ts\nimport { injectable } from '@ditsmod/core';\n\nclass Service1 {\n  saySomething() {\n    return 'Hello';\n  }\n}\n\n// service2.ts\n@injectable()\nclass Service2 {\n  constructor(private service1: Service1) {}\n\n  method1() {\n    return this.service1.saySomething();\n  }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Since ",(0,s.jsx)(t.code,{children:"Service2"})," depends on ",(0,s.jsx)(t.code,{children:"Service1"}),", we need to isolate this service from interacting with ",(0,s.jsx)(t.code,{children:"Service1"}),". Before we write the tests, let's recall how we can create an injector that can resolve class dependencies from our example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { Injector } from '@ditsmod/core';\n\nimport { Service1 } from './service1.js';\nimport { Service2 } from './service2.js';\n\nconst injector = Injector.resolveAndCreate([Service1, Service2]);\nconst service2 = injector.get(Service2);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["So, as an input to the ",(0,s.jsx)(t.code,{children:"Injector.resolveAndCreate()"})," method, we pass an array of all the necessary providers that will participate in testing, and as an output, we get an injector that can create values for any passed provider."]}),"\n",(0,s.jsxs)(t.p,{children:["In this case, to create ",(0,s.jsx)(t.code,{children:"Service2"}),", the injector will first create an instance of the ",(0,s.jsx)(t.code,{children:"Service1"})," class. But in order to write tests specifically for ",(0,s.jsx)(t.code,{children:"Service2"}),", we don't care if ",(0,s.jsx)(t.code,{children:"Service1"})," is working properly, so instead of the real ",(0,s.jsx)(t.code,{children:"Service1"})," class, we can simulate its operation using ",(0,s.jsx)(t.a,{href:"https://vitest.dev/api/mock.html",children:"mock functions"}),". This is how it will look like (without tests yet):"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"{8}",children:"import { Injector } from '@ditsmod/core';\nimport { vi } from 'vitest';\n\nimport { Service1 } from './service1.js';\nimport { Service2 } from './service2.js';\n\nconst injector = Injector.resolveAndCreate([\n  { token: Service1, useValue: { saySomething: vi.fn() } },\n  Service2\n]);\nconst service2 = injector.get(Service2);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["As you can see, in the highlighted line, instead of ",(0,s.jsx)(t.code,{children:"Service1"}),", a value provider with a mock function is passed that will simulate the operation of ",(0,s.jsx)(t.code,{children:"Service1"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Now you can write a test using this technique of substituting providers:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"{8-9,16}",children:"import { Injector } from '@ditsmod/core';\nimport { beforeEach, describe, expect, it, vi } from 'vitest';\n\nimport { Service1 } from './service1.js';\nimport { Service2 } from './service2.js';\n\ndescribe('Service2', () => {\n  const saySomething = vi.fn();\n  const MockService1 = { saySomething } as Service1;\n  let service2: Service2;\n\n  beforeEach(() => {\n    vi.restoreAllMocks();\n\n    const injector = Injector.resolveAndCreate([\n      { token: Service1, useValue: MockService1 },\n      Service2\n    ]);\n\n    service2 = injector.get(Service2);\n  });\n\n  it('should say \"Hello, World!\"', () => {\n    saySomething.mockImplementation(() => 'Hello, World!');\n\n    expect(service2).toBeInstanceOf(Service2);\n    expect(service2.method1()).toBe('Hello, World!');\n    expect(saySomething).toHaveBeenCalledTimes(1);\n  });\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We recommend that you place your unit test files close to the files they test. That is, if the file is called ",(0,s.jsx)(t.code,{children:"some.service.ts"}),", then the test file should be called ",(0,s.jsx)(t.code,{children:"some.service.spec.ts"})," or ",(0,s.jsx)(t.code,{children:"some.service.test.ts"}),". This makes working with tests much easier, and also allows you to immediately see which files have not yet been tested."]}),"\n",(0,s.jsx)(t.h2,{id:"end-to-end-testing",children:"End-to-end testing"}),"\n",(0,s.jsxs)(t.p,{children:["End-to-end testing checks the operation of the entire application. For this purpose, you can use, for example, ",(0,s.jsx)(t.a,{href:"https://github.com/ladjs/supertest",children:"supertest"}),". Most often, for such tests, it is necessary to create mocks only for those services that work with external services: with sending email, with databases, etc. The rest of the application works as it would in production mode."]}),"\n",(0,s.jsxs)(t.p,{children:["Let's look at the situation when we make a mock for ",(0,s.jsx)(t.code,{children:"EmailService"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"{14,21}",children:"import request from 'supertest';\nimport { HttpServer } from '@ditsmod/core';\nimport { TestApplication } from '@ditsmod/testing';\nimport { beforeEach, describe, expect, it, vi } from 'vitest';\n\nimport { AppModule } from '#app/app.module.js';\nimport { EmailService } from '#app/email.service.js';\nimport { InterfaceOfEmailService } from '#app/types.js';\n\ndescribe('End-to-end testing', () => {\n  let server: HttpServer;\n  let testAgent: ReturnType<typeof request>;\n  const query = vi.fn();\n  const MockEmailService = { query } as InterfaceOfEmailService;\n\n  beforeEach(async () => {\n    vi.restoreAllMocks();\n\n    server = await TestApplication.createTestApp(AppModule)\n      .overrideModuleMeta([\n        { token: EmailService, useValue: MockEmailService }\n      ])\n      .getServer();\n\n    testAgent = request(server);\n  });\n\n  afterAll(() => {\n    server?.close();\n  });\n\n  it('work with EmailService', async () => {\n    const values = [{ one: 1, two: 2 }];\n    query.mockImplementation(() => values);\n\n    const { status, type, body } = await testAgent.get('/get-some-from-email');\n    expect(status).toBe(200);\n    expect(type).toBe('application/json');\n    expect(body).toBe(values);\n    expect(query).toHaveBeenCalledTimes(1);\n  });\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["As you can see in the test code, first, a test application is created based on the ",(0,s.jsx)(t.code,{children:"TestApplication"})," class, then a mock is substituted for ",(0,s.jsx)(t.code,{children:"EmailService"}),". At the very end, the ",(0,s.jsx)(t.code,{children:"getServer()"})," method is called and thus creates and returns a web server that has not yet called the ",(0,s.jsx)(t.code,{children:"server.listen()"})," method, so supertest can automatically do this by substituting a random port number, which is an important point when asynchronously calling several tests at once. Here ",(0,s.jsx)(t.code,{children:"AppModule"})," is the root module of the application."]}),"\n",(0,s.jsxs)(t.p,{children:["Note that these tests do not use the code from the ",(0,s.jsx)(t.code,{children:"./src/main.ts"})," file, so any arguments you pass to this code must be duplicated for ",(0,s.jsx)(t.code,{children:"TestApplication"}),". For example, if your application has an ",(0,s.jsx)(t.code,{children:"api"})," prefix, then pass the same prefix to the test application:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"server = await TestApplication.createTestApp(AppModule, { path: 'api' }).getServer();\n"})}),"\n",(0,s.jsx)(t.h3,{id:"testapplicationoverridemodulemeta",children:(0,s.jsx)(t.code,{children:"testApplication.overrideModuleMeta()"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"testApplication.overrideModuleMeta()"})," method replaces providers in module metadata. Providers with mocks are only passed to DI at a particular level of the hierarchy if there are corresponding providers with the same tokens in application at that level."]}),"\n",(0,s.jsx)(t.h3,{id:"testapplicationoverrideextensionmeta",children:(0,s.jsx)(t.code,{children:"testApplication.overrideExtensionMeta()"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"testApplication.overrideExtensionMeta()"})," method overrides providers in metadata added by extension groups. This method takes two arguments:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"token of the group of extensions from which metadata is returned, where it will be necessary to replace providers for tests;"}),"\n",(0,s.jsx)(t.li,{children:"a callback that will work with the metadata returned by the extension group (specified in the first argument)."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The callback in the second argument has the following type:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"interface GroupMetaOverrider<T = any> {\n (stage1GroupMeta: Stage1GroupMeta<T> | Stage1GroupMeta2<T>): void;\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["That is, this callback accepts a single argument - an object with the ",(0,s.jsx)(t.code,{children:"groupData"})," property, where you can find metadata from the specified group of extensions."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"#testroutingplugin",children:"TestRoutingPlugin"})," is described below, which shows how to use ",(0,s.jsx)(t.code,{children:"testApplication.overrideExtensionMeta()"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"testapplicationuse",children:(0,s.jsx)(t.code,{children:"testApplication.$use()"})}),"\n",(0,s.jsxs)(t.p,{children:["This method is intended for creating plugins that can dynamically add methods and properties to the ",(0,s.jsx)(t.code,{children:"TestApplication"})," instance:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { TestApplication } from '@ditsmod/testing';\n\nclass Plugin1 extends TestApplication {\n  method1() {\n    // ...\n    return this;\n  }\n}\n\nclass Plugin2 extends TestApplication {\n  method2() {\n    // ...\n    return this;\n  }\n}\n\nclass AppModule {}\n\nTestApplication.createTestApp(AppModule)\n  .$use(Plugin1, Plugin2)\n  .method1()\n  .method2()\n  .overrideModuleMeta([]);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["As you can see, after using ",(0,s.jsx)(t.code,{children:"$use()"}),", the ",(0,s.jsx)(t.code,{children:"TestApplication"})," instance can use plugin methods. ",(0,s.jsx)(t.a,{href:"https://github.com/ditsmod/ditsmod/blob/c42c834cb93cb2/packages/routing/e2e/main.spec.ts#L39",children:"An example of using such a plugin in real life"})," can be viewed in the ",(0,s.jsx)(t.code,{children:"@ditsmod/routing"})," module."]}),"\n",(0,s.jsx)(t.h3,{id:"testroutingplugin",children:(0,s.jsx)(t.code,{children:"TestRoutingPlugin"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"TestRoutingPlugin"})," class uses ",(0,s.jsx)(t.code,{children:"testApplication.overrideExtensionMeta()"})," to override providers in the metadata added by the ",(0,s.jsx)(t.code,{children:"ROUTES_EXTENSIONS"})," group:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { Provider } from '@ditsmod/core';\nimport { MetadataPerMod3, ROUTES_EXTENSIONS } from '@ditsmod/routing';\nimport { TestApplication, GroupMetaOverrider } from '@ditsmod/testing';\n\nexport class TestRoutingPlugin extends TestApplication {\n  overrideGroupRoutingMeta(providersToOverride: Provider[]) {\n    const overrideRoutesMeta: GroupMetaOverrider<MetadataPerMod3> = (stage1GroupMeta) => {\n      stage1GroupMeta.groupData?.forEach((metadataPerMod3) => {\n        // ...\n      });\n    };\n\n    this.overrideExtensionMeta(ROUTES_EXTENSIONS, overrideRoutesMeta);\n    return this;\n  }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can use this example to create plugins that will replace providers for other groups of extensions. You can find a complete example with ",(0,s.jsx)(t.code,{children:"TestRoutingPlugin"})," ",(0,s.jsx)(t.a,{href:"https://github.com/ditsmod/ditsmod/blob/main/packages/routing-testing/src/test-routing.plugin.ts",children:"in the Ditsmod repository"}),". Basically, you will need this plugin in tests if you need to replace the providers that you have added in the controller metadata in your application:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"{14-15}",children:"import { Provider } from '@ditsmod/core';\nimport { TestApplication } from '@ditsmod/testing';\nimport { TestRoutingPlugin } from '@ditsmod/routing-testing';\n\nimport { AppModule } from './app.module.js';\nimport { Service1, Service2 } from './services.js';\n\nconst providers: Provider[] = [\n  { token: Service1, useValue: 'value1' },\n  { token: Service2, useValue: 'value2' },\n];\n\nconst server = await TestApplication.createTestApp(AppModule)\n  .$use(TestRoutingPlugin)\n  .overrideGroupRoutingMeta(providers)\n  .getServer();\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);