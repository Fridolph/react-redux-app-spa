怎么写redux ? 

1. 定义计算规则   
  编写reducer

2. 根据计算规则生成store   
  let store = createStore(reducer)

3. 定义数据变化之后的派发规则
  store.subscribe()

4. 触发数据变化