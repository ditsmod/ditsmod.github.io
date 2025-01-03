"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[512],{2658:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"What is Ditsmod","href":"/en/","docId":"intro","unlisted":false},{"type":"category","label":"Components of Ditsmod app","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Modules","href":"/en/components-of-ditsmod-app/module","docId":"components-of-ditsmod-app/module","unlisted":false},{"type":"link","label":"Router, controllers and services","href":"/en/components-of-ditsmod-app/controllers-and-services","docId":"components-of-ditsmod-app/controllers-and-services","unlisted":false},{"type":"link","label":"Dependency Injection","href":"/en/components-of-ditsmod-app/dependency-injection","docId":"components-of-ditsmod-app/dependency-injection","unlisted":false},{"type":"link","label":"HTTP Interceptors","href":"/en/components-of-ditsmod-app/http-interceptors","docId":"components-of-ditsmod-app/http-interceptors","unlisted":false},{"type":"link","label":"Guards","href":"/en/components-of-ditsmod-app/guards","docId":"components-of-ditsmod-app/guards","unlisted":false},{"type":"link","label":"Extensions","href":"/en/components-of-ditsmod-app/extensions","docId":"components-of-ditsmod-app/extensions","unlisted":false},{"type":"link","label":"Logger","href":"/en/components-of-ditsmod-app/logger","docId":"components-of-ditsmod-app/logger","unlisted":false},{"type":"link","label":"LogMediator","href":"/en/components-of-ditsmod-app/log-mediator","docId":"components-of-ditsmod-app/log-mediator","unlisted":false},{"type":"link","label":"HttpErrorHandler","href":"/en/components-of-ditsmod-app/http-error-handler","docId":"components-of-ditsmod-app/http-error-handler","unlisted":false},{"type":"link","label":"ModuleManager","href":"/en/components-of-ditsmod-app/module-manager","docId":"components-of-ditsmod-app/module-manager","unlisted":false},{"type":"link","label":"Providers helper","href":"/en/components-of-ditsmod-app/providers-helper","docId":"components-of-ditsmod-app/providers-helper","unlisted":false}]},{"type":"category","label":"Developer guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Export, import, append","href":"/en/developer-guides/exports-and-imports","docId":"developer-guides/exports-and-imports","unlisted":false},{"type":"link","label":"Provider Collisions","href":"/en/developer-guides/providers-collisions","docId":"developer-guides/providers-collisions","unlisted":false},{"type":"link","label":"Ditsmod coding style guide","href":"/en/developer-guides/conventions","docId":"developer-guides/conventions","unlisted":false},{"type":"link","label":"Testing","href":"/en/developer-guides/testing","docId":"developer-guides/testing","unlisted":false}]},{"type":"category","label":"Native Ditsmod modules","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"@ditsmod/routing","href":"/en/native-modules/routing","docId":"native-modules/routing","unlisted":false},{"type":"link","label":"@ditsmod/body-parser","href":"/en/native-modules/body-parser","docId":"native-modules/body-parser","unlisted":false},{"type":"link","label":"@ditsmod/authjs","href":"/en/native-modules/authjs","docId":"native-modules/authjs","unlisted":false},{"type":"link","label":"@ditsmod/session-cookie","href":"/en/native-modules/session-cookie","docId":"native-modules/session-cookie","unlisted":false},{"type":"link","label":"@ditsmod/jwt","href":"/en/native-modules/jwt","docId":"native-modules/jwt","unlisted":false},{"type":"link","label":"@ditsmod/cors","href":"/en/native-modules/cors","docId":"native-modules/cors","unlisted":false},{"type":"link","label":"@ditsmod/i18n","href":"/en/native-modules/i18n","docId":"native-modules/i18n","unlisted":false},{"type":"link","label":"@ditsmod/openapi","href":"/en/native-modules/openapi","docId":"native-modules/openapi","unlisted":false},{"type":"link","label":"@ditsmod/openapi-validation","href":"/en/native-modules/openapi-validation","docId":"native-modules/openapi-validation","unlisted":false},{"type":"link","label":"@ditsmod/testing","href":"/en/native-modules/testing","docId":"native-modules/testing","unlisted":false}]}]},"docs":{"components-of-ditsmod-app/controllers-and-services":{"id":"components-of-ditsmod-app/controllers-and-services","title":"Router, controllers and services","description":"What does a router do?","sidebar":"tutorialSidebar"},"components-of-ditsmod-app/dependency-injection":{"id":"components-of-ditsmod-app/dependency-injection","title":"Dependency Injection","description":"Why do you need DI?","sidebar":"tutorialSidebar"},"components-of-ditsmod-app/extensions":{"id":"components-of-ditsmod-app/extensions","title":"Extensions","description":"The purpose of Ditsmod extension","sidebar":"tutorialSidebar"},"components-of-ditsmod-app/guards":{"id":"components-of-ditsmod-app/guards","title":"Guards","description":"If you want to restrict access to certain routes, you can use guards. You can view a finished example of an application with guards in the examples folder or in RealWorld example.","sidebar":"tutorialSidebar"},"components-of-ditsmod-app/http-error-handler":{"id":"components-of-ditsmod-app/http-error-handler","title":"HttpErrorHandler","description":"CustomError","sidebar":"tutorialSidebar"},"components-of-ditsmod-app/http-interceptors":{"id":"components-of-ditsmod-app/http-interceptors","title":"HTTP Interceptors","description":"The interceptors are very similar in functionality to controllers, but they do not create routes, they are attached to existing routes. Multiple interceptors can work on a single route, launching one after another. Interceptors are analogous to middleware in ExpressJS, but interceptors can use DI. Additionally, interceptors can work before and after the controller\'s operation.","sidebar":"tutorialSidebar"},"components-of-ditsmod-app/log-mediator":{"id":"components-of-ditsmod-app/log-mediator","title":"LogMediator","description":"In Ditsmod application, you can substitute the default logger with your own logger, and this will allow you to record in your own way even those messages that are issued in @ditsmod/core. But changing the logger does not allow you to change the text of the messages themselves and the level of logging (trace, debug, info, warn, error). LogMediator (or its child class SystemLogMediator) is used for this. Of course, if you have direct access to the code where the logger writes a certain message, then you can change this message on the spot without LogMediator. And if the message is issued by the Ditsmod framework itself or its modules, LogMediator is essential.","sidebar":"tutorialSidebar"},"components-of-ditsmod-app/logger":{"id":"components-of-ditsmod-app/logger","title":"Logger","description":"The logging level can be set by passing a provider with the LoggerConfig token:","sidebar":"tutorialSidebar"},"components-of-ditsmod-app/module":{"id":"components-of-ditsmod-app/module","title":"Modules","description":"One of the main elements of the Ditsmod architecture are its modules. But what exactly is good about modular architecture? - Modularity allows you to compose different autonomous elements and assemble them into a scalable application. Thanks to the autonomy of the modules, large projects are easier to develop, test, deploy and maintain.","sidebar":"tutorialSidebar"},"components-of-ditsmod-app/module-manager":{"id":"components-of-ditsmod-app/module-manager","title":"ModuleManager","description":"Metadata that you add to module decorators can be called \\"raw\\" metadata. The first stage of its processing takes place in the ModuleManager service. This service recursively scans all modules, starting from the root module, then normalizes and checks for correctness. ModuleManager has methods to find the metadata of specific modules, as well as methods for adding or removing module imports in the normalized representation (i.e. the raw metadata is not changed).","sidebar":"tutorialSidebar"},"components-of-ditsmod-app/providers-helper":{"id":"components-of-ditsmod-app/providers-helper","title":"Providers helper","description":"This class simplifies the addition of providers to DI while simultaneously controlling their types. Since this class implements the so-called Iteration protocols, it facilitates the conversion of itself into an array (note the spread operator):","sidebar":"tutorialSidebar"},"developer-guides/conventions":{"id":"developer-guides/conventions","title":"Ditsmod coding style guide","description":"Here is the recommended format in the form of a pair \\"file name\\" - \\"class name\\":","sidebar":"tutorialSidebar"},"developer-guides/exports-and-imports":{"id":"developer-guides/exports-and-imports","title":"Export, import, append","description":"The module where you declare certain providers is called the host module for those providers. And when you use those providers in an external module, that external module is called the consumer module of those providers.","sidebar":"tutorialSidebar"},"developer-guides/providers-collisions":{"id":"developer-guides/providers-collisions","title":"Provider Collisions","description":"Imagine you have Module3, where you import Module2 and Module1. You made these imports because you need Provider2 and Provider1 from these modules, respectively. You review the results of these providers\u2019 operations, but for some reason, Provider1 does not behave as expected. You start debugging and discover that Provider1 is exported from both Module2 and Module1. You expected Provider1 to be exported only from Module1, but in reality, the version exported by Module2 is being used:","sidebar":"tutorialSidebar"},"developer-guides/testing":{"id":"developer-guides/testing","title":"Testing","description":"What is unit testing","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"What is Ditsmod","description":"Introduction to Ditsmod","sidebar":"tutorialSidebar"},"native-modules/authjs":{"id":"native-modules/authjs","title":"@ditsmod/authjs","description":"This module provides integration with Auth.js.","sidebar":"tutorialSidebar"},"native-modules/body-parser":{"id":"native-modules/body-parser","title":"@ditsmod/body-parser","description":"In this module, integration is done with @ts-stack/body-parser and @ts-stack/multer. By default, the following data formats are supported:","sidebar":"tutorialSidebar"},"native-modules/cors":{"id":"native-modules/cors","title":"@ditsmod/cors","description":"If your application needs to use the OPTIONS HTTP method or the CORS or CORS preflight mechanisms, you can use the @ditsmod/cors module.","sidebar":"tutorialSidebar"},"native-modules/i18n":{"id":"native-modules/i18n","title":"@ditsmod/i18n","description":"i18n is an abbreviation of the word internationalization. The @ditsmod/i18n module provides basic functionality for translating system messages (issued by the Ditsmod application at runtime) and provides the ability to easily extend dictionaries. In fact, you use ordinary services as dictionaries for translation, so the text for translation can be taken both from TypeScript files and from databases. The @ditsmod/i18n work is designed so that each current module can have its own translation, and that the translation of any imported module can be modified or supplemented.","sidebar":"tutorialSidebar"},"native-modules/jwt":{"id":"native-modules/jwt","title":"@ditsmod/jwt","description":"The @ditsmod/jwt module integrates jsonwebtoken into a Ditsmod authentication application based on JSON Web Token. You can view a finished example of using this module in the Ditsmod repository.","sidebar":"tutorialSidebar"},"native-modules/openapi":{"id":"native-modules/openapi","title":"@ditsmod/openapi","description":"You can use the @ditsmod/openapi module to create OpenAPI documentation.","sidebar":"tutorialSidebar"},"native-modules/openapi-validation":{"id":"native-modules/openapi-validation","title":"@ditsmod/openapi-validation","description":"To provide automatic metadata-based validation in Ditsmod applications for OpenAPI, you can use the @ditsmod/openapi-validation module. Under the hood, this module has an integration with the ajv library, which directly performs the validation just mentioned.","sidebar":"tutorialSidebar"},"native-modules/routing":{"id":"native-modules/routing","title":"@ditsmod/routing","description":"The @ditsmod/routing module implements a router with the Router interface:","sidebar":"tutorialSidebar"},"native-modules/session-cookie":{"id":"native-modules/session-cookie","title":"@ditsmod/session-cookie","description":"The @ditsmod/session-cookie module simplifies working with the session cookie. A ready-made example of using this module can be found in the Ditsmod repository.","sidebar":"tutorialSidebar"},"native-modules/testing":{"id":"native-modules/testing","title":"@ditsmod/testing","description":"This module is related to end-to-end testing, so you need to install it in devDependencies:","sidebar":"tutorialSidebar"}}}}')}}]);