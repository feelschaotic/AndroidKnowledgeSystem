# JSBridge

### 前言

JsBridge，顾名思义，就是作为 js 和 native 之间通信的桥梁，而且是双向通信的通道。

![](https://s2.ax1x.com/2020/01/08/lgLzCR.png)

### 调用方式
#### 1. Android 调用 JS

![](https://s2.ax1x.com/2020/01/08/lg74l8.png)

#### 2. JS 调用 Android 

![](https://s2.ax1x.com/2020/01/08/lg756S.png)

### 原理

- [移动混合开发中的 JSBridge](https://mp.weixin.qq.com/s/I812Cr1_tLGrvIRb9jsg-A)
> 不管是 Hybrid 应用，还是 React-Native 都离不开 JSBridge，当然也包括在国内举足轻重的微信小程序。那么，JSBridge 到底是什么？它的出现是为了什么？它究竟是怎么实现的？这篇文章会在移动混合开发的范畴内，给大家带来 JSBridge 的深入剖析。

- [Android JSBridge的原理与实现](https://blog.csdn.net/sbsujjbcy/article/details/50752595)
> 深入浅出，既讲明白了原理，又能让读者跟着一步步实践。

- [JSBridge实战](https://juejin.im/post/5bda6f276fb9a0226d18931f)
> 清晰地阐述了 JSBridge 方案设计、交互模型。

- [JSBridge深度剖析](https://yq.aliyun.com/articles/72774)
> 非常棒地阐述了 JSBridge 完整实现流程。

### 开源库

JSBridge 方案比对


开源库 | 优点| 缺点|兼容性
---|---|---|---
[WebViewJavascriptBridge](https://github.com/marcuswestin/WebViewJavascriptBridge) | --| 1. 官方只提供iOS版，第三方Android实现的库大都存在各种各样的问题，有的和iOS版差别太大，有的偶现调用失败。2. 每个api都要单独注册，并且返回值只能通过block或委托|iOS支持iOS7以上
[JsBridge](https://github.com/lzyzsd/JsBridge) | --| 调用偶现失败（js和webview通信机制有问题，通过改变iframe src属性的这种方式并不能保证shouldOverrideUrlLoading每次都会被调用）|--
[DSBridge](https://github.com/wendux/DSBridge-Android) | 1. 支持**同步调用**；2. 跨平台，同时支持ios和android；3. 支持以类的方式集中统一管理API；4. 支持API命名空间；5. 支持调试模式；6. 支持API存在性检测；7. 支持进度回调：一次调用，多次返回|1. 用户量没有前两个框架高；2. 使用js接口注入实现同步，可能有安全风险；3. 代码规范差，注释少，可读性差|1. iOS支持iOS7以上，可以自由选择WKWebView和UIWebview；2. 支持腾讯X5内核；

### 架构设计
- [Hybrid APP架构设计思路](https://github.com/chemdemo/chemdemo.github.io/issues/12)
> 好文！通讯模块的设计、容器的思路非常清晰。
