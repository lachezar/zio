"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[53192],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88572:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=t(87462),o=(t(67294),t(3905));const r={id:"ord",title:"Ord"},i=void 0,c={unversionedId:"zio-prelude/functional-abstractions/concrete-types/ord",id:"zio-prelude/functional-abstractions/concrete-types/ord",title:"Ord",description:"Ord[A] describes a total ordering on values of type A.",source:"@site/docs/zio-prelude/functional-abstractions/concrete-types/ord.md",sourceDirName:"zio-prelude/functional-abstractions/concrete-types",slug:"/zio-prelude/functional-abstractions/concrete-types/ord",permalink:"/zio-prelude/functional-abstractions/concrete-types/ord",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-prelude/functional-abstractions/concrete-types/ord.md",tags:[],version:"current",frontMatter:{id:"ord",title:"Ord"},sidebar:"ecosystem-sidebar",previous:{title:"Inverse",permalink:"/zio-prelude/functional-abstractions/concrete-types/inverse"},next:{title:"Introduction",permalink:"/zio-prelude/functional-abstractions/parameterized-types/"}},s={},l=[{value:"Defining Ord Instances",id:"defining-ord-instances",level:2}],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Ord[A]")," describes a total ordering on values of type ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,o.kt)("p",null,"Its signature is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"trait Equal[-A] {\n  def equal(left: A, right: A): Boolean\n}\n\ntrait Ord[-A] {\n  def compare(left: A, right: A): Ordering\n  final def equal(left: A, right: A): Boolean =\n    compare(left, right) == Ordering.Equals\n}\n\nsealed trait Ordering\nobject Ordering {\n  case object LessThan extends Ordering\n  case object GreaterThan extends Ordering\n  case object Equals extends Ordering\n}\n")),(0,o.kt)("p",null,"That is, we can compare any two values of type ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," and either the ",(0,o.kt)("inlineCode",{parentName:"p"},"left")," value is less than the ",(0,o.kt)("inlineCode",{parentName:"p"},"right"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"left")," value is greater than the ",(0,o.kt)("inlineCode",{parentName:"p"},"right"),", or the two values are equal."),(0,o.kt)("p",null,"Furthermore, the results of these comparisons must satisfy the properties that we expect of a total ordering. For example, if ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," is greater than ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," is greater than ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," then ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," must be greater than ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," and if ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," is greater than ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," then ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," must be less than ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Ord")," abstraction builds on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Equal")," abstraction because being able to define a total ordering on values of a type implies being able to compare values of that type for equality, as shown by our implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"equal")," operator in terms of ",(0,o.kt)("inlineCode",{parentName:"p"},"compare")," above. This means that if we define an instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ord")," abstraction for a data type we automatically get an instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Equal")," abstraction for free and our definition of equality is guaranteed to be consistent with the ordering."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Ord")," abstraction is similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ordering")," type class in the Scala standard library and in fact we can convert any ",(0,o.kt)("inlineCode",{parentName:"p"},"scala.math.Ordering")," to an ",(0,o.kt)("inlineCode",{parentName:"p"},"Ord")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"fromScala")," operator and any ",(0,o.kt)("inlineCode",{parentName:"p"},"Ord")," to a ",(0,o.kt)("inlineCode",{parentName:"p"},"scala.math.Ordering")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"toScala")," operator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude.Ord\n\nval toScala: scala.math.Ordering[Int] =\n  Ord[Int].toScala\n// toScala: Ordering[Int] = zio.prelude.Ord$$anonfun$toScala$2@8af6baa\n\nval fromScala: Ord[Int] =\n  Ord.fromScala(scala.math.Ordering[Int])\n// fromScala: Ord[Int] = zio.prelude.Ord$$anonfun$fromScala$2@73ddf75\n")),(0,o.kt)("p",null,"The main advantages that the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ord")," abstraction provides over the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ordering")," in the Scala standard library is improved type inference due to use of variance and integration with the other functional abstractions in ZIO Prelude."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Ordering")," type class in the Scala standard library is invariant, meaning that from the perspective of the Scala compiler an ",(0,o.kt)("inlineCode",{parentName:"p"},"Ordering[A]")," and an ",(0,o.kt)("inlineCode",{parentName:"p"},"Ordering[B]")," are completely unrelated, even if ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," is a subtype of ",(0,o.kt)("inlineCode",{parentName:"p"},"B"),". If we look at the signature of the ",(0,o.kt)("inlineCode",{parentName:"p"},"compare")," operator on ",(0,o.kt)("inlineCode",{parentName:"p"},"Ord")," we can see that this does not reflect the natural variance of this type."),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"Ord[A]")," is a consumer of ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," values, it takes two ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," values and returns a result describing whether one is less than, greater than, or equal to the other. If we know how to order values of type ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," is a subtype of ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," then we also know how to order values of type ",(0,o.kt)("inlineCode",{parentName:"p"},"B"),", because every ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," is an ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),"!"),(0,o.kt)("p",null,"The version of ",(0,o.kt)("inlineCode",{parentName:"p"},"Ordering"),' in the Scala compiler "forgets" this information because it does not use variance, which can lead to type inference problems.'),(0,o.kt)("p",null,"To see this, consider a situation like the following. We have a domain model where customer accounts may be either business accounts or consumer accounts, each of which have a unique identifier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"sealed trait CustomerAccount\n\ncase class BusinessAccount(id: String) extends CustomerAccount\ncase class ConsumerAccount(id: String) extends CustomerAccount\n")),(0,o.kt)("p",null,"We might define a total ordering for all accounts like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude._\n\nimplicit val CustomerAccountOrd: Ord[CustomerAccount] =\n  Ord.make {\n    case (BusinessAccount(id1), BusinessAccount(id2)) => id1 =?= id2\n    case (BusinessAccount(_), ConsumerAccount(_))     => Ordering.LessThan\n    case (ConsumerAccount(_), BusinessAccount(_))     => Ordering.GreaterThan\n    case (ConsumerAccount(id1), ConsumerAccount(id2)) => id1 =?= id2\n  }\n// CustomerAccountOrd: Ord[CustomerAccount] = zio.prelude.Ord$$anon$4@228fdc7d\n")),(0,o.kt)("p",null,"Basically this says that we are ordering all business accounts before all consumer accounts and then within each account type we are ordering by the identifier. Note that we are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"=?=")," operator which is available on any type for which an ",(0,o.kt)("inlineCode",{parentName:"p"},"Ord")," is defined to return the result of comparing two values of that type."),(0,o.kt)("p",null,"We can use this ordering to compare two customer accounts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val customerAccount1: CustomerAccount = BusinessAccount("abc")\n// customerAccount1: CustomerAccount = BusinessAccount(id = "abc")\nval customerAccount2: CustomerAccount = ConsumerAccount("def")\n// customerAccount2: CustomerAccount = ConsumerAccount(id = "def")\n\nval compareCustomerAccounts: Boolean =\n  customerAccount1 < customerAccount2\n// compareCustomerAccounts: Boolean = true\n')),(0,o.kt)("p",null,"We can also use it to compare two business accounts or two consumer accounts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val consumerAccount1: ConsumerAccount = ConsumerAccount("abc")\n// consumerAccount1: ConsumerAccount = ConsumerAccount(id = "abc")\nval consumerAccount2: ConsumerAccount = ConsumerAccount("def")\n// consumerAccount2: ConsumerAccount = ConsumerAccount(id = "def")\n\nval compareConsumerAccounts: Boolean =\n  consumerAccount1 < consumerAccount2\n// compareConsumerAccounts: Boolean = true\n')),(0,o.kt)("p",null,"This just works because a consumer account is a customer account and we know how to order customer accounts."),(0,o.kt)("p",null,"Let's see what happens when we try to do the same thing with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ordering")," type class defined in the Scala standard library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import scala.math.Ordering.Implicits._\n\nsealed trait CustomerAccount\n\ncase class BusinessAccount(id: String) extends CustomerAccount\ncase class ConsumerAccount(id: String) extends CustomerAccount\n\nimplicit val CustomerAccountScalaOrdering: scala.math.Ordering[CustomerAccount] =\n  new scala.math.Ordering[CustomerAccount] {\n    def compare(left: CustomerAccount, right: CustomerAccount): Int =\n      (left, right) match {\n        case (BusinessAccount(id1), BusinessAccount(id2)) => id1 compare id2\n        case (BusinessAccount(_), ConsumerAccount(_))     => -1\n        case (ConsumerAccount(_), BusinessAccount(_))     => 1\n        case (ConsumerAccount(id1), ConsumerAccount(id2)) => id1 compare id2\n      }\n}\n// CustomerAccountScalaOrdering: Ordering[CustomerAccount] = repl.MdocSession$MdocApp2$$anon$1@6a278b4c\n")),(0,o.kt)("p",null,"Besides the lack of specific types in modeling the result of the compare operator this works fine for comparing two customer accounts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val customerAccount1: CustomerAccount = BusinessAccount("abc")\n// customerAccount1: CustomerAccount = BusinessAccount(id = "abc")\nval customerAccount2: CustomerAccount = ConsumerAccount("def")\n// customerAccount2: CustomerAccount = ConsumerAccount(id = "def")\n\nval compareCustomerAccounts: Boolean =\n  customerAccount1 < customerAccount2\n// compareCustomerAccounts: Boolean = true\n')),(0,o.kt)("p",null,"But look what happens when we try to compare two consumer accounts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val consumerAccount1: ConsumerAccount = ConsumerAccount("abc")\nval consumerAccount2: ConsumerAccount = ConsumerAccount("def")\n\nval compareConsumerAccounts: Boolean =\n  consumerAccount1 < consumerAccount2\n// error: value < is not a member of MdocApp2.this.ConsumerAccount\n//   consumerAccount1 < consumerAccount2\n//   ^^^^^^^^^^^^^^^^^^\n')),(0,o.kt)("p",null,"This code doesn't compile! The Scala compiler is unable to compare the consumer accounts because of the lack of variance on ",(0,o.kt)("inlineCode",{parentName:"p"},"scala.math.Ordering"),"."),(0,o.kt)("p",null,"We could widen the type of ",(0,o.kt)("inlineCode",{parentName:"p"},"ConsumerAccount")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomerAccount")," but that is unergonomic. And it wouldn't even work if, for example, we were trying to sort the list and needed to maintain the type information that these were consumer accounts rather than just customer accounts."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Ord")," abstraction helps us avoid problems like this and integrates seamlessly with the rest of ZIO Prelude."),(0,o.kt)("h2",{id:"defining-ord-instances"},"Defining Ord Instances"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Ord")," instances are already defined for all the types in ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," and the Scala standard library that have a total ordering."),(0,o.kt)("p",null,"ZIO Prelude is also very good at automatically deriving ",(0,o.kt)("inlineCode",{parentName:"p"},"Ord")," instances for more complex data types like tuples. For example if we have a pair of ",(0,o.kt)("inlineCode",{parentName:"p"},"Double")," values representing ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," coordinates an ordering is already automatically defined for it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude._\n\nOrd[(Double, Double)]\n// res5: Ord[(Double, Double)] = zio.prelude.Ord$$anon$5@2afaf87b\n")),(0,o.kt)("p",null,"The default instance for tuples will order values by the first field and then if the first field is the same by the second field and so on."),(0,o.kt)("p",null,"If we want to define an ordering for our own data type and potentially include our own ordering logic we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," operator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"case class Point(x: Double, y: Double)\n\nobject Point {\n  implicit val PointOrd: Ord[Point] =\n    Ord.make { (left, right) =>\n      (left.y =?= right.y) <> (left.x =?= right.x)\n    }\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<>")," operator combines two ",(0,o.kt)("inlineCode",{parentName:"p"},"Ordering")," values, using the result of the first one if it is ",(0,o.kt)("inlineCode",{parentName:"p"},"GreaterThan")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"LessThan")," and otherwise using the result of the second one. You can think of this like sorting by last name and then first name."),(0,o.kt)("p",null,"So now we are sorting by the ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," coordinate and then the ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," coordinate."),(0,o.kt)("p",null,"Just like the ",(0,o.kt)("inlineCode",{parentName:"p"},"Equal")," abstraction, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ord")," abstraction supports a ",(0,o.kt)("inlineCode",{parentName:"p"},"contramap")," operator, so we can define a total ordering on a data type as long as we can transform it into another data type that has a total ordering in a way that preserves information."),(0,o.kt)("p",null,"This is particularly useful if we want to define an ",(0,o.kt)("inlineCode",{parentName:"p"},"Ord")," instance for our case classes because we can just derive it from the instances for tuples."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"object Point {\n  implicit val PointOrd: Ord[Point] =\n    Ord[(Double, Double)].contramap(point => (point.y, point.x))\n}\n")),(0,o.kt)("p",null,"ZIO Prelude makes it as easy as possible to use and define instances of ",(0,o.kt)("inlineCode",{parentName:"p"},"Ord")," so we can abstract over the property of having a total ordering and integrate it with other parts of ZIO Prelude."))}d.isMDXComponent=!0}}]);