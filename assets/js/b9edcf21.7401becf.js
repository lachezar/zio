"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[4675],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(58168),i=(r(96540),r(15680));const o={id:"installation",title:"Installing ZIO Test",sidebar_label:"Installation"},a=void 0,s={unversionedId:"reference/test/installation",id:"reference/test/installation",title:"Installing ZIO Test",description:"In order to use ZIO Test, we need to add the required configuration in our SBT settings:",source:"@site/docs/reference/test/installation.md",sourceDirName:"reference/test",slug:"/reference/test/installation",permalink:"/reference/test/installation",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/installation.md",tags:[],version:"current",frontMatter:{id:"installation",title:"Installing ZIO Test",sidebar_label:"Installation"},sidebar:"reference-sidebar",previous:{title:"Why ZIO Test?",permalink:"/reference/test/why-zio-test"},next:{title:"Writing Our First Test",permalink:"/reference/test/writing-our-first-test"}},l={},c=[],u={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"In order to use ZIO Test, we need to add the required configuration in our SBT settings:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "dev.zio" %% "zio-test"          % "2.0.21" % Test,\n  "dev.zio" %% "zio-test-sbt"      % "2.0.21" % Test,\n  "dev.zio" %% "zio-test-magnolia" % "2.0.21" % Test\n)\ntestFrameworks += new TestFramework("zio.test.sbt.ZTestFramework")\n')))}f.isMDXComponent=!0}}]);