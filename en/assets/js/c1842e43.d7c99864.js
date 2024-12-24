"use strict";(self.webpackChunkditsmod_github_io=self.webpackChunkditsmod_github_io||[]).push([[623],{8566:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"native-modules/i18n","title":"@ditsmod/i18n","description":"i18n is an abbreviation of the word internationalization. The @ditsmod/i18n module provides basic functionality for translating system messages (issued by the Ditsmod application at runtime) and provides the ability to easily extend dictionaries. In fact, you use ordinary services as dictionaries for translation, so the text for translation can be taken both from TypeScript files and from databases. The @ditsmod/i18n work is designed so that each current module can have its own translation, and that the translation of any imported module can be modified or supplemented.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/06-i18n.md","sourceDirName":"02-native-modules","slug":"/native-modules/i18n","permalink":"/en/native-modules/i18n","draft":false,"unlisted":false,"editUrl":"https://github.com/ditsmod/ditsmod/edit/main/website/i18n/en/docusaurus-plugin-content-docs/current/02-native-modules/06-i18n.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"@ditsmod/cors","permalink":"/en/native-modules/cors"},"next":{"title":"@ditsmod/openapi","permalink":"/en/native-modules/openapi"}}');var o=t(4848),r=t(8453);const s={sidebar_position:6},a="@ditsmod/i18n",c={},d=[{value:"Installation",id:"installation",level:2},{value:"Directory structure",id:"directory-structure",level:2},{value:"Base and extended classes with translations",id:"base-and-extended-classes-with-translations",level:2},{value:"Collection of dictionaries in groups in the current folder",id:"collection-of-dictionaries-in-groups-in-the-current-folder",level:2},{value:"Collection of dictionaries in groups in the imported folder",id:"collection-of-dictionaries-in-groups-in-the-imported-folder",level:2},{value:"Transfer of translations to the module",id:"transfer-of-translations-to-the-module",level:2},{value:"Use of dictionaries with translation",id:"use-of-dictionaries-with-translation",level:2},{value:"Arbitrary definition of the request language",id:"arbitrary-definition-of-the-request-language",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"ditsmodi18n",children:"@ditsmod/i18n"})}),"\n",(0,o.jsxs)(n.p,{children:["i18n is an abbreviation of the word internationalization. The ",(0,o.jsx)(n.code,{children:"@ditsmod/i18n"})," module provides basic functionality for translating system messages (issued by the Ditsmod application at runtime) and provides the ability to easily extend dictionaries. In fact, you use ordinary services as dictionaries for translation, so the text for translation can be taken both from TypeScript files and from databases. The ",(0,o.jsx)(n.code,{children:"@ditsmod/i18n"})," work is designed so that each current module can have its own translation, and that the translation of any imported module can be modified or supplemented."]}),"\n",(0,o.jsxs)(n.p,{children:["You can view the code with examples of using ",(0,o.jsx)(n.code,{children:"@ditsmod/i18n"})," in the ",(0,o.jsx)(n.a,{href:"https://github.com/ditsmod/ditsmod/tree/main/examples/15-i18n",children:"Ditsmod repository"}),", although it is more convenient to view it locally, so it is better to clone it first:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/ditsmod/ditsmod.git\ncd ditsmod\nnpm i\ncd examples/15-i18n\n"})}),"\n",(0,o.jsx)(n.p,{children:"The example can be run with the command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.p,{children:["The above shows how to clone the ready-made example from ",(0,o.jsx)(n.code,{children:"@ditsmod/i18n"}),", and when you need to install this module in your application, you can do it like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm i @ditsmod/i18n\n"})}),"\n",(0,o.jsx)(n.h2,{id:"directory-structure",children:"Directory structure"}),"\n",(0,o.jsx)(n.p,{children:"The recommended directory structure of translated dictionaries is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"\u2514\u2500\u2500 modulename\n    \u251c\u2500\u2500 ...\n    \u251c\u2500\u2500 locales\n    \u2502   \u251c\u2500\u2500 current\n    \u2502   \u2502   \u251c\u2500\u2500 _base-en\n    \u2502   \u2502   \u251c\u2500\u2500 de\n    \u2502   \u2502   \u251c\u2500\u2500 fr\n    \u2502   \u2502   \u251c\u2500\u2500 pl\n    \u2502   \u2502   \u251c\u2500\u2500 uk\n    \u2502   \u2502   \u2514\u2500\u2500 index.ts\n    \u2502   \u2514\u2500\u2500 imported\n    \u2502       \u251c\u2500\u2500 one\n    \u2502       \u2502   \u251c\u2500\u2500 de\n    \u2502       \u2502   \u251c\u2500\u2500 fr\n    \u2502       \u2502   \u251c\u2500\u2500 pl\n    \u2502       \u2502   \u2514\u2500\u2500 uk\n    \u2502       \u251c\u2500\u2500 two\n    \u2502       \u2502   \u251c\u2500\u2500 de\n    \u2502       \u2502   \u251c\u2500\u2500 fr\n    \u2502       \u2502   \u251c\u2500\u2500 pl\n    \u2502       \u2502   \u2514\u2500\u2500 uk\n    \u2502       \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This is the recommended directory structure. As you can see, each module has a translation in the ",(0,o.jsx)(n.code,{children:"locales"})," folder, which contains two folders:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"current"})," - translation for the current module;"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"imported"})," - changed or supplemented translation for imported modules."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Moreover, only the ",(0,o.jsx)(n.code,{children:"current"})," folder contains the ",(0,o.jsx)(n.code,{children:"_base-en"})," folder, which contains basic dictionaries (in this case - in English), from which dictionaries with translations into other languages are branched. An underscore character is used in the name so that ",(0,o.jsx)(n.code,{children:"_base-en"})," is always above other folders."]}),"\n",(0,o.jsx)(n.h2,{id:"base-and-extended-classes-with-translations",children:"Base and extended classes with translations"}),"\n",(0,o.jsx)(n.p,{children:"As already mentioned, dictionaries are ordinary services:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { Dictionary, ISO639 } from '@ditsmod/i18n';\nimport { injectable } from '@ditsmod/core';\n\n@injectable()\nexport class CommonDict implements Dictionary {\n  getLng(): ISO639 {\n    return 'en';\n  }\n  /**\n   * Hi, there!\n   */\n  hi = `Hi, there!`;\n  /**\n   * Hello, ${name}!\n   */\n  hello(name: string) {\n    return `Hello, ${name}!`;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This is a basic dictionary with English localization. In this case, it has the name ",(0,o.jsx)(n.code,{children:"CommonDict"}),", but it is not necessary to place the entire translation in one class, you can use other classes, for example, ",(0,o.jsx)(n.code,{children:"ErrorDict"}),", ",(0,o.jsx)(n.code,{children:"EmailDict"}),", etc."]}),"\n",(0,o.jsxs)(n.p,{children:["Each basic dictionary must implement the ",(0,o.jsx)(n.code,{children:"Dictionary"})," interface, which has a single requirement - that the dictionary has a ",(0,o.jsx)(n.code,{children:"getLng()"})," method that returns the abbreviation of the language name according to the standard ",(0,o.jsx)(n.a,{href:"https://uk.wikipedia.org/wiki/ISO_639",children:"ISO 639"})," (for example, abbreviations for English and Ukrainian languages \u200b\u200b- en, uk)."]}),"\n",(0,o.jsxs)(n.p,{children:["Why does the method, and not the property, return the abbreviation of the language names?\nThe point is that in JavaScript, a class property cannot be viewed until an instance of this class is made. But the ",(0,o.jsx)(n.code,{children:"getLng()"})," method can be easily viewed through ",(0,o.jsx)(n.code,{children:"YourClass.prototype.getLng()"}),". This allows you to get statistics of available translations even before using dictionaries."]}),"\n",(0,o.jsxs)(n.p,{children:["It is recommended to name each service class with the ending ",(0,o.jsx)(n.code,{children:"*Dict"}),", and the file with the ending ",(0,o.jsx)(n.code,{children:"*.dict.ts"}),". In addition, the class name of the base dictionary must not contain locales, and that is why in this case the class is not named ",(0,o.jsx)(n.code,{children:"CommonEnDict"}),", but ",(0,o.jsx)(n.code,{children:"CommonDict"}),". This is recommended because the base dictionary class will be used to translate to any other available language. For example, in code the following expression can actually return a translation to any language, despite using the underlying dictionary class as a token:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const dict = this.dictService.getDictionary(CommonDict);\ndict.hello('World');\n"})}),"\n",(0,o.jsx)(n.p,{children:"Each dictionary class containing a translation must extend the base dictionary class:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { ISO639 } from '@ditsmod/i18n';\nimport { injectable } from '@ditsmod/core';\n\nimport { CommonDict } from '#dict/second/common.dict';\n\n@injectable()\nexport class CommonUkDict extends CommonDict {\n  override getLng(): ISO639 {\n    return 'uk';\n  }\n\n  override hello(name: string) {\n    return `\u041f\u0440\u0438\u0432\u0456\u0442, ${name}!`;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["At a minimum, every translation dictionary should override the ",(0,o.jsx)(n.code,{children:"getLng()"})," method. For more strict control of dictionaries with translations, it is recommended to use TypeScript 4.3+, as well as the following setting in ",(0,o.jsx)(n.code,{children:"tsconfig.json"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "noImplicitOverride": true,\n    // ...\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this case, TypeScript will require the child class to add the ",(0,o.jsx)(n.code,{children:"override"})," keyword before each method or property from the parent class. This improves the readability of the child class and prevents a mistake in the name of the method or property. If you create a method with an incorrect name, such as ",(0,o.jsx)(n.code,{children:"helo"})," instead of ",(0,o.jsx)(n.code,{children:"hello"}),", and mark it as ",(0,o.jsx)(n.code,{children:"override"}),", TypeScript will issue a warning that no such method exists in the parent class. The same scenario will work if the previously written method has been removed from the parent class."]}),"\n",(0,o.jsxs)(n.p,{children:["As you can see, the class names of dictionaries with translations already contain the locale ",(0,o.jsx)(n.code,{children:"CommonUkDict"})," - this is a dictionary with Ukrainian localization. And since this dictionary extends the base dictionary class, all missing translations will be rendered in the language of the base dictionary. In this case, the base dictionary ",(0,o.jsx)(n.code,{children:"CommonDict"})," has this property:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"/**\n * Hi, there!\n */\nhi = `Hi, there!`;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["And the ",(0,o.jsx)(n.code,{children:"CommonUkDict"})," dictionary does not have a translation of this phrase, so when requesting localization into the Ukrainian language, the English version from the base class will be used."]}),"\n",(0,o.jsx)(n.p,{children:"Note that each property or method that is directly used for translation is commented out with the template of the phrase they will return. This adds convenience to using the dictionary in your application code, because your IDE will show these comments:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const dict = this.dictService.getDictionary(CommonDict);\ndict.hi;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In this case, when hovering over ",(0,o.jsx)(n.code,{children:"dict.hi"}),", the IDE will show ",(0,o.jsx)(n.code,{children:"Hi, there!"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"collection-of-dictionaries-in-groups-in-the-current-folder",children:"Collection of dictionaries in groups in the current folder"}),"\n",(0,o.jsxs)(n.p,{children:["Let me remind you that the ",(0,o.jsx)(n.code,{children:"current"})," folder contains dictionaries with translations for the current module. These dictionaries must be collected in a single array in the ",(0,o.jsx)(n.code,{children:"index.ts"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { DictGroup, getDictGroup } from '@ditsmod/i18n';\n\nimport { CommonDict } from '#dict/second/common.dict';\nimport { CommonUkDict } from './uk/common-uk.dict.js';\nimport { ErrorDict } from '#dict/second/error.dict';\nimport { ErrorsUkDict } from './uk/errors-uk.dict.js';\n// ...\n\nexport const current: DictGroup[] = [\n  [CommonDict, CommonUkDict, CommonPlDict, CommonFrDict, CommonDeDict],\n  [ErrorDict, ErrorsUkDict, ErrorsPlDict, ErrorsFrDict, ErrorsDeDict],\n  // ...\n];\n"})}),"\n",(0,o.jsxs)(n.p,{children:["As you can see, groups of dictionaries are transferred in the array, where the class with the base dictionary must always go first. In this case, two groups of dictionaries with base classes ",(0,o.jsx)(n.code,{children:"CommonDict"})," and ",(0,o.jsx)(n.code,{children:"ErrorDict"})," are transferred. It is not allowed to mix dictionaries from different groups. If you mix dictionaries from different groups, TypeScript won't be able to tell you about it, so it's recommended to use the ",(0,o.jsx)(n.code,{children:"getDictGroup()"})," function for better control of class types:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { DictGroup, getDictGroup } from '@ditsmod/i18n';\n\nimport { CommonDict } from '#dict/second/common.dict';\nimport { CommonUkDict } from './uk/common-uk.dict.js';\nimport { ErrorDict } from '#dict/second/error.dict';\nimport { ErrorsUkDict } from './uk/errors-uk.dict.js';\n// ...\n\nexport const current: DictGroup[] = [\n  getDictGroup(CommonDict, CommonUkDict, CommonPlDict, CommonFrDict, CommonDeDict),\n  getDictGroup(ErrorDict, ErrorsUkDict, ErrorsPlDict, ErrorsFrDict, ErrorsDeDict),\n  // ...\n];\n"})}),"\n",(0,o.jsx)(n.h2,{id:"collection-of-dictionaries-in-groups-in-the-imported-folder",children:"Collection of dictionaries in groups in the imported folder"}),"\n",(0,o.jsxs)(n.p,{children:["Let me remind you that the ",(0,o.jsx)(n.code,{children:"imported"})," directory contains dictionaries with translations for imported modules, and note that it does not contain base dictionaries (it does not have a ",(0,o.jsx)(n.code,{children:"_base-en"})," folder), since the base dictionaries of imported modules are located in these modules in the ",(0,o.jsx)(n.code,{children:"current"})," directories:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",metastring:"{11-22}",children:"\u2514\u2500\u2500 modulename\n    \u251c\u2500\u2500 ...\n    \u251c\u2500\u2500 locales\n    \u2502   \u251c\u2500\u2500 current\n    \u2502   \u2502   \u251c\u2500\u2500 _base-en\n    \u2502   \u2502   \u251c\u2500\u2500 de\n    \u2502   \u2502   \u251c\u2500\u2500 fr\n    \u2502   \u2502   \u251c\u2500\u2500 pl\n    \u2502   \u2502   \u251c\u2500\u2500 uk\n    \u2502   \u2502   \u2514\u2500\u2500 index.ts\n    \u2502   \u2514\u2500\u2500 imported\n    \u2502       \u251c\u2500\u2500 one\n    \u2502       \u2502   \u251c\u2500\u2500 de\n    \u2502       \u2502   \u251c\u2500\u2500 fr\n    \u2502       \u2502   \u251c\u2500\u2500 pl\n    \u2502       \u2502   \u2514\u2500\u2500 uk\n    \u2502       \u251c\u2500\u2500 two\n    \u2502       \u2502   \u251c\u2500\u2500 de\n    \u2502       \u2502   \u251c\u2500\u2500 fr\n    \u2502       \u2502   \u251c\u2500\u2500 pl\n    \u2502       \u2502   \u2514\u2500\u2500 uk\n    \u2502       \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The directory ",(0,o.jsx)(n.code,{children:"imported"})," contains individual folders of each module, for which you need to supplement or rewrite the translation. In this case, the ",(0,o.jsx)(n.code,{children:"imported"})," folder contains additions or translation rewrites for modules ",(0,o.jsx)(n.code,{children:"one"})," and ",(0,o.jsx)(n.code,{children:"two"}),". Collection of groups of dictionaries in the ",(0,o.jsx)(n.code,{children:"imported"})," folder is similar to how it is done in ",(0,o.jsx)(n.code,{children:"current"}),", but the base dictionaries are taken from external modules:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { DictGroup, getDictGroup } from '@ditsmod/i18n';\n\nimport { CommonDict } from '#dict/first/common.dict'; // A basic dictionary from an external module from the current folder\nimport { CommonUkDict } from './first/uk/common-uk.dict.js'; // Addition of translation for an external module from the imported folder\n\nexport const imported: DictGroup[] = [\n  getDictGroup(CommonDict, CommonUkDict),\n];\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In this case, the basic dictionary ",(0,o.jsx)(n.code,{children:"CommonDict"})," is imported from ",(0,o.jsx)(n.code,{children:"FirstModule"}),", and the addition of the Ukrainian translation is taken in the current module from the ",(0,o.jsx)(n.code,{children:"imported"})," folder."]}),"\n",(0,o.jsx)(n.h2,{id:"transfer-of-translations-to-the-module",children:"Transfer of translations to the module"}),"\n",(0,o.jsx)(n.p,{children:"Now it remains to transfer groups of dictionaries to the module:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { featureModule } from '@ditsmod/core';\nimport { I18nModule, I18nOptions, I18N_TRANSLATIONS, Translations } from '@ditsmod/i18n';\n\nimport { current } from './locales/current.js';\nimport { imported } from './locales/imported.js';\n\nconst translations: Translations = { current, imported };\nconst i18nOptions: I18nOptions = { defaultLng: 'uk' };\n\n@featureModule({\n  imports: [\n    I18nModule,\n    // ...\n  ],\n  providersPerMod: [\n    { token: I18N_TRANSLATIONS, useValue: translations, multi: true },\n    { token: I18nOptions, useValue: i18nOptions },\n  ],\n  exports: [I18N_TRANSLATIONS]\n})\nexport class SecondModule {}\n"})}),"\n",(0,o.jsx)(n.p,{children:"As you can see, each module containing a translation must:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["import ",(0,o.jsx)(n.code,{children:"I18nModule"}),";"]}),"\n",(0,o.jsxs)(n.li,{children:["to the ",(0,o.jsx)(n.code,{children:"providersPerMod"})," array, add a multi-provider containing the ",(0,o.jsx)(n.code,{children:"I18N_TRANSLATIONS"})," token and content with the ",(0,o.jsx)(n.code,{children:"Translations"})," data type, where dictionary groups for both the current and the imported module are transferred;"]}),"\n",(0,o.jsxs)(n.li,{children:["the provider with the token ",(0,o.jsx)(n.code,{children:"I18nOptions"})," can be transferred to the ",(0,o.jsx)(n.code,{children:"providersPerMod"})," array;"]}),"\n",(0,o.jsxs)(n.li,{children:["you can optionally pass the ",(0,o.jsx)(n.code,{children:"I18N_TRANSLATIONS"})," token to the ",(0,o.jsx)(n.code,{children:"exports"})," array, if you want the base dictionaries from the current module to be available to external modules. At the same time, please note that such an export is only necessary if you want to ",(0,o.jsx)(n.strong,{children:"directly"})," use the base dictionaries, that is, in the code of your program, you import them. And if you export a certain service that internally uses base dictionaries (encapsulates their use), then you do not need to export ",(0,o.jsx)(n.code,{children:"I18N_TRANSLATIONS"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["If you use the ",(0,o.jsx)(n.code,{children:"i18nProviders().i18n()"})," helper, you can slightly reduce the amount of code:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { featureModule } from '@ditsmod/core';\nimport { I18nModule, I18nProviders } from '@ditsmod/i18n';\n\nimport { current } from './locales/current.js';\nimport { imported } from './locales/imported.js';\n\n@featureModule({\n  imports: [\n    I18nModule,\n    // ...\n  ],\n  providersPerMod: [\n    ...new I18nProviders().i18n({ current, imported }, { defaultLng: 'uk' }),\n  ],\n  exports: [I18N_TRANSLATIONS]\n})\nexport class SecondModule {}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["As the first argument for ",(0,o.jsx)(n.code,{children:"i18nProviders().i18n()"}),", an object of type ",(0,o.jsx)(n.code,{children:"Translations"})," is passed, options of type ",(0,o.jsx)(n.code,{children:"I18nOptions"})," are passed in the second place. Note that the helper is preceded by an ellipsis, as it returns an array to be merged with the other providers in the ",(0,o.jsx)(n.code,{children:"providersPerMod"})," array."]}),"\n",(0,o.jsx)(n.h2,{id:"use-of-dictionaries-with-translation",children:"Use of dictionaries with translation"}),"\n",(0,o.jsxs)(n.p,{children:["To use dictionaries, you need to use ",(0,o.jsx)(n.code,{children:"DictService"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { injectable } from '@ditsmod/core';\nimport { DictService } from '@ditsmod/i18n';\n\nimport { CommonDict } from '#dict/first/common.dict';\n\n@injectable()\nexport class FirstService {\n  constructor(private dictService: DictService) {}\n\n  countToThree() {\n    const dict = this.dictService.getDictionary(CommonDict);\n    return dict.countToThree;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["As you can see, base dictionary classes are always used as a token to search for the required group of dictionaries. In this case, this code will work if the base dictionary contains the ",(0,o.jsx)(n.code,{children:"countToThree"})," property. It will output the required translation if there is a dictionary with the corresponding translation in the dictionary group ",(0,o.jsx)(n.code,{children:"CommonDict"}),". You can specify the locale in the second argument:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"countToThree() {\n  const dict = this.dictService.getDictionary(CommonDict, 'uk');\n  return dict.countToThree;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["But in most cases, the language is selected through an HTTP request. By default, ",(0,o.jsx)(n.code,{children:"DictService"})," takes the locale from the ",(0,o.jsx)(n.code,{children:"lng"})," URL parameter, but you can change the name of this parameter by passing the ",(0,o.jsx)(n.code,{children:"lngParam"})," option:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// ...\n@featureModule({\n  // ...\n  providersPerMod: [\n    ...new I18nProviders().i18n({ current, imported },  { defaultLng: 'uk', lngParam: 'locale' }),\n  ],\n})\nexport class SecondModule {}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that ",(0,o.jsx)(n.code,{children:"DictService"})," is passed to injectors at the HTTP request level, so you will not be able to use this service in other services that are passed to injectors at higher levels (route or module level). If you need a higher-level service, use ",(0,o.jsx)(n.code,{children:"DictPerModService"}),", which is actually a parent class for ",(0,o.jsx)(n.code,{children:"DictService"})," with an almost identical API."]}),"\n",(0,o.jsx)(n.h2,{id:"arbitrary-definition-of-the-request-language",children:"Arbitrary definition of the request language"}),"\n",(0,o.jsxs)(n.p,{children:["Although the default value of the request language is determined through the URL parameter, but you can easily change the logic of determining the request language, for example, by ",(0,o.jsx)(n.code,{children:"accept-language"})," headers. To do this, it is enough to change the ",(0,o.jsx)(n.code,{children:"dictService.lng"})," getter."]}),"\n",(0,o.jsxs)(n.p,{children:["If you cloned the repository, you will find an example of ",(0,o.jsx)(n.code,{children:"MyDictService"})," in the ",(0,o.jsx)(n.code,{children:"examples/15-i18n/src/app/third/third.module.ts"})," module. This service extends ",(0,o.jsx)(n.code,{children:"DictPerModService"})," and only overwrites the getter of ",(0,o.jsx)(n.code,{children:"mydictService.lng"})," and the setter is also overwritten so that ",(0,o.jsx)(n.code,{children:"mydictService.lng"})," can be edited. Well, after your own implementation of the definition of the language of the request, of course, you need to add the new service ",(0,o.jsx)(n.code,{children:"providersPerReq"})," in the module."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);