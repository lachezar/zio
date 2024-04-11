"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[52216],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(g,i(i({ref:a},c),{},{components:t})):n.createElement(g,i({ref:a},c))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48728:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(58168),r=(t(96540),t(15680));const o={id:"index",title:"Getting Started with ZIO Kafka",sidebar_label:"Getting Started"},i=void 0,s={unversionedId:"zio-kafka/index",id:"zio-kafka/index",title:"Getting Started with ZIO Kafka",description:"ZIO Kafka is a Kafka client for ZIO. It provides a purely functional, streams-based interface to the Kafka client and integrates effortlessly with ZIO and ZIO Streams.",source:"@site/docs/zio-kafka/index.md",sourceDirName:"zio-kafka",slug:"/zio-kafka/",permalink:"/zio-kafka/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-kafka/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Getting Started with ZIO Kafka",sidebar_label:"Getting Started"},sidebar:"ecosystem-sidebar",previous:{title:"Scalaz 7.x Interop",permalink:"/zio-json/interop/scalaz-7x"},next:{title:"Consuming Kafka topics using ZIO Streams",permalink:"/zio-kafka/consuming-kafka-topics-using-zio-streams"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2},{value:"Resources",id:"resources",level:2},{value:"Adopters",id:"adopters",level:2}],c={toc:p},d="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-kafka"},"ZIO Kafka")," is a Kafka client for ZIO. It provides a purely functional, streams-based interface to the Kafka client and integrates effortlessly with ZIO and ZIO Streams."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/zio/zio/wiki/Project-Stages"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Project%20Stage-Production%20Ready-brightgreen.svg",alt:"Production Ready"}))," ",(0,r.yg)("img",{parentName:"p",src:"https://github.com/zio/zio-kafka/workflows/CI/badge.svg",alt:"CI Badge"})," ",(0,r.yg)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/releases/dev/zio/zio-kafka_2.13/"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/nexus/r/https/oss.sonatype.org/dev.zio/zio-kafka_2.13.svg?label=Sonatype%20Release",alt:"Sonatype Releases"}))," ",(0,r.yg)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/dev/zio/zio-kafka_2.13/"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/dev.zio/zio-kafka_2.13.svg?label=Sonatype%20Snapshot",alt:"Sonatype Snapshots"}))," ",(0,r.yg)("a",{parentName:"p",href:"https://javadoc.io/doc/dev.zio/zio-kafka-docs_2.13"},(0,r.yg)("img",{parentName:"a",src:"https://javadoc.io/badge2/dev.zio/zio-kafka-docs_2.13/javadoc.svg",alt:"javadoc"}))," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-kafka"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/github/stars/zio/zio-kafka?style=social",alt:"ZIO Kafka"}))),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"Apache Kafka is a distributed event streaming platform that acts as a distributed publish-subscribe messaging system. It enables us to build distributed streaming data pipelines and event-driven applications."),(0,r.yg)("p",null,"Kafka has a mature Java client for producing and consuming events, but it has a low-level API. ZIO Kafka is a ZIO native client for Apache Kafka. It has a high-level streaming API on top of the Java client. So we can produce and consume events using the declarative concurrency model of ZIO Streams."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("p",null,"In order to use this library, we need to add the following line in our ",(0,r.yg)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-kafka"         % "2.7.1"\nlibraryDependencies += "dev.zio" %% "zio-kafka-testkit" % "2.7.1" % Test\n')),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"Let's write a simple Kafka producer and consumer using ZIO Kafka with ZIO Streams. Before everything, we need a running instance of Kafka. We can do that by saving the following docker-compose script in the ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose.yml")," file and run ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose up"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"version: '2'\nservices:\n  zookeeper:\n    image: confluentinc/cp-zookeeper:latest\n    environment:\n      ZOOKEEPER_CLIENT_PORT: 2181\n      ZOOKEEPER_TICK_TIME: 2000\n    ports:\n      - 22181:2181\n  \n  kafka:\n    image: confluentinc/cp-kafka:latest\n    depends_on:\n      - zookeeper\n    ports:\n      - 29092:29092\n    environment:\n      KAFKA_BROKER_ID: 1\n      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181\n      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092,PLAINTEXT_HOST://localhost:29092\n      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT\n      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT\n      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1\n")),(0,r.yg)("p",null,"Now, we can run our ZIO Kafka Streaming application:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.kafka.consumer._\nimport zio.kafka.producer.{Producer, ProducerSettings}\nimport zio.kafka.serde._\nimport zio.stream.ZStream\n\nobject MainApp extends ZIOAppDefault {\n  val producer: ZStream[Producer, Throwable, Nothing] =\n    ZStream\n      .repeatZIO(Random.nextIntBetween(0, Int.MaxValue))\n      .schedule(Schedule.fixed(2.seconds))\n      .mapZIO { random =>\n        Producer.produce[Any, Long, String](\n          topic = "random",\n          key = random % 4,\n          value = random.toString,\n          keySerializer = Serde.long,\n          valueSerializer = Serde.string\n        )\n      }\n      .drain\n\n  val consumer: ZStream[Consumer, Throwable, Nothing] =\n    Consumer\n      .plainStream(Subscription.topics("random"), Serde.long, Serde.string)\n      .tap(r => Console.printLine(r.value))\n      .map(_.offset)\n      .aggregateAsync(Consumer.offsetBatches)\n      .mapZIO(_.commit)\n      .drain\n\n  def producerLayer =\n    ZLayer.scoped(\n      Producer.make(\n        settings = ProducerSettings(List("localhost:29092"))\n      )\n    )\n\n  def consumerLayer =\n    ZLayer.scoped(\n      Consumer.make(\n        ConsumerSettings(List("localhost:29092")).withGroupId("group")\n      )\n    )\n\n  override def run =\n    producer.merge(consumer)\n      .runDrain\n      .provide(producerLayer, consumerLayer)\n}\n')),(0,r.yg)("h2",{id:"resources"},"Resources"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://ziverge.com/blog/introduction-to-zio-kafka/"},"An Introduction to ZIO Kafka")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://scalac.io/streaming-microservices-with-zio-and-kafka/"},"Streaming microservices with ZIO and Kafka")," by Aleksandar Skrbic (February 2021)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=GECv1ONieLw"},"ZIO WORLD - ZIO Kafka")," by Aleksandar Skrbic (March 2020) \u2014 Aleksandar Skrbic presented ZIO Kafka, a critical library for the modern Scala developer, which hides some of the complexities of Kafka.")),(0,r.yg)("h2",{id:"adopters"},"Adopters"),(0,r.yg)("p",null,"Here is a partial list of companies using zio-kafka in production."),(0,r.yg)("p",null,"Want to see your company here? ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-kafka/edit/master/docs/index.md"},"Submit a PR"),"!"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.conduktor.io"},"Conduktor")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.kelkoogroup.com"},"KelkooGroup")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://rocker.com"},"Rocker"))))}u.isMDXComponent=!0}}]);