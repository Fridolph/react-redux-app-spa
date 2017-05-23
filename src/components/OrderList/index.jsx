import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'

import './style.less'

class OrderList extends Component {
  
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    let data = this.props.data
    let submitComment = this.props.submitComment 
    // console.log('---------------------');
    // console.log('data',data);
    // console.log('---------------------');

    return (
      <div>
        {
          data.map((item, index) => {
            return (
              <Item 
                key={index} 
                data={item} 
                submitComment={submitComment}
              />
            )
          })
        }
      </div>
    )
  }
}

export default OrderList