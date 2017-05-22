import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getInfoData } from '../../../fetch/detail/detail'

import DetailInfo from '../../../components/DetailInfo'

class Info extends Component {
  
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      info: false
    }
  }

  render() {
    
    return (
      <div>
        {
          this.state.info ? 
            <DetailInfo data={this.state.info} />
            : ''
        }
      </div>
    )
  }

  componentDidMount() {
    // 结构生成好后获取info数据并赋给info
    let id = this.props.id
    let result = getInfoData(id)

    result.then(res => {
      return res.json()
    }).then(json => {
      this.setState({
        info: json
      })
    })
  }
}

export default Info