"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[863],{9866:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=r(4848),o=r(8453);const s={sidebar_position:20},a="@ditsmod/openapi",i={id:"native-modules/openapi",title:"@ditsmod/openapi",description:"You can use the @ditsmod/openapi module to create OpenAPI documentation.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/20-openapi.md",sourceDirName:"02-native-modules",slug:"/native-modules/openapi",permalink:"/en/native-modules/openapi",draft:!1,unlisted:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/20-openapi.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"@ditsmod/i18n",permalink:"/en/native-modules/i18n"},next:{title:"@ditsmod/openapi-validation",permalink:"/en/native-modules/openapi-validation"}},d={},c=[{value:"Installation",id:"installation",level:2},{value:"Creation of documentation",id:"creation-of-documentation",level:2},{value:"Passing Operation Object parameters",id:"passing-operation-object-parameters",level:2},{value:"Creation of TypeScript models",id:"creation-of-typescript-models",level:2},{value:"Using TypeScript models",id:"using-typescript-models",level:2},{value:"requestBody and responses content",id:"requestbody-and-responses-content",level:3},{value:"OpenAPI module-level options",id:"openapi-module-level-options",level:2},{value:"Helpers that return an entire Operation Object",id:"helpers-that-return-an-entire-operation-object",level:2},{value:"Special decorator for guards",id:"special-decorator-for-guards",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"ditsmodopenapi",children:"@ditsmod/openapi"})}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"@ditsmod/openapi"})," module to create ",(0,t.jsx)(n.a,{href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md",children:"OpenAPI"})," documentation."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm i @ditsmod/openapi\n"})}),"\n",(0,t.jsx)(n.h2,{id:"creation-of-documentation",children:"Creation of documentation"}),"\n",(0,t.jsxs)(n.p,{children:["To create individual routes, use the ",(0,t.jsx)(n.code,{children:"oasRoute"})," decorator, in which the fourth or third parameter (if there are no guards) is the so-called ",(0,t.jsx)(n.a,{href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operationObject",children:"Operation Object"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"{8-18}",children:"import { controller } from '@ditsmod/core';\nimport { oasRoute } from '@ditsmod/openapi';\n\n@controller()\nexport class SomeController {\n  // ...\n  @oasRoute('GET', 'users/:username', {\n    parameters: [\n      {\n        name: 'username',\n        in: 'path',\n        required: true,\n        description: 'Username of the profile to get',\n        schema: {\n          type: 'string',\n        },\n      },\n    ],\n  })\n  async getSome() {\n    // ...\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Ditsmod has good support for TypeScript models for OpenAPI v3.1.0, including Operation Object, but it is not necessary to manually write the entire Operation Object directly in the code for each route. It is better to use helpers that will generate the necessary code for you, and also reduce the number of errors due to even better TypeScript support. Ditsmod has several such helpers: ",(0,t.jsx)(n.code,{children:"getParams()"}),", ",(0,t.jsx)(n.code,{children:"getContent()"}),", ",(0,t.jsx)(n.code,{children:"Parameters"}),", ",(0,t.jsx)(n.code,{children:"Content"}),". They are all imported from the ",(0,t.jsx)(n.code,{children:"@ditsmod/openapi"})," module."]}),"\n",(0,t.jsx)(n.h2,{id:"passing-operation-object-parameters",children:"Passing Operation Object parameters"}),"\n",(0,t.jsxs)(n.p,{children:["In the following example, with the helper ",(0,t.jsx)(n.code,{children:"getParams()"}),", almost everything that we wrote manually for ",(0,t.jsx)(n.code,{children:"parameters"})," in the previous example is recorded:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"{8}",children:"import { controller } from '@ditsmod/core';\nimport { oasRoute, getParams } from '@ditsmod/openapi';\n\n@controller()\nexport class SomeController {\n  // ...\n  @oasRoute('GET', 'users/:username', {\n    parameters: getParams('path', true, 'username'),\n  })\n  async getSome() {\n    // ...\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The data type for the ",(0,t.jsx)(n.code,{children:"username"})," parameter and its description are missing here. We recommend using a TypeScript class as a model so that you can then refer to it using helpers that can read its metadata and return ready-made JSON objects."]}),"\n",(0,t.jsx)(n.h2,{id:"creation-of-typescript-models",children:"Creation of TypeScript models"}),"\n",(0,t.jsx)(n.p,{children:"The following example shows a model with three parameters:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { property } from '@ditsmod/openapi';\n\nclass Params {\n  @property({ description: 'Username of the profile to get.' })\n  username: string;\n\n  @property({ minimum: 1, maximum: 100, description: 'Page number.' })\n  page: number;\n\n  @property()\n  hasName: boolean;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As you can see, to attach metadata to the model, the ",(0,t.jsx)(n.code,{children:"@property()"})," decorator is used, where you can pass ",(0,t.jsx)(n.a,{href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#schemaObject",children:"Schema Object"})," as the first argument."]}),"\n",(0,t.jsxs)(n.p,{children:["Note that in this case the ",(0,t.jsx)(n.code,{children:"type"})," property is not specified in the metadata, as the types specified here are automatically read by helpers. However, not all types available in TypeScript can be read. For example, helpers will not be able to automatically see what type of array you are passing. This is exactly the case with ",(0,t.jsx)(n.code,{children:"enum"}),". Also, helpers do not see whether an object's property is optional or not."]}),"\n",(0,t.jsxs)(n.p,{children:["The array type or ",(0,t.jsx)(n.code,{children:"enum"})," can be passed as the second parameter to the ",(0,t.jsx)(n.code,{children:"@property()"})," decorator:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { property } from '@ditsmod/openapi';\n\nenum NumberEnum {\n  one,\n  two,\n  three,\n}\n\nclass Params {\n  @property({}, { enum: NumberEnum })\n  property1: NumberEnum;\n\n  @property({}, { array: String })\n  property2: string[];\n\n  @property({}, { array: [String, Number] })\n  property3: (string | number)[];\n\n  @property({}, { array: [[String]] }) // Array in array\n  property4: string[][];\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["References of some models to others are quite readable. In the following example, ",(0,t.jsx)(n.code,{children:"Model2"})," has a reference to ",(0,t.jsx)(n.code,{children:"Model1"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { property } from '@ditsmod/openapi';\n\nexport class Model1 {\n  @property()\n  property1: string;\n}\n\nexport class Model2 {\n  @property()\n  model1: Model1;\n\n  @property({}, Model1)\n  arrModel1: Model1[];\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"using-typescript-models",children:"Using TypeScript models"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"getParams()"})," helper allows you to use models, and if you make a mistake in a parameter name, TypeScript will tell you about it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"{10}",children:"import { controller } from '@ditsmod/core';\nimport { oasRoute, getParams } from '@ditsmod/openapi';\n\nimport { Params } from './params.js';\n\n@controller()\nexport class SomeController {\n  // ...\n  @oasRoute('GET', '', {\n    parameters: getParams('path', true, Params, 'username'),\n  })\n  async getSome() {\n    // ...\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here ",(0,t.jsx)(n.code,{children:"Params"})," is a class used as a parameter model."]}),"\n",(0,t.jsxs)(n.p,{children:["But the helper ",(0,t.jsx)(n.code,{children:"getParams()"})," is not intended to be used simultaneously for mandatory and optional parameters. It also cannot pass a parameter description that differs from the parameter description in the parameter model. For such purposes, you can use another helper - ",(0,t.jsx)(n.code,{children:"Parameters"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"{10-13}",children:"import { controller } from '@ditsmod/core';\nimport { oasRoute, Parameters } from '@ditsmod/openapi';\n\nimport { Params } from './params.js';\n\n@controller()\nexport class SomeController {\n  // ...\n  @oasRoute('GET', '', {\n    parameters: new Parameters()\n      .required('path', Params, 'username')\n      .optional('query', Params, 'page', 'hasName')\n      .getParams(),\n  })\n  async getSome() {\n    // ...\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"requestbody-and-responses-content",children:"requestBody and responses content"}),"\n",(0,t.jsxs)(n.p,{children:["Data models are also used to describe the content of ",(0,t.jsx)(n.code,{children:"requestBody"}),", but there is one slight difference compared to parameters. By default, all model properties are optional, and to mark a particular property as required, you need to use the ",(0,t.jsx)(n.code,{children:"REQUIRED"})," constant:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { property, REQUIRED } from '@ditsmod/openapi';\n\nclass Model1 {\n  @property()\n  property1: string;\n  @property({ [REQUIRED]: true })\n  property2: number;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If this model will be used to describe ",(0,t.jsx)(n.code,{children:"requestBody"}),", then ",(0,t.jsx)(n.code,{children:"property2"})," in it will be required. But if this model is used to describe parameters, the ",(0,t.jsx)(n.code,{children:"REQUIRED"})," marker will be ignored:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"{4}",children:"class SomeController {\n  // ...\n  @oasRoute('GET', 'users', {\n    parameters: getParams('query', false, Model1, 'property2'),\n  })\n  async getSome() {\n    // ...\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To describe the content in ",(0,t.jsx)(n.code,{children:"requestBody"})," and ",(0,t.jsx)(n.code,{children:"responses"}),", there is also a helper ",(0,t.jsx)(n.code,{children:"getContent()"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"{12}",children:"import { controller, Status } from '@ditsmod/core';\nimport { oasRoute, getContent } from '@ditsmod/openapi';\n\nimport { SomeModel } from '#models/some.js';\n\n@controller()\nexport class SomeController {\n  // ...\n  @oasRoute('POST', '', {\n    requestBody: {\n      description: 'All properties are taken from Model1.',\n      content: getContent({ mediaType: 'application/json', model: Model1 }),\n    },\n  })\n  async postSome() {\n    // ...\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"getContent()"})," helper accepts a shortened version of the data when describing a single ",(0,t.jsx)(n.code,{children:"mediaType"})," variant. If you need to describe a larger number of ",(0,t.jsx)(n.code,{children:"mediaType"}),", you can use the ",(0,t.jsx)(n.code,{children:"Content"})," class:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"{10-18}",children:"import { controller, Status } from '@ditsmod/core';\nimport { oasRoute, Content } from '@ditsmod/openapi';\n\nimport { SomeModel } from '#models/some.js';\n\n@controller()\nexport class SomeController {\n  // ...\n  @oasRoute('GET', '', {\n    responses: {\n      [Status.OK]: {\n        description: 'Description of content with this status',\n        content: new Content()\n          .set({ mediaType: 'application/xml', model: SomeModel })\n          .set({ mediaType: 'application/json', model: SomeModel })\n          .get(),\n      },\n    },\n  })\n  async getSome() {\n    // ...\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"openapi-module-level-options",children:"OpenAPI module-level options"}),"\n",(0,t.jsx)(n.p,{children:"Tags and parameters can be passed at the module level:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { OasOptions } from '@ditsmod/openapi';\n\n@featureModule({\n  // ...\n  extensionsMeta: {\n    oasOptions: {\n      tags: ['i18n'],\n      paratemers: new Parameters().optional('query', Params, 'lcl').describe('Internalization').getParams(),\n    } as OasOptions,\n  },\n})\nexport class I18nModule {}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"helpers-that-return-an-entire-operation-object",children:"Helpers that return an entire Operation Object"}),"\n",(0,t.jsxs)(n.p,{children:["The previous examples showed helpers that return parts of the ",(0,t.jsx)(n.a,{href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#referenceObject",children:"Operation Object"}),", but of course you can create your own helpers that return the entire Operation Object. One of the examples of the use of such helpers is shown in the ",(0,t.jsx)(n.a,{href:"https://github.com/ditsmod/realworld/blob/e8947f8767/packages/server/src/app/modules/routed/profiles/profiles.controller.ts#L24-L30",children:"RealWorld"})," repository."]}),"\n",(0,t.jsx)(n.h2,{id:"special-decorator-for-guards",children:"Special decorator for guards"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"@ditsmod/openapi"})," module has a special ",(0,t.jsx)(n.code,{children:"oasGuard"})," decorator that allows you to attach OpenAPI metadata behind guards:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { CanActivate } from '@ditsmod/core';\nimport { oasGuard } from '@ditsmod/openapi';\n\n@oasGuard({\n  tags: ['withBasicAuth'],\n  securitySchemeObject: {\n    type: 'http',\n    scheme: 'basic',\n    description:\n      'Enter username: `demo`, password: `p@55w0rd`. For more info see ' +\n      '[Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)',\n  },\n  responses: {\n    [Status.UNAUTHORIZED]: {\n      $ref: '#/components/responses/UnauthorizedError',\n    },\n  },\n})\nexport class BasicGuard implements CanActivate {\n  // ...\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["At the moment, the ",(0,t.jsx)(n.code,{children:"oasGuard"})," decorator accepts the following data type:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface OasGuardMetadata {\n  securitySchemeObject: XSecuritySchemeObject;\n  responses?: XResponsesObject;\n  tags?: string[];\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Where ",(0,t.jsx)(n.code,{children:"securitySchemeObject"})," is of type ",(0,t.jsx)(n.a,{href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#securitySchemeObject",children:"Security Scheme Object"})," and ",(0,t.jsx)(n.code,{children:"responses"})," is of type ",(0,t.jsx)(n.a,{href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#responsesObject",children:"Responses Object"}),"."]}),"\n",(0,t.jsx)(n.p,{children:'This guards are used in exactly the same way as "normal" guards:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { controller } from '@ditsmod/core';\nimport { oasRoute } from '@ditsmod/openapi';\n\n@controller()\nexport class SomeController {\n  // ...\n  @oasRoute('GET', 'users/:username', [BasicGuard])\n  async getSome() {\n    // ...\n  }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(6540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);