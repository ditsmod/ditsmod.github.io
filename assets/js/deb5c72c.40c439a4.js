"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[69],{1474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(3117),o=(r(7294),r(3905));const a={sidebar_position:3},i="@ditsmod/jwt",s={unversionedId:"native-modules/jwt",id:"native-modules/jwt",title:"@ditsmod/jwt",description:"\u041c\u043e\u0434\u0443\u043b\u044c @ditsmod/jwt \u0456\u043d\u0442\u0435\u0433\u0440\u0443\u0454 jsonwebtoken \u0443 Ditsmod-\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043e\u043a \u0434\u043b\u044f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u0457, \u0449\u043e \u043f\u0440\u0430\u0446\u044e\u0454 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 JSON Web Token. \u0413\u043e\u0442\u043e\u0432\u0438\u0439 \u043f\u0440\u0438\u043a\u043b\u0430\u0434 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0446\u044c\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0432 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0456\u0457 Ditsmod.",source:"@site/docs/02-native-modules/03-jwt.md",sourceDirName:"02-native-modules",slug:"/native-modules/jwt",permalink:"/native-modules/jwt",draft:!1,editUrl:"https://github.com/ditsmod/ditsmod/edit/main/website/docs/02-native-modules/03-jwt.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"@ditsmod/session-cookie",permalink:"/native-modules/session-cookie"},next:{title:"@ditsmod/cors",permalink:"/native-modules/cors"}},l={},d=[{value:"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0442\u0430 \u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",id:"\u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f-\u0442\u0430-\u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",level:2}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ditsmodjwt"},"@ditsmod/jwt"),(0,o.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u044c ",(0,o.kt)("inlineCode",{parentName:"p"},"@ditsmod/jwt")," \u0456\u043d\u0442\u0435\u0433\u0440\u0443\u0454 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/auth0/node-jsonwebtoken"},"jsonwebtoken")," \u0443 Ditsmod-\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043e\u043a \u0434\u043b\u044f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u0457, \u0449\u043e \u043f\u0440\u0430\u0446\u044e\u0454 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 ",(0,o.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7519"},"JSON Web Token"),". \u0413\u043e\u0442\u043e\u0432\u0438\u0439 \u043f\u0440\u0438\u043a\u043b\u0430\u0434 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0446\u044c\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0432 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ditsmod/ditsmod/tree/main/examples/14-auth-jwt"},"\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0456\u0457 Ditsmod"),"."),(0,o.kt)("h2",{id:"\u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f-\u0442\u0430-\u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f"},"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0442\u0430 \u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f"),(0,o.kt)("p",null,"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ditsmod/jwt\n")),(0,o.kt)("p",null,"\u041f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7,10}","{7,10}":!0},"import { featureModule } from '@ditsmod/core';\nimport { JwtModule } from '@ditsmod/jwt';\n\nimport { AuthController } from './auth.controller';\nimport { BearerGuard } from './bearer.guard';\n\nconst moduleWithParams = JwtModule.withParams({ secret: 'hard-to-guess-secret', signOptions: { expiresIn: '2m' } });\n\n@featureModule({\n  imports: [moduleWithParams],\n  controllers: [AuthController],\n  providersPerReq: [BearerGuard],\n  exports: [BearerGuard]\n})\nexport class AuthModule {}\n")),(0,o.kt)("p",null,"\u042f\u043a \u0431\u0430\u0447\u0438\u0442\u0435, \u043f\u0456\u0434 \u0447\u0430\u0441 \u0456\u043c\u043f\u043e\u0440\u0442\u0443 \u043c\u043e\u0436\u043d\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u0438 \u043f\u0435\u0432\u043d\u0456 \u043e\u043f\u0446\u0456\u0457 \u0434\u043b\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"JwtModule"),"."),(0,o.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440 \u0432 \u043c\u0435\u0436\u0430\u0445 ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthModule")," \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"JwtService"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{7,19-22}","{7,19-22}":!0},"import { injectable, CanActivate, Injector } from '@ditsmod/core';\nimport { JwtService, VerifyErrors, JWT_PAYLOAD } from '@ditsmod/jwt';\n\n@injectable()\nexport class BearerGuard implements CanActivate {\n  constructor(\n    @fromSelf() private jwtService: JwtService,\n    @fromSelf() @inject(NODE_REQ) private nodeReq: NodeRequest,\n    @fromSelf() private injector: Injector\n  ) {}\n\n  async canActivate() {\n    const authValue = this.nodeReq.headers.authorization?.split(' ');\n    if (authValue?.[0] != 'Bearer') {\n      return false;\n    }\n\n    const token = authValue[1];\n    const payload = await this.jwtService\n      .verifyWithSecret(token)\n      .then((payload) => payload)\n      .catch((err: VerifyErrors) => false as const); // Here `as const` to narrow down returned type.\n\n    if (payload) {\n      this.injector.setByToken(JWT_PAYLOAD, payload);\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\n")),(0,o.kt)("p",null,"\u0429\u043e \u0442\u0430\u043a\u0435 \u0491\u0430\u0440\u0434\u0438, \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u0438 \u0443 \u0440\u043e\u0437\u0434\u0456\u043b\u0456 ",(0,o.kt)("a",{parentName:"p",href:"/components-of-ditsmod-app/guards"},"Guards (\u043e\u0445\u043e\u0440\u043e\u043d\u0446\u0456)"),"."))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);