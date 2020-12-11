import { InputGroup, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Search from '../../assets/icons/search'

const SearchBar = ({ onChange }) => (
  <InputGroup onChange={e => onChange && onChange(e)}>
    <InputGroup.Prepend>
      <InputGroup.Text>
        <Search />
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Search"
      aria-label="Search"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
)

SearchBar.propTypes = {
  onChange: PropTypes.func
}

SearchBar.defaultProps = {
  onChange: () => { }
}

export default SearchBar
