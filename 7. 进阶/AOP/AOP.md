# AOP
### 前言

AOP 即面向切面编程思想，是继 OOP 面向对象编程思想后的又一个伟大思想。AOP 思想是热修复、代码插桩、无埋点统计的基础。

想要掌握 AOP，第一要理解 AOP 的思想，其次要了解 AOP 适用的场景，最后是应用不同 AOP 方法，根据自己的业务场景选用合适的方法，如果想更深入，还可以啃一下方法框架的原理，自己实现自己的 AOP 方法。

### 入门

- [深入理解Android之AOP](https://blog.csdn.net/innost/article/details/49387395)
> 讲解语法超级详细！文章略长，不推荐一口气看完，可以边细细阅读边搭配其他博文加深理解。

- [一文读懂 AOP | 你想要的最全面 AOP 方法探讨](https://juejin.im/post/5c01533de51d451b80257752)
> 如果你刚刚入门 AOP，分不清楚APT、Aspect、Javassist 和 AOP 的关系，不知道 AOP 框架具体有什么区别，这篇文章是你最好的选择！作者对比了主流的 AOP 方法优缺点、作用时机、操作对象和学习成本，让你了解什么是 AOP，AOP 可以应用在哪，AOP 的框架方法有什么区别。

- [Android面向切面编程（AOP）](https://www.jianshu.com/p/aa1112dbebc7)
> 概念讲解 + 语法详解 + AspectJ 实战，通俗易懂

- [安卓AOP三剑客:APT,AspectJ,Javassist](https://www.jianshu.com/p/dca3e2c8608a)
> 详解并横向对比了三种主流的 AOP 方法，还有手把手教你怎么敲 Demo。

- [神策数据-Android_全埋点技术白皮书.pdf](https://github.com/feelschaotic/AndroidKnowledgeSystem/tree/master/7.%20进阶/AOP/神策数据-Android_全埋点技术白皮书.pdf)
> 本书讲解不够深入，建议用来做个 AOP 知识梳理即可。

### 应用落地

- [一文应用 AOP | 最全选型考量 + 边剖析经典开源库边实践，美滋滋](https://juejin.im/post/5c179c136fb9a049e66029dd)
> 为你选择最合适的 AOP 方法提供了方向和要点，分析了经典 APT 框架 ButterKnife 和经典 Aspectj 框架 hugo 的工作流程，并详解了Javassist 的技术基础，如：Gradle、Plugin、Task、Transform，一步步实现一个自动 try-catch 的功能。此篇适合不想拘泥于AOP框架细节，想从大局观掌握 AOP 思想的小伙伴。

- [Android AOP编程的四种策略探讨：Aspectj，cglib+dexmaker，Javassist，epic+dexposed](https://blog.csdn.net/weelyy/article/details/78987087)
> 作者详细讨论了四种 AOP 方法区别，你可将此文作为知识的扩展。

- [spring注解式参数校验](https://blog.csdn.net/jinzhencs/article/details/51682830)
- [使用Spring Aop验证方法参数是否合法](http://www.cnblogs.com/yhtboke/p/5749053.html)
> 想应用 AOP 在参数校验上的小伙伴可以参考下上面两篇 spring 的规则喔。 

#### 1. AspectJ
> AspectJ 是一个基于 Java 语言的 AOP 框架，提供了强大的 AOP 功能，其他很多 AOP 框架都借鉴或采纳其中的一些思想。在 Java 编程中，AspectJ 算是最有名的AOP编程工具，具体有以下几个原因：
>- 功能强大
>- 支持编译期和加载时代码注入
>- 易于使用

- [Android面向切面编程（AOP）](https://www.jianshu.com/p/aa1112dbebc7)
> 简单易懂 AspectJ

- [AOP之AspectJ - 代码注入](https://blog.csdn.net/xuguobiao/article/details/72775743)
> 不管学什么，先跑个 demo 再说，demo 跑起来了才有信心和兴趣去看复杂的语法和原理呀。照着这篇文章，先快速上手AspectJ吧！

- [Aspect Oriented Programming in Android](https://fernandocejas.com/2014/08/03/aspect-oriented-programming-in-android/)
> 经典好文，大多 AOP 的文章都是参考此文，完整地说明了怎么改造 AspectJ 使之运行在 Anroid 上。（如果用了沪江的 AspectJx 或 J神的 Hugo 框架，就可以省去改造这个步骤了）

- [【翻译】Android中的AOP编程](https://www.jianshu.com/p/0fa8073fd144)
> Aspect Oriented Programming in Android 的译文。

- 书籍：《Manning.AspectJ.in.Action 第二版》
> 对 Aspect 写得最通俗易懂的书籍，虽然本意是介绍 Spring 中的 AOP，但对 AspectJ 的解释真的是非常到位，而且还有对 @AspectJ 注解的介绍。

- [AspectJ quick5.pdf](http://www.eclipse.org/aspectj/doc/released/quick5.pdf)
- [AspectJ guidej](http://www.eclipse.org/aspectj/doc/released/progguide/semantics.html)
> 在把玩代码时，如果碰到对 AspectJ 语法不熟悉的问题，可以随时参考以上两份官网的语法大全。

#### 2. Javassist
> Javassist 是一个开源的分析、编辑和创建 Java 字节码的类库。  
> 关于字节码的处理有很多工具，如大名鼎鼎的 ASM。不过这需要直接跟 JVM 的操作和指令打交道。相比而言，Javassist要简单的多，完全是基于 Java 的 API，虽然性能要差一些，但对初学者十分友好。


- [Android热补丁动态修复技术（三）—— 使用Javassist注入字节码，完成热补丁框架雏形（可使用）](https://blog.csdn.net/u010386612/article/details/51131642)
> 见过的最详细最通俗的应用Javassist的博文，步骤合理，逻辑清晰。

- [安卓AOP实战:Javassist强撸EventBus](https://www.jianshu.com/p/33d8a3165b07)
> 百十行代码打造自己的 EventBus，即能应用 Javassist 又能理解 EventBus，一举两得。

- [【译】Javassist 使用指南（一）](https://www.jianshu.com/p/43424242846b)

- [【译】Javassist 使用指南（二）](https://www.jianshu.com/p/b9b3ff0e1bf8)

- [【译】Javassist 使用指南（三）](https://www.jianshu.com/p/7803ffcc81c8)
> 官方译文，工具类，偏语法

#### 3. AST
> AST 是最轻量的 AOP 方法，被广泛用于编译器处理、语法转换、静态代码检查……

- [AST抽象语法树——最基础的javascript重点知识，99%的人根本不了解](https://segmentfault.com/a/1190000016231512)
> 通俗地解释了什么是 AST

- [Article-JavaCodeManipulation_AST](http://www.eclipse.org/articles/Article-JavaCodeManipulation_AST/)
> eclipse 官方介绍 AST

- [openJdk AST](http://openjdk.java.net/groups/compiler/doc/compilation-overview/index.html)
> openJdk 官方介绍 AST

- [AOP 最后一块拼图 | AST 抽象语法树 —— 最轻量级的AOP方法](https://juejin.im/post/5c45bce5f265da612c5e2d3f)
> 对如何利用 AST 进行了详细讲解，且剖析了 ButterKnife 对 AST 的应用，加深理解，全网少有的剖析 ButterKnife AST 的博文

- [安卓AOP之AST:抽象语法树](https://www.jianshu.com/p/5514cf705666)
> 不错的 demo，遗憾的是没有详细讲解

- [基于AST的组件化自动插桩方案](https://www.jianshu.com/p/a827a95fde17)
> 完整的 demo，遗憾的是没有详细讲解，需要自己理解下

#### 4. APT
- [【Android】APT](https://www.jianshu.com/p/7af58e8e3e18)
> 手把手教你通过 APT 实现 ButterKnife 中的 @BindView 功能

### 开源项目

- [XAOP](https://github.com/xuexiangjys/XAOP)
> 基于 Aspectjx 应用 AOP，支持快速点击切片@SingleClick，支持动态申请权限切片@Permission，支持日志打印切片@DebugLog 等等等等，可以仿造这个项目实现自己的 AOP 应用。

- [SAF-AOP DEMO](https://github.com/fengzhizi715/SAF-AOP) 
> 一个封装了常用 Android AOP 场景的 library 

- [android_permission_aspectjx](https://github.com/firefly1126/android_permission_aspectjx)
> 用 Aspectjx 实现的简单、方便、省事的 Android M 动态权限配置框架

- [EasyMVP](http://6thsolution.github.io/EasyMVP)
> 一个强大的 MVP 框架，基于 Clean Architecture 架构，使用 Aspectj、javassisit 字节码织入和 apt 的强大功能自动生成代码，消除了开发MVP时多余的模板代码。  

- [T-MVP](https://github.com/north2016/T-MVP)
> 基于 Realm + Databinding + MVP + Retrofit + Rxjava2 + MaterialDesign + LeanCloud + NodeJS 的 Android AOP 架构

- [S-MVP](https://github.com/UCodeUStory/S-MVP)
> 优化版MVP，使用注解泛型简化代码编写，使用模块化协议方便维护，APT过程使用注解解析器利用 JavaPoetfull_moon_with_face 完成重复模块的编写，利用 Aspect + GradlePlugin 完成横向AOP编程 + Javassist 动态字节码注入 + Tinker 实现热修复 + Retrofit 实现优雅网络操作 + RxJava 轻松玩转数据处理

### 原理

- [AOP 之 @AspectJ 技术原理详解](https://blog.csdn.net/woshimalingyi/article/details/73252013#23-%E6%89%A7%EF%A8%88%E5%8E%9F%EF%A7%A4)
> 图解 AspectJ 是怎么对目标工程的 .class 文件进行代码注入，让你宏观掌握 AspectJ 的执行原理。