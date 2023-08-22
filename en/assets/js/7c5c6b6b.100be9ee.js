"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[607],{8255:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=o(3117),r=(o(7294),o(3905));const i={sidebar_position:8},a="LogMediator",s={unversionedId:"components-of-ditsmod-app/log-mediator",id:"components-of-ditsmod-app/log-mediator",title:"LogMediator",description:"In Ditsmod, you can substitute the default logger with your own logger, and this will allow you to record in your own way even those messages that are issued in @ditsmod/core. But changing the logger does not allow you to change the text of the messages themselves and the level of logging (trace, debug, info, warn, error). LogMediator (or its child class SystemLogMediator) is used for this. Of course, if you have direct access to the code where the logger writes a certain message, then you can change this message on the spot without LogMediator. And if the message is issued by the Ditsmod framework itself or its modules, LogMediator is essential.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/08-log-mediator.md",sourceDirName:"00-components-of-ditsmod-app",slug:"/components-of-ditsmod-app/log-mediator",permalink:"/en/components-of-ditsmod-app/log-mediator",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/08-log-mediator.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/en/components-of-ditsmod-app/extensions"},next:{title:"HttpErrorHandler",permalink:"/en/components-of-ditsmod-app/http-error-handler"}},l={},d=[{value:"Extending LogMediator class",id:"extending-logmediator-class",level:2},{value:"Log filtering",id:"log-filtering",level:2},{value:"Application-level substitute of LogMediator",id:"application-level-substitute-of-logmediator",level:2},{value:"Module-level substitute of LogMediator",id:"module-level-substitute-of-logmediator",level:2}],p={toc:d};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"logmediator"},"LogMediator"),(0,r.kt)("p",null,"In Ditsmod, you can substitute the default logger with your own logger, and this will allow you to record in your own way even those messages that are issued in ",(0,r.kt)("inlineCode",{parentName:"p"},"@ditsmod/core"),". But changing the logger does not allow you to change the text of the messages themselves and the level of logging (trace, debug, info, warn, error). ",(0,r.kt)("inlineCode",{parentName:"p"},"LogMediator")," (or its child class ",(0,r.kt)("inlineCode",{parentName:"p"},"SystemLogMediator"),") is used for this. Of course, if you have direct access to the code where the logger writes a certain message, then you can change this message on the spot without ",(0,r.kt)("inlineCode",{parentName:"p"},"LogMediator"),". And if the message is issued by the Ditsmod framework itself or its modules, ",(0,r.kt)("inlineCode",{parentName:"p"},"LogMediator")," is essential."),(0,r.kt)("p",null,"If you want to write a module for a Ditsmod application to publish on, for example, npmjs.com, it is recommended that you use ",(0,r.kt)("inlineCode",{parentName:"p"},"LogMediator")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"Logger"),", as users will be able to modify the messages that your module writes."),(0,r.kt)("p",null,"In addition to changing the messages and logging level, ",(0,r.kt)("inlineCode",{parentName:"p"},"LogMediator")," also allows you to filter logs by various parameters. For example, if you enable the most verbose ",(0,r.kt)("inlineCode",{parentName:"p"},"trace")," logs level for the logger, Ditsmod will output a lot of detailed information, and the configuration file for ",(0,r.kt)("inlineCode",{parentName:"p"},"LogMediator")," will allow you to filter messages only for certain modules, or logs written by a certain class or with a certain tag."),(0,r.kt)("p",null,"The Ditsmod repository has an example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/tree/main/examples/11-override-core-log-messages"},"11-override-core-log-messages")," that demonstrates several uses of ",(0,r.kt)("inlineCode",{parentName:"p"},"LogMediator"),". To try this example, you can first clone the repository and install the dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ditsmod/ditsmod.git\ncd ditsmod\nyarn\ncd examples/11-override-core-log-messages\nyarn start\n")),(0,r.kt)("p",null,"After that, you can directly view and experiment with this example in your editor."),(0,r.kt)("h2",{id:"extending-logmediator-class"},"Extending LogMediator class"),(0,r.kt)("p",null,"Since this example extends the class, it uses the recommended TypeScript setting in ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    // ...\n    "noImplicitOverride": true,\n    // ...\n  },\n  // ...\n}\n')),(0,r.kt)("p",null,"This feature has been available in TypeScript since version 4.3, it allows you to make your code more readable by not allowing you to override properties and methods of the parent class without the word ",(0,r.kt)("inlineCode",{parentName:"p"},"override"),". On the other hand, if a method that is ",(0,r.kt)("inlineCode",{parentName:"p"},"override")," marked in the child class disappears in the parent class, TypeScript will also throw an error with the corresponding hint."),(0,r.kt)("p",null,"Now let's take a look at ",(0,r.kt)("inlineCode",{parentName:"p"},"MyLogMediator"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { SystemLogMediator, InputLogFilter } from \'@ditsmod/core\';\n\nexport class MyLogMediator extends SystemLogMediator {\n  /**\n   * Here host: "${host}", and here port: "${port}"\n   */\n  override serverListen(self: object, host: string, port: number) {\n    const className = self.constructor.name;\n    const inputLogFilter = new InputLogFilter();\n    inputLogFilter.className = className;\n    this.setLog(\'info\', inputLogFilter, `Here host: "${host}", and here port: "${port}"`);\n  }\n}\n')),(0,r.kt)("p",null,"As you can see, ",(0,r.kt)("inlineCode",{parentName:"p"},"MyLogMediator")," extends ",(0,r.kt)("inlineCode",{parentName:"p"},"LogMediator")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"serverListen()")," method is marked with the ",(0,r.kt)("inlineCode",{parentName:"p"},"override")," keyword because it overrides a parent method with the exact same name. The text of the message that will be recorded in the logs is written in the comments to the method. Almost all ",(0,r.kt)("inlineCode",{parentName:"p"},"SystemLogMediator")," methods pass ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," of the class instance where ",(0,r.kt)("inlineCode",{parentName:"p"},"SystemLogMediator")," is used as the first argument, so that you can easily get the name of that class. The rest of the arguments are arbitrary, everything depends on the context of using these methods."),(0,r.kt)("p",null,"The result can be seen if you run the application with the ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start")," command, after which you should receive exactly the message that was generated in this ",(0,r.kt)("inlineCode",{parentName:"p"},"myLogMediator.serverListen()")," method."),(0,r.kt)("h2",{id:"log-filtering"},"Log filtering"),(0,r.kt)("p",null,"As you can see from the previous example, ",(0,r.kt)("inlineCode",{parentName:"p"},"myLogMediator.serverListen()")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"setLog()")," method and the ",(0,r.kt)("inlineCode",{parentName:"p"},"InputLogFilter")," class, which have the following types:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"setLog<T extends InputLogFilter>(level: LogLevel, inputLogFilter: T, msg: any): void;\n\nclass InputLogFilter {\n  className?: string;\n  tags?: string[];\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"InputLogFilter")," instance is used as a configuration for further log filtering. To see how this filter works, first change the log output level to ",(0,r.kt)("inlineCode",{parentName:"p"},"trace")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"AppModule"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},".useLogConfig({ level: 'trace' }, { modulesNames: ['OtherModule'] })\n")),(0,r.kt)("p",null,"Then run the application with the command ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start"),", after which you should see logs only from the ",(0,r.kt)("inlineCode",{parentName:"p"},"OtherModule")," module. If you remove the filter with ",(0,r.kt)("inlineCode",{parentName:"p"},"OtherModule"),", you will see a lot of detailed information from all modules."),(0,r.kt)("h2",{id:"application-level-substitute-of-logmediator"},"Application-level substitute of LogMediator"),(0,r.kt)("p",null,"If you look at ",(0,r.kt)("inlineCode",{parentName:"p"},"AppModule"),", you can see how ",(0,r.kt)("inlineCode",{parentName:"p"},"LogMediator")," is substituted by ",(0,r.kt)("inlineCode",{parentName:"p"},"MyLogMediator"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { LogMediator } from '@ditsmod/core';\n\nimport { MyLogMediator } from './my-log-mediator';\n// ...\n  providersPerApp: [\n    { token: LogMediator, useClass: MyLogMediator },\n    MyLogMediator,\n  ],\n// ...\nexport class AppModule {}\n")),(0,r.kt)("p",null,"In this case, the first element of the array ",(0,r.kt)("inlineCode",{parentName:"p"},"providersPerApp")," will allow using ",(0,r.kt)("inlineCode",{parentName:"p"},"MyLogMediator")," in the Ditsmod core code, the second element - will allow requesting the instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"MyLogMediator")," in the constructors of controllers or services of your application."),(0,r.kt)("h2",{id:"module-level-substitute-of-logmediator"},"Module-level substitute of LogMediator"),(0,r.kt)("p",null,"As mentioned at the beginning, if you plan to publish your module to other users, it is recommended to use ",(0,r.kt)("inlineCode",{parentName:"p"},"LogMediator")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"Logger"),". In this case, users will be able to change the messages written by your module, as well as filter them."),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"SomeModule")," has ",(0,r.kt)("inlineCode",{parentName:"p"},"SomeService"),", which uses ",(0,r.kt)("inlineCode",{parentName:"p"},"SomeLogMediator"),". You can imagine that ",(0,r.kt)("inlineCode",{parentName:"p"},"SomeModule"),' is an external module that is supposedly installed via a package manager (npm, yarn, etc.) and therefore you have "read-only" access to it. ',(0,r.kt)("inlineCode",{parentName:"p"},"SomeModule")," is imported into ",(0,r.kt)("inlineCode",{parentName:"p"},"OtherModule"),", which calls the external service ",(0,r.kt)("inlineCode",{parentName:"p"},"SomeService"),", which in turn calls ",(0,r.kt)("inlineCode",{parentName:"p"},"SomeLogMediator"),"."),(0,r.kt)("p",null,"To change messages from an external service, ",(0,r.kt)("inlineCode",{parentName:"p"},"SomeLogMediator")," has been extended in ",(0,r.kt)("inlineCode",{parentName:"p"},"OtherModule")," and the method that works in ",(0,r.kt)("inlineCode",{parentName:"p"},"SomeService")," has been overrided. After that, ",(0,r.kt)("inlineCode",{parentName:"p"},"SomeLogMediator")," was substituted to ",(0,r.kt)("inlineCode",{parentName:"p"},"OtherLogMediator"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { featureModule } from '@ditsmod/core';\n\nimport { SomeModule } from '../some/some.module';\nimport { SomeLogMediator } from '../some/some-log-mediator';\nimport { OtherController } from './other.controller';\nimport { OtherLogMediator } from './other-log-mediator';\n\n@featureModule({\n  imports: [SomeModule],\n  controllers: [OtherController],\n  providersPerMod: [{ token: SomeLogMediator, useClass: OtherLogMediator }],\n})\nexport class OtherModule {}\n")))}m.isMDXComponent=!0},3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>c});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(o),c=r,g=u["".concat(l,".").concat(c)]||u[c]||m[c]||i;return o?n.createElement(g,a(a({ref:t},p),{},{components:o})):n.createElement(g,a({ref:t},p))}));function c(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);