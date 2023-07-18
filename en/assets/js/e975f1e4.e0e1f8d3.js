"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[902],{8321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(3117),i=(n(7294),n(3905));const r={sidebar_position:7},a="Extensions",s={unversionedId:"components-of-ditsmod-app/extensions",id:"components-of-ditsmod-app/extensions",title:"Extensions",description:"The purpose of Ditsmod extension",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/07-extensions.md",sourceDirName:"00-components-of-ditsmod-app",slug:"/components-of-ditsmod-app/extensions",permalink:"/en/components-of-ditsmod-app/extensions",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/07-extensions.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Collision of providers",permalink:"/en/components-of-ditsmod-app/providers-collisions"},next:{title:"LogMediator",permalink:"/en/components-of-ditsmod-app/log-mediator"}},l={},p=[{value:"The purpose of Ditsmod extension",id:"the-purpose-of-ditsmod-extension",level:2},{value:"What is Ditsmod extension",id:"what-is-ditsmod-extension",level:2},{value:"Extensions groups",id:"extensions-groups",level:2},{value:"Extension registration",id:"extension-registration",level:2},{value:"Creating a new group token",id:"creating-a-new-group-token",level:3},{value:"Registering an extension in a group",id:"registering-an-extension-in-a-group",level:3},{value:"Using ExtensionsManager",id:"using-extensionsmanager",level:2},{value:"Dynamic addition of providers",id:"dynamic-addition-of-providers",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"extensions"},"Extensions"),(0,i.kt)("h2",{id:"the-purpose-of-ditsmod-extension"},"The purpose of Ditsmod extension"),(0,i.kt)("p",null,"The extension does its work before creating HTTP request handlers, and it can dynamically add ",(0,i.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/dependency-injection#providers"},"providers"),". To modify or extend the behavior of the application, an extension typically uses metadata attached to certain decorators. Extensions can be initialized asynchronously, and can depend on each other."),(0,i.kt)("p",null,"For example, the ",(0,i.kt)("a",{parentName:"p",href:"/native-modules/body-parser"},"@ditsmod/body-parser")," module has an extension that dynamically adds an HTTP interceptor for parsing the request body to any route that has the appropriate method (POST, PATCH, PUT). It does this once before creating HTTP request handlers, so there is no need to test the need for such parsing for each request."),(0,i.kt)("p",null,"Another example. the ",(0,i.kt)("a",{parentName:"p",href:"/native-modules/openapi"},"@ditsmod/openapi")," module allows you to create OpenAPI documentation using the new ",(0,i.kt)("inlineCode",{parentName:"p"},"@oasRoute")," decorator. Without the extension working, Ditsmod will ignore the metadata from this new decorator."),(0,i.kt)("h2",{id:"what-is-ditsmod-extension"},"What is Ditsmod extension"),(0,i.kt)("p",null,"In Ditsmod, ",(0,i.kt)("strong",{parentName:"p"},"extension")," is a class that implements the ",(0,i.kt)("inlineCode",{parentName:"p"},"Extension")," interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Extension<T> {\n  init(isLastExtensionCall: boolean): Promise<T>;\n}\n")),(0,i.kt)("p",null,"Each extension needs to be registered, this will be mentioned later, and now let's assume that such registration has taken place, the application is running, and then the following process goes on:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"metadata is collected from all decorators (",(0,i.kt)("inlineCode",{parentName:"li"},"@rootModule"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"@featureModule"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"@controller"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"@route"),"...);"),(0,i.kt)("li",{parentName:"ol"},"this metadata is then passed to DI with token ",(0,i.kt)("inlineCode",{parentName:"li"},"MetadataPerMod1"),", so - every extension can get this metadata in the constructor;"),(0,i.kt)("li",{parentName:"ol"},"the work on the extensions starts per module:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"in each module, the extensions created within this module or imported into this module are collected;"),(0,i.kt)("li",{parentName:"ul"},"each of these extensions gets metadata, also collected in this module, and the ",(0,i.kt)("inlineCode",{parentName:"li"},"init()")," methods of given extensions are called."))),(0,i.kt)("li",{parentName:"ol"},"HTTP request handlers are created;"),(0,i.kt)("li",{parentName:"ol"},"the application starts working in the usual mode, processing HTTP requests.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"init()")," method of a given extension can be called as many times as it is written in the body of other extensions that depend on the operation of that extension, +1. This feature must be taken into account to avoid unnecessary initialization:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{9-11}","{9-11}":!0},"import { injectable } from '@ditsmod/core';\nimport { Extension } from '@ditsmod/core';\n\n@injectable()\nexport class MyExtension implements Extension<void> {\n  private data: any;\n\n  async init() {\n    if (this.data) {\n      return this.data;\n    }\n\n    // ...\n    // Do something good\n    // ...\n\n    this.data = result;\n    return this.data;\n  }\n}\n")),(0,i.kt)("p",null,"You can see a simple example in the folder ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/tree/main/examples/09-one-extension"},"09-one-extension"),"."),(0,i.kt)("h2",{id:"extensions-groups"},"Extensions groups"),(0,i.kt)("p",null,"The concept of ",(0,i.kt)("strong",{parentName:"p"},"extension groups")," has been introduced so that:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"a set of extensions can work on the same metadata, and the order of work within that set is not important;"),(0,i.kt)("li",{parentName:"ol"},"it was possible to customize the order of work between different sets of extensions.")),(0,i.kt)("p",null,"In other words, to form a single group of extensions, the order of operation of each extension is not important (usually). On the other hand, if the order of operation between different extensions is important, you should consider splitting these extensions into different groups."),(0,i.kt)("p",null,"Each extension should belong to one or more groups. Under the hood of Ditsmod, extension groups are essentially groups of ",(0,i.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/dependency-injection#multi-providers"},"multi-providers")," that typically work on the same metadata and also return other metadata that share the same basic interface."),(0,i.kt)("p",null,"If you create an extension group in the current module, you can add other extensions to it in external modules without having to change the code in the current module. Sometimes you don't even need to call any services from the current module to integrate it into an external module, just import it."),(0,i.kt)("p",null,"For example, in ",(0,i.kt)("inlineCode",{parentName:"p"},"@ditsmod/core")," there is a group ",(0,i.kt)("inlineCode",{parentName:"p"},"ROUTES_EXTENSIONS")," which by default includes a single extension that processes metadata collected from the ",(0,i.kt)("inlineCode",{parentName:"p"},"@route()")," decorator. If an application requires OpenAPI documentation, you can import the ",(0,i.kt)("inlineCode",{parentName:"p"},"@ditsmod/openapi")," module, which also has an extension registered in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ROUTES_EXTENSIONS")," group, but this extension works with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@oasRoute()")," decorator. In this case, two extensions will already be registered in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ROUTES_EXTENSIONS")," group, each of which will prepare data for establishing the router's routes. These extensions are grouped together because they configure routes and their ",(0,i.kt)("inlineCode",{parentName:"p"},"init()")," methods return data with the same basic interface."),(0,i.kt)("p",null,"Having a single base interface for all extensions in a group is important because other extensions can expect data from that group and they will rely on that base interface. Of course, the base interface can be expanded if necessary, but not narrowed."),(0,i.kt)("p",null,"In our example, after all the extensions from the ",(0,i.kt)("inlineCode",{parentName:"p"},"ROUTES_EXTENSIONS")," group have worked, their data is collected in one array and passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"PRE_ROUTER_EXTENSIONS")," group. Even if you later register more new extensions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ROUTES_EXTENSIONS")," group, the ",(0,i.kt)("inlineCode",{parentName:"p"},"PRE_ROUTER_EXTENSIONS")," group will still be started after absolutely all extensions from the ",(0,i.kt)("inlineCode",{parentName:"p"},"ROUTES_EXTENSIONS")," group, including your new extensions, have been worked out."),(0,i.kt)("p",null,"This feature is very handy because it sometimes allows you to integrate external Ditsmod modules (for example, from npmjs.com) into your application without any customization, just by importing them into the desired module. Thanks to extension groups, the imported extensions will be executed in the correct order, even if they are imported from different external modules."),(0,i.kt)("p",null,"This is how the extension from ",(0,i.kt)("inlineCode",{parentName:"p"},"@ditsmod/body-parser")," works, for example. You simply import ",(0,i.kt)("inlineCode",{parentName:"p"},"BodyParserModule"),", and its extensions will already be run in the correct order, which is written in this module. In this case, its extension will run after the ",(0,i.kt)("inlineCode",{parentName:"p"},"ROUTES_EXTENSIONS")," group, but before the ",(0,i.kt)("inlineCode",{parentName:"p"},"PRE_ROUTER_EXTENSIONS")," group. And note that ",(0,i.kt)("inlineCode",{parentName:"p"},"BodyParserModule")," has no idea which extensions will work in these groups, it only cares about"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the data interface that the extensions in the ",(0,i.kt)("inlineCode",{parentName:"li"},"ROUTES_EXTENSIONS")," group will return;"),(0,i.kt)("li",{parentName:"ol"},"the startup order, so that the routes are not installed before this module works (i.e. the ",(0,i.kt)("inlineCode",{parentName:"li"},"PRE_ROUTER_EXTENSIONS")," group works after it, not before).")),(0,i.kt)("p",null,"This means that the ",(0,i.kt)("inlineCode",{parentName:"p"},"BodyParserModule")," will take into account the routes set with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@route()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@oasRoute()")," decorators, or any other decorators from this group, since they are processed by the extensions that run before it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ROUTES_EXTENSIONS")," group."),(0,i.kt)("h2",{id:"extension-registration"},"Extension registration"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#registering-an-extension-in-a-group"},"Register the extension")," in an existing extension group, or create a new group, even if it has a single extension. You will need to create a new DI token for the new group."),(0,i.kt)("h3",{id:"creating-a-new-group-token"},"Creating a new group token"),(0,i.kt)("p",null,"The extension group token must be an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"InjectionToken")," class."),(0,i.kt)("p",null,"For example, to create a token for the group ",(0,i.kt)("inlineCode",{parentName:"p"},"MY_EXTENSIONS"),", you need to do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { InjectionToken } from '@ditsmod/core';\nimport { Extension } from '@ditsmod/core';\n\nexport const MY_EXTENSIONS = new InjectionToken<Extension<void>[]>('MY_EXTENSIONS');\n")),(0,i.kt)("p",null,"As you can see, each extension group must specify that DI will return an array of extension instances: ",(0,i.kt)("inlineCode",{parentName:"p"},"Extension<void>[]"),". This must be done, the only difference may be in the generic ",(0,i.kt)("inlineCode",{parentName:"p"},"Extension<T>[]"),"."),(0,i.kt)("h3",{id:"registering-an-extension-in-a-group"},"Registering an extension in a group"),(0,i.kt)("p",null,"Objects of the following type can be transferred to the ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions")," array, which is in the module's metadata:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export class ExtensionOptions {\n  extension: ExtensionType;\n  groupToken: InjectionToken<Extension<any>[]>;\n  /**\n   * The token of the group before which this extension will be called.\n   */\n  nextToken?: InjectionToken<Extension<any>[]>;\n  /**\n   * Indicates whether this extension needs to be exported.\n   */\n  exported?: boolean;\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"nextToken")," property is used when you want your extension group to run before another extension group:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { featureModule, ROUTES_EXTENSIONS } from '@ditsmod/core';\n\nimport { MY_EXTENSIONS, MyExtension } from './my.extension';\n\n@featureModule({\n  extensions: [\n    { extension: MyExtension, groupToken: MY_EXTENSIONS, nextToken: ROUTES_EXTENSIONS, exported: true }\n  ],\n})\nexport class SomeModule {}\n")),(0,i.kt)("p",null,"That is, the token of the group ",(0,i.kt)("inlineCode",{parentName:"p"},"MY_EXTENSIONS"),", to which your extension belongs, is transferred to the ",(0,i.kt)("inlineCode",{parentName:"p"},"groupToken")," property. The token of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ROUTES_EXTENSIONS")," group, before which the ",(0,i.kt)("inlineCode",{parentName:"p"},"MY_EXTENSIONS")," group should be started, is passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"nextToken")," property. The ",(0,i.kt)("inlineCode",{parentName:"p"},"exported")," property indicates whether this extension should be exported from the current module."),(0,i.kt)("p",null,"If for your extension it is not important for which group of extensions it will work, you can simplify the registration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { featureModule } from '@ditsmod/core';\n\nimport { MY_EXTENSIONS, MyExtension } from './my.extension';\n\n@featureModule({\n  extensions: [\n    { extension: MyExtension, groupToken: MY_EXTENSIONS, exported: true }\n  ],\n})\nexport class SomeModule {}\n")),(0,i.kt)("h2",{id:"using-extensionsmanager"},"Using ExtensionsManager"),(0,i.kt)("p",null,"If a certain extension has a dependency on another extension, it is recommended to specify that dependency indirectly through the extension group. To do this, you need ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtensionsManager"),", which initializes extensions groups, throws errors about cyclic dependencies between extensions, and shows the entire chain of extensions that caused the loop. Additionally, ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtensionsManager")," allows you to collect extensions initialization results from the entire application, not just from a single module."),(0,i.kt)("p",null,"Suppose ",(0,i.kt)("inlineCode",{parentName:"p"},"MyExtension")," has to wait for the initialization of the ",(0,i.kt)("inlineCode",{parentName:"p"},"OTHER_EXTENSIONS")," group to complete. To do this, you must specify the dependence on ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtensionsManager")," in the constructor, and in ",(0,i.kt)("inlineCode",{parentName:"p"},"init()")," call ",(0,i.kt)("inlineCode",{parentName:"p"},"init()")," of this service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{17}","{17}":!0},"import { injectable } from '@ditsmod/core';\nimport { Extension, ExtensionsManager } from '@ditsmod/core';\n\nimport { OTHER_EXTENSIONS } from './other.extensions';\n\n@injectable()\nexport class MyExtension implements Extension<void> {\n  private inited: boolean;\n\n  constructor(private extensionsManager: ExtensionsManager) {}\n\n  async init() {\n    if (this.inited) {\n      return;\n    }\n\n    const result = await this.extensionsManager.init(OTHER_EXTENSIONS);\n    // Do something here.\n    this.inited = true;\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ExtensionsManager")," will sequentially cause the initialization of all extensions from the specified group, and the result of their work will return as an array. If extensions return arrays, they will automatically merge into a single resulting array. This behavior can be changed if the second argument in ",(0,i.kt)("inlineCode",{parentName:"p"},"init()")," pass ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await this.extensionsManager.init(OTHER_EXTENSIONS, false);\n")),(0,i.kt)("p",null,"It is important to remember that running ",(0,i.kt)("inlineCode",{parentName:"p"},"init()")," a particular extension processes data only in the context of the current module. For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"MyExtension")," is imported into three different modules, Ditsmod will sequentially process these three modules with three different ",(0,i.kt)("inlineCode",{parentName:"p"},"MyExtension")," instances. This means that one extension instance will only be able to collect data from one module."),(0,i.kt)("p",null,"In case you need to accumulate the results of a certain extension from all modules, you need to do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{17}","{17}":!0},"import { injectable } from '@ditsmod/core';\nimport { Extension, ExtensionsManager } from '@ditsmod/core';\n\nimport { OTHER_EXTENSIONS } from './other.extensions';\n\n@injectable()\nexport class MyExtension implements Extension<void | false> {\n  private inited: boolean;\n\n  constructor(private extensionsManager: ExtensionsManager) {}\n\n  async init() {\n    if (this.inited) {\n      return;\n    }\n\n    const result = await this.extensionsManager.init(OTHER_EXTENSIONS, true, MyExtension);\n    if (!result) {\n      return false;\n    }\n\n    // Do something here.\n    this.inited = true;\n  }\n}\n")),(0,i.kt)("p",null,"That is, when you need ",(0,i.kt)("inlineCode",{parentName:"p"},"MyExtension")," to receive data from the ",(0,i.kt)("inlineCode",{parentName:"p"},"OTHER_EXTENSIONS")," group from the entire application, you need to pass ",(0,i.kt)("inlineCode",{parentName:"p"},"MyExtension")," as the third argument here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const result = await this.extensionsManager.init(OTHER_EXTENSIONS, true, MyExtension);\n")),(0,i.kt)("p",null,"This expression will return ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," until the last time the group ",(0,i.kt)("inlineCode",{parentName:"p"},"OTHER_EXTENSIONS")," is called. For example, if the group ",(0,i.kt)("inlineCode",{parentName:"p"},"OTHER_EXTENSIONS")," works in three different modules, then this expression in the first two modules will return ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", and in the third - the value that this group of extensions should return."),(0,i.kt)("h2",{id:"dynamic-addition-of-providers"},"Dynamic addition of providers"),(0,i.kt)("p",null,"Each extension can specify a dependency on the ",(0,i.kt)("inlineCode",{parentName:"p"},"ROUTES_EXTENSIONS")," group to dynamically add providers at the level of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"module,"),(0,i.kt)("li",{parentName:"ul"},"route,"),(0,i.kt)("li",{parentName:"ul"},"request.")),(0,i.kt)("p",null,"You can see how it is done in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/blob/0c4660a77/packages/body-parser/src/body-parser.extension.ts#L27-L40"},"BodyParserExtension"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@injectable()\nexport class BodyParserExtension implements Extension<void> {\n  private inited: boolean;\n\n  constructor(protected extensionManager: ExtensionsManager, protected injectorPerApp: InjectorPerApp) {}\n\n  async init() {\n    if (this.inited) {\n      return;\n    }\n\n    // Getting the metadata collected using the ROUTES_EXTENSIONS group\n    const aMetadataPerMod2 = await this.extensionManager.init(ROUTES_EXTENSIONS);\n\n    aMetadataPerMod2.forEach((metadataPerMod2) => {\n      // First, extracting the metadata of a module\n      const { aControllersMetadata2, providersPerMod } = metadataPerMod2;\n\n      // Then, extracting the metadata of a controller\n      aControllersMetadata2.forEach(({ providersPerRou, providersPerReq }) => {\n        // Merging the providers from a module and a controller\n        const mergedProvidersPerRou = [...metadataPerMod2.providersPerRou, ...providersPerRou];\n        const mergedProvidersPerReq = [...metadataPerMod2.providersPerReq, ...providersPerReq];\n\n        // Creating a hierarchy of injectors.\n        const injectorPerMod = this.injectorPerApp.resolveAndCreateChild(providersPerMod);\n        const injectorPerRou = injectorPerMod.resolveAndCreateChild(mergedProvidersPerRou);\n        const injectorPerReq = injectorPerRou.resolveAndCreateChild(mergedProvidersPerReq);\n\n        // Extracting the metadata for a route,\n        // and based on it, we either add an interceptor to injectorPerReq, or not.\n        const routeMeta = injectorPerRou.get(RouteMeta) as RouteMeta;\n        const bodyParserConfig = injectorPerReq.resolveAndInstantiate(BodyParserConfig) as BodyParserConfig;\n        if (bodyParserConfig.acceptMethods.includes(routeMeta.httpMethod)) {\n          providersPerReq.push({ token: HTTP_INTERCEPTORS, useClass: BodyParserInterceptor, multi: true });\n        }\n      });\n    });\n\n    this.inited = true;\n  }\n}\n")),(0,i.kt)("p",null,"Of course, such dynamic addition of providers is possible only before creating HTTP request handlers. As you can see, in this example, a ",(0,i.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/dependency-injection#hierarchy-of-injectors"},"hierarchy of injectors")," is created to obtain the correct data with the ",(0,i.kt)("inlineCode",{parentName:"p"},"RouteMeta")," token."))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||r;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);