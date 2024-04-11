"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[66910],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),g=i,y=d["".concat(p,".").concat(g)]||d[g]||c[g]||o;return t?r.createElement(y,a(a({ref:n},s),{},{components:t})):r.createElement(y,a({ref:n},s))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},71944:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(58168),i=(t(96540),t(15680));const o={id:"getting-started",title:"Getting Started with ZIO",sidebar_label:"Getting Started",slug:"getting-started"},a=void 0,l={unversionedId:"overview/getting-started",id:"overview/getting-started",title:"Getting Started with ZIO",description:"Include ZIO in your project by adding the following to your build.sbt file:",source:"@site/docs/overview/index.md",sourceDirName:"overview",slug:"/overview/getting-started",permalink:"/overview/getting-started",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/overview/index.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started with ZIO",sidebar_label:"Getting Started",slug:"getting-started"},sidebar:"overview_sidebar",next:{title:"Summary",permalink:"/overview/summary"}},p={},u=[{value:"Main",id:"main",level:2},{value:"Console",id:"console",level:2}],s={toc:u},d="wrapper";function c(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Include ZIO in your project by adding the following to your ",(0,i.yg)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'libraryDependencies += "dev.zio" %% "zio" % "2.0.21"\n')),(0,i.yg)("p",null,"If you want to use ZIO streams, you should also include the following dependency:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'libraryDependencies += "dev.zio" %% "zio-streams" % "2.0.21"\n')),(0,i.yg)("h2",{id:"main"},"Main"),(0,i.yg)("p",null,"Your application can extend ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIOAppDefault"),", which provides a complete runtime system and allows you to write your whole program using ZIO:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.Console._\n\nobject MyApp extends ZIOAppDefault {\n\n  def run = myAppLogic\n\n  val myAppLogic =\n    for {\n      _    <- printLine("Hello! What is your name?")\n      name <- readLine\n      _    <- printLine(s"Hello, ${name}, welcome to ZIO!")\n    } yield ()\n}\n')),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"run")," method should return a ZIO value which has all its errors handled,",(0,i.yg)("br",{parentName:"p"}),"\n","which, in ZIO parlance, is an unexceptional ZIO value.  "),(0,i.yg)("p",null,"One way to do this is to invoke ",(0,i.yg)("inlineCode",{parentName:"p"},"fold")," over a ZIO value, to get an unexceptional ZIO value.\nThat requires two handler functions: ",(0,i.yg)("inlineCode",{parentName:"p"},"eh: E => B")," (the error handler) and ",(0,i.yg)("inlineCode",{parentName:"p"},"ah: A => B")," (the success handler)."),(0,i.yg)("p",null,"If ",(0,i.yg)("inlineCode",{parentName:"p"},"myAppLogic")," fails, ",(0,i.yg)("inlineCode",{parentName:"p"},"eh")," will be used to get from ",(0,i.yg)("inlineCode",{parentName:"p"},"e: E")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"b: B"),";\nif it succeeds, ",(0,i.yg)("inlineCode",{parentName:"p"},"ah")," will be used to get from ",(0,i.yg)("inlineCode",{parentName:"p"},"a: A")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"b: B"),". "),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"myAppLogic"),", as folded above, produces an unexceptional ZIO value, with ",(0,i.yg)("inlineCode",{parentName:"p"},"B")," being ",(0,i.yg)("inlineCode",{parentName:"p"},"Int"),".",(0,i.yg)("br",{parentName:"p"}),"\n","If ",(0,i.yg)("inlineCode",{parentName:"p"},"myAppLogic")," fails, there will be a 1; if it succeeds, there will be a 0."),(0,i.yg)("hr",null),(0,i.yg)("p",null,"If you are integrating ZIO into an existing application, using dependency injection, or do not control your main function, then you can create a runtime system in order to execute your ZIO programs:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject IntegrationExample {\n  val runtime = Runtime.default\n\n  Unsafe.unsafe { implicit unsafe =>\n    runtime.unsafe.run(ZIO.attempt(println("Hello World!"))).getOrThrowFiberFailure()\n  }\n}\n')),(0,i.yg)("p",null,"Ideally, your application should have a ",(0,i.yg)("em",{parentName:"p"},"single")," runtime, because each runtime has its own resources (including thread pool and unhandled error reporter)."),(0,i.yg)("h2",{id:"console"},"Console"),(0,i.yg)("p",null,"ZIO provides a module for interacting with the console. You can import the functions in this module with the following code snippet:"),(0,i.yg)("p",null,"If you need to print text to the console, you can use ",(0,i.yg)("inlineCode",{parentName:"p"},"print")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"printLine"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\n// Print without trailing line break\nConsole.print("Hello World")\n\n// Print string and include trailing line break\nConsole.printLine("Hello World")\n')),(0,i.yg)("p",null,"If you need to read input from the console, you can use ",(0,i.yg)("inlineCode",{parentName:"p"},"readLine"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nval echo = Console.readLine.flatMap(line => Console.printLine(line))\n")))}c.isMDXComponent=!0}}]);