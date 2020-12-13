import { PAGE_URL_LIST } from '../../constants/url-list'
import { setPageFromUrl } from '../../utils/url'

describe('utils/url tests', () => {
  it('setPageFromUrl should return index when url is main page', () => {
    const testUrl = PAGE_URL_LIST.INDEX
    const expectedResult = 'index'
    expect(setPageFromUrl(testUrl)).toEqual(expectedResult)
  })

  it('setPageFromUrl should return page name after last / in url', () => {
    const testUrl = PAGE_URL_LIST.ORDER_DETAIL
    const expectedResult = 'order-detail'
    expect(setPageFromUrl(testUrl)).toEqual(expectedResult)
  })

  it('setPageFromUrl should return undefined when url is not valid', () => {
    const testUrl = null
    const expectedResult = 'undefined'
    expect(setPageFromUrl(testUrl)).toEqual(expectedResult)
  })
})
