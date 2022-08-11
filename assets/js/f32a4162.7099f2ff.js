"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[1130],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},18186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={id:"zstate",title:"ZState"},i=void 0,s={unversionedId:"reference/state/zstate",id:"reference/state/zstate",title:"ZState",description:"ZStateS] models a value of type S that can be read from and written to during the execution of an effect. This is a higher-level construct built on top of [FiberRef and the environment type to support using ZIO where we might have traditionally used state monad transformers.",source:"@site/docs/reference/state/zstate.md",sourceDirName:"reference/state",slug:"/reference/state/zstate",permalink:"/reference/state/zstate",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/state/zstate.md",tags:[],version:"current",frontMatter:{id:"zstate",title:"ZState"},sidebar:"reference-sidebar",previous:{title:"FiberRef",permalink:"/reference/state/fiberref"},next:{title:"Introduction",permalink:"/reference/concurrency/"}},p={},l=[],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ZState[S]")," models a value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"S")," that can be read from and written to during the execution of an effect. This is a higher-level construct built on top of ",(0,r.kt)("a",{parentName:"p",href:"/reference/state/fiberref"},(0,r.kt)("inlineCode",{parentName:"a"},"FiberRef"))," and the environment type to support using ZIO where we might have traditionally used state monad transformers."),(0,r.kt)("p",null,"Let's try a simple example of using ",(0,r.kt)("inlineCode",{parentName:"p"},"ZState"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nimport java.io.IOException\n\nobject ZStateExample extends zio.ZIOAppDefault {\n  val myApp: ZIO[ZState[Int], IOException, Unit] = for {\n    s <- ZIO.service[ZState[Int]]\n    _ <- s.update(_ + 1)\n    _ <- s.update(_ + 2)\n    state <- s.get\n    _ <- Console.printLine(s"current state: $state")\n  } yield ()\n\n  def run = ZIO.stateful(0)(myApp)\n}\n')),(0,r.kt)("p",null,"The idiomatic way to work with ",(0,r.kt)("inlineCode",{parentName:"p"},"ZState")," is as part of the environment using operators defined on ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZState")," from the environment, and finally, allocate the initial state using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.stateful")," operator."),(0,r.kt)("p",null,"Because we typically use ",(0,r.kt)("inlineCode",{parentName:"p"},"ZState")," as part of the environment, it is recommended to define our own state type ",(0,r.kt)("inlineCode",{parentName:"p"},"S")," such as ",(0,r.kt)("inlineCode",{parentName:"p"},"MyState")," rather than using a type such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Int")," to avoid the risk of ambiguity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nimport java.io.IOException\n\nfinal case class MyState(counter: Int)\n\nobject ZStateExample extends zio.ZIOAppDefault {\n\n  val myApp: ZIO[ZState[MyState], IOException, Unit] =\n    for {\n      counter <- ZIO.service[ZState[MyState]]\n      _ <- counter.update(state => state.copy(counter = state.counter + 1))\n      _ <- counter.update(state => state.copy(counter = state.counter + 2))\n      state <- counter.get\n      _ <- Console.printLine(s"Current state: $state")\n    } yield ()\n\n  def run = ZIO.stateful(MyState(0))(myApp)\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," data type also has some helper methods to work with ",(0,r.kt)("inlineCode",{parentName:"p"},"ZState")," as the environment of ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," effect such as ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.updateState"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.getState"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.getStateWith"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nimport java.io.IOException\n\nfinal case class MyState(counter: Int)\n\nval myApp: ZIO[ZState[MyState], IOException, Int] =\n  for {\n    _ <- ZIO.updateState[MyState](state => state.copy(counter = state.counter + 1))\n    _ <- ZIO.updateState[MyState](state => state.copy(counter = state.counter + 2))\n    state <- ZIO.getStateWith[MyState](_.counter)\n    _ <- Console.printLine(s"Current state: $state")\n  } yield state\n')),(0,r.kt)("p",null,"An important note about ",(0,r.kt)("inlineCode",{parentName:"p"},"ZState")," is that it is on top of the ",(0,r.kt)("inlineCode",{parentName:"p"},"FiberRef")," data type. So it will inherit its behavior from the ",(0,r.kt)("inlineCode",{parentName:"p"},"FiberRef"),"."),(0,r.kt)("p",null,"For example, when a fiber is going to join to its parent fiber, its state will be merged with its parent state:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ncase class MyState(counter: Int)\n\nobject ZStateExample extends ZIOAppDefault {\n  val myApp = for {\n    _ <- ZIO.updateState[MyState](state => state.copy(counter = state.counter + 1))\n    fiber <-\n      (for {\n        _ <- ZIO.updateState[MyState](state => state.copy(counter = state.counter + 1))\n        state <- ZIO.getState[MyState]\n        _ <- Console.printLine(s"Current state inside the forked fiber: $state")\n      } yield ()).fork\n    _ <- ZIO.updateState[MyState](state => state.copy(counter = state.counter + 5))\n    state1 <- ZIO.getState[MyState]\n    _ <- Console.printLine(s"Current state before merging the fiber: $state1")\n    _ <- fiber.join\n    state2 <- ZIO.getState[MyState]\n    _ <- Console.printLine(s"The final state: $state2")\n  } yield ()\n\n  def run =\n    ZIO.stateful(MyState(0))(myApp)\n}\n')),(0,r.kt)("p",null,"The output of running this snippet code would be as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Current state before merging the fiber: MyState(6)\nCurrent state inside the forked fiber: MyState(2)\nThe final state: MyState(2)\n")))}u.isMDXComponent=!0}}]);