import React from 'react';
import PropTypes from 'prop-types';
import './search.css';

const Search = (props) => (
  <form
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <input
      ref={props.setRef}
      type="text"
      placeholder={'Busca tu video favorito'}
      className="Search-input"
      name="search"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
);

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Search;
