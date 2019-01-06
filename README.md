# TheMostCompleteAndroidKnowledgeSystemAndRealStuff

你想要的最全 Android 进阶路线知识图谱 + 干货资料收集，一条龙解决「查漏 -> 搜索资料 -> 专项学习 -> fix 短板」的闭环

# 为什么有这个项目？

相信大家在学习时常常遇到一个困惑：网上这么多的资料和博文，眼花缭乱又不成体系，水文和复制粘贴的文章太多，筛选的工作量实在是太大了，我怎么**又快又好地找到我想要的文章**呢？

所以我萌生写一篇 Android 进阶知识图谱的想法，**有体系有方向有资料，既可以做一个整体的梳理，也可以专项查漏补缺。** 如果你是个 Android 新人，不善于搜索或不知道开始新知识点，那么我相信这份列表，将会**成为你的首选**。

本文章会不断更新，直到我头发掉光为止（手动狗头）。

当然，受限于个人水平，有错误请多多指正，对于某个问题你有更好的 Tips，欢迎提个 Issues 或者 pr，诚邀你和我一起成长，欢迎一起来维护这个项目！

**如果本项目对你哪怕有一点点帮助，请 Star！你的鼓励是我写作的最大动力！**

# 和别的知识体系有什么区别？

一个字，最全面

# 你能得到什么？

- 对 Android 知识体系完整的掌握
- 建立碎片化知识点的关联
- 节省时间，快速找到优秀的专项博文
- 推广导流，欢迎投稿自己优秀的博文，万一这个项目火了呢？（斜眼笑）

---

# Android 最全知识体系图谱

![](https://upload-images.jianshu.io/upload_images/3167794-c9b852ba0fbe68ee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 知识体系目录

## 一、系统源码学习

### 组件

#### 四大组件解析

##### Activity

###### Activity的启动过程

###### 启动流程和启动模式

###### 生命周期

###### 与Window/View的关系

###### 与Fragment的关系

##### Service

###### IPC（AIDL）、IntentService

##### ContentProvider全方位解析

##### BroadcastReceiver全方位解析

###### 静态、有序、本地、粘性

#### Fragment

##### 懒加载

##### 与Activity通信

#### Context详解

#### Window

##### Toast

##### Dialog

##### PopupWindow

##### PopupWindow和Dialog区别

#### WebView

##### JSBridge

##### Deeplink

##### 首屏加速

##### 离线包

#### RecyclerView

##### 四级缓存+局部刷新

##### 与ListView比较

#### LinearLayout 和 RelativeLayout 相同层级下效率比较

### 系统服务

#### ActivityManagerService

#### Window和WindowManager

#### WindowManagerService

#### ServiceManager

### 流程

#### Android系统启动过程

##### system_server启动过程

#### Android Apk安装过程

#### Android应用进程启动

### 通讯

#### WIFI

#### NFC

#### 蓝牙

## 二、架构能力

### 设计模式

#### Android源码中的设计模式应用

#### OOD原则

### 架构模式

#### MVP

#### MVVM

##### DataBinding

#### Flux

#### Clean Architecture

#### Android Architecture Components

#### Android Jetpack架构

### App框架

#### 分包

#### 分层

## 三、开源库

### ORM框架

#### GreenDao

#### Room

### 事件总线

#### EventBus

##### 4种模式、粘性事件

##### 观察者模式解耦

### 网络

#### Retrofit

##### 动态代理

##### 运行时注解

##### GsonConverter

##### RxJava2CallAdapter

#### OKHttp

##### 拦截器（责任链模式）

##### 超时重传&重定向

##### Http缓存

##### Socket连接池复用

#### Volley

### 图片

#### Glide

##### 生命周期控制

##### 二级缓存

##### BitmapPool复用

#### Fresco

#### Picasso

### 依赖注入

#### butterknife

##### apt

#### Dagger2

### 序列化

#### Gson

#### FastJson

### ARouter

### 响应式编程

#### RxJava

##### 常用操作符

##### 线程调度

##### 异常处理

##### Flowable背压

#### RxBinding

#### RxAndroid

## 四、测试

### 单元测试

#### robolectric

### 自动化测试

#### UI自动化

#### Money

## 五、常见机制

### 线程通信

#### Handler原理

#### AsyncTask

#### HandlerThread

#### IntentService

#### RxJava

### 进程

#### IPC通信Binder

##### AIDL

##### 序列化

##### 匿名共享内存

#### lowmemorykiller 

#### 进程的优先级

### View体系

#### 自定义控件

##### 事件分发机制

###### 滑动冲突

###### 滑动、嵌套滑动

##### 自定义动画

##### Lottie动画解析库

##### 绘制

### Android消息机制

### 本地存储

#### Sqlite、SharedPreferences、文件

### 资源管理系统、资源加载机制

## 六、基础能力

### Java高级

#### 反射

#### 动态代理

#### NIO

#### 垃圾回收和GC

#### 多线程（并发锁）

#### 网络协议

#### 集合框架

### 数据结构和算法

#### 线性表

#### 栈和队

#### 树

##### 树的基础

##### 其他常见的树

##### 并查集

##### B-树，B+树，B*树

#### 图

##### 图的基础

##### 拓扑排序

##### Kruskal算法、Prim算法、Dijkstra算法、Floyd算法

#### 散列查找

#### 排序

#### 海量数据处理

### 操作系统

### 计算机网络

#### DNS HTTP/1.x HTTPs HTTP/2 TCP 等网络协议知识

#### SSL

### 虚拟机

#### JVM

#### ART & Dalvik

##### AOT compilation 

##### GC

##### Bytecode & Dex

## 七、进阶

### 资源管理

#### 主题样式

#### 多分辨率适配

#### AssertManager

#### Resource

### 打包

#### Gradle

#### 编译

#### 混淆

#### 签名

### AOP

#### AspectJ

#### APT

#### Javassist

### 插件化技术

#### class和dex学习

#### ClassLoader原理

##### 如何hook Activity启动流程

##### 双亲委派

#### 插件化原理

#### 插件化框架学习

### 组件化

#### 页面路由

### 热修复

#### tinker

#### 插桩

#### ASM字节码

### 消息推送&保活

#### 长连接保活

##### 心跳包

#### 进程保活

### NDK

#### 调用JNI方法

#### 回调JAVA方法

#### CMAKE语法

#### NDK MakeFile语法

### 安全

#### root原理

#### 二进制漏洞挖掘

#### 经典的漏洞研究如cve20143153 cve20153636之类

#### poc和exp

#### 逆向

##### arm汇编

##### smali字节码

##### dex和ELF结构

##### 安卓和Linux调试体系和反调式体系

##### 加固与反加固

##### Hook

### 多媒体

#### 图片

##### 图片处理

###### Bitmap压缩策略

###### Bitmap裁剪

###### Bitmap复用

##### 动画

###### View动画、帧动画、属性动画

##### 图片加载

###### 缓存策略

#### 音视频

##### 音频编解码

##### AudioTrack播放

##### 视频解码

##### OpenGL绘制

##### 视频编辑转码

##### 视频滤镜

### 性能优化

#### 启动时间和冷启动优化

##### 避免启动白屏

#### Crash 收集分析

#### 卡顿检测和优化

##### ARR

##### 避免频繁GC

##### ViewHolder

#### 布局优化

##### include、merge、ViewStub的使用

#### 线程优化

#### 监控

##### 埋点

##### APM性能检测

##### WebView性能监控

##### leakcanary内存泄露监控

#### 内存优化

##### OOM

##### 内存泄露

##### 图片压缩

##### 内存分析

###### MAT

###### monitor

#### apk瘦身

#### 电量优化

#### 网络优化

##### 网络调试

###### Charles

###### Fiddler

###### tcpdump

###### postman

##### 低网速优化

##### API优化

##### 流量优化

### 混合开发

#### React Native

#### Fuchsia+Flutter+Dart

#### weex

### 持续集成

#### Jenkins

## 八、其他

### Python

### Linux

#### kernel源码

#### SELinux

### Docker

## 九、Android 书籍

### 入门

#### 第一行代码

#### Android群英传

#### Android编程权威指南

#### Android编程实战

### 进阶

#### Android开发进阶从小工到专家

#### 深入理解Android

#### Android组件化架构

#### App研发录

#### Android 进阶解密

#### Android 进阶之光

### 源码

#### Android源码设计模式解析与实战

#### Android开发艺术探索

#### Creating Dynamic UI with Android Fragments

### 安全

#### Android安全架构深究

#### Android软件安全与逆向分析

### 底层

#### Android系统源代码情景分析  

#### Android内核剖析

#### 深入理解Android内核设计思想  

## 十、T型成长

### 团队管理

#### 敏捷

#### Devops

#### CodeReview

### 自我管理

### 后端

#### 领域驱动设计

#### 微服务

## 十一、语言

### Kotlin

### C、C++（NDK）

### SQL（DB）

