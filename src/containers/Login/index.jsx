import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header'
import LoginComponent from '../../components/Login'

import './style.less'

class Login extends Component {
  
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      checking: true
    }
  }

  /**
   * 检查是否登录的逻辑
   */
  doCheck() {
    const userinfo = this.props.userinfo

    if (userinfo.username) {
      // 已经登录，则跳转到用户主页
      this.goUserPage()

    } else {
      // 尚未登录，则验证结束
      this.setState({
        checking: false
      })
    }
  }

  /**
   * 跳转到用户界面
   */
  goUserPage() {
    hashHistory.push('/User')
  }

  /**
   * 登录成功之后的业务处理 
   */
  loginHandle(username) {
    let actions = this.props.userInfoActions
    let userinfo = this.props.userinfo
    
    // 保存用户名并更新
    userinfo.username = username
    actions.update(userinfo)

    // 跳转连接
    const params = this.props.params
    const router = params.router

    if (router) {
      // 跳转到指定的页面
      hashHistory.push(router)
    } else {
      // 跳转到默认页面，即用户中心
      this.goUserPage()
    }
  }

  render() {
    return (
      <div>
        <Header title={"登录"} />
        {
          // 等待验证之后，再显示登录信息
          this.state.checking ? 
            <div>等待中...</div> :
            <LoginComponent loginHandle={this.loginHandle.bind(this)} />
        }
      </div>
    )
  }

  componentDidMount() {
    // 判断是否登录
    this.doCheck()
  }

} 


// -------------------- React Redux 绑定 ------------------------
function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)