# Android Touch Event Delivery Mechanism

The best way to read the system source code is to debug the code by yourself, step by step.

## References

- 《Android开发艺术探索》: `Exploration of the art of Android development` in English. You can find it on [goodreads](https://www.goodreads.com/book/show/52710755-android?from_search=true&from_srp=true&qid=Kwqfvz9kX8&rank=1).
  > Highly recommended, so strong that I put it in the first place. Originally I always oppose to read the source code, but the `View's event delivery mechanism` section in book, dissecting the source code but not boring, explain the details of the point but not obscure, the depth of knowledge is just right.
  >
  > Note: The event delivery in the book only covers UI-level, that is, starting with `dispatchTouchEvent` method. If you want to understand the whole event delivery mechanism? Please read on.

- [反思｜Android 事件分发机制的设计与实现](https://juejin.cn/post/6844903926446161927): `The design and implementation of Android event delivery mechanism` in English
  > In great detail, we start from the source of the event, i.e. how the `InputEvent` event came to be, how it was passed step by step from the hardware through the native layer, and how the result of the final delivery came back to the native layer.

- [反思｜Android 事件拦截机制的设计与实现](https://juejin.cn/post/6844904128397705230): `The design and implementation of Android event interception mechanism` in English

