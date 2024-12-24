"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[438],{3842:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"components-of-ditsmod-app/log-mediator","title":"LogMediator","description":"In Ditsmod application, you can substitute the default logger with your own logger, and this will allow you to record in your own way even those messages that are issued in @ditsmod/core. But changing the logger does not allow you to change the text of the messages themselves and the level of logging (trace, debug, info, warn, error). LogMediator (or its child class SystemLogMediator) is used for this. Of course, if you have direct access to the code where the logger writes a certain message, then you can change this message on the spot without LogMediator. And if the message is issued by the Ditsmod framework itself or its modules, LogMediator is essential.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/09-log-mediator.md","sourceDirName":"00-components-of-ditsmod-app","slug":"/components-of-ditsmod-app/log-mediator","permalink":"/en/components-of-ditsmod-app/log-mediator","draft":false,"unlisted":false,"editUrl":"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/09-log-mediator.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"tutorialSidebar","previous":{"title":"Logger","permalink":"/en/components-of-ditsmod-app/logger"},"next":{"title":"HttpErrorHandler","permalink":"/en/components-of-ditsmod-app/http-error-handler"}}');var i=t(4848),r=t(8453);const n={sidebar_position:9},d="LogMediator",a={},l=[{value:"Extending LogMediator class",id:"extending-logmediator-class",level:2},{value:"Application-level substitute of LogMediator",id:"application-level-substitute-of-logmediator",level:2},{value:"Module-level substitute of LogMediator",id:"module-level-substitute-of-logmediator",level:2}];function c(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"logmediator",children:"LogMediator"})}),"\n",(0,i.jsxs)(o.p,{children:["In Ditsmod application, you can substitute the default logger with your own logger, and this will allow you to record in your own way even those messages that are issued in ",(0,i.jsx)(o.code,{children:"@ditsmod/core"}),". But changing the logger does not allow you to change the text of the messages themselves and the level of logging (trace, debug, info, warn, error). ",(0,i.jsx)(o.code,{children:"LogMediator"})," (or its child class ",(0,i.jsx)(o.code,{children:"SystemLogMediator"}),") is used for this. Of course, if you have direct access to the code where the logger writes a certain message, then you can change this message on the spot without ",(0,i.jsx)(o.code,{children:"LogMediator"}),". And if the message is issued by the Ditsmod framework itself or its modules, ",(0,i.jsx)(o.code,{children:"LogMediator"})," is essential."]}),"\n",(0,i.jsxs)(o.p,{children:["If you want to write a module for a Ditsmod application to publish on, for example, npmjs.com, it is recommended that you use ",(0,i.jsx)(o.code,{children:"LogMediator"})," instead of ",(0,i.jsx)(o.code,{children:"Logger"}),", as users will be able to modify the messages that your module writes."]}),"\n",(0,i.jsxs)(o.p,{children:["The Ditsmod repository has an example ",(0,i.jsx)(o.a,{href:"https://github.com/ditsmod/ditsmod/tree/main/examples/11-override-core-log-messages",children:"11-override-core-log-messages"})," that demonstrates several uses of ",(0,i.jsx)(o.code,{children:"LogMediator"}),". To try this example, you can first clone the repository and install the dependencies:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"git clone https://github.com/ditsmod/ditsmod.git\ncd ditsmod\nnpm i\ncd examples/11-override-core-log-messages\nnpm start\n"})}),"\n",(0,i.jsx)(o.p,{children:"After that, you can directly view and experiment with this example in your editor."}),"\n",(0,i.jsx)(o.h2,{id:"extending-logmediator-class",children:"Extending LogMediator class"}),"\n",(0,i.jsxs)(o.p,{children:["Since this example extends the class, it uses the recommended TypeScript setting in ",(0,i.jsx)(o.code,{children:"tsconfig.json"}),":"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    // ...\n    "noImplicitOverride": true,\n    // ...\n  },\n  // ...\n}\n'})}),"\n",(0,i.jsxs)(o.p,{children:["This feature has been available in TypeScript since version 4.3, it allows you to make your code more readable by not allowing you to override properties and methods of the parent class without the word ",(0,i.jsx)(o.code,{children:"override"}),". On the other hand, if a method that is ",(0,i.jsx)(o.code,{children:"override"})," marked in the child class disappears in the parent class, TypeScript will also throw an error with the corresponding hint."]}),"\n",(0,i.jsxs)(o.p,{children:["Now let's take a look at ",(0,i.jsx)(o.code,{children:"MyLogMediator"}),":"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-ts",children:'import { injectable, SystemLogMediator } from \'@ditsmod/core\';\n\n@injectable()\nexport class MyLogMediator extends SystemLogMediator {\n  /**\n   * Custom message: here host: "${host}", and here port: "${port}"\n   */\n  override serverListen(self: object, host: string, port: number) {\n    this.setLog(\'info\', `Custom message: here host: "${host}", and here port: "${port}"`);\n  }\n}\n'})}),"\n",(0,i.jsxs)(o.p,{children:["As you can see, ",(0,i.jsx)(o.code,{children:"MyLogMediator"})," extends ",(0,i.jsx)(o.code,{children:"LogMediator"})," and the ",(0,i.jsx)(o.code,{children:"serverListen()"})," method is marked with the ",(0,i.jsx)(o.code,{children:"override"})," keyword because it overrides a parent method with the exact same name. The text of the message that will be recorded in the logs is written in the comments to the method. Almost all ",(0,i.jsx)(o.code,{children:"SystemLogMediator"})," methods pass ",(0,i.jsx)(o.code,{children:"this"})," of the class instance where ",(0,i.jsx)(o.code,{children:"SystemLogMediator"})," is used as the first argument, so that you can easily get the name of that class. The rest of the arguments are arbitrary, everything depends on the context of using these methods."]}),"\n",(0,i.jsxs)(o.p,{children:["The result can be seen if you run the application with the ",(0,i.jsx)(o.code,{children:"npm start"})," command, after which you should receive exactly the message that was generated in this ",(0,i.jsx)(o.code,{children:"myLogMediator.serverListen()"})," method."]}),"\n",(0,i.jsx)(o.h2,{id:"application-level-substitute-of-logmediator",children:"Application-level substitute of LogMediator"}),"\n",(0,i.jsxs)(o.p,{children:["If you look at ",(0,i.jsx)(o.code,{children:"AppModule"}),", you can see how ",(0,i.jsx)(o.code,{children:"LogMediator"})," is substituted by ",(0,i.jsx)(o.code,{children:"MyLogMediator"}),":"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-ts",metastring:"{8-9}",children:"import { SystemLogMediator, rootModule } from '@ditsmod/core';\n\nimport { MyLogMediator } from './my-log-mediator.js';\n\n@rootModule({\n// ...\n  providersPerApp: [\n    { token: SystemLogMediator, useClass: MyLogMediator },\n    MyLogMediator,\n  ],\n})\nexport class AppModule {}\n"})}),"\n",(0,i.jsxs)(o.p,{children:["In this case, the first element of the array ",(0,i.jsx)(o.code,{children:"providersPerApp"})," will allow using ",(0,i.jsx)(o.code,{children:"MyLogMediator"})," in the Ditsmod core code, the second element - will allow requesting the instance of ",(0,i.jsx)(o.code,{children:"MyLogMediator"})," in the constructors of controllers or services of your application."]}),"\n",(0,i.jsxs)(o.p,{children:["Keep in mind that such an application-level substitution works without additional settings only in the root module. If you do this in a feature module, you will additionally have ",(0,i.jsx)(o.a,{href:"/developer-guides/providers-collisions/",children:"to resolve the provider collision"})," in the root module (although this is quite simple)."]}),"\n",(0,i.jsx)(o.h2,{id:"module-level-substitute-of-logmediator",children:"Module-level substitute of LogMediator"}),"\n",(0,i.jsxs)(o.p,{children:["As mentioned at the beginning, if you plan to publish your module to other users, it is recommended to use ",(0,i.jsx)(o.code,{children:"LogMediator"})," instead of ",(0,i.jsx)(o.code,{children:"Logger"}),". In this case, users will be able to change the messages written by your module."]}),"\n",(0,i.jsxs)(o.p,{children:["To change messages from an external service, ",(0,i.jsx)(o.code,{children:"SomeLogMediator"})," has been extended in ",(0,i.jsx)(o.code,{children:"OtherModule"})," and the method that works in ",(0,i.jsx)(o.code,{children:"SomeService"})," has been overrided. After that, ",(0,i.jsx)(o.code,{children:"SomeLogMediator"})," was substituted to ",(0,i.jsx)(o.code,{children:"OtherLogMediator"}),":"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-ts",children:"import { featureModule } from '@ditsmod/core';\n\nimport { SomeModule } from '../some/some.module.js';\nimport { SomeLogMediator } from '../some/some-log-mediator.js';\nimport { OtherController } from './other.controller.js';\nimport { OtherLogMediator } from './other-log-mediator.js';\n\n@featureModule({\n  imports: [SomeModule],\n  controllers: [OtherController],\n  providersPerMod: [{ token: SomeLogMediator, useClass: OtherLogMediator }],\n})\nexport class OtherModule {}\n"})})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>n,x:()=>d});var s=t(6540);const i={},r=s.createContext(i);function n(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);