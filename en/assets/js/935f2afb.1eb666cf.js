"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/en/","docId":"intro"},{"type":"category","label":"Components of Ditsmod app","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Modules","href":"/en/components-of-ditsmod-app/module","docId":"components-of-ditsmod-app/module"},{"type":"link","label":"Router, controllers and services","href":"/en/components-of-ditsmod-app/controllers-and-services","docId":"components-of-ditsmod-app/controllers-and-services"},{"type":"link","label":"Dependency Injection","href":"/en/components-of-ditsmod-app/dependency-injection","docId":"components-of-ditsmod-app/dependency-injection"},{"type":"link","label":"HTTP Interceptors","href":"/en/components-of-ditsmod-app/http-interceptors","docId":"components-of-ditsmod-app/http-interceptors"},{"type":"link","label":"Guards","href":"/en/components-of-ditsmod-app/guards","docId":"components-of-ditsmod-app/guards"},{"type":"link","label":"Extensions","href":"/en/components-of-ditsmod-app/extensions","docId":"components-of-ditsmod-app/extensions"},{"type":"link","label":"Logger","href":"/en/components-of-ditsmod-app/logger","docId":"components-of-ditsmod-app/logger"},{"type":"link","label":"LogMediator","href":"/en/components-of-ditsmod-app/log-mediator","docId":"components-of-ditsmod-app/log-mediator"},{"type":"link","label":"HttpErrorHandler","href":"/en/components-of-ditsmod-app/http-error-handler","docId":"components-of-ditsmod-app/http-error-handler"},{"type":"link","label":"ModuleManager","href":"/en/components-of-ditsmod-app/module-manager","docId":"components-of-ditsmod-app/module-manager"}]},{"type":"category","label":"Developer guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Export, import, append","href":"/en/developer-guides/exports-and-imports","docId":"developer-guides/exports-and-imports"},{"type":"link","label":"Collision of providers","href":"/en/developer-guides/providers-collisions","docId":"developer-guides/providers-collisions"},{"type":"link","label":"Ditsmod coding style guide","href":"/en/developer-guides/conventions","docId":"developer-guides/conventions"},{"type":"link","label":"Testing","href":"/en/developer-guides/testing","docId":"developer-guides/testing"}]},{"type":"category","label":"Native Ditsmod modules","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"@ditsmod/routing","href":"/en/native-modules/routing","docId":"native-modules/routing"},{"type":"link","label":"@ditsmod/body-parser","href":"/en/native-modules/body-parser","docId":"native-modules/body-parser"},{"type":"link","label":"@ditsmod/session-cookie","href":"/en/native-modules/session-cookie","docId":"native-modules/session-cookie"},{"type":"link","label":"@ditsmod/jwt","href":"/en/native-modules/jwt","docId":"native-modules/jwt"},{"type":"link","label":"@ditsmod/cors","href":"/en/native-modules/cors","docId":"native-modules/cors"},{"type":"link","label":"@ditsmod/return","href":"/en/native-modules/return","docId":"native-modules/return"},{"type":"link","label":"@ditsmod/i18n","href":"/en/native-modules/i18n","docId":"native-modules/i18n"},{"type":"link","label":"@ditsmod/openapi","href":"/en/native-modules/openapi","docId":"native-modules/openapi"},{"type":"link","label":"@ditsmod/openapi-validation","href":"/en/native-modules/openapi-validation","docId":"native-modules/openapi-validation"},{"type":"link","label":"@ditsmod/testing","href":"/en/native-modules/testing","docId":"native-modules/testing"}]}]},"docs":{"components-of-ditsmod-app/controllers-and-services":{"id":"components-of-ditsmod-app/controllers-and-services","title":"Router, controllers and services","description":"What does a router do?","sidebar":"tutorialSidebar"},"components-of-ditsmod-app/dependency-injection":{"id":"components-of-ditsmod-app/dependency-injection","title":"Dependency Injection","description":"Why do you need DI?","sidebar":"tutorialSidebar"},"components-of-ditsmod-app/extensions":{"id":"components-of-ditsmod-app/extensions","title":"Extensions","description":"The purpose of Ditsmod extension","sidebar":"tutorialSidebar"},"components-of-ditsmod-app/guards":{"id":"components-of-ditsmod-app/guards","title":"Guards","description":"If you want to restrict access to certain routes, you can use guards. You can view a finished example of an application with guards in the examples folder or in RealWorld example.","sidebar":"tutorialSidebar"},"components-of-ditsmod-app/http-error-handler":{"id":"components-of-ditsmod-app/http-error-handler","title":"HttpErrorHandler","description":"Any errors that occur while processing an HTTP request that you have not caught in controllers, interceptors, or services go to DefaultHttpErrorHandler. This handler is passed to the DI registry at the request level because it must have access to the HTTP request/response object to be able to send a response to the client.","sidebar":"tutorialSidebar"},"components-of-ditsmod-app/http-interceptors":{"id":"components-of-ditsmod-app/http-interceptors","title":"HTTP Interceptors","description":"The interceptors are very similar in functionality to controllers, but they do not create routes, they are attached to existing routes. Multiple interceptors can work on a single route, launching one after another. Interceptors are analogous to middleware in ExpressJS, but interceptors can use DI. Additionally, interceptors can work before and after the controller\'s operation.","sidebar":"tutorialSidebar"},"components-of-ditsmod-app/log-mediator":{"id":"components-of-ditsmod-app/log-mediator","title":"LogMediator","description":"In Ditsmod, you can substitute the default logger with your own logger, and this will allow you to record in your own way even those messages that are issued in @ditsmod/core. But changing the logger does not allow you to change the text of the messages themselves and the level of logging (trace, debug, info, warn, error). LogMediator (or its child class SystemLogMediator) is used for this. Of course, if you have direct access to the code where the logger writes a certain message, then you can change this message on the spot without LogMediator. And if the message is issued by the Ditsmod framework itself or its modules, LogMediator is essential.","sidebar":"tutorialSidebar"},"components-of-ditsmod-app/logger":{"id":"components-of-ditsmod-app/logger","title":"Logger","description":"Ditsmod uses the Logger class as an interface as well as a DI token. By default, ConsoleLogger is used for logging. There are 8 logging levels in total (borrowed from log4j):","sidebar":"tutorialSidebar"},"components-of-ditsmod-app/module":{"id":"components-of-ditsmod-app/module","title":"Modules","description":"One of the main elements of the Ditsmod architecture are its modules. But what exactly is good about modular architecture? - It allows you to isolate in one module several code files that may have different roles, but common specialization. A module can be compared to an orchestra, in which there are different instruments, but they all create music together. On the other hand, the need to isolate different modules arises due to the fact that they may have different specializations and because of this - may interfere with each other. Continuing the analogy with people, if you put police and musicians, or brokers and translators in the same office, they will most likely interfere with each other. That is why narrow specialization is important for a module.","sidebar":"tutorialSidebar"},"components-of-ditsmod-app/module-manager":{"id":"components-of-ditsmod-app/module-manager","title":"ModuleManager","description":"Metadata that you add to module decorators can be called \\"raw\\" metadata. The first stage of its processing takes place in the ModuleManager service. This service recursively scans all modules, starting from the root module, then normalizes and checks for correctness. ModuleManager has methods to find the metadata of specific modules, as well as methods for adding or removing module imports in the normalized representation (i.e. the raw metadata is not changed).","sidebar":"tutorialSidebar"},"developer-guides/conventions":{"id":"developer-guides/conventions","title":"Ditsmod coding style guide","description":"Here is the recommended format in the form of a pair \\"file name\\" - \\"class name\\":","sidebar":"tutorialSidebar"},"developer-guides/exports-and-imports":{"id":"developer-guides/exports-and-imports","title":"Export, import, append","description":"Export providers from non-root module","sidebar":"tutorialSidebar"},"developer-guides/providers-collisions":{"id":"developer-guides/providers-collisions","title":"Collision of providers","description":"Imagine you have Module3 where you imported Module2 and Module1. You did this import because you need Service2 and Service1 from these modules, respectively. You are viewing how these services work, but for some reason Service1 does not work as expected. You start debug and it turns out that Service1 exports both modules: Module2 and Module1. You expected that Service1 would only be exported from Module1, but the version exported from Module2 actually worked.","sidebar":"tutorialSidebar"},"developer-guides/testing":{"id":"developer-guides/testing","title":"Testing","description":"What is unit testing","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"About the project","sidebar":"tutorialSidebar"},"native-modules/body-parser":{"id":"native-modules/body-parser","title":"@ditsmod/body-parser","description":"This module adds an interceptor for parsing the request body to all routes that have the HTTP methods specified in bodyParserConfig.acceptMethods, by default it is:","sidebar":"tutorialSidebar"},"native-modules/cors":{"id":"native-modules/cors","title":"@ditsmod/cors","description":"If your application needs to use the OPTIONS HTTP method or the CORS or CORS preflight mechanisms, you can use the @ditsmod/cors module.","sidebar":"tutorialSidebar"},"native-modules/i18n":{"id":"native-modules/i18n","title":"@ditsmod/i18n","description":"i18n is an abbreviation of the word internationalization. The @ditsmod/i18n module provides basic functionality for translating system messages (issued by the Ditsmod application at runtime) and provides the ability to easily extend dictionaries. In fact, you use ordinary services as dictionaries for translation, so the text for translation can be taken both from TypeScript files and from databases. The @ditsmod/i18n work is designed so that each current module can have its own translation, and that the translation of any imported module can be modified or supplemented.","sidebar":"tutorialSidebar"},"native-modules/jwt":{"id":"native-modules/jwt","title":"@ditsmod/jwt","description":"The @ditsmod/jwt module integrates jsonwebtoken into a Ditsmod authentication application based on JSON Web Token. You can view a finished example of using this module in the Ditsmod repository.","sidebar":"tutorialSidebar"},"native-modules/openapi":{"id":"native-modules/openapi","title":"@ditsmod/openapi","description":"You can use the @ditsmod/openapi module to create OpenAPI documentation.","sidebar":"tutorialSidebar"},"native-modules/openapi-validation":{"id":"native-modules/openapi-validation","title":"@ditsmod/openapi-validation","description":"To provide automatic metadata-based validation in Ditsmod applications for OpenAPI, you can use the @ditsmod/openapi-validation module. Under the hood, this module has an integration with the ajv library, which directly performs the validation just mentioned.","sidebar":"tutorialSidebar"},"native-modules/return":{"id":"native-modules/return","title":"@ditsmod/return","description":"The @ditsmod/return module allows you to send an HTTP response using the return operator within a method that binds to a specific route:","sidebar":"tutorialSidebar"},"native-modules/routing":{"id":"native-modules/routing","title":"@ditsmod/routing","description":"The @ditsmod/routing module implements a router with the Router interface:","sidebar":"tutorialSidebar"},"native-modules/session-cookie":{"id":"native-modules/session-cookie","title":"@ditsmod/session-cookie","description":"The @ditsmod/session-cookie module simplifies working with the session cookie. A ready-made example of using this module can be found in the Ditsmod repository.","sidebar":"tutorialSidebar"},"native-modules/testing":{"id":"native-modules/testing","title":"@ditsmod/testing","description":"This module is related to end-to-end testing, so you need to install it in devDependencies:","sidebar":"tutorialSidebar"}}}')}}]);