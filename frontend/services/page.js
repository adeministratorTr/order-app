import { API_URL_LIST } from '../constants/url-list'

export const pageView = (pageName) => {
  const params = new URLSearchParams()
  params.append('path', pageName)
  const url = `${process.env.BASE_API_URL}${API_URL_LIST.PAGE_VIEW}?${params}`
  return fetch(url, {
    method: 'POST',
  })
    .then(resp => resp.json())
    .then(result => result)
    .catch(error => error)
}
