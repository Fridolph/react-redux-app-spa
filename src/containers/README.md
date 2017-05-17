智能组件，页面

import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

这两个基本都要调用

PureRenderMixin 是性能优化组件，会自动判断React组件是否需要智能更新

**tips:** 
let obj = {
  a: 1,
  b: '2'
}

obj.c === undefined  // true
obj.c === null       // false


if (obj.c == null) { // 这里会执行到里面 }

jquery中所有的判断都用 ===  

除了 obj.c == null (这里既判断undefined 又判断null)