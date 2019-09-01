# Binder
### 前言

Binder 是 Android 提供的一种进程间通信机制，它是整个 Android 系统的核心，Android 能进行如此丰富自由的多进程开发也多基于 Binder 机制，一句话，“无 Binder 不 Android”。 

但是 Binder 却很难搞明白，复杂程度也远远不是几篇文章就能说清楚的。

我们先从背景入手，理解 Binder 的地位和不可替代性。 --> 再站在高处俯瞰 Binder 的设计，形成一个完整的概念。 --> 再深入理解 Binder 实现原理。

### 背景

- [为什么 Android 要采用 Binder 作为 IPC 机制？](https://www.zhihu.com/question/39440766)
> Android 的内核基于 Linux，在 Linux 中进程间通讯的方式有很多种：管道、FIFO、消息队列、信号量、共享内存及 Socket（Linux进程间通信），为什么不直接采用 Linux 现有的 IPC 方案？看完这个回答你就有了答案。

### 应用层

- [写给 Android 应用工程师的 Binder 原理剖析](https://juejin.im/post/5acccf845188255c3201100f)
> 图文并茂，写得通俗易懂，可以说是初步掌握Binder的必读博文

- [Android Bander设计与实现 - 设计篇](https://blog.csdn.net/universus/article/details/6211589)
> Binder的文章有很多，但多数是从源码角度去分析。源码分析有一个问题就是，细节太多了，特别初接触Binder的话，是很难聚焦到某个具体问题上的，导致很难总结出Binder这套IPC的设计理念和核心结构。所以我强烈推荐这篇文章，一针见血且简单明了。八年过去了，我觉得至今有很多文章都赶不上这篇旧文。

### 底层
