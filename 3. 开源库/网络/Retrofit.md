# Retrofit

### 前言

Retrofit 是个小而美的框架，代码量少，对想阅读源码的新手友好，同时精妙融入了大量的设计模式，让你不得不叹服！

另一方面，RxJava + Retrofit + MVP + Dagger2 是 Android 开发的主流框架，掌握 Retrofit 的重要性不言而喻。

### Retrofit 2 新特性介绍

- [用 Retrofit 2 简化 HTTP 请求](https://academy.realm.io/cn/posts/droidcon-jake-wharton-simple-http-retrofit-2/)
> 官方视频 + 讲稿，还需要我介绍啥？！

### 使用

- [Say Hello to Retrofit](https://mp.weixin.qq.com/s?__biz=MzA5MzI3NjE2MA==&mid=2650237358&idx=1&sn=f71478d5c450f588ed1678752ec36f6b&chksm=886398c1bf1411d7d8ae4369114e6737291d278c8a9225364d2a7f8b29d6c40e0db291f74217&mpshare=1&scene=23&srcid=0505uewScyShwaL8zYYYayOR#rd)
> 不同于其他入门博文的一点，本文附带讲解了 RESTful API 的概念，对小白友好。作者通过自己对网络请求的理解以及示例，带大家把官网文档撸个遍。我相信通过这篇文章，尚未入门的朋友肯定有很大收获。

- [你真的会用Retrofit2吗?Retrofit2完全教程](https://www.jianshu.com/p/308f3c54abdd)
> Retrofit 入门文，详解了 Retrofit 注解、Gson 与 Converter、RxJava 与 CallAdapter、自定义 Converter、自定义 CallAdapter，非常适合还没掌握 Retrofit 的小伙伴。

- [Android Retrofit 2.0 的详细 使用攻略（含实例讲解）](https://www.jianshu.com/p/a3e162261ab6)
> **图文详细 + 实例包教包会**，作者 Carson_Ho 的入门类博文全面且详细，值得一看。但是他的源码分析类博文就不推荐了，文风偏说明文，缺少个人思考过程和亮点，实在没有看下去的动力。（不会被打吧，溜了遛了~）
>
> 为什么我强调源码解析一定要有属于自己的思考过程？因为从“站在树荫下的后人”的角度来解析框架真的不难，代码量也就这么多，设计模式也不复杂。但如果是作为开发者和设计者，就真的挺难的，这需要你高度抽象业务，考虑良好的扩展性和易用性。

### 源码分析

- [Retrofit2 源码解析](https://www.jianshu.com/p/c1a3a881a144)
> 比较简单浅显地分析了 Retrofit，但分析到的部分清晰详实，作为源码分析前的一道开胃菜再适合不过了。

- [Android 网络框架 Retrofit 源码解析](https://juejin.im/post/5bd05d5c6fb9a05d2b6dfc46)
> 作者以 API 使用的角度来解析 Retrofit，**自绘时序图**详细说明了 Retrofit 的工作流程，结尾总结 Retrofit 值得借鉴之处升华全文。

- [认真看完这一篇，不懂Retrofit？不存在的（源码解析）](https://www.jianshu.com/p/2f61cafdb192)
> 作者分析源码的思路很有意思，就是在源码里加 log，然后跑源码，看 log 打印顺序。

- [从架构角度看Retrofit的作用、原理和启示](https://www.jianshu.com/p/f57b7cdb1c99)
> 对于 Retrofit 这样设计精妙、代码简洁、使用方便的优秀开源项目，我们不能仅知道如何扩展和使用，或者仅研究它采用的技术或模式，“技”当然重要，但不能忽视了背后的“道”。对于 Retrofit，我们还应该看到的，是它在优化 App 架构方面的努力、提升开发效率方面的借鉴和启示。
>
> 本文对 Retrofit 的扩展性做了大量分析，细细推敲设计过程，站在功能的角度，高度抽象分析一个网络请求中的变与不变，从而反推框架作者的思路，最后还探讨了 Retrofit 给我们带来的启示。个人觉得**本文是讲 Retrofit 架构讲得最棒的博文！**

- [Retrofit分析-漂亮的解耦套路](https://www.jianshu.com/p/45cb536be2f4)
> Retrofit最全设计模式解析，建议读完Retrofit源码细节后再阅读本文，从宏观角度去把控Retrofit的设计。

