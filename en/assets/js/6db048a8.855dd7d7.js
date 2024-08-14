"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[192],{6020:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=r(4848),t=r(8453);const o={sidebar_position:1},i="@ditsmod/body-parser",l={id:"native-modules/body-parser",title:"@ditsmod/body-parser",description:"In this module, integration is done with @ts-stack/body-parser (which is a fork of the well-known ExpressJS package) and @ts-stack/multer (which is also a fork of the well-known ExpressJS package). By default, the following data formats are supported:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/01-body-parser.md",sourceDirName:"02-native-modules",slug:"/native-modules/body-parser",permalink:"/en/native-modules/body-parser",draft:!1,unlisted:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/01-body-parser.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"@ditsmod/routing",permalink:"/en/native-modules/routing"},next:{title:"@ditsmod/session-cookie",permalink:"/en/native-modules/session-cookie"}},d={},a=[{value:"Installation",id:"installation",level:2},{value:"Importing",id:"importing",level:2},{value:"Retrieving the request body",id:"retrieving-the-request-body",level:2},{value:"File Uploads",id:"file-uploads",level:2},{value:"MulterExtendedOptions",id:"multerextendedoptions",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ditsmodbody-parser",children:"@ditsmod/body-parser"})}),"\n",(0,s.jsxs)(n.p,{children:["In this module, integration is done with ",(0,s.jsx)(n.a,{href:"https://github.com/ts-stack/body-parser/",children:"@ts-stack/body-parser"})," (which is a fork of the well-known ",(0,s.jsx)(n.a,{href:"https://github.com/expressjs/body-parser",children:"ExpressJS package"}),") and ",(0,s.jsx)(n.a,{href:"https://github.com/ts-stack/multer",children:"@ts-stack/multer"})," (which is also a fork of the well-known ",(0,s.jsx)(n.a,{href:"https://github.com/expressjs/multer/tree/v2.0.0-rc.4",children:"ExpressJS package"}),"). By default, the following data formats are supported:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"application/json"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"application/x-www-form-urlencoded"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"text/plain"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"application/octet-stream"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"multipart/form-data"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The first four formats in this list are handled by the ",(0,s.jsx)(n.code,{children:"@ts-stack/body-parser"})," package, while the last one is managed by ",(0,s.jsx)(n.code,{children:"@ts-stack/multer"}),", which is used for file uploads. Since the configuration for file uploads can vary significantly from route to route, Ditsmod provides a service to simplify file handling instead of ready-made value."]}),"\n",(0,s.jsxs)(n.p,{children:["For parsing the first four formats, this module adds an interceptor to all routes that have HTTP methods specified in ",(0,s.jsx)(n.code,{children:"bodyParserConfig.acceptMethods"}),", which by default are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"POST"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"PUT"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"PATCH"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A ready-made example of using ",(0,s.jsx)(n.code,{children:"@ditsmod/body-parser"})," can be viewed in the ",(0,s.jsx)(n.a,{href:"https://github.com/ditsmod/ditsmod/tree/main/examples/06-body-parser",children:"Ditsmod repository"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm i @ditsmod/body-parser\n"})}),"\n",(0,s.jsx)(n.h2,{id:"importing",children:"Importing"}),"\n",(0,s.jsxs)(n.p,{children:["To enable ",(0,s.jsx)(n.code,{children:"@ditsmod/body-parser"})," globally, you need to import and export ",(0,s.jsx)(n.code,{children:"BodyParserModule"})," in the root module:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { rootModule } from '@ditsmod/core';\nimport { BodyParserModule } from '@ditsmod/body-parser';\n\n@rootModule({\n  imports: [\n    BodyParserModule,\n    // ...\n  ],\n  exports: [BodyParserModule]\n})\nexport class AppModule {}\n"})}),"\n",(0,s.jsx)(n.p,{children:"In this case, the default settings will work. If you need to change some options, you can do it as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{4-8,12,15}",children:"import { rootModule } from '@ditsmod/core';\nimport { BodyParserModule } from '@ditsmod/body-parser';\n\nconst moduleWithBodyParserConfig = BodyParserModule.withParams({\n  acceptMethods: ['POST'],\n  jsonOptions: { limit: '500kb', strict: false },\n  urlencodedOptions: { extended: true },\n});\n\n@rootModule({\n  imports: [\n    moduleWithBodyParserConfig,\n    // ...\n  ],\n  exports: [moduleWithBodyParserConfig],\n})\nexport class AppModule {}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Another option for passing the configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{6,9-11}",children:"import { rootModule, Providers } from '@ditsmod/core';\nimport { BodyParserModule, BodyParserConfig } from '@ditsmod/body-parser';\n\n@rootModule({\n  imports: [\n    BodyParserModule,\n    // ...\n  ],\n  providersPerApp: new Providers()\n    .useValue<BodyParserConfig>(BodyParserConfig,  { acceptMethods: ['POST'] }),\n  exports: [BodyParserModule]\n})\nexport class AppModule {}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"retrieving-the-request-body",children:"Retrieving the request body"}),"\n",(0,s.jsxs)(n.p,{children:["Depending on whether the controller is ",(0,s.jsx)(n.a,{href:"/components-of-ditsmod-app/controllers-and-services/#what-is-a-controller",children:"singleton"})," or not, the result of the interceptor can be obtained in two ways:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["If the controller is non-singleton, the result can be obtained using the ",(0,s.jsx)(n.code,{children:"HTTP_BODY"})," token:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{11}",children:"import { controller, Res, route, inject } from '@ditsmod/core';\nimport { HTTP_BODY } from '@ditsmod/body-parser';\n\ninterface Body {\n  one: number;\n}\n\n@controller()\nexport class SomeController {\n  @route('POST')\n  ok(@inject(HTTP_BODY) body: Body, res: Res) {\n    res.sendJson(body);\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"If the controller is singleton, the result can be obtained from the context:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{6}",children:"import { controller, route, SingletonRequestContext } from '@ditsmod/core';\n\n@controller({ isSingleton: true })\nexport class SomeController {\n  @route('POST')\n  ok(ctx: SingletonRequestContext) {\n    ctx.sendJson(ctx.body);\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"file-uploads",children:"File Uploads"}),"\n",(0,s.jsxs)(n.p,{children:["Depending on whether the controller is ",(0,s.jsx)(n.a,{href:"/components-of-ditsmod-app/controllers-and-services/#what-is-a-controller",children:"singleton"})," or not, the method of obtaining the parser and the signatures of its methods differ slightly:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["If the controller is not a singleton, you need to request ",(0,s.jsx)(n.code,{children:"MulterParser"})," through DI, after which you can use its methods:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{9}",children:"import { createWriteStream } from 'node:fs';\nimport { controller, Res, route } from '@ditsmod/core';\nimport { MulterParsedForm, MulterParser } from '@ditsmod/body-parser';\n\n@controller()\nexport class SomeController {\n  @route('POST', 'file-upload')\n  async downloadFile(res: Res, parse: MulterParser) {\n    const parsedForm = await parse.array('fieldName', 5);\n    await this.saveFiles(parsedForm);\n    // ...\n    res.send('ok');\n  }\n\n  protected saveFiles(parsedForm: MulterParsedForm) {\n    const promises: Promise<void>[] = [];\n    parsedForm.files.forEach((file) => {\n      const promise = new Promise<void>((resolve, reject) => {\n        const path = `uploaded-files/${file.originalName}`;\n        const writableStream = createWriteStream(path).on('error', reject).on('finish', resolve);\n        file.stream.pipe(writableStream);\n      });\n      promises.push(promise);\n    });\n\n    return Promise.all(promises);\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["If the controller is a singleton, you need to request ",(0,s.jsx)(n.code,{children:"MulterSingletonParser"})," through DI, after which you can use its methods:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{11}",children:"import { createWriteStream } from 'node:fs';\nimport { controller, route, SingletonRequestContext } from '@ditsmod/core';\nimport { MulterParsedForm, MulterSingletonParser } from '@ditsmod/body-parser';\n\n@controller({ isSingleton: true })\nexport class SomeController {\n  constructor(protected parse: MulterSingletonParser) {}\n\n  @route('POST', 'file-upload')\n  async downloadFile(ctx: SingletonRequestContext) {\n    const parsedForm = await this.parse.array(ctx, 'fieldName', 5);\n    await this.saveFiles(parsedForm);\n    // ...\n    ctx.nodeRes.end('ok');\n  }\n\n  protected saveFiles(parsedForm: MulterParsedForm) {\n    const promises: Promise<void>[] = [];\n    parsedForm.files.forEach((file) => {\n      const promise = new Promise<void>((resolve, reject) => {\n        const path = `uploaded-files/${file.originalName}`;\n        const writableStream = createWriteStream(path).on('error', reject).on('finish', resolve);\n        file.stream.pipe(writableStream);\n      });\n      promises.push(promise);\n    });\n\n    return Promise.all(promises);\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"parsedForm"})," object returned by the parser methods will have four properties:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"textFields"})," will contain an object with values from the HTML form's text fields (if any);"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"file"})," will contain an object, which includes the file as a ",(0,s.jsx)(n.code,{children:"Readable"})," stream that can be used to save the file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"files"})," will contain an array of objects, where each element has the type specified in the second point."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"groups"})," will contain an object where each key corresponds to the name of a field in the HTML form, and the content of each property is an array of files with the type specified in the third point."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A maximum of two properties from these four can be filled in one parsing: the ",(0,s.jsx)(n.code,{children:"textFields"})," property and one of the properties: ",(0,s.jsx)(n.code,{children:"file"}),", ",(0,s.jsx)(n.code,{children:"files"}),", or ",(0,s.jsx)(n.code,{children:"groups"}),". Which property will be filled depends on the parser method used."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"single"})," method accepts a single file from the specified form field; note the property names during object destructuring (other properties will be unfilled in this case):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const { textFields, file } = await parse.single('fieldName');\n// OR\nconst { textFields, file } = await parse.single(ctx, 'fieldName'); // For singleton.\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"array"})," method can accept multiple files from the specified form field:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const { textFields, files } = await parse.array('fieldName', 5);\n// OR\nconst { textFields, files } = await parse.array(ctx, 'fieldName', 5); // For singleton.\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"any"})," method returns the same type of data as the ",(0,s.jsx)(n.code,{children:"array"})," method, but it accepts files with any form field names and does not have parameters to limit the maximum number of files (this limit is determined by the general configuration, which will be discussed later):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const { textFields, files } = await parse.any();\n// OR\nconst { textFields, files } = await parse.any(ctx); // For singleton.\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"groups"})," method accepts arrays of files from specified form fields:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const { textFields, groups } = await parse.groups([\n  { name: 'avatar', maxCount: 1 },\n  { name: 'gallery', maxCount: 8 },\n]);\n// OR\nconst { textFields, groups } = await parse.groups(ctx, [\n  { name: 'avatar', maxCount: 1 },\n  { name: 'gallery', maxCount: 8 },\n]); // For singleton.\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"textFields"})," method returns an object only with form fields that do not have ",(0,s.jsx)(n.code,{children:'type="file"'}),"; if there are file fields in the form, this method will throw an error:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const textFields = await parse.textFields();\n// OR\nconst textFields = await parse.textFields(ctx); // For singleton.\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"multerextendedoptions",children:"MulterExtendedOptions"}),"\n",(0,s.jsxs)(n.p,{children:["In modules where ",(0,s.jsx)(n.code,{children:"@ditsmod/body-parser"})," will be used for forms with data in ",(0,s.jsx)(n.code,{children:"multipart/form-data"})," format, you can pass a provider with the token ",(0,s.jsx)(n.code,{children:"MulterExtendedOptions"})," to DI. This class has two more options than the native ",(0,s.jsx)(n.code,{children:"MulterOptions"})," class from ",(0,s.jsx)(n.code,{children:"@ts-stack/multer"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { InputLogLevel, Status } from '@ditsmod/core';\nimport { MulterOptions } from '@ts-stack/multer';\n\nexport class MulterExtendedOptions extends MulterOptions {\n  errorStatus?: Status = Status.BAD_REQUEST;\n  errorLogLevel?: InputLogLevel = 'debug';\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It is recommended to pass the provider with this token at the module level so that it applies to both ",(0,s.jsx)(n.code,{children:"MulterParser"})," and ",(0,s.jsx)(n.code,{children:"MulterSingletonParser"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{4,12}",children:"import { featureModule } from '@ditsmod/core';\nimport { BodyParserModule, MulterExtendedOptions } from '@ditsmod/body-parser';\n\nconst multerOptions: MulterExtendedOptions = { limits: { files: 20 }, errorLogLevel: 'debug' };\n\n@featureModule({\n  imports: [\n    // ...\n    BodyParserModule\n  ],\n  providersPerMod: [\n    { token: MulterExtendedOptions, useValue: multerOptions },\n  ],\n})\nexport class SomeModule {}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(6540);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);