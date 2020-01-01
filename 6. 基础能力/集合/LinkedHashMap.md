# LinkedHashMap原理

## 前言
一谈到 `LRU` 就离不开 `LinkedHashMap`，你想想，有哪个数据结构，既有 `O(1)` 的取值复杂度（不冲突的情况下），又能有序。**摸清楚`LinkedHashMap`，你也可以自己设计一个淘汰自策略的 `LRU`容器了**。

由于 `LinkedHashMap` 继承自 `HashMap`，所以**在分析源码之前一定要先看看 `HashMap` 的源码**。

顺便说一句，`LinkedHashMap` 利用了 `Hook` 方法，使得自己实现有序机制的同时又能最大程度复用 `HashMap` 原有的流程，是**模板模式的绝佳应用**。

## 博文
- [图解LinkedHashMap原理](https://www.jianshu.com/p/8f4f58b4b8ab)
> 通俗易懂，一篇你就能搞懂 LinkedHashMap 的原理，美中不足是本文基于 jdk1.7。