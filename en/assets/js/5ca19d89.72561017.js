"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[211],{3469:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"native-modules/openapi-validation","title":"@ditsmod/openapi-validation","description":"To provide automatic metadata-based validation in Ditsmod applications for OpenAPI, you can use the @ditsmod/openapi-validation module. Under the hood, this module has an integration with the ajv library, which directly performs the validation just mentioned.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/21-openapi-validation.md","sourceDirName":"02-native-modules","slug":"/native-modules/openapi-validation","permalink":"/en/native-modules/openapi-validation","draft":false,"unlisted":false,"editUrl":"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/21-openapi-validation.md","tags":[],"version":"current","sidebarPosition":21,"frontMatter":{"sidebar_position":21},"sidebar":"tutorialSidebar","previous":{"title":"@ditsmod/openapi","permalink":"/en/native-modules/openapi"},"next":{"title":"@ditsmod/testing","permalink":"/en/native-modules/testing"}}');var o=i(4848),a=i(8453);const r={sidebar_position:21},s="@ditsmod/openapi-validation",d={},l=[{value:"Installation",id:"installation",level:2},{value:"Enable validation and set options",id:"enable-validation-and-set-options",level:2},{value:"Substituting of validation interceptors",id:"substituting-of-validation-interceptors",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"ditsmodopenapi-validation",children:"@ditsmod/openapi-validation"})}),"\n",(0,o.jsxs)(t.p,{children:["To provide automatic metadata-based validation in Ditsmod applications for OpenAPI, you can use the ",(0,o.jsx)(t.code,{children:"@ditsmod/openapi-validation"})," module. Under the hood, this module has an integration with the ",(0,o.jsx)(t.a,{href:"https://ajv.js.org/guide/getting-started.html",children:"ajv"})," library, which directly performs the validation just mentioned."]}),"\n",(0,o.jsxs)(t.p,{children:["Currently, automatic validation only works for HTTP requests that have a media type of ",(0,o.jsx)(t.code,{children:"application/json"})," and do not refer to ",(0,o.jsx)(t.a,{href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#referenceObject",children:"Reference Object"}),". Automatic validation works for parameters in:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"path"}),"\n",(0,o.jsx)(t.li,{children:"query"}),"\n",(0,o.jsx)(t.li,{children:"cookie"}),"\n",(0,o.jsx)(t.li,{children:"header"}),"\n",(0,o.jsx)(t.li,{children:"request's body."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(t.p,{children:["After you create ",(0,o.jsx)(t.a,{href:"/native-modules/openapi",children:"OpenAPI documentation"}),", you need to import two modules for automatic validation based on it:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm i @ditsmod/openapi-validation @ditsmod/i18n\n"})}),"\n",(0,o.jsx)(t.h2,{id:"enable-validation-and-set-options",children:"Enable validation and set options"}),"\n",(0,o.jsxs)(t.p,{children:["To enable automatic validation in a specific module, it is enough to import ",(0,o.jsx)(t.code,{children:"ValidationModule"})," there. You can also pass ",(0,o.jsx)(t.code,{children:"ValidationOptions"})," and ",(0,o.jsx)(t.code,{children:"AJV_OPTIONS"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { featureModule, Providers, Status } from '@ditsmod/core';\nimport { ValidationModule, ValidationOptions, AJV_OPTIONS } from '@ditsmod/openapi-validation';\nimport { Options } from 'ajv';\n\n@featureModule({\n  imports: [ValidationModule],\n  providersPerApp: new Providers()\n    .useValue<ValidationOptions>(ValidationOptions, { invalidStatus: Status.UNPROCESSABLE_ENTRY })\n    .useValue<Options>(AJV_OPTIONS, { allErrors: true }),\n  // ...\n})\nexport class SomeModule {}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"substituting-of-validation-interceptors",children:"Substituting of validation interceptors"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"ParametersInterceptor"})," and ",(0,o.jsx)(t.code,{children:"RequestBodyInterceptor"})," classes are responsible for validating the request body and request parameters. They can be substituted in the ",(0,o.jsx)(t.code,{children:"providersPerReq"})," array at the module or controller level:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import { featureModule } from '@ditsmod/core';\nimport { ParametersInterceptor } from '@ditsmod/openapi-validation';\n\nimport { MyInterceptor } from './my.interceptor.js';\n\n@featureModule({\n  // ...\n  providersPerReq: [\n    { token: ParametersInterceptor, useClass: MyInterceptor }\n  ]\n  // ...\n})\nexport class SomeModule {}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Before writing your interceptor for validation, you can first review how is written, for example ",(0,o.jsx)(t.a,{href:"https://github.com/ditsmod/ditsmod/blob/main/packages/openapi-validation/src/parameters.interceptor.ts",children:"ParametersInterceptor"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>s});var n=i(6540);const o={},a=n.createContext(o);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);