import { get } from '../get'

export function getOrderListData(username) {
  let result = get('/api/orderlist/' + username)

  return result
}