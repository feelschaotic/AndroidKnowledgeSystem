# Binder
### 前言

Binder 是 Android 提供的一种进程间通信机制，它是整个 Android 系统的核心，Android 能进行如此丰富自由的多进程开发也多基于 Binder 机制，一句话，“无 Binder 不 Android”。 

但是 Binder 却很难搞明白，复杂程度也远远不是几篇文章就能说清楚的。

我们先从背景入手，理解 Binder 的地位和不可替代性。 --> 再站在高处俯瞰 Binder 的设计，形成一个完整的概念。 --> 再深入理解 Binder 实现原理。

### 背景

- [为什么 Android 要采用 Binder 作为 IPC 机制？](https://www.zhihu.com/question/39440766)
> Android 的内核基于 Linux，在 Linux 中进程间通讯的方式有很多种：管道、FIFO、消息队列、信号量、共享内存及 Socket（Linux进程间通信），为什么不直接采用 Linux 现有的 IPC 方案？看完这个回答你就有了答案。

### 应用层

- [Binder学习指南](http://weishu.me/2016/01/12/binder-index-for-newer/)
> 非常详细的一份学习指南，讲解也通俗易懂，适合对Binder一无所知或不知道如何入手学习Binder的小伙伴阅读。

- [写给 Android 应用工程师的 Binder 原理剖析](https://juejin.im/post/5acccf845188255c3201100f)
> 图文并茂，写得通俗易懂，可以说是初步掌握Binder的必读博文

- [Android Bander设计与实现 - 设计篇](https://blog.csdn.net/universus/article/details/6211589)
> Binder的文章有很多，但多数是从源码角度去分析。源码分析有一个问题就是，细节太多了，特别初接触Binder的话，是很难聚焦到某个具体问题上的，导致很难总结出Binder这套IPC的设计理念和核心结构。所以我强烈推荐这篇文章，以一种宏观的角度解释了Android系统中的Binder机制。八年过去了，我觉得至今有很多文章都赶不上这篇旧文。

### 底层

- [Android跨进程通信IPC系列文](https://www.jianshu.com/p/36b488863bc0)
> Binder系列文，由浅入深，方方面面。

- [一篇文章了解相见恨晚的 Android Binder 进程间通讯机制](https://blog.csdn.net/freekiteyu/article/details/70082302)
> 图画得相当不错。

- [Android进程间通信（IPC）机制Binder简要介绍和学习计划](https://blog.csdn.net/luoshengyang/article/details/6618363)
> 老罗的系列文章从系统源码角度深入分析了Binder的实现细节，具有很大的参考意义。

- [gityuan Binder系列](http://gityuan.com/2015/10/31/binder-prepare/)
> 基于Android 6.0的源码剖析。

- [wangkuiwu Binder机制(一) Binder的设计和框架](http://wangkuiwu.github.io/2014/09/01/Binder-Introduce/#anchor2_2_2)
> 比较老的博文了，胜在图画得非常不错，可以做个参考。

### 最后

- [听说你Binder机制学的不错，来面试下这几个问题](https://www.jianshu.com/p/adaa1a39a274)
> 挖掘出Binder一些难以理解或细节的点。

### 后记

Binder 机制我觉得非常有趣，为什么呢？

1. 与其它 IPC 不同，Binder 机制用**面向对象的思想**来做设计，Binder 是一个实体位于 Server，引用位于 Client 的对象，该对象提供了一套方法用以实现对 Server 的请求，就象类的成员函数。那在 Client 看来，通过 Binder 引用调用其提供的方法和通过指针调用其它任何本地对象的方法并无区别。**就好像协程的魅力，让你可以用同步的方式写异步代码，Binder 让你用调本地方法的方式调远程服务。**

2. **MMAP 的改造**，MMAP 通常用在有物理介质的文件系统上，实现磁盘与用户空间的映射。而 Binder 并不存在物理介质，却能巧妙使用 MMAP 在内核空间创建数据接收的缓存空间，将内核空间与接收方的用户空间进行内存映射。

所以你说，妙不妙？
