(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{372:function(t,e,v){"use strict";v.r(e);var a=v(45),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"迁移到swift"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#迁移到swift"}},[t._v("#")]),t._v(" 迁移到Swift")]),t._v(" "),v("h2",{attrs:{id:"把你的objective-c代码迁移到swift"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#把你的objective-c代码迁移到swift"}},[t._v("#")]),t._v(" 把你的Objective-C代码迁移到Swift")]),t._v(" "),v("p",[v("em",[t._v("迁移")]),t._v("为你提供了一个重新回顾Objective-C应用的机会，让你可以用Swift一点点地替换应用的各部分，从而改进架构、业务逻辑和性能。直接、增量式的迁移一个应用的方法就是使用前面学到的技术--互操作性和混合编程。混合编程功能能让你自由选择哪些功能和特性用Swift来实现，哪些部分依然使用Objective-C。而互操作性则能使这些新特性无缝整合回Objective-C代码。使用这两种技术来探索Swift的强大性能，并把它应用到你的Objective-C应用中，而无需用Swift完全重写整个应用。")]),t._v(" "),v("h3",{attrs:{id:"让objective-c代码为迁移做好准备"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#让objective-c代码为迁移做好准备"}},[t._v("#")]),t._v(" 让Objective-C代码为迁移做好准备")]),t._v(" "),v("p",[t._v("在你开始迁移你的代码之前，需要确保你的Objective-C代码能与Swift代码有良好的兼容性。这意味着你需要清理你的Objective-C代码，并把它现代化。你的现存代码需要遵循现代的编码实践，使之能方便地与Swift无缝交互。在开始迁移之前，请先参阅“Adopting Modern Objective-C”文档，快速查看这些编码实践。")]),t._v(" "),v("h3",{attrs:{id:"迁移过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#迁移过程"}},[t._v("#")]),t._v(" 迁移过程")]),t._v(" "),v("p",[t._v("最有效的把代码迁移至Swift的方法是逐文件替换--也就是每次替换一个类。因为你不能在Objective-C中继承Swift的类，因此最好先从应用中选择一个没有任何子类的类开始迁移。你需要用一个"),v("code",[t._v(".swift")]),t._v("文件替代类的"),v("code",[t._v(".h")]),t._v("和"),v("code",[t._v(".m")]),t._v("文件。类的接口和实现都直接保存在单个Swift文件中。你不需要创建头文件；Xcode会在你需要参考的时候为你自动生成头文件。")]),t._v(" "),v("h4",{attrs:{id:"开始之前"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开始之前"}},[t._v("#")]),t._v(" 开始之前")]),t._v(" "),v("ul",[v("li",[t._v("✓ 通过菜单和对话框：File > New > File > (iOS, watchOS, tvOS, 或OS X) > Source > Swift 为对应的Objective-C的"),v("code",[t._v(".m")]),t._v("和"),v("code",[t._v(".h")]),t._v("文件创建一个Swift类。你可以使用与Objective-C类同样的名字，或使用一个不同的名字。类的前缀在Swift中是可选的。")]),t._v(" "),v("li",[t._v("✓ 导入合适的系统框架。")]),t._v(" "),v("li",[t._v("✓ 如果你需要在同一个编译目标下的Swift文件中访问Objective-C代码，请在桥接头文件中进行头文件导入。你可以参阅"),v("a",{attrs:{href:"./3_%E6%B7%B7%E5%90%88%E7%BC%96%E7%A8%8B.markdown#%E4%BB%8E%E5%90%8C%E4%B8%80%E4%B8%AA%E5%BA%94%E7%94%A8%E7%BC%96%E8%AF%91%E7%9B%AE%E6%A0%87%E4%B8%AD%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81"}},[t._v("从同一个应用编译目标中导入代码")]),t._v("部分获取相关指导。")]),t._v(" "),v("li",[t._v("✓ 要让你的Swift类在Objective-C中可用，请让它继承自某个Objective-C类。把类用"),v("code",[t._v("@objc(<#name#>)")]),t._v("标记，让这个类在Objective-C使用时用一个特定的名字，其中"),v("code",[t._v("<#name#>")]),t._v("是Objective-C代码访问Swift类时使用的名字。要了解更多关于"),v("code",[t._v("@objc")]),t._v("的信息，请参阅"),v("a",{attrs:{href:"./2_%E4%BA%92%E6%93%8D%E4%BD%9C%E6%80%A7.markdown#swift%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%85%BC%E5%AE%B9%E6%80%A7"}},[t._v("Swift类型的兼容性")]),t._v("部分。")])]),t._v(" "),v("h4",{attrs:{id:"迁移过程中"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#迁移过程中"}},[t._v("#")]),t._v(" 迁移过程中")]),t._v(" "),v("ul",[v("li",[t._v("✓ 通过让你的Swift类派生自Objective-C的类，或遵守Objective-C的协议等方式，使之具备Objective-C的行为。要了解更多信息，请参阅"),v("a",{attrs:{href:"./2_%E4%BA%92%E6%93%8D%E4%BD%9C%E6%80%A7.markdown#%E7%BC%96%E5%86%99%E5%85%B7%E5%A4%87objective-c%E8%A1%8C%E4%B8%BA%E7%9A%84swift%E7%B1%BB"}},[t._v("编写具备Objective-C行为的Swift类")]),t._v("。")]),t._v(" "),v("li",[t._v("✓ 当你使用Objective-C的API时，你需要了解Swift如何转译Objective-C的语言特性。要了解更多信息，请参阅"),v("a",{attrs:{href:"./2_%E4%BA%92%E6%93%8D%E4%BD%9C%E6%80%A7.markdown#%E4%B8%8Eobjective-c-api%E4%BA%A4%E4%BA%92"}},[t._v("与Objective-C API交互")]),t._v("。")]),t._v(" "),v("li",[t._v("✓ 当你编写使用Cocoa框架的Swift代码时，请记住某些类型是被桥接的，这意味着你可以在某些使用Objective-C类型的地方用相应的Swift类型代替。要了解更多信息，请参阅"),v("a",{attrs:{href:"./2_%E4%BA%92%E6%93%8D%E4%BD%9C%E6%80%A7.markdown#%E4%BD%BF%E7%94%A8cocoa%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B"}},[t._v("使用Cocoa数据类型")]),t._v("。")]),t._v(" "),v("li",[t._v("✓ 在你把Cocoa设计模式应用到Swift代码中的时候，请参考"),v("a",{attrs:{href:"./2_%E4%BA%92%E6%93%8D%E4%BD%9C%E6%80%A7.markdown#%E4%BD%BF%E7%94%A8cocoa%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F"}},[t._v("使用Cocoa设计模式")]),t._v("，了解关于如何转译常见的设计模式的信息。")]),t._v(" "),v("li",[t._v("✓ 要了解把Objective-C的属性转译到Swift中的注意事项，请阅读“Swift编程语言（Swift 2.2版）”的“属性”章节。")]),t._v(" "),v("li",[t._v("✓ 使用"),v("code",[t._v("@objc(<#name#>)")]),t._v("注解可以在需要的时候，为属性和方法向Objective-C暴露特殊的名字。例如，你可以把一个名为"),v("code",[t._v("enabled")]),t._v("的属性，暴露给Objective-C时使用名为"),v("code",[t._v("isEnabled")]),t._v("的访问方法，你可以这样写：")])]),t._v(" "),v("div",{staticClass:"language-swift extra-class"},[v("pre",{pre:!0,attrs:{class:"language-swift"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" enabled"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Bool")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t@"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("objc")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isEnabled"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("ul",[v("li",[t._v("✓ Objective-C用（"),v("code",[t._v("-")]),t._v("）标记实例方法，用（"),v("code",[t._v("+")]),t._v("）标记类方法，在Swift中分别用"),v("code",[t._v("func")]),t._v("和和"),v("code",[t._v("class func")]),t._v("表示。")]),t._v(" "),v("li",[t._v("✓ 把简单的宏声明为全局常量，把复杂的宏改为用函数实现。")])]),t._v(" "),v("h4",{attrs:{id:"收尾工作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#收尾工作"}},[t._v("#")]),t._v(" 收尾工作")]),t._v(" "),v("ul",[v("li",[t._v("✓ 参考"),v("a",{attrs:{href:"./3_%E6%B7%B7%E5%90%88%E7%BC%96%E7%A8%8B.markdown#%E4%BB%8E%E5%90%8C%E4%B8%80%E4%B8%AA%E5%BA%94%E7%94%A8%E7%BC%96%E8%AF%91%E7%9B%AE%E6%A0%87%E4%B8%AD%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81"}},[t._v("从同一个应用编译目标中导入代码")]),t._v('中的描述，更新Objective-C代码中的导入语句（改为#import "ProductModuleName-Swift.h"）。')]),t._v(" "),v("li",[t._v("✓ 从编译目标中取消选择原来的Objective-C的"),v("code",[t._v(".m")]),t._v("文件的复选框，把它从编译目标中移除。不要立刻删除"),v("code",[t._v(".m")]),t._v("和"),v("code",[t._v(".h")]),t._v("文件；你可能需要用它们来进行问题诊断。")]),t._v(" "),v("li",[t._v("✓ 如果你的Swift类使用了一个不同的类名，你需要更新你的代码，用Swift的类名替换Objective-C的类名。")])]),t._v(" "),v("h3",{attrs:{id:"问题诊断和注意事项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#问题诊断和注意事项"}},[t._v("#")]),t._v(" 问题诊断和注意事项")]),t._v(" "),v("p",[t._v("尽管每一个迁移过程都会因为你的已有代码的不同而不同，不过还是有一些通用的步骤和工具能帮助你在迁移代码的过程中进行问题诊断：")]),t._v(" "),v("ul",[v("li",[t._v("请记住，你不能在Objective-C中创建Swift类的子类。因此，在你的应用中，不能包含你要迁移的类的Objective-C子类。")]),t._v(" "),v("li",[t._v("一旦你把一个类迁移到了Swift，你必须把相应的"),v("code",[t._v(".m")]),t._v("文件从编译目标中移除，以避免在编译时产生重复的符号错误。")]),t._v(" "),v("li",[t._v("Swift类要在Objective-C中访问和使用，这个类必须派生自Objective-C的类，或使用了"),v("code",[t._v("@objc")]),t._v("标记。")]),t._v(" "),v("li",[t._v("当你把Swift代码用于Objective-C中时，请记住Objective-C不能转译某些Swift特有的特性。要了解哪些特性不可用，请参考"),v("a",{attrs:{href:"./3_%E6%B7%B7%E5%90%88%E7%BC%96%E7%A8%8B.markdown#%E5%9C%A8swift%E4%B8%AD%E4%BD%BF%E7%94%A8objective-c"}},[t._v("在Swift中使用Objective-C")]),t._v("。")]),t._v(" "),v("li",[t._v("Command-点击一个Swift类名，可以查看它的生成的头文件（generated header）。")]),t._v(" "),v("li",[t._v("Option-点击一个符号，可以查看它的基本信息，例如，类型、参数以及文档注释。")])]),t._v(" "),v("p",[v("a",{attrs:{href:"./3_%E6%B7%B7%E5%90%88%E7%BC%96%E7%A8%8B.markdown"}},[t._v("< 3. 混合编程")]),t._v(" | "),v("a",{attrs:{href:"./0_%E7%9B%AE%E5%BD%95.markdown"}},[t._v("目录")])])])}),[],!1,null,null,null);e.default=_.exports}}]);