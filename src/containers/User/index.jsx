import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Header from '../../components/Header'
import Userinfo from '../../components/Userinfo'
import OrderList from './subpage/OrderList'

class User extends React.Component {
  
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    let userinfo = this.props.userinfo

    console.log('-----------------------------');
    console.log('username: ', userinfo.username);
    console.log('cityName: ', userinfo.cityName);
    console.log('-----------------------------');

    return (
      <div>
        <Header title="用户中心" backRouter="/" />
        <Userinfo username={userinfo.username} city={userinfo.cityName} />
        <OrderList username={userinfo.username} />
      </div>
    )
  }

  componentDidMount() {
    // 如果未登录，跳转登录界面
    if (!this.props.userinfo.username) {
      hashHistory.push('/Login')
    }
  }

}

// -------------------- React Redux 绑定 ------------------------

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)