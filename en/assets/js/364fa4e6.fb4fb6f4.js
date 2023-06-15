"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[611],{2394:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(3117),a=(r(7294),r(3905));const o={sidebar_position:5},s="Guards",i={unversionedId:"components-of-ditsmod-app/guards",id:"components-of-ditsmod-app/guards",title:"Guards",description:"If you want to restrict access to certain routes, you can use guards. You can view a finished example of an application with a guards in the examples folder or in RealWorld example.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/05-guards.md",sourceDirName:"00-components-of-ditsmod-app",slug:"/components-of-ditsmod-app/guards",permalink:"/en/components-of-ditsmod-app/guards",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/00-components-of-ditsmod-app/05-guards.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"HTTP Interceptors",permalink:"/en/components-of-ditsmod-app/http-interceptors"},next:{title:"Collision of providers",permalink:"/en/components-of-ditsmod-app/providers-collisions"}},l={},u=[{value:"Use of guards",id:"use-of-guards",level:2},{value:"Guards with parameters",id:"guards-with-parameters",level:2},{value:"Helpers for guards with parameters",id:"helpers-for-guards-with-parameters",level:2},{value:"Passing guards to injectors",id:"passing-guards-to-injectors",level:2},{value:"Setting guards on the imported module",id:"setting-guards-on-the-imported-module",level:2}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"guards"},"Guards"),(0,a.kt)("p",null,"If you want to restrict access to certain routes, you can use guards. You can view a finished example of an application with a guards in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/tree/main/examples/03-route-guards"},"examples")," folder or in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/realworld/blob/main/packages/server/src/app/modules/service/auth/bearer.guard.ts"},"RealWorld example"),"."),(0,a.kt)("p",null,"Any guard is a ",(0,a.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/dependency-injection#providers"},"DI provider")," passed to request-scoped injectors. Each guard must be a class implementing the ",(0,a.kt)("inlineCode",{parentName:"p"},"CanActivate")," interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface CanActivate {\n  canActivate(params?: any[]): boolean | number | Promise<boolean | number>;\n}\n")),(0,a.kt)("p",null,"For example, it can be done like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{9-11}","{9-11}":!0},"import { injectable, CanActivate } from '@ditsmod/core';\n\nimport { AuthService } from './auth.service';\n\n@injectable()\nexport class AuthGuard implements CanActivate {\n  constructor(private authService: AuthService) {}\n\n  async canActivate() {\n    return Boolean(await this.authService.updateAndGetSession());\n  }\n}\n")),(0,a.kt)("p",null,"It is recommended that guard files end with ",(0,a.kt)("inlineCode",{parentName:"p"},"*.guard.ts")," and their class names end with ",(0,a.kt)("inlineCode",{parentName:"p"},"*Guard"),"."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"canActivate()")," returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise<true>"),", means Ditsmod will process the corresponding route with this guard;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"false")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise<false>"),", so the response to the request will contain a 401 status and route processing\nthere will be no from the controller;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise<number>")," is interpreted by Ditsmod as a status number (403, 401, etc.) that should be returned in response to an HTTP request.")),(0,a.kt)("h2",{id:"use-of-guards"},"Use of guards"),(0,a.kt)("p",null,"The guards are passed to the controllers in the array in the third parameter of the ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," decorator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7}","{7}":!0},"import { controller, Res, route } from '@ditsmod/core';\n\nimport { AuthGuard } from './auth.guard';\n\n@controller()\nexport class SomeController {\n  @route('GET', 'some-url', [AuthGuard])\n  tellHello(res: Res) {\n    res.send('Hello admin!');\n  }\n}\n")),(0,a.kt)("h2",{id:"guards-with-parameters"},"Guards with parameters"),(0,a.kt)("p",null,"The guard in the ",(0,a.kt)("inlineCode",{parentName:"p"},"canActivate()")," method has one parameter. Arguments for this parameter can be passed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," decorator in an array where a particular guard comes first."),(0,a.kt)("p",null,"Let's consider such an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{8}","{8}":!0},"import { controller, Res, route } from '@ditsmod/core';\n\nimport { PermissionsGuard } from './permissions.guard';\nimport { Permission } from './permission';\n\n@controller()\nexport class SomeController {\n  @route('GET', 'some-url', [[PermissionsGuard, Permission.canActivateAdministration]])\n  tellHello(res: Res) {\n    res.send('Hello admin!');\n  }\n}\n")),(0,a.kt)("p",null,"As you can see, in place of the third parameter in ",(0,a.kt)("inlineCode",{parentName:"p"},"route"),", an array of arrays is passed, where ",(0,a.kt)("inlineCode",{parentName:"p"},"PermissionsGuard")," is specified in the first place, followed by arguments for it. In this case, ",(0,a.kt)("inlineCode",{parentName:"p"},"PermissionsGuard")," will receive these arguments in its ",(0,a.kt)("inlineCode",{parentName:"p"},"canActivate()")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{10}","{10}":!0},"import { injectable, CanActivate, Status } from '@ditsmod/core';\n\nimport { AuthService } from './auth.service';\nimport { Permission } from './permission';\n\n@injectable()\nexport class PermissionsGuard implements CanActivate {\n  constructor(private authService: AuthService) {}\n\n  async canActivate(params?: Permission[]) {\n    if (await this.authService.hasPermissions(params)) {\n      return true;\n    } else {\n      return Status.FORBIDDEN;\n    }\n  }\n}\n")),(0,a.kt)("h2",{id:"helpers-for-guards-with-parameters"},"Helpers for guards with parameters"),(0,a.kt)("p",null,"Because parameter guards must be passed as an array within an array, this makes readability and type safety worse. For such cases, it is better to create a helper using the ",(0,a.kt)("inlineCode",{parentName:"p"},"createHelperForGuardWithParams()")," factory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{5}","{5}":!0},"import { createHelperForGuardWithParams } from '@ditsmod/core';\nimport { Permission } from './types';\nimport { PermissionsGuard } from './permissions-guard';\n\nexport const requirePermissions = createHelperForGuardWithParams<Permission>(PermissionsGuard);\n")),(0,a.kt)("p",null,"In this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"PermissionsGuard' is passed as an argument, which accepts parameters of type "),"Permission'."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"requirePermissions()")," can now be used to create routes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{8}","{8}":!0},"import { controller, Res, route } from '@ditsmod/core';\n\nimport { requirePermissions } from '../auth/guards-utils';\nimport { Permission } from '../auth/types';\n\n@controller()\nexport class SomeController {\n  @route('GET', 'administration', [requirePermissions(Permission.canActivateAdministration)])\n  helloAdmin(res: Res) {\n    res.send('some secret');\n  }\n}\n")),(0,a.kt)("h2",{id:"passing-guards-to-injectors"},"Passing guards to injectors"),(0,a.kt)("p",null,"Guards are passed to DI only for injectors at the request level. This can be done either in the controller or in the module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},"import { featureModule } from '@ditsmod/core';\n\nimport { AuthGuard } from 'auth.guard';\n\n@featureModule({\n  providersPerReq: [AuthGuard],\n})\nexport class SomeModule {}\n")),(0,a.kt)("h2",{id:"setting-guards-on-the-imported-module"},"Setting guards on the imported module"),(0,a.kt)("p",null,"You can also centrally set guards at the module level:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{10}","{10}":!0},"import { featureModule } from '@ditsmod/core';\n\nimport { OtherModule } from '../other/other.module';\nimport { AuthModule } from '../auth/auth.module';\nimport { AuthGuard } from '../auth/auth.guard';\n\n@featureModule({\n  imports: [\n    AuthModule,\n    { path: 'some-path', module: OtherModule, guards: [AuthGuard] }\n  ]\n})\nexport class SomeModule {}\n")),(0,a.kt)("p",null,"In this case, ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthGuard")," will be automatically added to each route in ",(0,a.kt)("inlineCode",{parentName:"p"},"OtherModule"),"."))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),c=a,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);