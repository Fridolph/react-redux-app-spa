import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'

import SearchInput from '../SearchInput'

import './style.less'

class SearchHeader extends Component {
  
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  enterHandle(value) {
    hashHistory.push('/search/all/' + decodeURIComponent(value))
  }

  backPageHandle() {
    window.history.back()
  }

  render() {   
   
    return (
      <div id="search-header">
        <span className="back-icon float-left" onClick={this.backPageHandle.bind(this)}>
          <i className="icon-chevron-left"></i>
        </span>
        <div className="input-container">
          <i className="icon-search"></i>
          &nbsp;
          <SearchInput 
            keyword={this.props.keyword || ''}
            enterHandle={this.enterHandle.bind(this)}
          />
        </div>        
      </div>
    )
  }
}

export default SearchHeader