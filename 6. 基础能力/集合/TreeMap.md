# TreeMap

提起红黑树大家都不陌生，提起 TreeMap 却少有人了解，TreeMap 底层通过红黑树（Red-Black tree）实现，也就意味着 containsKey(), get(), put(), remove() 都有着 log(n) 的时间复杂度。

另一个更重要的特性是，key 支持排序，这给应用层带来了无限的发挥空间。

比如在阅读 ARouter 路由框架的时候，我就很好奇，拦截器的自定义优先级是如何实现的呢？为啥不允许多个拦截器有相同的优先级，是怎么做到的呢？开扒源码，原来是继承了 TreeMap 实现了 UniqueKeyTreeMap<Integer, 拦截器实体>，数值越小就越优先添加拦截器，所以属性值设置得越低，优先级越高。
