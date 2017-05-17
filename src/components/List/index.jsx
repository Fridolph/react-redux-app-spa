import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item'

import './style.less'

class List extends React.Component {
  
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const data = this.props.data

    return (
      <div className="list-container">
        {
          data.map((item, index) => {
            return (
              <Item key={index} data={item} />
            )
          })
        }
      </div>
    )
  }
}

export default List