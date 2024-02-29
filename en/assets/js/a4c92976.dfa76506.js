"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[585],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),g=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=g(o),d=r,u=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return o?n.createElement(u,l(l({ref:t},p),{},{components:o})):n.createElement(u,l({ref:t},p))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var g=2;g<a;g++)l[g]=o[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8231:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>g});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:8},l="Logger",i={unversionedId:"components-of-ditsmod-app/logger",id:"components-of-ditsmod-app/logger",title:"Logger",description:"Ditsmod uses the Logger class as an interface as well as a DI token. By default, ConsoleLogger is used for logging. There are 8 logging levels in total (borrowed from log4j):",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/08-logger.md",sourceDirName:"00-components-of-ditsmod-app",slug:"/components-of-ditsmod-app/logger",permalink:"/en/components-of-ditsmod-app/logger",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/08-logger.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/en/components-of-ditsmod-app/extensions"},next:{title:"LogMediator",permalink:"/en/components-of-ditsmod-app/log-mediator"}},s={},g=[{value:"Substitution the system logger",id:"substitution-the-system-logger",level:2},{value:"Using the logger in production mode",id:"using-the-logger-in-production-mode",level:2}],p={toc:g},m="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"logger"},"Logger"),(0,r.kt)("p",null,"Ditsmod uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/blob/core-2.51.2/packages/core/src/types/logger.ts"},"Logger")," class as an interface as well as a DI token. By default, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/blob/core-2.51.2/packages/core/src/services/console-logger.ts"},"ConsoleLogger")," is used for logging. There are 8 logging levels in total (borrowed from ",(0,r.kt)("a",{parentName:"p",href:"https://logging.apache.org/log4j/2.x/log4j-api/apidocs/org/apache/logging/log4j/Level.html"},"log4j"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"all"),"- All events should be logged."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trace")," - A fine-grained debug message, typically capturing the flow through the application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"debug")," - A general debugging event."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"info")," - An event for informational purposes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"warn")," - An event that might possible lead to an error."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error")," - An error in the application, possibly recoverable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fatal")," - A fatal event that will prevent the application from continuing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"off")," - No events will be logged. Intended for testing, it is not recommended to use it in product mode.")),(0,r.kt)("p",null,'In this documentation, when we talk about "logging levels", we mean "log level of detail". The highest level of detail is ',(0,r.kt)("inlineCode",{parentName:"p"},"all"),", the lowest level of detail is ",(0,r.kt)("inlineCode",{parentName:"p"},"off"),"."),(0,r.kt)("p",null,"Sometimes in this documentation, or in the Ditsmod system messages, you may come across two types indicating the logging level:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"InputLogLevel")," - this type indicates the log level intended for a specific message. For example, the following entry uses the log level - ",(0,r.kt)("inlineCode",{parentName:"li"},"info"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"logger.log('info', 'some message');\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OutputLogLevel")," - this type indicates the limit level of logs above which messages are ignored. For example, the following entry sets the logging level to ",(0,r.kt)("inlineCode",{parentName:"li"},"debug"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"logger.setLevel('debug');\n")))),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"InputLogLevel")," is equal to or lower than ",(0,r.kt)("inlineCode",{parentName:"p"},"OutputLogLevel"),", the message is writed by the logger, otherwise it is ignored. For example, the following combination will write a message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"logger.setLevel('debug');\nlogger.log('info', 'some message');\n")),(0,r.kt)("p",null,"And in the following - it will be ignored:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"logger.setLevel('warn');\nlogger.log('info', 'some message');\n")),(0,r.kt)("h2",{id:"substitution-the-system-logger"},"Substitution the system logger"),(0,r.kt)("p",null,"If you want the system logs written by Ditsmod to be written by your own logger, it must implement the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/blob/core-2.51.2/packages/core/src/types/logger.ts"},"Logger")," interface. It can then be passed to DI at the application level:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Logger, rootModule } from '@ditsmod/core';\nimport { MyLogger } from './my-loggegr.js';\n\n@rootModule({\n  // ...\n  providersPerApp: [\n    { token: Logger, useClass: MyLogger }\n  ],\n})\nexport class AppModule {}\n")),(0,r.kt)("p",null,"But, most likely, you will want to use some ready-made, well-known logger. And there is a good chance that its interface is different from that of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/blob/core-2.51.2/packages/core/src/types/logger.ts"},"Logger"),". But, as a rule, this is also not a problem, because before transferring the logger instance to DI, it can be patched so that it implements the necessary interface. For this, a provider with the ",(0,r.kt)("inlineCode",{parentName:"p"},"useFactory")," property is used."),(0,r.kt)("p",null,"Let's write the code for this provider first. At the moment (2023-09-02), one of the most popular Node.js loggers is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/winstonjs/winston"},"winston"),". For patching, we wrote a class method before which we added the ",(0,r.kt)("inlineCode",{parentName:"p"},"methodFactory")," decorator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{42-44,47-49}","{42-44,47-49}":!0},"import { Logger, LoggerConfig, OutputLogLevel, methodFactory } from '@ditsmod/core';\nimport { createLogger, addColors, format, transports } from 'winston';\n\nexport class PatchLogger {\n  @methodFactory()\n  patchLogger(config: LoggerConfig) {\n    const logger = createLogger();\n\n    const transport = new transports.Console({\n      format: format.combine(format.colorize(), format.simple()),\n    });\n\n    const customLevels = {\n      levels: {\n        off: 0,\n        fatal: 1,\n        error: 2,\n        warn: 3,\n        info: 4,\n        debug: 5,\n        trace: 6,\n        all: 7,\n      },\n      colors: {\n        fatal: 'red',\n        error: 'brown',\n        warn: 'yellow',\n        info: 'blue',\n        debug: 'green',\n        trace: 'grey',\n        all: 'grey',\n      },\n    };\n\n    logger.configure({\n      levels: customLevels.levels,\n      level: config.level,\n      transports: [transport],\n    });\n\n    // Logger must have `setLevel` method.\n    (logger as unknown as Logger).setLevel = (value: OutputLogLevel) => {\n      logger.level = value;\n    };\n\n    // Logger must have `getLevel` method.\n    (logger as unknown as Logger).getLevel = () => {\n      return logger.level as OutputLogLevel;\n    };\n\n    addColors(customLevels.colors);\n\n    return logger;\n  }\n}\n")),(0,r.kt)("p",null,"As you can see, in addition to the usual settings for ",(0,r.kt)("inlineCode",{parentName:"p"},"winston"),", the highlighted lines add two methods to his instance - ",(0,r.kt)("inlineCode",{parentName:"p"},"setLevel")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getLevel")," - which it does not have, but which are necessary for Ditsmod to interact with it properly."),(0,r.kt)("p",null,"And now this class can be passed to DI at the application level:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Logger, rootModule } from '@ditsmod/core';\nimport { PatchLogger } from './patch-logger.js';\n\n@rootModule({\n  // ...\n  providersPerApp: [\n    { token: Logger, useFactory: [PatchLogger, PatchLogger.prototype.patchLogger] }\n  ],\n})\nexport class AppModule {}\n")),(0,r.kt)("p",null,"You can view finished examples with loggers ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/tree/core-2.51.2/examples/04-logger/src/app/modules"},"in the Ditsmod repository"),"."),(0,r.kt)("h2",{id:"using-the-logger-in-production-mode"},"Using the logger in production mode"),(0,r.kt)("p",null,"To change the logging level in production mode, you do not need to change the compiled code. You can create a custom controller, guard it, and then call the appropriate route to change the logging level that you specify in the URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { AnyObj, controller, inject, Logger, LogLevel, QUERY_PARAMS, Res, route } from '@ditsmod/core';\n\nimport { requirePermissions } from '../auth/guards-utils.js';\nimport { Permission } from '../auth/types.js';\n\n@controller()\nexport class SomeController {\n  @route('GET', 'set-loglevel', [requirePermissions(Permission.canSetLogLevel)])\n  setLogLevel(@inject(QUERY_PARAMS) queryParams: AnyObj, logger: Logger, res: Res) {\n    const level = queryParams.logLevel as LogLevel;\n    try {\n      logger.setLevel(level);\n      res.send('Setting logLevel successful!');\n    } catch (error: any) {\n      res.send(`Setting logLevel is failed: ${error.message}`);\n    }\n  }\n}\n")),(0,r.kt)("p",null,"As you can see, the route path ",(0,r.kt)("inlineCode",{parentName:"p"},"/set-loglevel")," is created here, with protection through a guard that checks the permissions for such an action. This uses ",(0,r.kt)("inlineCode",{parentName:"p"},"requirePermissions()"),", which you can read about in ",(0,r.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/guards#helpers-for-guards-with-parameters"},"Helpers for guards with parameters"),"."))}c.isMDXComponent=!0}}]);