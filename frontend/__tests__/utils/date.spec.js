import { getDate } from '../../utils/date'

describe('utils/date tests', () => {
  it('getDate should return time in YYYY-MM-DD format', () => {
    const testDate = "2020-07-19T21:00:00.000Z"
    const expectedResult = '2020-07-19'
    expect(getDate(testDate)).toEqual(expectedResult)
  })

  it('getDate should return not a valid date when time doesnt exist', () => {
    const testDate = null
    const expectedResult = 'No date'
    expect(getDate(testDate)).toEqual(expectedResult)
  })
})