"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[360],{5975:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>g,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=n(4848),r=n(8453);const s={sidebar_position:8},i="Logger",l={id:"components-of-ditsmod-app/logger",title:"Logger",description:"The logging level can be set by passing a provider with the LoggerConfig token:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/08-logger.md",sourceDirName:"00-components-of-ditsmod-app",slug:"/components-of-ditsmod-app/logger",permalink:"/en/components-of-ditsmod-app/logger",draft:!1,unlisted:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/08-logger.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/en/components-of-ditsmod-app/extensions"},next:{title:"LogMediator",permalink:"/en/components-of-ditsmod-app/log-mediator"}},g={},d=[{value:"Substitution the system logger",id:"substitution-the-system-logger",level:2},{value:"Using the logger in production mode",id:"using-the-logger-in-production-mode",level:2}];function a(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"logger",children:"Logger"})}),"\n",(0,t.jsxs)(o.p,{children:["The logging level can be set by passing a provider with the ",(0,t.jsx)(o.code,{children:"LoggerConfig"})," token:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",metastring:"{6}",children:"import { rootModule } from '@ditsmod/core';\n// ...\n@rootModule({\n  // ...\n  providersPerApp: [\n    { token: LoggerConfig, useValue: { level: 'info' } }\n  ],\n})\nexport class AppModule {}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["However, better type support is provided by the ",(0,t.jsx)(o.code,{children:"Providers"})," helper:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",metastring:"{6}",children:"import { rootModule, Providers } from '@ditsmod/core';\n// ...\n@rootModule({\n  // ...\n  providersPerApp: [\n    ...new Providers().useLogConfig({ level: 'info' })\n  ],\n})\nexport class AppModule {}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["As you can see, ",(0,t.jsx)(o.code,{children:"LoggerConfig"})," is provided at the application level. If you need a different logging level in a specific module, you should provide both the logging configuration and a provider with the ",(0,t.jsx)(o.code,{children:"Logger"})," token:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",metastring:"{7-9}",children:"import { Logger, featureModule, Providers } from '@ditsmod/core';\nimport { PatchLogger } from './patch-logger.js';\n// ...\n@featureModule({\n  // ...\n  providersPerMod: [\n    ...new Providers()\n      .useFactory(Logger, [PatchLogger, PatchLogger.prototype.patchLogger])\n      .useLogConfig({ level: 'debug' })\n  ],\n})\nexport class SomeModule {}\n"})}),"\n",(0,t.jsx)(o.p,{children:"Please note that these providers are passed at the module level."}),"\n",(0,t.jsxs)(o.p,{children:["Ditsmod uses the ",(0,t.jsx)(o.a,{href:"https://github.com/ditsmod/ditsmod/blob/core-2.54.0/packages/core/src/logger/logger.ts",children:"Logger"})," class as an interface as well as a DI token. By default, ",(0,t.jsx)(o.a,{href:"https://github.com/ditsmod/ditsmod/blob/core-2.54.0/packages/core/src/logger/console-logger.ts",children:"ConsoleLogger"})," is used for logging. There are 8 logging levels in total (borrowed from ",(0,t.jsx)(o.a,{href:"https://logging.apache.org/log4j/2.x/log4j-api/apidocs/org/apache/logging/log4j/Level.html",children:"log4j"}),"):"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"all"}),"- All events should be logged."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"trace"})," - A fine-grained debug message, typically capturing the flow through the application."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"debug"})," - A general debugging event."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"info"})," - An event for informational purposes."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"warn"})," - An event that might possible lead to an error."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"error"})," - An error in the application, possibly recoverable."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"fatal"})," - A fatal event that will prevent the application from continuing."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"off"})," - No events will be logged. Intended for testing, it is not recommended to use it in product mode."]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:['In this documentation, when we talk about "logging levels", we mean "log level of detail". The highest level of detail is ',(0,t.jsx)(o.code,{children:"all"}),", the lowest level of detail is ",(0,t.jsx)(o.code,{children:"off"}),"."]}),"\n",(0,t.jsx)(o.p,{children:"Sometimes in this documentation, or in the Ditsmod system messages, you may come across two types indicating the logging level:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"InputLogLevel"})," - this type indicates the log level intended for a specific message. For example, the following entry uses the log level - ",(0,t.jsx)(o.code,{children:"info"}),":","\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:"logger.log('info', 'some message');\n"})}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"OutputLogLevel"})," - this type indicates the limit level of logs above which messages are ignored. For example, the following entry sets the logging level to ",(0,t.jsx)(o.code,{children:"debug"}),":","\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:"logger.setLevel('debug');\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["If ",(0,t.jsx)(o.code,{children:"InputLogLevel"})," is equal to or lower than ",(0,t.jsx)(o.code,{children:"OutputLogLevel"}),", the message is writed by the logger, otherwise it is ignored. For example, the following combination will write a message:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:"logger.setLevel('debug');\nlogger.log('info', 'some message');\n"})}),"\n",(0,t.jsx)(o.p,{children:"And in the following - it will be ignored:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:"logger.setLevel('warn');\nlogger.log('info', 'some message');\n"})}),"\n",(0,t.jsx)(o.h2,{id:"substitution-the-system-logger",children:"Substitution the system logger"}),"\n",(0,t.jsxs)(o.p,{children:["If you want the system logs written by Ditsmod to be written by your own logger, it must implement the ",(0,t.jsx)(o.a,{href:"https://github.com/ditsmod/ditsmod/blob/core-2.54.0/packages/core/src/logger/logger.ts",children:"Logger"})," interface. It can then be passed to DI at the application level:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:"import { Logger, rootModule } from '@ditsmod/core';\nimport { MyLogger } from './my-loggegr.js';\n\n@rootModule({\n  // ...\n  providersPerApp: [\n    { token: Logger, useClass: MyLogger }\n  ],\n})\nexport class AppModule {}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["But, most likely, you will want to use some ready-made, well-known logger. And there is a good chance that its interface is different from that of ",(0,t.jsx)(o.a,{href:"https://github.com/ditsmod/ditsmod/blob/core-2.54.0/packages/core/src/logger/logger.ts",children:"Logger"}),". But, as a rule, this is also not a problem, because before transferring the logger instance to DI, it can be patched so that it implements the necessary interface. For this, a provider with the ",(0,t.jsx)(o.code,{children:"useFactory"})," property is used."]}),"\n",(0,t.jsxs)(o.p,{children:["Let's write the code for this provider first. At the moment (2023-09-02), one of the most popular Node.js loggers is ",(0,t.jsx)(o.a,{href:"https://github.com/winstonjs/winston",children:"winston"}),". For patching, we wrote a class method before which we added the ",(0,t.jsx)(o.code,{children:"methodFactory"})," decorator:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",metastring:"{42-44,47-49}",children:"import { Logger, LoggerConfig, OutputLogLevel, methodFactory, optional } from '@ditsmod/core';\nimport { createLogger, addColors, format, transports } from 'winston';\n\nexport class PatchLogger {\n  @methodFactory()\n  patchLogger(@optional() config: LoggerConfig = new LoggerConfig()) {\n    const logger = createLogger();\n\n    const transport = new transports.Console({\n      format: format.combine(format.colorize(), format.simple()),\n    });\n\n    const customLevels = {\n      levels: {\n        off: 0,\n        fatal: 1,\n        error: 2,\n        warn: 3,\n        info: 4,\n        debug: 5,\n        trace: 6,\n        all: 7,\n      },\n      colors: {\n        fatal: 'red',\n        error: 'brown',\n        warn: 'yellow',\n        info: 'blue',\n        debug: 'green',\n        trace: 'grey',\n        all: 'grey',\n      },\n    };\n\n    logger.configure({\n      levels: customLevels.levels,\n      level: config.level,\n      transports: [transport],\n    });\n\n    // Logger must have `setLevel` method.\n    (logger as unknown as Logger).setLevel = (value: OutputLogLevel) => {\n      logger.level = value;\n    };\n\n    // Logger must have `getLevel` method.\n    (logger as unknown as Logger).getLevel = () => {\n      return logger.level as OutputLogLevel;\n    };\n\n    addColors(customLevels.colors);\n\n    return logger;\n  }\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["As you can see, in addition to the usual settings for ",(0,t.jsx)(o.code,{children:"winston"}),", the highlighted lines add two methods to his instance - ",(0,t.jsx)(o.code,{children:"setLevel"})," and ",(0,t.jsx)(o.code,{children:"getLevel"})," - which it does not have, but which are necessary for Ditsmod to interact with it properly."]}),"\n",(0,t.jsx)(o.p,{children:"And now this class can be passed to DI at the application level:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:"import { Logger, rootModule } from '@ditsmod/core';\nimport { PatchLogger } from './patch-logger.js';\n\n@rootModule({\n  // ...\n  providersPerApp: [\n    { token: Logger, useFactory: [PatchLogger, PatchLogger.prototype.patchLogger] }\n  ],\n})\nexport class AppModule {}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["You can view finished examples with loggers ",(0,t.jsx)(o.a,{href:"https://github.com/ditsmod/ditsmod/tree/core-2.54.0/examples/04-logger/src/app/modules",children:"in the Ditsmod repository"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"using-the-logger-in-production-mode",children:"Using the logger in production mode"}),"\n",(0,t.jsx)(o.p,{children:"To change the logging level in production mode, you do not need to change the compiled code. You can create a custom controller, guard it, and then call the appropriate route to change the logging level that you specify in the URL:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:"import { AnyObj, controller, inject, Logger, LogLevel, QUERY_PARAMS, Res, route } from '@ditsmod/core';\n\nimport { requirePermissions } from '../auth/guards-utils.js';\nimport { Permission } from '../auth/types.js';\n\n@controller()\nexport class SomeController {\n  @route('GET', 'set-loglevel', [requirePermissions(Permission.canSetLogLevel)])\n  setLogLevel(@inject(QUERY_PARAMS) queryParams: AnyObj, logger: Logger, res: Res) {\n    const level = queryParams.logLevel as LogLevel;\n    try {\n      logger.setLevel(level);\n      res.send('Setting logLevel successful!');\n    } catch (error: any) {\n      res.send(`Setting logLevel is failed: ${error.message}`);\n    }\n  }\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["As you can see, the route path ",(0,t.jsx)(o.code,{children:"/set-loglevel"})," is created here, with protection through a guard that checks the permissions for such an action. This uses ",(0,t.jsx)(o.code,{children:"requirePermissions()"}),", which you can read about in ",(0,t.jsx)(o.a,{href:"/components-of-ditsmod-app/guards#helpers-for-guards-with-parameters",children:"Helpers for guards with parameters"}),"."]})]})}function c(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>l});var t=n(6540);const r={},s=t.createContext(r);function i(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);