import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/HomeAd'
import { getListData } from '../../../fetch/home/home'

class List extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);    
    this.state = {
      data: [],
      hasMore: false
    }
  }


  /**   
   * 该方法用于获取首页数据
   */
  loadFirstPageData() {
    const cityName = this.props.cityName
    const result = getListData(cityName, 0)

    // console.log('获取首屏数据 result, ', result)
    this.resultHandle(result)
  }

  /**   
   * 该方法用于处理获取到的首屏数据
   */
  resultHandle(result) {
    result.then(res => {
      return res.json()
    }).then(json => {
      // console.log('-------------------------');
      // console.log('result -> json, ', json);
      // console.log('-------------------------');
      const hasMore = json.hasMore
      const data = json.data
      // 存储数据
      this.setState({
        hasMore: hasMore,
        data: data
      })
    })
  }

  render() {
    return (
      <div>
        我是list, {this.props.cityName}
        <div className="">{this.state.hasMore.toString()}</div>
        <div className="">{this.state.data.toString()}</div>
      </div>
    )
  }

  componentDidMount() {
    // 获取首页数据
    this.loadFirstPageData()
  }
}

export default List