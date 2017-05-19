木偶组件，组件


分享一些图标库，知乎的一场live里推荐的

阿里巴巴矢量图标库
http://www.iconfont.cn/
Iconfinder
https://www.iconfinder.com/
Easyicon
http://www.easyicon.net/


# 这里的LoadMore组件用到了函数节流的知识

<script>
// this  函数节流
let timeoutId

window.addEventListener('scroll', function() {
  if (this.props.isLoadingMore) {
    return
  }
  
  console.log('只要滚动就会触发');

  if (timeoutId) clearTimeout(timeoutId)

  timeoutId = setTimeout(callback, 300)


}.bind(this), false)

function callback() {
  console.log('这是我们想要监听的效果，一次滚动结束');
}
</script>