"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[818],{2214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"native-modules/jwt","title":"@ditsmod/jwt","description":"\u041c\u043e\u0434\u0443\u043b\u044c @ditsmod/jwt \u0456\u043d\u0442\u0435\u0433\u0440\u0443\u0454 jsonwebtoken \u0443 Ditsmod-\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043e\u043a \u0434\u043b\u044f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u0457, \u0449\u043e \u043f\u0440\u0430\u0446\u044e\u0454 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 JSON Web Token. \u0413\u043e\u0442\u043e\u0432\u0438\u0439 \u043f\u0440\u0438\u043a\u043b\u0430\u0434 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0446\u044c\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0432 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0456\u0457 Ditsmod.","source":"@site/docs/02-native-modules/03-jwt.md","sourceDirName":"02-native-modules","slug":"/native-modules/jwt","permalink":"/native-modules/jwt","draft":false,"unlisted":false,"editUrl":"https://github.com/ditsmod/ditsmod/edit/main/website/docs/02-native-modules/03-jwt.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"@ditsmod/session-cookie","permalink":"/native-modules/session-cookie"},"next":{"title":"@ditsmod/cors","permalink":"/native-modules/cors"}}');var o=n(4848),s=n(8453);const i={sidebar_position:3},d="@ditsmod/jwt",a={},c=[{value:"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0442\u0430 \u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",id:"\u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f-\u0442\u0430-\u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"ditsmodjwt",children:"@ditsmod/jwt"})}),"\n",(0,o.jsxs)(t.p,{children:["\u041c\u043e\u0434\u0443\u043b\u044c ",(0,o.jsx)(t.code,{children:"@ditsmod/jwt"})," \u0456\u043d\u0442\u0435\u0433\u0440\u0443\u0454 ",(0,o.jsx)(t.a,{href:"https://github.com/auth0/node-jsonwebtoken",children:"jsonwebtoken"})," \u0443 Ditsmod-\u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043e\u043a \u0434\u043b\u044f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u0457, \u0449\u043e \u043f\u0440\u0430\u0446\u044e\u0454 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 ",(0,o.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc7519",children:"JSON Web Token"}),". \u0413\u043e\u0442\u043e\u0432\u0438\u0439 \u043f\u0440\u0438\u043a\u043b\u0430\u0434 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0446\u044c\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0432 ",(0,o.jsx)(t.a,{href:"https://github.com/ditsmod/ditsmod/tree/main/examples/14-auth-jwt",children:"\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0456\u0457 Ditsmod"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"\u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f-\u0442\u0430-\u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",children:"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0442\u0430 \u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f"}),"\n",(0,o.jsx)(t.p,{children:"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm i @ditsmod/jwt\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u041f\u0456\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:"{7,10}",children:"import { featureModule } from '@ditsmod/core';\nimport { JwtModule } from '@ditsmod/jwt';\n\nimport { AuthController } from './auth.controller.js';\nimport { BearerGuard } from './bearer.guard.js';\n\nconst moduleWithParams = JwtModule.withParams({ secret: 'hard-to-guess-secret', signOptions: { expiresIn: '2m' } });\n\n@featureModule({\n  imports: [moduleWithParams],\n  controllers: [AuthController],\n  providersPerReq: [BearerGuard],\n  exports: [BearerGuard]\n})\nexport class AuthModule {}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["\u042f\u043a \u0431\u0430\u0447\u0438\u0442\u0435, \u043f\u0456\u0434 \u0447\u0430\u0441 \u0456\u043c\u043f\u043e\u0440\u0442\u0443 \u043c\u043e\u0436\u043d\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u0438 \u043f\u0435\u0432\u043d\u0456 \u043e\u043f\u0446\u0456\u0457 \u0434\u043b\u044f ",(0,o.jsx)(t.code,{children:"JwtModule"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["\u0422\u0435\u043f\u0435\u0440 \u0432 \u043c\u0435\u0436\u0430\u0445 ",(0,o.jsx)(t.code,{children:"AuthModule"})," \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 ",(0,o.jsx)(t.code,{children:"JwtService"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:"{7,18-21}",children:"import { injectable, CanActivate, Injector, RequestContext } from '@ditsmod/core';\nimport { JwtService, VerifyErrors, JWT_PAYLOAD } from '@ditsmod/jwt';\n\n@injectable()\nexport class BearerGuard implements CanActivate {\n  constructor(\n    private jwtService: JwtService,\n    private injector: Injector\n  ) {}\n\n  async canActivate(ctx: RequestContext) {\n    const authValue = ctx.rawReq.headers.authorization?.split(' ');\n    if (authValue?.[0] != 'Bearer') {\n      return false;\n    }\n\n    const token = authValue[1];\n    const payload = await this.jwtService\n      .verifyWithSecret(token)\n      .then((payload) => payload)\n      .catch((err: VerifyErrors) => false as const); // Here `as const` to narrow down returned type.\n\n    if (payload) {\n      this.injector.setByToken(JWT_PAYLOAD, payload);\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["\u0429\u043e \u0442\u0430\u043a\u0435 \u0491\u0430\u0440\u0434\u0438, \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u0438 \u0443 \u0440\u043e\u0437\u0434\u0456\u043b\u0456 ",(0,o.jsx)(t.a,{href:"/components-of-ditsmod-app/guards",children:"Guards (\u043e\u0445\u043e\u0440\u043e\u043d\u0446\u0456)"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var r=n(6540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);