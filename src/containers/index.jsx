import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../actions/userinfo' 

class App extends Component {
  
  constructor(props, context) {
    super(props, context)
    
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      initDone: false
    }
  }

  render() {
    return (
      <div>
        {
          this.state.initDone ?
            this.props.children : 
            <div>加载中...</div>
        }
      </div>
    )
  }

  componentDidMount() {
    
    // 从localStorage里获取城市并更新
    let cityName = LocalStore.getItem(CITYNAME)
    
    if (cityName == null) {
      cityName = '北京'
    }

    // 将城市信息存储到 Redux 中
    this.props.userInfoActions.update({
      cityName: cityName
    })

    console.log('-----------------------------')
    console.log(`cityName, ${cityName}`)
    console.log('-----------------------------')

    this.setState({
      initDone: true
    })
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)