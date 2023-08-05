"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[278],{7984:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=o(3117),r=(o(7294),o(3905));const i={sidebar_position:3},a="Export, import, append",l={unversionedId:"components-of-ditsmod-app/exports-and-imports",id:"components-of-ditsmod-app/exports-and-imports",title:"Export, import, append",description:"Export providers from non-root module",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/03-exports-and-imports.md",sourceDirName:"00-components-of-ditsmod-app",slug:"/components-of-ditsmod-app/exports-and-imports",permalink:"/en/components-of-ditsmod-app/exports-and-imports",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/03-exports-and-imports.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dependency Injection",permalink:"/en/components-of-ditsmod-app/dependency-injection"},next:{title:"HTTP Interceptors",permalink:"/en/components-of-ditsmod-app/http-interceptors"}},s={},p=[{value:"Export providers from non-root module",id:"export-providers-from-non-root-module",level:2},{value:"Export providers from the root module",id:"export-providers-from-the-root-module",level:2},{value:"Import module",id:"import-module",level:2},{value:"Import classes or class instances?",id:"import-classes-or-class-instances",level:3},{value:"Import and encapsulation",id:"import-and-encapsulation",level:3},{value:"Appending of the module",id:"appending-of-the-module",level:2},{value:"Re-export of the module",id:"re-export-of-the-module",level:2}],d={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"export-import-append"},"Export, import, append"),(0,r.kt)("h2",{id:"export-providers-from-non-root-module"},"Export providers from non-root module"),(0,r.kt)("p",null,"By exporting providers from a particular module, you declare that they are available for use in other modules that will import that module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{8}","{8}":!0},"import { featureModule } from '@ditsmod/core';\n\nimport { FirstService } from './first.service';\nimport { SecondService } from './second.service';\n\n@featureModule({\n  providersPerMod: [FirstService, { token: SecondService, useClass: SecondService }],\n  exports: [SecondService],\n})\nexport class SomeModule {}\n")),(0,r.kt)("p",null,"Please note that only provider tokens or modules can be added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"exports")," array. In this case, the ",(0,r.kt)("inlineCode",{parentName:"p"},"{ token: SecondService, useClass: SecondService }")," object cannot be added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"exports")," array, because this object is not a token or a module. Also, keep in mind that only the services that will be directly used in external modules need to be exported from a specific module. In this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"SecondService")," may depend on ",(0,r.kt)("inlineCode",{parentName:"p"},"FirstService"),", but ",(0,r.kt)("inlineCode",{parentName:"p"},"FirstService")," does not need to be exported if it is not directly used in an external module. This ensures module encapsulation."),(0,r.kt)("p",null,"You can export providers only those that are transferred to the following arrays:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"providersPerMod"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"providersPerRou"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"providersPerReq"),".")),(0,r.kt)("p",null,"Exporting the providers passed in ",(0,r.kt)("inlineCode",{parentName:"p"},"providersPerApp")," does not make sense, as using this array DI will generate an ",(0,r.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/dependency-injection#injector"},"injector")," at the application level. That is, providers from this array will be available for any module, at any level, and without export."),(0,r.kt)("p",null,"It also doesn't make sense to export the controllers, because the export only affects the providers."),(0,r.kt)("h2",{id:"export-providers-from-the-root-module"},"Export providers from the root module"),(0,r.kt)("p",null,"Exporting providers from the root module means that these providers will automatically be added to every module in the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{9}","{9}":!0},"import { rootModule } from '@ditsmod/core';\n\nimport { SomeService } from './some.service';\nimport { OtherModule } from './other.module';\n\n@rootModule({\n  imports: [OtherModule],\n  providersPerRou: [SomeService],\n  exports: [SomeService, OtherModule],\n})\nexport class AppModule {}\n")),(0,r.kt)("p",null,"In this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"SomeService")," will be added to absolutely all application modules at the route level. As you can see, you can also export entire modules. In this case, all providers exported from ",(0,r.kt)("inlineCode",{parentName:"p"},"OtherModule")," will also be added to each application module."),(0,r.kt)("h2",{id:"import-module"},"Import module"),(0,r.kt)("p",null,"You cannot import a single provider into a Ditsmod module, but you can import an entire module with all the providers and ",(0,r.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/extensions"},"extensions")," exported in it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7}","{7}":!0},"import { featureModule } from '@ditsmod/core';\n\nimport { FirstModule } from './first.module';\n\n@featureModule({\n  imports: [\n    FirstModule\n  ]\n})\nexport class SecondModule {}\n")),(0,r.kt)("p",null,"For example, if ",(0,r.kt)("inlineCode",{parentName:"p"},"SomeService")," is exported in the ",(0,r.kt)("inlineCode",{parentName:"p"},"FirstModule"),", then this service can now be used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"SecondModule")," in services and controllers. However, if ",(0,r.kt)("inlineCode",{parentName:"p"},"FirstModule")," has controllers, they will be ignored in this import form. For Ditsmod to take into account controllers from an imported module, the module must be imported with a prefix passed in ",(0,r.kt)("inlineCode",{parentName:"p"},"path"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4}","{4}":!0},"// ...\n@featureModule({\n  imports: [\n    { path: '', module: FirstModule }\n  ]\n})\nexport class SecondModule {}\n")),(0,r.kt)("p",null,"Although ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," is an empty string here, for Ditsmod, the presence of ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," means:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"to consider controllers from the imported module as well;"),(0,r.kt)("li",{parentName:"ol"},"to use ",(0,r.kt)("inlineCode",{parentName:"li"},"path")," as a prefix for all controllers imported from ",(0,r.kt)("inlineCode",{parentName:"li"},"FirstModule"),".")),(0,r.kt)("p",null,"As you can see, in the previous example, this time neither the provider nor the module is imported, but the object. This object has the following interface:"),(0,r.kt)("a",{id:"ModuleWithParams"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface ModuleWithParams<M extends AnyObj = AnyObj, E extends AnyObj = AnyObj> {\n  id?: string;\n  module: ModuleType<M>;\n  path?: string;\n  guards?: GuardItem[];\n  /**\n   * List of modules, `ModuleWithParams` or tokens of providers exported by this\n   * module.\n   */\n  exports?: any[];\n  providersPerApp?: ServiceProvider[];\n  providersPerMod?: ServiceProvider[];\n  providersPerRou?: ServiceProvider[];\n  providersPerReq?: ServiceProvider[];\n  /**\n   * This property allows you to pass any information to extensions.\n   *\n   * You must follow this rule: data for one extension - one key in `extensionsMeta` object.\n   */\n  extensionsMeta?: E;\n}\n")),(0,r.kt)("p",null,"Note that only the ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," property is required in this interface."),(0,r.kt)("p",null,"To reduce the length of the code when importing an object of this type, it is sometimes advisable to write a static method in the importing module. To see this clearly, let's take the previous example again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4}","{4}":!0},"// ...\n@featureModule({\n  imports: [\n    { path: '', module: FirstModule }\n  ]\n})\nexport class SecondModule {}\n")),(0,r.kt)("p",null,"If you wrote ",(0,r.kt)("inlineCode",{parentName:"p"},"FirstModule")," and knew that this module would make sense to be imported many times into different modules with different prefixes, then in this case you could write a static method in this class that returns an object specially designed for import:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// ...\nexport class FirstModule {\n  static withPrefix(path: string) {\n    return {\n      module: this,\n      path\n    }\n  }\n}\n")),(0,r.kt)("p",null,"Now the object returned by this method can be imported as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4}","{4}":!0},"// ...\n@featureModule({\n  imports: [\n    FirstModule.withPrefix('some-prefix')\n  ]\n})\nexport class SecondModule {}\n")),(0,r.kt)("p",null,"In this case, the reduction of the code almost did not occur compared to the previous example, when we imported the object directly, and the readability also worsened. So when writing static import methods, consider whether they simplify the code."),(0,r.kt)("p",null,"In order for TypeScript to control exactly what the static import method returns, it is recommended to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ModuleWithParams")," interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { ModuleWithParams } from '@ditsmod/core';\n// ...\nexport class SomeModule {\n  static withParams(someParams: SomeParams): ModuleWithParams<SomeModule> {\n    return {\n      module: this,\n      // ...\n    }\n  }\n}\n")),(0,r.kt)("h3",{id:"import-classes-or-class-instances"},"Import classes or class instances?"),(0,r.kt)("p",null,"Let's consider a specific situation. In the following example, each provider is a class. Note what arrays these providers are passed to and what exactly is exported."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// ...\n@featureModule({\n  providersPerMod: [Provider1],\n  providersPerRou: [Provider2],\n  providersPerReq: [Provider3],\n  exports: [Provider1, Provider2, Provider3],\n})\nexport class Module1 {}\n")),(0,r.kt)("p",null,"Suppose we import this module into ",(0,r.kt)("inlineCode",{parentName:"p"},"Module2"),", which has no providers of its own:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// ...\n@featureModule({\n  imports: [Module1]\n  // ...\n})\nexport class Module2 {}\n")),(0,r.kt)("p",null,"As a result of this import, ",(0,r.kt)("inlineCode",{parentName:"p"},"Module2")," will now have three providers at the same levels as declared in ",(0,r.kt)("inlineCode",{parentName:"p"},"Module1"),". When working with these providers, their instances are created separately in both modules. A ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Singleton_pattern"},"singleton")," can only be shared between modules if its provider is declared at the application level. In our example, providers are declared at the module, route, and request levels, so ",(0,r.kt)("inlineCode",{parentName:"p"},"Module1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Module2")," will not share class instances at any level."),(0,r.kt)("p",null,"So it can be argued that classes are imported, not their instances."),(0,r.kt)("h3",{id:"import-and-encapsulation"},"Import and encapsulation"),(0,r.kt)("p",null,"Let's consider a situation where only ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider3")," is exported from ",(0,r.kt)("inlineCode",{parentName:"p"},"Module1"),", since only this provider is directly used in external modules:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// ...\n@featureModule({\n  providersPerMod: [Provider1],\n  providersPerRou: [Provider2],\n  providersPerReq: [Provider3],\n  exports: [Provider3],\n})\nexport class Module1 {}\n")),(0,r.kt)("p",null,"Suppose ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider3")," has a dependency on ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider2"),". What will Ditsmod do when importing this module into other modules? Ditsmod will import all three providers, since ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider3")," depends on the other two providers."),(0,r.kt)("h2",{id:"appending-of-the-module"},"Appending of the module"),(0,r.kt)("p",null,"If you don't need to import providers and ",(0,r.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/extensions"},"extensions")," into the current module, but just append the external module to the prefix of the current module, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"appends")," array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},"import { featureModule } from '@ditsmod/core';\n\nimport { FirstModule } from './first.module';\n\n@featureModule({\n  appends: [FirstModule]\n})\nexport class SecondModule {}\n")),(0,r.kt)("p",null,"In this case, if ",(0,r.kt)("inlineCode",{parentName:"p"},"SecondModule")," has a prefix, it will be used as a prefix for all routes contained in ",(0,r.kt)("inlineCode",{parentName:"p"},"FirstModule"),". Only those modules with controllers can be appending."),(0,r.kt)("p",null,"You can also attach an additional prefix to ",(0,r.kt)("inlineCode",{parentName:"p"},"FirstModule"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3}","{3}":!0},"// ...\n@featureModule({\n  appends: [{ path: 'some-path', module: FirstModule }]\n})\nexport class SecondModule {}\n")),(0,r.kt)("p",null,"In this example, an object was used, in which the module is passed for appending, it has the following interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface AppendsWithParams<T extends AnyObj = AnyObj> {\n  id?: string;\n  path: string;\n  module: ModuleType<T>;\n  guards?: GuardItem[];\n}\n")),(0,r.kt)("h2",{id:"re-export-of-the-module"},"Re-export of the module"),(0,r.kt)("p",null,"In addition to importing a specific module, the same module can be simultaneously exported:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { featureModule } from '@ditsmod/core';\n\nimport { FirstModule } from './first.module';\n\n@featureModule({\n  imports: [FirstModule],\n  exports: [FirstModule],\n})\nexport class SecondModule {}\n")),(0,r.kt)("p",null,"What is the meaning of this? - Now if you import ",(0,r.kt)("inlineCode",{parentName:"p"},"SecondModule")," into some other module, you will actually have ",(0,r.kt)("inlineCode",{parentName:"p"},"FirstModule")," imported as well."),(0,r.kt)("p",null,"Pay attention! If during re-export you import an object with ",(0,r.kt)("inlineCode",{parentName:"p"},"ModuleWithParams")," interface, the same object must also be exported:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { featureModule, ModuleWithParams } from '@ditsmod/core';\n\nimport { FirstModule } from './first.module';\n\nconst firstModuleWithParams: ModuleWithParams = { path: 'some-path', module: FirstModule };\n\n@featureModule({\n  imports: [firstModuleWithParams],\n  exports: [firstModuleWithParams],\n})\nexport class SecondModule {}\n")))}m.isMDXComponent=!0},3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>c});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(o),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return o?n.createElement(h,a(a({ref:t},d),{},{components:o})):n.createElement(h,a({ref:t},d))}));function c(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);