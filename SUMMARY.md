# 知识体系目录

## 零、方向

* [移动端开发的未来方向](0. 方向/移动端开发的未来方向.md)

## 一、系统源码学习

* 组件

	* 四大组件解析

		* [Activity](1. 系统源码/组件/Activity.md)

			* [Activity的启动过程](1. 系统源码/组件/Activity.md)

			* [启动流程和启动模式](1. 系统源码/组件/Activity.md)

			* [生命周期](1. 系统源码/组件/Activity.md)

			* [与Window/View的关系](1. 系统源码/组件/Activity.md)

			* [与Fragment的关系](1. 系统源码/组件/Activity.md)

		* Service

			* IPC（AIDL）、IntentService

		* ContentProvider全方位解析

		* BroadcastReceiver全方位解析

	* Fragment

		* 懒加载

		* 与Activity通信

	* Context详解

	* Window

		* Toast

		* Dialog

		* PopupWindow

		* PopupWindow和Dialog区别

	* [WebView]()

		* [JSBridge](1. 系统源码/组件/WebView/JSBridge.md)

		* Deeplink

		* [加速方案](1. 系统源码/组件/WebView/加速方案.md)

	* RecyclerView

		* 四级缓存+局部刷新

		* 与ListView比较

	* LinearLayout 和 RelativeLayout 相同层级下效率比较

* 系统服务

	* ActivityManagerService

	* Window和WindowManager

	* WindowManagerService

	* ServiceManager

* 流程

	* Android系统启动过程

		* system_server启动过程

	* Android Apk安装过程

	* Android应用进程启动

* 通讯

	* WIFI

	* NFC

	* 蓝牙

## 二、架构能力

* [设计模式](2. 架构能力/设计模式/设计模式.md)

* [组件化](2. 架构能力/组件化.md)

* [架构的思考与架构模式](2. 架构能力/架构的思考与架构模式.md)

	* [技术选型](2. 架构能力/架构师必备能力之技术选型.md)

	* MVP

	* MVVM

	* Flux

	* Clean Architecture

	* Android Architecture Components

	* Android Jetpack架构

* App框架

	* 分包

	* 分层

## 三、开源库

* [关于开源库一些想说的话](3. 开源库/关于开源库一些想说的话.md)

* [ORM框架]()

	* GreenDao

	* Room

* 事件总线

	* EventBus

		* 4种模式、粘性事件

		* 观察者模式解耦

* [网络]()

	* [Retrofit](3. 开源库/网络/Retrofit.md)

	* OKHttp

		* 拦截器（责任链模式）

		* 超时重传&重定向

		* Http缓存

		* Socket连接池复用

	* Volley

* 图片

	* [Glide](3. 开源库/图片/Glide.md)

	* [Fresco](3. 开源库/图片/Fresco.md)

	* Picasso

* [依赖注入]()

	* [ButterKnife](3. 开源库/依赖注入/ButterKnife.md)

	* Dagger2

* 序列化

	* Gson

	* FastJson

* ARouter

* 响应式编程

	* RxJava

		* 常用操作符

		* 线程调度

		* 异常处理

		* Flowable背压

	* RxBinding

	* RxAndroid

## 四、测试

* 单元测试

	* robolectric

* 自动化测试

	* UI自动化

	* Monkey

## 五、常见机制

* 线程通信

	* Handler原理

	* AsyncTask

	* HandlerThread

	* IntentService

	* RxJava

* [Binder机制](5. 常见机制/Binder机制.md)

* 进程

	* lowmemorykiller 

	* 进程的优先级

* View体系

	* 自定义控件

	* [事件分发机制](5. 常见机制/事件分发机制.md)

	* 动画

	* 绘制

* Android消息机制

* [存储大家庭](5. 常见机制/存储大家庭.md)

	* [Sqlite、SharedPreferences、MMKV、文件](5. 常见机制/存储大家庭.md)

* 资源管理系统、资源加载机制

## 六、基础能力

* Java高级

	* 反射

	* 动态代理

	* IO与NIO

	* [多线程与并发编程](6. 基础能力/多线程与并发.md)

	* 网络协议

	* [集合]()
		* [集合这么多，我该怎么掌握？](6. 基础能力/集合/集合这么多，我该怎么掌握？.md)  
		* [HashMap](6. 基础能力/集合/HashMap.md)    
		* [LinkedHashMap](6. 基础能力/集合/LinkedHashMap.md)    
		* HashTable  
		* [ConcurrentHashMap](6. 基础能力/集合/ConcurrentHashMap.md)  
		* [TreeMap](6. 基础能力/集合/TreeMap.md)  
		* [SparseArray](6. 基础能力/集合/SparseArray.md)  
	
* [数据结构和算法](6. 基础能力/数据结构与算法.md)

* 操作系统

* 计算机网络

	* DNS HTTP/1.x HTTPs HTTP/2 TCP 等网络协议知识

	* SSL

* [虚拟机](6. 基础能力/虚拟机.md)

	* JVM

	* ART & Dalvik

		* AOT compilation 

		* Bytecode & Dex
	
	* 垃圾回收和GC

## 七、进阶

* 资源管理

	* 主题样式

	* 多分辨率适配

	* AssertManager

	* Resource

* 打包

	* Gradle

	* 编译

	* 混淆

	* 签名

* [AOP](7. 进阶/AOP/AOP.md)

* [动态化]()

	* [聊聊移动端的动态化之路](7. 进阶/动态化/聊聊移动端的动态化之路.md)

	* [跨平台]()

		* [跨平台总述](7. 进阶/动态化/跨平台/跨平台总述.md)
		
		* React Native

		* Fuchsia+Flutter+Dart

		* weex

		* [JavaScript引擎](7. 进阶/动态化/跨平台/JavaScript引擎.md)

		* 渲染引擎
		
		* [布局引擎](7. 进阶/动态化/跨平台/布局引擎.md)
	
	* 插件化

		* class和dex学习

		* ClassLoader原理

			* 如何hook Activity启动流程

			* 双亲委派

		* 插件化原理

		* 插件化框架

	* [热修复](7. 进阶/动态化/热修复.md)

* [大前端]()

	* Rect
	
	* Vue
	
	* 小程序

* 消息推送&保活

	* 长连接保活

		* 心跳包

	* 进程保活

* [JNI](7. 进阶/jni/JNI.md)

* 安全

	* root原理

	* 二进制漏洞挖掘

	* 经典的漏洞研究如cve20143153 cve20153636之类

	* poc和exp

	* 逆向

		* arm汇编

		* smali字节码

		* dex和ELF结构

		* 安卓和Linux调试体系和反调式体系

		* 加固与反加固

		* Hook

* 多媒体

	* 图片

		* 图片处理

		* 动画

		* 图片加载

	* 音视频

		* 音频编解码

		* AudioTrack播放

		* 视频解码

		* OpenGL绘制

		* 视频编辑转码

		* 视频滤镜

* [性能优化](7. 进阶/性能优化/性能优化之怎么学.md)

	* [性能优化之怎么学?](7. 进阶/性能优化/性能优化之怎么学.md)

	* [性能分析工具和线上监控](7. 进阶/性能优化/性能之神兵利器.md)

	* 启动时间和冷启动优化
	
		* 避免启动白屏
	
	* Crash 收集分析
	
	* 卡顿检测和优化
	
		* ARR
	
		* 避免频繁GC
	
		* ViewHolder
	
	* 布局优化
	
		* include、merge、ViewStub的使用
	
	* 线程优化
	
	* 监控
	
		* 埋点
	
		* APM性能检测
	
		* WebView性能监控
	
		* leakcanary内存泄露监控
	
	* 内存优化
	
		* OOM
	
		* 内存泄露
	
		* 图片压缩
	
		* 内存分析
	
	* apk瘦身
	
	* [电量优化](7. 进阶/性能优化/电量优化.md)
	
	* [网络优化](7. 进阶/性能优化/网络优化.md)
	
		* 网络调试
	
		* 低网速优化
	
		* API优化
	
		* 流量优化
	
	* 持续集成

		* Jenkins

## 八、其他

* Python

* Linux

	* kernel源码

	* SELinux
	
	* [MMAP内存映射技术](8. 其他/Linux/MMAP内存映射技术.md)

	* [IO多路复用](8. 其他/Linux/IO多路复用.md)

* Docker

## 九、Android 书籍

* 入门

	* 第一行代码

	* Android群英传

	* Android编程权威指南

	* Android编程实战

* 进阶

	* Android开发进阶从小工到专家

	* 深入理解Android

	* Android组件化架构

	* App研发录

	* Android 进阶解密

	* Android 进阶之光

* 源码

	* Android源码设计模式解析与实战

	* Android开发艺术探索

	* Creating Dynamic UI with Android Fragments

* 安全

	* Android安全架构深究

	* Android软件安全与逆向分析

* 底层

	* Android系统源代码情景分析  

	* Android内核剖析

	* 深入理解Android内核设计思想  

## 十、T型成长

* [团队管理]()

	* 敏捷

	* Devops

	* CodeReview
	
	* [代码质量与代码规范](10. T型成长/团队管理/代码质量与代码规范.md)
	
* 自我管理

* 后端

	* 领域驱动设计

	* 微服务

## 十一、语言

* [Kotlin](11. 语言/Kotlin.md)

* [Kotlin 协程](11. 语言/Kotlin协程.md)

* C、C++（NDK）

* SQL（DB）

----

* [README](README.md)
