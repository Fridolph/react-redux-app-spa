import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getOrderListData, postComment } from '../../../fetch/user/orderlist'
import { Link } from 'react-router'

import OrderListComponent from '../../../components/OrderList'

import './style.less'

class OrderList extends Component {
  
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      data: []
    }
  }

  /**
   * loadOrderList 获取订单信息
   * 传参 username
   */
  loadOrderList(username) {
    const result = getOrderListData(username)
    result.then(res => {
      return res.json()
    }).then(json => {
      // 获取数据
      this.setState({
          data: json
      })
    }).catch(ex => {
      if (__DEV__) {
          console.error('用户主页“订单列表”获取数据报错, ', ex.message)
      }
    })
  }

  /**
   * submitComment 提交评价
   * 传参 用户id, 输入内容value, 回调callback
   */
  submitComment(id, value, callback) {
    const result = postComment(id, value)

    result.then(res => {
      return res.json()
    }).then(json => {
      if (json.errno === 0) {
        // 已经评价，修改状态
        callback()
      }
    })
  }

  render() {
    
    return (
      <div className="order-list-container">
        <h2>您的订单</h2>
        {
          this.state.data.length ? 
            <OrderListComponent 
              data={this.state.data} 
              submitComment={this.submitComment.bind(this)}
            /> :
            <div className="no-order">
              您还没有订单，
              <Link to="/">去首页逛逛吧</Link>
            </div>
        }
      </div>
    )
  }

  componentDidMount() {
    // 获取订单信息
    let username = this.props.username

    if (username) {
      this.loadOrderList(username)
    }
  }

}

export default OrderList