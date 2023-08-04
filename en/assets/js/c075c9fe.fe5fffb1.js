"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[724],{3508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(3117),o=(n(7294),n(3905));const a={sidebar_position:3},i="@ditsmod/jwt",s={unversionedId:"native-modules/jwt",id:"native-modules/jwt",title:"@ditsmod/jwt",description:"The @ditsmod/jwt module integrates jsonwebtoken into a Ditsmod authentication application based on JSON Web Token. You can view a finished example of using this module in the Ditsmod repository.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/03-jwt.md",sourceDirName:"02-native-modules",slug:"/native-modules/jwt",permalink:"/en/native-modules/jwt",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/03-jwt.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"@ditsmod/session-cookie",permalink:"/en/native-modules/session-cookie"},next:{title:"@ditsmod/cors",permalink:"/en/native-modules/cors"}},l={},d=[{value:"Installation and importing",id:"installation-and-importing",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ditsmodjwt"},"@ditsmod/jwt"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@ditsmod/jwt")," module integrates ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/auth0/node-jsonwebtoken"},"jsonwebtoken")," into a Ditsmod authentication application based on ",(0,o.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7519"},"JSON Web Token"),". You can view a finished example of using this module in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/tree/main/examples/14-auth-jwt"},"Ditsmod repository"),"."),(0,o.kt)("h2",{id:"installation-and-importing"},"Installation and importing"),(0,o.kt)("p",null,"Installation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ditsmod/jwt\n")),(0,o.kt)("p",null,"Importing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7,10}","{7,10}":!0},"import { featureModule } from '@ditsmod/core';\nimport { JwtModule } from '@ditsmod/jwt';\n\nimport { AuthController } from './auth.controller';\nimport { BearerGuard } from './bearer.guard';\n\nconst moduleWithParams = JwtModule.withParams({ secret: 'hard-to-guess-secret', signOptions: { expiresIn: '2m' } });\n\n@featureModule({\n  imports: [moduleWithParams],\n  controllers: [AuthController],\n  providersPerReq: [BearerGuard],\n  exports: [BearerGuard]\n})\nexport class AuthModule {}\n")),(0,o.kt)("p",null,"As you can see, you can pass certain options to ",(0,o.kt)("inlineCode",{parentName:"p"},"JwtModule")," during import."),(0,o.kt)("p",null,"Now within ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthModule")," you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"JwtService"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7,19-22}","{7,19-22}":!0},"import { injectable, CanActivate, Injector } from '@ditsmod/core';\nimport { JwtService, VerifyErrors, JWT_PAYLOAD } from '@ditsmod/jwt';\n\n@injectable()\nexport class BearerGuard implements CanActivate {\n  constructor(\n    @fromSelf() private jwtService: JwtService,\n    @fromSelf() @inject(NODE_REQ) private nodeReq: NodeRequest,\n    @fromSelf() private injector: Injector\n  ) {}\n\n  async canActivate() {\n    const authValue = this.nodeReq.headers.authorization?.split(' ');\n    if (authValue?.[0] != 'Bearer') {\n      return false;\n    }\n\n    const token = authValue[1];\n    const payload = await this.jwtService\n      .verifyWithSecret(token)\n      .then((payload) => payload)\n      .catch((err: VerifyErrors) => false as const); // Here `as const` to narrow down returned type.\n\n    if (payload) {\n      this.injector.setByToken(JWT_PAYLOAD, payload);\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\n")),(0,o.kt)("p",null,"You can read what the guards are in the ",(0,o.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/guards"},"Guards")," section."))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);