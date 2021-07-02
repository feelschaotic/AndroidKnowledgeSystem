# Kotlin协程

### 前言

全网能把协程讲明白的，很少，非常少，因为协程对于 Java、Android 工程师来说，还是个新概念，所以想要学好协程，第一步是要理清楚：协程的本质是什么？协程的出现是为了解决什么痛点？有哪些缺点？非它不可吗？RxJava 不香了吗？第二步，上手尝试下协程，是否满足业务场景？有没有什么注意事项？最后，使用协程代替 RxJava，看看性能对比效率对比。

协程一定要重基础认知，因为这是一个思想概念，而不是一个简单的调度工具。

### 基础认知

- [我教我自己-协程](https://zhuanlan.zhihu.com/p/88472716)
- [我教我自己-协程2](https://zhuanlan.zhihu.com/p/88559739)
> 【推荐】浅显易懂地说明了协程的特性、和线程的区别，以及如何使用生成器来实现协程。全网少见的可以把协程线程区别说明白的博文。

- [程序员应如何理解协程](https://zhuanlan.zhihu.com/p/339837580)
> 生动形象地解释了协程要解决的问题以及达到的目的。

- [协程基础——Linux内核中断和io](https://blog.csdn.net/weixin_42063726/article/details/106143062)
> 协程确实没那么好理解，因为理解需要明白两个东西，Linux内核中断、IO总线机制。

### 实践

- [Kotlin协程Coroutines入门到实战：（一）理解异步回调的本质](https://blog.csdn.net/NJP_NJP/article/details/103513537)
- [Kotlin协程Coroutines入门到实战：（二）Coroutines初体验](https://blog.csdn.net/NJP_NJP/article/details/103513719)
- [Kotlin协程Coroutines入门到实战：（三）Coroutines+Retrofit+ViewModel+LiveData实现MVVM客户端架构](https://blog.csdn.net/NJP_NJP/article/details/103524778)
> 【推荐】或许我们很少去思考，为什么我们需要回调？回调的目的到底是什么？有没有其他方式来代替实现这个目的呢？作者从异步回调的本质说起，引出了协程的优势，再来个 MVVM 实战把协程的使用吃透，非常优秀的三系列文。
