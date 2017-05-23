import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Item extends Component {
  
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      commentState: 2 // 0-未评价 1-评价中 2-已评价

    }
  }

  /**
   * renderEvaluate 渲染评价button
   */
  renderEvaluate() {
    let renderNotEvaluate = (
      <button className="btn" onClick={this.clickEvaluate.bind(this)}>评价</button>
    )

    let renderEvaluated = (
      <button className="btn unselected-btn">已评价</button>
    )

    if (this.state.commentState === 0) {
      return renderNotEvaluate
    } else if (this.state.commentState === 2) {
      return renderEvaluated
    } else {
      return ''
    }
  }

  /**
   * 点击评论btn 修改评论状态
   */
  clickEvaluate() {
    this.setState({
      commentState: 1
    })   
  }

  /**
   * 未评价时，点击评论btn
   * 渲染评论输入组件，可输入评论并提交
   */
  renderComment() {
    let textareaStyle = {
      width: '98%',
      height: '80px',
      border: '1px solid #ccc',
      resize: 'none',
      boxSizing: 'borderBox',
      padding: '10px'      
    }
    let commentBox = (
      <div className="comment-text-container">
        <textarea 
          style={textareaStyle} 
          ref="commentText">
        </textarea>
        <button className="btn" onClick={this.clickSubmitHandle.bind(this)}>提交</button>
        &nbsp;
        <button className="btn unseleted-btn" onClick={this.clickQuitHandle.bind(this)}>取消</button>
      </div>
    )

    if (this.state.commentState === 1) {
      return commentBox
    }
  }

  /**
   * 评论组件，点击提交
   */
  clickSubmitHandle() {
    const submitComment = this.props.submitComment
    // console.log('submitComment');
    let id = this.props.data.id
    let commentTextDOM = this.refs.commentText
    let value = commentTextDOM.value.trim()

    if (!value) {
      return
    }

    // 提交评论内容
    submitComment(id, value, this.commentOK.bind(this))
  }

  /**
   * 修改评论状态为已评论
   */
  commentOK() {
    // 已经评价且修改状态了
    this.setState({
      commentState: 2
    })
  }

  /**
   * 评论组件，点击取消
   */
  clickQuitHandle() {
    // console.log('hideComment');
    this.setState({
      commentState: 0
    })
  }

  render() {
    let data = this.props.data
    // console.log('---------------------');
    // console.log('data',data);
    // console.log('---------------------');
    
    return (
      <div className="clear-fix order-item-container">
        <div className="order-item-img float-left">
          <img src={data.img} />
        </div>
        <div className="order-item-comment float-right">
          {this.renderEvaluate()}
        </div>
        <div className="order-item-content">
          <strong>{data.title}</strong>
          <span>数量：{data.count}</span>
          <span>价格：￥{data.price}</span>
        </div>
        {
          this.renderComment()
        }
      </div>
    )
  }

  componentDidMount() {
    // 将状态维护到state中
    this.setState({
      commentState: this.props.data.commentState
    })
  }

}

export default Item