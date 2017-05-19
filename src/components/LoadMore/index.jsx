import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoadMore extends Component {
  
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  loadMoreHandle() {
    // 执行传递过来的loadMoreData函数
    this.props.loadMoreFn()
  }

  render() {    
    return (
      <div className="load-more" ref="wrapper">
        {
          this.props.isLoadingMore
          ? <span>加载中...</span>
          : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
        }
      </div>
    )
  }

  componentDidMount() {    
    const loadMoreFn = this.props.loadMoreFn
    const wrapper = this.refs.wrapper    
    // console.log('-----------------------');
    // console.log(wrapper);
    // console.log('-----------------------');

    // this  函数节流
    let timeoutId

    function callback() {
      const top = wrapper.getBoundingClientRect().top
      // console.log('-----------------------');
      // console.log(top);
      // console.log('-----------------------');
      const windowHeight = window.screen.height

      // console.log('这是我们想要监听的效果，一次滚动结束');
      
      if (top && top < windowHeight) {
        // 当 wrapper 已经被滚动到暴露在页面的可视范围之内时触发        
        loadMoreFn()        
      }
    }
    
    window.addEventListener('scroll', function() {
      if (this.props.isLoadingMore) {
        return
      }

      // console.log('只要滚动就会触发');

      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(callback, 200)


    }.bind(this), false)    
  }
}

export default LoadMore