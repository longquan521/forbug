选择题：
1、下面关于虚拟 DOM 的说法正确的是：（A B C D）

    A. 使用虚拟 DOM 不需要手动操作 DOM，可以极大的提高程序的性能。

    B. 使用虚拟 DOM 不需要手动操作 DOM，可以极大的提高开发效率。

    C. 虚拟 DOM 可以维护程序的状态，通过对比两次状态的差异更新真实 DOM。

    D. 虚拟 DOM 本质上是 JavaScript 对象，可以跨平台，例如服务器渲染、Weex 开发等。



2、下面关于 Snabbdom 库的描述错误的是：（D）

    A. Snabbdom 库是一个高效的虚拟 DOM 库，Vue.js 的虚拟 DOM 借鉴了 Snabbdom 库。

    B. 使用 h() 函数创建 VNode 对象，描述真实 DOM 结构。

    C. Snabbdom 库本身可以处理 DOM 的属性、事件、样式等操作。

    D. 使用 patch(oldVnode, null) 可以清空页面元素



简答题：
请简述 patchVnode 函数的执行过程。

  1.先触发perpatch钩子函数和update钩子函数

  2.然后触发postpatch钩子函数

  3.开始做判断：

    ①如果新节点有text属性，且不等于老节点的text属性，继续判断如果老节点有children，那么就移除老节点的children的对应的DOM元素，后设置新节点的对应的DOM元素的textContent

    ②如果新老节点都有children，而且不相等时，那么就调用updateChildren()，去对比子节点，并且更新子节点的差异

    ③如果只是新节点有children属性，现在判断老节点有无text属性，如果有就清空对应的DOM元素的textContent,再添加所有的子节点

    ④如果只是老节点有children属性，那就移除所有的老节点
    
    ⑤如果只是老节点有text属性，就清空对应的DOM元素的textContent
    