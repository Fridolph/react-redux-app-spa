import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class BuyAndStore extends Component {
  

  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  storeClickHandle() {
    let storeHandle = this.props.storeHandle
    storeHandle()
  }

  buyClickHandle() {
    let buyHandle = this.props.buyHandle
    buyHandle()
  }

  render() {
    return (
      <div className="buy-store-container clear-fix">
        <div className="item-container float-left">
          { 
            // 是否收藏
            this.props.isStore ?
              <button className="selected" onClick={this.storeClickHandle.bind(this)}>已收藏</button> :
              <button onClick={this.storeClickHandle.bind(this)}>收藏</button>
          }
        </div>
        <div className="item-container float-right">
          <button onClick={this.buyClickHandle.bind(this)}>购买</button>
        </div>
      </div>
    )
  }

}

export default BuyAndStore