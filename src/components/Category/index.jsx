import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
// 引用组件依赖
import ReactSwipe from 'react-swipe'
// 样式在依赖和组件之后引入
import './style.less'

class Category extends Component {

  /*
   * 轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe
   * npm install react swipe-js-iso react-swipe --save`
   */
  constructor(props, context) {
    super(props, context)
    
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      index: 0
    }
  }

  render() {
    let option = {
      auto: 3000,
      callback: function(index) {
        // 更新当前轮播图的index
        this.setState({ index: index })
      }.bind(this)
    }

    return (
      <div id="home-category">
        <ReactSwipe swipeOptions={option}>
          <div className="carousel-item">
            <ul className="clear-fix">
              <li className="float-left jingdian"><Link to="/search/jingdian">景点</Link></li>
              <li className="float-left ktv"><Link to="/search/KTV">KTV</Link></li>
              <li className="float-left gouwu"><Link to="/search/gouwu">购物</Link></li>
              <li className="float-left shenghuofuwu"><Link to="/search/shenghuofuwu">生活服务</Link></li>
              <li className="float-left jianshenyundong"><Link to="/search/jianshenyundong">健身运动</Link></li>
              <li className="float-left meifa"><Link to="/search/meifa">美发</Link></li>
              <li className="float-left qinzi"><Link to="/search/qinzi">亲子</Link></li>
              <li className="float-left xiaochikuaican"><Link to="/search/xiaochikuaican">小吃快餐</Link></li>
              <li className="float-left zizhucan"><Link to="/search/zizhucan">自助餐</Link></li>
              <li className="float-left jiuba"><Link to="/search/jiuba">酒吧</Link></li>
            </ul>
          </div>
          <div className="carousel-item">
            <ul className="clear-fix">
              <li className="float-left meishi"><Link to="/search/meishi">美食</Link></li>
              <li className="float-left dianying"><Link to="/search/dianying">电影</Link></li>
              <li className="float-left jiudian"><Link to="/search/jiudian">酒店</Link></li>
              <li className="float-left xuixianyule"><Link to="/search/xuixianyule">休闲娱乐</Link></li>
              <li className="float-left waimai"><Link to="/search/waimai">外卖</Link></li>
              <li className="float-left huoguo"><Link to="/search/huoguo">火锅</Link></li>
              <li className="float-left liren"><Link to="/search/liren">丽人</Link></li>
              <li className="float-left dujiachuxing"><Link to="/search/dujiachuxing">度假出行</Link></li>
              <li className="float-left zuliaoanmo"><Link to="/search/zuliaoanmo">足疗按摩</Link></li>
              <li className="float-left zhoubianyou"><Link to="/search/zhoubianyou">周边游</Link></li>
            </ul>
          </div>
          <div className="carousel-item">
            <ul className="clear-fix">
              <li className="float-left ribencai"><Link to="/search/ribencai">日本菜</Link></li>
              <li className="float-left SPA"><Link to="/search/SPA">SPA</Link></li>
              <li className="float-left jiehun"><Link to="/search/jiehun">结婚</Link></li>
              <li className="float-left xuexipeixun"><Link to="/search/xuexipeixun">学习培训</Link></li>
              <li className="float-left xican"><Link to="/search/xican">西餐</Link></li>
              <li className="float-left huochejipiao"><Link to="/search/huochejipiao">火车机票</Link></li>
              <li className="float-left shaokao"><Link to="/search/shaokao">烧烤</Link></li>
              <li className="float-left jiazhuang"><Link to="/search/jiazhuang">家装</Link></li>
              <li className="float-left chongwu"><Link to="/search/chongwu">宠物</Link></li>
              <li className="float-left quanbufenlei"><Link to="/search/quanbufenlei">全部分类</Link></li>
            </ul>
          </div>
        </ReactSwipe>
        <div className="index-container">
          <ul>
            <li className={this.state.index === 0 ? "selected" : ''}></li>
            <li className={this.state.index === 1 ? "selected" : ''}></li>
            <li className={this.state.index === 2 ? "selected" : ''}></li>
          </ul>
        </div>
      </div>
    )
  }

  componentDidMount() {
    // console.log(ReactSwipe);
  }
}

export default Category