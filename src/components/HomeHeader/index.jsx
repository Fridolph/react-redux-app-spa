import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'

import SearchInput from '../../components/SearchInput'

import './style.less'

class HomeHeader extends Component {

  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)    
  }

  enterHandle(value) {
    // console.log('路由将跳转，逻辑正确');
    hashHistory.push('/search/all/' + encodeURIComponent(value))
  }

  render() {
    return (
      <div className="clear-fix" id="home-header">
        <div className="home-header-left float-left">
          <Link to="/city">
            <span>{this.props.cityName}</span>
            &nbsp;
            <i className="icon-angle-down"></i>
          </Link>
        </div>
        <div className="home-header-right float-right">
          <i className="icon-user"></i>
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search"></i>
            {/*
              这里，将input抽成 SearchInput组件
              <input 
                type="text" 
                placeholder="请输入关键字"
                value={this.state.keyword}
                onChange={this.changeHandle.bind(this)}
                onKeyUp={this.keyupHandle.bind(this)}              
              />
            */}
            <SearchInput 
              value=""
              enterHandle={this.enterHandle.bind(this)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHeader