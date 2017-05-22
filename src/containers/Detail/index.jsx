import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header'
import Info from './subpage/Info'
import Comment from './subpage/Comment'

class Detail extends Component {
  
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    // 获取商户ID
    const id = this.props.params.id

    return ( 
      <div>
        <Header title="商户详情" />
        <Info id={id} />
        <Comment id={id} />
      </div>
    )
  }
}

export default Detail