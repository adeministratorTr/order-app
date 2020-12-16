import { render, fireEvent } from '@testing-library/react'

import SearchBar from '../../components/searchBar'

describe('components/SearchBar tests', () => {
  it('should render default', () => {
    const { getByLabelText } = render(<SearchBar />)
    const searchBar = getByLabelText('search-bar-input')
    expect(searchBar).toBeDefined()
    expect(searchBar.value).toBe('')
    expect(searchBar.placeholder).toBe("Search")
  })

  it('should render new value', () => {
    const onChangeMock = jest.fn()
    const { getByLabelText } = render(<SearchBar onChange={onChangeMock} />)
    const searchBar = getByLabelText('search-bar-input')
    const searchBarText = 'my orders'

    expect(searchBar.value).toBe('')
    fireEvent.change(searchBar, { target: { value: searchBarText } })
    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(searchBar.value).toBe(searchBarText)
  })
})
