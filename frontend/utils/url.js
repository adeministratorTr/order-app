import { PAGE_URL_LIST } from '../constants/url-list'

export const setPageFromUrl = (url) => {
  if (!url || url.length === 0) return 'undefined' //  can be changed
  if (url === PAGE_URL_LIST.INDEX) return 'index'
  return url.substring(url.lastIndexOf('/') + 1)
}
