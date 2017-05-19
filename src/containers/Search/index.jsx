import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SearchHeader from '../../components/SearchHeader'

import './style.less'

class Search extends Component {

  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const params = this.props.params
    
    return (
      <div>
        <SearchHeader keyword={params.keyword} />
      </div>
    )
  }
}

export default Search