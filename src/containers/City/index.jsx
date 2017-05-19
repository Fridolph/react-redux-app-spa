import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

import { CITYNAME } from '../../config/localStoreKey'
import LocalStore from '../../util/localStore'

class City extends Component {
  
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  } 

  changeCity(newCity) {
    // 将新选择的城市设置为当前城市    
    if (newCity == null) {
      return
    }
    // 1. 修改 redux
    const userinfo = this.props.userinfo

    userinfo.cityName = newCity

    this.props.userInfoActions.update(userinfo)
    
    // 2. 修改localStorage
    LocalStore.setItem(CITYNAME, newCity)

    // 3. 跳转到首页
    hashHistory.push('/')
  }

  render() {
    return (
      <div>        
        <Header title={'选择城市'} />
        <CurrentCity cityName={this.props.userinfo.cityName} />
        <CityList changeFn={this.changeCity.bind(this)} />
      </div>
    )
  }

  componentDidMount() {
    // console.log('------this.props.userinfo-----');
    // console.log(this.props.userinfo);
    // console.log('----------------------');
    // console.log('------this.props.userInfoActions-----');
    // console.log(this.props.userInfoActions);
    // console.log('----------------------');

    // console.log('--------LocalStore--------');
    // console.log(LocalStore);
    // console.log('--------LocalStore--------');
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City)