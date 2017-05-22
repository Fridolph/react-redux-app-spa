import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getInfo } from '../../../fetch/detail/detail'

class Info extends Component {
  
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    
    return (
      <div>
        <h1>Info {this.props.id}</h1>
      </div>
    )
  }

  componentDidMount() {
    let id = this.props.id
    let result = getInfoData(id)

    result.then(res => {
      return res.json()
    }).then(json => {
      console.log(json)
    })
  }
}

export default Info