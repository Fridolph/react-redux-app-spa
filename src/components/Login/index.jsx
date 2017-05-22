import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Login extends Component {
  
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      phone: '',
      password: '',
      showErrorMsg: false
    }
  }

  /**
   * 输入手机号
   */
  changePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }

  /**
   * 输入密码
   */
  changePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  /**
   * 提交表单
   */
  clickHandle(e) {
    let loginHandle = this.props.loginHandle
    let username = this.state.phone
    let password = this.state.password

    if (username === '8888' && password === '8888') {
      loginHandle(username);
    } else {
      this.setState({
        showErrorMsg: true
      })
    }
  }

  render() {
    
    return (
      <div id="login-container">
        <div className="input-container phone-container">
          <i className="icon-tablet"></i>
          <input 
            type="text"
            placeholder="请输入手机号或用户名" 
            onChange={this.changePhone.bind(this)} 
            value={this.state.username}
          />          
        </div>
        {/*<div className="input-container password-container">
          <i className="icon-key"></i>
          <button>发送验证码</button>
          <input type="text" placeholder="请输入验证码" />
        </div>*/}
        <div className="input-container password-container">
          <i className="icon-key"></i>
          <input
            type="password"
            placeholder="请输入密码" 
            onChange={this.changePassword.bind(this)} 
            value={this.state.password}
          />
        </div>
        {
          this.state.showErrorMsg ? 
            <div className="err-msg">您输入的信息有误，请检查后重新输入</div> :
            ''
        }
        <button className="btn-login" onClick={this.clickHandle.bind(this)}>登录</button>
      </div>
    )
  }
}

export default Login