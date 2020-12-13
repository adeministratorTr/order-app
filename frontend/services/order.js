import { API_URL_LIST } from '../constants/url-list'

export const getOrders = () =>
  fetch(`${process.env.BASE_API_URL}${API_URL_LIST.ORDERS}`)
    .then(resp => resp.json())
    .then(result => result)
    .catch(error => error)
