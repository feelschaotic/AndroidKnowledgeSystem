# AOP
### 前言

AOP：面向切面编程思想，是继OOP面向对象编程思想后，又一个伟大思想。AOP 思想是热修复、代码插桩、无埋点统计的基础。

### 入门

- [深入理解Android之AOP](https://blog.csdn.net/innost/article/details/49387395)
> 讲解语法超级详细！

- [一文读懂 AOP | 你想要的最全面 AOP 方法探讨](https://juejin.im/post/5c01533de51d451b80257752)
> 对比了主流的AOP方法优缺点、作用时机、操作对象和学习成本，让你了解什么是AOP，AOP可以应用在哪，AOP的框架方法有什么区别

- [Android面向切面编程（AOP）](https://www.jianshu.com/p/aa1112dbebc7)
> 概念讲解+语法详解+AspectJ实战，通俗易懂

- [安卓AOP三剑客:APT,AspectJ,Javassist](https://www.jianshu.com/p/dca3e2c8608a)
> 详解三种主流的AOP方法，还有手把手教你怎么敲 Demo。

- [神策数据-Android_全埋点技术白皮书.pdf](https://github.com/feelschaotic/AndroidKnowledgeSystem/tree/master/AOP/神策数据-Android_全埋点技术白皮书.pdf)

### 应用落地

- [一文应用 AOP | 最全选型考量 + 边剖析经典开源库边实践，美滋滋](https://juejin.im/post/5c179c136fb9a049e66029dd)
> 为你选择最合适的AOP方法提供了方向和要点，分析了经典APT框架ButterKnife和经典Aspectj框架hugo的工作流程，并详解了Javassist的技术基础，如：Gradle、Plugin、Task、Transform，一步步实现一个自动try-catch的功能。此篇适合不想拘泥于AOP框架细节，想从大局观掌握AOP思想的小伙伴。

- [安卓AOP实战:Javassist强撸EventBus](https://www.jianshu.com/p/33d8a3165b07)

#### 1. Aspect

- [Aspect Oriented Programming in Android](https://fernandocejas.com/2014/08/03/aspect-oriented-programming-in-android/)

- [Aspect Oriented Programming in Android 翻译版](https://www.jianshu.com/p/0fa8073fd144)

书籍：Manning.AspectJ.in.Action第二版

#### 2. Javassist
- [Android热补丁动态修复技术（三）—— 使用Javassist注入字节码，完成热补丁框架雏形（可使用）](https://blog.csdn.net/u010386612/article/details/51131642)

> 见过的最详细最通俗的应用Javassist的博文

- [【译】Javassist 使用指南（一）](https://www.jianshu.com/p/43424242846b)
- [【译】Javassist 使用指南（二）](https://www.jianshu.com/p/b9b3ff0e1bf8)
- [【译】Javassist 使用指南（三）](https://www.jianshu.com/p/7803ffcc81c8)
> 官方译文，工具类，偏语法

#### 3. AST
- [安卓AOP之AST:抽象语法树](https://www.jianshu.com/p/5514cf705666)
- [基于AST的组件化自动插桩方案](https://www.jianshu.com/p/a827a95fde17)
- [eclipse官方介绍AST](http://www.eclipse.org/articles/Article-JavaCodeManipulation_AST/)

#### 4. APT
- [【Android】APT](https://www.jianshu.com/p/7af58e8e3e18)
> 手把手教你通过 APT 实现 ButterKnife 中的 @BindView 功能

### 原理