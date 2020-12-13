import { PAGE_URL_LIST } from '../constants/url-list'

export const setPageFromUrl = (url) => {
  if (url === PAGE_URL_LIST.INDEX) return 'index'
  return url.substring(url.lastIndexOf('/') + 1)
}
