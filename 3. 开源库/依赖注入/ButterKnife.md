# ButterKnife
### 前言

J 神出品，必属精品，又是一个小而美的开源框架，重点在于 ButterKnife 不断迭代完善的历史进程，从之前的运行时反射处理注解，再到改为无损性能的 apt，再到巧思支持 lib。这都体现了 ButterKnife 与时俱进，追求最优的态度。

### 源码分析

- [how-butterknife-actually-works](https://medium.com/@lgvalle/how-butterknife-actually-works-85be0afbc5ab)
> 简述了ButterKnife的流程，很多ButterKnife源码分析文章都是参考了本文。

- [ButterKnife源码分析](https://www.jianshu.com/p/1c449c1b0fa2)
> 作者分析的思路清晰成线，还给源码加了非常详细的注释，想要对ButterKnife有基本了解的，不妨一看。

### 进阶

- [拆 Jake Wharton 系列之 ButterKnife](https://www.jianshu.com/p/b8b59fb80554)
> 从不同角度阐述了ButterKnife优秀的设计，很多源码解析文章往往只顾着大点，比如全网都着重在于ButterKnife的APT，而本篇文章留意到了细节，比如单测、Lint、R2，可谓非常优秀了。

- [一文应用 AOP | 最全选型考量 + 边剖析经典开源库边实践，美滋滋](https://juejin.im/post/5c179c136fb9a049e66029dd)
> 图解ButterKnife的工作流程，从全局上掌握ButterKnife设计。

- [AOP 最后一块拼图 | AST 抽象语法树 —— 最轻量级的AOP方法](https://juejin.im/post/5c45bce5f265da612c5e2d3f)
> 全网少有的剖析ButterKnife AST的博文，详细说明了ButterKnife 是怎么解决library的R问题的？为什么ButterKnife要使用AST？怎样解决的？

