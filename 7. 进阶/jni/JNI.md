# JNI
### 前言

关于 JNI，我觉得合格的开发工程师需要掌握以下几点：
- 能够用 ndk-build 或 cmake 构建 JNI 工程
- 掌握 mk 语法
- 了解动态链接库的加载流程和原理
- 了解 JNI 的注册流程

### 使用

- [JNI入门这篇文章就够了(含demo)](https://juejin.im/post/5a2a3f416fb9a0450167df22)
> 非常完整的JNI操作函数介绍和demo，可用来做JNI开发的查阅手册。

### 原理

- [理解 JNI 技术](https://pqpo.me/2017/05/17/jni/)
> 用来作为JNI原理学习的入门文章，让你先做好知识点铺垫。

- [Android JNI原理分析](http://gityuan.com/2016/05/28/android-jni/)
> 通过实例，从源码视角分析JNI原理，讲述JNI核心功能：
> - 介绍如何查找JNI方法，明白如何从Java层跳转到Native层；
> - 分析JNI函数注册流程
> 非常易懂！

- [loadLibrary动态库加载过程分析](http://gityuan.com/2017/03/26/load_library/)
> 可作为JNI注册过程的理解补充

- [Android 动态链接库加载原理及 HotFix 方案介绍](https://mp.weixin.qq.com/s?__biz=MzA3NTYzODYzMg==&mid=2653577702&idx=1&sn=1288c77cd8fc2db68dc92cf18d675ace&scene=4#wechat_redirect)
> 好文！从UnsatisfiedLinkError异常说起，层层解析so加载流程，遗憾的是源码截图没有划重点，看起来比较吃力。

### 扩展
- [【我的Android进阶之旅】Android 关于arm64-v8a、armeabi-v7a、armeabi、x86下的so文件兼容问题](https://blog.csdn.net/ouyang_peng/article/details/51168072)
> 我们往往很容易对.so文件应该放在或者生成到哪里感到困惑，本文介绍了兼容处理的一些注意事项，顺带说一句，以减少APK包大小为借口移除其他ABIs是一个偏激的做法，这会影响到函数库的性能和兼容性，我们可以选择在应用市场上传指定ABI版本的APK。
