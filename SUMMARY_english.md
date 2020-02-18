# Knowledge System Catalog

## 0、Trend

- [Trend of Mobile-app Develop](0. Trend/Trend of Mobile-app Develop.md)

## 1、Learning System Source Code

- Components
  - Android Four Components
    - Activity
      - Launching Process of Activity
      - Launching Procedure&Mode
      - Lifecycle
      - Relationship with Window/View
      - Relationship with Fragment
    - Service
      - IPC（AIDL）、IntentService
    - Insight into ContentProvider
    - Insight into BroadcastReceiver
  - Fragment
    - Lazy Load
    - Communicate with Activity
  - Insight into Context
  - Window
    - Toast
    - Dialog
    - PopupWindow
    - Differences between PopupWindow&Dialog
  - [WebView](https://github.com/KamiyamaSatoru/AndroidKnowledgeSystem/blob/master)
    - [JSBridge](1. 系统源码/组件/WebView/JSBridge.md)
    - Deeplink
    - [Accelerate Method](1. 系统源码/组件/WebView/加速方案.md)
  - RecyclerView
    - Level 4 Cache + Partial Refresh
    - Comparision with ListView
  - Comparision of LinearLayout & RelativeLayout's efficiency at the Same Layer
- System Service
  - ActivityManagerService
  - Window&WindowManager
  - WindowManagerService
  - ServiceManager
- procedure
  - Starting Procedure in Android System
    - Starting Procedure of system_server
  - Android Apk Installation
  - Android Application Process Launch
- Communication
  - WIFI
  - NFC
  - Bluetooth

## 2、Architecture

- [Design Patterns](2. 架构能力/设计模式/设计模式.md)
- Architecture Pattern
  - MVP
  - MVVM
    - DataBinding
  - Flux
  - Clean Architecture
  - Android Architecture Components
  - Android Jetpack Architecture
- App Framework
  - Package Designing
  - Layering

## 3. Open Source Library

- [How to thoroughly grasp Open Source Library](3.OpenSourceLibrary/HowToThoroughlyGraspOpenSourceLibrary.md)
- [ORM Frame](https://github.com/KamiyamaSatoru/AndroidKnowledgeSystem/blob/master)
  - GreenDao
  - Room
- EventBus
  - EventBus(Open Source Lib)
    - 4 mode and sticky event
    - Observer Pattern for decoupling
- [Network](https://github.com/KamiyamaSatoru/AndroidKnowledgeSystem/blob/master)
  - [Retrofit](3.OpenSourceLibrary/Network/Retrofit.md) 
  - OKHttp
    - Interceptor（Chain Of Responsibility Model）
    - Timeout Retransmission & Redirect
    - Http Cache
    - Reuse Of Socket Connection Pool
  - Volley
- Image
  - [Glide](3. Open Source Library/Image/Glide.md)
  - [Fresco](3. Open Source Library/Image/Fresco.md)
  - Picasso
- [Dependency Injection](https://github.com/KamiyamaSatoru/AndroidKnowledgeSystem/blob/master)
  - [ButterKnife](3.OpenSourceLibrary/DependencyInjection/ButterKnife.md)
  - Dagger2
- Serialization
  - Gson
  - FastJson
- ARouter
- Responsive Program
  - RxJava
    - Commonly used operator
    - Thread Scheduling
    - Exception Handling
    - Flowable Back Pressure
  - RxBinding
  - RxAndroid

## 4. Test

- UnitTest
  - Robolectric
  - Automated Test
  - UI Automation
  - Monkey

## 5. Common Mechanism

- Thread Communication
  - Handler Principle
  - AsyncTask
  - HandlerThread
  - IntentService
  - RxJava
- [Binder Mechanism](5. CommonMechanism/BinderPrinciple.md)
- Thread
  - lowmemorykiller 
  - Thread Priority
- View System
  - Custom Control
    - Event Distribution Mechanism
    - Custom animation 
    - Lottie Parsing Library
    - Draw
- Android Message Mechanism
- Local Storage
  - Sqlite, SharedPreferences and File
- Resource Management System and Resource Loading Mechanism

## 六、基础能力

- Java高级
  - 反射
  - 动态代理
  - IO与NIO
  - [多线程与并发编程](6. 基础能力/多线程与并发.md)
  - 网络协议
  - [集合](https://github.com/KamiyamaSatoru/AndroidKnowledgeSystem/blob/master)
    - [集合这么多，我该怎么掌握？](6. 基础能力/集合/集合这么多，我该怎么掌握？.md)
    - [HashMap](6. 基础能力/集合/HashMap.md)
    - [LinkedHashMap](6. 基础能力/集合/LinkedHashMap.md)
    - HashTable
    - CurrentHashMap
    - TreeMap
    - [SparseArray](6. 基础能力/集合/SparseArray.md)
- [数据结构和算法](6. 基础能力/数据结构与算法.md)
- 操作系统
- 计算机网络
  - DNS HTTP/1.x HTTPs HTTP/2 TCP 等网络协议知识
  - SSL
- [虚拟机](6. 基础能力/虚拟机.md)
  - JVM
  - ART & Dalvik
    - AOT compilation 
    - Bytecode & Dex
  - 垃圾回收和GC

## 七、进阶

- 资源管理
  - 主题样式
  - 多分辨率适配
  - AssertManager
  - Resource
- 打包
  - Gradle
  - 编译
  - 混淆
  - 签名
- [AOP](7. 进阶/AOP/AOP.md)
- [动态化](https://github.com/KamiyamaSatoru/AndroidKnowledgeSystem/blob/master)
  - [聊聊移动端的动态化之路](7. 进阶/动态化/聊聊移动端的动态化之路.md)
  - [跨平台](https://github.com/KamiyamaSatoru/AndroidKnowledgeSystem/blob/master)
    - [跨平台总述](7. 进阶/动态化/跨平台/跨平台总述.md)
    - React Native
    - Fuchsia+Flutter+Dart
    - weex
    - [JavaScript引擎](7. 进阶/动态化/跨平台/JavaScript引擎.md)
    - 渲染引擎
    - [布局引擎](7. 进阶/动态化/跨平台/布局引擎.md)
  - 插件化
    - class和dex学习
    - ClassLoader原理
      - 如何hook Activity启动流程
      - 双亲委派
    - 插件化原理
    - 插件化框架
  - [热修复](7. 进阶/动态化/热修复.md)
- [大前端](https://github.com/KamiyamaSatoru/AndroidKnowledgeSystem/blob/master)
  - Rect
  - Vue
  - 小程序
- 组件化
  - 页面路由
- 消息推送&保活
  - 长连接保活
    - 心跳包
  - 进程保活
- [JNI](7. 进阶/jni/JNI.md)
- 安全
  - root原理
  - 二进制漏洞挖掘
  - 经典的漏洞研究如cve20143153 cve20153636之类
  - poc和exp
  - 逆向
    - arm汇编
    - smali字节码
    - dex和ELF结构
    - 安卓和Linux调试体系和反调式体系
    - 加固与反加固
    - Hook
- 多媒体
  - 图片
    - 图片处理
    - 动画
    - 图片加载
  - 音视频
    - 音频编解码
    - AudioTrack播放
    - 视频解码
    - OpenGL绘制
    - 视频编辑转码
    - 视频滤镜
- 性能优化
  - 启动时间和冷启动优化
    - 避免启动白屏
  - Crash 收集分析
  - 卡顿检测和优化
    - ARR
    - 避免频繁GC
    - ViewHolder
  - 布局优化
    - include、merge、ViewStub的使用
  - 线程优化
  - 监控
    - 埋点
    - APM性能检测
    - WebView性能监控
    - leakcanary内存泄露监控
  - 内存优化
    - OOM
    - 内存泄露
    - 图片压缩
    - 内存分析
  - apk瘦身
  - 电量优化
  - 网络优化
    - 网络调试
    - 低网速优化
    - API优化
    - 流量优化
- 持续集成
  - Jenkins

## 八、其他

- Python
- Linux
  - kernel源码
  - SELinux
  - [MMAP内存映射技术](8. 其他/Linux/MMAP内存映射技术.md)
- Docker

## 九、Android 书籍

- 入门
  - 第一行代码
  - Android群英传
  - Android编程权威指南
  - Android编程实战
- 进阶
  - Android开发进阶从小工到专家
  - 深入理解Android
  - Android组件化架构
  - App研发录
  - Android 进阶解密
  - Android 进阶之光
- 源码
  - Android源码设计模式解析与实战
  - Android开发艺术探索
  - Creating Dynamic UI with Android Fragments
- 安全
  - Android安全架构深究
  - Android软件安全与逆向分析
- 底层
  - Android系统源代码情景分析
  - Android内核剖析
  - 深入理解Android内核设计思想

## 十、T型成长

- [团队管理](https://github.com/KamiyamaSatoru/AndroidKnowledgeSystem/blob/master)
  - 敏捷
  - Devops
  - CodeReview
  - [代码质量与代码规范](10. T型成长/团队管理/代码质量与代码规范.md)
- 自我管理
- 后端
  - 领域驱动设计
  - 微服务

## 十一、语言

- [Kotlin](11. 语言/Kotlin.md)
- [Kotlin 协程](11. 语言/Kotlin协程.md)
- C、C++（NDK）
- SQL（DB）
