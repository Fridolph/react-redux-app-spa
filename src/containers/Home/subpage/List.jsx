import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeAd from '../../../components/HomeAd'
import ListComponent from '../../../components/List'
import { getListData } from '../../../fetch/home/home'

import './style.less'

class List extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);    
    this.state = {
      data: [],               // 存储列表信息
      hasMore: false,         // 记录当前状态下还有没有更多数据提供加载
      isLoadingMore: false,   // 记录当前状态下，是加载中... 还是点击加载更多 
      page: 1                 // 记录下一页的页码，首页是0
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
   * 该方法用于 加载更多数据
   */
  loadMoreData() {
    const cityName = this.props.cityName
    const page = this.state.page

    // 记录状态
    this.setState({
      isLoadingMore: true
    })

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
        <h2 className="home-list-title">猜你喜欢</h2>
        {
          this.state.data.length 
          ? <ListComponent data={this.state.data} /> 
          : <div>加载中...</div> 
        }
      </div>
    )
  }

  componentDidMount() {
    // 获取首页数据
    this.loadFirstPageData()
  }
}

export default List