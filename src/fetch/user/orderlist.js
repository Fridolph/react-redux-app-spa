import { get } from '../get'
import { post } from '../post'

export function getOrderListData(username) {
  let result = get('/api/orderlist/' + username)

  return result
}

export function postComment(id, comment) {
  let result = post('/api/submitComment', {
    id: id,
    comment: comment
  })

  return result
}