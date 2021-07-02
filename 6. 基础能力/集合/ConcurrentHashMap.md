# ConcurrentHashMap

总体来说，许多人对于ConcurrentHashMap的印象，停留在以分段锁减轻免竞争条件的并发实现，这不足以完全说明其优势。

回到并发编程领域，提高并发效率可从几方面入手：
![](https://user-images.githubusercontent.com/23227460/124245742-d9a1e880-db52-11eb-85a3-7fc22fa37dc5.png)

1. 减少临界区区域：这是容易理解的，在并发中，临界区是依次通过的，即临界区是串行的。
2. 加速通过临界区：使临界区内的逻辑代码执行得尽可能地快，这样，线程在临界区内停留的时间更短。
3. 减少竞争条件：通过去除不必要的竞争条件，或竞争不同的临界区，来减少线程间的相互影响。

ConcurrentHashMap对于并发效率的优化，也将从这几方面入手。

## 博文
- [图解ConcurrentHashMap](https://juejin.cn/post/6844903520957644808)
> 从普遍的角度（源码和对外API）一一来解析 ConcurrentHashMap 的原理。

- [见识不一样的ConcurrentHashMap](https://mp.weixin.qq.com/s/UXV34hYMHwsFBe9AQCZvLg)
> 换了另一个切入点 —— 从优化的角度来解析 ConcurrentHashMap，到底 ConcurrentHashMap 在实现并发安全的基础上如何一步步优化以更好地支持高并发呢？且看本文。
