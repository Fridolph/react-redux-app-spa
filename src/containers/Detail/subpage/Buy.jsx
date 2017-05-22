import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as storeActionsFromFile from '../../../actions/store'

import BuyAndStore from '../../../components/BuyAndStore'
import './style.less'

class Buy extends Component {
  
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      isStore: false
    }
  }

  /**
   * checkStoreState 检查当前商户是否已经被收藏
   */
  checStoreState() {
    let id = this.props.id
    let store = this.props.store

    // 只要有一个满足即可
    store.some(item => {
      if (item.id === id) {
        this.setState({
          isStore: true
        })
        // 跳出循环
        return true
      }      
    })
  }

  /**
   * buyHandle 购买事件
   */
  buyHandle() {
    // 验证登录
    const loginFlag = this.loginCheck()

    if (!loginFlag) {
      return
    }
    // 购买流程
    // ...
    // ...
    // ...

    // 跳转到用户主页
    hashHistory.push('/User')
  }

  /**
   * storeHandle 收藏事件
   */
  storeHandle() {
    // 验证登录
    let loginFlag = this.loginCheck()

    if (!loginFlag) {
      return
    }

    let id = this.props.id
    let storeActions = this.props.storeActions

    if (this.state.isStore) {
      // 当前商户已被收藏, 点击时要取消收藏
      storeActions.rm({id: id})
    } else {
      // 当前商户未被收藏，点击时要执行收藏
      storeActions.add({id: id})
    }

    // 修改状态
    this.setState({
      isStore: !this.state.isStore
    })
  }

  /**
   * loginCheck 验证登录
   */
  loginCheck() {
    let id = this.props.id
    let userinfo = this.props.userinfo

    if (!userinfo.username) {
      // 跳转登录页面
      hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id))
      return false
    }
    return true
  }
  
  render() {
    
    return (
      <BuyAndStore 
        isStore={this.state.isStore} 
        buyHandle={this.buyHandle.bind(this)} 
        storeHandle={this.storeHandle.bind(this)}
      />
    )
  }

  componentDidMount() {
    // console.log('--------------------------------------------------');
    // console.log('this.props.store', this.props.store);
    // console.log('this.props.userinfo', this.props.userinfo);
    // console.log('this.props.storeActions', this.props.storeActions);
    // console.log('--------------------------------------------------');
  }

}

// ------------------------ React Redux 绑定 -----------------------------

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
    store: state.store
  }
}

function mapDispatchToProps(dispatch) {
  return {
    storeActions: bindActionCreators(storeActionsFromFile, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buy)