# MMAP

### 前言及如何学习 MMAP？

一谈到存储、防丢失、高性能、大规模数据传输、进程通信等等字眼，你就知道，该是 MMAP 大显身手了。

内存空间不足是制约大数据操作的一个因素，如果借助硬盘空间协助操作，会进一步加大文件 I/O，影响效率。通过 MMAP 映射可以很好地解决这个问题。换句话说，但凡是需要用磁盘空间代替内存的时候，MMAP 都可以发挥其功效。


那么在学 MMAP 前，你需要有一定的操作系统基础，知道什么是虚存什么是页表，没有基础？不怕，先看看基础篇章。然后了解 MMAP 的优缺点，知道有哪些应用场景，至于底层源码，我们可以等到应用时才来详细阅读。

### 基础
- [linux 进程的虚拟内存](https://blog.csdn.net/fengxinlinux/article/details/52071766)
> 解释了为什么要有虚拟内存？虚拟内存有什么作用？在了解MMAP前，你需要先想清楚，虚拟内存到底解决了什么问题。

### 原理

![内存映射原理](https://s3.ax1x.com/2021/02/12/yrPugP.jpg)

![read系统调用原理](https://s3.ax1x.com/2021/02/12/yrPVNd.jpg)

- [[原创] 深入剖析mmap-从三个关键问题说起](https://www.jianshu.com/p/eece39beee20)
> MMAP 真的会比 I/O 读写快吗？MMAP 比物理内存大的情况下是否有问题？这些问题都能在本文中得到解答。

- [认真分析mmap：是什么 为什么 怎么用](https://www.cnblogs.com/huxiao-tee/p/4660352.html)
> 详细阐述了 MMAP 的使用细节，具有参考意义。

### 图示

- [MMAP原理图示.vsd](https://github.com/feelschaotic/AndroidKnowledgeSystem/tree/master/8.%20%E5%85%B6%E4%BB%96/Linux/MMAP原理图示.vsd)
- [MMAP内存映射技术.gif](https://github.com/feelschaotic/AndroidPrincipleAnimation/blob/master/MMAP%E5%86%85%E5%AD%98%E6%98%A0%E5%B0%84%E6%8A%80%E6%9C%AF.gif)

### 不同 I/O 方式的差异

![不同I/O方式的差异](https://s3.ax1x.com/2021/02/12/yrkoaF.png)
