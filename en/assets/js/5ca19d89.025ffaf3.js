"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[30],{6683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(3117),i=(n(7294),n(3905));const o={sidebar_position:21},r="@ditsmod/openapi-validation",l={unversionedId:"native-modules/openapi-validation",id:"native-modules/openapi-validation",title:"@ditsmod/openapi-validation",description:"To provide automatic metadata-based validation in Ditsmod applications for OpenAPI, you can use the @ditsmod/openapi-validation module. Under the hood, this module has an integration with the ajv library, which directly performs the validation just mentioned.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/21-openapi-validation.md",sourceDirName:"02-native-modules",slug:"/native-modules/openapi-validation",permalink:"/en/native-modules/openapi-validation",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/21-openapi-validation.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"@ditsmod/openapi",permalink:"/en/native-modules/openapi"},next:{title:"@ditsmod/testing",permalink:"/en/native-modules/testing"}},p={},d=[{value:"Installation",id:"installation",level:2},{value:"Enable validation and set options",id:"enable-validation-and-set-options",level:2},{value:"Substituting of validation interceptors",id:"substituting-of-validation-interceptors",level:2}],s={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ditsmodopenapi-validation"},"@ditsmod/openapi-validation"),(0,i.kt)("p",null,"To provide automatic metadata-based validation in Ditsmod applications for OpenAPI, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@ditsmod/openapi-validation")," module. Under the hood, this module has an integration with the ",(0,i.kt)("a",{parentName:"p",href:"https://ajv.js.org/guide/getting-started.html"},"ajv")," library, which directly performs the validation just mentioned."),(0,i.kt)("p",null,"Currently, automatic validation only works for HTTP requests that have a media type of ",(0,i.kt)("inlineCode",{parentName:"p"},"application/json")," and do not refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#referenceObject"},"Reference Object"),". Automatic validation works for parameters in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"path"),(0,i.kt)("li",{parentName:"ul"},"query"),(0,i.kt)("li",{parentName:"ul"},"cookie"),(0,i.kt)("li",{parentName:"ul"},"header"),(0,i.kt)("li",{parentName:"ul"},"request's body.")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"After you create ",(0,i.kt)("a",{parentName:"p",href:"/native-modules/openapi"},"OpenAPI documentation"),", you need to import two modules for automatic validation based on it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ditsmod/openapi-validation @ditsmod/i18n\n")),(0,i.kt)("h2",{id:"enable-validation-and-set-options"},"Enable validation and set options"),(0,i.kt)("p",null,"To enable automatic validation in a specific module, it is enough to import ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationModule")," there. You can also pass ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationOptions")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AJV_OPTIONS"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { featureModule, Providers, Status } from '@ditsmod/core';\nimport { ValidationModule, ValidationOptions, AJV_OPTIONS } from '@ditsmod/openapi-validation';\nimport { Options } from 'ajv';\n\n@featureModule({\n  imports: [ValidationModule],\n  providersPerApp: [\n    ...new Providers()\n      .useValue<ValidationOptions>(ValidationOptions, { invalidStatus: Status.UNPROCESSABLE_ENTRY })\n      .useValue<Options>(AJV_OPTIONS, { allErrors: true })\n  ]\n  // ...\n})\nexport class SomeModule {}\n")),(0,i.kt)("h2",{id:"substituting-of-validation-interceptors"},"Substituting of validation interceptors"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ParametersInterceptor")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestBodyInterceptor")," classes are responsible for validating the request body and request parameters. They can be substituted in the ",(0,i.kt)("inlineCode",{parentName:"p"},"providersPerReq")," array at the module or controller level:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { featureModule } from '@ditsmod/core';\nimport { ParametersInterceptor } from '@ditsmod/openapi-validation';\n\nimport { MyInterceptor } from './my.interceptor';\n\n@featureModule({\n  // ...\n  providersPerReq: [\n    { token: ParametersInterceptor, useClass: MyInterceptor }\n  ]\n  // ...\n})\nexport class SomeModule {}\n")),(0,i.kt)("p",null,"Before writing your interceptor for validation, you can first review how is written, for example ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/blob/main/packages/openapi-validation/src/parameters.interceptor.ts"},"ParametersInterceptor"),"."))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),c=i,v=m["".concat(p,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(v,r(r({ref:t},s),{},{components:n})):a.createElement(v,r({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);