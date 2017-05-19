import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class SearchInput extends Component {
  
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      value: ''
    }
  }

  changeHandle(e) {
    // 监控input的变化
    this.setState({
      value: e.target.value
    })
  }

  keyupHandle(e) {
    // 监听keyup回车事件
    let value = this.state.keyword

    if (e.keyCode !== 13) {
      return
    }    
    // console.log('---------this.state.value------------');
    // console.log(this.state.value);
    // console.log('---------this.state.value------------');

    this.props.enterHandle(e.target.value)
  }

  render() {    
    return (
      <input 
        type="text" 
        className="search-input"
        placeholder="请输入关键字"
        value={this.props.keyword ? this.props.keyword : this.state.value}
        onChange={this.changeHandle.bind(this)}
        onKeyUp={this.keyupHandle.bind(this)}
      />
    )
  }

  componentDidMount() {
    // 设置初始默认值
    this.setState({
      keyword: this.props.value || ''
    })
  }
}

export default SearchInput