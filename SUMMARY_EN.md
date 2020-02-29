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

- [How to thoroughly grasp Open Source Library](3. OpenSourceLibrary/HowToThoroughlyGraspOpenSourceLibrary.md)
- [ORM Frame](https://github.com/KamiyamaSatoru/AndroidKnowledgeSystem/blob/master)
  - GreenDao
  - Room
- EventBus
  - EventBus(Open Source Lib)
    - 4 mode and sticky event
    - Observer Pattern for decoupling
- [Network](https://github.com/KamiyamaSatoru/AndroidKnowledgeSystem/blob/master)
  - [Retrofit](3. OpenSourceLibrary/Network/Retrofit.md) 
  - OKHttp
    - Interceptor（Chain Of Responsibility Model）
    - Timeout Retransmission & Redirect
    - Http Cache
    - Reuse Of Socket Connection Pool
  - Volley
- Image
  - [Glide](3. OpenSourceLibrary/Image/Glide.md)
  - [Fresco](3. OpenSourceLibrary/Image/Fresco.md)
  - Picasso
- [Dependency Injection](https://github.com/KamiyamaSatoru/AndroidKnowledgeSystem/blob/master)
  - [ButterKnife](3. OpenSourceLibrary/DependencyInjection/ButterKnife.md)
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

## 6. Android Basic Skills

- Advanced Java
  - Java Reflection
  - Dynamic Proxy
  - IO & NIO
  - [Multithreading and Concurrency](6. AndroidBasicSkills/MultithreadingAndConcurrency.md)
  - Network Protocol
  - [Collection](https://github.com/KamiyamaSatoru/AndroidKnowledgeSystem/blob/master)
    - [How can I master so many collections?](6. AndroidBasicSkills/Collections/HowCanIMasterSoManyCollections.md)
    - [HashMap](6. AndroidBasicSkills/Collections/HashMap.md)
    - [LinkedHashMap](6. AndroidBasicSkills/Collections/LinkedHashMap.md)
    - HashTable
    - ConcurrentHashMap
    - TreeMap
    - [SparseArray](6. AndroidBasicSkills/Collections/SparseArray.md)
- [DataStructure & Algorithm](6. AndroidBasicSkills/DataStructureAndAlgorithm.md)
- Operating System
- ComputerNetwork
  - Network protocol : DNS, HTTP/1.X, HTTPS, HTTP/2, TCP UDP 
  - SSL
- [Java Virtual Machine](6. AndroidBasicSkills/JavaVirtualMachine.md)
  - JVM
  - ART & Dalvik
    - AOT compilation 
    - Bytecode & Dex
  - GC Mechanism

## 7. Android Advanced

- Resource Management
  - Theme Style
  - Multi Resolution Support
  - AssertManager
  - Resource
- Package
  - Gradle
  - Compile
  - Code Confusion
  - App Signature
- [AOP](7. AndroidAdvanced/AOP/AOP.md)
- [Dynamic](https://github.com/KamiyamaSatoru/AndroidKnowledgeSystem/blob/master)
  - [The development of dynamic technology](7. AndroidAdvanced/Dynamic/DynamicDevelopmentIsTheFuture.md)
  - [Cross-platform](https://github.com/KamiyamaSatoru/AndroidKnowledgeSystem/blob/master)
    - [Summary](7. AndroidAdvanced/Dynamic/Cross-platform/Summary.md)
    - React Native
    - Fuchsia+Flutter+Dart
    - weex
    - [JavaScript Engine](7. AndroidAdvanced/Dynamic/Cross-platform/JavaScriptEngine.md)
    - Render Engine
    - [Layout Engine](7. AndroidAdvanced/Dynamic/Cross-platform/LayoutEngine.md)
  - Android Plugin
    - class and dex
    - ClassLoader
      - Hook Activity Lifecycle
      - Parent Delegation Model
    - Plugin principle
    - Plugin Framework
  - [Hot-Fix](7. AndroidAdvanced/Dynamic/Hot-Fix.md)
- [Cross-platform Language](https://github.com/KamiyamaSatoru/AndroidKnowledgeSystem/blob/master)
  - React
  - Vue
  - Wechat Mimi-program
- Componentization
  - Router
- Message Push & Keep-alive
  - Long Link 4 Keep-alive
    - Heartbeat packet
  - Progress 4 Keep-alive
- [JNI](7. AndroidAdvanced/Dynamic/jni/JNI.md)
- Safety
  - root principle
  - Binary Loophole
  - Classic Loophole(eg:cve20143153 cve20153636)
  - poc & exp
  - Android Reversing
    - arm compilation
    - smali bytecode
    - DEX and ELF structure
    - Android and Linux debug and anti-debug technique
    - apk strengthen and anti-strengthen
    - Hook
- Multimedia
  - Image
    - Image Handler
    - Animation
    - Image Loading
  - Audio And Video
    - Audio Encode&Decode
    - AudioTrack Play
    - Video Encode&Decode
    - OpenGL Measure
    - Video Editing and Transcoding
    - Video Filter
- Performance Optimization
  - App start time and code start time 
    - Prevent white screen at startup
  - Crash collection and analysis
  - Smooth detection and optimization
    - ARR
    - Avoid frequently GC
    - ViewHolder
  - Layout optimization
    - include、merge、ViewStub
  - Thread optimization
  - Monitor
    - User behavior tracking
    - APM Performance
    - WebView performance
    - leakcanary
  - Memory optimization
    - OOM
    - Memory leak
    - Image compression
    - Memory Analysis
  - Reduce app size
  - Battery optimization
  - Network optimization
    - Network Debug
    - Low Network solution
    - API optimization
    - Optimize network data usage
- Continuous Integration 
  - Jenkins

## 8. Others

- Python
- Linux
  - kernel source code
  - SELinux
  - [Memory Map](8. Others/Linux/MemoryMap.md)
- Docker

## 9. Android Books

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

## 10. Balance of Breadth and Depth

- [Team Management](https://github.com/KamiyamaSatoru/AndroidKnowledgeSystem/blob/master)
  - Agile Development
  - Devops
  - CodeReview
  - [Code Quality and Specification](10. BalanceOfBreadthAndDepth/TeamMangement/CodeQualityAndSpecification.md)
- Self-management
- Back-End
  - DDD
  - Microservice

## 11. Language

- [Kotlin](11. Language/Kotlin.md)
- [Kotlin Coroutine](11. Language/KotlinCoroutine.md)
- C、C++（NDK）
- SQL（DB）
