"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[257],{7958:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=t(4848),i=t(8453);const s={sidebar_position:7},r="Extensions",a={id:"components-of-ditsmod-app/extensions",title:"Extensions",description:"The purpose of Ditsmod extension",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/07-extensions.md",sourceDirName:"00-components-of-ditsmod-app",slug:"/components-of-ditsmod-app/extensions",permalink:"/en/components-of-ditsmod-app/extensions",draft:!1,unlisted:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/07-extensions.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Guards",permalink:"/en/components-of-ditsmod-app/guards"},next:{title:"Logger",permalink:"/en/components-of-ditsmod-app/logger"}},d={},c=[{value:"The purpose of Ditsmod extension",id:"the-purpose-of-ditsmod-extension",level:2},{value:"What is &quot;Ditsmod extension&quot;",id:"what-is-ditsmod-extension",level:2},{value:"Extensions groups",id:"extensions-groups",level:2},{value:"Extension registration",id:"extension-registration",level:2},{value:"Creating a new group token",id:"creating-a-new-group-token",level:3},{value:"Registering an extension in a group",id:"registering-an-extension-in-a-group",level:3},{value:"Using ExtensionsManager",id:"using-extensionsmanager",level:2},{value:"Dynamic addition of providers",id:"dynamic-addition-of-providers",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"extensions",children:"Extensions"})}),"\n",(0,o.jsx)(n.h2,{id:"the-purpose-of-ditsmod-extension",children:"The purpose of Ditsmod extension"}),"\n",(0,o.jsx)(n.p,{children:"Typically, an extension does its work before the HTTP request handlers are created. To modify or extend the application's functionality, an extension uses static metadata that is attached to specific decorators. On the other hand, an extension can also dynamically add metadata of the same type as the static metadata. Extensions can initialize asynchronously, and can depend on each other."}),"\n",(0,o.jsx)(n.p,{children:"The task of most extensions is to act like a pipeline, taking a multidimensional array of configuration data (metadata) as input and producing another (or augmented) multidimensional array as output. This final array is ultimately interpreted by the target extension, e.g. to create routes and their handlers. However, extensions do not necessarily need to work with configuration or setting up HTTP request handlers; they can also write logs, collect metrics for monitoring, or perform other tasks."}),"\n",(0,o.jsx)(n.p,{children:"In most cases, these multidimensional arrays reflect the structure of the application:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"they are divided into modules;"}),"\n",(0,o.jsx)(n.li,{children:"each module contains controllers or providers;"}),"\n",(0,o.jsx)(n.li,{children:"each controller has one or more routes."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For example, in the ",(0,o.jsx)(n.a,{href:"/native-modules/body-parser",children:"@ditsmod/body-parser"})," module, there is an extension that dynamically adds an HTTP interceptor to parse the request body for each route that has the appropriate method (POST, PATCH, PUT). It does this once before the HTTP request handlers are created, so there is no need to check the need for parsing on every request."]}),"\n",(0,o.jsxs)(n.p,{children:["Another example. The ",(0,o.jsx)(n.a,{href:"/native-modules/openapi",children:"@ditsmod/openapi"})," module allows you to create OpenAPI documentation using the new ",(0,o.jsx)(n.code,{children:"@oasRoute"})," decorator. Without the extension working, Ditsmod will ignore the metadata from this new decorator. The extension from this module receives the aforementioned configuration array, finds the metadata from the ",(0,o.jsx)(n.code,{children:"@oasRoute"})," decorator, and interprets this metadata by adding other metadata that will be used by another extension to set up routes."]}),"\n",(0,o.jsx)(n.h2,{id:"what-is-ditsmod-extension",children:'What is "Ditsmod extension"'}),"\n",(0,o.jsxs)(n.p,{children:["In Ditsmod, ",(0,o.jsx)(n.strong,{children:"extension"})," is a class that implements the ",(0,o.jsx)(n.code,{children:"Extension"})," interface:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"interface Extension<T> {\n  init(isLastModule: boolean): Promise<T>;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Each extension needs to be registered, this will be mentioned later, and now let's assume that such registration has taken place, and then the following process goes on:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["metadata is collected from all decorators (",(0,o.jsx)(n.code,{children:"@rootModule"}),", ",(0,o.jsx)(n.code,{children:"@featureModule"}),", ",(0,o.jsx)(n.code,{children:"@controller"}),", ",(0,o.jsx)(n.code,{children:"@route"}),"...);"]}),"\n",(0,o.jsxs)(n.li,{children:["this metadata is then passed to DI with token ",(0,o.jsx)(n.code,{children:"MetadataPerMod1"}),", so - every extension can get this metadata in the constructor;"]}),"\n",(0,o.jsxs)(n.li,{children:["the work on the extensions starts per module:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"in each module, the extensions created within this module or imported into this module are collected;"}),"\n",(0,o.jsxs)(n.li,{children:["each of these extensions gets metadata, also collected in this module, and the ",(0,o.jsx)(n.code,{children:"init()"})," methods of given extensions are called."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"HTTP request handlers are created;"}),"\n",(0,o.jsx)(n.li,{children:"the application starts working in the usual mode, processing HTTP requests."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"init()"})," method of a given extension can be called as many times as it is written in the body of other extensions that depend on the operation of that extension, +1. This feature must be taken into account to avoid unnecessary initialization:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{8-10}",children:"import { injectable, Extension } from '@ditsmod/core';\n\n@injectable()\nexport class MyExtension implements Extension<any> {\n  private data: any;\n\n  async init() {\n    if (this.data) {\n      return this.data;\n    }\n\n    // ...\n    // Do something good\n    // ...\n\n    this.data = result;\n    return this.data;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can see a simple example in the folder ",(0,o.jsx)(n.a,{href:"https://github.com/ditsmod/ditsmod/tree/main/examples/09-one-extension",children:"09-one-extension"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"extensions-groups",children:"Extensions groups"}),"\n",(0,o.jsxs)(n.p,{children:["Any extension must be a member of one or more groups. The concept of an ",(0,o.jsx)(n.strong,{children:"extensions group"})," is similar to the concept of an ",(0,o.jsx)(n.a,{href:"/components-of-ditsmod-app/http-interceptors/",children:"interceptors"})," group. Note that  interceptors group performs a specific type of work: augmenting the processing of an HTTP request for a particular route. Similarly, each extensions group represents a distinct type of work on specific metadata. As a rule, extensions in a particular group return metadata that has the same basic interface. Essentially, extension groups allow abstraction from specific extensions; instead, they make only the type of work performed within these groups important."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, in ",(0,o.jsx)(n.code,{children:"@ditsmod/routing"})," there is a group ",(0,o.jsx)(n.code,{children:"ROUTES_EXTENSIONS"})," which by default includes a single extension that processes metadata collected from the ",(0,o.jsx)(n.code,{children:"@route()"})," decorator. If an application requires OpenAPI documentation, you can import the ",(0,o.jsx)(n.code,{children:"@ditsmod/openapi"})," module, which also has an extension registered in the ",(0,o.jsx)(n.code,{children:"ROUTES_EXTENSIONS"})," group, but this extension works with the ",(0,o.jsx)(n.code,{children:"@oasRoute()"})," decorator. In this case, two extensions will already be registered in the ",(0,o.jsx)(n.code,{children:"ROUTES_EXTENSIONS"})," group, each of which will prepare data for establishing the router's routes. These extensions are grouped together because they configure routes and their ",(0,o.jsx)(n.code,{children:"init()"})," methods return data with the same basic interface."]}),"\n",(0,o.jsx)(n.p,{children:"Having a common base data interface returned by each extension in a given group is an important requirement because other extensions may expect data from that group and will rely on that base interface. Of course, the base interface can be expanded if necessary, but not narrowed."}),"\n",(0,o.jsxs)(n.p,{children:["In addition to a common basic interface, the sequence in which extensions groups are launched and the dependency between them is also important. In our example, after all the extensions from the ",(0,o.jsx)(n.code,{children:"ROUTES_EXTENSIONS"})," group have worked, their data is collected in one array and passed to the ",(0,o.jsx)(n.code,{children:"PRE_ROUTER_EXTENSIONS"})," group. Even if you later register more new extensions in the ",(0,o.jsx)(n.code,{children:"ROUTES_EXTENSIONS"})," group, the ",(0,o.jsx)(n.code,{children:"PRE_ROUTER_EXTENSIONS"})," group will still be started after absolutely all extensions from the ",(0,o.jsx)(n.code,{children:"ROUTES_EXTENSIONS"})," group, including your new extensions, have been worked out."]}),"\n",(0,o.jsx)(n.p,{children:"This feature is very handy because it sometimes allows you to integrate external Ditsmod modules (for example, from npmjs.com) into your application without any customization, just by importing them into the desired module. Thanks to extension groups, the imported extensions will be executed in the correct order, even if they are imported from different external modules."}),"\n",(0,o.jsxs)(n.p,{children:["This is how the extension from ",(0,o.jsx)(n.code,{children:"@ditsmod/body-parser"})," works, for example. You simply import ",(0,o.jsx)(n.code,{children:"BodyParserModule"}),", and its extensions will already be run in the correct order, which is written in this module. In this case, its extension will run after the ",(0,o.jsx)(n.code,{children:"ROUTES_EXTENSIONS"})," group, but before the ",(0,o.jsx)(n.code,{children:"PRE_ROUTER_EXTENSIONS"})," group. And note that ",(0,o.jsx)(n.code,{children:"BodyParserModule"})," has no idea which extensions will work in these groups, it only cares about"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["the data interface that the extensions in the ",(0,o.jsx)(n.code,{children:"ROUTES_EXTENSIONS"})," group will return;"]}),"\n",(0,o.jsxs)(n.li,{children:["the startup order, so that the routes are not installed before this module works (i.e. the ",(0,o.jsx)(n.code,{children:"PRE_ROUTER_EXTENSIONS"})," group works after it, not before)."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This means that the ",(0,o.jsx)(n.code,{children:"BodyParserModule"})," will take into account the routes set with the ",(0,o.jsx)(n.code,{children:"@route()"})," or ",(0,o.jsx)(n.code,{children:"@oasRoute()"})," decorators, or any other decorators from this group, since they are processed by the extensions that run before it in the ",(0,o.jsx)(n.code,{children:"ROUTES_EXTENSIONS"})," group."]}),"\n",(0,o.jsx)(n.h2,{id:"extension-registration",children:"Extension registration"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"#registering-an-extension-in-a-group",children:"Register the extension"})," in an existing extension group, or create a new group, even if it has a single extension. You will need to create a new DI token for the new group."]}),"\n",(0,o.jsx)(n.h3,{id:"creating-a-new-group-token",children:"Creating a new group token"}),"\n",(0,o.jsxs)(n.p,{children:["The extension group token must be an instance of the ",(0,o.jsx)(n.code,{children:"InjectionToken"})," class."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, to create a token for the group ",(0,o.jsx)(n.code,{children:"MY_EXTENSIONS"}),", you need to do the following:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { InjectionToken, Extension } from '@ditsmod/core';\n\nexport const MY_EXTENSIONS = new InjectionToken<Extension<void>[]>('MY_EXTENSIONS');\n"})}),"\n",(0,o.jsxs)(n.p,{children:["As you can see, each extension group must specify that DI will return an array of extension instances: ",(0,o.jsx)(n.code,{children:"Extension<void>[]"}),". This must be done, the only difference may be in the generic ",(0,o.jsx)(n.code,{children:"Extension<T>[]"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"registering-an-extension-in-a-group",children:"Registering an extension in a group"}),"\n",(0,o.jsxs)(n.p,{children:["Objects of the following type can be transferred to the ",(0,o.jsx)(n.code,{children:"extensions"})," array, which is in the module's metadata:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"class ExtensionOptions {\n  extension: ExtensionType;\n  /**\n   * Extension group token.\n   */\n  token: InjectionToken<Extension<any>[]>;\n  /**\n   * The token of the group before which this extension will be called.\n   */\n  nextToken?: InjectionToken<Extension<any>[]>;\n  /**\n   * Indicates whether this extension needs to be exported.\n   */\n  exported?: boolean;\n  /**\n   * Indicates whether this extension needs to be exported without working in host module.\n   */\n  exportedOnly?: boolean;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"nextToken"})," property is used when you want your extension group to run before another extension group:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { featureModule, ROUTES_EXTENSIONS } from '@ditsmod/core';\nimport { MyExtension, MY_EXTENSIONS } from './my.extension.js';\n\n@featureModule({\n  extensions: [\n    { extension: MyExtension, token: MY_EXTENSIONS, nextToken: ROUTES_EXTENSIONS, exported: true }\n  ],\n})\nexport class SomeModule {}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["That is, the token of the group ",(0,o.jsx)(n.code,{children:"MY_EXTENSIONS"}),", to which your extension belongs, is transferred to the ",(0,o.jsx)(n.code,{children:"token"})," property. The token of the ",(0,o.jsx)(n.code,{children:"ROUTES_EXTENSIONS"})," group, before which the ",(0,o.jsx)(n.code,{children:"MY_EXTENSIONS"})," group should be started, is passed to the ",(0,o.jsx)(n.code,{children:"nextToken"})," property. Optionally, you can use the ",(0,o.jsx)(n.code,{children:"exported"})," or ",(0,o.jsx)(n.code,{children:"exportedOnly"})," property to specify whether this extension should function in an external module that imports this module. Additionally, the ",(0,o.jsx)(n.code,{children:"exportedOnly"})," property indicates that this extension should not be executed in the so-called host module (i.e., the module where this extension is declared)."]}),"\n",(0,o.jsx)(n.h2,{id:"using-extensionsmanager",children:"Using ExtensionsManager"}),"\n",(0,o.jsxs)(n.p,{children:["If a certain extension has a dependency on another extension, it is recommended to specify that dependency indirectly through the extension group. To do this, you need ",(0,o.jsx)(n.code,{children:"ExtensionsManager"}),", which initializes extensions groups, throws errors about cyclic dependencies between extensions, and shows the entire chain of extensions that caused the loop. Additionally, ",(0,o.jsx)(n.code,{children:"ExtensionsManager"})," allows you to collect extensions initialization results from the entire application, not just from a single module."]}),"\n",(0,o.jsxs)(n.p,{children:["Suppose ",(0,o.jsx)(n.code,{children:"MyExtension"})," has to wait for the initialization of the ",(0,o.jsx)(n.code,{children:"OTHER_EXTENSIONS"})," group to complete. To do this, you must specify the dependence on ",(0,o.jsx)(n.code,{children:"ExtensionsManager"})," in the constructor, and in ",(0,o.jsx)(n.code,{children:"init()"})," call ",(0,o.jsx)(n.code,{children:"init()"})," of this service:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{17}",children:"import { injectable } from '@ditsmod/core';\nimport { Extension, ExtensionsManager } from '@ditsmod/core';\n\nimport { OTHER_EXTENSIONS } from './other.extensions.js';\n\n@injectable()\nexport class MyExtension implements Extension<void> {\n  private inited: boolean;\n\n  constructor(private extensionsManager: ExtensionsManager) {}\n\n  async init() {\n    if (this.inited) {\n      return;\n    }\n\n    const totalInitMeta = await this.extensionsManager.init(OTHER_EXTENSIONS);\n\n    totalInitMeta.groupInitMeta.forEach((initMeta) => {\n      const someData = initMeta.payload;\n      // Do something here.\n      // ...\n    });\n\n    this.inited = true;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ExtensionsManager"})," will sequentially initialize all extensions from a given group and return the result in an object that follows this interface:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"interface TotalInitMeta<T = any> {\n  delay: boolean;\n  countdown = 0;\n  totalInitMetaPerApp: TotalInitMetaPerApp<T>[];\n  groupInitMeta: ExtensionInitMeta<T>[],\n  moduleName: string;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If the ",(0,o.jsx)(n.code,{children:"delay"})," property is ",(0,o.jsx)(n.code,{children:"true"}),", it means that the ",(0,o.jsx)(n.code,{children:"totalInitMetaPerApp"})," property does not yet contain data from all modules where this extension group (",(0,o.jsx)(n.code,{children:"OTHER_EXTENSIONS"}),") is imported. The ",(0,o.jsx)(n.code,{children:"countdown"})," property indicates how many modules are left for this extension group to process before ",(0,o.jsx)(n.code,{children:"totalInitMetaPerApp"})," will contain data from all modules. Thus, the ",(0,o.jsx)(n.code,{children:"delay"})," and ",(0,o.jsx)(n.code,{children:"countdown"})," properties only apply to ",(0,o.jsx)(n.code,{children:"totalInitMetaPerApp"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"groupInitMeta"})," property holds an array of data collected from the current module by different extensions of this group. Each element of the ",(0,o.jsx)(n.code,{children:"groupInitMeta"})," array follows this interface:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"interface ExtensionInitMeta<T = any> {\n  /**\n   * Instance of an extension.\n   */\n  extension: Extension<T>;\n  /**\n   * Value that `extension` returns from its `init` method.\n   */\n  payload: T;\n  delay: boolean;\n  countdown: number;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"extension"})," property contains the instance of the extension, and the ",(0,o.jsx)(n.code,{children:"payload"})," property holds the data returned by the extension's ",(0,o.jsx)(n.code,{children:"init()"})," method."]}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.code,{children:"delay == true"})," and ",(0,o.jsx)(n.code,{children:"countdown > 0"}),", it indicates that this extension has not yet finished its work in other modules where it was imported. In this case, the ",(0,o.jsx)(n.code,{children:"delay"})," and ",(0,o.jsx)(n.code,{children:"countdown"})," properties refer specifically to the extension, not the group of extensions (in this case, the ",(0,o.jsx)(n.code,{children:"OTHER_EXTENSIONS"})," group)."]}),"\n",(0,o.jsxs)(n.p,{children:["It's important to note that a separate instance of each extension is created for each module. For example, if ",(0,o.jsx)(n.code,{children:"MyExtension"})," is imported into three different modules, Ditsmod will process these three modules sequentially with three different instances of ",(0,o.jsx)(n.code,{children:"MyExtension"}),". Additionally, if ",(0,o.jsx)(n.code,{children:"MyExtension"})," requires data from, say, the ",(0,o.jsx)(n.code,{children:"OTHER_EXTENSIONS"})," group, which spans four modules, but ",(0,o.jsx)(n.code,{children:"MyExtension"})," is only imported into three modules, it may not receive all the necessary data from one of the modules."]}),"\n",(0,o.jsxs)(n.p,{children:["In this case, you need to pass ",(0,o.jsx)(n.code,{children:"true"})," as the second argument to the ",(0,o.jsx)(n.code,{children:"extensionsManager.init"})," method:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{17}",children:"import { injectable } from '@ditsmod/core';\nimport { Extension, ExtensionsManager } from '@ditsmod/core';\n\nimport { OTHER_EXTENSIONS } from './other.extensions.js';\n\n@injectable()\nexport class MyExtension implements Extension<void> {\n  private inited: boolean;\n\n  constructor(private extensionsManager: ExtensionsManager) {}\n\n  async init() {\n    if (this.inited) {\n      return;\n    }\n\n    const totalInitMeta = await this.extensionsManager.init(OTHER_EXTENSIONS, true);\n    if (totalInitMeta.delay) {\n      return;\n    }\n\n    totalInitMeta.totalInitMetaPerApp.forEach((totaInitMeta) => {\n      totaInitMeta.groupInitMeta.forEach((initMeta) => {\n        const someData = initMeta.payload;\n        // Do something here.\n        // ...\n      });\n    });\n\n    this.inited = true;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Thus, when you need ",(0,o.jsx)(n.code,{children:"MyExtension"})," to receive data from the ",(0,o.jsx)(n.code,{children:"OTHER_EXTENSIONS"})," group throughout the application, you need to pass ",(0,o.jsx)(n.code,{children:"true"})," as the second argument to the ",(0,o.jsx)(n.code,{children:"init"})," method:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const totalInitMeta = await this.extensionsManager.init(OTHER_EXTENSIONS, true);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In this case, it is guaranteed that the ",(0,o.jsx)(n.code,{children:"MyExtension"})," instance will receive data from all modules where ",(0,o.jsx)(n.code,{children:"OTHER_EXTENSIONS"})," is imported. Even if ",(0,o.jsx)(n.code,{children:"MyExtension"})," is imported into a module without any extensions from the ",(0,o.jsx)(n.code,{children:"OTHER_EXTENSIONS"})," group, but these extensions exist in other modules, the ",(0,o.jsx)(n.code,{children:"init"})," method of this extension will still be called after all extensions are initialized, ensuring that ",(0,o.jsx)(n.code,{children:"MyExtension"})," receives data from ",(0,o.jsx)(n.code,{children:"OTHER_EXTENSIONS"})," across all modules."]}),"\n",(0,o.jsx)(n.h2,{id:"dynamic-addition-of-providers",children:"Dynamic addition of providers"}),"\n",(0,o.jsxs)(n.p,{children:["Any extension can specify a dependency on the ",(0,o.jsx)(n.code,{children:"ROUTES_EXTENSIONS"})," group to dynamically add providers at any level. Extensions from this group use metadata with ",(0,o.jsx)(n.code,{children:"MetadataPerMod1"})," interface and return metadata with ",(0,o.jsx)(n.code,{children:"MetadataPerMod2"})," interface."]}),"\n",(0,o.jsxs)(n.p,{children:["You can see how it is done in ",(0,o.jsx)(n.a,{href:"https://github.com/ditsmod/ditsmod/blob/body-parser-2.17.0/packages/body-parser/src/body-parser.extension.ts#L54",children:"BodyParserExtension"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:"{15,31,38}",children:"@injectable()\nexport class BodyParserExtension implements Extension<void> {\n  private inited: boolean;\n\n  constructor(\n    protected extensionManager: ExtensionsManager,\n    protected perAppService: PerAppService,\n  ) {}\n\n  async init() {\n    if (this.inited) {\n      return;\n    }\n\n    const totalInitMeta = await this.extensionManager.init(ROUTES_EXTENSIONS);\n    totalInitMeta.groupInitMeta.forEach((initMeta) => {\n      const { aControllersMetadata2, providersPerMod } = initMeta.payload;\n      aControllersMetadata2.forEach(({ providersPerRou, providersPerReq, httpMethod, isSingleton }) => {\n        // Merging the providers from a module and a controller\n        const mergedProvidersPerRou = [...initMeta.payload.providersPerRou, ...providersPerRou];\n        const mergedProvidersPerReq = [...initMeta.payload.providersPerReq, ...providersPerReq];\n\n        // Creating a hierarchy of injectors.\n        const injectorPerApp = this.perAppService.injector;\n        const injectorPerMod = injectorPerApp.resolveAndCreateChild(providersPerMod);\n        const injectorPerRou = injectorPerMod.resolveAndCreateChild(mergedProvidersPerRou);\n        if (isSingleton) {\n          let bodyParserConfig = injectorPerRou.get(BodyParserConfig, undefined, {}) as BodyParserConfig;\n          bodyParserConfig = { ...new BodyParserConfig(), ...bodyParserConfig }; // Merge with default.\n          if (bodyParserConfig.acceptMethods!.includes(httpMethod)) {\n            providersPerRou.push({ token: HTTP_INTERCEPTORS, useClass: SingletonBodyParserInterceptor, multi: true });\n          }\n        } else {\n          const injectorPerReq = injectorPerRou.resolveAndCreateChild(mergedProvidersPerReq);\n          let bodyParserConfig = injectorPerReq.get(BodyParserConfig, undefined, {}) as BodyParserConfig;\n          bodyParserConfig = { ...new BodyParserConfig(), ...bodyParserConfig }; // Merge with default.\n          if (bodyParserConfig.acceptMethods!.includes(httpMethod)) {\n            providersPerReq.push({ token: HTTP_INTERCEPTORS, useClass: BodyParserInterceptor, multi: true });\n          }\n        }\n      });\n    });\n\n    this.inited = true;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In this case, the HTTP interceptor is added to the ",(0,o.jsx)(n.code,{children:"providersPerReq"})," array in the controller's metadata. But before that, a ",(0,o.jsx)(n.a,{href:"/components-of-ditsmod-app/dependency-injection#hierarchy-of-injectors",children:"hierarchy of injectors"})," is created in order to get a certain configuration that tells us whether we need to add such an interceptor. If we didn't need to check any condition, we could avoid creating injector hierarchies and just add an interceptor at request level."]}),"\n",(0,o.jsx)(n.p,{children:"Of course, such dynamic addition of providers is possible only before creating HTTP request handlers."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);