import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
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
              <li className="float-left jingdian">景点</li>
              <li className="float-left ktv">KTV</li>
              <li className="float-left gouwu">购物</li>
              <li className="float-left shenghuofuwu">生活服务</li>
              <li className="float-left jianshenyundong">健身运动</li>
              <li className="float-left meifa">美发</li>
              <li className="float-left qinzi">亲子</li>
              <li className="float-left xiaochikuaican">小吃快餐</li>
              <li className="float-left zizhucan">自助餐</li>
              <li className="float-left jiuba">酒吧</li>
            </ul>
          </div>
          <div className="carousel-item">
            <ul className="clear-fix">
              <li className="float-left meishi">美食</li>
              <li className="float-left dianying">电影</li>
              <li className="float-left jiudian">酒店</li>
              <li className="float-left xuixianyule">休闲娱乐</li>
              <li className="float-left waimai">外卖</li>
              <li className="float-left huoguo">火锅</li>
              <li className="float-left liren">丽人</li>
              <li className="float-left dujiachuxing">度假出行</li>
              <li className="float-left zuliaoanmo">足疗按摩</li>
              <li className="float-left zhoubianyou">周边游</li>
            </ul>
          </div>
          <div className="carousel-item">
            <ul className="clear-fix">
              <li className="float-left ribencai">日本菜</li>
              <li className="float-left SPA">SPA</li>
              <li className="float-left jiehun">结婚</li>
              <li className="float-left xuexipeixun">学习培训</li>
              <li className="float-left xican">西餐</li>
              <li className="float-left huochejipiao">火车机票</li>
              <li className="float-left shaokao">烧烤</li>
              <li className="float-left jiazhuang">家装</li>
              <li className="float-left chongwu">宠物</li>
              <li className="float-left quanbufenlei">全部分类</li>
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